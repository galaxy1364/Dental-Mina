# NEXT_ACTION (FIX-to-PASS: G20 handler v4)
Status: STOP

Goal: FIX-to-PASS for G20. Ensure runner fails on CI failure and selects NEW run id, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 v4 failure-detect + new-run-id)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ