import localFont from "next/font/local"

export const Mori = localFont({
  src: [
    {
      path: "./fonts/PPMori-Regular.woff2",
      weight: "500",
      style: "normal",
    },
  ],
  display: "swap",
  variable: "--font-mori",
})

export const EditorialNew = localFont({
  src: [
    {
      path: "./fonts/PPEditorialNew-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/PPEditorialNew-Italic.woff2",
      weight: "400",
      style: "italic",
    },
  ],
  display: "swap",
  variable: "--font-editorial-new",
})
