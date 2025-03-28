import React from 'react';
import { motion } from 'framer-motion';
import { useSpring } from 'react-use-magic-animations';

// Пример 1: Базовое использование
export const BasicExample = () => {
  const { spring, controls } = useSpring({
    stiffness: 100,
    damping: 10,
    mass: 1,
  });

  return (
    <motion.div animate={controls}>
      <h1>Базовый пример пружинной анимации</h1>
      <button onClick={() => spring(1.5)}>Увеличить</button>
      <button onClick={() => spring(0.5)}>Уменьшить</button>
    </motion.div>
  );
};

// Пример 2: Настраиваемая пружина
export const CustomSpringExample = () => {
  const { spring, controls } = useSpring({
    stiffness: 300,
    damping: 30,
    mass: 2,
    bounce: 0.5,
    tension: 200,
    friction: 30,
  });

  return (
    <motion.div animate={controls}>
      <h1>Настраиваемая пружинная анимация</h1>
      <button onClick={() => spring(2)}>Сильный отскок</button>
      <button onClick={() => spring(0.5)}>Мягкий отскок</button>
    </motion.div>
  );
};

// Пример 3: Анимация с порогами
export const ThresholdExample = () => {
  const { spring, controls } = useSpring({
    velocity: 0.5,
    velocityThreshold: 0.01,
    distanceThreshold: 0.01,
    restDelta: 0.01,
    restSpeed: 0.01,
  });

  return (
    <motion.div animate={controls}>
      <h1>Анимация с порогами</h1>
      <button onClick={() => spring(1.2)}>Точная анимация</button>
      <button onClick={() => spring(0.8)}>Плавная анимация</button>
    </motion.div>
  );
};

// Пример 4: Комбинированная анимация
export const CombinedExample = () => {
  const { spring, controls } = useSpring({
    stiffness: 200,
    damping: 20,
    mass: 1.5,
    bounce: 0.3,
    tension: 180,
    friction: 28,
  });

  return (
    <motion.div 
      animate={controls}
      style={{
        scale: 1,
        rotate: 0,
      }}
    >
      <h1>Комбинированная анимация</h1>
      <button onClick={() => spring(1.5)}>Увеличить и повернуть</button>
      <button onClick={() => spring(0.5)}>Уменьшить и повернуть</button>
    </motion.div>
  );
}; 