import { CardFooter } from "@/components/common/card";

export default function ShowcaseCardFooter() {
  return (
    <CardFooter>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2 text-xs text-emerald-600">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          Live Preview
        </div>

        <div className="flex gap-2">
          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">
            React
          </span>

          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">
            Tailwind
          </span>

          <span className="rounded-full bg-slate-100 px-2 py-1 text-xs">
            Motion
          </span>
        </div>
      </div>
    </CardFooter>
  );
}