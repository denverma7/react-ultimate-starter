import SectionContainer from "@/components/layout/SectionContainer";

import {
  SHOWCASE_SECTION_ID,
  SHOWCASE_TITLE,
  SHOWCASE_DESCRIPTION,
} from "./showcase.constants";

// import ShowcaseHeader from "./components/ShowcaseHeader";
import ShowcaseGrid from "./components/ShowcaseGrid";
import ShowcaseBackground from "./components/ShowcaseBackground";
import { showcaseItems } from "./showcase.data";
import ShowcaseCard from "./components/ShowcaseCard";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

export default function Showcase() {
  return (
    <section
      id={SHOWCASE_SECTION_ID}
      className="relative overflow-hidden py-24"
    >
      <ShowcaseBackground />

      <SectionContainer>
        {/* <ShowcaseHeader
          title={SHOWCASE_TITLE}
          description={SHOWCASE_DESCRIPTION}
        /> */}
        <SectionHeader
          badge="Showcase"
          title={SHOWCASE_TITLE}
          description={SHOWCASE_DESCRIPTION}
          className="mb-12"
        />

        <ShowcaseGrid>
          {showcaseItems.map((item) => (
            <ShowcaseCard key={item.id} item={item} />
          ))}
        </ShowcaseGrid>
      </SectionContainer>
    </section>
  );
}
