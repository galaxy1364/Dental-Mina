# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: FIX-to-PASS
Goal: ROLLBACK invalid manual last_pass=G20, restore tools/, fix tools/run.ps1 ParserError near headSha filter, sync HASHLOCK, then rerun G20.
Allowed Path: FIX-to-PASS
Scope: One-change (tools/run.ps1 + state/STATE.json rollback + state/HASHLOCK.json + state/NEXT_ACTION.md, then run Gate=G20)

powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"
