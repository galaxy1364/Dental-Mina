# NEXT_ACTION (FIX-to-PASS: G20 CI upload-artifact overwrite)
Status: STOP

Goal: FIX-to-PASS for G20 CI. Ensure upload-artifact steps set overwrite:true to avoid artifact-name conflicts, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow overwrite:true)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ