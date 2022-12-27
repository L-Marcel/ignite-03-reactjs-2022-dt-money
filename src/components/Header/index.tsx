import { HeaderContainer, HeaderContent } from "./styles";
import logoImg from "../../assets/Logo.svg";
import Image from "next/image";
import { NewTransactionModal } from "../NewTransactionModal";

export function Header() {
  return (
    <HeaderContainer>
      <HeaderContent>
        <Image
          src={logoImg}
          alt=""
        />

        <NewTransactionModal/>
      </HeaderContent>
    </HeaderContainer>

  );
}