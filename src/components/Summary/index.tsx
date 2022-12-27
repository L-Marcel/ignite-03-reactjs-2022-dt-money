import { Icon } from "../Icon";
import { SummaryCard, SummaryContainer, SummaryHeader, SummaryStrong } from "./styles";

export function Summary() {
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
        <SummaryStrong>R$ 1.000,00</SummaryStrong>
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
        <SummaryStrong>R$ 1.000,00</SummaryStrong>
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
        <SummaryStrong>R$ 0,00</SummaryStrong>
      </SummaryCard>
    </SummaryContainer>
  );
}