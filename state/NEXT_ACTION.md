# NEXT_ACTION (FIX-to-PASS: G20 add workflow_dispatch trigger)
Status: STOP

Goal: FIX-to-PASS for G20. Ensure workflow has top-level on: workflow_dispatch: trigger, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow_dispatch trigger)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ