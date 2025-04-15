'use client'
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { Button, IconButton } from "@/components/ui";
import { useState } from "react";
import Link from "next/link";

interface PaginatorProps {
  initialPage?: number;
  maxPages: number;
}

export const Paginator = ({ initialPage = 1, maxPages }: PaginatorProps) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

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
        {Array.from({ length: maxPages }, (_, i) => i + 1).map((item) => (
          <Link key={item} href={`?page=${item}`}>
            <IconButton {...getItemProps(item)}>{item}</IconButton>
          </Link>
        ))}
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
