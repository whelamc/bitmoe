"use client";
import Link from "@/components/Link";
import Image from "next/image";
import { motion } from "framer-motion";

import {useTranslations} from 'next-intl';

type Item = {
  name: string;
  details: {
    name: string;
    proUrl?: string;
    pic?: string;
  };
};

export default function ProductCard({ products }: { products: Item[] }) {
  const t = useTranslations('Index');
  const tp = useTranslations('Products');
  return (
    <>
      {products.map((section: any, index: number) => {
        return (
          <div
            key={section.name}
            className={`${index % 2 == 0 ? "bg-endeavour-300" : "bg-endeavour-200"} dark:bg-endeavour-700`}
          >
            <div className="m-auto flex h-96 max-w-[900px] py-12 gap-10 md:max-w-[720px] md:min-h-min sm:py-10 sm:h-full sm:gap-0 sm:w-full sm:px-8 sm:flex-wrap">
              <div
                className={`h-full w-1/2 ${
                  index % 2 == 0 ? "order-first" : "order-last"
                } sm:w-full sm:order-first sm:mb-6`}
              >
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: false }}
                  className="h-full w-full"
                >
                  <div className="h-full w-full rounded-lg relative text-center bg-white px-4 py-4 dark:bg-endeavour-200">
                    <Image
                      className="m-auto"
                      src={`${section.details.pic || '/images/bitmoe_logo_footer.png'}`}
                      unoptimized
                      alt={`${section.details.name}`}
                      width={100}
                      height={100}
                      style={{
                        width: 'auto',
                        height: '100%',
                      }}
                    />
                  </div>
                </motion.div>
              </div>
              <div
                className={`h-full w-1/2 ${
                  index % 2 == 0 ? "order-last" : "order-first"
                } sm:w-full sm:order-last`}
              >
                <p className="w-full overflow-hidden text-ellipsis whitespace-nowrap break-all text-3xl text-endeavour-700 dark:text-gray-800">
                {tp(`${section.details.name}-name`)}
                </p>
                <p className="mb-2 w-full overflow-hidden text-ellipsis whitespace-nowrap break-all text-xl text-gray-800 dark:text-gray-800">
                {tp(`${section.details.name}-slug`)}
                </p>
                <p className="mb-6 text-gray-500 dark:text-gray-800">
                {tp(`${section.details.name}-description`)}
                </p>
                <div className="flex sm:w-full sm:justify-center sm:gap-10">
                  <a
                    href="mailto:service@bitmoe.com"
                    className="mr-4 rounded-lg bg-white text-gray-900 px-4 py-2 transition delay-150 ease-in-out hover:scale-110 hover:text-endeavour dark:bg-endeavour-200 dark:text-gray-500 sm:w-1/2 sm:mr-0 sm:text-center sm:py-4"
                  >
                    <p>{t('productAskBtn')}</p>
                  </a>
                  {section.details.proUrl ? (
                    <Link
                      href={section.details.proUrl}
                      className="mr-4 rounded-lg bg-endeavour-700 px-4 py-2 transition delay-150 ease-in-out hover:scale-110 hover:text-endeavour dark:bg-endeavour-200 dark:text-gray-500 sm:w-1/2 sm:mr-0 sm:text-center sm:py-4"
                    >
                      <p>{t('productViewBtn')}</p>
                    </Link>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}
