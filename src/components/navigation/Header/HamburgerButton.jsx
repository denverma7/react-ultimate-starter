import { Menu, X } from "lucide-react";

export default function HamburgerButton({
  open,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle Menu"
      className="rounded-lg p-2 transition hover:bg-slate-100 lg:hidden"
    >
      {open ? <X size={26} /> : <Menu size={26} />}
    </button>
  );
}