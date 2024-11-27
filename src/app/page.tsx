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

export default function Home() {
  return (
    <>
      <section className="container mx-auto  h-[calc(100vh-5rem)]  w-screen grid grid-cols-2 items-center">
        <div>
          <h1 className="text-5xl font-semibold text-blue-gray-900 leading-tight">
            Dealer
            <br />
            <span>Experiences</span>
          </h1>
          <p className="mt-5 text-blue-gray-400 w-4/6">
            The time is now for it to be okay to be great. For being a bright
            color. For standing out.
          </p>

          <Link href="#article">
            <Button className="mt-8 bg-purple-700 transition-colors duration-300">
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
      <main
        id="article"
        className="container mx-auto h-[calc(100vh-5rem)] w-screen"
      >
        <h2 className="text-center text-4xl my-14 font-bold text-blue-gray-900">
          Nuestro Blog
        </h2>

        <div className="flex flex-wrap gap-5 justify-center">
          {[1, 2, 3].map((i) => (
            <Card key={i} className="mt-6 max-w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img
                  src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                  alt="card-image"
                />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  UI/UX Review Check
                </Typography>
                <Typography className="text-blue-gray-400">
                  The place is close to Barceloneta Beach and bus stop just 2
                  min by walk and near to &quot;Naviglio&quot; where you can
                  enjoy the main night life in Barcelona.
                </Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link href="#">
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
              </CardFooter>
            </Card>
          ))}
        </div>
      </main>
    </>
  );
}
