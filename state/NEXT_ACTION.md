# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: Runner must search downloaded artifacts recursively under temp (G20_BLOCKED was empty top-level).
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T00:56:20.0470561Z