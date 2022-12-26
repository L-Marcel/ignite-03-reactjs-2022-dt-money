import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles";
import logoImg from "../../assets/Logo.svg";
import Image from "next/image";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image
          src={logoImg}
          alt=""
        />
        <NewTransactionButton>Nova transação</NewTransactionButton>
      </HeaderContent>
    </HeaderContainer>
  );
}