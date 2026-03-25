## Cursor Cloud specific instructions

### Overview

This repository contains a single React + Vite + Tailwind CSS demo application in `demo-app/`. It is a self-contained campaign dashboard with **no backend, no database, and no external services** — all data is mocked locally via hooks with `setTimeout`.

### Commands

All commands run from the `demo-app/` directory. Standard scripts are in `demo-app/package.json`:

- **Install deps:** `npm install`
- **Dev server:** `npm run dev` (Vite, serves at `http://localhost:5173`)
- **Lint:** `npm run lint` (ESLint)
- **Build:** `npm run build` (TypeScript check + Vite production build)
- **Preview prod build:** `npm run preview`

### Non-obvious notes

- The app has intentional seeded bugs for demo purposes (documented in `/DEMO_SCRIPT.md`). Do not fix them unless specifically asked.
- Project rules live in `demo-app/.cursor/rules/adobe-patterns.mdc` — follow these conventions when making changes.
- Custom Cursor agents and skills are in `demo-app/.cursor/agents/` and `demo-app/.cursor/skills/`.
- There is no test framework configured (no Jest, Vitest, etc.). Verification is done via `npm run build` (type-checks + bundles) and `npm run lint`.
- When running the dev server for manual testing, use `npm run dev -- --host 0.0.0.0` to bind to all interfaces so the Cloud Agent browser can access it.
