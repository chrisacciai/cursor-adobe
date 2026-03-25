# Cursor 201 — Adobe demo: script & prompts

**App:** `demo-app/` (campaign dashboard). **Theme:** desk = orchestrate with context + standards; after hours = cloud agent continues with the same rules.

---

## Seeded bugs (repo state)

| Act | What’s wrong | Where |
|-----|----------------|--------|
| **Act 1 (local)** | “Emails Sent” shows **0** on first paint while other stat tiles show **—** — inconsistent loading UX. | `useCampaigns` starts with zeroed stats; `Dashboard.tsx` uses `stats.totalSent` without guarding on `loading`. |
| **Act 2 (cloud)** | Open/Click rate tiles show benchmark subtitles (`vs 28% benchmark`, etc.) next to **—** while still loading. | `Dashboard.tsx` — pass subtitles only when `!loading`. |

After Act 1, fix only the Emails Sent line. Leave Act 2 for the cloud agent (or fix live in Act 2).

---

## Timing (~20 min)

| Minutes | Segment |
|--------|---------|
| 0:00–1:30 | Hook + thesis (engineer as orchestrator) |
| 1:30–9:00 | Act 1 — local: Ask → Rules → Agent → Skill → optional **Parallel agents** (`PARALLEL_AGENTS_DEMO.md`) |
| 9:00–10:00 | Bridge — ship / PR mindset |
| 10:00–18:00 | Act 2 — issue → cloud agent → MCP + review |
| 18:00–20:00 | Close — RACI for agents, Q&A |

---

## Act 1 — Opening (talking points)

Say:

- “We’re not demoing magic autocomplete — we’re demoing **repeatable engineering**: context, **project rules**, **skills** (playbooks), and **scoped agent work**.”
- “Same repo you’d use for a campaign manager shell: hooks, design system, dashboard.”

**Optional:** Show terminal: `cd demo-app && npm run dev` (already running is fine).

---

## Act 1 — Ask mode (prompt)

Paste into **Ask** (read-only orientation):

```text
Where does the campaign overview load its numbers, and how does the loading flag flow into the stats row on the Dashboard?
```

**Say out loud:** “I’m grounding in the codebase before I let Agent touch files — smaller blast radius, better review story.”

---

## Act 1 — Show project rule (no paste)

Open: `demo-app/.cursor/rules/adobe-patterns.mdc`

**Say:** “**Project rules** are how a team encodes style and constraints so every session — human or agent — inherits them.”

---

## Act 1 — Agent mode (main fix)

Mode: **Agent**. Scope: `demo-app` folder.

**Prompt:**

```text
There’s a loading-state bug on the Dashboard stats row: "Emails Sent" shows 0 on first paint while the other stat cards show an em dash until data is ready. Fix it so "Emails Sent" matches the same loading behavior as the other stats.

Constraints:
- Use the existing useCampaigns hook and StatsCard API; don’t add dependencies.
- Follow .cursor/rules/adobe-patterns.mdc and reuse design-system components only as already used on this page.
- After changes, list files touched and how you verified.
```

**Say:** “I’m constraining the change — **same patterns**, **no dependency drift** — so the diff is reviewable.”

---

## Act 1 — Skill (prompt or @ mention)

If your Cursor build supports **Skills**, invoke or @ mention: **`campaign-dashboard-review`**

**Shorter Agent add-on after the fix:**

```text
Using the campaign-dashboard-review skill, double-check loading states on the stats row and confirm nothing else regressed.
```

**Say:** “**Rules** are defaults; **Skills** are procedures — how we run a class of change on this codebase.”

---

## Act 1 — Subagent (custom project agent)

**Repo file:** `demo-app/.cursor/agents/dashboard-impact-mapper.md` — checked in so the team shares the same specialist. It uses **`readonly: true`** (recon only) and **`model: fast`** (cheap parallel search).

**Explicit invocation (Agent chat):**

```text
/dashboard-impact-mapper map blast radius for the stats loading fix we just made — focus on useCampaigns and StatsCard consumers.
```

**Natural language (same idea):**

```text
Use the dashboard-impact-mapper subagent to map impact of useCampaigns and StatsCard across demo-app before we merge.
```

**Say:** “This is a **custom subagent** — isolated context, read-only, so exploration doesn’t bloat the main agent thread. I’m separating **reconnaissance** from **mutation**.”

**Fallback:** If delegation isn’t available in your session, paste the **manual** prompt from the subagent body, or run a second **Ask** with:

```text
In demo-app only: list every file that imports useCampaigns or renders StatsCard, in one table with file path and role (consumer vs definition).
```

---

## Act 1 — Parallel agents (dedicated demo slot)

**Repo playbook:** `demo-app/.cursor/PARALLEL_AGENTS_DEMO.md` — lists the two subagents, **copy-paste prompts**, and talking points.

**Purpose:** Show **two specialists** (`dashboard-impact-mapper` + `campaign-hook-contracts`) in **one Agent message** so Cursor can delegate **in parallel** (separate Task/subagent runs). Different question: blast radius vs hook contracts — independent workstreams.

**When:** After the **Emails Sent** fix (or after Skill check). Optional: **2–3 minutes** in the 20-minute deck.

**Single message (paste into Agent):**

```text
Run these two subagents in parallel — do not sequence them:

1) /dashboard-impact-mapper — map useCampaigns and StatsCard consumers and blast radius in demo-app.

2) /campaign-hook-contracts — audit useCampaigns, useActivity, useDeliveryStatus for loading/data contract consistency.

Merge both summaries into one short bullet list for the team: impact + contract risks.
```

**Say:** “Parallel agents aren’t **always** faster — they’re for **independent** recon, **isolated context**, and **two lanes** before one merge.”

**If the UI doesn’t fan out:** run the two `/…` invocations back-to-back or use the fallback in `PARALLEL_AGENTS_DEMO.md`.

---

## Act 1 — Verify (live)

1. Hard refresh the dashboard (or throttle network in DevTools for effect).
2. Confirm all four stat tiles show **—** then real values together.

**Say:** “The aha isn’t the one-line fix — it’s **context + standards + verification** staying cheap.”

---

## Bridge (~1 min)

**Say:**

- “Locally I’d open a PR, let CI run, human review — **risk tiering**, not distrust of the model.”
- “Tonight an issue lands; I want **continuity** without my laptop being the bottleneck.”

---

## Act 2 — GitHub issue (copy-paste)

Create an issue on your demo repo (or paste into Cloud Agent as context). Title + body:

**Title:** `Dashboard: hide benchmark subtitles while stats are loading`

**Body:**

```markdown
## Problem
On the Campaign Dashboard, while `useCampaigns` is still loading, Avg. Open Rate and Avg. Click Rate show `—` for the value but still show benchmark subtitles ("vs 28% benchmark", "vs 5% benchmark"), which reads like partial data.

## Expected
When `loading` is true, omit subtitles on those StatsCards (or hide the benchmark line) so we don't imply real metrics next to placeholders.

## Constraints
- Touch only what's needed in `demo-app`.
- Follow existing `StatsCard` usage and `.cursor/rules/adobe-patterns.mdc`.
- Run `npm run build` in `demo-app` before opening a PR.
```

File also saved at: `demo-app/DEMO_ACT2_ISSUE.md`

---

## Act 2 — Cloud agent (prompt template)

Adjust names to match your Cursor UI (**Background Agent** / **Cloud Agent**).

```text
Repo: [your-fork URL]. Branch from main.

1. Read the GitHub issue: [paste issue URL or body from DEMO_ACT2_ISSUE.md].
2. Implement the fix under demo-app/ following .cursor/rules/adobe-patterns.mdc.
3. Run `npm ci` (or npm install) and `npm run build` inside demo-app.
4. Open a PR with: summary, test plan (what you checked in the UI), and files changed.
5. If browser/computer-use is available: load the dev server, hard-refresh the dashboard, and confirm subtitles do not appear next to — during loading.
```

**Say:** “**MCP** ties the agent to **systems** — issues and PRs — not just files. **Computer use** closes the loop on what users actually see.”

---

## Act 2 — PR review (Cursor)

Open the PR diff. **Ask mode:**

```text
Does this PR introduce any new network calls or change auth boundaries? List only evidence from the diff.
```

**Say:** “I’m still **accountable** — agents propose; **CI and I** dispose.”

---

## Close — Thought leadership (90 sec)

**Framework — RACI for agents**

- **Responsible:** agent (implement, test, document).
- **Accountable:** human (merge, incidents).
- **Consulted:** Rules, Skills, linters, security policy.
- **Informed:** telemetry, PR description.

**Three principles**

1. Standards **travel** (Rules + Skills) so autonomy doesn’t become drift.  
2. **Parallelism** (subagents) when tasks decompose; one stream when tightly coupled.  
3. **Verification** (build, browser, review) is the product — not optional.

---

## Anticipated questions (one-liners)

| Question | Answer |
|----------|--------|
| Why Ask before Agent? | Ground truth and smaller blast radius before mutation. |
| What breaks first? | Context drift, missing tests — mitigate with rules, small diffs, verification. |
| Why cloud agent? | Async continuation with explicit acceptance criteria; laptop isn’t the bottleneck. |
| Security? | Branch protections, secret scanning, MCP scopes — policy scales where tools don’t. |

---

## Pre-flight checklist

- [ ] `demo-app`: `npm install` and `npm run build` succeed.
- [ ] Act 1 bug visible: hard refresh → brief **0** on Emails Sent vs **—** elsewhere.
- [ ] Tabs ready: `adobe-patterns.mdc`, `useCampaigns.ts`, Skill `campaign-dashboard-review`.
- [ ] GitHub: issue created or body ready; repo linked for cloud agent.
- [ ] Fallback if cloud is slow: show a **pre-recorded PR** or narrate steps while it runs.
