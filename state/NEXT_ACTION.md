# NEXT_ACTION (G6_PWA_INSTALL_OK)
Status: STOP

Goal: Run the next authorized gate (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G6_PWA_INSTALL_OK)

## Step 1 (Only) — Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G6_PWA_INSTALL_OK"

PASS Criteria
- Prints: _DONE
- Produces fresh artifacts under artifacts/evidence and artifacts/resume (if gate emits them)
- Appends a new entry to state/LEDGER_v2.ndjson for event:"_RUN"
- Updates state/STATE.json (gate.current and last_pass set to G6_PWA_INSTALL_OK)

AI_SIGNATURE: PYM JBZ