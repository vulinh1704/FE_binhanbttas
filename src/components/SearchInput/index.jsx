import React, { useState } from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { createSearchParams, useNavigate } from "react-router-dom";

const SearchInput = () => {
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = async () => {
    await navigate({
      pathname: "results",
      search: createSearchParams({
        search: searchValue,
      }).toString(),
    });
  };

  return (
    <div className="xl:min-w-[200px] 2xl:min-w-[300px] relative">
      <Input
        onChange={(e) => setSearchValue(e.target.value)}
        placeholder="Tìm kiếm"
        className="w-full bg-white"
      />
      <Button
        onClick={handleSearch}
        className="bg-primary absolute top-0 h-8 mt-1 right-1 rounded-full"
      >
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchInput;
