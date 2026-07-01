import SectionContainer from "@/components/layout/SectionContainer";

import {
  FEATURES_SECTION_ID,
  FEATURES_TITLE,
  FEATURES_DESCRIPTION,
} from "./features.constants";

import { features } from "./features.data";

// import FeaturesHeader from "./components/FeaturesHeader";
import FeaturesGrid from "./components/FeaturesGrid";
import FeatureCard from "./components/FeatureCard";
import FeatureSectionBackground from "./components/FeatureSectionBackground";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

export default function Features() {
  return (
    <section
      id={FEATURES_SECTION_ID}
      className="relative overflow-hidden py-24"
    >
      <FeatureSectionBackground />
      {/* <div className="absolute inset-0 -z-10 bg-linear-to-b from-white via-slate-50 to-white" /> */}
      <SectionContainer>
        {/* <FeaturesHeader
          title={FEATURES_TITLE}
          description={FEATURES_DESCRIPTION}
        /> */}
        <SectionHeader
            badge="Features"
            title={FEATURES_TITLE}
            description={FEATURES_DESCRIPTION}
        />

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard key={feature.id} feature={feature} index={index} />
          ))}
        </FeaturesGrid>
      </SectionContainer>
    </section>
  );
}
