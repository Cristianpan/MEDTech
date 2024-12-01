"use client";
import { useEffect, useState } from "react";
import { pagesContent, pagesInfo } from "@/data";
import { notFound, useRouter } from "next/navigation";
import { PageContent, PageInfo } from "@/interfaces/PagesInterface";
import { Article } from "./components/Article";
import { Sidebar } from "./components/Sidebar";
import { Paginator } from "@/app/Components/Paginator";

export default function BlogPage({
  params,
  searchParams,
}: {
  params: { slug: string };
  searchParams: { page: string };
}) {
  const [pageData, setPageData] = useState<PageContent>({
    title: "",
    url: "",
    mainImage: "",
    date: "",
    pageContent: [],
    references: [],
  });
  const [othersArticles, setOthersArticles] = useState<PageInfo[]>([]);
  const router = useRouter();
  const currentPage = +(searchParams.page || 1);
  const MAX_PAGE = 4;


  useEffect(() => {
    const slug = params.slug;
    const page: PageContent | undefined = pagesContent.find(
      (page) => page.url === slug
    );
    const otherArticles = pagesInfo.filter((page) => page.url !== slug);

    if (!page) {
      notFound();
    } else {
      setPageData(page);
      setOthersArticles(otherArticles);
    }
  }, []);

  return (
    <div className="lg:grid lg:grid-cols-3-to-1 lg:gap-20">
      <div>
        <Article page={pageData} currentPage={currentPage} />
        <Paginator
          initialPage={currentPage}
          maxPages={MAX_PAGE}
          router={router}
        />
      </div>
      <Sidebar articles={othersArticles} />
    </div>
  );
}
