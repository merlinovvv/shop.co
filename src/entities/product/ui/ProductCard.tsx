import { priceText, routes } from "@/shared/config";
import { Product } from "@/shared/types/api/product";
import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const ProductCard: FC<Product> = ({ id, title, price, images }) => {
  return (
    <Link href={routes.products.byId(id)} className="flex flex-col justify-between h-full">
      <div>
        <div className="w-[295px] h-[298px] mb-4 overflow-hidden relative ">
          <Image src={images[0]} alt={title} fill sizes="295px, 298px" className="object-contain rounded-[20px]" />
        </div>
        <h3 className="text-xl font-bold mb-2">{title}</h3>
      </div>

      <p className="text-2xl font-bold">{priceText(price)}</p>
    </Link>
  );
};