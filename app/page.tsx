import Image from "next/image"
import clsx from "clsx"
import { EditorialNew } from "@/styles/fonts"
import ThemeSwitch from "@/components/ThemeSwitch"

export default function IndexPage() {
  return (
    <div className="relative h-full p-4 sm:p-6 lg:px-8 -sm:grid -sm:grid-cols-4 -sm:grid-rows-12 -sm:gap-4">
      <header className="sm:absolute -sm:col-span-4 -sm:row-span-1">
        <h1
          className={clsx(
            "flex font-serif text-lg sm:text-xl -sm:place-content-between",
            EditorialNew.variable,
          )}
        >
          <em>Matthias</em>&nbsp;Oppermann
        </h1>
      </header>
      <main className="-sm:col-span-4 -sm:row-span-10 -sm:row-start-2 -sm:grid -sm:grid-cols-4 -sm:grid-rows-10 -sm:gap-4">
        <Image
          className="sm:absolute sm:left-1/2 sm:top-[20%] sm:-translate-x-1/2 lg:top-6 -sm:col-span-2 -sm:col-start-2 -sm:row-start-2 -sm:-mt-4 -sm:w-full -lg:-translate-y-[20%]"
          src="/images/sky.jpg"
          alt="sky"
          width={160}
          height={96}
        />
        {/* <Image src="/images/t-n.gif" alt="t-n" width={160} height={120} />
          <Image src="/images/tone.gif" alt="tone" width={160} height={120} /> */}
        <div className="sm:absolute sm:bottom-6 sm:left-0 sm:grid sm:grid-cols-6 sm:gap-4 sm:px-6 lg:grid-cols-12 lg:px-8 -sm:col-span-4 -sm:row-start-5">
          <p className="sm:col-span-6 sm:text-center lg:col-span-8 lg:col-start-3 -sm:text-sm">
            <em>I</em> combine strategy, creative direction, digital design and
            web development to create aesthetic websites as nurturing gardens
            for curious souls to explore different facets of the human •
            experience.
          </p>
        </div>
        {/* <p>
            <a href="https://tranquillum-naturae.com">tranquillum naturae ↗</a>
            &nbsp;&nbsp;displays a collection of captured moments and
            contemplative thoughts on nature&apos;s innate mystery. Intended as
            a reminder to cultivate a sense of wonder for all of her
            expressions.
          </p>
          <p>
            <a href="https://t-o-n-e.com">t-o-n-e ↗</a>&nbsp;&nbsp;explores
            natural colour schemes of beautiful places on earth through
            photography to inspire a unique palette rooted in nature.
          </p> */}
        <div className="flex flex-col items-center gap-1 text-sm sm:absolute sm:right-6 sm:top-6 sm:items-end lg:right-8 -sm:col-span-4 -sm:row-start-8">
          Have a project in mind?
          <a
            className="rounded-full bg-gray-2 px-2 py-1 leading-none hover:bg-gray-3 focus:bg-gray-4 dark:bg-grayDark-2 dark:hover:bg-grayDark-3 dark:focus:bg-grayDark-4"
            href="mailto:hello@mtths.co"
          >
            hello@mtths.co
          </a>
        </div>
      </main>
      <footer className="grid grid-cols-4 place-content-end gap-4 text-sm sm:absolute sm:left-0 sm:top-1/2 sm:col-span-6 sm:w-full sm:max-w-[1920px] sm:-translate-y-1/2 sm:grid-cols-6 sm:place-content-start sm:px-6 lg:grid-cols-12 lg:px-8 -sm:col-span-4 -sm:row-start-12">
        <ThemeSwitch />
        <div className="sm:col-span-2 sm:col-start-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:text-gray-5 lg:col-span-3 lg:col-start-4 lg:grid-cols-3 -sm:col-start-2 -sm:justify-self-end dark:sm:text-grayDark-5">
          Social
          <br />
          <a
            className={clsx(
              "h-max w-max font-serif italic lg:col-start-3",
              EditorialNew.variable,
            )}
            href="https://read.cv/mtths"
          >
            Read.cv ↗
          </a>
        </div>
        <span className="col-span-2 col-start-3 sm:col-start-5 sm:text-gray-5 lg:col-start-11 -lg:justify-self-end dark:sm:text-grayDark-5">
          <span className={clsx("font-serif", EditorialNew.variable)}>©</span>
          &nbsp;2024 <br /> All rights reserved.
        </span>
      </footer>
    </div>
  )
}
