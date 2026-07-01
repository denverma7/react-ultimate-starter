import {
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/common/card";

export default function ShowcaseCardHeader({
  title,
  description,
  icon: Icon,
}) {
  return (
    <CardHeader>
      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-linear-to-br from-indigo-600 via-blue-600 to-cyan-500 text-white">
        <Icon size={22} />
      </div>

      <CardTitle>
        {title}
      </CardTitle>

      <CardDescription>
        {description}
      </CardDescription>
    </CardHeader>
  );
}