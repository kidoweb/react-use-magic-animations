import { useAnimation } from 'framer-motion';
import { useCallback, useEffect } from 'react';

export interface SpringOptions {
  stiffness?: number;      // Жесткость пружины
  damping?: number;        // Затухание
  mass?: number;           // Масса
  velocity?: number;       // Начальная скорость
  restDelta?: number;      // Минимальное изменение для остановки
  restSpeed?: number;      // Минимальная скорость для остановки
  duration?: number;       // Максимальная длительность анимации
  delay?: number;          // Задержка перед началом
  from?: number;          // Начальное значение
  to?: number;            // Конечное значение
  bounce?: number;        // Сила отскока
  tension?: number;       // Напряжение
  friction?: number;      // Трение
  velocityThreshold?: number; // Порог скорости
  distanceThreshold?: number; // Порог расстояния
}

export interface UseSpringResult {
  controls: any;
  spring: (to: number) => Promise<void>;
  stop: () => void;
  value: number;
}

export function useSpring(options: SpringOptions = {}): UseSpringResult {
  const controls = useAnimation();
  const {
    stiffness = 100,
    damping = 10,
    mass = 1,
    velocity = 0,
    restDelta = 0.001,
    restSpeed = 0.001,
    duration = 1,
    delay = 0,
    from = 0,
    to = 1,
    bounce = 0.25,
    tension = 170,
    friction = 26,
    velocityThreshold = 0.001,
    distanceThreshold = 0.001,
  } = options;

  const spring = useCallback(async (targetValue: number) => {
    await controls.start({
      scale: targetValue,
      transition: {
        type: "spring",
        stiffness,
        damping,
        mass,
        velocity,
        restDelta,
        restSpeed,
        duration,
        delay,
        bounce,
        tension,
        friction,
        velocityThreshold,
        distanceThreshold,
      }
    });
  }, [controls, stiffness, damping, mass, velocity, restDelta, restSpeed, duration, delay, bounce, tension, friction, velocityThreshold, distanceThreshold]);

  const stop = useCallback(() => {
    controls.stop();
  }, [controls]);

  useEffect(() => {
    controls.set({ scale: from });
  }, [controls, from]);

  return {
    controls,
    spring,
    stop,
    value: from
  };
} 