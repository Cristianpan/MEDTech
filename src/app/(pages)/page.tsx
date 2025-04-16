import Image from "next/image";
import { Button } from "@/components/ui/MaterialComponents";
import Link from "next/link";
import { Articles } from "@/components/home";

export default function Home() {

  return (
    <>
      <section className="animate-fadeIn mx-auto h-[calc(100vh-5rem)] flex flex-col-reverse mt-24 md:mt-0 justify-end md:grid md:grid-cols-2 items-center">
        <div>
          <h1 className="text-3xl md:text-5xl font-semibold mt-5 text-blue-gray-900 leading-tight md:max-w-[75%]">
            ¡Hablemos de redes!
          </h1>
          <p className="mt-5 text-blue-gray-400 md:w-4/6">
            En nuestro blog encontrarás información sobre redes, seguridad y
            mucho más. Aprende con nosotros y mantente actualizado.
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
      <main id="blogs" className="animate-fadeIn mx-auto min-h-[calc(100vh-5rem)] pb-5 lg:pb-0">
        <h2 className="text-center text-3xl my-10 font-bold text-blue-gray-900">
          Nuestro Blog
        </h2>
        <Articles />
      </main>
    </>
  );
}
