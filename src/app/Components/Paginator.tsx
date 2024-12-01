import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "../MaterialComponents";
import { useState, useEffect } from "react";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

interface PaginatorProps {
    initialPage?: number;
    maxPages: number;
    router: AppRouterInstance

}

export const Paginator = ({ initialPage = 1, maxPages, router }: PaginatorProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  useEffect(() => {
    router.push(`?page=${currentPage}`, { scroll: true });
  }, [currentPage]);

  const handleNext = () => {
    if (currentPage < maxPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrev = () => {
    if (currentPage > initialPage) {
      setCurrentPage(currentPage - 1);
    }
  };

  /* eslint-disable @typescript-eslint/no-explicit-any */
  const getItemProps = (index: number) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "purple",
      onClick: () => setCurrentPage(index),
      className: "rounded-full text-sm",
    } as any);

  return (
    <div className="flex items-center gap-2 justify-center my-10">
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={handlePrev}
        disabled={currentPage === initialPage}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
      <div className="flex items-center gap-2">
        <IconButton {...getItemProps(1)}>1</IconButton>
        <IconButton {...getItemProps(2)}>2</IconButton>
        <IconButton {...getItemProps(3)}>3</IconButton>
        <IconButton {...getItemProps(4)}>4</IconButton>
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2 rounded-full"
        onClick={handleNext}
        disabled={currentPage === maxPages}
      >
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};
