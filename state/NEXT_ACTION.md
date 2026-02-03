# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: In G20 artifact download block, resolve repoArg (gh repo view / origin remote) so gh run download --repo is never empty.
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:06:35.9496970Z