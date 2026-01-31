# NEXT_ACTION (FIX-to-PASS: G20 runner Invoke-SafeGit arglist fix)
Status: STOP

Goal: FIX-to-PASS for G20. Fix runner bug: PowerShell $args collision caused Start-Process ArgumentList null. Replace with $ArgList + validation, keep safe fetch/push under Stop.

Allowed Path: FIX-to-PASS
Scope: One-change (Gate=G20_SIGNED_CI_ARTIFACT_PROVENANCE, fix=tools/run.ps1 Invoke-SafeGit arglist)

## Step 1 (Only) - Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G20_SIGNED_CI_ARTIFACT_PROVENANCE"

AI_SIGNATURE: PYM JBZ