import { Inter } from "next/font/google";
import "./globals.css";
import { MyListProvider } from "@/context/MyListContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Clone | Next.js",
  description:
    "A fully functional Netflix clone built with Next.js, React, and Tailwind CSS — featuring App Router, React Context, custom hooks, dynamic routing, and more.",
  keywords: ["Netflix", "Clone", "Next.js", "React", "Tailwind CSS"],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <MyListProvider>{children}</MyListProvider>
      </body>
    </html>
  );
}
