import React, { useState } from "react";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
} from "../../components/ui/pagination";
import { ArrowRightIcon } from "../../assets/icons";
const PaginationComps = ({ totalPages, className }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const handlePrevious = () => {
    setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage);
  };
  const handleNext = () => {
    setCurrentPage(currentPage < totalPages ? currentPage + 1 : currentPage);
  };
  return (
    <Pagination className={className}>
      <PaginationContent>
        <PaginationItem onClick={handlePrevious}>
          <ArrowRightIcon className="rotate-180" />
        </PaginationItem>
        {Array.from({ length: totalPages }, (_, index) => (
          <PaginationItem
            key={index}
            className={`small flex h-8 w-8 items-center justify-center gap-1 rounded-full border border-line p-0 text-text ${
              index + 1 === currentPage ? "bg-primary text-white" : ""
            }`}
            onClick={() => setCurrentPage(index + 1)}
          >
            {index + 1}
          </PaginationItem>
        ))}
        <PaginationItem onClick={handleNext}>
          <ArrowRightIcon />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationComps;
