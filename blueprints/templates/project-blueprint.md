# Project Blueprint

> This is the main plan for the project. Fill this out AFTER the Ground Survey is approved.

---

## What Are We Building?

**In one sentence:** _______________________________________________

**Why does this need to exist?** _______________________________________________

**Who is it for?** _______________________________________________

**What does "done" look like?**
- [ ] _______________________________________________
- [ ] _______________________________________________
- [ ] _______________________________________________

---

## The House

> Draw your project as a house. Floors = phases (build bottom-up).
> Rooms = tasks within each phase. Fill in below.

```
THE HOUSE: [Project Name]
══════════════════════════════════════════════════════

  FLOOR 3: [Phase Name]           ⛔ Human review after this floor
  ┌──────────┬──────────┬──────────┐
  │ [Room]   │ [Room]   │ [Room]   │
  │   [ ]    │   [ ]    │   [ ]    │
  └──────────┴──────────┴──────────┘

  FLOOR 2: [Phase Name]           ⛔ Human review after this floor
  ┌──────────┬──────────┬──────────┐
  │ [Room]   │ [Room]   │ [Room]   │
  │   [ ]    │   [ ]    │   [ ]    │
  └──────────┴──────────┴──────────┘

  FLOOR 1: [Phase Name]           ⛔ Human review after this floor
  ┌──────────┬──────────┬──────────┐
  │ [Room]   │ [Room]   │ [Room]   │
  │   [ ]    │   [ ]    │   [ ]    │
  └──────────┴──────────┴──────────┘

  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓
  ░░ GROUND: Floor 0 — Ground Survey (completed)  ░░
  ▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓▓

  LEGEND:  [x] Done   [~] In Progress   [ ] Not Started
           [!] Blocked   [?] Needs Human Decision
```

> **Tip:** Add or remove floors and rooms as needed. Most projects have 2-4 floors.
> Keep rooms small — if a room takes more than a few hours, split it into two rooms.

---

## Room Details

> For EACH room in the house above, fill out a section below.
> Copy this template for each room:

### Room: [Room Name] (Floor [N])

**Assigned to:** _______________ (from Crew Plan)
**Can be built in parallel with:** _______________ (or "none — sequential")

**What to build:**
_____________________________________________________________

**Inputs needed (what must exist before this room):**
- _______________________________________________

**Done when:**
- [ ] _______________________________________________
- [ ] _______________________________________________
- [ ] _______________________________________________

**Human review needed?**  Yes / No
**If yes, what should human check?**
- _______________________________________________

**AI limitation warning:**
- _______________________________________________

---

*(Copy the room template above for each room in your house)*

---

## Iteration Rules

> When do we go BACK instead of forward?

| If this happens...                  | Then do this...                          |
|-------------------------------------|------------------------------------------|
| Tests fail                          | Fix broken room before moving on         |
| Human review says "Needs Changes"   | Address ALL feedback, then re-review     |
| A risk from the Risk Map triggers   | Execute mitigation plan from Ground Survey|
| New requirement discovered          | Add room(s), update house diagram        |
| Assumption from Floor 0 was wrong   | STOP — update Ground Survey, re-plan     |
| Scope is growing beyond plan        | STOP — discuss with human, cut or expand |

---

## Dependencies Between Rooms

> Draw arrows showing which rooms depend on which.
> Example: "Auth → API → UI" means Auth must be done before API, API before UI.

```
[Room] → [Room] → [Room]
                ↘ [Room]
```

---

## AI-Integrated Projects: Extra Rooms

> **Skip this section for Standalone projects.**
> If the Ground Survey marked this as TYPE B (AI-Integrated), these rooms
> MUST be included in the house. Add them to the appropriate floor.

### Required Extra Rooms for AI-Integrated Projects:

**Prompt Design & Testing**
- Design the prompts/system messages that the AI will use
- Version control prompts alongside code
- Test with edge cases and adversarial inputs

**Fallback Behavior**
- What the app does when AI is down, slow, or returns garbage
- Graceful degradation — the app should still be usable
- Error messages that make sense to the end user

**Cost Monitoring & Rate Limiting**
- Track API costs per user / per feature
- Set spending limits and alerts
- Rate limit AI calls to prevent runaway costs

**Safety Guardrails**
- Filter AI output before showing to users
- Block harmful, inappropriate, or off-topic responses
- Log AI interactions for review

> Add these as rooms in your house diagram. They are NOT optional for
> AI-Integrated projects — they're load-bearing walls.

---

## Human Approval

> **STOP HERE.** The human must review and approve this blueprint
> before building starts.

**Human decision:**
- [ ] Approved — start building Floor 1
- [ ] Needs changes — see notes below
- [ ] Rejected — rethink the plan

**Human notes:**
_____________________________________________________________
_____________________________________________________________
