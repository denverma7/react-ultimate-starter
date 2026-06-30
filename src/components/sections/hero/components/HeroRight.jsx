import HeroBackground from "./HeroBackground";
import HeroGlow from "./HeroGlow";
import HeroImage from "./HeroImage";
import HeroShapes from "./HeroShapes";
import HeroParticles from "./HeroParticles";
import HeroParallax from "./HeroParallax";

export default function HeroRight() {
  return (
    <div className="relative hidden min-h-[600px] overflow-hidden lg:flex items-center justify-center">

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