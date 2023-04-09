import "@/styles/globals.css";
import React from "react";
import Footer from "@/components/Footer";
import TopNav from "@/components/TopNav";
import Providers from "@/components/Providers";
import { information } from "@/lib/introduction";

import { NextIntlClientProvider } from "next-intl/client";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: any;
}) {
  let messages;
  try {
    messages = (await import(`../../i18n/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers>
            <div className="main text-white bg-white dark:bg-gray-800">
              <TopNav />
              {children}
              <Footer information={information} />
            </div>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

