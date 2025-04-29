# Diagrams for Bolt.diy and IndyDevTools

This directory contains Mermaid diagrams visualizing the concepts discussed in the exported conversation.

## Bolt.diy Progressive Architecture

- [Progressive Architecture Stages](progressive_architecture.md) - The five stages of the progressive architecture
- [User Journey Path](user_journey_path.md) - The user's progression through different engagement levels
- [Data/Memory Flow](data_memory_flow.md) - How data flows through the system with optional components
- [Cognitive Interaction Model](cognitive_interaction_model.md) - The THINK → PLAN → CREATE → CHECK → REFINE → EXECUTE workflow
- [Component Interdependency](component_interdependency.md) - How components depend on each other
- [Phase Transition Validation](phase_transition_validation.md) - Validation checks at each phase transition

## IndyDevTools Research Module

- [IDT Research Structure](idt_research_structure.md) - The file structure of the research module
- [Interactive Workflow](interactive_workflow.md) - The sequence of interactions in the research workflow

## Viewing the Diagrams

These diagrams are written in Mermaid markdown syntax. To view them:

1. Use a Markdown viewer that supports Mermaid (like GitHub, VS Code with Mermaid extension, or Obsidian)
2. Copy the content and paste it into an online Mermaid editor like [Mermaid Live Editor](https://mermaid.live/)
3. Use a Mermaid CLI tool to render them to images

## Example Usage

```bash
# Using mermaid-cli to generate an SVG
npx @mermaid-js/mermaid-cli -i progressive_architecture.md -o progressive_architecture.svg
```
