import { useContextSelector } from "use-context-selector";
import { transactionsContext } from "../TransactionsProvider";

export function useTransactions() {
  return useContextSelector(transactionsContext, context => context.transactions);
}