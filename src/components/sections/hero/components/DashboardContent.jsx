import Button from "@/components/ui/Button";
import DashboardStats from "./DashboardStats";
import DashboardChart from "./DashboardChart";

export default function DashboardContent() {
  return (
    <main className="flex-1 p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h3 className="text-2xl font-bold text-slate-900">
            Dashboard
          </h3>

          <p className="text-sm text-slate-500">
            Welcome back, Developer 👋
          </p>
        </div>

        <Button size="sm">
          Export
        </Button>
      </div>

      <DashboardStats />

      <DashboardChart />
    </main>
  );
}