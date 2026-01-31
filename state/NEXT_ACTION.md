# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: STOP

Goal: Run the next authorized gate (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE)

## Step 1 (Only) — Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

PASS Criteria
- Prints: G20_SIGNED_CI_ARTIFACT_PROVENANCE_DONE
- Appends a new *_RUN entry to state/LEDGER_v2.ndjson
- Updates state/STATE.json (gate.current and last_pass set to G20_SIGNED_CI_ARTIFACT_PROVENANCE)

AI_SIGNATURE: PYM JBZ