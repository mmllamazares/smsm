import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
// import NavBar from "@/components/NavBar/NavBar"
// import NotificationButton from "@/components/Button/NotificationButton"

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "SMSM",
  description: "Sistema de Monitoreo de Señales Marítimas",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // Para ocultar el warning de hidratacion
    <html lang="es" suppressHydrationWarning={true}>
      <body className={inter.className}>
        {/* <NavBar />
        <NotificationButton /> */}
        {children}
      </body>
    </html>
  );
}
