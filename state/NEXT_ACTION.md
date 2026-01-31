# NEXT_ACTION (FIX-to-PASS: G20 handler v7 dispatch by branch)
Status: STOP

Goal: FIX-to-PASS for G20. Push HEAD to default branch, dispatch workflow by default branch ref (not SHA), select NEW run by headSha==HEAD, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 v7 branch-ref dispatch)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ