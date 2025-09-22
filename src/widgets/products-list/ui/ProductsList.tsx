"use client";
import { ProductCard, useProducts } from "@/entities/product";
import { buildURL, routes } from "@/shared/config";
import { ProductsFetchParams } from "@/shared/types/api/product";
import { Button, Container } from "@/shared/ui";
import { useRouter } from "next/navigation";
import { FC } from "react";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

interface ProductsListProps {
  title: string;
  className?: string;
  params?: ProductsFetchParams;
  rootLink?: string;
}

export const ProductsList: FC<ProductsListProps> = ({ title, className, params }) => {
  const router = useRouter();
  const { products } = useProducts(params);

  return (
    <section className={className}>
      <Container>
        <h2 className="md:mb-[55px] mb-8 text-center">{title}</h2>
        <Swiper className="mb-9" autoHeight={false} spaceBetween={20} slidesPerView={4}>
          {products.map((product) => (
            <SwiperSlide className="h-auto!" key={product.id}>
              <ProductCard {...product} />
            </SwiperSlide>
          ))}
        </Swiper>
        <Button
          onClick={() => router.push(buildURL(routes.products.root, { ...params, limit: undefined, offset: undefined }))}
          severity="secondary"
          variant="outlined" 
          className="max-w-[218px] w-full mx-auto block"
        >
          View All
        </Button>
      </Container>
    </section>
  );
};
