# Dental-Mina — Resume (Chat-Proof + Desktop-first)
AI_SIGNATURE: PYM JBZ

## Source of Truth (Repo-first)
Only these:
- state/STATE.json
- state/NEXT_ACTION.md
- state/LEDGER_v2.ndjson

## Handoff Pack (inside repo)
- handoff/HANDOFF_PACK.txt

## New Chat
Paste ONLY this line:
«این Handoff Pack پروژه Dental-Mina است. فقط از روی Repo ادامه بده: state/STATE.json و state/NEXT_ACTION.md و state/LEDGER_v2.ndjson. هیچ سؤال نپرس. لوله‌تفنگی از همان گیت ادامه بده. AI_SIGNATURE: PYM JBZ.»

## Run (Zero mistakes) — PowerShell on Desktop
Copy/Paste:
```powershell
# 0) Find the newest repo folder on Desktop
$repo = Get-ChildItem "$env:USERPROFILE\Desktop" -Directory |
  Where-Object { Test-Path (Join-Path $_.FullName 'state\STATE.json') -and Test-Path (Join-Path $_.FullName 'tools\run.ps1') } |
  Sort-Object LastWriteTime -Descending |
  Select-Object -First 1
if (-not $repo) { throw "REPO_NOT_FOUND_ON_DESKTOP" }
Set-Location $repo.FullName

# 1) Show NEXT_ACTION
type .\state\NEXT_ACTION.md

# 2) Run Step 1 (Only) automatically (parse Gate from NEXT_ACTION title)
$na = Get-Content .\state\NEXT_ACTION.md -Raw
if ($na -match 'NEXT_ACTION \((G\d+_[A-Z0-9_]+)\)') { $gate = $Matches[1] } else { throw "CANNOT_PARSE_GATE_FROM_NEXT_ACTION" }
powershell -ExecutionPolicy Bypass -File .\tools\run.ps1 -Gate $gate
```

## Backup ZIP (recommended)
```powershell
# Backup ZIP on Desktop (repo is at $repo.FullName)
$repoPath = $repo.FullName
Set-Location "$env:USERPROFILE\Desktop"
Remove-Item .\Dental-Mina_repo_BACKUP.zip -Force -ErrorAction SilentlyContinue
Compress-Archive -Path "$repoPath\*" -DestinationPath .\Dental-Mina_repo_BACKUP.zip -Force
Get-Item .\Dental-Mina_repo_BACKUP.zip | Format-List FullName,Length,LastWriteTime
```
