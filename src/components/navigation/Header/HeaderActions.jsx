import AuthButtons from "./AuthButtons";

export default function HeaderActions() {
  return (
    <div className="hidden items-center gap-4 lg:flex">
      <AuthButtons />
    </div>
  );
}