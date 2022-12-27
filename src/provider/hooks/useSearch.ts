import { useContextSelector } from "use-context-selector";
import { transactionsContext } from "../TransactionsProvider";

export function useSearch() {
  return useContextSelector(transactionsContext, context => ({
    search: context.search,
    setSearch: context.setSearch
  }));
}