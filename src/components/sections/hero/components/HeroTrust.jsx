import { ShieldCheck } from "lucide-react";

export default function HeroTrust() {
  return (
    <div className="mt-8 flex items-center gap-3 text-slate-600">

      <ShieldCheck
        className="text-emerald-500"
        size={20}
      />

      <span className="text-sm">
        Trusted by developers worldwide
      </span>

    </div>
  );
}