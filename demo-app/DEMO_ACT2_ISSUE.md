# Act 2 — GitHub issue (copy into your repo)

**Title:** `Dashboard: hide benchmark subtitles while stats are loading`

**Body:**

## Problem

On the Campaign Dashboard, while `useCampaigns` is still loading, Avg. Open Rate and Avg. Click Rate show `—` for the value but still show benchmark subtitles ("vs 28% benchmark", "vs 5% benchmark"), which reads like partial data.

## Expected

When `loading` is true, omit subtitles on those `StatsCard`s (or hide the benchmark line) so we don't imply real metrics next to placeholders.

## Constraints

- Touch only what's needed in `demo-app`.
- Follow existing `StatsCard` usage and `.cursor/rules/adobe-patterns.mdc`.
- Run `npm run build` in `demo-app` before opening a PR.
