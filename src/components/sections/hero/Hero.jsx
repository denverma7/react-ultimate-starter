import { heroData } from "./hero.data";
import { HERO_MIN_HEIGHT } from "./hero.constants";

import HeroContainer from "./components/HeroContainer";
import HeroContent from "./components/HeroContent";
import HeroActions from "./components/HeroActions";
import HeroStats from "./components/HeroStats";
import HeroRight from "./components/HeroRight";
import HeroScrollIndicator from "./components/HeroScrollIndicator";

export default function Hero() {
  return (
    <section
      id="home"
      className={`${HERO_MIN_HEIGHT} flex items-center pt-24`}
    >
      <HeroContainer className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        {/* Left */}
        <div>
          <HeroContent data={heroData} />

          <HeroActions
            primaryButton={heroData.primaryButton}
            secondaryButton={heroData.secondaryButton}
          />

          <HeroStats
            stats={heroData.stats}
          />
        </div>

        {/* Right (Temporary Placeholder) */}
        <HeroRight />
      </HeroContainer>
      <HeroScrollIndicator />
    </section>
  );
}