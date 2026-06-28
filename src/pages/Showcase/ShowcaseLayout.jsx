import ShowcaseSidebar from "./ShowcaseSidebar";
import ShowcaseContent from "./ShowcaseContent";

export default function ShowcaseLayout() {
  return (
    <div className="flex min-h-screen bg-slate-50">
      <ShowcaseSidebar />
      <ShowcaseContent />
    </div>
  );
}
