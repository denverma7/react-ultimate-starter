import Button from "@/components/ui/Button";
import HeroTrust from "./HeroTrust";

export default function HeroActions({
  primaryButton,
  secondaryButton,
}) {
  return (
    <>
      <div className="mt-10 flex flex-wrap gap-4">

        <Button size="lg">
          {primaryButton.text}
        </Button>

        <Button
          variant="outline"
          size="lg"
        >
          {secondaryButton.text}
        </Button>

      </div>

      <HeroTrust />
    </>
  );
}