'use client';
import Image from 'next/image';

import {useTranslations} from 'next-intl';

export default function Banner() {
  const t = useTranslations('Index');
  return (
    <div className="relative h-screen w-full bg-endeavour dark:bg-endeavour-800">
      <div className="absolute inset-y-1/3 left-0 right-0 m-auto text-center">
        <Image
          src="/images/bitmoe_logo_banner.png"
          unoptimized
          alt="Bitmoe logo"
          className="m-auto mb-6"
          width={257}
          height={101}
        />
        <p className="mb-2 text-2xl tracking-normal dark:text-gray-500">
        {t('slug')}
        </p>
        <p className="mb-2 text-sm text-endeavour-700 dark:text-gray-500">
        {t('memo')}
        </p>
      </div>
    </div>
  );
}
