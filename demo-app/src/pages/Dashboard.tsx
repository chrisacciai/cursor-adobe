import { Card } from '../components/design-system';
import { Button } from '../components/design-system';
import { StatsCard } from '../components/StatsCard';
import { CampaignCard } from '../components/CampaignCard';
import { DeliveryStatusCard } from '../components/DeliveryStatusCard';
import { ActivityFeed } from '../components/ActivityFeed';
import { useCampaigns } from '../hooks/useCampaigns';

export function Dashboard() {
  const { campaigns, stats, loading } = useCampaigns();

  return (
    <div className="min-h-full">
      {/* Hero banner */}
      <div className="bg-gradient-to-r from-[#2c2c2c] via-[#363636] to-[#2c2c2c] px-8 py-6">
        <p className="text-sm font-medium text-white/80">
          Welcome back — here's what's happening with your campaigns
        </p>
        <p className="mt-1 text-2xl font-bold tracking-tight text-white">
          Campaign Dashboard
        </p>
      </div>

      <div className="p-8">
      {/* Page header */}
      <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight text-gray-900">
            Overview
          </h1>
          <p className="mt-1 text-gray-500">
            Manage and monitor your marketing campaigns
          </p>
        </div>
        <Button variant="primary" size="lg">
          + New Campaign
        </Button>
      </div>

      {/* Stats row */}
      <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          label="Total Campaigns"
          value={loading ? '—' : stats.totalCampaigns}
          icon="📊"
        />
        <StatsCard
          label="Emails Sent"
          value={stats.totalSent.toLocaleString()}
          icon="📤"
        />
        <StatsCard
          label="Avg. Open Rate"
          value={loading ? '—' : `${stats.avgOpenRate}%`}
          subtitle="vs 28% benchmark"
          trend="up"
          icon="📈"
        />
        <StatsCard
          label="Avg. Click Rate"
          value={loading ? '—' : `${stats.avgClickRate}%`}
          subtitle="vs 5% benchmark"
          trend="up"
          icon="👆"
        />
      </div>

      {/* Main content grid */}
      <div className="grid gap-8 lg:grid-cols-3">
        {/* Campaigns list - takes 2 columns */}
        <div className="lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-semibold text-gray-900">
              Recent Campaigns
            </h2>
            <button className="text-sm font-medium text-[#eb1000] hover:underline">
              View all
            </button>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {loading
              ? Array.from({ length: 4 }).map((_, i) => (
                  <Card key={i} className="animate-pulse">
                    <div className="h-16 rounded bg-gray-100" />
                    <div className="mt-3 h-4 w-2/3 rounded bg-gray-100" />
                  </Card>
                ))
              : campaigns.map((campaign) => (
                  <CampaignCard key={campaign.id} campaign={campaign} />
                ))}
          </div>
        </div>

        {/* Sidebar - delivery status + overview */}
        <div className="space-y-6">
          <DeliveryStatusCard campaignId="campaign-001" />
          <ActivityFeed />
          <Card title="Quick Actions" variant="elevated">
            <div className="flex flex-col gap-2">
              <Button variant="secondary" className="w-full justify-center">
                Create Email
              </Button>
              <Button variant="ghost" className="w-full justify-center">
                Import Audience
              </Button>
            </div>
          </Card>
        </div>
      </div>
      </div>
    </div>
  );
}
