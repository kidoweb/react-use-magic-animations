import { useAnimation } from 'framer-motion';
import { useEffect, useCallback } from 'react';

// Интерфейс для параметров анимации появления/исчезновения
interface FadeOptions {
  duration?: number;    // Длительность анимации в секундах
  delay?: number;       // Задержка перед началом анимации
  initialOpacity?: number;  // Начальное значение прозрачности
  finalOpacity?: number;    // Конечное значение прозрачности
}

// Валидация параметров
const validateOptions = (options: FadeOptions): void => {
  if (options.duration !== undefined && options.duration < 0) {
    throw new Error('Duration must be a positive number');
  }
  if (options.delay !== undefined && options.delay < 0) {
    throw new Error('Delay must be a positive number');
  }
  if (options.initialOpacity !== undefined && (options.initialOpacity < 0 || options.initialOpacity > 1)) {
    throw new Error('Initial opacity must be between 0 and 1');
  }
  if (options.finalOpacity !== undefined && (options.finalOpacity < 0 || options.finalOpacity > 1)) {
    throw new Error('Final opacity must be between 0 and 1');
  }
};

export const useFade = (options: FadeOptions = {}) => {
  // Валидация параметров при инициализации
  validateOptions(options);

  const {
    duration = 0.5,     // Значение по умолчанию для длительности
    delay = 0,          // Значение по умолчанию для задержки
    initialOpacity = 0, // Значение по умолчанию для начальной прозрачности
    finalOpacity = 1,   // Значение по умолчанию для конечной прозрачности
  } = options;

  const controls = useAnimation();

  // Оптимизированные функции анимации с useCallback
  const fadeIn = useCallback(async () => {
    try {
      await controls.start({
        opacity: finalOpacity,
        transition: {
          duration,
          delay,
          ease: 'easeInOut', // Плавное ускорение и замедление
        },
      });
    } catch (error) {
      console.error('Error during fadeIn animation:', error);
    }
  }, [controls, finalOpacity, duration, delay]);

  const fadeOut = useCallback(async () => {
    try {
      await controls.start({
        opacity: initialOpacity,
        transition: {
          duration,
          delay,
          ease: 'easeInOut', // Плавное ускорение и замедление
        },
      });
    } catch (error) {
      console.error('Error during fadeOut animation:', error);
    }
  }, [controls, initialOpacity, duration, delay]);

  // Установка начального состояния и очистка
  useEffect(() => {
    controls.set({ opacity: initialOpacity });

    // Очистка при размонтировании
    return () => {
      controls.stop();
    };
  }, [controls, initialOpacity]);

  return {
    controls,    // Контроллеры анимации для framer-motion
    fadeIn,      // Функция для анимации появления
    fadeOut,     // Функция для анимации исчезновения
    style: {     // Начальные стили
      opacity: initialOpacity,
    },
  };
}; 