# NEXT_ACTION
Action: FIX-to-PASS
Authorized Gate: G20_SIGNED_CI_ARTIFACT_PROVENANCE
Method: Run tools/run.ps1 -Gate G20_SIGNED_CI_ARTIFACT_PROVENANCE
Scope: ONLY G20_SIGNED_CI_ARTIFACT_PROVENANCE
Fix: In G20, before G20_BLOCKED force gh run download (attest-verify/attest-subject), then recursive scan; include download logs on failure.
AI_SIGNATURE: PYM JBZ
Generated_utc: 2026-02-03T05:04:04.4800763Z