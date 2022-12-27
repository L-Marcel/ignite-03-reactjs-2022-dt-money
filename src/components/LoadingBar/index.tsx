import { useIsLoading } from "../../provider/hooks/useIsLoading";
import { LoadingBarContainer, LoadingBarIndicator } from "./styles";

export function LoadingBar() {
  const isLoading = useIsLoading();

  if(!isLoading) {
    return null;
  }

  return (
    <LoadingBarContainer>
      <LoadingBarIndicator />
    </LoadingBarContainer>
  );
}