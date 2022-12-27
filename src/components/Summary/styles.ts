import tw from "tw-tailwind";

export const SummaryContainer = tw.section`
  w-full
  max-w-[1120px]
  mx-auto
  my-0
  px-6
  py-0
  grid
  grid-cols-3
  gap-12
  -mt-20
`;

interface SummaryCardProps {
  $variant?: "default" | "green";
}

export const SummaryCard = tw.article<SummaryCardProps>`
  ${props =>props.$variant === "green"? "bg-green-700":"bg-gray-600"}
  rounded-md
  p-8
`;

export const SummaryHeader = tw.header`
  flex
  items-center
  justify-between
  text-gray-300
`;

export const SummaryStrong = tw.strong`
  block
  mt-4
  text-4xl
`;