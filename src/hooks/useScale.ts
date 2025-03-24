import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Интерфейс для параметров анимации масштабирования
interface ScaleOptions {
  duration?: number;    // Длительность анимации в секундах
  delay?: number;       // Задержка перед началом анимации
  initialScale?: number;  // Начальное значение масштаба
  finalScale?: number;    // Конечное значение масштаба
  initialOpacity?: number;  // Начальное значение прозрачности
  finalOpacity?: number;    // Конечное значение прозрачности
}

export const useScale = (options: ScaleOptions = {}) => {
  const {
    duration = 0.5,     // Значение по умолчанию для длительности
    delay = 0,          // Значение по умолчанию для задержки
    initialScale = 0,   // Значение по умолчанию для начального масштаба
    finalScale = 1,     // Значение по умолчанию для конечного масштаба
    initialOpacity = 0, // Значение по умолчанию для начальной прозрачности
    finalOpacity = 1,   // Значение по умолчанию для конечной прозрачности
  } = options;

  const controls = useAnimation();

  // Функция для анимации увеличения
  const scaleIn = async () => {
    await controls.start({
      scale: finalScale,
      opacity: finalOpacity,
      transition: {
        duration,
        delay,
        ease: [0.4, 0, 0.2, 1], // Кастомная кривая анимации для плавного эффекта
      },
    });
  };

  // Функция для анимации уменьшения
  const scaleOut = async () => {
    await controls.start({
      scale: initialScale,
      opacity: initialOpacity,
      transition: {
        duration,
        ease: [0.4, 0, 0.2, 1], // Кастомная кривая анимации для плавного эффекта
      },
    });
  };

  // Установка начального состояния при монтировании компонента
  useEffect(() => {
    controls.set({
      scale: initialScale,
      opacity: initialOpacity,
    });
  }, [controls, initialScale, initialOpacity]);

  return {
    controls,    // Контроллеры анимации для framer-motion
    scaleIn,     // Функция для анимации увеличения
    scaleOut,    // Функция для анимации уменьшения
    style: {     // Начальные стили
      scale: initialScale,
      opacity: initialOpacity,
    },
  };
}; 