import { renderHook, act } from '@testing-library/react-hooks';
import { useSpring } from '../useSpring';

describe('useSpring', () => {
  it('should initialize with default values', () => {
    const { result } = renderHook(() => useSpring());
    expect(result.current.controls).toBeDefined();
    expect(result.current.spring).toBeDefined();
    expect(result.current.stop).toBeDefined();
    expect(result.current.value).toBe(0);
  });

  it('should initialize with custom values', () => {
    const { result } = renderHook(() =>
      useSpring({
        stiffness: 200,
        damping: 20,
        mass: 2,
        from: 0.5,
        to: 1.5
      })
    );
    expect(result.current.controls).toBeDefined();
    expect(result.current.value).toBe(0.5);
  });

  it('should handle spring animation', async () => {
    const { result } = renderHook(() => useSpring());
    await act(async () => {
      await result.current.spring(1.5);
    });
    expect(result.current.controls).toBeDefined();
  });

  it('should stop animation', () => {
    const { result } = renderHook(() => useSpring());
    act(() => {
      result.current.stop();
    });
    expect(result.current.controls).toBeDefined();
  });

  it('should handle custom spring configuration', () => {
    const { result } = renderHook(() =>
      useSpring({
        stiffness: 300,
        damping: 30,
        mass: 3,
        bounce: 0.5,
        tension: 200,
        friction: 30
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle velocity and thresholds', () => {
    const { result } = renderHook(() =>
      useSpring({
        velocity: 0.5,
        velocityThreshold: 0.01,
        distanceThreshold: 0.01
      })
    );
    expect(result.current.controls).toBeDefined();
  });

  it('should handle rest conditions', () => {
    const { result } = renderHook(() =>
      useSpring({
        restDelta: 0.01,
        restSpeed: 0.01
      })
    );
    expect(result.current.controls).toBeDefined();
  });
}); 