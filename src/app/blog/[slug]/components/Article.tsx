import { PageContent } from "@/interfaces/PagesInterface";
import { Typography, Button, IconButton } from "../../../MaterialComponents";
import { usePaginator } from "@/app/hooks/usePaginator";
import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { RichText } from "@/app/utils/RichText";



export const Article = ({ page }: { page: PageContent }) => {
  const MAX_PAGE = 4;
  const INITIAL_PAGE = 1;

  const { setCurrentPage, handleNext, handlePrev, currentPage } = usePaginator({
    initialPage: INITIAL_PAGE,
    maxPages: MAX_PAGE,
  });

  const getItemProps = (index: number) =>
    ({
      variant: currentPage === index ? "filled" : "text",
      color: "purple",
      onClick: () => setCurrentPage(index),
      className: "rounded-full text-sm",
    } as any);

  return (
    <div>
      <article className="mt-7">
        <div className="border-b border-b-blue-gray-50 mb-5">
          <img
            src={page.mainImage}
            alt="team work"
            className="mb-4 md:h-[28rem] w-full rounded-xl object-cover"
          />
          <Typography
            variant="h1"
            color="blue-gray"
            className="my-4 font-black text-4xl leading-snug text-purple-600"
          >
            {page.title}
          </Typography>
          <Typography variant="small" className="text-blue-gray-800 mb-4">
            {page.date}
          </Typography>
        </div>
        <RichText content={page.pageContent[currentPage - 1]} />
      </article>
      <div className="flex items-center gap-2 justify-center my-10">
        <Button
          variant="text"
          className="flex items-center gap-2 rounded-full"
          onClick={handlePrev}
          disabled={currentPage === INITIAL_PAGE}
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
          disabled={currentPage === MAX_PAGE}
        >
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};
