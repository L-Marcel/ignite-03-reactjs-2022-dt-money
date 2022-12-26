import { ReactNode } from "react";
import "../src/styles/main.scss";
import { Roboto } from "@next/font/google";
import { Header } from "../src/components/Header";

const roboto = Roboto({
  weight: ["100", "700"],
  subsets: ["latin"],
  variable: "--roboto-font"
});

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={roboto.variable} lang="en">
      <body>
        <Header/>
        {children}
      </body>
    </html>
  );
}