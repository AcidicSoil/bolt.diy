/** @type {import('codefetch').CodefetchConfig} */

export default {
  // Output settings
  outputPath: "codefetch",
  outputFile: "codebase.md",
  maxTokens: 999_000,
  disableLineNumbers: false,
  
  // Processing options
  verbose: 1,
  projectTree: 3,
  defaultIgnore: true,
  gitignore: true,
  dryRun: false,
  
  // Token handling
  tokenEncoder: "cl100k", // Using cl100k for GPT-4 compatibility
  tokenLimiter: "truncated",
  
  // File filtering - focus on main app code
  includeDirs: ["app", "public", "electron", "scripts"],
  excludeDirs: [
    "node_modules",
    "build",
    "dist",
    ".cache",
    ".vscode",
    ".idea",
    "coverage",
    "site"
  ],
  includeFiles: [
    "package.json",
    "README.md",
    "vite.config.ts",
    "tsconfig.json",
    "uno.config.ts"
  ],
  excludeFiles: [
    "**/*.log",
    "**/.DS_Store",
    "**/npm-debug.log*",
    "**/yarn-debug.log*",
    "**/yarn-error.log*",
    "**/*lock.json",
    "**/*lock.yml",
    "**/*.lock"
  ],
  
  // AI/LLM settings - based on models used in bolt.diy
  trackedModels: [
    "chatgpt-4o-latest",
    "claude-3-5-sonnet-20241022",
    "gpt-4-turbo",
    "claude-3-opus-20240229",
    "claude-3-sonnet-20240229",
    "gemini-1.5-pro-latest",
    "deepseek-coder-v2-instruct",
    "qwen2-72b-instruct",
    "mistral-large-latest"
  ],
  
  // Prompt handling
  defaultPromptFile: undefined,
  defaultChat: "https://chat.openai.com",
  templateVars: {},
};
