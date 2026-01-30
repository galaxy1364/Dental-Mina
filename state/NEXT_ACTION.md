# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: PROCEED
Allowed Path: FIX-to-PASS
Scope: One-change (run Gate=G20 only)

powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"
