import HeroBadge from "./HeroBadge";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";

export default function HeroContent({
  data,
}) {
  return (
    <div className="flex flex-col items-center">
      <HeroBadge>
        {data.badge}
      </HeroBadge>

      <HeroTitle
        first={data.title.first}
        second={data.title.second}
      />

      <HeroDescription>
        {data.description}
      </HeroDescription>
    </div>
  );
}