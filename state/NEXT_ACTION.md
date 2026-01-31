# NEXT_ACTION (G8_SECURITY_BASE_OK)
Status: STOP

Goal: Run G8_SECURITY_BASE_OK (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G8_SECURITY_BASE_OK)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G8_SECURITY_BASE_OK"

PASS Criteria
- Prints: G8_DONE ...
- Appends event:"G8_RUN" to state/LEDGER_v2.ndjson
- Updates state/STATE.json (gate.current and last_pass set to G8_SECURITY_BASE_OK; LOCKED_PASS includes G8_SECURITY_BASE_OK)
- Produces latest artifacts evidence/resume packs

AI_SIGNATURE: PYM JBZ