import { useContextSelector } from "use-context-selector";
import { transactionsContext } from "../TransactionsProvider";

export function useIsLoading() {
  return useContextSelector(transactionsContext, context => context.isFetching);
}