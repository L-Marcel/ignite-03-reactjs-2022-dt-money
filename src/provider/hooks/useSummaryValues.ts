import { useMemo } from "react";
import { useTransactions } from "./useTransactions";

export function useSummaryValues() {
  const transactions = useTransactions();

  return useMemo(() => transactions.reduce((prev, cur) => {
    if(cur.type === "income") {
      prev.income += cur.price;
      prev.total += cur.price;
    } else {
      prev.outcome += cur.price;
      prev.total -= cur.price;
    }

    return prev;
  }, {
    income: 0,
    outcome: 0,
    total: 0
  }), [transactions]);
}