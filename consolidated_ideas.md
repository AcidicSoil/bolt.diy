# Consolidated Ideas from the Exported Conversation

## LM Studio Configuration Recommendations

### Context Length
- **Recommended setting**: 16,000-16,384 tokens
- **Rationale**: Balances the ability to handle long research documents while maintaining performance
- **Benefits**: Handles multi-page documents, leaves room for generation, maintains usable inference speed

### Inference Settings
- **Temperature**: 0.3 (good for factual, low-variance research outputs)
- **Top K Sampling**: 20-30 (tighter focus for knowledge work)
- **Top P Sampling**: 0.95 (wide enough for flexibility but still disciplined)
- **Min P Sampling**: 0.05 (conservative sampling favoring high-probability outputs)
- **Repeat Penalty**: 1.1 (mild penalty to avoid repetition without hurting flow)
- **Context Overflow**: "Stop at Limit" (ensures no hidden information loss)

### Hardware-Specific Considerations (AMD RX 6750 XT)
- **VRAM Usage**: 12GB is sufficient for Qwen2.5-7B at 16K context with 512 batch size
- **Flash Attention**: Leave OFF (not well-optimized for AMD GPUs)
- **GPU Offload**: Full offload (28/28 layers) is appropriate
- **Driver Layer**: Use Vulkan backend (default for AMD GPUs)

## Document Processing Strategy

### Semantic Block Chunking
- **Goal**: Split large texts into logical blocks (~14K-15K tokens max per chunk)
- **Process**:
  1. Preprocess text into semantic units (split by sections/headings)
  2. Tokenize and size-check each block (aim for 12K-15K tokens per chunk)
  3. Handle overlaps if necessary (carry last paragraph into next chunk)
  4. Add chunk labels for context
  5. Load sequentially into LM Studio

### Research Assistant Loading Protocol
- **Objective**: Smoothly process long research documents through LM Studio
- **Steps**:
  1. Clean text (remove metadata, artifacts)
  2. Split text by headings and paragraphs
  3. Chunk content to target size (12,000-15,000 tokens)

## Research Prompt Framework

### Research Prompt Pack
- Four structured research prompts covering:
  1. Model Optimization Techniques for Research-Heavy Tasks
  2. Efficient Document Ingestion and Chunking Strategies for LLMs
  3. Best Practices for Building Multi-Turn Research Agents
  4. Emerging Best Practices for Scalable Research Infrastructures

### Priority Roadmap
- Recommended sequence: Optimize → Ingest → Build Memory → Scale Infrastructure
- Focus on foundational model optimization first, then document ingestion, followed by memory-aware agents, and finally infrastructure scaling

## Integration with IndyDevTools

### Proposed Module Structure
- Interactive research workflow with one command (`idt research`)
- Components:
  - Prompt selection from research prompt pack
  - Document loading and chunking
  - Research execution
  - Output formatting and saving

### Integration with Prompt Wizard
- Flow: IndyDevTools → Prompt Wizard → LLM Execution Engine
- Enhances research prompts before execution
- Optionally saves results for future reference

## Bolt.diy Progressive Architecture

### Component Integration
- **vibe-check-mcp-server**: Cognitive sanity filter to prevent overengineering
- **cursor-memory-bank**: Structured memory for build phases
- **llmanager**: Quality approval gatekeeper
- **just-prompting**: Multi-model LLM dispatcher
- **agent-inbox**: Human-in-the-loop dashboard
- **OpenManus**: Backend template for multi-agent systems

### Progressive User Experience
1. **Tinker Mode**: Visual building with minimal interruptions
2. **Structured Builder Mode**: Phase-aware development (VAN → PLAN → CREATIVE → IMPLEMENT)
3. **Sanity Mode**: Vibe Check activated at phase endpoints
4. **Quality Mode**: Formal approval with LLManager
5. **Command Center Mode**: Full human oversight via Agent Inbox

### Design Philosophy
- Simple by default, depth available on demand
- Progressive disclosure of complexity
- Opt-in advanced features
- Layered architecture that grows with user needs

This architecture creates a self-correcting, memory-driven creative system that balances flexibility with resilience, resulting in less hallucination, less wasted build time, and more aligned outputs.
