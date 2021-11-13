import React, { useState } from "react";
import {
  SearchBarContainer,
  SearchIcon,
  SearchInput,
} from "./SearchBarElements";

const SearchBar = ({ handleSetSearch }) => {
  const [clicked, setClicked] = useState(false);


  const toggleSearch = () => {
    setClicked(!clicked);
  };

  return (
    <SearchBarContainer>
      <SearchIcon clicked={clicked}>
        <i className='bi bi-search'></i>
      </SearchIcon>
      <SearchInput
        placeholder={"Search by Name ..."}
        onFocus={() => toggleSearch()}
        onBlur={() => toggleSearch()}
        onChange={handleSetSearch()}
      />
    </SearchBarContainer>
  );
};

export default SearchBar;
