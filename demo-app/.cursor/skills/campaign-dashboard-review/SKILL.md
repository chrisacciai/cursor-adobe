---
name: campaign-dashboard-review
description: Review and change campaign dashboard UI in this repo — loading states, design system usage, and data hooks. Use when editing Dashboard, StatsCard, CampaignCard, DeliveryStatusCard, ActivityFeed, or useCampaigns/useDeliveryStatus/useActivity.
---

# Campaign dashboard review (Adobe demo app)

## Before editing

1. Read `src/hooks/useCampaigns.ts` — note `loading` and when `stats` / `campaigns` populate.
2. Prefer `Card` and `Button` from `src/components/design-system/`.
3. Follow `.cursor/rules/adobe-patterns.mdc` for TSX patterns.

## Loading state rules

- Stat values should show an em dash `—` while `loading` is true, not numeric placeholders like `0` unless the metric is truly zero **after** load.
- If a stat value is hidden during load, **do not** show benchmark or helper subtitles that imply real data next to `—`.
- Campaign grid should stay in skeleton state until `loading` is false.

## After editing

- List files touched and why.
- Mention how you verified (e.g. refresh dev server, check first paint during mock delay).
