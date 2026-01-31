# NEXT_ACTION (FIX-to-PASS: G20 runner safe-git fetch+push under Stop)
Status: STOP

Goal: FIX-to-PASS for G20. Standardize runner: run git fetch/push via Start-Process with redirected stdout/stderr so $ErrorActionPreference=Stop cannot break on normal git stderr.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 safe-git fetch+push)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ