# NEXT_ACTION (LOCKPACK)
Mode: PROCEED
Authorized Gate: G39_FA_IR_CALENDAR_LOCK_2026
Scope Freeze: one change only (fa-IR locale + Persian RTL + Iranian calendar lock)
Requirements:
- 100% Persian UI + RTL across app
- Accurate Iranian (Jalali/Shamsi) calendar (date/time, holidays surface)
- Standardize locale fa-IR across system (Intl, formatting, storage)
Success Criteria:
- Zero JS Errors: onerror=0, unhandledrejection=0, console.error=0
- No Pending: pending=0 (hard timeouts)
- Abort-safe: standard ABORTED exit
- Evidence Pack: QG.json + screenshot/video + snapshot/manifest(hashes)
- Signed CI Artifact + provenance: required (via G20)
AI_SIGNATURE: PYM JBZ