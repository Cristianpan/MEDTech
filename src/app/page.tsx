import Image from "next/image";
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
} from "./MaterialComponents";
import Link from "next/link";
import { pagesInfo } from "../data";

export default function Home() {
  return (
    <>
      <section className="animate-fadeIn mx-auto h-[calc(100vh-5rem)] flex flex-col-reverse mt-24 md:mt-0 justify-end md:grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mt-5 text-blue-gray-900 leading-tight">
            Dealer Experiences
          </h1>
          <p className="mt-5 text-blue-gray-400 md:w-4/6">
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>

          <Link href="#blogs">
            <Button className="mt-8 bg-purple-400 transition-colors duration-300">
              Conoce nuestro blog
            </Button>
          </Link>
        </div>
        <div>
          <Image
            src="./internet.svg"
            alt="internet image"
            width={200}
            height={200}
            className="w-full"
          />
        </div>
      </section>
      <main id="blogs" className="animate-fadeIn mx-auto h-[calc(100vh-5rem)]">
        <h2 className="text-center text-3xl my-14 font-bold text-blue-gray-900">
          Nuestro Blog
        </h2>

        <div className="flex flex-wrap gap-5 justify-center">
          {pagesInfo.map(({id, image, title, description, url}) => (
            <Card key={id} className="mt-6 max-w-96">
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
      </main>
    </>
  );
}
