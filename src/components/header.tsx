import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger
} from "@/components/ui/menubar";

import { AlignJustifyIcon, VoteIcon } from "lucide-react";
import Image from "next/image";
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
          <MenubarContent className="relative right-5 w-[240px] space-y-2">
            <MenubarItem
              className="flex h-[40px] items-center justify-center gap-2
bg-[#FEE500] text-center"
            >
              <Image
                src="/logo/kakao.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>카카오 로그인</span>
            </MenubarItem>
            <MenubarItem
              className="flex h-[40px] items-center justify-center gap-2
bg-[#F2F2F2] text-center"
            >
              <Image
                src="/logo/google.svg"
                alt=""
                width={16}
                height={16}
              />
              <span>구글 로그인</span>
            </MenubarItem>
          </MenubarContent>
        </MenubarMenu>
      </Menubar>
    </header>
  );
};
