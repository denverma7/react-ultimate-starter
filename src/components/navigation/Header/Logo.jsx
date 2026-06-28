import { Link } from "react-router-dom";
import { LOGO_TEXT } from "./header.constants";

export default function Logo({
  logo,
  href = "/",
}) {
  return (
    <Link
      to={href}
      className="flex items-center gap-3"
    >
      {logo && (
        <img
          src={logo}
          alt={LOGO_TEXT}
          className="h-10 w-auto"
        />
      )}

      <span className="text-2xl font-bold tracking-tight text-slate-900">
        {LOGO_TEXT}
      </span>
    </Link>
  );
}