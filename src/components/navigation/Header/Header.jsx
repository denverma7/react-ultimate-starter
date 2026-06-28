// import { useEffect, useState } from "react";
// import { motion } from "framer-motion";

// import HeaderContainer from "./HeaderContainer";
// import Logo from "./Logo";

// import { cn } from "@/utils/cn";

// import {
//   HEADER_HEIGHT,
//   HEADER_SCROLL_HEIGHT,
//   HEADER_VARIANTS,
// } from "./header.constants";

// // Volume 2
// import DesktopNavigation from "./DesktopNavigation";

// // Volume 2
// import HeaderActions from "./HeaderActions";

// // Volume 3
// import MobileNavigation from "./MobileNavigation";

// export default function Header() {
//   const [scrolled, setScrolled] =
//     useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 30);
//     };

//     window.addEventListener(
//       "scroll",
//       handleScroll
//     );

//     return () =>
//       window.removeEventListener(
//         "scroll",
//         handleScroll
//       );
//   }, []);

//   return (
//     <motion.header
//       initial={{
//         y: -80,
//       }}
//       animate={{
//         y: 0,
//       }}
//       transition={{
//         duration: 0.4,
//       }}
//       className={cn(
//         "fixed inset-x-0 top-0 z-50 transition-all duration-300",
//         scrolled
//           ? HEADER_VARIANTS.blur
//           : HEADER_VARIANTS.transparent
//       )}
//       style={{
//         height: scrolled
//           ? HEADER_SCROLL_HEIGHT
//           : HEADER_HEIGHT,
//       }}
//     >
//       <HeaderContainer>

//         <Logo />

//         <DesktopNavigation />

//         <HeaderActions />

//         <MobileNavigation />

//       </HeaderContainer>
//     </motion.header>
//   );
// }

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import DesktopNavigation from "./DesktopNavigation";
import HeaderActions from "./HeaderActions";
import MobileNavigation from "./MobileNavigation";

import HeaderContainer from "./HeaderContainer";
import Logo from "./Logo";

import { cn } from "@/utils/cn";

import {
  HEADER_HEIGHT,
  HEADER_SCROLL_HEIGHT,
  HEADER_VARIANTS,
} from "./header.constants";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        scrolled
          ? HEADER_VARIANTS.blur
          : HEADER_VARIANTS.transparent
      )}
      style={{
        height: scrolled
          ? HEADER_SCROLL_HEIGHT
          : HEADER_HEIGHT,
      }}
    >
      <HeaderContainer>
        <Logo />

        <DesktopNavigation />

        <HeaderActions />
        <MobileNavigation />
      </HeaderContainer>
    </motion.header>
  );
}