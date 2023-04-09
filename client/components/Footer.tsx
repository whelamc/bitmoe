'use client';
import Image from 'next/image';
import Link from '@/components/Link'; 

import {useTranslations} from 'next-intl';

type information = {
  footerCopyright: string;
  footerCopyrightSlug: string;
  footerICP: string;
};

export default function Footer({ information }: { information: information }) {
  const t = useTranslations('Footer');
  return (
    <div className="w-full text-center">
      <div className="bg-endeavour-600 dark:bg-endeavour-800 dark:text-gray-500">
        <div className="m-auto flex min-h-72 max-w-[900px] justify-between py-8 md:max-w-[720px] md:min-h-min sm:w-full sm:px-2 sm:flex-col sm:h-auto">
          <div className="flex-1 sm:flex-none sm:w-full sm:px-2">
            <div className="rounded-lg bg-white px-2 py-2 text-left dark:bg-endeavour-200 sm:w-1/2">
              <Image
                src="/images/bitmoe_logo_footer.png"
                unoptimized
                alt="Bitmoe logo"
                width={125}
                height={26}
              />
            </div>
            <div className="py-6 text-left text-sm">
            {t('description')}
            </div>
          </div>
          <div className="flex flex-1 items-center justify-end text-left leading-none sm:flex-none sm:w-full sm:justify-normal sm:flex-row sm:px-2">
            <div className="ml-10 sm:ml-0 sm:flex-1">
              <p className="mb-4 text-lg">{t('aboutTitle')}</p>
              <a href={`mailto:service@bitmoe.com`}>
                <p className="mb-4 hover:underline">{t('subsContact')}</p>
              </a>
              <a href={`https://shop155149662.taobao.com/`}>
                <p className="mb-4 hover:underline">{t('subsTaobao')}</p>
              </a>
              <a href={`mailto:service@bitmoe.com`}>
                <p className="mb-4 hover:underline">{t('subsJoin')}</p>
              </a>
            </div>
            <div className="ml-10 sm:ml-0 sm:flex-1">
              <p className="mb-4 text-lg">{t('infoTitle')}</p>
              <Link href={`/posts/termsofservice`}>
                <p className="mb-4 hover:underline">{t('subsAgreement')}</p>
              </Link>
              <Link href={`/posts/privacypolicy`}>
                <p className="mb-4 hover:underline">{t('subsPrivate')}</p>
              </Link>
              <Link href={`/posts/intellectualproperty`}>
                <p className="mb-4 hover:underline">{t('subsKnowledge')}</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-endeavour-700 dark:bg-endeavour-800 dark:text-gray-500">
        {' '}
        <div className="m-auto max-w-[900px] py-4 md:max-w-[720px] md:min-h-min sm:w-full sm:px-2">
          <p>{information.footerCopyright}</p>
          <p>{information.footerCopyrightSlug}</p>
          <p>{information.footerICP}</p>
        </div>
      </div>
    </div>
  );
}
