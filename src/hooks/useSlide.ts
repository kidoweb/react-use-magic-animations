import { useAnimation } from 'framer-motion';
import { useEffect } from 'react';

// Интерфейс для параметров анимации скольжения
interface SlideOptions {
  duration?: number;    // Длительность анимации в секундах
  delay?: number;       // Задержка перед началом анимации
  direction?: 'left' | 'right' | 'up' | 'down';  // Направление скольжения
  distance?: number;    // Расстояние скольжения в пикселях
  initialOffset?: number;  // Начальное смещение
}

export const useSlide = (options: SlideOptions = {}) => {
  const {
    duration = 0.5,     // Значение по умолчанию для длительности
    delay = 0,          // Значение по умолчанию для задержки
    direction = 'left', // Значение по умолчанию для направления
    distance = 100,     // Значение по умолчанию для расстояния
    initialOffset = 0,  // Значение по умолчанию для начального смещения
  } = options;

  const controls = useAnimation();

  // Функция для определения вариантов анимации
  const getSlideVariants = () => {
    // Определяем ось анимации (x для горизонтального, y для вертикального)
    const axis = direction === 'left' || direction === 'right' ? 'x' : 'y';
    // Определяем множитель направления (-1 для left/up, 1 для right/down)
    const multiplier = direction === 'left' || direction === 'up' ? -1 : 1;

    return {
      // Начальное состояние
      initial: {
        [axis]: initialOffset + distance * multiplier,
        opacity: 0,
      },
      // Состояние анимации
      animate: {
        [axis]: initialOffset,
        opacity: 1,
        transition: {
          duration,
          delay,
          ease: 'easeOut', // Плавное замедление
        },
      },
      // Состояние выхода
      exit: {
        [axis]: distance * multiplier,
        opacity: 0,
        transition: {
          duration,
          ease: 'easeIn', // Плавное ускорение
        },
      },
    };
  };

  // Функция для анимации появления
  const slideIn = async () => {
    await controls.start('animate');
  };

  // Функция для анимации исчезновения
  const slideOut = async () => {
    await controls.start('exit');
  };

  // Установка начального состояния при монтировании компонента
  useEffect(() => {
    controls.set('initial');
  }, [controls]);

  return {
    controls,    // Контроллеры анимации для framer-motion
    slideIn,     // Функция для анимации появления
    slideOut,    // Функция для анимации исчезновения
    variants: getSlideVariants(), // Варианты анимации
  };
}; 