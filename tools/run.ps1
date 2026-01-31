"G20_SIGNED_CI_ARTIFACT_PROVENANCE" { ; break }
# FAIL-FAST: Gate=G20 must always map to Do-G20* and never fall through.
if ($Gate -eq "G20_SIGNED_CI_ARTIFACT_PROVENANCE") { ; return }
# --- /LOCKPACK_G20_EARLY_DISPATCH_V1 ---

p