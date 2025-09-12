import { Product } from "@/shared/types/api/product";
import Image from "next/image";

export const ProductMini: React.FC<Product> = ({ title, price, category, images }) => {
  return (
    <div className="flex gap-4">
      <Image
        src={images[0]}
        alt={title}
        width={124}
        height={124}
        className="w-[124px] h-[124px] object-cover object-center rounded-[9px]"
      />
      <div className="flex flex-col justify-between">
        <div className="flex flex-col gap-[2px]">
          <h4 className="text-xl font-bold">{title}</h4>
          <span className="text-sm text-black/40">{category.name}</span>
        </div>
        <span className="text-2xl font-bold">${price}</span>
      </div>
    </div>
  );
};
