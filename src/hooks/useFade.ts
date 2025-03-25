import { AnimationControls, useAnimation } from 'framer-motion';
import { useCallback, useEffect } from 'react';

export interface FadeOptions {
  duration?: number;
  delay?: number;
  ease?: string;
  opacity?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  distance?: number;
  stagger?: number;
  responsive?: {
    mobile?: Partial<FadeOptions>;
    tablet?: Partial<FadeOptions>;
    desktop?: Partial<FadeOptions>;
  };
  customVariants?: {
    hidden?: Record<string, any>;
    visible?: Record<string, any>;
    exit?: Record<string, any>;
  };
  fadeIn?: Partial<FadeOptions>;
  fadeOut?: Partial<FadeOptions>;
}

export interface UseFadeResult {
  controls: AnimationControls;
  fadeIn: () => Promise<void>;
  fadeOut: () => Promise<void>;
  stop: () => void;
}

export function useFade(options: FadeOptions = {}): UseFadeResult {
  const controls = useAnimation();

  const {
    duration = 0.5,
    delay = 0,
    ease = 'easeInOut',
    opacity = 0,
    direction,
    distance = 50,
    stagger = 0.1,
    customVariants,
    fadeIn: fadeInOptions,
    fadeOut: fadeOutOptions
  } = options;

  useEffect(() => {
    if (duration < 0) {
      throw new Error('Duration must be a positive number');
    }
    if (opacity < 0 || opacity > 1) {
      throw new Error('Opacity must be between 0 and 1');
    }
  }, [duration, opacity]);

  const getDirectionalTransform = useCallback(() => {
    if (!direction) return {};
    const transforms: Record<string, number> = {};
    switch (direction) {
      case 'up':
        transforms.y = distance;
        break;
      case 'down':
        transforms.y = -distance;
        break;
      case 'left':
        transforms.x = distance;
        break;
      case 'right':
        transforms.x = -distance;
        break;
    }
    return transforms;
  }, [direction, distance]);

  const fadeIn = useCallback(async () => {
    const fadeInDuration = fadeInOptions?.duration ?? duration;
    const fadeInDelay = fadeInOptions?.delay ?? delay;
    const fadeInEase = fadeInOptions?.ease ?? ease;

    await controls.start({
      opacity: 1,
      ...getDirectionalTransform(),
      transition: {
        duration: fadeInDuration,
        delay: fadeInDelay,
        ease: fadeInEase,
        stagger: stagger
      }
    });
  }, [controls, duration, delay, ease, stagger, fadeInOptions, getDirectionalTransform]);

  const fadeOut = useCallback(async () => {
    const fadeOutDuration = fadeOutOptions?.duration ?? duration;
    const fadeOutDelay = fadeOutOptions?.delay ?? delay;
    const fadeOutEase = fadeOutOptions?.ease ?? ease;

    await controls.start({
      opacity: opacity,
      ...getDirectionalTransform(),
      transition: {
        duration: fadeOutDuration,
        delay: fadeOutDelay,
        ease: fadeOutEase,
        stagger: stagger
      }
    });
  }, [controls, duration, delay, ease, opacity, stagger, fadeOutOptions, getDirectionalTransform]);

  const stop = useCallback(() => {
    controls.stop();
  }, [controls]);

  return { controls, fadeIn, fadeOut, stop };
} 