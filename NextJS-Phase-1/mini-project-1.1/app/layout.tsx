import type { Metadata } from "next";
import "./globals.css";
import NavBar from "@/src/components/NavBar";
import Footer from "@/src/components/Footer";


export const metadata: Metadata = {
  title: "Mini Project 1.1",
  description: "This is the first mini project of the Next.js learning path. It is a simple project that demonstrates the use of the new app directory and the new file-based routing system.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
