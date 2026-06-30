import HeroBackground from "./HeroBackground";
import HeroGlow from "./HeroGlow";
import HeroImage from "./HeroImage";
import HeroShapes from "./HeroShapes";
import HeroParticles from "./HeroParticles";
import HeroParallax from "./HeroParallax";

export default function HeroRight() {
  return (
    <div className="relative flex min-height: 350px; items-center justify-center overflow-hidden lg:min-height: 600px;">

      <HeroBackground />

      <HeroGlow />

      <HeroParticles />

      <HeroShapes />

      <HeroParallax>
        <HeroImage />
      </HeroParallax>

    </div>
  );
}