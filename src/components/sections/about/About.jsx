import SectionContainer from "@/components/layout/SectionContainer";
import AboutContent from "./components/AboutContent";
import AboutIllustration from "./components/AboutIllustration";
import AboutHighlights from "./components/AboutHighlights";

// import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

import {
  ABOUT_SECTION_ID,
  // ABOUT_TITLE,
  // ABOUT_DESCRIPTION,
} from "./about.constants";

// import AboutHeader from "./components/AboutHeader";

export default function About() {
  return (
    <section id={ABOUT_SECTION_ID} className="relative overflow-hidden py-24">
      <SectionContainer>
        {/* <AboutHeader title={ABOUT_TITLE} description={ABOUT_DESCRIPTION} /> */}
        {/* <SectionHeader
          badge="About"
          align="left"
          title={ABOUT_TITLE}
          description={ABOUT_DESCRIPTION}
        /> */}

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          <AboutContent />

          <AboutIllustration />
        </div>

        <AboutHighlights />
      </SectionContainer>
    </section>
  );
}
