import { Card } from './design-system';

interface StatsCardProps {
  label: string;
  value: string | number;
  subtitle?: string;
  trend?: 'up' | 'down' | 'neutral';
  icon?: string;
}

const trendStyles = {
  up: 'text-emerald-600',
  down: 'text-red-600',
  neutral: 'text-gray-500',
};

export function StatsCard({ label, value, subtitle, trend, icon }: StatsCardProps) {
  return (
    <Card className="transition-shadow duration-200 hover:shadow-lg" variant="elevated">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{label}</p>
          <p className="mt-1 text-2xl font-bold tracking-tight text-gray-900">
            {value}
          </p>
          {subtitle && (
            <p className={`mt-1 text-sm ${trend ? trendStyles[trend] : 'text-gray-500'}`}>
              {subtitle}
            </p>
          )}
        </div>
        {icon && (
          <span className="text-2xl opacity-80">{icon}</span>
        )}
      </div>
    </Card>
  );
}
