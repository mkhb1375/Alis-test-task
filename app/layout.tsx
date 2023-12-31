import type { Metadata } from "next";
import "./globals.css";
import { peyda } from "@/public/Fonts/Fonts";
import QueryContextProvider from "./querycontextprovider";

export const metadata: Metadata = {
  title: "Alis",
  description: "Test task for Alis Cooperation",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className="text-[12px] lg:text-[20px] 2xl:text-[28px] overflow-y-hidden"
      lang="en"
    >
      <body className={`${peyda.className}`}>
        <QueryContextProvider>
          <div className="relative h-[100vh]">
            <nav className="navbar navbar-dark bg-dark p-3 ">
              <h1 className="text-[white] text-center mx-auto">تسک آزمایشی</h1>
            </nav>
            {children}
            <nav className="navbar navbar-dark bg-dark p-3 absolute bottom-[0] w-full  ">
              <p className="text-[white] text-[0.7rem] text-center mx-auto">
                تمامی حقوق محفوظ است
              </p>
              <p className="text-[white] text-[0.7rem] text-center mx-auto">
                2023-محمدرضا خطیبی
              </p>
            </nav>
          </div>
        </QueryContextProvider>
      </body>
    </html>
  );
}
