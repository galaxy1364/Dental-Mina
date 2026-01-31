# NEXT_ACTION (FIX-to-PASS: G20 handler v8 push-fallback when workflow_dispatch is missing)
Status: STOP

Goal: FIX-to-PASS for G20. Make G20 runner resilient: if workflow_dispatch returns 422, fallback to push-trigger (and allow-empty commit if needed), then select NEW run by headSha==HEAD and watch to completion.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 v8 push-fallback)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ