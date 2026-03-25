import { Card } from './design-system';
import { useDeliveryStatus } from '../hooks/useDeliveryStatus';

interface DeliveryStatusCardProps {
  campaignId?: string;
}

const statusBadgeStyles: Record<string, string> = {
  delivered: 'bg-emerald-100 text-emerald-800',
  sent: 'bg-blue-100 text-blue-800',
  pending: 'bg-amber-100 text-amber-800',
  failed: 'bg-red-100 text-red-800',
};

export function DeliveryStatusCard({ campaignId }: DeliveryStatusCardProps) {
  const { status, loading } = useDeliveryStatus(campaignId);

  return (
    <Card title="Recent Delivery" variant="elevated">
      {loading ? (
        <div className="flex items-center gap-2 text-gray-500">
          <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
          Loading delivery status...
        </div>
      ) : status ? (
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Recipient</span>
            <span className="font-medium text-gray-900">{status.recipient}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-500">Status</span>
            <span
              className={`rounded-full px-2.5 py-0.5 text-xs font-medium ${
                statusBadgeStyles[status.status] ?? 'bg-gray-100 text-gray-700'
              }`}
            >
              {status.status}
            </span>
          </div>
          <div className="border-t border-gray-100 pt-2 text-xs text-gray-400">
            {new Date(status.timestamp).toLocaleString()}
          </div>
        </div>
      ) : (
        <p className="text-gray-500">No recent deliveries</p>
      )}
    </Card>
  );
}
