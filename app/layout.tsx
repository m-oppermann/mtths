import "@/styles/globals.css"
import type { Metadata } from "next"
import { clsx } from "clsx"
import { Mori } from "@/styles/fonts"
import { ThemeProvider } from "next-themes"

export const metadata: Metadata = {
  title: "Matthias Oppermann",
  description:
    "Creating for the web by combining strategy, creative direction, digital design and web development.",
  /*
  openGraph: {
    title: "Matthias Oppermann",
    description:
      "Creating for the web by combining strategy, creative direction, digital design and web development.",
    url: "https://mtths.co",
    images: {
      url: "",
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
    images: "",
  },
  icons: {
    icon: {
      url: "",
      sizes: "32x32",
      type: "image/png",
    },
    apple: {
      url: "",
      sizes: "180x180",
      type: "image/png",
    },
  },
  */
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
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
