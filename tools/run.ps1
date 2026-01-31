# --- LOCKPACK_G20_DISPATCH_FIX_V4 ---
# FAIL-FAST: G20 must never fall through to other dispatch paths.
if ($Gate -eq "G20_SIGNED_CI_ARTIFACT_PROVENANCE") { ; return }
# --- /LOCKPACK_G20_DISPATCH_FIX_V4 ---
