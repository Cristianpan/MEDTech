import { PageContent, PageInfo } from "@/interfaces/PagesInterface";
import { Sidebar, Article } from "@/components/blog";
import { Paginator } from "@/components/ui";
import { apiUrls } from "@/constants";
import { notFound } from "next/navigation";

interface BlogPageProps {
  params: { slug: string };
  searchParams: { page: string };
}

interface API_Response {
  blogData: PageContent,
  metadata: { title: string, description: string }
  otherArticles: PageInfo[]
}

export async function generateMetadata({ params }: BlogPageProps) {
  const { slug } = params;

  const response = await fetch(`${apiUrls.blog}/${slug}`);
  const {  blogData }: API_Response = await response.json();

  return {
    title: `MEDTech | ${blogData?.title}`,
    description: `${blogData?.description}`,
  };
} 

export default async function BlogPage({ params, searchParams }: BlogPageProps) {
  const currentPage = +(searchParams.page || 1);
  const MAX_PAGE = 4;

  const slug = params.slug;

  const response = await fetch(`${apiUrls.blog}/${slug}`);

  if (!response.ok) {
    notFound();
  }

  const {  blogData , otherArticles }: API_Response = await response.json();

  return (
    <div className="animate-fadeIn lg:grid lg:grid-cols-3-to-1 lg:gap-20">
      <div>
        <Article page={blogData} currentPage={currentPage} />
        <Paginator initialPage={currentPage} maxPages={MAX_PAGE} />
      </div>
      <Sidebar articles={otherArticles} />
    </div>
  );
}
