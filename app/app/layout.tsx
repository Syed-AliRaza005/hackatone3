import type { Metadata } from "next";
import { Inter,Poppins,Montserrat  } from "next/font/google";
import "./globals.css";

const array = ["inter","poppins,montserrat"]
const inter = Inter({ subsets: ["latin"] });
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600","700","800", "900", ],
});
const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["100","200", "300", "400", "500", "600","700","800", "900", ],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en  className={`${inter.variable} ${poppins.variable}`}">
      <body>{children}</body>
    </html>
  );
}
