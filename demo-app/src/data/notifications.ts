export type NotificationType = 'success' | 'info' | 'warning' | 'error';

export interface Notification {
  id: string;
  message: string;
  type: NotificationType;
  timestamp: string;
  read: boolean;
}

export const mockNotifications: Notification[] = [
  {
    id: 'n-1',
    message: 'Campaign "Spring Product Launch 2025" finished sending.',
    type: 'success',
    timestamp: '2025-03-24T10:15:00Z',
    read: false,
  },
  {
    id: 'n-2',
    message: 'Open rate for Weekly Newsletter exceeded your 30% goal.',
    type: 'info',
    timestamp: '2025-03-24T08:42:00Z',
    read: false,
  },
  {
    id: 'n-3',
    message: 'Audience sync completed — 2,400 new profiles imported.',
    type: 'info',
    timestamp: '2025-03-23T16:20:00Z',
    read: false,
  },
  {
    id: 'n-4',
    message: 'SMTP throttling detected for transactional template.',
    type: 'warning',
    timestamp: '2025-03-23T11:05:00Z',
    read: true,
  },
  {
    id: 'n-5',
    message: 'Scheduled send "Flash Sale" will launch in 24 hours.',
    type: 'info',
    timestamp: '2025-03-22T09:00:00Z',
    read: true,
  },
];
