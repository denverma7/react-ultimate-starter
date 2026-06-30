import { cn } from "@/libs/cn";

export default function CardImage({
  src,
  alt = "",
  className,
}) {
  return (
    <img
      src={src}
      alt={alt}
      className={cn(
        "w-full object-cover",
        className
      )}
    />
  );
}