# Human Review Checklist

> Use this after completing each floor. AI fills in the summary.
> Human checks the boxes and makes the call.

---

**Project:** _______________________________________________
**Floor Being Reviewed:** Floor ___: ___________________________
**Date:** _______________
**Reviewer:** _______________________________________________

---

## What Was Built

> AI: Summarize what was completed in this floor.

| Room         | What Was Done                              | Files Changed           |
|--------------|--------------------------------------------|-------------------------|
| ____________ | ________________________________________ | _______________________ |
| ____________ | ________________________________________ | _______________________ |
| ____________ | ________________________________________ | _______________________ |

---

## Review Checklist

> Human: Check each item. Be honest — it's cheaper to fix now than later.

### Does it work?
- [ ] Each room's "done when" checklist is actually complete
- [ ] The code runs without errors
- [ ] I tested the main functionality myself (or saw a demo)

### Is it correct?
- [ ] It matches what I asked for (not what AI assumed I wanted)
- [ ] Business logic is right (not just technically working)
- [ ] No obvious shortcuts or hacks that will cause problems later

### Is it safe?
- [ ] No security concerns (passwords exposed, data unprotected, etc.)
- [ ] No risk of data loss
- [ ] Dependencies are trustworthy and necessary

### Is it simple?
- [ ] I can understand what the code does
- [ ] No unnecessary complexity or over-engineering
- [ ] A new person could pick this up and continue

### Does it match the plan?
- [ ] Stayed within scope (no surprise features)
- [ ] Risks from the Risk Map are still under control
- [ ] No new limitations discovered (or they've been documented)

---

## Decision

- [ ] **APPROVED** — Proceed to next floor
- [ ] **NEEDS CHANGES** — Fix the items listed below, then re-review
- [ ] **REJECTED** — Major rethink needed, go back to blueprint

---

## Changes Needed (if applicable)

> Human: List specific things that need to change before approval.

1. _______________________________________________
2. _______________________________________________
3. _______________________________________________

---

## Notes

> Any observations, concerns, or things to watch for in the next floor.

_____________________________________________________________
_____________________________________________________________
_____________________________________________________________

---

## Sign-off

**Human:** _________________________ **Date:** _______________
