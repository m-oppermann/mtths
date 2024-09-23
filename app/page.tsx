import clsx from "clsx"
import { EditorialNew } from "@/styles/fonts"
import ThemeSwitch from "@/components/ThemeSwitch"
import Carousel from "@/components/Carousel"

export default function IndexPage() {
  return (
    <>
      <header className="sm:absolute -sm:col-span-4 -sm:row-span-1">
        <h1
          className={clsx(
            "flex font-serif text-lg sm:text-xl -sm:place-content-between",
            EditorialNew.variable,
          )}
        >
          <span className="interactive pointer-events-auto italic">
            Matthias&nbsp;
          </span>
          <span className="interactive pointer-events-auto">Oppermann</span>
        </h1>
      </header>
      <main className="-sm:col-span-4 -sm:row-span-10 -sm:row-start-2 -sm:grid -sm:grid-cols-4 -sm:grid-rows-10 -sm:gap-4">
        <Carousel />
        <div className="flex flex-col items-center gap-1 text-sm sm:absolute sm:right-6 sm:top-6 sm:items-end lg:right-8 -sm:col-span-4 -sm:row-start-8">
          <span className="interactive pointer-events-auto">
            Have a project in mind?
          </span>
          <a
            className="interactive pointer-events-auto rounded-full bg-gray-2 px-2 py-1 leading-none hover:bg-gray-3 focus:bg-gray-4 dark:bg-grayDark-2 dark:hover:bg-grayDark-3 dark:focus:bg-grayDark-4"
            href="mailto:hello@mtths.co"
          >
            hello@mtths.co
          </a>
        </div>
      </main>
      <footer className="grid grid-cols-4 place-content-end gap-4 text-sm sm:absolute sm:left-0 sm:top-1/2 sm:col-span-6 sm:w-full sm:max-w-[1920px] sm:-translate-y-1/2 sm:grid-cols-6 sm:place-content-start sm:px-6 lg:grid-cols-12 lg:px-8 -sm:col-span-4 -sm:row-start-12">
        <ThemeSwitch />
        <div className="sm:col-span-2 sm:col-start-3 sm:grid sm:grid-cols-2 sm:gap-4 sm:text-gray-5 dark:sm:text-grayDark-5 lg:col-span-3 lg:col-start-4 lg:grid-cols-3 -sm:col-start-2 -sm:justify-self-end">
          <span className="interactive pointer-events-auto h-max w-max lg:col-start-1">
            Social
          </span>
          <br className="sm:hidden" />
          <a
            className={clsx(
              "interactive pointer-events-auto h-max w-max font-serif italic lg:col-start-3",
              EditorialNew.variable,
            )}
            href="https://read.cv/mtths"
            target="_blank"
          >
            Read.cv ↗
          </a>
        </div>
        <span className="col-span-2 col-start-3 sm:col-start-5 sm:text-gray-5 dark:sm:text-grayDark-5 lg:col-start-11 -lg:justify-self-end">
          <span
            className={clsx(
              "interactive pointer-events-auto font-serif",
              EditorialNew.variable,
            )}
          >
            ©
          </span>
          &nbsp;
          <span className="interactive pointer-events-auto">
            2024 <br /> All rights reserved.
          </span>
        </span>
      </footer>
    </>
  )
}
