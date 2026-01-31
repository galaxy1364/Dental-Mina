# NEXT_ACTION (G9_IRAN_CORE_OK)
Status: STOP

Goal: Run G9_IRAN_CORE_OK (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G9_IRAN_CORE_OK)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G9_IRAN_CORE_OK"

PASS Criteria
- Prints: G9_DONE ...
- Appends event:"G9_RUN" to state/LEDGER_v2.ndjson
- Updates state/STATE.json (gate.current and last_pass set to G9_IRAN_CORE_OK; LOCKED_PASS includes G9_IRAN_CORE_OK)
- Produces latest artifacts evidence/resume packs

AI_SIGNATURE: PYM JBZ