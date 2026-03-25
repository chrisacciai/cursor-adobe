const navItems = [
  { label: 'Campaigns', icon: '📧', active: true },
  { label: 'Audiences', icon: '👥', active: false },
  { label: 'Content', icon: '📄', active: false },
  { label: 'Analytics', icon: '📊', active: false },
  { label: 'Administration', icon: '⚙️', active: false },
];

export function Sidebar() {
  return (
    <aside className="flex w-56 flex-col border-r border-white/10 bg-[#1f1f1f]">
      <nav className="flex flex-col gap-0.5 p-3">
        {navItems.map((item) => (
          <a
            key={item.label}
            href="#"
            className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition ${
              item.active
                ? 'bg-white/10 text-white'
                : 'text-white/70 hover:bg-white/5 hover:text-white'
            }`}
          >
            <span className="text-base">{item.icon}</span>
            {item.label}
          </a>
        ))}
      </nav>
      <div className="mt-auto border-t border-white/10 p-3">
        <div className="rounded-lg bg-white/5 px-3 py-2 text-xs text-white/60">
          <p className="font-medium text-white/80">Quick start</p>
          <p className="mt-1">Create your first campaign in minutes</p>
        </div>
      </div>
    </aside>
  );
}
