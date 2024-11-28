import { useState } from "react";

interface PaginatorProps {
  initialPage?: number;
  maxPages: number;
}


export const usePaginator = ({initialPage = 1, maxPages}: PaginatorProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);
  
  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  const handlePrev = () => {
    if (currentPage > initialPage) {
      setCurrentPage(currentPage - 1);
    }
  }

  return {
    setCurrentPage, 
    handleNext,
    handlePrev,
    currentPage
  }
}
