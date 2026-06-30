import {
  ABOUT_TITLE,
  ABOUT_DESCRIPTION,
} from "../about.constants";

import AboutHeader from "./AboutHeader";
import AboutChecklist from "./AboutChecklist";

export default function AboutContent() {
  return (
    <div>
      <AboutHeader
        title={ABOUT_TITLE}
        description={ABOUT_DESCRIPTION}
      />

      <AboutChecklist />
    </div>
  );
}