import { renderHook, act } from '@testing-library/react-hooks';
import { useFade } from '../useFade';

describe('useFade', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useFade());
    expect(result.current.controls).toBeDefined();
    expect(result.current.fadeIn).toBeDefined();
    expect(result.current.fadeOut).toBeDefined();
    expect(result.current.stop).toBeDefined();
  });

  it('should initialize with custom values', () => {
    const { result } = renderHook(() =>
      useFade({
        duration: 0.8,
        delay: 0.2,
        ease: 'easeInOut',
        opacity: 0.5
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle fade in animation', async () => {
    const { result } = renderHook(() => useFade());
    await act(async () => {
      await result.current.fadeIn();
    });
    expect(result.current.controls).toBeDefined();
  });

  it('should handle fade out animation', async () => {
    const { result } = renderHook(() => useFade());
    await act(async () => {
      await result.current.fadeOut();
    });
    expect(result.current.controls).toBeDefined();
  });

  it('should stop animation', () => {
    const { result } = renderHook(() => useFade());
    act(() => {
      result.current.stop();
    });
    expect(result.current.controls).toBeDefined();
  });

  it('should handle custom variants', () => {
    const { result } = renderHook(() =>
      useFade({
        customVariants: {
          hidden: { opacity: 0.2 },
          visible: { opacity: 0.9 },
          exit: { opacity: 0.1 }
        }
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle responsive options', () => {
    const { result } = renderHook(() =>
      useFade({
        responsive: {
          mobile: { duration: 0.3 },
          tablet: { duration: 0.5 },
          desktop: { duration: 0.7 }
        }
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle stagger effects', () => {
    const { result } = renderHook(() =>
      useFade({
        stagger: 0.1
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle direction animations', () => {
    const { result } = renderHook(() =>
      useFade({
        direction: 'up',
        distance: 50
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle different settings for fade in and out', () => {
    const { result } = renderHook(() =>
      useFade({
        fadeIn: {
          duration: 0.3,
          delay: 0.1,
          ease: 'easeOut'
        },
        fadeOut: {
          duration: 0.7,
          delay: 0.3,
          ease: 'easeIn',
          opacity: 0.2
        }
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should throw error for invalid options', () => {
    expect(() => {
      const { result } = renderHook(() =>
        useFade({
          duration: -1
        })
      );
      result.current.fadeIn();
    }).toThrow('Duration must be a positive number');

    expect(() => {
      const { result } = renderHook(() =>
        useFade({
          opacity: 2
        })
      );
      result.current.fadeIn();
    }).toThrow('Opacity must be between 0 and 1');
  });
}); 