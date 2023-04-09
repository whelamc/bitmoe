import { motion } from "framer-motion";
import Link from "@/components/Link";
import { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

export default function MenuToggle() {
  const [showMenu, setMenu] = useState(false);
  return (
    <>
      <button
        className="rounded-lg h-full px-4 py-2 hover:bg-endeavour-300 dark:text-gray-500 dark:hover:bg-transparent hidden sm:block"
        onClick={() => setMenu(!showMenu)}
      >
        <FaEllipsisV />
      </button>
      <motion.div
        className={`rounded-lg h-auto w-auto px-4 py-4 bg-white absolute top-16 right-4 z-10 dark:bg-gray-200 ${
          showMenu ? "block" : "hidden"
        }`}
        variants={{
          open: {
            clipPath: "inset(0% 0% 0% 0% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.7,
              delayChildren: 0.3,
              staggerChildren: 0.05,
            },
          },
          closed: {
            clipPath: "inset(10% 50% 90% 50% round 10px)",
            transition: {
              type: "spring",
              bounce: 0,
              duration: 0.3,
            },
          },
        }}
        style={{ pointerEvents: showMenu ? "auto" : "none" }}
      >
        <Link
          href="/about"
          className="rounded-lg h-auto w-full py-2 px-4 mb-2 block text-gray-800 text-center hover:bg-endeavour-300 dark:text-gray-500 dark:hover:bg-transparent"
        >
          <p>关于我们</p>
        </Link>
        <a
          href="mailto:service@bitmoe.com"
          className="rounded-lg h-auto w-full bg-endeavour-700 py-2 px-4 text-white text-center block hover:text-endeavour hover:drop-shadow-lg dark:bg-endeavour-200 dark:text-gray-500 dark:hover:drop-shadow-none"
        >
          <p>联系我们</p>
        </a>
      </motion.div>
    </>
  );
}
