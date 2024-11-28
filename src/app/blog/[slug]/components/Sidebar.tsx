import { PageInfo } from "@/interfaces/PagesInterface";
import {
  Card,
  CardBody,
  Button,
  Typography,
} from "../../../MaterialComponents";
import Link from "next/link";

export const Sidebar = ({ articles }: { articles: PageInfo[] }) => {
  return (
    <aside className="mt-6 md:mt-7 border-t border-t-blue-gray-200 lg:border-t-0 ">
      {articles.map(({ id, title, description, url }) => (
        <Card
          key={id}
          className=" border-b border-b-blue-gray-100 rounded-none pt-4"
          shadow={false}
          radioGroup="0"
        >
          <CardBody className="px-0 py-2">
            <Typography
              variant="h5"
              color="blue-gray"
              className="mb-2 text-base"
            >
              {title}
            </Typography>
            <Typography className="text-blue-gray-700 text-sm line-clamp-2">
              {description}
            </Typography>
            <Link className="inline-block mt-2" href={`/blog/${url}`}>
              <Button
                size="sm"
                variant="text"
                color="purple"
                className="flex items-center gap-2"
              >
                Leer más
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-4 w-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                  />
                </svg>
              </Button>
            </Link>
          </CardBody>
        </Card>
      ))}
    </aside>
  );
};
