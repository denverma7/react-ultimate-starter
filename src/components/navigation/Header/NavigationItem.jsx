import { NavLink } from "react-router-dom";
import { cn } from "@/utils/cn";

export default function NavigationItem({
  label,
  href,
  className,
}) {
  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <a
        href={href}
        className={cn(
          "relative px-3 py-2 text-sm font-medium text-slate-700 transition-colors duration-200 hover:text-blue-600",
          className
        )}
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        cn(
          "relative px-3 py-2 text-sm font-medium transition-colors duration-200",
          isActive
            ? "text-blue-600"
            : "text-slate-700 hover:text-blue-600",
          className
        )
      }
    >
      {label}
    </NavLink>
  );
}