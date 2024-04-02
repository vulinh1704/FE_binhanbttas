import React from "react";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

const SearchInput = () => {
  return (
    <div className="xl:min-w-[400px] 2xl:min-w-[600px] relative">
      <Input placeholder="Tìm kiếm" className="w-full bg-white" />
      <Button className="absolute top-0 h-8 mt-1 right-1 rounded-full">
        Tìm kiếm
      </Button>
    </div>
  );
};

export default SearchInput;
