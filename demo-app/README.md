# Demo App for Cursor Kickoff

Adobe-style campaign dashboard for practicing the Cursor demo.

## Structure

- **`src/components/design-system/`** — Button, Card (for Agent to reuse)
- **`src/hooks/useDeliveryStatus.ts`** — Campaign delivery status hook
- **`src/services/auth.ts`** — Session/token handling (for "authentication" semantic search)
- **`src/pages/Dashboard.tsx`** — Main dashboard with cards
- **`.cursor/rules/adobe-patterns.mdc`** — Example Project Rule
- **`.cursor/agents/`** — Custom subagents (`dashboard-impact-mapper`, `campaign-hook-contracts`)
- **`.cursor/PARALLEL_AGENTS_DEMO.md`** — Playbook to demo **parallel** subagents in one Agent message

## Demo Queries

**Semantic search (Demo 1):** Open the AI panel in **Ask** (or **Agent**). Examples:
- "Where does user authentication or login get handled?"
- "Where does this app fetch data from an API?"
- "How does the delivery status hook work?"

**Agent (Demo 2):** Use **Agent** mode. Full prompts, talking points, and Act 1/2 flow are in repo root **`DEMO_SCRIPT.md`**. Short fallback example:
- "Add a `DeliveryStatusCard` that uses `useDeliveryStatus`, design system `Card`, and the Dashboard layout."

## Run

```bash
npm install
npm run dev
```
