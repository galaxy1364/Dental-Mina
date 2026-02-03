# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: Ensure CI always uploads verify output artifact (if: always()) and stable artifact names attest-subject/attest-verify so runner can download deterministically.
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:26:25.0546100Z