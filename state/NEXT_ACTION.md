# NEXT_ACTION (FIX-to-PASS: G20 finalize runner)
Status: STOP

Goal: FIX-to-PASS for G20. Ensure runner uses workflow name (ci-attest-build-provenance), resolves runId by headSha, watches completion, downloads artifacts, and verifies attestation with captured gh output (no silent RemoteException).

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 runner hardening)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ