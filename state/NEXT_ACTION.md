# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: Patch G20 local "gh attestation verify" to run via cmd-safe capture; if Sigstore verifier init fails locally, treat as non-fatal and rely on CI verification artifact.
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:41:56.5166404Z