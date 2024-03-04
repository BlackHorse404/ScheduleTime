import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css"
import Script from 'next/script'
import Navbar from "@/components/navbar";

const inter = Inter({ subsets: ["vietnamese"] });

export const metadata = {
  title: "Thời Khóa Biểu",
  description: "Product by BlackHorse",
  icons: {
    icon: '/favicon.ico', 
  }
};

export default function RootLayout({ children }) {


  return (
    <html lang="en">
      <body className={inter.className}>
      <div className="grid grid-cols-12">
          <div className="col-span-1">
            <Navbar />
          </div>
          <div className="col-span-11">
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
