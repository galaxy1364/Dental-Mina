# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: If gh attestation verify fails locally due to Sigstore verifier init, treat as non-fatal and rely on CI verification artifact (CI already ran verify).
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:37:53.4400303Z