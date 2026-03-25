export interface ActivityEvent {
  id: string;
  message: string;
  timestamp: string;
}

export const mockActivityEvents: ActivityEvent[] = [
  {
    id: 'a-1',
    message: 'Spring Product Launch 2025 sent to 12,450 recipients',
    timestamp: '2025-03-24T10:12:00Z',
  },
  {
    id: 'a-2',
    message: 'Weekly Newsletter #42 is sending — 8,920 of 12,000 sent',
    timestamp: '2025-03-24T09:45:00Z',
  },
  {
    id: 'a-3',
    message: 'Flash Sale — 24 Hours scheduled for Mar 25, 2:00 PM',
    timestamp: '2025-03-23T15:30:00Z',
  },
  {
    id: 'a-4',
    message: 'Re-engagement Campaign saved as draft',
    timestamp: '2025-03-22T14:18:00Z',
  },
  {
    id: 'a-5',
    message: 'Audience segment "High intent" updated (+340 contacts)',
    timestamp: '2025-03-21T11:00:00Z',
  },
];
