"use client";
import { FaAddressCard, FaDochub } from "react-icons/fa";
import {useTranslations} from 'next-intl';

export default function InnerBanner({
  page
}: {
  page: string;
}) {
  const t = (page == "about" ?(useTranslations('About')):(useTranslations('Doc')))
  return (
    <div className="h-40 w-full bg-endeavour-300 dark:bg-endeavour-800 dark:text-gray-500">
      <div className="relative m-auto h-full max-w-[900px] md:max-w-[720px] md:min-h-min sm:w-full sm:px-4">
        <div className="text-4xl flex h-full items-center sm:m-auto sm:text-center sm:justify-center">
          {page == "about" ? (
            <FaAddressCard className="mr-5" />
          ) : (
            <FaDochub className="mr-5" />
          )}
          <p>{t('title')}</p>
        </div>
      </div>
    </div>
  );
}
