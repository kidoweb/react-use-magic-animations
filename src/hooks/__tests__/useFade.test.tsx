import { renderHook } from '@testing-library/react';
import { useFade } from '../useFade';

describe('useFade', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useFade());
    expect(result.current.variants).toBeDefined();
    expect(result.current.controls).toBeDefined();
    expect(result.current.variants?.hidden?.opacity).toBe(0);
    expect(result.current.variants?.visible?.opacity).toBe(1);
  });

  it('should initialize with custom values', () => {
    const { result } = renderHook(() =>
      useFade({
        initialOpacity: 0.5,
        finalOpacity: 0.8,
      })
    );
    expect(result.current.variants?.hidden?.opacity).toBe(0.5);
    expect(result.current.variants?.visible?.opacity).toBe(0.8);
  });

  it('should handle fade in animation', () => {
    const { result } = renderHook(() => useFade());
    expect(result.current.variants?.visible?.opacity).toBe(1);
  });

  it('should handle fade out animation', () => {
    const { result } = renderHook(() => useFade());
    expect(result.current.variants?.hidden?.opacity).toBe(0);
  });

  it('should stop animation', () => {
    const { result } = renderHook(() => useFade());
    expect(result.current.controls).toBeDefined();
  });

  it('should handle custom variants', () => {
    const { result } = renderHook(() =>
      useFade({
        variants: {
          hidden: { opacity: 0.2 },
          visible: { opacity: 0.9 },
          exit: { opacity: 0.1 },
        },
      })
    );
    expect(result.current.variants?.hidden?.opacity).toBe(0.2);
    expect(result.current.variants?.visible?.opacity).toBe(0.9);
    expect(result.current.variants?.exit?.opacity).toBe(0.1);
  });

  it('should handle responsive options', () => {
    const { result } = renderHook(() =>
      useFade({
        responsive: {
          mobile: { duration: 0.2 },
          tablet: { duration: 0.3 },
          desktop: { duration: 0.4 },
        },
      })
    );
    expect(result.current.variants?.visible?.transition?.duration).toBeDefined();
  });

  it('should handle stagger effects', () => {
    const { result } = renderHook(() =>
      useFade({
        stagger: {
          each: 0.1,
          from: 3,
        },
      })
    );
    expect(result.current.variants?.visible?.transition?.stagger).toBe(0.1);
    expect(result.current.variants?.visible?.transition?.staggerChildren).toBe(3);
  });

  it('should handle direction animations', () => {
    const { result } = renderHook(() =>
      useFade({
        direction: 'up',
        distance: 50,
      })
    );
    expect(result.current.variants?.hidden?.y).toBe(50);
    expect(result.current.variants?.exit?.y).toBe(50);
  });

  it('should handle different settings for fade in and out', () => {
    const { result } = renderHook(() =>
      useFade({
        initialOpacity: 0.8,
        finalOpacity: 0.8,
        fadeIn: {
          duration: 0.3,
          delay: 0.1,
          ease: 'easeOut',
        },
        fadeOut: {
          duration: 0.7,
          delay: 0.3,
          ease: 'easeIn',
          opacity: 0.2,
        },
      })
    );
    expect(result.current.variants?.visible?.transition?.duration).toBe(0.3);
    expect(result.current.variants?.visible?.transition?.delay).toBe(0.1);
    expect(result.current.variants?.visible?.transition?.ease).toBe('easeOut');
    expect(result.current.variants?.visible?.opacity).toBe(0.8);

    expect(result.current.variants?.exit?.transition?.duration).toBe(0.7);
    expect(result.current.variants?.exit?.transition?.delay).toBe(0.3);
    expect(result.current.variants?.exit?.transition?.ease).toBe('easeIn');
    expect(result.current.variants?.exit?.opacity).toBe(0.2);
  });

  it('should throw error for invalid options', () => {
    expect(() =>
      renderHook(() =>
        useFade({
          initialOpacity: -1,
        })
      )
    ).toThrow('Initial opacity must be between 0 and 1');

    expect(() =>
      renderHook(() =>
        useFade({
          finalOpacity: 2,
        })
      )
    ).toThrow('Final opacity must be between 0 and 1');
  });
}); 