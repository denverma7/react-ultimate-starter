import { Check } from "lucide-react";
import { cn } from "@/libs";

export default function FeatureListItem({
  children,
  icon: Icon = Check,
  className,
}) {
  return (
    <li
      className={cn(
        "flex items-center gap-3",
        className
      )}
    >
      <Icon
        size={16}
        className="text-emerald-500"
      />

      <span className="text-sm text-slate-600">
        {children}
      </span>
    </li>
  );
}