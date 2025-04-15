import { pagesContent } from "@/data";
import { generateBlogResume } from "../utils/generateBlogResume";

export async function GET() {
    const pagesInfo = pagesContent.map(generateBlogResume);

    return Response.json(pagesInfo);
}
