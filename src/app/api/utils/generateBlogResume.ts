import { PageContent, PageInfo } from "@/interfaces";

export const generateBlogResume = ({
    title,
    description,
    url,
    mainImage: image,
}: PageContent): PageInfo => {
    return {
        title,
        description,
        url,
        image,
    };
};
