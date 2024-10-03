import { useState } from 'react'

import type { Breakpoint } from '@/types/breakpoint'

import { useIsomorphicLayoutEffect } from '../useIsomorphicLayoutEffect/useIsomorphicLayoutEffect'

export type UseMediaQueryOptions = {
  up?: Breakpoint
  down?: Breakpoint
  between?: { min: Breakpoint; max: Breakpoint }
}

const BREAKPOINT_SIZES = {
  xs: 0,
  md: '744px',
  lg: '980px',
  xl: '1280px',
}

function getQuery({ up, down, between }: UseMediaQueryOptions): string {
  if (up) {
    return `(min-width: ${BREAKPOINT_SIZES[up]})`
  }

  if (down) {
    return `(max-width: ${BREAKPOINT_SIZES[down]})`
  }

  if (between) {
    return `(min-width: ${BREAKPOINT_SIZES[between.min]}) and (max-width: ${
      BREAKPOINT_SIZES[between.max]
    })`
  }

  throw new Error(`Please provide a media query option 'up', 'down' or 'between'`)
}

export function useMediaQuery(options: UseMediaQueryOptions): null | boolean {
  const [matches, setMatches] = useState<null | boolean>(null)
  const query = getQuery(options)

  useIsomorphicLayoutEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    // Triggered at the first client-side load and if query changes
    const handleChange = (): void => setMatches(!!mediaQueryList.matches)

    if (mediaQueryList.addEventListener && typeof mediaQueryList.addEventListener === 'function') {
      // IOS 14 and above
      mediaQueryList.addEventListener('change', handleChange)
    } else {
      mediaQueryList.addListener(handleChange)
    }

    // Call the listener function immediately to set the local state asap
    setMatches(!!mediaQueryList.matches)

    return () => {
      if (
        mediaQueryList.removeEventListener &&
        typeof mediaQueryList.removeEventListener === 'function'
      ) {
        // IOS 14 and above
        mediaQueryList.removeEventListener('change', handleChange)
      } else {
        mediaQueryList.removeListener(handleChange)
      }
    }
  }, [query])

  return matches
}
