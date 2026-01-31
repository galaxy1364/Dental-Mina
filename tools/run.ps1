param(   [string]$Gate = "G4_EVIDENCE_PACK_OK" )
# --- LOCKPACK_G20_DISPATCH_FIX_V2 ---
# FAIL-FAST: G20 must never fall through to other dispatch paths.
if ($Gate -eq "G20_SIGNED_CI_ARTIFACT_PROVENANCE") { throw "DISPATCH_BLOCKED: no G20 handler found in tools/run.ps1."; return }
# --- /LOCKPACK_G20_DISPATCH_FIX_V2 ---
