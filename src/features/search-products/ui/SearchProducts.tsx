"use client";
import { useDebounce } from "@/shared/hooks";
import { Input } from "@/shared/ui";
import { ProductMini } from "@/shared/ui";
import { Search } from "lucide-react";
import Link from "next/link";
import { FC, useRef, useState, useEffect } from "react";
import { useSearchProductsStore } from "../model/store";

interface SearchProductsProps {}

export const SearchProducts: FC<SearchProductsProps> = () => {
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const { products, loading, getSearch, error } = useSearchProductsStore();
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    if (debouncedSearch.length >= 3) {
      getSearch(debouncedSearch);
    }
  }, [debouncedSearch, getSearch]);

  return (
    <div ref={wrapperRef} className="flex-auto relative">
      <Input
        loading={loading}
        value={search}
        onFocus={() => setShowList(true)}
        onChange={(e) => setSearch(e.target.value)}
        icon={Search}
        variant="gray"
        placeholder="Search for products..."
      />
      {products && showList && debouncedSearch?.length >= 3 && !loading && (
        <div
          tabIndex={-1}
          className="absolute py-2 flex flex-col focus:outline-none border border-black/10 rounded-2xl mt-2 w-full max-h-[400px] overflow-y-auto"
        >
          {error?.message ? (
            <div className="text-center text-red-500 font-bold">{error?.message}</div>
          ) : products?.length > 0 ? (
            products?.map((item) => (
              <Link
                key={item.id}
                href={`/product/${item.id}`}
                className="py-2 px-6 hover:bg-black/5 transition-colors"
                tabIndex={0}
              >
                <ProductMini {...item} />
              </Link>
            ))
          ) : debouncedSearch?.length >= 3 && !loading ? (
            <div className="p-4 text-center text-gray-500">No products found</div>
          ) : null}
        </div>
      )}
    </div>
  );
};
