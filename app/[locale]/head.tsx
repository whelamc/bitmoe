import {createTranslator} from 'next-intl';
import {notFound} from 'next/navigation';
 
type Props = {
  params: {
    locale: string;
  };
};
 

export default async function Head({params: {locale}}: Props) {
  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
  const t = createTranslator({locale, messages});

  return (
    <>
        <title>{t('Head.title')}</title>
        <meta
          name="description"
          content={t('Head.description')}
        />
        <meta
          name="keywords"
          content={t('Head.keywords')}
        />
        <meta name="robots" content="index, follow" />
        {/* <!-- Open Graph --> */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content={t('Head.title')} />
        <meta
          property="og:description"
          content={t('Head.description')}
        />
      <link rel="icon" href="/favicon.ico" />
    </>
  );
}
