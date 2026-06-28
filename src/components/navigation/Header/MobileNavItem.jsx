import { NavLink } from "react-router-dom";

export default function MobileNavItem({
  label,
  href,
  onClick,
}) {
  const isAnchor = href.startsWith("#");

  if (isAnchor) {
    return (
      <a
        href={href}
        onClick={onClick}
        className="block rounded-lg px-4 py-3 text-lg transition hover:bg-slate-100"
      >
        {label}
      </a>
    );
  }

  return (
    <NavLink
      to={href}
      onClick={onClick}
      className="block rounded-lg px-4 py-3 text-lg transition hover:bg-slate-100"
    >
      {label}
    </NavLink>
  );
}