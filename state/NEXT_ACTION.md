# NEXT_ACTION (FIX-to-PASS: repair broken run.ps1 quoting + safe push)
Status: STOP

Goal: FIX-to-PASS. Repair tools/run.ps1 parse error caused by broken quoting, and ensure git push uses Start-Process redirection so $ErrorActionPreference=Stop does not break execution.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 parse+safe-push repair)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ