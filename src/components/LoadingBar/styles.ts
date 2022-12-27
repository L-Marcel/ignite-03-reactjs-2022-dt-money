import tw from "tw-tailwind";
import * as Progress from "@radix-ui/react-progress";

export const LoadingBarContainer = tw(Progress.Root)`
  fixed
  top-0
  flex
  w-full
  min-h-[0.5rem]
  bg-gray-800
`;

export const LoadingBarIndicator = tw(Progress.Indicator)`
  min-h-full
  w-1/6
  translate-x-0
  absolute
  flex
  animate-indeterminate
`;