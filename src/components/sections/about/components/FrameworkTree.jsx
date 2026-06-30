import {
  Folder,
  FolderOpen,
} from "lucide-react";

const folders = [
  "components",
  "sections",
  "ui",
  "hooks",
  "lib",
  "assets",
];

export default function FrameworkTree() {
  return (
    <div className="space-y-3 p-6">
      <div className="flex items-center gap-3 font-semibold">
        <FolderOpen
          size={18}
          className="text-blue-600"
        />

        src
      </div>

      <div className="ml-6 space-y-2">
        {folders.map((folder) => (
          <div
            key={folder}
            className="flex items-center gap-3 text-slate-600"
          >
            <Folder
              size={16}
              className="text-blue-500"
            />

            {folder}
          </div>
        ))}
      </div>
    </div>
  );
}