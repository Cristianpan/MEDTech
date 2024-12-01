import { PageContent } from "@/interfaces/PagesInterface";
import { Typography } from "../../../MaterialComponents";
import { RichText } from "@/app/utils/RichText";
import Image from "next/image";

export const Article = ({
  page,
  currentPage,
}: {
  page: PageContent;
  currentPage: number;
}) => {
  return (
    <article className="mt-7">
      <div className="border-b border-b-blue-gray-50 mb-5">
        {currentPage === 1 && (
          <Image
            src={page.mainImage}
            alt={page.title}
            className="mb-4 md:h-[28rem] w-full rounded-xl object-cover"
            width={1200}
            height={800}
          />
        )}

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
  );
};
