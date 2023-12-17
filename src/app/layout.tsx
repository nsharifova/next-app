"use client";
import { Footer, Header } from "@/shared/components";
import { Roboto } from "@next/font/google";
import "./globals.css";
import "./globals.scss";
import { Suspense } from "react";
import Loading from "./loading";
const inter = Roboto({
    weight: ["400", "700"],
    style: ["normal", "italic"],
    subsets: ["latin"],
    display: "swap",
});
export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <head>
                <link
                    rel="apple-touch-icon"
                    sizes="180x180"
                    href="/apple-touch-icon.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="32x32"
                    href="/favicon-32x32.png"
                />
                <link
                    rel="icon"
                    type="image/png"
                    sizes="16x16"
                    href="/favicon-16x16.png"
                />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color="#5bbad5"
                />
                <meta name="msapplication-TileColor" content="#da532c" />
                <meta name="theme-color" content="#ffffff" />

                <title>Next App</title>
            </head>
            <body className={inter.className}>
                <Header />
                <Suspense fallback={<p>Loading...</p>}>
                    <div className="w-100 bodyMain">{children}</div>
                </Suspense>
                <Footer />
            </body>
        </html>
    );
}
