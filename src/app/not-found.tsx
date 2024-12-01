"use client";
import { useRouter } from "next/navigation";
import { Button } from "./MaterialComponents";
import Image from "next/image";

export default function NotFound() {
  const router = useRouter();

  const handleBack = () => {
    router.back(); 
  }

  return (
    <div className="animate-fadeIn flex flex-col gap-5 justify-center items-center">
      <Image
        src="/404-error-lost.svg"
        alt="page not found"
        width={100}
        height={100}
        className="w-1/2 lg:w-[30%]"
      />
      <h1 className="text-5xl font-bold text-blue-gray-900">Oops!</h1>
      <p className="text-lg text-blue-gray-700">
        No se ha podido encontrar la página
      </p>
      <Button className="mt-5" color="purple" onClick={handleBack}>
        Regresar
      </Button>
    </div>
  );
}
