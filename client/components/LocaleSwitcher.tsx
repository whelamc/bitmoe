import { useLocale } from "next-intl";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { useTranslations } from "next-intl";

export default function LocaleSwitcher() {
  const t = useTranslations("Nav");
  const pathName = usePathname();
  const locale = useLocale();
  const otherLocale = locale === "en" ? "" : "/en";
  const linkUrl = `${otherLocale}${pathName.replace(`/${locale}`, "")}` || "/";

  return (
    <Link
      href={linkUrl}
      className="rounded-lg h-full px-4 py-2 hover:bg-endeavour-300 cursor-pointer dark:text-gray-500 dark:hover:bg-transparent"
    >
      {t("langContent")}
    </Link>
  );
}
