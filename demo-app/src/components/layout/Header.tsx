import { NotificationBell } from '../NotificationBell';

export function Header() {
  return (
    <header className="flex h-14 items-center justify-between border-b border-white/10 bg-[#2c2c2c] px-6">
      <div className="flex items-center gap-3">
        <div className="flex h-8 w-8 items-center justify-center rounded bg-[#eb1000]">
          <span className="text-sm font-bold text-white">A</span>
        </div>
        <span className="text-lg font-semibold tracking-tight text-white">
          Adobe Campaign
        </span>
      </div>
      <nav className="flex items-center gap-6">
        <a
          href="#"
          className="text-sm text-white/90 transition hover:text-white"
        >
          Help
        </a>
        <NotificationBell />
        <div className="h-8 w-px bg-white/20" />
        <div className="flex items-center gap-2">
          <div className="h-8 w-8 rounded-full bg-gradient-to-br from-indigo-500 to-purple-600" />
          <span className="text-sm font-medium text-white">Demo User</span>
        </div>
      </nav>
    </header>
  );
}
