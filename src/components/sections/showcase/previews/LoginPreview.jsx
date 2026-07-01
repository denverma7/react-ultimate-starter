import PreviewWindow from "../components/PreviewWindow";
import PreviewInput from "../components/PreviewInput";
import PreviewButton from "../components/PreviewButton";

export default function LoginPreview() {
  return (
    <PreviewWindow>
      <div className="space-y-4 p-5">
        <h4 className="text-lg font-semibold text-slate-900">
          Welcome Back
        </h4>

        <PreviewInput placeholder="Email Address" />

        <PreviewInput placeholder="Password" />

        <PreviewButton>
          Sign In
        </PreviewButton>
      </div>
    </PreviewWindow>
  );
}