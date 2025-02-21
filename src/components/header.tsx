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
      <div>
        <AlignJustifyIcon />
      </div>
    </header>
  );
};
