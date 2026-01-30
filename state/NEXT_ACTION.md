# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: FIX-to-PASS
Goal: Restore a parsable tools/run.ps1 from git history (NO -join), apply minimal patches, sync HASHLOCK, then rerun G20.
Allowed Path: FIX-to-PASS
Scope: One-change (tools/run.ps1 + state/HASHLOCK.json + state/NEXT_ACTION.md, then run Gate=G20)

powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"
