import tw from "tw-tailwind";

export const SearchFormContainer = tw.form`
  flex
  gap-4
`;

export const SearchFormInput = tw.input`
  flex-1
  rounded-md
  border-0
  bg-gray-900
  text-gray-300
  p-4
  placeholder:text-gray-500
`;

export const SearchFormButton = tw.button`
  flex
  items-center
  gap-3
  p-4
  bg-transparent
  border-green-300
  border-solid
  border-[1px]
  text-green-300
  rounded-md
  font-bold
  hover:bg-green-500
  hover:border-green-500
  hover:text-white
  hover:transition-colors
  duration-200
`;