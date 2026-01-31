# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: STOP

Goal: Run G20_SIGNED_CI_ARTIFACT_PROVENANCE using tools/run.ps1 (Step 1 only).

Allowed Path: PROCEED
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ