import { Brands } from "@/widgets/brands";
import { CategoriesList } from "@/widgets/categories-list";
import { HeroBanner } from "@/widgets/hero-banner";
import { ProductsList } from "@/widgets/products-list";
import React from "react";

interface HomeProps {}

function Home(props: HomeProps) {
  return (
    <main>
      <HeroBanner />
      <Brands />
      <div className="md:mt-18 mt-[50px] md:mb-20 mb-[50px] flex flex-col gap-16">
        <ProductsList title="clothes" params={{ categorySlug: "clothes", limit: 4, offset: 0 }} />
        <div className="bg-black/10 w-full h-[1px]"></div>
        <ProductsList
          title="Electronics under $50"
          params={{ categorySlug: "electronics", price_max: 50, price_min: 0.01, limit: 4, offset: 0 }}
        />
      </div>
      <CategoriesList />
    </main>
  );
}

export default Home;
