import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";




const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.d4interactive.in"),

  title: {
    default:
      "D4 Interactive IT & Web Services Pvt Ltd | Website Development & Digital Marketing Company",
    template: "%s | D4 Interactive",
  },

  description:
    "D4 Interactive IT & Web Services Pvt Ltd provides Website Development, Website Design, SEO Services, Google Ads, Meta Ads, Social Media Marketing, Branding and Digital Marketing solutions in Hyderabad and Bengaluru.",

  keywords: [
    "Website Development Company Hyderabad",
    "Website Development Company Bengaluru",
    "Website Design Company Hyderabad",
    "Website Design Company Bengaluru",
    "SEO Services Hyderabad",
    "SEO Services Bengaluru",
    "Digital Marketing Company Hyderabad",
    "Digital Marketing Company Bengaluru",
    "Google Ads Agency Hyderabad",
    "Google Ads Agency Bengaluru",
    "Meta Ads Agency Hyderabad",
    "Meta Ads Agency Bengaluru",
    "Social Media Marketing Hyderabad",
    "Social Media Marketing Bengaluru",
    "D4 Interactive",
  ],

  authors: [
    {
      name: "D4 Interactive IT & Web Services Pvt Ltd",
    },
  ],

  creator: "D4 Interactive IT & Web Services Pvt Ltd",

  publisher: "D4 Interactive IT & Web Services Pvt Ltd",

  openGraph: {
    title:
      "D4 Interactive IT & Web Services Pvt Ltd",
    description:
      "Website Development, SEO Services, Google Ads, Meta Ads and Digital Marketing Company in Hyderabad & Bengaluru.",
    url: "https://www.d4interactive.in",
    siteName: "D4 Interactive",
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "D4 Interactive IT & Web Services Pvt Ltd",
    description:
      "Website Development & Digital Marketing Company in Hyderabad & Bengaluru.",
  },

  robots: {
    index: true,
    follow: true,
  },

  category: "Technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-screen bg-white text-slate-900">
        
        <Navbar />

        <main className="flex-1">
          {children}
        </main>

        <Footer />

      </body>
    </html>
  );
}