import Image from "next/image";
import { Typography } from "@/components/ui";
import { Metadata } from "next";

export const metadata: Metadata ={
  title: "MEDTech | Nosotros"
}

export default function page() {
  return (
    <div className="animate-fadeIn mx-auto min-h-[calc(100vh-5rem)] flex flex-col md:gap-10 justify-end items-center md:grid md:grid-cols-2">
      <div>
        <Typography
          variant="h1"
          className="text-3xl font-semibold  mt-7 md:mt-0 text-blue-gray-900 leading-tight"
        >
          ¿Quiénes somos?
        </Typography>
        <Typography className="mt-5 text-blue-gray-700">
          Somos un grupo de estudiantes de la{" "}
          <span className="text-purple-500 font-semibold">
            Universidad Autónoma de Yucatán
          </span>
          , que dado el interes en el desarrollo de software y la tecnología,
          hemos decidido trabajar en conjunto para compartir un poco de los
          conocimientos adquiridos con respecto al área de{" "}
          <span className="text-purple-500 font-semibold">
            Redes y seguridad de computadoras.
          </span>{" "}
          Con la finalidad de fomentar el interes en los temas que se asocian a
          esta área. El equipo está conformado por:
        </Typography>
        <ul className="list-disc pl-4 mt-4">
          <li>
            <Typography className="text-blue-gray-700 mb-1">
              Erick Christopher Arzat Torres
            </Typography>
          </li>
          <li>
            <Typography className="text-blue-gray-700 mb-1">
              Mariam Guadalupe Moreno Farah
            </Typography>
          </li>
          <li>
            <Typography className="text-blue-gray-700 mb-1">
              Cristian David Pan Zaldivar
            </Typography>
          </li>
          <li>
            <Typography className="text-blue-gray-700 mb-1">
              Diana Carolina Vázquez Rodríguez
            </Typography>
          </li>
        </ul>
      </div>
      <Image
        src="/about-us.svg"
        alt="about us"
        width={100}
        height={100}
        className="w-full"
      />
    </div>
  );
}
