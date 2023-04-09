'use client';
 
import {useTranslations} from 'next-intl';

import { products } from "@/lib/products";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Page() {
  const t = useTranslations('Index');
  return (
    <>
      <Banner />
      <ProductCard products={products} />
    </>
  );
}
