# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: In G20, scan downloaded artifacts recursively under temp (prior scan was non-recursive).
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T01:00:27.7895465Z