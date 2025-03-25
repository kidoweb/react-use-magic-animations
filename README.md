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
import { useFade } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const { variants, controls } = useFade({
    initialOpacity: 0,
    finalOpacity: 1,
    fadeIn: {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeOut',
    },
    fadeOut: {
      duration: 0.7,
      delay: 0.3,
      ease: 'easeIn',
      opacity: 0.2,
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
};
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
import { useFade } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

const MyComponent = () => {
  const { variants, controls } = useFade({
    initialOpacity: 0,
    finalOpacity: 1,
    fadeIn: {
      duration: 0.3,
      delay: 0.1,
      ease: 'easeOut',
    },
    fadeOut: {
      duration: 0.7,
      delay: 0.3,
      ease: 'easeIn',
      opacity: 0.2,
    },
  });

  return (
    <motion.div
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
    >
      Контент
    </motion.div>
  );
};
```

## 📚 Доступные хуки

### useFade

Хук для создания анимаций появления/исчезновения с различными эффектами.

#### Примеры использования

##### Базовое использование
```tsx
const { variants, controls } = useFade();

return (
  <motion.div
    initial="hidden"
    animate={controls}
    exit="exit"
    variants={variants}
  >
    Контент
  </motion.div>
);
```

##### Анимация с направлением
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
    Контент
  </motion.div>
);
```

##### Анимация с эффектом stagger
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

##### Адаптивная анимация
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
    Контент
  </motion.div>
);
```

#### Опции хука

| Опция | Тип | По умолчанию | Описание |
|--------|------|---------|-------------|
| duration | number | 0.5 | Длительность анимации в секундах |
| delay | number | 0 | Задержка перед началом анимации |
| initialOpacity | number | 0 | Начальное значение прозрачности |
| finalOpacity | number | 1 | Конечное значение прозрачности |
| ease | string | 'easeInOut' | Функция плавности анимации |
| direction | 'up' \| 'down' \| 'left' \| 'right' | - | Направление анимации |
| distance | number | 50 | Расстояние для анимации по направлению |
| stagger | number | 0.1 | Задержка между анимациями дочерних элементов |
| responsive | object | - | Адаптивные настройки анимации |
| variants | object | - | Кастомные варианты анимации |
| fadeIn | object | - | Настройки для анимации появления |
| fadeOut | object | - | Настройки для анимации исчезновения |

#### Возвращаемые значения

Хук возвращает объект со следующими свойствами:

- `variants`: Варианты анимации для Framer Motion
- `controls`: Контролы анимации для ручного управления
- `fadeIn`: Функция для запуска анимации появления
- `fadeOut`: Функция для запуска анимации исчезновения
- `stop`: Функция для остановки текущей анимации

## 🤝 Участие в разработке

Мы приветствуем ваш вклад! Пожалуйста, не стесняйтесь отправлять Pull Request.

## 📝 Лицензия

MIT

## 📞 Поддержка

Если у вас возникли вопросы или проблемы, пожалуйста, создайте issue в репозитории проекта. 