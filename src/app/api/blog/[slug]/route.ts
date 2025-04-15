import { pagesContent } from "@/data";
import { NextRequest } from "next/server";
import { generateBlogResume } from "../../utils/generateBlogResume";

export async function GET(
    request: NextRequest,
    { params }: { params: Promise<{ slug: string }> }
) {
    const { slug } = await params;

    const blogData = pagesContent.find(({ url }) => slug === url);

    const otherArticles = pagesContent
        .filter(({ url }) => url !== slug)
        .map(generateBlogResume);

    if (!blogData) {
        return Response.json(
            {},
            {
                status: 400,
            }
        );
    }

    return Response.json({
        blogData,
        otherArticles,
    });
}
