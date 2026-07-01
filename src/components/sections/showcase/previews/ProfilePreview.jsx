import PreviewWindow from "../components/PreviewWindow";
import PreviewAvatar from "../components/PreviewAvatar";
import PreviewBadge from "../components/PreviewBadge";

export default function ProfilePreview() {
  return (
    <PreviewWindow>
      <div className="flex flex-col items-center p-6">
        <PreviewAvatar />

        <h4 className="mt-4 text-lg font-semibold">
          John Doe
        </h4>

        <p className="text-sm text-slate-500">
          Frontend Developer
        </p>

        <div className="mt-4">
          <PreviewBadge>
            Online
          </PreviewBadge>
        </div>
      </div>
    </PreviewWindow>
  );
}