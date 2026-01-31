# NEXT_ACTION (FIX-to-PASS: G20 trusted-root workspace path)
Status: STOP

Goal: FIX-to-PASS for G20 CI. Ensure sigstore trusted root file is written to GITHUB_WORKSPACE/dist and upload step uses workspace path, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow workspace-anchored dist path)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ