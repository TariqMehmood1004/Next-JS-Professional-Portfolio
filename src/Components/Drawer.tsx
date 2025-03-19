import { Button } from "@heroui/react";
import { motion } from "framer-motion";
import AnimatedLinks from "./AnimatedLinks";

const drawerVariants = {
  hidden: { x: "-100%" }, // Start from the left (off-screen)
  visible: { x: 0, transition: { duration: 0.5, ease: "easeInOut" } }, // Slide in
  exit: { x: "-100%", transition: { duration: 0.4, ease: "easeInOut" } }, // Slide out
};

const Drawer = ({ isOpen, toggleMenu }: { isOpen: boolean; toggleMenu: () => void }) => {
  return (
    <motion.div
      className="fixed top-0 left-0 w-full h-full md:w-screen md:h-screen bg-[#171717] z-50 shadow-lg md:shadow-none overflow-y-auto"
      initial="hidden"
      animate={isOpen ? "visible" : "hidden"}
      exit="exit"
      variants={drawerVariants}
    >
    {/* Close Button */}
      <Button
        onClick={toggleMenu}
        className="absolute top-8 right-8 rounded-full dark:bg-[#171717] bg-[#171717] dark:hover:bg-[#272727] hover:bg-[#272727] transition-all duration-300 outline-none border-none w-20 h-20 flex  flex-col items-center justify-center text-center"
      >
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full transition-all duration-300 transform rotate-45 translate-y-1"></div>
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full hidden transition-all duration-300"></div>
        <div className="w-12 h-1 dark:bg-[var(--primary)] bg-[var(--background)] rounded-full transition-all duration-300 transform -rotate-45 -translate-y-2"></div>
      </Button>

      <AnimatedLinks />
    </motion.div>
  );
};

export default Drawer;

