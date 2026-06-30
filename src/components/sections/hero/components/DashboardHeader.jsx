import { Bell, Search } from "lucide-react";

export default function DashboardHeader() {
  return (
    <header className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
      <div className="flex items-center gap-2">
        <span className="h-3 w-3 rounded-full bg-red-400" />
        <span className="h-3 w-3 rounded-full bg-yellow-400" />
        <span className="h-3 w-3 rounded-full bg-green-400" />
      </div>

      <div className="flex items-center gap-4">
        <Search
          size={18}
          className="text-slate-500"
        />

        <Bell
          size={18}
          className="text-slate-500"
        />
      </div>
    </header>
  );
}