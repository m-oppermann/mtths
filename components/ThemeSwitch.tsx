"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false)
  const { resolvedTheme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
    localStorage.clear()
  }, [resolvedTheme])

  if (!mounted) {
    return null
  }

  return (
    <button
      onClick={() => {
        setTheme(resolvedTheme === "light" ? "dark" : "light")
      }}
      className="interactive pointer-events-auto flex h-max w-max items-center gap-[0.375rem]"
    >
      <div className="mt-[0.125rem] h-[0.625rem] w-[0.625rem] rounded-full bg-gray-6 dark:bg-grayDark-6" />
      {resolvedTheme === "light" ? "Light" : "Dark"}
    </button>
  )
}
