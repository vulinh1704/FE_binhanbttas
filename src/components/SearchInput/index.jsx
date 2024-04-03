import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchInput = () => {
  return (
    <div className="xl:min-w-[200px] 2xl:min-w-[300px] relative">
      <Input placeholder="Tìm kiếm" className="w-full bg-white" />
      <Button className="bg-primary absolute top-0 h-8 mt-1 right-1 rounded-full">
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchInput;
