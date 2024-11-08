import "@/styles/globals.css";
import { Toaster } from "@/components/ui/sonner";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL("https://pouzz.xyz"),
  title:
    "Pouzz App | Anonymous Messaging Platform | Social Network for Anonymous Messages",
  description:
    "Discover Pouzz, a unique social media platform for anonymous messaging. Create profiles and receive heartfelt, long-form anonymous messages from across the web. Perfect for those seeking anonymous connections and expressions.",
  keywords: [
    "Kashmir social media",
    "anonymous messaging Kashmir",
    "send anonymous messages",
    "Kashmir online community",
    "anonymous messages platform",
    "Next.js social platform",
    "Kashmir-specific social network",
    "send messages anonymously",
    "anonymous message service",
    "long messages anonymously",
    "Kashmir messaging app",
    "Next.js anonymous platform",
    "connect anonymously in Kashmir",
    "Pouzz App",
    "Tellonym Alternative",
  ],
  openGraph: {
    title: "Pouzz App | Anonymous Messaging Platform",
    description:
      "Send and receive anonymous messages on Kashmir's own social media platform Pouzz App. Create a profile and let others reach out anonymously.",
    url: "https://pouzz.xyz",
    type: "website",
    images: [
      {
        url: "https://pouzz.xyz/assets/ogimage.png",
        width: 1200,
        height: 630,
        alt: "Pouzz - Connect Anonymously, Share Freely.",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Pouzz App | Anonymous Messaging Platform",
    description:
      "Experience Kashmir's own platform for anonymous messages. Join the community today!",
    images: ["https://pouzz.xyz/assets/ogimage.png"],
    creator: "@hubulwattan",
    siteId: "1821562943789785088",
    creatorId: "1821562943789785088",
  },
  applicationName: "Pouzz App",
  authors: [{ name: "Mohammad Faizan" }],
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  creator: "Mohammad Faizan",
  publisher: "Mohammad Faizan",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <head>
        <link
          rel="icon"
          type="image/png"
          href="/favicon/favicon-96x96.png"
          sizes="96x96"
        />
        <link rel="icon" type="image/svg+xml" href="/favicon/favicon.svg" />
        <link rel="shortcut icon" href="/favicon/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicon/apple-touch-icon.png"
        />
        <meta name="apple-mobile-web-app-title" content="Pouzz" />
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body>
        {children}
        <Toaster />

        <Script
          defer
          src="https://stats.hellofaizan.tech/script.js"
          data-website-id="c5ebf620-7099-4a42-a39e-c352093eaf7d"
        ></Script>
      </body>
    </html>
  );
}
