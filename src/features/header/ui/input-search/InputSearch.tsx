'use client';
import { useDebounce } from "@/shared/hooks";
import { useSearchProductsQuery } from "@/shared/services/searchProductApi";
import { Input } from "@/shared/ui/input";
import { ProductMini } from "@/shared/ui/product-mini";
import { Search } from "lucide-react";
import Link from "next/link";
import { FC, useRef, useState, useEffect } from "react";

interface InputSearchProps {}

export const InputSearch: FC<InputSearchProps> = () => {
  const [showList, setShowList] = useState(false);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 500);
  const { data, isFetching } = useSearchProductsQuery(debouncedSearch, {
    skip: debouncedSearch.length < 3,
  });

  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target as Node)
      ) {
        setShowList(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={wrapperRef} className="flex-auto relative">
      <Input
        loading={isFetching}
        value={search}
        onFocus={() => setShowList(true)}
        onChange={(e) => setSearch(e.target.value)}
        icon={Search}
        variant="gray"
        placeholder="Search for products..."
      />
      {data && data.length > 0 && showList && (
        <div
          tabIndex={-1}
          className="absolute py-2 flex flex-col focus:outline-none border border-black/10 rounded-2xl mt-2 w-full max-h-[400px] overflow-y-auto"
        >
          {data?.map((item) => (
            <Link
              key={item.id}
              href={`/product/${item.id}`}
              className="py-2 px-6 hover:bg-black/5 transition-colors"
              tabIndex={0}
            >
              <ProductMini {...item} />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};
