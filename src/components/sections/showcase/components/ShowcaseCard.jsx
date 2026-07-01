import { motion } from "framer-motion";

import Card from "@/components/common/card";

import ShowcaseCardHeader from "./ShowcaseCardHeader";
import ShowcaseCardFooter from "./ShowcaseCardFooter";
import ShowcasePreviewFrame from "./ShowcasePreviewFrame";
import ShowcasePreview from "./ShowcasePreview";

import {
  fadeUp,
  liftHover,
} from "@/libs/animations";

export default function ShowcaseCard({
  item,
}) {
  return (
    <motion.div
      variants={fadeUp}
      whileHover={liftHover}
    >
      <Card>

        <ShowcaseCardHeader
          title={item.title}
          description={item.description}
          icon={item.icon}
        />

        <ShowcasePreviewFrame>

          <ShowcasePreview
            type={item.preview}
          />

        </ShowcasePreviewFrame>

        <ShowcaseCardFooter />

      </Card>
    </motion.div>
  );
}