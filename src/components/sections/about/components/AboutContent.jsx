import {
  ABOUT_TITLE,
  ABOUT_DESCRIPTION,
} from "../about.constants";

// import AboutHeader from "./AboutHeader";
import AboutChecklist from "./AboutChecklist";
import SectionHeader from "@/components/common/SectionHeader/SectionHeader";

export default function AboutContent() {
  return (
    <div>
      <SectionHeader
    badge="About"
    align="left"
    title={ABOUT_TITLE}
    description={ABOUT_DESCRIPTION}
/>

      <AboutChecklist />
    </div>
  );
}