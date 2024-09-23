"use client"

import { useState, useEffect } from "react"
import clsx from "clsx"
import { ThemeProvider } from "next-themes"
import { carouselItems } from "@/lib/data"
import { ItemContext } from "@/utils/context"

interface ProvidersProps {
  children: React.ReactNode
}

export default function Providers({ children }: ProvidersProps) {
  // Carousel
  const [currentIndex, setCurrentIndex] = useState(0)
  const [cursorPosition, setCursorPosition] = useState<number | null>(null)
  const [isHoveringInteractive, setIsHoveringInteractive] = useState(false)

  const isDesktop = typeof window !== "undefined" && window.innerWidth > 1024
  const isMobileOrTablet =
    typeof window !== "undefined" && window.innerWidth <= 1024

  const handleNavigation = (direction: "left" | "right") => {
    if (direction === "left") {
      setCurrentIndex(prev => (prev > 0 ? prev - 1 : carouselItems.length - 1))
    } else {
      setCurrentIndex(prev => (prev < carouselItems.length - 1 ? prev + 1 : 0))
    }
  }

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const screenWidth = window.innerWidth

      const clickedElement = e.target as HTMLElement
      if (clickedElement.closest(".interactive")) return

      if (isMobileOrTablet) {
        handleNavigation("right")
      } else {
        if (e.clientX < screenWidth / 2) {
          handleNavigation("left")
        } else {
          handleNavigation("right")
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      if (isDesktop) {
        setCursorPosition(e.clientX)

        const hoveredElement = e.target as HTMLElement
        setIsHoveringInteractive(!!hoveredElement.closest(".interactive"))
      }
    }

    window.addEventListener("click", handleClick)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("click", handleClick)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [isDesktop, isMobileOrTablet])

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      <ItemContext.Provider value={{ currentIndex }}>
        <div
          className={clsx(
            "relative h-full p-4 sm:p-6 lg:px-8 -sm:grid -sm:grid-cols-4 -sm:grid-rows-12 -sm:gap-4",
            isDesktop &&
              !isHoveringInteractive &&
              cursorPosition !== null &&
              cursorPosition < window.innerWidth / 2 &&
              "cursor-w-resize",
            isDesktop &&
              !isHoveringInteractive &&
              cursorPosition !== null &&
              cursorPosition >= window.innerWidth / 2 &&
              "cursor-e-resize",
          )}
        >
          {children}
        </div>
      </ItemContext.Provider>
    </ThemeProvider>
  )
}
