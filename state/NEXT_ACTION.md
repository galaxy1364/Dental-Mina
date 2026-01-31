# NEXT_ACTION (G_STATE_POINTER_REPAIR)
Status: STOP

Goal: Repair STATE pointer mismatch after G7 (align gate.last_pass with last_pass=G7_SCALE_100K_OK) and sync HASHLOCK.

Allowed Path: FIX-to-PASS
Scope: One-change (STATE pointer repair + HASHLOCK sync)

## Step 1 (Only) — Copy/Paste
# This repair is already applied by the script that generated this NEXT_ACTION.
# Do NOT run any other gate until a new NEXT_ACTION is issued.

PASS Criteria
- state/STATE.json: gate.last_pass == G7_SCALE_100K_OK AND last_pass == G7_SCALE_100K_OK
- state/HASHLOCK.json hashes match current file contents
- state/LEDGER_v2.ndjson appended a REPAIR record for this action

AI_SIGNATURE: PYM JBZ