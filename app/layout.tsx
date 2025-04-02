import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { AppBar } from "@/components/Appbar";
import { Footer } from "@/components/Footer";
import { Provider } from "@/components/Provider";
import { Theme } from "@/components/Theme";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "PORTFOLIO",
  description: "PORTFOLIO OF SUJOY SAMANTA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-r from-gray-900 via-neutral-950 to-slate-900 text-white flex flex-col min-h-screen overflow-x-hidden`}
      >
        <Provider>
         <Theme className="w-full h-full">
            <AppBar />
            <main className="flex-1 h-full w-full mt-20 sm:mt-28">{children}</main>
         </Theme>
         <Footer />
        </Provider>
      </body>
    </html>
  );
}
