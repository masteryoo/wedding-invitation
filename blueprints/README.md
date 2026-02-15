# Blueprint System — Start Here

A portable system for building software projects with AI + human collaboration.
Hand this folder to any AI coding assistant and they can execute a project correctly —
knowing what to build, when to stop and ask, and how to track every piece.

---

## How It Works (The House Metaphor)

Every project is a **house**:

```
  ┌──────────────────────────────┐
  │  FLOOR 3: Polish & Ship      │  ← Build last
  ├──────────────────────────────┤
  │  FLOOR 2: Build Features     │  ← Build second
  ├──────────────────────────────┤
  │  FLOOR 1: Foundation & Setup  │  ← Build first
  ├──────────────────────────────┤
  │  FLOOR 0: Ground Survey      │  ← Do this BEFORE anything
  └──────────────────────────────┘
```

- **Floors** = phases of the project (build bottom-up, never skip)
- **Rooms** = individual tasks within a phase (small, trackable pieces)
- **Human Gates** = checkpoints where the human reviews before AI continues

### Two Types of Houses

```
  TYPE A: STANDALONE               TYPE B: AI-INTEGRATED
  AI builds it, then leaves.       AI builds it AND lives inside.

  ┌──────────────────┐             ┌──────────────────┐
  │   Runs without   │             │  ┌────────────┐  │
  │   AI. Human      │             │  │ AI lives   │  │
  │   maintains it.  │             │  │ here       │  │
  └──────────────────┘             │  └────────────┘  │
                                   └──────────────────┘
  Examples:                        Examples:
  Website, CLI tool,               Chatbot, AI search,
  mobile app, CRUD app             content generator
```

The Ground Survey (Floor 0) forces you to choose. AI-Integrated projects
require extra rooms for prompts, fallbacks, cost monitoring, and safety.

---

## Quick Start: New Project in 5 Steps

### Step 1: Read the Rules
Open `RULES.md` and read the 15 standing orders. These always apply.

### Step 2: Do the Ground Survey (Floor 0)
Copy `templates/ground-survey.md` into your project folder.
Fill it out: AI limitations, tool selection, risk map, crew plan, building type.
**Stop. Human reviews and approves.**

### Step 3: Create the Blueprint
Copy `templates/project-blueprint.md` into your project folder.
Draw your house: floors, rooms, done-checklists.
**Stop. Human reviews and approves.**

### Step 4: Set Up the Tracker
Copy `templates/room-tracker.md` into your project folder.
Fill in the house diagram and room table to match your blueprint.

### Step 5: Build, Room by Room
- Pick a room on Floor 1
- Build it
- Update the tracker ([ ] → [x])
- When the floor is done, fill out `templates/review-checklist.md`
- **Stop. Human reviews the floor.**
- Move to the next floor. Repeat.

---

## What's in This Folder

```
blueprints/
│
├── README.md                ← You are here
├── RULES.md                 ← 15 standing orders (read first, always)
│
├── templates/
│   ├── ground-survey.md     ← Floor 0: limits, tools, risks, crew, building type
│   ├── project-blueprint.md ← The main plan (floors + rooms)
│   ├── room-tracker.md      ← Visual progress dashboard
│   ├── review-checklist.md  ← Human review gate (per floor)
│   └── closing-report.md   ← When done: summary, lessons, archive
│
└── examples/
    └── example-todo-app.md  ← A worked example showing the full lifecycle
```

---

## Got an Existing Project? Run Diagnostics First

If you already have a project and want to check its health:

1. Copy `../diagnostics.md` into the project folder (it lives outside blueprints/)
2. AI scans the project and fills out the checks (Steps 1-3)
3. **Stop. Human reviews the diagnosis.**
4. Choose a path:
   - **Healthy (13-16)?** Minor tune-ups only
   - **Needs Repair (9-12)?** Retrofit blueprints onto existing code (Step 7)
   - **Fragile (5-8)?** Partial rebuild — keep what works, redo the rest (Step 6)
   - **Rebuild (0-4)?** Start fresh with blueprints, salvage knowledge not code (Step 6)

---

## For AI Teams: How to Use This

If you're an AI assistant and someone gave you this folder:

1. **Read `RULES.md` first.** These are your standing orders.
2. **For a new project:** Follow the 5 steps above.
3. **For an existing project:** Find the `room-tracker.md` in the project folder. Look at the house diagram to see where things stand. Pick up from the current room.
4. **Always ask before major decisions.** Items marked `[?]` in the tracker mean STOP and get human input.
5. **Update the tracker after every room.** This is how the human knows progress.

---

## For Humans: How to Use This

1. **Describe what you want** in plain English — the AI handles the rest
2. **Review at every gate** — don't rubber-stamp, actually check
3. **Mark decisions clearly** — Approved / Needs Changes / Rejected
4. **If something feels wrong, say so** — better to fix early than late
5. **You own the "ship it" decision** — AI never deploys without your say

---

## When You're Done (Blueprint Lifecycle)

When all rooms are `[x]` and all floors are reviewed:

1. AI fills out `templates/closing-report.md` — summary, decisions, lessons learned
2. Human reviews and approves the closing report
3. Move all blueprint files to `project/archive/blueprints/`
4. The Closing Report stays in the project root as the permanent "as-built" record

**If you need to change the project later:**
Pull the archived blueprints, run `diagnostics.md`, then plan the changes.

---

## Principles

- **Simple over clever** — if a high schooler can't follow it, simplify
- **Foundations first** — never skip floors
- **Track everything** — if it's not in the tracker, it didn't happen
- **Ask, don't guess** — when in doubt, stop and ask the human
- **Less is more** — the minimum amount of work to achieve the goal
