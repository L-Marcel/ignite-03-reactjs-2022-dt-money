"use client";

import { createContext } from "use-context-selector";
import { ReactNode, useCallback, useState } from "react";
import { useQuery } from "react-query";
import { api } from "../services/axios";

export interface Transaction {
  id: number;
  description: string;
  type: "income" | "outcome";
  category: string;
  price: number;
  createdAt: string | Date;
}

interface TransactionsContext {
  transactions: Transaction[];
  isFetching: boolean;
  search: string;
  setSearch: (search: string) => void; 
}

interface TransactionsProviderProps {
  children: ReactNode;
}

export const transactionsContext = createContext({} as TransactionsContext);

async function getTransactions(search?: string) {
  return await api.get<Transaction[]>("/transactions", {
    params: {
      q: search
    }
  }).then(res => res.data);
}

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [search, setSearch] = useState("");

  const { data, isFetching } = useQuery<Transaction[]>(["dtmoney@transactions", search], async() => {
    return getTransactions(search);
  }, {
    refetchInterval: 1000 * 15
  });

  const _setSearch = useCallback(setSearch, [setSearch]);
  
  return (
    <transactionsContext.Provider
      value={{
        transactions: data || [],
        isFetching,
        search,
        setSearch: _setSearch
      }}
    >
      {children}
    </transactionsContext.Provider>
  );
}