# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: In G20, download artifacts without --name (name-agnostic) via cmd /c to avoid NativeCommandError under ErrorActionPreference=Stop.
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:30:25.9284648Z