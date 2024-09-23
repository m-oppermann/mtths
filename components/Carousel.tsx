"use client"

import clsx from "clsx"
import Image from "next/image"
import { EditorialNew } from "@/styles/fonts"
import { carouselItems } from "@/lib/data"
import { ItemContext } from "@/utils/context"
import { useContext } from "react"

export default function Carousel() {
  const { currentIndex } = useContext(ItemContext)

  return (
    <>
      <Image
        className="sm:absolute sm:left-1/2 sm:top-[20%] sm:-translate-x-1/2 lg:top-6 -sm:col-span-2 -sm:col-start-2 -sm:row-start-2 -sm:mx-auto -sm:-mt-4"
        src={carouselItems[currentIndex].image.src}
        alt={carouselItems[currentIndex].image.alt}
        width={160}
        height={carouselItems[currentIndex] === carouselItems[0] ? 96 : 120}
      />
      <div className="w-full sm:absolute sm:bottom-6 sm:left-0 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 lg:grid-cols-12 lg:px-8 -sm:col-span-4 -sm:row-start-5">
        <p className="interactive pointer-events-auto sm:col-span-6 sm:text-center lg:col-span-8 lg:col-start-3 -sm:text-sm">
          <a
            href={carouselItems[currentIndex].description.link}
            className={clsx(
              "font-serif italic",
              carouselItems[currentIndex].description.link === "" &&
                "pointer-events-none",
              EditorialNew.variable,
            )}
          >
            {carouselItems[currentIndex].description.name}
            {carouselItems[currentIndex].description.link !== "" && " ↗ "}
          </a>
          &nbsp;
          {carouselItems[currentIndex].description.text}
        </p>
      </div>
    </>
  )
}
