import FeatureListItem from "./FeatureListItem";

export default function FeatureList({
  items = [],
  icon,
}) {
  return (
    <ul className="space-y-4">
      {items.map((item) => (
        <FeatureListItem
          key={item}
          icon={icon}
        >
          {item}
        </FeatureListItem>
      ))}
    </ul>
  );
}