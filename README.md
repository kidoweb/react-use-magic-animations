# React Use Magic Animations

[English](#english) | [Русский](#russian)

## English

A collection of React hooks for creating beautiful animations with Framer Motion.

### Features

- 🎨 Smooth and professional animations
- 🚀 Optimized performance with React hooks
- 📱 Responsive animations for all devices
- 🎯 TypeScript support
- 🔧 Highly customizable
- 📦 Zero dependencies (except React)

### Installation

```bash
npm install react-use-magic-animations
# or
yarn add react-use-magic-animations
```

### Quick Start

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

### Available Hooks

#### useFade

The `useFade` hook provides a simple way to add fade animations to your components.

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

#### Options

The `useFade` hook accepts the following options:

- `initialOpacity` (number, default: 0): Initial opacity value
- `finalOpacity` (number, default: 1): Final opacity value
- `variants` (object): Custom animation variants
- `responsive` (object): Responsive animation settings
  - `mobile` (object): Settings for mobile devices
  - `tablet` (object): Settings for tablet devices
  - `desktop` (object): Settings for desktop devices
- `stagger` (object): Stagger animation settings
  - `each` (number): Delay between each child animation
  - `from` (number): Starting point for stagger effect
- `direction` ('up' | 'down' | 'left' | 'right'): Direction of the fade animation
- `distance` (number, default: 50): Distance to move during the animation
- `fadeIn` (object): Settings for fade in animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value
- `fadeOut` (object): Settings for fade out animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value

#### Returns

The hook returns an object with:

- `variants`: Animation variants for Framer Motion
- `controls`: Animation controls for manual animation control

### API Reference

#### useFade Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| duration | number | 0.5 | Animation duration in seconds |
| delay | number | 0 | Delay before animation starts |
| initialOpacity | number | 0 | Initial opacity value |
| finalOpacity | number | 1 | Final opacity value |
| ease | string | 'easeInOut' | Animation easing function |
| repeat | number | - | Number of animation repetitions |
| repeatDelay | number | - | Delay between repetitions |
| onComplete | () => void | - | Callback after animation completes |
| fadeInDuration | number | - | Separate duration for fade in |
| fadeOutDuration | number | - | Separate duration for fade out |
| fadeInDelay | number | - | Separate delay for fade in |
| fadeOutDelay | number | - | Separate delay for fade out |
| fadeInEase | string | - | Separate easing for fade in |
| fadeOutEase | string | - | Separate easing for fade out |
| fadeInOpacity | number | - | Separate opacity for fade in |
| fadeOutOpacity | number | - | Separate opacity for fade out |
| stagger | number | - | Delay between child animations |
| staggerChildren | number | - | Number of child elements for stagger |
| direction | 'up' \| 'down' \| 'left' \| 'right' | - | Animation direction |
| distance | number | 20 | Distance for directional animation |
| variants | object | - | Custom animation variants |
| responsive | object | - | Responsive animation options |

### Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

### License

MIT

---

## Russian

Коллекция простых в использовании React хуков для профессиональных анимаций на основе популярных библиотек анимаций.

### Возможности

- 🎨 Плавные и профессиональные анимации
- 🚀 Оптимизированная производительность с React хуками
- 📱 Адаптивные анимации для всех устройств
- 🎯 Поддержка TypeScript
- 🔧 Высокая настраиваемость
- 📦 Нет зависимостей (кроме React)

### Установка

```bash
npm install react-use-magic-animations
# или
yarn add react-use-magic-animations
```

### Быстрый старт

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

### Доступные хуки

#### useFade

Хук для создания анимаций появления/исчезновения с различными эффектами.

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

#### Options

The `useFade` hook accepts the following options:

- `initialOpacity` (number, default: 0): Initial opacity value
- `finalOpacity` (number, default: 1): Final opacity value
- `variants` (object): Custom animation variants
- `responsive` (object): Responsive animation settings
  - `mobile` (object): Settings for mobile devices
  - `tablet` (object): Settings for tablet devices
  - `desktop` (object): Settings for desktop devices
- `stagger` (object): Stagger animation settings
  - `each` (number): Delay between each child animation
  - `from` (number): Starting point for stagger effect
- `direction` ('up' | 'down' | 'left' | 'right'): Direction of the fade animation
- `distance` (number, default: 50): Distance to move during the animation
- `fadeIn` (object): Settings for fade in animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value
- `fadeOut` (object): Settings for fade out animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value

#### Returns

The hook returns an object with:

- `variants`: Animation variants for Framer Motion
- `controls`: Animation controls for manual animation control

### Справочник API

#### Опции useFade

| Опция | Тип | По умолчанию | Описание |
|--------|------|---------|-------------|
| duration | number | 0.5 | Длительность анимации в секундах |
| delay | number | 0 | Задержка перед началом анимации |
| initialOpacity | number | 0 | Начальное значение прозрачности |
| finalOpacity | number | 1 | Конечное значение прозрачности |
| ease | string | 'easeInOut' | Функция плавности анимации |
| repeat | number | - | Количество повторений анимации |
| repeatDelay | number | - | Задержка между повторениями |
| onComplete | () => void | - | Callback после завершения анимации |
| fadeInDuration | number | - | Отдельная длительность для появления |
| fadeOutDuration | number | - | Отдельная длительность для исчезновения |
| fadeInDelay | number | - | Отдельная задержка для появления |
| fadeOutDelay | number | - | Отдельная задержка для исчезновения |
| fadeInEase | string | - | Отдельная плавность для появления |
| fadeOutEase | string | - | Отдельная плавность для исчезновения |
| fadeInOpacity | number | - | Отдельная прозрачность для появления |
| fadeOutOpacity | number | - | Отдельная прозрачность для исчезновения |
| stagger | number | - | Задержка между анимациями дочерних элементов |
| staggerChildren | number | - | Количество дочерних элементов для stagger эффекта |
| direction | 'up' \| 'down' \| 'left' \| 'right' | - | Направление анимации |
| distance | number | 20 | Расстояние для анимации по направлению |
| variants | object | - | Кастомные варианты анимации |
| responsive | object | - | Адаптивные настройки анимации |

### Участие в разработке

Мы приветствуем ваш вклад! Пожалуйста, не стесняйтесь отправлять Pull Request.

### Лицензия

MIT

## Usage

### useFade

The `useFade` hook provides a simple way to add fade animations to your components.

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

#### Options

The `useFade` hook accepts the following options:

- `initialOpacity` (number, default: 0): Initial opacity value
- `finalOpacity` (number, default: 1): Final opacity value
- `variants` (object): Custom animation variants
- `responsive` (object): Responsive animation settings
  - `mobile` (object): Settings for mobile devices
  - `tablet` (object): Settings for tablet devices
  - `desktop` (object): Settings for desktop devices
- `stagger` (object): Stagger animation settings
  - `each` (number): Delay between each child animation
  - `from` (number): Starting point for stagger effect
- `direction` ('up' | 'down' | 'left' | 'right'): Direction of the fade animation
- `distance` (number, default: 50): Distance to move during the animation
- `fadeIn` (object): Settings for fade in animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value
- `fadeOut` (object): Settings for fade out animation
  - `duration` (number): Animation duration in seconds
  - `delay` (number): Delay before animation starts
  - `ease` (string): Easing function
  - `opacity` (number): Target opacity value

#### Returns

The hook returns an object with:

- `variants`: Animation variants for Framer Motion
- `controls`: Animation controls for manual animation control

## Examples

### Basic Fade

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

### Directional Fade

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

### Staggered Children

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

### Responsive Animation

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

### Custom Variants

```tsx
const { variants, controls } = useFade({
  variants: {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
    exit: {
      opacity: 0,
      y: -100,
    },
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

### Manual Control

```tsx
const { variants, controls } = useFade();

const handleFadeIn = () => {
  controls.start('visible');
};

const handleFadeOut = () => {
  controls.start('hidden');
};

return (
  <>
    <motion.div
      initial="hidden"
      animate={controls}
      exit="exit"
      variants={variants}
    >
      Content
    </motion.div>
    <button onClick={handleFadeIn}>Fade In</button>
    <button onClick={handleFadeOut}>Fade Out</button>
  </>
);
```

## License

MIT 