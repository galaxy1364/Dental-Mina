# Security Baseline â€” Dental-Mina (G8)
AI_SIGNATURE: PYM JBZ

## Non-negotiables
- Least privilege (RBAC), audit trails (append-only), tamper-evidence
- Encryption at rest + in transit (when backend exists)
- No inline scripts in shipped pages (CSP-ready)
- No eval / Function constructors in JS
- Clear data boundaries for Iran (offline-first + sync)

## This gate enforces
- CSP meta tags present
- Inline scripts removed (external JS files only)
- Simple static checks for eval/Function()