# NEXT_ACTION (FIX-to-PASS: G20 handler bootstrap v2)
Status: STOP

Goal: FIX-to-PASS for G20. Ensure runner has real Do-G20_SIGNED_CI_ARTIFACT_PROVENANCE + fail-fast dispatch, then run G20 once.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 dollar-escape fix)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ