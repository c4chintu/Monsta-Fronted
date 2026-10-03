import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Footer from "./compontes/comman/Footer";
import Header from "./compontes/comman/Header";
import MainLayout from "./MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});



export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body>
        <MainLayout>
        <Header />
        {children}
        <Footer />
        </MainLayout>
      </body>
    </html>
  );
}
