import { ArrowRight } from "lucide-react";

export default function FeatureLink({
  href = "#",
  children = "Learn More",
}) {
  return (
    <a
      href={href}
      className="mt-8 inline-flex items-center gap-2 font-semibold text-blue-600 transition-all duration-300 group-hover:gap-3"
    >
      {children}
      <ArrowRight size={18} />
    </a>
  );
}