import type { Metadata } from "next";
import "./globals.css";
import { peyda } from "@/public/Fonts/Fonts";
import QueryContextProvider from "./querycontextprovider";
import Footer from "./components/footer";
import Header from "./components/header";
import Modal from "./components/modal";
import ReduxProvider from "./reduxProvider";
import MicroButton from "micro-button";

export const metadata: Metadata = {
  title: "Alis",
  description: "Test task for Alis Cooperation",
  generator: "Next.js",
  manifest: "manifest.json",
  keywords: ["alsisTestTask"],

  authors: [
    { name: "Mohammad Reza Khatibi" },
    {
      name: "Mohammad Reza Khatibi",
      url: "https://github.com/mkhb1375",
    },
  ],

  icons: [
    { rel: "apple-touch-icon", url: "icon128_rounded.png" },
    { rel: "icon", url: "icon128_rounded.png" },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="text-[12px] lg:text-[20px] 2xl:text-[28px] overflow-y-hidden h-[100vh] relative"
      lang="en"
    >
      <body className={`${peyda.className}`}>
        <ReduxProvider>
          <QueryContextProvider>
            <Modal />

            <div className=" h-[100vh]">
              <Header />
              <div className="absolute left-[25px] bottom-[25px] z-2 border-1 border-[red] rounded-[5px] p-1">
                <MicroButton />
              </div>
              {children}
              <Footer />
            </div>
          </QueryContextProvider>
        </ReduxProvider>
      </body>
    </html>
  );
}
