# NEXT_ACTION (G1_SINGLE_COMMAND)
Status: STOP

Goal: Run the next authorized gate (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G1_SINGLE_COMMAND)

## Step 1 (Only) — Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G1_SINGLE_COMMAND"

PASS Criteria
- Prints: G1_SINGLE_COMMAND_DONE
- Appends event:"_RUN" (or gate-specific RUN) to state/LEDGER_v2.ndjson
- Updates state/STATE.json gate.current and last_pass to G1_SINGLE_COMMAND

AI_SIGNATURE: PYM JBZ