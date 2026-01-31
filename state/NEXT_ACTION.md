# NEXT_ACTION (G7_SCALE_100K_OK)
Status: STOP

Goal: fix HASHLOCK_MISMATCH for docs/lockpack_rules.md then rerun G7_SCALE_100K_OK.

Allowed Path: FIX-to-PASS
Scope: One-change (HashLock sync docs/lockpack_rules.md + rerun G7_SCALE_100K_OK)

## Step 1 (Only) — Copy/Paste
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate "G7_SCALE_100K_OK"

PASS Criteria
- Gate prints: G7_DONE ...
- No HASHLOCK_MISMATCH abort
- state/LEDGER_v2.ndjson appends event:"G7_RUN"
- state/STATE.json updated (gate.current and last_pass set to G7_SCALE_100K_OK; LOCKED_PASS includes G7)

AI_SIGNATURE: PYM JBZ