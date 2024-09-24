import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { Mori } from "@/styles/fonts"
import Providers from "@/components/Providers"
import { Analytics } from "@vercel/analytics/react"

export const metadata: Metadata = {
  title: "Matthias Oppermann",
  description:
    "Creating for the web by combining strategy, creative direction, digital design and web development.",
  openGraph: {
    title: "Matthias Oppermann",
    description:
      "Creating for the web by combining strategy, creative direction, digital design and web development.",
    url: "https://mtths.co",
    images: {
      url: "https://mtths.co/images/preview.jpg",
      width: 1200,
      height: 630,
    },
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Matthias Oppermann",
    description:
      "Creating for the web by combining strategy, creative direction, digital design and web development.",
    images: "https://mtths.co/images/preview.jpg",
  },
  icons: {
    icon: {
      url: "https://mtths.co/icons/favicon.png",
      sizes: "32x32",
      type: "image/png",
    },
    apple: {
      url: "https://mtths.co/icons/apple-touch-icon.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={clsx(
          "mx-auto h-screen min-h-[640px] max-w-[1920px] bg-gray-1 font-sans text-gray-6 antialiased dark:bg-grayDark-1 dark:text-grayDark-6",
          Mori.variable,
        )}
      >
        <Providers>{children}</Providers>
        <Analytics />
      </body>
    </html>
  )
}
