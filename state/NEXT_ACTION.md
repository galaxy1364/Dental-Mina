# NEXT_ACTION (FIX-to-PASS: G20 ensure workflow_dispatch on active workflow id=227242153)
Status: STOP

Goal: FIX-to-PASS for G20. Patch the correct workflow file (matched to id=227242153) so top-level on: includes workflow_dispatch:, push to default branch, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow_dispatch trigger on active workflow)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ