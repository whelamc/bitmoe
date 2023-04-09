"use client"
import {
  FaPhoneAlt,
  FaMailBulk,
  FaAddressCard,
  FaAngleDoubleRight,
} from "react-icons/fa";
import { info, contact } from "@/lib/about";

import {useTranslations} from 'next-intl';

type params = {
  type?: string;
};

export function IconComponent(params:params) {
  switch (params.type) {
    case "Phone":
      return <FaPhoneAlt className="m-auto mb-4 text-4xl"/>;
    case "Email":
      return <FaMailBulk className="m-auto mb-4 text-4xl"/>;
    case "Address":
      return <FaAddressCard className="m-auto mb-4 text-4xl"/>;
    default:
      return <FaAngleDoubleRight className="m-auto mb-4 text-4xl"/>;
  }
}
export default function Page() {
  const item = info;
  const item2 = contact;

  const t = useTranslations('About');
  const tt = useTranslations('Timeline');
  const tc = useTranslations('Contact');
  return (
    <>
      <div className="m-auto min-h-screen max-w-[900px] md:max-w-[720px] md:min-h-min sm:w-full sm:px-4 sm:min-h-min">
        <div className="py-12 sm:py-4">
          <p className="my-8 text-center text-3xl text-gray-900 dark:text-gray-500">
          {t('history')}
          </p>
          <div>
            {item.map((i) => {
              return (
                <div className="mb-8" key={i.title}>
                  <p className="mb-2 text-base text-gray-900 dark:text-gray-500">
                    {tt(`${i.title}-title`)}
                  </p>
                  <p className="mb-2 text-sm text-gray-500">{tt(`${i.title}-description`)}</p>
                  <span className="bg-endeavour-300 px-4 py-2 text-sm dark:bg-endeavour-200 dark:text-gray-500">
                  {tt(`${i.title}-date`)}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
        <div className="py-12 text-gray-900 dark:text-gray-500 sm:py-4">
          <p className="my-8 text-center text-3xl">{t('contact')}</p>
          <div className="mb-8 flex justify-between gap-12 text-center sm:justify-normal sm:gap-4 sm:grid sm:grid-cols-2 sm:content-center">
            {item2.map((i)=>{
              return (
                <div className="flex-1 sm:flex-none" key={i.type}>
                <IconComponent type={i.type || ""} />
                <p>{tc(`${i.type}-slug`)}</p>
              </div>
              )
            })}
          </div>
        </div>
      </div>
    </>
  );
}
