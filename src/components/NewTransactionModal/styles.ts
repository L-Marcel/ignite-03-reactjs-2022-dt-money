import tw from "tw-tailwind";
import * as Dialog from "@radix-ui/react-dialog";
import * as Radio from "@radix-ui/react-radio-group";

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

export const ModalOverlay = tw(Dialog.Overlay)`
  fixed
  min-w-screen
  min-h-screen
  inset-0
  bg-black
  opacity-75
`;

export const ModalContent = tw(Dialog.Content)`
  min-w-[32rem]
  rounded-md
  py-10
  px-12
  bg-gray-800
  fixed
  top-1/2
  left-1/2
  -translate-x-1/2
  -translate-y-1/2
`;

export const NewTransactionForm = tw.form`
  pt-8
  flex
  flex-col
  gap-4
  new-transaction-form
`;

export const ModalCloseButton = tw(Dialog.Close)`
  fixed
  bg-transparent
  border-0
  top-6
  right-6
  cursor-pointer
  leading-[0]
  text-gray-500
  rounded-md
`;

export const TransactionTypes = tw(Radio.Root)`
  grid
  grid-cols-2
  gap-4
  mt-2
`;

interface TransactionTypeProps {
  $variant?: "income" | "outcome";
}

export const TransactionType = tw(Radio.Item)<TransactionTypeProps>`
  bg-gray-700
  p-4
  flex
  items-center
  justify-center
  gap-2
  rounded-md
  cursor-pointer
  border-0
  text-gray-300
  ${props => props.$variant === "outcome"? "outcome-button":"income-button"}
`;

export const ModalTitle = tw(Dialog.Title)`
  font-bold
  text-2xl
  text-gray-50
`;