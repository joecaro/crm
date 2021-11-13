import React, { useState } from "react";
import { ContentContainer } from "./ContentElements";
import Lists from "../Lists/Lists";
import SearchBar from "../SearchBar/SearchBar";

const Content = (props) => {
  const [search, setSearch] = useState("");

  const handleSetSearch = (event) => {
    return ({ target: { value } }) => {
      setSearch(value.toLowerCase());
    };
  };
  return (
    <ContentContainer>
      <SearchBar handleSetSearch={handleSetSearch} />
      <Lists selectedList={props.selectedList} search={search} />
    </ContentContainer>
  );
};

export default Content;
