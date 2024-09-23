interface carouselItemType {
  image: {
    src: string
    alt: string
  }
  description: {
    name: string
    link: string
    text: string
  }
}

export const carouselItems: carouselItemType[] = [
  {
    image: {
      src: "/images/sky.jpg",
      alt: "Photo of blue sky with clouds and the moon",
    },
    description: {
      name: "I",
      link: "",
      text: "combine strategy, creative direction, digital design and web development to create aesthetic websites as nurturing gardens for curious souls to explore different facets of the human • experience.",
    },
  },
  {
    image: {
      src: "/images/t-n.gif",
      alt: "Animated preview of the t-n project",
    },
    description: {
      name: "tranquillum naturae",
      link: "https://tranquillum-naturae.com",
      text: "displays a collection of captured moments and contemplative thoughts on the innate mystery of nature. Intended as a reminder to cultivate a sense of wonder for all of her expressions.",
    },
  },
  {
    image: {
      src: "/images/tone.gif",
      alt: "Animated preview of the tone project",
    },
    description: {
      name: "t-o-n-e",
      link: "https://t-o-n-e.com",
      text: "explores natural colour schemes of beautiful places on earth through photography to inspire a unique palette rooted in nature.",
    },
  },
]
