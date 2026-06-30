import {
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Settings,
} from "lucide-react";

const items = [
  LayoutDashboard,
  BarChart3,
  Users,
  CreditCard,
  Settings,
];

export default function DashboardSidebar() {
  return (
    <aside className="hidden w-20 flex-col border-r border-slate-200 bg-slate-50 py-6 md:flex">
      <div className="mb-10 h-10 w-10 rounded-xl bg-blue-600" />

      <nav className="flex flex-col gap-7">
        {items.map((Icon, index) => (
          <button
            key={index}
            className="rounded-xl p-2 transition hover:bg-blue-100"
            aria-label="Dashboard navigation"
          >
            <Icon
              size={20}
              className="text-slate-600"
            />
          </button>
        ))}
      </nav>
    </aside>
  );
}