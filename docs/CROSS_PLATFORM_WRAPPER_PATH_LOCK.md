# CROSS PLATFORM WRAPPER PATH LOCK (No-Rewrite)
AI_SIGNATURE: PYM JBZ

## Locked Goal
Single product experience across:
- iOS / iPadOS
- Android
- Windows
Baseline: Web/PWA. Wrappers must remain possible WITHOUT rewrite.

## Locked Wrapper Paths (Allowed)
1) PWA (baseline): same codebase, offline-first direction, installable, push-ready path later.
2) Mobile/iPad path: Capacitor-like wrapper (native shell + web view) must remain feasible without refactor.
3) Windows path: Tauri-like or Electron-like wrapper must remain feasible without refactor.

## Non-Negotiables
- No platform-specific fork as a requirement to ship.
- Storage + performance must be compatible with wrappers (IndexedDB + virtualization + fast startup).
- Persian-first UX (RTL first) stays the default.
- iOS26 Liquid Glass design language remains locked (visual system, motion, accessibility).

## Performance Budgets (Locked)
- UI: 60fps target; no large re-render loops.
- Patients list: must be virtualized for large datasets.
- Search: debounced; indexed storage; first results under 150ms on normal hardware (target).
- 100k+ patients: no freezing; memory stable; incremental rendering only.

## Evidence & Control
Any change that violates this lock requires formal ROLLBACK gate.

G29_LOCKED_WRAPPER_PATH=TRUE