import { createContext } from "react"

export const ItemContext = createContext<{
  currentIndex: number
}>({
  currentIndex: 0,
})