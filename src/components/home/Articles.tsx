'use client';

import { Card, CardHeader, CardFooter, CardBody, Button, Typography } from "@/components/ui";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { PageInfo } from "@/interfaces";
import { apiUrls } from "@/constants";

export const Articles = () => {

  const [blogsInfo, setBlogsInfo] = useState<PageInfo[]>([]);

  useEffect(() => {

    const fecthData = async () => {
      try {
        const response = await fetch(apiUrls.blog);

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        setBlogsInfo(await response.json());
      } catch (error) {
      }
    }

    fecthData();
  }, [])

  return (
    <div className="flex flex-wrap gap-5 justify-center">
      {blogsInfo.map(({ image, title, description, url }) => (
        <Card key={url} className="mt-6 max-w-96">
          <CardHeader color="blue-gray" className="relative h-56">
            <Image src={image} alt="card-image" width={500} height={500} className="object-cover w-full h-full object-center" />
          </CardHeader>
          <CardBody>
            <Typography variant="h5" color="blue-gray" className="mb-2">
              {title}
            </Typography>
            <Typography className="text-blue-gray-700">
              {description}
            </Typography>
          </CardBody>
          <CardFooter className="pt-0">
            <Link href={`/blog/${url}`}>
              <Button
                size="sm"
                variant="text"
                color="purple"
                className="flex items-center gap-2 text-sm"
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
          </CardFooter>
        </Card>
      ))}
    </div>
  )
}
