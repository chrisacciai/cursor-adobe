import { useState, useEffect } from 'react';

export type DeliveryStatus = 'pending' | 'sent' | 'delivered' | 'failed';

export interface DeliveryInfo {
  id: string;
  status: DeliveryStatus;
  recipient: string;
  timestamp: string;
}

export function useDeliveryStatus(campaignId?: string) {
  const [status, setStatus] = useState<DeliveryInfo | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API fetch - in real app this would call Campaign API
    const timer = setTimeout(() => {
      setStatus({
        id: campaignId ?? 'default',
        status: 'delivered',
        recipient: 'user@example.com',
        timestamp: new Date().toISOString(),
      });
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [campaignId]);

  return { status, loading };
}
