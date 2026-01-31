# NEXT_ACTION (FIX-to-PASS: G20 dispatch mismatch)
Status: STOP

Goal: FIX-to-PASS for G20 dispatch mismatch. Gate=G20 must run Do-G20* (not G4). After repair, run G20 (Step 1 only).

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 restore real Do-G20 handler + fail-fast)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ