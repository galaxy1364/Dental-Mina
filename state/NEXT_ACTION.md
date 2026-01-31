# NEXT_ACTION (FIX-to-PASS: G20 force workflow_dispatch on active workflow id=227242153)
Status: STOP

Goal: FIX-to-PASS for G20. Normalize top-level on: to include workflow_dispatch: on the ACTIVE workflow (id=227242153), push to default branch, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow on: workflow_dispatch)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ