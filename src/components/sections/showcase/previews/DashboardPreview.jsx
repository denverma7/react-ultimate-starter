import PreviewWindow from "../components/PreviewWindow";
import PreviewStat from "../components/PreviewStat";
import PreviewProgress from "../components/PreviewProgress";

export default function DashboardPreview() {
  return (
    <PreviewWindow>
      <div className="space-y-5 p-5">
        <h4 className="text-lg font-semibold text-slate-900">
          Dashboard
        </h4>

        <div className="grid grid-cols-2 gap-3">
          <PreviewStat
            label="Revenue"
            value="$48K"
          />

          <PreviewStat
            label="Users"
            value="2.4K"
          />
        </div>

        <PreviewProgress value={72} />
      </div>
    </PreviewWindow>
  );
}