import { Card } from './design-system';
import { useActivity } from '../hooks/useActivity';

export function ActivityFeed() {
  const { events, loading } = useActivity();

  return (
    <Card title="Recent Activity" variant="elevated">
      {loading ? (
        <div className="space-y-3">
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="h-4 rounded bg-gray-100" />
              <div className="mt-2 h-3 w-1/3 rounded bg-gray-100" />
            </div>
          ))}
        </div>
      ) : events.length === 0 ? (
        <p className="text-gray-500">No recent activity</p>
      ) : (
        <ul className="space-y-4">
          {events.map((event) => (
            <li key={event.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
              <p className="text-sm text-gray-900">{event.message}</p>
              <p className="mt-1 text-xs text-gray-400">
                {new Date(event.timestamp).toLocaleString()}
              </p>
            </li>
          ))}
        </ul>
      )}
    </Card>
  );
}
