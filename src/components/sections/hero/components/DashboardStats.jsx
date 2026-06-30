import {
  DollarSign,
  Users,
  ShoppingBag,
  TrendingUp,
} from "lucide-react";

import StatCard from "./StatCard";

const stats = [
  {
    title: "Revenue",
    value: "$48.2K",
    growth: "+12%",
    color: "bg-blue-600",
    icon: DollarSign,
  },
  {
    title: "Users",
    value: "12.4K",
    growth: "+18%",
    color: "bg-emerald-600",
    icon: Users,
  },
  {
    title: "Orders",
    value: "1,248",
    growth: "+9%",
    color: "bg-purple-600",
    icon: ShoppingBag,
  },
  {
    title: "Growth",
    value: "24%",
    growth: "+6%",
    color: "bg-orange-500",
    icon: TrendingUp,
  },
];

export default function DashboardStats() {
  return (
    <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          {...stat}
        />
      ))}
    </section>
  );
}