import type { MutableRefObject } from 'react'
import { useEffect, useRef, useState } from 'react'

export function useIsInViewport(): [boolean | null, MutableRefObject<null>] {
  const [isInViewport, setIsInViewport] = useState<boolean | null>(null)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsInViewport(entry.isIntersecting)
    })

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => {
      observer.disconnect()
    }
  }, [ref])

  return [isInViewport, ref]
}
