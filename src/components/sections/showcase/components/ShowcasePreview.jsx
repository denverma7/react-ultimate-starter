import { previewComponents } from "../previews";

export default function ShowcasePreview({
  type,
}) {
  const Preview = previewComponents[type];

  if (!Preview) return null;

  return <Preview />;
}