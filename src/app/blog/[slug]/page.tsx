import { pagesContent, pagesInfo } from "@/data";
import { notFound } from "next/navigation";
import { PageContent, PageInfo } from "@/interfaces/PagesInterface";
import { Article } from "./components/Article";
import { Sidebar } from "./components/Sidebar";
import { Paginator } from "@/app/Components/Paginator";

interface BlogPageProps {
  params: { slug: string };
  searchParams: { page: string };
}

export function generateMetadata({ params }: BlogPageProps) {
  const { slug } = params;
  const pageData: PageInfo | undefined = pagesInfo.find(
    (page) => page.url === slug
  );

  return {
    title: `MEDTech | ${pageData?.title}`,
    description: `${pageData?.description}`,
  };
}

export default function BlogPage({ params, searchParams }: BlogPageProps) {
  const currentPage = +(searchParams.page || 1);
  const MAX_PAGE = 4;

  const slug = params.slug;
  const pageData: PageContent | undefined = pagesContent.find(
    (page) => page.url === slug
  );
  const otherArticles: PageInfo[] = pagesInfo.filter(
    (page) => page.url !== slug
  );

  if (!pageData) {
    return notFound();
  }

  return (
    <div className="animate-fadeIn lg:grid lg:grid-cols-3-to-1 lg:gap-20">
      <div>
        <Article page={pageData} currentPage={currentPage} />
        <Paginator initialPage={currentPage} maxPages={MAX_PAGE} />
      </div>
      <Sidebar articles={otherArticles} />
    </div>
  );
}
