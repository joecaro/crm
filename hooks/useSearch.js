import { useState } from "react";

const useSearch = () => {
  const [search, setSearch] = useState("");

  const handleSetSearch = (event) => {
    return ({ target: { value } }) => {
      setSearch(value.toLowerCase());
    };
  };

  return [search, handleSetSearch];
};

export default useSearch;
