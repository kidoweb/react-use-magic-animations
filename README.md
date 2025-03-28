# React Use Magic Animations

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-use-magic-animations.svg?style=flat)](https://www.npmjs.com/package/react-use-magic-animations)
[![npm downloads](https://img.shields.io/npm/dm/react-use-magic-animations.svg?style=flat)](https://www.npmjs.com/package/react-use-magic-animations)
[![License](https://img.shields.io/npm/l/react-use-magic-animations.svg?style=flat)](https://github.com/kidoweb/react-use-magic-animations/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=flat)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-blue.svg?style=flat)](https://reactjs.org/)

A collection of professional React hooks for creating smooth and performant animations using Framer Motion.

[English](#react-use-magic-animations) | [Русский](#react-use-magic-animations-1)

</div>

## ✨ Features

- 🎨 Smooth and professional animations
- 🚀 Optimized performance with React hooks
- 📱 Responsive animations for all devices
- 🎯 Full TypeScript support
- 🔧 Highly customizable
- 📦 Minimal dependencies (only React and Framer Motion)

## 📦 Installation

```bash
npm install react-use-magic-animations
# or
yarn add react-use-magic-animations
```

## 🚀 Quick Start

```tsx
import { useFade, useSpring } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function App() {
  const { fadeIn, fadeOut } = useFade();
  const { spring, controls } = useSpring();

  return (
    <motion.div
      animate={controls}
      style={{ scale: spring }}
      onClick={() => spring(1.5)}
    >
      <button onClick={fadeIn}>Показать</button>
      <button onClick={fadeOut}>Скрыть</button>
    </motion.div>
  );
}
```

## 📚 Available Hooks

### useFade

A hook for creating fade in/out animations with various effects.

#### Usage Examples

##### Basic Usage
```tsx
const { variants, controls } = useFade();

return (
  <motion.div
    initial="hidden"
    animate={controls}
    exit="exit"
    variants={variants}
  >
    Content
  </motion.div>
);
```

##### Directional Animation
```tsx
const { variants, controls } = useFade({
  direction: 'up',
  distance: 50,
});

return (
  <motion.div
    initial="hidden"
    animate={controls}
    exit="exit"
    variants={variants}
  >
    Content
  </motion.div>
);
```

##### Stagger Effect
```tsx
const { variants, controls } = useFade({
  stagger: {
    each: 0.1,
    from: 0,
  },
});

return (
  <motion.div
    initial="hidden"
    animate={controls}
    exit="exit"
    variants={variants}
  >
    {items.map((item) => (
      <motion.div key={item.id} variants={variants}>
        {item.content}
      </motion.div>
    ))}
  </motion.div>
);
```

##### Responsive Animation
```tsx
const { variants, controls } = useFade({
  responsive: {
    mobile: { duration: 0.2 },
    tablet: { duration: 0.3 },
    desktop: { duration: 0.4 },
  },
});

return (
  <motion.div
    initial="hidden"
    animate={controls}
    exit="exit"
    variants={variants}
  >
    Content
  </motion.div>
);
```

#### Hook Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| duration | number | 0.5 | Animation duration in seconds |
| delay | number | 0 | Delay before animation starts |
| initialOpacity | number | 0 | Initial opacity value |
| finalOpacity | number | 1 | Final opacity value |
| ease | string | 'easeInOut' | Animation easing function |
| direction | 'up' \| 'down' \| 'left' \| 'right' | - | Animation direction |
| distance | number | 50 | Distance for directional animation |
| stagger | number | 0.1 | Delay between child animations |
| responsive | object | - | Responsive animation settings |
| variants | object | - | Custom animation variants |
| fadeIn | object | - | Fade in animation settings |
| fadeOut | object | - | Fade out animation settings |

#### Return Values

The hook returns an object with the following properties:

- `variants`: Animation variants for Framer Motion
- `controls`: Animation controls for manual management
- `fadeIn`: Function to trigger fade in animation
- `fadeOut`: Function to trigger fade out animation
- `stop`: Function to stop current animation

### useSpring

A hook for creating spring animations with customizable parameters.

#### Usage Examples

```tsx
const { spring, controls, stop } = useSpring({
  stiffness: 100,
  damping: 10,
  mass: 1
});

return (
  <motion.div animate={controls}>
    <button onClick={() => spring(1.5)}>Увеличить</button>
    <button onClick={() => spring(0.5)}>Уменьшить</button>
    <button onClick={stop}>Остановить</button>
  </motion.div>
);
```

#### Hook Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| stiffness | number | 100 | Spring stiffness |
| damping | number | 10 | Damping |
| mass | number | 1 | Mass |
| velocity | number | 0 | Initial velocity |
| restDelta | number | 0.01 | Rest stop distance threshold |
| restSpeed | number | 0.01 | Rest stop speed threshold |
| bounce | number | 0.25 | Bounce coefficient |
| tension | number | 300 | Tension |
| friction | number | 30 | Friction |
| velocityThreshold | number | 0.001 | Velocity threshold |
| distanceThreshold | number | 0.001 | Distance threshold |

#### Return Values

The hook returns an object with the following properties:

- `spring`: Function to animate to a target value
- `stop`: Function to stop the animation
- `controls`: Animation controls for manual management
- `value`: Current animation value

## 🤝 Contributing

We welcome your contributions! Please feel free to submit a Pull Request.

## 📝 License

MIT

## 📞 Support

If you have any questions or issues, please create an issue in the project repository.

---

# React Use Magic Animations

<div align="center">

[![npm version](https://img.shields.io/npm/v/react-use-magic-animations.svg?style=flat)](https://www.npmjs.com/package/react-use-magic-animations)
[![npm downloads](https://img.shields.io/npm/dm/react-use-magic-animations.svg?style=flat)](https://www.npmjs.com/package/react-use-magic-animations)
[![License](https://img.shields.io/npm/l/react-use-magic-animations.svg?style=flat)](https://github.com/kidoweb/react-use-magic-animations/blob/main/LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue.svg?style=flat)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-19.0-blue.svg?style=flat)](https://reactjs.org/)

Коллекция профессиональных React хуков для создания плавных и производительных анимаций с использованием Framer Motion.

[English](#react-use-magic-animations) | [Русский](#react-use-magic-animations-1)

</div>

## ✨ Возможности

- 🎨 Плавные и профессиональные анимации
- 🚀 Оптимизированная производительность с React хуками
- 📱 Адаптивные анимации для всех устройств
- 🎯 Полная поддержка TypeScript
- 🔧 Высокая настраиваемость
- 📦 Минимум зависимостей (только React и Framer Motion)

## 📦 Установка

```bash
npm install react-use-magic-animations
# или
yarn add react-use-magic-animations
```

## 🚀 Быстрый старт

```tsx
import { useFade, useSpring } from 'react-use-magic-animations';

function App() {
  const { fadeIn, fadeOut } = useFade();
  const { spring, controls } = useSpring();

  return (
    <motion.div
      animate={controls}
      style={{ scale: spring }}
      onClick={() => spring(1.5)}
    >
      <button onClick={fadeIn}>Показать</button>
      <button onClick={fadeOut}>Скрыть</button>
    </motion.div>
  );
}
```

## 📚 Доступные хуки

### useFade

Хук для создания плавных анимаций появления/исчезновения.

```tsx
const { fadeIn, fadeOut, controls } = useFade({
  duration: 0.5,
  opacity: 0.5,
  delay: 0.2
});

return (
  <motion.div animate={controls}>
    <button onClick={fadeIn}>Показать</button>
    <button onClick={fadeOut}>Скрыть</button>
  </motion.div>
);
```

#### Опции

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| duration | number | 0.5 | Длительность анимации в секундах |
| opacity | number | 0.5 | Значение прозрачности (0-1) |
| delay | number | 0 | Задержка перед началом анимации |

#### Возвращаемые значения

| Параметр | Тип | Описание |
|----------|-----|-----------|
| fadeIn | () => void | Функция для анимации появления |
| fadeOut | () => void | Функция для анимации исчезновения |
| controls | AnimationControls | Контролы анимации Framer Motion |

### useSpring

Хук для создания пружинных анимаций с настраиваемыми параметрами.

```tsx
const { spring, controls, stop } = useSpring({
  stiffness: 100,
  damping: 10,
  mass: 1
});

return (
  <motion.div animate={controls}>
    <button onClick={() => spring(1.5)}>Увеличить</button>
    <button onClick={() => spring(0.5)}>Уменьшить</button>
    <button onClick={stop}>Остановить</button>
  </motion.div>
);
```

#### Опции

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| stiffness | number | 100 | Жесткость пружины |
| damping | number | 10 | Затухание |
| mass | number | 1 | Масса |
| velocity | number | 0 | Начальная скорость |
| restDelta | number | 0.01 | Порог останова по расстоянию |
| restSpeed | number | 0.01 | Порог останова по скорости |
| bounce | number | 0.25 | Коэффициент отскока |
| tension | number | 300 | Натяжение |
| friction | number | 30 | Трение |
| velocityThreshold | number | 0.001 | Порог скорости |
| distanceThreshold | number | 0.001 | Порог расстояния |

#### Возвращаемые значения

| Параметр | Тип | Описание |
|----------|-----|-----------|
| spring | (target: number) => Promise<void> | Функция для анимации к целевому значению |
| stop | () => void | Функция для остановки анимации |
| controls | AnimationControls | Контролы анимации Framer Motion |
| value | number | Текущее значение анимации |

## 🤝 Вклад в проект

Мы приветствуем ваш вклад! Пожалуйста, создавайте pull request'ы и описывайте предлагаемые изменения.

## 📝 Лицензия

MIT

## 💪 Поддержка

Если у вас есть вопросы или проблемы, пожалуйста, создавайте issue в репозитории. 