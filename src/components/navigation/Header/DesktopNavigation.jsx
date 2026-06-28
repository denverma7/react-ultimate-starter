import NavigationMenu from "./NavigationMenu";
import { navigationLinks } from "./header.data";

export default function DesktopNavigation() {
  return (
    <nav className="hidden lg:flex">
      <NavigationMenu links={navigationLinks} />
    </nav>
  );
}