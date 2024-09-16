import clsx from "clsx"
import { EditorialNew } from "@/styles/fonts"

export default function NotFound() {
  return (
    <div className="flex h-full items-center justify-center">
      <h2 className={clsx("font-serif text-lg italic", EditorialNew.variable)}>
        404
      </h2>
    </div>
  )
}
