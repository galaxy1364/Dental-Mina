# NEXT_ACTION (G10_DESIGN_REVIEW_PACK)
Status: STOP

Goal: Run G10_DESIGN_REVIEW_PACK (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G10_DESIGN_REVIEW_PACK)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G10_DESIGN_REVIEW_PACK"

PASS Criteria
- Prints: G10_DONE ...
- Appends event:"G10_RUN" to state/LEDGER_v2.ndjson
- Updates state/STATE.json (gate.current and last_pass set to G10_DESIGN_REVIEW_PACK; LOCKED_PASS includes G10_DESIGN_REVIEW_PACK)
- Produces latest artifacts evidence/resume packs

AI_SIGNATURE: PYM JBZ