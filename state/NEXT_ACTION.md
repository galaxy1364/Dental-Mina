# NEXT_ACTION (G20_SIGNED_CI_ARTIFACT_PROVENANCE)
Status: FIX-to-PASS
Goal: Implement G20 gate + CI workflow (GitHub attest-build-provenance) + local verify via gh
Allowed Path: PROCEED / FIX-to-PASS / ROLLBACK
Scope: One-change (tools/run.ps1 + .github/workflows/ci_attest_build_provenance.yml + state/HASHLOCK.json + docs/LOCKPACK_RULES.md + artifacts/* + state/*)
Runner Outputs Allowed: tools/run.ps1; .github/workflows/ci_attest_build_provenance.yml; state/HASHLOCK.json; docs/LOCKPACK_RULES.md; artifacts/*; docs/RESUME.md; handoff/HANDOFF_PACK.txt; state/*

Step 1 (Only):
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"