# NEXT_ACTION (FIX-to-PASS: G20 patch ACTIVE workflow by id via gh api)
Status: STOP

Goal: FIX-to-PASS for G20. Use gh api to resolve workflow path for id=227242153, force top-level on: to include workflow_dispatch:, push to default branch, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow_dispatch trigger on ACTIVE workflow id)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ