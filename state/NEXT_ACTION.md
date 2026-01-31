# NEXT_ACTION (FIX-to-PASS: G20 handler v6 safe push)
Status: STOP

Goal: FIX-to-PASS for G20. Ensure runner pushes safely without line-continuation parsing issues; dispatch workflow on HEAD sha; then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 v6 safe git push)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ