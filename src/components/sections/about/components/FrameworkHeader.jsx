import {
  Folder,
  GitBranch,
} from "lucide-react";

export default function FrameworkHeader() {
  return (
    <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4">
      <div className="flex items-center gap-3">
        <Folder
          size={18}
          className="text-blue-600"
        />

        <span className="font-semibold">
          React Starter
        </span>
      </div>

      <GitBranch
        size={18}
        className="text-slate-400"
      />
    </div>
  );
}