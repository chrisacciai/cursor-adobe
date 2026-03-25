import { useState, useEffect } from 'react';
import { mockCampaigns, mockStats, type Campaign } from '../data/campaigns';

const emptyStats = {
  totalCampaigns: 0,
  totalSent: 0,
  avgOpenRate: 0,
  avgClickRate: 0,
};

export function useCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [stats, setStats] = useState(emptyStats);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCampaigns(mockCampaigns);
      setStats(mockStats);
      setLoading(false);
    }, 400);
    return () => clearTimeout(timer);
  }, []);

  return { campaigns, stats, loading };
}
