import React from 'react';
import { motion } from 'framer-motion';
import { useFade } from 'react-use-magic-animations';

// Пример 1: Базовое использование
export const BasicExample = () => {
  const { fadeIn, fadeOut, style } = useFade({
    duration: 0.5,
    delay: 0.2,
  });

  return (
    <motion.div style={style}>
      <h1>Базовый пример</h1>
      <button onClick={fadeIn}>Появиться</button>
      <button onClick={fadeOut}>Исчезнуть</button>
    </motion.div>
  );
};

// Пример 2: Анимация с направлением
export const DirectionExample = () => {
  const { fadeIn, fadeOut, style } = useFade({
    duration: 0.5,
    direction: 'up',
    distance: 50,
  });

  return (
    <motion.div style={style}>
      <h1>Анимация с направлением</h1>
      <button onClick={fadeIn}>Появиться сверху</button>
      <button onClick={fadeOut}>Исчезнуть вверх</button>
    </motion.div>
  );
};

// Пример 3: Анимация с stagger эффектом
export const StaggerExample = () => {
  const { fadeIn, fadeOut, style, variants } = useFade({
    duration: 0.5,
    stagger: 0.1,
    staggerChildren: 3,
  });

  return (
    <motion.div style={style} variants={variants}>
      <motion.h1 variants={variants}>Заголовок</motion.h1>
      <motion.p variants={variants}>Первый параграф</motion.p>
      <motion.p variants={variants}>Второй параграф</motion.p>
      <motion.p variants={variants}>Третий параграф</motion.p>
      <button onClick={fadeIn}>Появиться по очереди</button>
      <button onClick={fadeOut}>Исчезнуть по очереди</button>
    </motion.div>
  );
};

// Пример 4: Адаптивная анимация
export const ResponsiveExample = () => {
  const { fadeIn, fadeOut, style } = useFade({
    duration: 0.5,
    responsive: {
      mobile: {
        duration: 0.3,
        distance: 30,
      },
      tablet: {
        duration: 0.4,
        distance: 40,
      },
      desktop: {
        duration: 0.5,
        distance: 50,
      },
    },
  });

  return (
    <motion.div style={style}>
      <h1>Адаптивная анимация</h1>
      <button onClick={fadeIn}>Появиться</button>
      <button onClick={fadeOut}>Исчезнуть</button>
    </motion.div>
  );
};

// Пример 5: Кастомные варианты анимации
export const CustomVariantsExample = () => {
  const { fadeIn, fadeOut, style, variants } = useFade({
    variants: {
      hidden: {
        opacity: 0,
        scale: 0.5,
        rotate: -180,
      },
      visible: {
        opacity: 1,
        scale: 1,
        rotate: 0,
        transition: {
          duration: 0.5,
          ease: 'easeOut',
        },
      },
      exit: {
        opacity: 0,
        scale: 0.5,
        rotate: 180,
      },
    },
  });

  return (
    <motion.div style={style} variants={variants}>
      <h1>Кастомные варианты</h1>
      <button onClick={fadeIn}>Появиться с эффектом</button>
      <button onClick={fadeOut}>Исчезнуть с эффектом</button>
    </motion.div>
  );
};

// Пример 6: Анимация с разными настройками для входа и выхода
export const DifferentSettingsExample = () => {
  const { fadeIn, fadeOut, style } = useFade({
    fadeInDuration: 0.3,
    fadeInDelay: 0.1,
    fadeInEase: 'easeOut',
    fadeInOpacity: 0.8,
    fadeOutDuration: 0.7,
    fadeOutDelay: 0.3,
    fadeOutEase: 'easeIn',
    fadeOutOpacity: 0.2,
  });

  return (
    <motion.div style={style}>
      <h1>Разные настройки</h1>
      <button onClick={fadeIn}>Быстро появиться</button>
      <button onClick={fadeOut}>Медленно исчезнуть</button>
    </motion.div>
  );
}; 