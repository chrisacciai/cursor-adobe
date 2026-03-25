import { Card } from './design-system';
import { Button } from './design-system';
import type { Campaign } from '../data/campaigns';

const statusStyles: Record<Campaign['status'], string> = {
  draft: 'bg-gray-100 text-gray-700',
  scheduled: 'bg-amber-100 text-amber-800',
  sending: 'bg-blue-100 text-blue-800',
  sent: 'bg-emerald-100 text-emerald-800',
  paused: 'bg-orange-100 text-orange-800',
};

export function CampaignCard({ campaign }: { campaign: Campaign }) {
  const statusLabel = campaign.status.charAt(0).toUpperCase() + campaign.status.slice(1);
  const hasMetrics = campaign.sentCount > 0;

  return (
    <Card
      className="group transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
      variant="elevated"
    >
      <div className="flex items-start gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-gray-100 text-2xl group-hover:bg-gray-200 transition-colors">
          {campaign.thumbnail ?? '📧'}
        </div>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2">
            <h3 className="truncate font-semibold text-gray-900">{campaign.name}</h3>
            <span
              className={`shrink-0 rounded-full px-2.5 py-0.5 text-xs font-medium ${statusStyles[campaign.status]}`}
            >
              {statusLabel}
            </span>
          </div>
          {hasMetrics && (
            <div className="mt-2 flex gap-4 text-sm text-gray-500">
              <span>{campaign.sentCount.toLocaleString()} sent</span>
              <span>Open {campaign.openRate}%</span>
              <span>Click {campaign.clickRate}%</span>
            </div>
          )}
        </div>
      </div>
      <div className="mt-4 flex gap-2">
        <Button size="sm" variant="primary">
          View
        </Button>
        <Button size="sm" variant="ghost">
          Edit
        </Button>
      </div>
    </Card>
  );
}
