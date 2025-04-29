# Affine Alternatives for Productivity


## Project Theme Mapping

| Bolt DIY Element | Best Matched Tool |
| --- | --- |
| Memory Bank / Phase Narratives | Reflect Notes / Logseq |
| Interactive Workflow/Diagrams | Tana (dynamic linking) |
| Documentation + Scratch Building | Anytype |
| Idea Growth & Prototyping | Capacities / Supernotes |
| Offline-first Critical Layering | Anytype |

## Integration Workflow (Anytype + Excalidraw → Bolt DIY)

### 1. Idea Capture — Anytype
- Create Atomic Note (one idea per note)
- Tag to Phase (Discovery, Research, Planning, Building, Scaling)
- Link to related notes

> Think modular. Build knowledge webs.

### 2. Visual Sketch — Excalidraw
- Draft rough diagram (mindmap, system map, workflow)
- Save `.excalidraw` file
- (Optional) Export `.svg` for visuals

> Visualize systems. Keep flexible and lightweight.

### 3. Validation — Flow Gate Checklist
- Clear Title & Purpose
- Atomic Focus
- Linked or Logical
- Confidence Level > 70%
- Naming Clean (slug-style)

> Only promote mature ideas. Protect system memory.

### 4. System Commit — Bolt DIY
- Text → `/cursor-memory-bank/`
- Diagrams → `/diagrams/early_sketches/` → `/final_maps/`
- Version Control (Git Commit)

> Structure only what deserves to be structured.

## Flow Gate Checklist

### For Anytype Notes:
- **Phase Tag Applied:** (Discovery, Research, Planning, Building, Scaling)
- **Title is Clear:** Describes the idea or decision in one strong sentence
- **Atomic:** Focused on one key concept or logical cluster
- **Linked:** Has at least one meaningful link to another note or object
- **Confidence Level > 70%:** You believe the note captures a sound foundation worth building on

### For Excalidraw Diagrams:
- **Has a Clear Purpose:** (Mindmap? System Map? User Journey? Workflow?)
- **Logical Layout:** Flow is understandable without outside explanation
- **Minimal Distraction:** Sketchy OK, but no confusing excess
- **Saved in Both:** `.excalidraw` (source) + `.svg` (optional export for visual integration)
- **Versioned if Iterated:** If you redraw, save as `diagram-name_v2.excalidraw`, etc.

### Before Promotion to Bolt DIY:
- **Phase Matched:** Ready content is slotted under correct Bolt DIY Phase
- **Reviewed (Solo or Team):** You've sanity-checked that it's not a half-formed idea
- **Commit Reason Identified:** Why am I locking this into system memory?
- **Naming Convention Clean:** Folders/files use slug-style: `phase2_user_flow_map.excalidraw`, etc.

## Operational Best Practices

### Capture Phase (Anytype)
- **Atomic First:** Break ideas into the smallest meaningful units
- **Phase Tag Early:** Always tag notes immediately
- **Link Boldly:** Build webs of related knowledge — ideas should connect or be challenged

### Visualization Phase (Excalidraw)
- **Draft Fast, Think Clear:** Focus on conveying logical flow, not polished aesthetics
- **Save in Both Formats:** `.excalidraw` (source) always; `.svg` optionally for clean visuals
- **Label, Not Explain:** Diagrams should largely explain themselves via labels and flows

### Validation Phase (Flow Gate)
- **Checklist Discipline:** Never skip the Flow Gate
- **Delay Promotion:** If uncertain, keep working inside Anytype/Excalidraw

### Promotion Phase (Bolt DIY)
- **Slugify Everything:** Use clean, lowercased, hyphenated file names
- **Folder Respect:** Diagrams in `/diagrams/`, notes in `/cursor-memory-bank/`
- **Commit With Reason:** Every commit into Bolt DIY memory must have a "why now" justification

## Guiding Principle

> "Capture lightly, connect deeply, commit only when clarity demands."

## Suggested Folder Structure

```
📁 Bolt DIY
├── ⚓ Bolt DIY System Anchor
├── Phase 0 – Discovery
├── Phase 1 – Research
├── Phase 2 – Planning
├── Phase 3 – Building
└── Phase 4 – Scaling
```

### Excalidraw Folder Structure
```
/diagrams/
├── early_sketches/
├── user_flow_mocks/
└── system_maps/
```
