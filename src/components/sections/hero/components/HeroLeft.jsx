import HeroContent from "./HeroContent";
import HeroActions from "./HeroActions";
import HeroStats from "./HeroStats";

export default function HeroLeft({
  data,
}) {
  return (
    <div className="w-full">
      <HeroContent
        data={data}
      />

      <HeroActions
        primaryButton={data.primaryButton}
        secondaryButton={data.secondaryButton}
      />

      <HeroStats
        stats={data.stats}
      />
    </div>
  );
}