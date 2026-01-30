# NEXT_ACTION (G5_REPLAY_RESTORE_OK)
Status: STOP
Goal: Drill «چت/دستگاه جدید» فقط با resume_pack.zip (بدون نیاز به چت) و ثبت نتیجه در Ledger
Allowed Path: FIX-to-PASS
Scope: One-change (فقط اجرای tools/run.ps1 با Gate=G5_REPLAY_RESTORE_OK)

## Step 1 (Only) — Copy/Paste (بدون ``` )
1) داخل پوشه پروژه باشید: Desktop\\Dental-Mina
2) این دستور را اجرا کنید:

powershell -ExecutionPolicy Bypass -File .\\tools\\run.ps1 -Gate "G5_REPLAY_RESTORE_OK"

PASS Criteria
- خروجی `G5_DONE ...` بدهد
- آخرین resume_pack.zip موجود در artifacts/resume با موفقیت Extract و Validate شود
- یک رکورد جدید در state/LEDGER_v2.ndjson با event:"G5_RUN" append شده باشد
- state/STATE.json: gate.current=G5_REPLAY_RESTORE_OK و last_pass=G5_REPLAY_RESTORE_OK و LOCKED_PASS شامل G5 باشد

Evidence
- artifacts/evidence/*_evidence.zip (آخرین)
- artifacts/resume/*_resume_pack.zip (آخرین)
- state/LEDGER_v2.ndjson (آخرین خط)
- state/STATE.json