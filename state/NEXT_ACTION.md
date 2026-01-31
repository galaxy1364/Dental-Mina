# NEXT_ACTION (FIX-to-PASS: G20 trusted-root absolute path + assert)
Status: STOP

Goal: FIX-to-PASS for G20 CI. Force trusted root file written to GITHUB_WORKSPACE/dist, assert it exists before upload, and upload with absolute github.workspace path; then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow trusted-root absolute path + pre-upload assert)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ