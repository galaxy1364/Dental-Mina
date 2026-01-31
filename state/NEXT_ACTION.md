# NEXT_ACTION (FIX-to-PASS: G20 attestation verify repo resolve)
Status: STOP

Goal: FIX-to-PASS for G20. CI run is OK, but local attestation verify failed because --repo was empty. Fix runner to resolve repo via gh repo view --json nameWithOwner.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 attestation verify repo resolve)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ