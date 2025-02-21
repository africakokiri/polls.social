import { Header } from "@/components/header";
import NextThemesProvider from "@/libs/next-themes/next-themes-provider";
import "@/styles/globals.css";

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Polls",
  icons: {
    icon: "/icons/poll.svg"
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="antialiased">
        <NextThemesProvider>
          <Header />
          {children}
        </NextThemesProvider>
      </body>
    </html>
  );
}
