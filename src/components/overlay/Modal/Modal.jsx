import { useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Portal from "@/utils/Portal";
import { cn } from "@/utils/cn";

import useEscapeKey from "@/hooks/useEscapeKey";
import useScrollLock from "@/hooks/useScrollLock";
import useClickOutside from "@/hooks/useClickOutside";

const sizes = {
  sm: "max-w-sm",
  md: "max-w-lg",
  lg: "max-w-2xl",
  xl: "max-w-4xl",
  full: "max-w-7xl",
};

export default function Modal({
  open,
  onClose,
  children,
  size = "md",
  closeOnOverlay = true,
  closeOnEsc = true,
  showCloseButton = false,
  className,
}) {
  const modalRef = useRef(null);

  useScrollLock(open);

  useEscapeKey(() => {
    if (closeOnEsc && open) {
      onClose?.();
    }
  }, open);

  useClickOutside(
    modalRef,
    () => {
      if (closeOnOverlay) {
        onClose?.();
      }
    },
    open
  );

  return (
    <Portal>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={modalRef}
              initial={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.95,
                y: 20,
              }}
              transition={{
                duration: 0.25,
              }}
              className={cn(
                "relative w-full overflow-hidden rounded-xl bg-white shadow-2xl",
                sizes[size],
                className
              )}
              role="dialog"
              aria-modal="true"
            >
              {showCloseButton && (
                <button
                  onClick={onClose}
                  className="absolute right-4 top-4 rounded-md p-2 transition hover:bg-slate-100"
                  aria-label="Close modal"
                >
                  ✕
                </button>
              )}

              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}