import { Geist, Geist_Mono } from "next/font/google";
import "@/styles/index.scss";
import { Header } from "./(layout)/Header";
import { Footer } from "./(layout)/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Portfolio",
  description: "A portfolio of projects and technologies I've worked with",
  applicationName: "CT Portfolio",
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon-16x16.png", type: "image/png", sizes: "16x16" },
      { url: "/favicon-96x96.png", type: "image/png", sizes: "96x96" },
    ],
    apple: [
      {
        url: "/icons/apple/apple-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#2c3e50",
      },
      {
        rel: "android-chrome-192x192",
        url: "/web-app-manifest-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome-512x512",
        url: "/web-app-manifest-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  },
  appleWebApp: {
    title: "CT site",
    statusBarStyle: "default",
    startupImage: ["/apple-icon.png"],
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ct-site.dev",
    siteName: "CT site",
    title: "CT site",
    description:
      "My portfolio showcases my work in web development, including projects, technologies, and skills. Explore my projects and get in touch.",
    images: [
      {
        url: "/web-app-manifest-512x512.png",
        width: 512,
        height: 512,
        alt: "CT Portfolio Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CT site",
    description:
           "My portfolio showcases my work in web development, including projects, technologies, and skills. Explore my projects and get in touch.",
    images: ["/web-app-manifest-512x512.png"],
    creator: "@ct_sites",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className={`${geistSans.variable} ${geistMono.variable}`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
