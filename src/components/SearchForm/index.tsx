import { Icon } from "../Icon";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./styles";

export function SearchForm() {
  return (
    <SearchFormContainer>
      <SearchFormInput placeholder="Busque por transações"/>
      <SearchFormButton type="submit">
        <Icon name="MagnifyingGlass" size={20}/>
        Buscar
      </SearchFormButton>
    </SearchFormContainer>
  );
}