import tw from "tw-tailwind";

export const HeaderContainer = tw.header`
  bg-gray-900
  pt-10
  pb-28
`;

export const HeaderContent = tw.div`
  w-full
  max-w-[1120px]
  mx-auto
  my-0
  px-6
  py-0
  flex
  items-center
  justify-between
`;

export const NewTransactionButton = tw.button`
  h-12
  border-0
  bg-green-500
  text-white
  font-bold
  py-0
  px-5
  rounded-[5px]
  cursor-pointer
  hover:bg-green-700
  duration-500
  hover:transition-colors
`;