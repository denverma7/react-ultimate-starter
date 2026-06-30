import HeroStatItem from "./HeroStatItem";

export default function HeroStats({
  stats,
}) {
  return (
    <div className="mt-12 grid grid-cols-3 gap-5">
      {stats.map((item) => (
        <HeroStatItem
          key={item.id}
          {...item}
        />
      ))}
    </div>
  );
}