import { useState } from "react";

import HamburgerButton from "./HamburgerButton";
import MobileDrawer from "./MobileDrawer";

import useEscapeKey from "@/hooks/useEscapeKey";
import useScrollLock from "@/hooks/useScrollLock";

export default function MobileNavigation() {
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  useScrollLock(open);

  useEscapeKey(closeMenu, open);

  return (
    <div className="lg:hidden">
      <HamburgerButton
        open={open}
        onClick={() => setOpen((prev) => !prev)}
      />

      <MobileDrawer
        open={open}
        onClose={closeMenu}
      />
    </div>
  );
}