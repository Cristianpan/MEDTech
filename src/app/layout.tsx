import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import NavbarComponent from "./Components/NavbarComponent";
export const metadata: Metadata = {
  title: "MEDTech",
  description: "Tu blog sobre redes, ciberseguridad y más",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        <Providers>
            <NavbarComponent />
            <div className="container px-10 mx-auto">{children}</div>
        </Providers>
      </body>
    </html>
  );
}
