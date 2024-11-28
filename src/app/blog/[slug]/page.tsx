"use client";
import { useEffect, useState } from "react";
import { pagesContent, pagesInfo } from "@/data";
import { notFound } from "next/navigation";
import { PageContent, PageInfo } from "@/interfaces/PagesInterface";
import { Article } from "./components/Article";
import { Sidebar } from "./components/Sidebar";

export default function page({ params }: { params: { slug: string } }) {
  const [pageData, setPageData] = useState<PageContent>({
    title: "",
    url: "",
    mainImage: "",
    date: "",
    pageContent: [],
    references: [],
  });
  const [othersArticles, setOthersArticles] = useState<PageInfo[]>([]);

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
        <Article page={pageData} />
        <Sidebar articles={othersArticles} />
    </div>
  );
}
