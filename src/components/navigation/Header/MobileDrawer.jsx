import { motion, AnimatePresence } from "framer-motion";

import { navigationLinks } from "./header.data";
import MobileNavItem from "./MobileNavItem";
import AuthButtons from "./AuthButtons";

export default function MobileDrawer({
  open,
  onClose,
}) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 z-40 bg-black/40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 28,
            }}
            className="fixed right-0 top-0 z-50 flex h-screen w-80 flex-col bg-white p-6 shadow-2xl lg:hidden"
          >
            <h2 className="mb-8 text-2xl font-bold">
              Menu
            </h2>

            <nav className="flex-1">
              {navigationLinks.map((item) => (
                <MobileNavItem
                  key={item.id}
                  {...item}
                  onClick={onClose}
                />
              ))}
            </nav>

            <div className="mt-6">
              <AuthButtons vertical/>
            </div>
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}