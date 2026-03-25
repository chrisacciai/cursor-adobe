# Parallel agents — demo slot

Use this section when you want **two specialists at once**: isolated context windows, no sequential waiting for the same kind of recon.

## Which agents run in parallel

| Subagent | File | Role |
|----------|------|------|
| **dashboard-impact-mapper** | `.cursor/agents/dashboard-impact-mapper.md` | Who imports `useCampaigns` / `StatsCard`; blast radius. |
| **campaign-hook-contracts** | `.cursor/agents/campaign-hook-contracts.md` | Hook return shapes and `loading` semantics consistency. |

Both are **`readonly: true`** and **`model: fast`** — safe to run together for a live demo.

## When to run (narrative)

Best **after** the Act 1 Emails Sent fix (or on a clean branch): you’re proving that **parallelism** = two independent investigations, not one bloated prompt.

## Copy-paste — single Agent message (parallel)

Cursor’s Agent can delegate multiple subagents in one turn. **One message:**

```text
Run these two subagents in parallel — do not sequence them:

1) /dashboard-impact-mapper — map useCampaigns and StatsCard consumers and blast radius in demo-app.

2) /campaign-hook-contracts — audit useCampaigns, useActivity, useDeliveryStatus for loading/data contract consistency.

Merge both summaries into one short bullet list for the team: impact + contract risks.
```

## Shorter variant

```text
In parallel: /dashboard-impact-mapper on the dashboard stats area, and /campaign-hook-contracts on src/hooks. One combined summary.
```

## Talking points (15–30 sec)

- “Each subagent gets a **fresh context** — noisy search stays out of my main thread.”
- “Parallel **isn’t** faster wall-clock for every task — here it’s **independent** workstreams, so throughput wins.”
- “Same pattern as **multiple senior engineers** on standup: two tracks, one merge review.”

## Fallback

If your build doesn’t delegate in parallel, open **two Agent chats** or run **Ask** twice with the prompts from each `.md` under `.cursor/agents/`, then narrate the difference.
