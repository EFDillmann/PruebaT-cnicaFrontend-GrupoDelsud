import type { Metadata } from "next";
import { Nunito_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const nunitoSans = Nunito_Sans({
    variable: "--font-nunito-sans",
    subsets: ["latin"],
});

const montserrat = Montserrat({
    variable: "--font-montserrat",
    subsets: ["latin"],
});

export const metadata: Metadata = {
    title: "DELSUD - Landing",
    description:
        "Prueba técnica para el puesto de Frontend Developer abierto en Grupo Delsud",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={`${nunitoSans.variable} ${montserrat.variable}`}>
                {children}
            </body>
        </html>
    );
}
