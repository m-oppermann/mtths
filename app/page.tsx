import Image from "next/image"

export default function IndexPage() {
  return (
    <>
      <header>
        <h1>Matthias Oppermann</h1>
        <div>
          <span>Have a project in mind?</span>
          <a href="mailto:hello@mtths.co">hello@mtths.co</a>
        </div>
      </header>
      <main>
        <div>
          <Image src="/images/sky.jpg" alt="sky" width={96} height={160} />
          {/* <Image src="/images/t-n.gif" alt="t-n" width={160} height={120} />
          <Image src="/images/tone.gif" alt="tone" width={160} height={120} /> */}
          <p>
            I combine strategy, creative direction, digital design and web
            development to create aesthetic websites as nurturing gardens for
            curious souls to explore different facets of the human • experience.
          </p>
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
        </div>
      </main>
      <footer>
        <button>
          <div className="h-[0.625rem] w-[0.625rem] rounded-full bg-gray-6" />
          <span>Dark</span>
        </button>
        <span>Social</span>
        <a href="https://read.cv/mtths">Read.cv ↗</a>
        <span>
          © 2024 <br /> All rights reserved.
        </span>
      </footer>
    </>
  )
}
