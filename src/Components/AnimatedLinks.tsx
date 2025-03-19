import { motion } from "framer-motion";
import Link from "next/link";

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: "easeInOut" },
  }),
  hover: { scale: 1.1, transition: { duration: 0.3 } },
};

const links = [
  "Home",
  "Team",
  "Pricing",
  "Resume",
  "About Us",
  "Portfolio",
  "Contact Us",
  "Cover Letter",
  "Technologies",
  "Additional Letter",
  "Getting Started with Tumigo",
];

export default function AnimatedLinks() {
  return (
    <div className="p-4 text-white w-full h-full py-10 flex flex-col justify-center items-center space-y-8 md:space-y-12">
      {links.map((text, i) => (
        <motion.div
          key={text}
          variants={linkVariants}
          initial="hidden"
          animate="visible"
          whileHover="hover"
          custom={i}
        >
          <Link
            href="/"
            className={`text-center text-lg md:text-4xl font-normal py-2 px-6 rounded-full transition-all duration-300 ${
              text === "Getting Started with Tumigo"
                ? "bg-indigo-600 hover:bg-indigo-600/80"
                : "hover:bg-[#272727]"
            }`}
          >
            {text}
          </Link>
        </motion.div>
      ))}
    </div>
  );
}
