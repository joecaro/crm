import React, { useState } from "react";
import { ContentContainer } from "./ContentElements";
import Lists from "../Lists/Lists";
import SearchBar from "../SearchBar/SearchBar";
import useSearch from "../../hooks/useSearch";

const Content = (props) => {
  const [search, handleSetSearch] = useSearch();
  return (
    <ContentContainer>
      <SearchBar handleSetSearch={handleSetSearch} />
      <Lists selectedList={props.selectedList} search={search} />
    </ContentContainer>
  );
};

export default Content;
