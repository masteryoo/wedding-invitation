# Example: Todo App — Full Blueprint

> This is a complete worked example showing every template filled out.
> Use it as a reference when creating your own blueprints.

---

# PART 1: Ground Survey (Floor 0)

**Project Name:** Simple Todo App
**Date:** 2026-02-14
**Human Lead:** Oliver

---

## Check 1: AI Limitation Scan

```
┌──────────────────────────────────────────────────────────────┐
│                    AI LIMITATION SCAN                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What AI CAN do well on this project:                        │
│  • Write all the HTML, CSS, and JavaScript code              │
│  • Set up the project structure and files                    │
│  • Implement CRUD operations (create, read, update, delete)  │
│                                                              │
│  What AI CANNOT do (human must handle):                      │
│  • Decide the visual design / color scheme                   │
│  • Decide where to host it (if anywhere)                     │
│  • Decide if data should persist (localStorage vs server)    │
│                                                              │
│  What AI might get WRONG (needs extra review):               │
│  • Edge cases in the UI (empty states, long text, etc.)      │
│  • Accessibility (screen readers, keyboard nav)              │
│                                                              │
│  Best approach given these limits:                           │
│  → Keep it simple: vanilla HTML/CSS/JS, no framework         │
│  → Use localStorage for persistence (no server needed)       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Check 2: Tool & Approach Selection

```
┌──────────────────────────────────────────────────────────────┐
│               TOOL & APPROACH SELECTION                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What's the simplest tool/approach that solves this?         │
│  → Single HTML file with embedded CSS and JS                 │
│                                                              │
│  Existing libraries/frameworks that do 80% of the work?      │
│  → None needed — this is simple enough for vanilla code      │
│                                                              │
│  Build vs. Buy decision:                                     │
│  → Build — it's a learning project, simplicity matters       │
│                                                              │
│  What tools does the human already know/prefer?              │
│  → HTML/CSS/JS basics, VS Code                               │
│                                                              │
│  Chosen stack:                                               │
│  → Language:    HTML, CSS, JavaScript                        │
│  → Framework:   None (vanilla)                               │
│  → Database:    localStorage (browser built-in)              │
│  → Hosting:     Open the HTML file locally (no server)       │
│  → Other tools: None                                         │
│                                                              │
│  Why this stack?                                             │
│  → Zero setup. One file. Works everywhere. Human can learn.  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Check 3: Risk Map

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           RISK MAP                                       │
├──────────────────────┬────────┬────────────┬─────────────────────────────┤
│ RISK                 │ IMPACT │ LIKELIHOOD │ MITIGATION (Plan B)         │
├──────────────────────┼────────┼────────────┼─────────────────────────────┤
│ Scope creep (add     │   M    │     H      │ Strict: only add/check/     │
│ features beyond plan)│        │            │ delete. Nothing else.       │
├──────────────────────┼────────┼────────────┼─────────────────────────────┤
│ AI overcomplicates   │   M    │     M      │ Keep it to 1 file, < 200   │
│ the code             │        │            │ lines total                 │
├──────────────────────┼────────┼────────────┼─────────────────────────────┤
│ localStorage gets    │   L    │     L      │ It's a demo — data loss is  │
│ cleared              │        │            │ acceptable                  │
└──────────────────────┴────────┴────────────┴─────────────────────────────┘
```

```
┌──────────────────────────────────────────────────────────────┐
│  BIGGEST RISK:                                               │
│  → Scope creep — adding filters, categories, due dates, etc. │
│                                                              │
│  EARLY WARNING SIGN:                                         │
│  → If the human or AI suggests "wouldn't it be cool if..."   │
│                                                              │
│  IF IT HAPPENS, WE WILL:                                     │
│  → Say "that's a Floor 4 idea" and write it down for later   │
└──────────────────────────────────────────────────────────────┘
```

## Check 4: Crew Plan

```
┌──────────────────────────────────────────────────────────────┐
│                        CREW PLAN                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  PROJECT SIZE:                                               │
│  → Total estimated rooms: 5                                  │
│  → Small (1-5): SMALL                                        │
│                                                              │
│  CHOSEN CREW SIZE: 1 (solo)                                  │
│                                                              │
│  WHY SOLO:                                                   │
│  → Only 5 rooms — coordination overhead would slow us down   │
│  → All rooms are sequential or near-sequential               │
│  → One file project — multiple agents would conflict         │
│                                                              │
│  AGENT ROLES:                                                │
│  ┌─────────────┬───────────────────┬───────────────────────┐ │
│  │ Who         │ Role              │ Owns Which Rooms?     │ │
│  ├─────────────┼───────────────────┼───────────────────────┤ │
│  │ Agent 1     │ Solo Builder      │ All rooms             │ │
│  │ Human       │ Reviewer + Decider│ All [?] gates         │ │
│  └─────────────┴───────────────────┴───────────────────────┘ │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## Check 5: Building Type

```
┌──────────────────────────────────────────────────────────────┐
│                     BUILDING TYPE                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  [x] TYPE A: STANDALONE                                      │
│      AI builds it, then leaves.                              │
│      No AI in the finished product.                          │
│                                                              │
│  [ ] TYPE B: AI-INTEGRATED                                   │
│      (not applicable — this is a simple HTML/JS app)         │
│                                                              │
│  No extra AI-integrated rooms needed.                        │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Human Approval:** [x] Approved — proceed to blueprint

---

# PART 2: Project Blueprint

## What Are We Building?

**In one sentence:** A simple todo app where you can add, check off, and delete tasks.

**Why?** To test the blueprint system on a small project.

**Who is it for?** The developer (learning exercise).

**What does "done" look like?**
- [x] Can add a todo item
- [x] Can mark a todo as complete
- [x] Can delete a todo
- [x] Todos survive page refresh (localStorage)

---

## The House

```
THE HOUSE: Todo App
══════════════════════════════════════════════════════

  FLOOR 2: Polish                 ⛔ Human review after this floor
  ┌──────────┬──────────┐
  │  Style   │  Edge    │
  │  it      │  Cases   │
  │   [x]    │   [x]    │
  └──────────┴──────────┘

  FLOOR 1: Core Features          ⛔ Human review after this floor
  ┌──────────┬──────────┬──────────┐
  │  Add     │  Check   │  Delete  │
  │  Todos   │  Off     │  Todos   │
  │   [x]    │   [x]    │   [x]    │
  └──────────┴──────────┴──────────┘

  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ░░ GROUND: Floor 0 — Ground Survey [x] Done      ░░
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  LEGEND:  [x] Done   [~] In Progress   [ ] Not Started
           [!] Blocked   [?] Needs Human Decision
```

---

## Room Details

### Room: Add Todos (Floor 1)
**What to build:** Input field + button. Type text, hit enter or click, todo appears in list.
**Done when:**
- [x] Input field exists
- [x] Button or Enter key adds todo
- [x] Todo appears in a list below
- [x] Input clears after adding
**Human review needed?** No
**AI limitation:** None — straightforward

### Room: Check Off (Floor 1)
**What to build:** Click a todo to toggle it complete (strikethrough).
**Done when:**
- [x] Clicking a todo toggles strikethrough style
- [x] State saved to localStorage
**Human review needed?** No
**AI limitation:** None

### Room: Delete Todos (Floor 1)
**What to build:** Delete button on each todo.
**Done when:**
- [x] Each todo has a delete button
- [x] Clicking it removes the todo
- [x] localStorage updated
**Human review needed?** No
**AI limitation:** None

### Room: Style It (Floor 2)
**What to build:** Make it look clean and readable.
**Done when:**
- [x] Centered layout
- [x] Clean font
- [x] Completed todos look visually different
**Human review needed?** Yes — human approves the look
**AI limitation:** AI has no taste — human must decide if it looks good

### Room: Edge Cases (Floor 2)
**What to build:** Handle weird inputs.
**Done when:**
- [x] Empty input doesn't create a todo
- [x] Very long text doesn't break layout
**Human review needed?** No
**AI limitation:** AI might miss edge cases — human should test manually

---

## Dependencies

```
Add Todos → Check Off → Delete Todos (sequential, Floor 1)
                                    ↓
                              Style It + Edge Cases (parallel, Floor 2)
```

---

# PART 3: Room Tracker (Final State)

```
  Total Rooms:  5
  Done:         5 [██████████] 100%
  In Progress:  0
  Blocked:      0
  Not Started:  0
```

| Floor | Room        | Status | Notes                      | Updated    |
|-------|-------------|--------|----------------------------|------------|
| 1     | Add Todos   | [x]    | Input + button working     | 2026-02-14 |
| 1     | Check Off   | [x]    | Toggle + localStorage      | 2026-02-14 |
| 1     | Delete      | [x]    | Delete button + storage    | 2026-02-14 |
| 2     | Style It    | [x]    | Human approved the look    | 2026-02-14 |
| 2     | Edge Cases  | [x]    | Empty input + long text    | 2026-02-14 |

---

# PART 4: Closing Report

**Project Name:** Simple Todo App
**Date Completed:** 2026-02-14
**Building Type:** Standalone
**Crew:** 1 agent (solo) + human
**Total Build Time:** ~1 hour

## What Was Built

A single-file todo app (HTML + CSS + JS) that lets you add, check off, and delete
tasks. Data persists in localStorage. No dependencies, no framework, no server.

## Key Decisions Made

| Decision                  | What We Chose       | Why                                  |
|---------------------------|---------------------|--------------------------------------|
| Framework                 | None (vanilla)      | Simplest option, zero setup          |
| Persistence               | localStorage        | No server needed for a demo          |
| Scope                     | Add/check/delete only| Prevent scope creep (biggest risk)  |
| File structure            | Single HTML file    | Easiest to share and run             |

## Risk Review

| Risk We Predicted            | Did It Happen? | What We Did About It              |
|------------------------------|----------------|-----------------------------------|
| Scope creep                  | Almost         | Human wanted filters — said "Floor 4" |
| AI overcomplicates code      | No             | Stayed under 200 lines            |
| localStorage gets cleared    | No             | Acceptable risk for a demo        |

## Lessons Learned

**What went well:**
- Keeping it to 1 file eliminated all setup/config issues
- Strict scope prevented feature creep

**What to do differently next time:**
- Plan accessibility rooms from the start, not as an afterthought

## Maintenance Notes

**How to run:** Open `todo.html` in any browser.
**Known issues:** None.
**Dependencies:** None — that's the point.

## Where Are the Blueprints?

Archived at: `project/archive/blueprints/`

**Human Sign-Off:** [x] Project is DONE — archive blueprints

---

# Why This Example Works

This example shows the **full lifecycle** — from Floor 0 to Closing Report:

1. **Floor 0** caught the biggest risk (scope creep) before building started
2. **Tool selection** kept it dead simple (1 file, no framework)
3. **Crew Plan** correctly chose solo — no coordination overhead on 5 rooms
4. **Building Type** correctly marked Standalone — no AI-integrated rooms needed
5. **AI limitations** were flagged upfront (design taste, edge cases)
6. **Each room** was small enough to build and verify quickly
7. **Human gates** were placed where they matter (design review)
8. **The tracker** shows progress at a glance
9. **Closing Report** captures what was built, why, and lessons learned
10. **Blueprints archived** — project folder stays clean

**Total time to plan:** ~15 minutes
**Total rooms:** 5
**Human review gates:** 3 (Floor 0, Floor 1, Floor 2)
