# Dental-Mina — LOCKPACK MASTER (Repo-First)
AI_SIGNATURE: PYM JBZ

## منبع حقیقت (Source of Truth)
فقط این فایل‌ها:
- `state/STATE.json`
- `state/NEXT_ACTION.md`
- `state/LEDGER_v2.ndjson` (فقط append-only)
- `state/ISSUES_v2.ndjson`
- (در صورت وجود) `docs/LOCKPACK_ALL_IN_ONE_Dental-Mina_CANONICAL_v3.md` یا آخرین نسخه

## HARD STOP (بدون هیچ bypass حتی برای admin)
اگر یکی از موارد زیر برقرار باشد:
- `state/NEXT_ACTION.md` وجود ندارد
- یا `Status=STOP` و Step/Scope مشخص نشده
⇒ فقط اجازه دارید طبق **همان NEXT_ACTION** حرکت کنید. هیچ تغییر دیگری مجاز نیست.

## فقط 3 مسیر مجاز
- **PROCEED**
- **FIX-to-PASS**
- **ROLLBACK**

## Scope Freeze
هر نسخه/گیت فقط **یک تغییر**. خارج از Scope تعریف‌شده در `state/NEXT_ACTION.md` هیچ فایل/کدی نباید تغییر کند.

## Continuity (ضدتکرار / ضدخرابکاری)
- قبل از هر کار: `state/STATE.json` و `state/NEXT_ACTION.md` را بخوان.
- `state/LEDGER_v2.ndjson` فقط append-only است.
- هیچ فایل جدید/حذف/overwrite ممنوع است مگر اینکه `state/NEXT_ACTION.md` صراحتاً اجازه داده باشد.
- `quarantine/` فقط MOVE-only (اگر وجود داشت).
- اگر `state/NEXT_ACTION.md` نبود ⇒ **STOP**.

## PASS Gate (شرط قبولی)
PASS فقط اگر همزمان:
1) **Zero JS Errors**: `onerror=0` ، `unhandledrejection=0` ، `console.error=0`
2) **No Pending**: `pending=0` (timeout قطعی)
3) **Abort-safe**: خروج استاندارد `ABORTED`
4) **Signed CI Artifact + provenance**
5) **Evidence کامل**: `QG.json` + screenshot/video + `manifest.sha256` (hashes)

بدون Evidence ⇒ «انجام نشده».

## قالب پاسخ (برای هر AI/همکار)
1) Status  
2) Missing Locks  
3) Action Plan  
4) PASS Evidence  

## Resume (برای چت/دستگاه جدید)
در شروع هر چت جدید دقیقاً این جمله را paste کن:
«این Handoff Pack پروژه Dental-Mina است. فقط از روی Repo ادامه بده: state/STATE.json و state/NEXT_ACTION.md و state/LEDGER_v2.ndjson. هیچ سؤال نپرس. لوله‌تفنگی از همان گیت ادامه بده. AI_SIGNATURE: PYM JBZ.»

## G19 — CODEOWNERS + HashLock + Protected Prod
- CODEOWNERS: فایل .github/CODEOWNERS اضافه شد (اگر روی GitHub هستید، مالک‌ها را جایگزین کنید).
- HashLock: فایل state/HASHLOCK.json اضافه شد تا فایل‌های کنترل (runner/docs/handoff/.github) با SHA256 قفل شوند.
- Protected Prod: workflow (lockpack_required) اضافه شد تا در CI یک Status Check ثابت داشته باشیم (برای فعال‌سازی اجباری روی main/prod باید Branch Protection را بعداً تنظیم کنیم).
## G20 - Signed CI Artifact + Provenance
- Adds workflow `.github/workflows/ci_attest_build_provenance.yml` to produce build provenance attestations.
- Verifies artifact attestation locally via `gh attestation verify` (requires GitHub CLI auth).
- PASS requires: workflow present, CI run success, and `artifacts/ci/*/attestation_verify.json` captured in evidence.