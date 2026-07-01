import PreviewWindow from "../components/PreviewWindow";
import PreviewButton from "../components/PreviewButton";
import PreviewBadge from "../components/PreviewBadge";
import PreviewFeature from "../components/PreviewFeature";

export default function PricingPreview() {
  return (
    <PreviewWindow>
      <div className="space-y-4 p-5">
        <PreviewBadge>
          Pro Plan
        </PreviewBadge>

        <div>
          <h3 className="text-3xl font-bold">
            $29
          </h3>

          <p className="text-sm text-slate-500">
            per month
          </p>
        </div>

        <PreviewFeature>
          Unlimited Projects
        </PreviewFeature>

        <PreviewFeature>
          Priority Support
        </PreviewFeature>

        <PreviewButton>
          Upgrade
        </PreviewButton>
      </div>
    </PreviewWindow>
  );
}