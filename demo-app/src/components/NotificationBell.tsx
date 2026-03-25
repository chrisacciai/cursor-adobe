import { useEffect, useRef, useState } from 'react';
import { Card } from './design-system';
import { useNotifications } from '../hooks/useNotifications';
import type { NotificationType } from '../data/notifications';

const typeDotStyles: Record<NotificationType, string> = {
  success: 'bg-emerald-500',
  info: 'bg-blue-500',
  warning: 'bg-amber-500',
  error: 'bg-red-500',
};

function BellIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden
    >
      <path
        fillRule="evenodd"
        d="M5.25 9.75a6.75 6.75 0 0 1 13.5 0v.75c0 2.625.75 4.875 2.25 6.75a.75.75 0 0 1-.45 1.2H3.45a.75.75 0 0 1-.45-1.2c1.5-1.875 2.25-4.125 2.25-6.75v-.75ZM9 9.75a3 3 0 1 1 6 0v.75c0 1.5-.375 3-1.125 4.125A3.001 3.001 0 0 1 12 21a3 3 0 0 1-2.875-2.1c-.75-1.125-1.125-2.625-1.125-4.125V9.75Z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export function NotificationBell() {
  const { notifications, unreadCount, loading } = useNotifications();
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handlePointerDown(e: MouseEvent) {
      if (!rootRef.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handlePointerDown);
      return () => document.removeEventListener('mousedown', handlePointerDown);
    }
  }, [open]);

  return (
    <div className="relative" ref={rootRef}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className={[
          'group relative flex h-10 w-10 items-center justify-center rounded-full',
          'text-white/85 shadow-sm transition-all duration-200',
          'bg-white/[0.07] ring-1 ring-white/10',
          'hover:bg-white/[0.12] hover:text-white hover:ring-white/18',
          'focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white/40',
          open && 'bg-white/[0.16] text-white ring-white/25',
        ]
          .filter(Boolean)
          .join(' ')}
        aria-expanded={open}
        aria-haspopup="dialog"
        aria-label={`Notifications${unreadCount > 0 ? `, ${unreadCount} unread` : ''}`}
      >
        <BellIcon className="h-[22px] w-[22px] opacity-95 drop-shadow-[0_1px_1px_rgba(0,0,0,0.25)] transition-transform duration-200 group-hover:scale-105" />
        {!loading && unreadCount > 0 && (
          <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-[1.25rem] items-center justify-center rounded-full border-2 border-[#2c2c2c] bg-[#eb1000] px-1 text-[11px] font-bold tabular-nums leading-none text-white shadow-md">
            {unreadCount > 99 ? '99+' : unreadCount}
          </span>
        )}
      </button>

      {open && (
        <div className="absolute right-0 top-full z-50 mt-2 w-[min(100vw-2rem,22rem)]">
          <Card
            title="Notifications"
            className="shadow-xl ring-1 ring-black/5"
            variant="elevated"
          >
            {loading ? (
              <div className="flex items-center gap-2 text-sm text-gray-500">
                <span className="inline-block h-4 w-4 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
                Loading…
              </div>
            ) : notifications.length === 0 ? (
              <p className="text-sm text-gray-500">No notifications</p>
            ) : (
              <ul className="max-h-72 space-y-3 overflow-y-auto pr-1">
                {notifications.map((n) => (
                  <li
                    key={n.id}
                    className={`flex gap-3 border-b border-gray-100 pb-3 last:border-0 last:pb-0 ${
                      !n.read ? 'opacity-100' : 'opacity-75'
                    }`}
                  >
                    <span
                      className={`mt-1.5 h-2 w-2 shrink-0 rounded-full ${typeDotStyles[n.type]}`}
                      aria-hidden
                    />
                    <div className="min-w-0 flex-1">
                      <p className="text-sm text-gray-900">{n.message}</p>
                      <p className="mt-1 text-xs text-gray-400">
                        {new Date(n.timestamp).toLocaleString()}
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </Card>
        </div>
      )}
    </div>
  );
}
