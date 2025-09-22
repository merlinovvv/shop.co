import { buildURL, routes } from "@/shared/config";
import { Category } from "@/shared/types/api/category";
import Link from "next/link";
import { FC } from "react";

interface CategoryCardProps extends Category {
  index: number;
  isLast: boolean;
}

export const CategoryCard: FC<CategoryCardProps> = ({ name, slug, image, index, isLast }) => {
  function getGridArea(index: number) {
    const first = (index / 2).toFixed();
    const second = index % 2 !== 0 ? 1 : index % 4 === 0 ? 3 : 2;
    const third = Number(first) + 1;
    const fourth = index % 2 === 0 ? 4 : index === 3 || (index + 1) % 4 === 0 ? 3 : 2;
    if (isLast && index % 2 !== 0) {
      return `${first} / ${1} / ${third} / ${4}`;
    }
    return `${first} / ${second} / ${third} / ${fourth}`;
  }

  return (
    <Link
      href={buildURL(routes.products.root, { categorySlug: slug })}
      style={{ backgroundImage: `url(${image})`, gridArea: getGridArea(index) }}
      className="bg-cover bg-center h-[289px] px-10 py-[25px] rounded-[20px] relative"
    >
      <div
        className="absolute inset-0 rounded-[20px] z-10"
        style={{ background: `linear-gradient(90deg,rgba(255, 255, 255, 1) 0%, transparent 66%)` }}
      ></div>
      <h3 className="text-[36px] font-bold z-20 relative">{name}</h3>
    </Link>
  );
};
