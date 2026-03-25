export type CampaignStatus = 'scheduled' | 'sending' | 'sent' | 'draft' | 'paused';

export interface Campaign {
  id: string;
  name: string;
  status: CampaignStatus;
  sentCount: number;
  openRate: number;
  clickRate: number;
  scheduledAt: string | null;
  sentAt: string | null;
  thumbnail?: string;
}

export const mockCampaigns: Campaign[] = [
  {
    id: 'campaign-001',
    name: 'Spring Product Launch 2025',
    status: 'sent',
    sentCount: 12450,
    openRate: 34.2,
    clickRate: 8.1,
    scheduledAt: null,
    sentAt: '2025-03-20T09:00:00Z',
    thumbnail: '🌸',
  },
  {
    id: 'campaign-002',
    name: 'Weekly Newsletter #42',
    status: 'sending',
    sentCount: 8920,
    openRate: 28.5,
    clickRate: 5.2,
    scheduledAt: null,
    sentAt: null,
    thumbnail: '📬',
  },
  {
    id: 'campaign-003',
    name: 'Flash Sale — 24 Hours',
    status: 'scheduled',
    sentCount: 0,
    openRate: 0,
    clickRate: 0,
    scheduledAt: '2025-03-25T14:00:00Z',
    sentAt: null,
    thumbnail: '⚡',
  },
  {
    id: 'campaign-004',
    name: 'Re-engagement Campaign',
    status: 'draft',
    sentCount: 0,
    openRate: 0,
    clickRate: 0,
    scheduledAt: null,
    sentAt: null,
    thumbnail: '🔄',
  },
];

export const mockStats = {
  totalCampaigns: 47,
  totalSent: 234000,
  avgOpenRate: 32.1,
  avgClickRate: 6.8,
};
