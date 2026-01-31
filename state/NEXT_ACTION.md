# NEXT_ACTION (FIX-to-PASS: G20 runner watch+attestation verify)
Status: STOP

Goal: FIX-to-PASS for G20. Runner must: trigger via safe push, obtain workflow run id by headSha, watch to completion (no pending), download artifacts to TEMP, and gh attestation verify common package types.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 full G20 completion)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ