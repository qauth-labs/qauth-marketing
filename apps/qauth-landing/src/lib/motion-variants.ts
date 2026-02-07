import type { Variants } from 'framer-motion'

const defaultTransition = { duration: 0.5, ease: [0.25, 0.4, 0.25, 1] as const }

export const fadeInUp: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: 20 },
}

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1 },
  exit: { opacity: 0, scale: 0.95 },
}

export const staggerContainer: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
}

export const staggerContainerFast: Variants = {
  initial: {},
  animate: {
    transition: {
      staggerChildren: 0.05,
      delayChildren: 0.1,
    },
  },
}

export function getTransition(reduceMotion: boolean) {
  if (reduceMotion) {
    return { duration: 0 }
  }
  return defaultTransition
}

export function getFadeInUpVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, y: 0 },
      animate: { opacity: 1, y: 0 },
      exit: { opacity: 1, y: 0 },
    }
  }
  return fadeInUp
}

export function getScaleInVariants(reduceMotion: boolean): Variants {
  if (reduceMotion) {
    return {
      initial: { opacity: 1, scale: 1 },
      animate: { opacity: 1, scale: 1 },
      exit: { opacity: 1, scale: 1 },
    }
  }
  return scaleIn
}
