import {
  CheckCircle2,
  Circle,
} from "lucide-react";

import { frameworkModules } from "../about.data";

// const modules = [
//   {
//     name: "Hero",
//     done: true,
//   },
//   {
//     name: "Features",
//     done: true,
//   },
//   {
//     name: "About",
//     done: true,
//   },
//   {
//     name: "Pricing",
//     done: false,
//   },
//   {
//     name: "Testimonials",
//     done: false,
//   },
//   {
//     name: "FAQ",
//     done: false,
//   },
// ];

export default function FrameworkModules() {
  return (
    <div className="border-t border-slate-200 p-6">
      <h4 className="mb-4 font-semibold text-slate-900">
        Modules
      </h4>

      <div className="space-y-3">
        {frameworkModules.map((module) => (
          <div
            key={module.name}
            className="flex items-center gap-3"
          >
            {module.done ? (
              <CheckCircle2
                size={18}
                className="text-emerald-500"
              />
            ) : (
              <Circle
                size={18}
                className="text-slate-300"
              />
            )}

            <span className="text-slate-700">
              {module.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}