"use client";
import { routes } from "@/shared/config";
import { BurgerButton } from "@/shared/ui";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import clsx from "clsx";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { FC, Fragment, useEffect, useState } from "react";
import { useHeaderStore } from "../model/store";

const headerMenuList = [
  {
    title: "Shop",
    items: [
      { title: "All Products", href: routes.products.root },
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
  const { isActiveBurgerButton, setIsActiveBurgerButton, headerHeight } = useHeaderStore();
  const [navClassNames, setNavClassNames] = useState("lg:translate-none translate-x-[-200%]");

  useEffect(() => {
    if (isActiveBurgerButton) {
      setNavClassNames("");
    } else {
      setNavClassNames("lg:translate-none translate-x-[-200%]");
    }
  }, [isActiveBurgerButton]);

  return (
    <Fragment>
      <BurgerButton
        className="lg:hidden"
        active={isActiveBurgerButton}
        onClick={() => setIsActiveBurgerButton(!isActiveBurgerButton)}
      />
      <nav
        style={{ top: headerHeight }}
        className={`lg:order-2 order-1 lg:static absolute left-0 z-40 lg:w-auto w-full h-full lg:bg-transparent bg-black/30 transition ${navClassNames}`}
      >
        <ul className="flex gap-6 lg:items-center lg:p-0 p-5 lg:bg-transparent bg-white lg:flex-row flex-col lg:w-auto max-w-[500px] h-full">
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
                    className="py-2 flex flex-col focus:outline-none border border-black/10 rounded-lg mt-2 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0 z-50 bg-white"
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
    </Fragment>
  );
};
