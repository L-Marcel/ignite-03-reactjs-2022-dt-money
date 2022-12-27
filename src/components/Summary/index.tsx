import { useSummaryValues } from "../../provider/hooks/useSummaryValues";
import { PriceFormatters } from "../../utils/formatters";
import { Icon } from "../Icon";
import { SummaryCard, SummaryContainer, SummaryHeader, SummaryStrong } from "./styles";

export function Summary() {
  const { income, outcome, total } = useSummaryValues();

  const formattedIncome = PriceFormatters.format(income);
  const formattedOutcome = PriceFormatters.format(outcome);
  const formattedTotal = PriceFormatters.format(total);

  return (
    <SummaryContainer>
      <SummaryCard>
        <SummaryHeader>
          <span>Entradas</span>
          <Icon
            name="ArrowCircleUp"
            size={32}
            color="#00b37e"
          />
        </SummaryHeader>
        <SummaryStrong>{formattedIncome}</SummaryStrong>
      </SummaryCard>
      <SummaryCard>
        <SummaryHeader>
          <span>Saídas</span>
          <Icon
            name="ArrowCircleDown"
            size={32}
            color="#f75a68"
          />
        </SummaryHeader>
        <SummaryStrong>{formattedOutcome}</SummaryStrong>
      </SummaryCard>
      <SummaryCard $variant="green">
        <SummaryHeader>
          <span>Total</span>
          <Icon
            name="CurrencyDollar"
            size={32}
            color="#fff"
          />
        </SummaryHeader>
        <SummaryStrong>{formattedTotal}</SummaryStrong>
      </SummaryCard>
    </SummaryContainer>
  );
}