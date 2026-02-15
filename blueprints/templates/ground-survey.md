# Ground Survey — Floor 0

> Complete this BEFORE planning any rooms or floors.
> This is the ground your house sits on. Skip it and everything sinks.

**Project Name:** _______________________________________________
**Date:** _______________
**Human Lead:** _______________________________________________

---

## Check 1: AI Limitation Scan

> Be honest. Knowing limits upfront prevents bad surprises later.

```
┌──────────────────────────────────────────────────────────────┐
│                    AI LIMITATION SCAN                         │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What AI CAN do well on this project:                        │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│                                                              │
│  What AI CANNOT do (human must handle):                      │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│                                                              │
│  What AI might get WRONG (needs extra review):               │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│  • ________________________________________________________  │
│                                                              │
│  Best approach given these limits:                           │
│  → ________________________________________________________  │
│  → ________________________________________________________  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Use this checklist to help identify limits:**

| Area                        | Can AI Handle It? | Notes                  |
|-----------------------------|-------------------|------------------------|
| Writing the core code       | Yes / Partly / No | ______________________ |
| Business logic decisions    | Yes / Partly / No | ______________________ |
| UX / design decisions       | Yes / Partly / No | ______________________ |
| Security-critical parts     | Yes / Partly / No | ______________________ |
| Third-party API integration | Yes / Partly / No | ______________________ |
| Testing                     | Yes / Partly / No | ______________________ |
| Performance optimization    | Yes / Partly / No | ______________________ |
| Legal / compliance          | Yes / Partly / No | ______________________ |

---

## Check 2: Tool & Approach Selection

> Don't start coding. Find the most efficient path first.

```
┌──────────────────────────────────────────────────────────────┐
│               TOOL & APPROACH SELECTION                       │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  What's the simplest tool/approach that solves this?         │
│  → ________________________________________________________  │
│                                                              │
│  Existing libraries/frameworks that do 80% of the work?      │
│  → ________________________________________________________  │
│  → ________________________________________________________  │
│                                                              │
│  Build vs. Buy decision:                                     │
│  → ________________________________________________________  │
│                                                              │
│  What tools does the human already know/prefer?              │
│  → ________________________________________________________  │
│                                                              │
│  Chosen stack:                                               │
│  → Language:    ___________________________________________  │
│  → Framework:   ___________________________________________  │
│  → Database:    ___________________________________________  │
│  → Hosting:     ___________________________________________  │
│  → Other tools: ___________________________________________  │
│                                                              │
│  Why this stack?                                             │
│  → ________________________________________________________  │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**Guiding principles:**
- Boring, proven technology > shiny new things
- What the human already knows > what's "best" on paper
- If a library does it well, don't rebuild it
- Less code = less bugs = faster delivery

---

## Check 3: Risk Map

> Identify what could go wrong BEFORE it does.

```
┌──────────────────────────────────────────────────────────────────────────┐
│                           RISK MAP                                       │
├──────────────────────┬────────┬────────────┬─────────────────────────────┤
│ RISK                 │ IMPACT │ LIKELIHOOD │ MITIGATION (Plan B)         │
├──────────────────────┼────────┼────────────┼─────────────────────────────┤
│ ____________________ │  H/M/L │   H/M/L    │ __________________________  │
│ ____________________ │  H/M/L │   H/M/L    │ __________________________  │
│ ____________________ │  H/M/L │   H/M/L    │ __________________________  │
│ ____________________ │  H/M/L │   H/M/L    │ __________________________  │
│ ____________________ │  H/M/L │   H/M/L    │ __________________________  │
└──────────────────────┴────────┴────────────┴─────────────────────────────┘
```

**Common risks to consider for every project:**
- [ ] Scope creep (project grows beyond plan)
- [ ] Wrong assumption baked in early (hard to fix later)
- [ ] Dependency on external service that changes/breaks
- [ ] AI hallucinates a solution that looks right but isn't
- [ ] Human bottleneck (too many review gates, things stall)
- [ ] Running out of time / budget
- [ ] Data loss or security breach
- [ ] Chosen tool turns out to be wrong fit

**Summary:**
```
┌──────────────────────────────────────────────────────────────┐
│  BIGGEST RISK:                                               │
│  → ________________________________________________________  │
│                                                              │
│  EARLY WARNING SIGN (how we'll know it's happening):         │
│  → ________________________________________________________  │
│                                                              │
│  IF IT HAPPENS, WE WILL:                                     │
│  → ________________________________________________________  │
└──────────────────────────────────────────────────────────────┘
```

---

## Check 4: Crew Plan

> Not every house needs a full construction crew. A shed needs one person.
> A mansion needs a team. Decide BEFORE building.

```
┌──────────────────────────────────────────────────────────────┐
│                        CREW PLAN                              │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  PROJECT SIZE:                                               │
│  → Total estimated rooms: ___                                │
│  → Small (1-5) / Medium (6-15) / Large (16+): ____________  │
│                                                              │
│  CREW SIZE GUIDE:                                            │
│  Small  → 1 agent (solo) — no coordination overhead          │
│  Medium → 1-2 agents — parallel or builder + reviewer        │
│  Large  → 2-4 agents — specialized roles, parallel floors    │
│                                                              │
│  CHOSEN CREW SIZE: ___                                       │
│                                                              │
│  AGENT ROLES:                                                │
│  ┌─────────────┬───────────────────┬───────────────────────┐ │
│  │ Who         │ Role              │ Owns Which Rooms?     │ │
│  ├─────────────┼───────────────────┼───────────────────────┤ │
│  │ Agent 1     │ Lead Builder      │ _____________________ │ │
│  │ Agent 2     │ _________________ │ _____________________ │ │
│  │ Agent 3     │ _________________ │ _____________________ │ │
│  │ Human       │ Reviewer + Decider│ All [?] gates         │ │
│  └─────────────┴───────────────────┴───────────────────────┘ │
│                                                              │
│  COORDINATION RULES:                                         │
│  • Agents NEVER edit the same file at the same time          │
│  • Each room has ONE owner — no shared ownership             │
│  • Agents update room-tracker after completing any room      │
│  • If Agent A needs Agent B's room first → mark [!] blocked  │
│  • Human resolves conflicts between agents                   │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

**When to hire more agents (go from 1 → 2+):**
- Rooms on the same floor are independent (can be built in parallel)
- The project has distinct specialties (frontend vs backend vs data)
- Speed matters and rooms don't share files

**When to stay solo (keep 1 agent):**
- Small project (< 6 rooms)
- Most rooms depend on each other (sequential anyway)
- Files overlap heavily (agents would conflict)

**When to FIRE an agent (reduce crew):**
- An agent is idle, waiting for another agent's room
- Coordination overhead > speed benefit
- Agents keep creating conflicts or duplicated work

---

## Check 5: Building Type

> Is AI just the contractor, or does AI live in the finished house?

```
┌──────────────────────────────────────────────────────────────┐
│                     BUILDING TYPE                             │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Choose one:                                                 │
│                                                              │
│  [ ] TYPE A: STANDALONE                                      │
│      AI builds it, then leaves.                              │
│      The finished product runs WITHOUT AI.                   │
│      Examples: website, CLI tool, mobile app, CRUD app       │
│                                                              │
│  [ ] TYPE B: AI-INTEGRATED                                   │
│      AI builds it AND lives inside it.                       │
│      The finished product DEPENDS on AI to function.         │
│      Examples: chatbot, AI search, content generator,        │
│      recommendation engine, agent-based system               │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

### If TYPE B (AI-Integrated) — answer these extra questions:

> These concerns don't exist for standalone projects. Skip if Type A.

```
┌──────────────────────────────────────────────────────────────┐
│              AI-INTEGRATED: EXTRA CONCERNS                    │
├──────────────────────────────────────────────────────────────┤
│                                                              │
│  Which AI model/provider will live in the product?           │
│  → ________________________________________________________  │
│                                                              │
│  What happens when AI is down or slow? (fallback plan)       │
│  → ________________________________________________________  │
│                                                              │
│  What's the cost per AI call? Estimated monthly budget?      │
│  → ________________________________________________________  │
│                                                              │
│  Does AI output go directly to end users?                    │
│  → Yes / No                                                  │
│  If yes, what safety guardrails are needed?                  │
│  → ________________________________________________________  │
│                                                              │
│  How will prompts be managed? (version control, testing)     │
│  → ________________________________________________________  │
│                                                              │
│  What if the AI provider changes pricing or shuts down?      │
│  → ________________________________________________________  │
│                                                              │
│  EXTRA ROOMS NEEDED for AI-Integrated projects:              │
│  - [ ] Prompt design & testing                               │
│  - [ ] Fallback behavior (when AI fails)                     │
│  - [ ] Cost monitoring & rate limiting                       │
│  - [ ] Safety guardrails & output filtering                  │
│  - [ ] AI model evaluation & selection                       │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

---

## Human Approval

> **STOP HERE.** The human must review and approve this ground survey
> before any rooms or floors are planned.

**Human decision:**
- [ ] Approved — proceed to blueprint
- [ ] Needs changes — see notes below
- [ ] Rejected — rethink the approach

**Human notes:**
_____________________________________________________________
_____________________________________________________________
_____________________________________________________________
