import { useAnimation, Variants } from 'framer-motion';

interface FadeTransition {
  duration?: number;
  delay?: number;
  ease?: string;
  stagger?: number;
  staggerChildren?: number;
}

interface FadeVariant {
  opacity: number;
  x?: number;
  y?: number;
  transition?: FadeTransition;
}

interface FadeVariants {
  hidden: FadeVariant;
  visible: FadeVariant;
  exit: FadeVariant;
}

interface ResponsiveOptions {
  mobile?: { duration: number };
  tablet?: { duration: number };
  desktop?: { duration: number };
}

interface StaggerOptions {
  each: number;
  from: number;
}

interface FadeSettings {
  duration?: number;
  delay?: number;
  ease?: string;
  opacity?: number;
}

interface FadeOptions {
  initialOpacity?: number;
  finalOpacity?: number;
  variants?: Partial<FadeVariants>;
  responsive?: ResponsiveOptions;
  stagger?: StaggerOptions;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  fadeIn?: FadeSettings;
  fadeOut?: FadeSettings;
}

export const useFade = (options: FadeOptions = {}) => {
  const {
    initialOpacity = 0,
    finalOpacity = 1,
    variants: customVariants,
    responsive,
    stagger,
    direction,
    distance = 50,
    fadeIn,
    fadeOut,
  } = options;

  if (initialOpacity < 0 || initialOpacity > 1) {
    throw new Error('Initial opacity must be between 0 and 1');
  }

  if (finalOpacity < 0 || finalOpacity > 1) {
    throw new Error('Final opacity must be between 0 and 1');
  }

  const getDirectionOffset = () => {
    switch (direction) {
      case 'up':
        return { y: distance };
      case 'down':
        return { y: -distance };
      case 'left':
        return { x: distance };
      case 'right':
        return { x: -distance };
      default:
        return {};
    }
  };

  const defaultVariants: FadeVariants = {
    hidden: {
      opacity: initialOpacity,
      ...getDirectionOffset(),
      transition: {
        duration: fadeOut?.duration || 0.3,
        delay: fadeOut?.delay || 0,
        ease: fadeOut?.ease || 'easeIn',
      },
    },
    visible: {
      opacity: finalOpacity,
      x: 0,
      y: 0,
      transition: {
        duration: fadeIn?.duration || 0.3,
        delay: fadeIn?.delay || 0,
        ease: fadeIn?.ease || 'easeOut',
        ...(stagger && {
          stagger: stagger.each,
          staggerChildren: stagger.from,
        }),
      },
    },
    exit: {
      opacity: fadeOut?.opacity || 0,
      ...getDirectionOffset(),
      transition: {
        duration: fadeOut?.duration || 0.3,
        delay: fadeOut?.delay || 0,
        ease: fadeOut?.ease || 'easeIn',
      },
    },
  };

  const controls = useAnimation();

  return {
    variants: customVariants || defaultVariants,
    controls,
  };
}; 