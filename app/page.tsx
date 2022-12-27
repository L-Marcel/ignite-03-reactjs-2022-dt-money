"use client";

import { SearchForm } from "../src/components/SearchForm";
import { Summary } from "../src/components/Summary";
import { TransactionsTableContainer, TransactionsTable, PriceHighlight } from "../src/styles/pages/TransactionsStyles";
import { useTransactions } from "../src/provider/hooks/useTransactions";
import { PriceFormatters, DateFormatters } from "../src/utils/formatters";

export default function TransactionsPage() {
  const transactions = useTransactions();
  
  return (
    <main>
      <Summary/>
      <TransactionsTableContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            {
              transactions.map(({ id, description, type, category, createdAt, price }) => {
                const isIncome = type === "income";

                const formattedPrice = PriceFormatters.format(price);
                const formattedCreatedAt = DateFormatters.format(createdAt);

                return (
                  <tr key={id}>
                    <td width="50%">{description}</td>
                    <td><PriceHighlight $variant={type}>{!isIncome && "- "}{formattedPrice}</PriceHighlight></td>
                    <td>{category}</td>
                    <td>{formattedCreatedAt}</td>
                  </tr>
                );
              })
            }
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </main>
  );
}