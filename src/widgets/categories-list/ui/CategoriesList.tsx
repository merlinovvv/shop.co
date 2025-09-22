"use client";
import { CategoryCard, useCategories } from "@/entities/category";
import { Container } from "@/shared/ui";
import { FC } from "react";

export const CategoriesList: FC = () => {
  const { categories, loading, error } = useCategories();

  return (
    <Container>
      <section className="bg-[#F0F0F0] px-16 pt-[70px] pb-19 rounded-[40px]">
        <h2 className="text-center mb-16">BROWSE BY dress STYLE</h2>
        <div className="grid grid-cols-3 gap-5">
          {categories?.slice(0, 4).map((category, index) => (
            <CategoryCard isLast={index === categories.length - 1} index={index + 1} key={category.id} {...category} />
          ))}
        </div>
      </section>
    </Container>
  );
};
