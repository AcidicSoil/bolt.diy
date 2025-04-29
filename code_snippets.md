# Code Snippets from the Exported Conversation

## Directory Structure for `idt research` Module

```
indydevtools/
└── research/
    ├── __init__.py
    ├── prompts/
    │   ├── research_prompt_pack.json  # Modular prompt templates
    ├── chunker.py                     # Chunk large documents intelligently
    ├── research_runner.py             # Core engine: loads prompt, chunks document, sends to model
    ├── summarizer.py                  # Optional: Summarize chunked results
    └── cli.py                         # CLI commands exposed via idt
```

## Example CLI Commands

```bash
# List available prompts
idt research list

# Start research using a preset prompt and a document
idt research start --prompt "Efficient Chunking" --document research_paper.pdf

# Summarize outputs
idt research summarize --folder ./outputs
```

## Refined Interactive CLI Design

```bash
idt research
```

## Interactive Workflow Example

```plaintext
$ idt research

Welcome to Research Mode.

[1] Select Research Prompt:
    1) Efficient Chunking Strategies
    2) Speculative Decoding Optimization
    3) Multi-Turn Research Agents
    4) Scaling Local Research Infrastructures
> [User selects 2]

[2] Upload or Specify Document:
    Enter path to document: /path/to/bigpaper.pdf

[3] Document exceeds 16K tokens. Chunk automatically? (Y/n)
> [User selects Y]

[4] Ready to Begin Research:
    Prompt: Speculative Decoding Optimization
    Document: bigpaper.pdf (chunked)
Confirm to start? (Y/n)
> [User selects Y]

[5] Research Underway...
    Chunk 1/4... Done
    Chunk 2/4... Done
    Chunk 3/4... Done
    Chunk 4/4... Done

[6] Save Results As:
    1) Markdown Report
    2) JSON Structured Output
    3) Plain Text Summary
> [User selects 1]

[7] Research Complete.
Output saved to: ./outputs/speculative_decoding_research_report.md
```

## Revised Minimal File Structure

```
indydevtools/
└── research/
    ├── __init__.py
    ├── interactive_session.py   # Handles full research flow
    ├── prompts/
    │   ├── research_prompt_pack.json
    ├── chunker.py
    ├── document_loader.py        # Small helper for loading/validating docs
    └── cli.py                    # Single entrypoint: idt research
```

## CLI Pseudocode

```python
# cli.py
import click
from .interactive_session import start_research_flow

@click.group()
def research():
    """Run an interactive research assistant session."""
    start_research_flow()
```

## Visual Maps and Diagrams

```
Stage 1 — Lightweight Mode (Default for All Users)
──────────────────────────────────────────────────────
[ Bolt.diy Frontend ]
  └── [ Visual Agent Builder + Process Map ]
            |
            ↓
[ Basic Memory Storage (local, minimal) ]
(Just simple save/load of basic project context)
──────────────────────────────────────────────────────

Stage 2 — Structured Workflow Mode (Optional Upgrade)
──────────────────────────────────────────────────────
[ Bolt.diy Frontend ]
  └── [ Enable "Structured Mode" ]
            |
            ↓
[ Cursor Memory Bank Activated ]
  └── Tracks VAN ➔ PLAN ➔ CREATIVE ➔ IMPLEMENT phases
            |
            ↓
[ Visual Journey Maps Generated ]
──────────────────────────────────────────────────────

Stage 3 — Vibe Check Mode (Optional Sanity Layer)
──────────────────────────────────────────────────────
[ Cursor Memory Bank ]
      |
      ↓
[ Vibe Check MCP Server ]
  └── Interrupts ONLY at major phase transitions
  └── Suggests course correction if spiraling or misaligned
──────────────────────────────────────────────────────

Stage 4 — Approval Mode (Strict QA Mode)
──────────────────────────────────────────────────────
[ Memory Bank Phase Output ]
      |
      ↓
[ LLManager Agent ]
  └── Formally Approves/Rejects phase artifacts
  └── Forces higher quality checkpoints if activated
──────────────────────────────────────────────────────

Stage 5 — Full Collaboration Mode (Team/Power User Level)
──────────────────────────────────────────────────────
[ Agent Actions / Research Outputs / Build Flows ]
      |
      ↓
[ Agent Inbox UI ]
  └── All major decision points routed into inbox
  └── Human users approve, edit, reject dynamically
──────────────────────────────────────────────────────

Execution Layer
──────────────────────────────────────────────────────
[ just-prompting MCP Server ]
  └── Multi-LLM Dispatching
      (For Research, Building, Reasoning, Testing)
[ OpenManus Orchestration Option ]
  └── (Deploy agents end-to-end with Docker/FastAPI if needed)
──────────────────────────────────────────────────────
```

## User Journey Path

```plaintext
Level 1: "Tinker Mode" 
    ➔ Visual Build Only
    ➔ Save Simple Drafts
    ➔ No interruptions

Level 2: "Structured Builder Mode"
    ➔ Enable Phase Awareness (VAN ➔ PLAN ➔ CREATIVE ➔ IMPLEMENT)
    ➔ Memory Trails Begin
    ➔ Lightweight Visual Prompts (e.g., "Ready to PLAN?")

Level 3: "Sanity Mode"
    ➔ Vibe Check Activated at Phase Endpoints
    ➔ Friendly pattern interrupt if misalignment detected

Level 4: "Quality Mode"
    ➔ LLManager Approval at Phase End
    ➔ Must pass Approval Criteria to proceed

Level 5: "Command Center Mode"
    ➔ Agent Inbox Handling All Interrupts
    ➔ Human-in-the-loop full reviews, approvals, edits
```

## Data/Memory Flow Across Subsystems

```plaintext
[ User Designs Visual Agent ]
          |
          v
[ Temporary Working Memory ]
          |
          v
(If Structured Mode Enabled)
[ Cursor Memory Bank Saves Phase Logs ]
          |
          v
(If Vibe Check Enabled)
[ Vibe Check MCP Challenges Phase Output ]
          |
          v
(If QA Mode Enabled)
[ LLManager Reviews and Approves/Rejects ]
          |
          v
(If Inbox Mode Enabled)
[ Agent Inbox Queues Actions for Human Review ]
          |
          v
[ Final Output for Execution / Deployment ]
```

## Cognitive Interaction Model

```plaintext
[ THINK ➔ PLAN ➔ CREATE ➔ CHECK ➔ REFINE ➔ EXECUTE ]
   (Cursor Memory Bank)    (Vibe Check MCP)    (LLManager + Agent Inbox)

- THINK: Ideate freely.
- PLAN: Set strategies and steps.
- CREATE: Design/build components.
- CHECK: Pattern-interrupt sanity validation.
- REFINE: Formal approval and human edits.
- EXECUTE: Dispatch using LLMs or deploy via OpenManus.
```

## Component Interdependency Map

```plaintext
Frontend (Bolt.diy Visual Builder)
 ├─ Cursor Memory Bank (Phase Tracking)
 │    ├─ Vibe Check MCP Server (Pattern Interrupts)
 │    │    └─ LLManager (Formal QA Approval)
 │    │         └─ Agent Inbox (Human Review Buffer)
 │    │              └─ just-prompting (Dispatch to multiple LLMs)
 │    │                   └─ OpenManus (Deployment-ready orchestration)
```

## Phase Transition Validation Flow

```plaintext
VAN → PLAN
    ✦ Optional Vibe Check after PLAN phase defined
    ✦ Approve/Revise strategy

PLAN → CREATIVE
    ✦ Optional Vibe Check after creative options brainstormed
    ✦ Encourage multiple possibilities, prevent tunnel vision

CREATIVE → IMPLEMENT
    ✦ Critical Vibe Check + LLManager Approval
    ✦ Filter out infeasible/dangerous designs

IMPLEMENT → LAUNCH
    ✦ Final review in Agent Inbox
    ✦ Dispatch to just-prompting/OpenManus if approved
```
