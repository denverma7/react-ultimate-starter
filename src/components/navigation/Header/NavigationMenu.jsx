import NavigationItem from "./NavigationItem";

export default function NavigationMenu({
  links,
}) {
  return (
    <ul className="flex items-center gap-2">
      {links.map((link) => (
        <li key={link.id}>
          <NavigationItem
            label={link.label}
            href={link.href}
          />
        </li>
      ))}
    </ul>
  );
}