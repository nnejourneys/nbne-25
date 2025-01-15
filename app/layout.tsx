import "./globals.css"; 
import { Montserrat, Open_Sans } from "next/font/google";
import { ThemeProvider } from "@/components/ui/theme-provider"; 
import Menu from "@/components/layout/navbar/menu"; 
import Footer from "@/components/layout/footer/footer";
import {
  BASE_PATH,
  SITE_TITLE,
  SITE_DESC,
  SITE_KEYWORDS,
} from "@/lib/constants";
import { Toaster } from "@/components/ui/toaster"
// import { GoogleTagManager } from '@next/third-parties/google'

const montserrat = Montserrat({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
});

const open_sans = Open_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-open_sans",
  display: "swap",
});

export const metadata = {
  icons: {
    icon: "/images/favicon.png",
  },
  title: `Home | ${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  generator: "Next.js",
  referrer: "origin-when-cross-origin",
  keywords: `${SITE_KEYWORDS}`,
  authors: [{ name: "Roheen Browne" }],
  creator: "Roheen Browne",
  publisher: "Roheen Browne",
  metadataBase: new URL(`${BASE_PATH}`),
  alternates: {
    canonical: "/",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_TITLE}`,
    description: `${SITE_DESC}`,
    siteId: "1467726470533754880",
    creator: "@rbrowne",
    creatorId: "1467726470533754880",
    images: `${BASE_PATH}/og-logo.png`,
  },
  openGraph: {
    title: `${SITE_TITLE}`,
    description: `${SITE_DESC}`,
    url: `${BASE_PATH}`,
    siteName: `${SITE_TITLE}`,
    images: [
      {
        url: `${BASE_PATH}/og-logo.png`,
        width: 800,
        height: 600,
      },
      {
        url: `${BASE_PATH}/og-logo.png`,
        width: 1800,
        height: 1600,
        alt: "North by North East",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "TouristTrip",
  name: `${SITE_TITLE}`,
  description: `${SITE_DESC}`,
  image: `${BASE_PATH}/og-logo.png`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${montserrat.variable} ${open_sans.variable}`}
    >
      {/* <GoogleTagManager gtmId="GTM-XYZ" /> */}
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Menu />
          {children}
          <Toaster />
          <Footer />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
