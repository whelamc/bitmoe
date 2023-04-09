"use client";
import Image from "next/image";
import Link from "@/components/Link";
import DarkModeToggle from "@/components/DarkModeToggle";
import MenuToggle from "@/components/MenuToggle";
import LocaleSwitcher from "./LocaleSwitcher";
import { motion } from "framer-motion";

import { useTranslations } from "next-intl";

export default function TopNav() {
  const t = useTranslations("Nav");

  return (
    <div className="w-full bg-endeavour dark:bg-endeavour-800">
      <div className="m-auto flex max-w-[900px] justify-between py-4 md:max-w-[720px] sm:w-full sm:px-4 sm:relative">
        <div className="flex justify-center text-left">
          <motion.div
            className="m-auto cursor-pointer"
            whileHover={{
              translateX: ["-10%", "10%"],
              transition: { ease: "linear", repeat: Infinity, duration: 0.1 },
            }}
          >
            <Link href="/">
              <Image
                src="/images/bitmoe_logo_top.png"
                unoptimized
                alt="Bitmoe logo"
                width={96}
                height={19}
              />
            </Link>
          </motion.div>
        </div>
        <div className="flex items-center">
          <Link
            href="/about"
            className="rounded-lg h-full px-4 py-2 hover:bg-endeavour-300 dark:text-gray-500 dark:hover:bg-transparent sm:hidden"
          >
            <p>{t("about")}</p>
          </Link>
          <LocaleSwitcher />
          <DarkModeToggle />
          <a
            href="mailto:service@bitmoe.com"
            className="ml-4 rounded-lg bg-endeavour-700 px-4 py-2 hover:text-endeavour hover:drop-shadow-lg dark:bg-endeavour-200 dark:text-gray-500 dark:hover:drop-shadow-none sm:hidden"
          >
            <p>{t("contact")}</p>
          </a>
          <MenuToggle />
        </div>
      </div>
    </div>
  );
}
