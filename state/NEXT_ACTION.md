# NEXT_ACTION (G11_RUN)
Status: STOP

Goal: Run G11_RUN (Design Step) using tools/run.ps1 (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G11_RUN)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G11_RUN"

PASS Criteria
- tools/run.ps1 prints: G11_DONE ...
- state/LEDGER_v2.ndjson appended: gate=G11_RUN event=G11_RUN
- state/STATE.json updated to reflect last_pass/current for G11
- state/HASHLOCK.json protected hashes match actual files

AI_SIGNATURE: PYM JBZ