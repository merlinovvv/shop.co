"use client";
import { routes } from "@/shared/config";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

const headerMenuList = [
  {
    title: "Shop",
    items: [
      { title: "All Products", href: routes.shop.products },
      { title: "Categories", href: routes.shop.categories },
    ],
  },
  {
    title: "On Sale",
    href: routes.onSale,
  },
  {
    title: "New Arrivals",
    href: routes.newArrivals,
  },
  {
    title: "Brands",
    href: routes.brands,
  },
];

export const HeaderMenu: FC = () => {
  return (
    <nav>
      <ul className="flex gap-6 items-center">
        {headerMenuList.map((menu, i) => (
          <li key={`${menu.title}_${i}`}>
            {menu.href ? (
              <Link href={menu.href}>{menu.title}</Link>
            ) : (
              <Menu>
                <MenuButton className="focus:outline-none cursor-pointer">
                  {({ active }) => (
                    <span className="flex items-center">
                      {menu.title}
                      <ChevronDown className={clsx("transition-transform duration-200", { "rotate-180": active })} />
                    </span>
                  )}
                </MenuButton>
                <MenuItems
                  transition
                  className="py-2 flex flex-col focus:outline-none border border-black/10 rounded-lg mt-2 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
                  anchor="bottom start"
                >
                  {menu.items?.map((item, idx) => (
                    <MenuItem key={`${item.title}_${idx}`}>
                      <Link className="py-2 px-6 hover:bg-black/5 transition-colors" href={item.href}>
                        {item.title}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuItems>
              </Menu>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};
