import tw from "tw-tailwind";

export const TransactionsTableContainer = tw.section`
  w-full
  max-w-[1120px]
  mx-auto
  mb-0
  px-6
  py-0
  mt-16
`;

export const TransactionsTable = tw.table`
  w-full
  border-separate
  border-spacing-x-0
  border-spacing-y-2
  mt-6
  transactions-table
`;

interface PriceHighlightProps {
  $variant?: "income" | "outcome";
}

export const PriceHighlight = tw.span<PriceHighlightProps>`
  ${props => props?.$variant === "outcome"? "text-red-300":"text-green-300"}
`;