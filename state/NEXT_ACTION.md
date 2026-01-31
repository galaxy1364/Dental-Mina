# NEXT_ACTION (G11_RUN)
Status: STOP

Goal: Run G11_RUN (Design Step) using tools/run.ps1 (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G11_RUN)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G11_RUN"

AI_SIGNATURE: PYM JBZ