"use client";

import { ReactNode } from "react";
import "../src/styles/main.scss";
import { Roboto } from "@next/font/google";
import { Header } from "../src/components/Header";
import { QueryClient, QueryClientProvider, } from "react-query";
import { TransactionsProvider } from "../src/provider/TransactionsProvider";
import { LoadingBar } from "../src/components/LoadingBar";
import { ReactQueryDevtools } from "react-query/devtools";

const roboto = Roboto({
  weight: ["100", "700"],
  subsets: ["latin"],
  variable: "--roboto-font"
});

const queryClient = new QueryClient();

export default function AppLayout({ children }: {
  children: ReactNode
}) {
  return (
    <html className={roboto.variable} lang="en">
      <body>
        <QueryClientProvider
          client={queryClient}
        >
          <ReactQueryDevtools initialIsOpen={true}/>
          <TransactionsProvider>
            <LoadingBar/>
            <Header/>
            {children}
          </TransactionsProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
}