# NEXT_ACTION (FIX-to-PASS: G11_RUN early-dispatch)
Status: STOP

Goal: FIX-to-PASS for G11_RUN no-op. After fix, run G11_RUN (Step 1 only).

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G11_RUN, fix=tools/run.ps1 early-dispatch)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G11_RUN"

AI_SIGNATURE: PYM JBZ