import { SearchForm } from "../src/components/SearchForm";
import { Summary } from "../src/components/Summary";
import { TransactionsTableContainer, TransactionsTable, PriceHighlight } from "../src/styles/pages/TransactionsStyles";

export default function TransactionsPage() {
  return (
    <main>
      <Summary/>
      <TransactionsTableContainer>
        <SearchForm/>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento do site</td>
              <td><PriceHighlight>R$ 1.000</PriceHighlight></td>
              <td>Venda</td>
              <td>13/02/2022</td>
            </tr>
            <tr>
              <td width="50%">Compras</td>
              <td><PriceHighlight $variant="outcome">- R$ 1.000</PriceHighlight></td>
              <td>Venda</td>
              <td>14/02/2022</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsTableContainer>
    </main>
  );
}