import { Dispatch, ReactNode, RefObject, SetStateAction } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Dialog = ({
  children,
  isOpen,
  setIsOpen,
  ref,
}: {
  children: ReactNode;
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  ref: RefObject<HTMLDialogElement | null>;
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.dialog
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          className="bg-[#3b3a3a] dark:bg-white absolute top-16 left-[25%] p-7 h-[85%] w-[73%] rounded-[45px]"
          ref={ref}
          onClick={(e) => {
            if (e.target === e.currentTarget) {
              setIsOpen(false);
            }
          }}
          onCancel={() => setIsOpen(false)}
        >
          {children}
        </motion.dialog>
      )}
    </AnimatePresence>
  );
};

export default Dialog;
