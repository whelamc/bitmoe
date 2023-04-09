'use client';
 
import { products } from "@/lib/products";
import Banner from "@/components/Banner";
import ProductCard from "@/components/ProductCard";

export default function Page() {

  return (
    <>
      <Banner />
      <ProductCard products={products} />
    </>
  );
}
