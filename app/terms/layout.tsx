import { Analytics } from "@vercel/analytics/react";
import cx from "classnames";
import { sfPro, inter } from "@/app/fonts";
import Nav from "@/components/layout/nav";
import Footer from "@/components/layout/footer";
import { Suspense } from "react";

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={cx(sfPro.variable, inter.variable)}>
        <div className="fixed h-screen w-full bg-black" />
        <Suspense fallback="...">
          <Nav />
        </Suspense>
        <main className="flex flex-col items-center justify-start py-32 overflow-y-auto">
          <div className="card-container w-full">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
