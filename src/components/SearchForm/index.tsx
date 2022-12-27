import { Icon } from "../Icon";
import { SearchFormButton, SearchFormContainer, SearchFormInput } from "./styles";
import { useSearch } from "../../provider/hooks/useSearch";
import { ChangeEvent, FormEvent, useState } from "react";


export function SearchForm() {
  const [inputValue, setInputValue] = useState("");
  const { setSearch } = useSearch();

  function handleOnChangeSearch(e: FormEvent) {
    e.preventDefault();
    setSearch(inputValue);
  }

  function handleOnChangeInputValue(e: ChangeEvent<HTMLInputElement>) {
    setInputValue(e.currentTarget.value);
  }

  return (
    <SearchFormContainer onSubmit={handleOnChangeSearch}>
      <SearchFormInput 
        placeholder="Busque por transações"
        value={inputValue}
        onChange={handleOnChangeInputValue}
      />
      <SearchFormButton type="submit">
        <Icon name="MagnifyingGlass" size={20}/>
        Buscar
      </SearchFormButton>
    </SearchFormContainer>
  );
}