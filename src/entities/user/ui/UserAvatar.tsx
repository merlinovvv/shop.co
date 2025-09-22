import { User } from "@/shared/types/api/auth";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { LogOut, User2 } from "lucide-react";
import Image from "next/image";
import { FC } from "react";

interface UserAvatarProps extends User {
  logout: () => void;
}

export const UserAvatar: FC<UserAvatarProps> = ({ avatar, name, logout }) => {
  return (
    <Menu>
      <MenuButton className="focus:outline-none cursor-pointer">
        <Image className="rounded-full object-center object-cover w-6 h-6" width={24} height={24} src={avatar} alt="User Avatar" />
      </MenuButton>
      <MenuItems
        transition
        className="py-2 bg-white flex flex-col focus:outline-none border border-black/10 rounded-lg mt-2 transition duration-100 ease-out data-closed:scale-95 data-closed:opacity-0"
        anchor="bottom end"
      >
        <MenuItem>
          <div className="py-2 px-6 flex items-center gap-2">👋 Hello, {name}!</div>
        </MenuItem>
        <div className="my-1 h-px bg-black/5" />
        <MenuItem>
          <button className="py-2 px-6 hover:bg-black/5 transition-colors flex items-center gap-2" onClick={logout}>
            <LogOut className="w-[16px]" />
            Exit
          </button>
        </MenuItem>
      </MenuItems>
    </Menu>
  );
};
