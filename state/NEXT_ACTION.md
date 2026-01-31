# NEXT_ACTION (FIX-to-PASS: G20 workflow YAML repair so jobs exist and logs/artifacts generate)
Status: STOP

Goal: FIX-to-PASS for G20 by repairing .github/workflows/ci_attest_build_provenance.yml YAML validity (no mainjobs concat, correct indentation), then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=workflow YAML validity)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ