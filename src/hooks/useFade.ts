import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Интерфейс для параметров анимации появления/исчезновения
interface FadeOptions {
  duration?: number;    // Длительность анимации в секундах
  delay?: number;       // Задержка перед началом анимации
  initialOpacity?: number;  // Начальное значение прозрачности
  finalOpacity?: number;    // Конечное значение прозрачности
}

export const useFade = (options: FadeOptions = {}) => {
  const {
    duration = 0.5,     // Значение по умолчанию для длительности
    delay = 0,          // Значение по умолчанию для задержки
    initialOpacity = 0, // Значение по умолчанию для начальной прозрачности
    finalOpacity = 1,   // Значение по умолчанию для конечной прозрачности
  } = options;

  const controls = useAnimation();

  // Функция для анимации появления
  const fadeIn = async () => {
    await controls.start({
      opacity: finalOpacity,
      transition: {
        duration,
        delay,
        ease: 'easeInOut', // Плавное ускорение и замедление
      },
    });
  };

  // Функция для анимации исчезновения
  const fadeOut = async () => {
    await controls.start({
      opacity: initialOpacity,
      transition: {
        duration,
        delay,
        ease: 'easeInOut', // Плавное ускорение и замедление
      },
    });
  };

  // Установка начального состояния при монтировании компонента
  useEffect(() => {
    controls.set({ opacity: initialOpacity });
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