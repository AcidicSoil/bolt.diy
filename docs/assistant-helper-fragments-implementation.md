# Implementing Fragments-like Functionality in Assistant Helper

This document summarizes the implementation approach for adding fragments-like code execution functionality to an assistant helper in the bolt.diy project. This functionality will be used during reflection steps to improve the quality of AI-generated code before passing it back to the main assistant.

## Table of Contents

1. [Overview](#overview)
2. [Implementation Approach](#implementation-approach)
3. [Directory Structure](#directory-structure)
4. [Core Components](#core-components)
5. [Integration with Main Assistant](#integration-with-main-assistant)
6. [Development Best Practices](#development-best-practices)
7. [Code Examples](#code-examples)

## Overview

The goal is to implement functionality similar to the [fragments](https://github.com/AcidicSoil/fragments) repository within the bolt.diy project. This will allow the assistant helper to:

1. Generate code based on user prompts
2. Execute the generated code in a secure environment
3. Evaluate the results and fix any issues
4. Return improved code to the main assistant

This approach leverages bolt.diy's existing WebContainer technology rather than introducing the E2B SDK used in fragments.

## Implementation Approach

We'll use bolt.diy's existing WebContainer infrastructure to implement code execution capabilities. This approach:

- Leverages mature, tested technology already in the codebase
- Reduces integration complexity and potential security concerns
- Maintains consistency in how code is executed throughout the application
- Avoids introducing additional external dependencies

## Directory Structure

```
app/
└── lib/
    └── assistant-helper/
        ├── index.ts                 # Main entry point
        ├── reflection.ts            # Core reflection functionality
        ├── templates.ts             # Framework templates
        ├── execution.ts             # Code execution logic
        ├── evaluation.ts            # Output evaluation
        ├── integration.ts           # Integration with main assistant
        └── __tests__/               # Unit tests
```

## Core Components

### Reflection Environment

The core component that handles code execution and evaluation:

```typescript
// app/lib/assistant-helper/reflection.ts
import { webcontainer } from '~/lib/webcontainer';
import type { WebContainer } from '@webcontainer/api';
import { BoltShell } from '~/utils/shell';
import { frameworkTemplates } from './templates';

export interface ReflectionResult {
  success: boolean;
  output: string;
  errors?: string[];
  suggestions?: string[];
}

export class ReflectionEnvironment {
  private webcontainerInstance: WebContainer | null = null;
  private shell: BoltShell | null = null;
  
  async initialize() {
    this.webcontainerInstance = await webcontainer;
    this.shell = new BoltShell();
    await this.shell.ready();
    return this;
  }
  
  async executeCode(code: string, language: string, framework?: string): Promise<ReflectionResult> {
    if (!this.webcontainerInstance) {
      throw new Error('Reflection environment not initialized');
    }
    
    // Implementation details for code execution
    // ...
    
    return {
      success: true,
      output: 'Code executed successfully'
    };
  }
}
```

### Framework Templates

Templates for different programming frameworks:

```typescript
// app/lib/assistant-helper/templates.ts
export interface FrameworkTemplate {
  files: Record<string, string>;
  setupCommands: string[];
  testCommand?: string;
  port?: number;
}

export const frameworkTemplates: Record<string, FrameworkTemplate> = {
  'react': {
    files: {
      'package.json': `{
        "name": "react-test",
        "dependencies": {
          "react": "^18.2.0",
          "react-dom": "^18.2.0",
          "vite": "^5.0.0"
        },
        "scripts": {
          "dev": "vite",
          "test": "vitest run"
        }
      }`,
      'index.html': `<!DOCTYPE html>
        <html>
          <body>
            <div id="root"></div>
            <script type="module" src="./index.jsx"></script>
          </body>
        </html>`
    },
    setupCommands: ['npm install'],
    testCommand: 'npm test',
    port: 5173
  },
  'vue': {
    // Vue template configuration
    files: {/* ... */},
    setupCommands: ['npm install'],
    port: 5173
  },
  'python': {
    // Python template configuration
    files: {/* ... */},
    setupCommands: ['pip install -r requirements.txt'],
    port: 8000
  }
};
```

### Code Execution Logic

```typescript
// app/lib/assistant-helper/execution.ts
import { ReflectionEnvironment } from './reflection';
import { frameworkTemplates, type FrameworkTemplate } from './templates';
import path from 'path-browserify';

export async function setupEnvironment(
  webcontainer: WebContainer, 
  framework: string
): Promise<boolean> {
  const template = frameworkTemplates[framework];
  
  if (!template) {
    throw new Error(`Unknown framework: ${framework}`);
  }
  
  // Create template files
  for (const [filePath, content] of Object.entries(template.files)) {
    const dirPath = path.dirname(filePath);
    
    if (dirPath !== '.') {
      await webcontainer.fs.mkdir(dirPath, { recursive: true });
    }
    
    await webcontainer.fs.writeFile(filePath, content);
  }
  
  // Run setup commands
  for (const command of template.setupCommands) {
    const process = await webcontainer.spawn('sh', ['-c', command]);
    const exitCode = await process.exit;
    
    if (exitCode !== 0) {
      return false;
    }
  }
  
  return true;
}
```

## Integration with Main Assistant

```typescript
// app/lib/assistant-helper/integration.ts
import { ReflectionEnvironment } from './reflection';

export interface EnhancementOptions {
  executeCode?: boolean;
  validateOutput?: boolean;
  framework?: string;
}

export async function enhanceWithReflection(
  prompt: string, 
  initialResponse: string,
  options: EnhancementOptions = {}
): Promise<string> {
  const reflectionEnv = new ReflectionEnvironment();
  await reflectionEnv.initialize();
  
  // Extract code blocks from response
  const codeBlocks = extractCodeBlocks(initialResponse);
  
  // Process each code block
  const enhancedBlocks = await Promise.all(
    codeBlocks.map(async (block) => {
      if (options.executeCode) {
        const result = await reflectionEnv.executeCode(
          block.code,
          block.language,
          options.framework
        );
        
        if (!result.success) {
          // Fix issues based on execution results
          return await fixCodeIssues(block, result);
        }
      }
      
      return block;
    })
  );
  
  // Replace original code blocks with enhanced ones
  return replaceCodeBlocks(initialResponse, codeBlocks, enhancedBlocks);
}

// Helper functions
function extractCodeBlocks(text: string) {/* ... */}
function replaceCodeBlocks(text: string, originalBlocks: any[], newBlocks: any[]) {/* ... */}
async function fixCodeIssues(block: any, result: any) {/* ... */}
```

## Development Best Practices

### Branching Strategy

1. Create a feature branch from main:
   ```bash
   git checkout main
   git pull origin main
   git checkout -b feature/assistant-helper-reflection
   ```

2. Make atomic commits with clear messages:
   ```bash
   git add app/lib/assistant-helper/reflection.ts
   git commit -m "feat(assistant-helper): Add basic reflection module structure"
   ```

3. Create a detailed pull request when ready for review

### Testing Strategy

1. **Unit Tests**:
   ```typescript
   // app/lib/assistant-helper/__tests__/reflection.test.ts
   import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
   import { ReflectionEnvironment } from '../reflection';

   // Mock WebContainer
   vi.mock('~/lib/webcontainer', () => ({
     webcontainer: Promise.resolve({
       fs: {
         writeFile: vi.fn(),
         mkdir: vi.fn(),
       },
       spawn: vi.fn(),
     }),
   }));

   describe('ReflectionEnvironment', () => {
     let reflectionEnv: ReflectionEnvironment;
     
     beforeEach(async () => {
       reflectionEnv = new ReflectionEnvironment();
       await reflectionEnv.initialize();
     });
     
     it('should execute code successfully', async () => {
       const result = await reflectionEnv.executeCode(
         'console.log("Hello, world!");', 
         'javascript'
       );
       
       expect(result.success).toBe(true);
     });
     
     // More tests...
   });
   ```

2. **Integration Tests**:
   ```typescript
   // app/lib/assistant-helper/__tests__/integration.test.ts
   import { describe, it, expect, vi } from 'vitest';
   import { enhanceWithReflection } from '../integration';

   describe('Assistant Helper Integration', () => {
     it('should enhance response with code execution', async () => {
       const prompt = 'Create a React component that shows a counter';
       const initialResponse = '```jsx\nfunction Counter() {\n  return <div>0</div>;\n}\n```';
       
       const enhancedResponse = await enhanceWithReflection(prompt, initialResponse, {
         executeCode: true,
         framework: 'react'
       });
       
       expect(enhancedResponse).toContain('useState');
     });
   });
   ```

### Incremental Implementation

1. Start with a minimal implementation
2. Add features incrementally
3. Use feature flags to enable/disable functionality in production

```typescript
// app/lib/assistant-helper/index.ts
import { enhanceWithReflection } from './integration';

// Feature flag for assistant helper
const ENABLE_ASSISTANT_HELPER = process.env.ENABLE_ASSISTANT_HELPER === 'true';

export async function processWithAssistantHelper(prompt: string, response: string) {
  if (!ENABLE_ASSISTANT_HELPER) {
    return response;
  }
  
  try {
    return await enhanceWithReflection(prompt, response);
  } catch (error) {
    console.error('Assistant helper error:', error);
    // Fall back to original response on error
    return response;
  }
}
```

## Example Implementation in Main Assistant Flow

```typescript
// app/lib/modules/llm/manager.ts
import { processWithAssistantHelper } from '~/lib/assistant-helper';

export class LLMManager {
  // Existing code...
  
  async generateResponse(prompt: string): Promise<string> {
    // Generate initial response using LLM
    const initialResponse = await this.llm.generateText(prompt);
    
    // Process with assistant helper for reflection and improvement
    const enhancedResponse = await processWithAssistantHelper(prompt, initialResponse);
    
    return enhancedResponse;
  }
}
```

## Deployment Strategy

1. **Staged Rollout**
   - Deploy to development environment first
   - Test thoroughly in staging
   - Use feature flags to gradually roll out to production

2. **Monitoring and Metrics**
   - Add logging for assistant helper operations
   - Track success/failure rates
   - Monitor performance impact

3. **Rollback Plan**
   - Ensure feature can be disabled via feature flag
   - Have a clear rollback process if issues are detected

---

This implementation approach leverages bolt.diy's existing WebContainer technology to provide fragments-like functionality in the assistant helper, allowing it to execute and validate code during reflection steps before passing improved responses back to the main assistant.
