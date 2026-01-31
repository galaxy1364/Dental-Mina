# NEXT_ACTION (G_STATE_POINTER_REPAIR_AFTER_G9)
Status: STOP

Goal: Repair STATE pointer mismatch after G9 (align gate.last_pass with last_pass=G9_IRAN_CORE_OK) and sync HASHLOCK.

Allowed Path: FIX-to-PASS
Scope: One-change (STATE pointer repair + HASHLOCK sync + LEDGER repair append)

## Step 1 (Only) - Copy/Paste
# This repair is applied by the script that generated this NEXT_ACTION.
# Do NOT run any other gate until a new NEXT_ACTION is issued.

PASS Criteria
- state/STATE.json: gate.current == G9_IRAN_CORE_OK AND gate.last_pass == G9_IRAN_CORE_OK AND last_pass == G9_IRAN_CORE_OK
- state/LEDGER_v2.ndjson appended: gate=G_STATE_POINTER_REPAIR_AFTER_G9 event=REPAIR
- state/HASHLOCK.json protected hashes match actual files

AI_SIGNATURE: PYM JBZ