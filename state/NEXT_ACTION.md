# NEXT_ACTION (FIX-to-PASS: G20 quote 'on' + workflow_dispatch on ACTIVE workflow id=227242153)
Status: STOP

Goal: FIX-to-PASS for G20. Resolve workflow path via gh api for id=227242153, force SINGLE top-level 'on': with workflow_dispatch:, push to default branch, verify remote, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow trigger block with quoted 'on')

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ