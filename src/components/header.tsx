import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";

import { AlignJustifyIcon, VoteIcon } from "lucide-react";
import Link from "next/link";

export const Header = () => {
  return (
    <header className="flex items-center justify-between p-4">
      <div>
        <Link
          href="/"
          className="flex max-w-fit items-center gap-2"
        >
          <VoteIcon
            strokeWidth={1.5}
            height={24}
            width={24}
          />
          <p className="font-bold">Polls</p>
        </Link>
      </div>
      <Menubar className="border-none">
        <MenubarMenu>
          <MenubarTrigger>
            <AlignJustifyIcon strokeWidth={1.5} />
          </MenubarTrigger>
          <MenubarContent className="relative right-5">
            <MenubarItem>로그인</MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
