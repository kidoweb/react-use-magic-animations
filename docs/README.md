# React Use Magic Animations - Документация

## Содержание
- [Установка](#установка)
- [Требования](#требования)
- [Быстрый старт](#быстрый-старт)
- [Доступные хуки](#доступные-хуки)
  - [useFade](#usefade)
  - [useSlide](#useslide)
  - [useScale](#usescale)
- [Примеры использования](#примеры-использования)
- [API](#api)
- [Часто задаваемые вопросы](#часто-задаваемые-вопросы)

## Установка

```bash
npm install react-use-magic-animations
# или
yarn add react-use-magic-animations
```

## Требования

- React 16.8.0 или выше
- framer-motion 10.0.0 или выше
- TypeScript 4.0.0 или выше (опционально)

## Быстрый старт

```tsx
import { useFade } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function MyComponent() {
  const { controls, fadeIn, fadeOut } = useFade();

  return (
    <motion.div animate={controls}>
      <button onClick={fadeIn}>Появиться</button>
      <button onClick={fadeOut}>Исчезнуть</button>
    </motion.div>
  );
}
```

## Доступные хуки

### useFade

Хук для создания анимаций появления и исчезновения.

```tsx
const { controls, fadeIn, fadeOut } = useFade({
  duration: 0.5,    // длительность анимации
  delay: 0.2,       // задержка перед началом
  initialOpacity: 0, // начальная прозрачность
  finalOpacity: 1    // конечная прозрачность
});
```

### useSlide

Хук для создания анимаций скольжения в любом направлении.

```tsx
const { controls, slideIn, slideOut, variants } = useSlide({
  direction: 'left', // направление: left, right, up, down
  distance: 100,     // расстояние скольжения
  duration: 0.5,     // длительность анимации
  delay: 0.2         // задержка перед началом
});
```

### useScale

Хук для создания анимаций масштабирования.

```tsx
const { controls, scaleIn, scaleOut } = useScale({
  duration: 0.5,      // длительность анимации
  delay: 0.2,         // задержка перед началом
  initialScale: 0.5,  // начальный масштаб
  finalScale: 1       // конечный масштаб
});
```

## Примеры использования

### Анимация появления элемента

```tsx
import { useFade } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function FadeExample() {
  const { controls, fadeIn } = useFade({
    duration: 0.5,
    delay: 0.2
  });

  return (
    <motion.div animate={controls}>
      <button onClick={fadeIn}>Показать контент</button>
      <div>Этот контент появится с анимацией</div>
    </motion.div>
  );
}
```

### Анимация скольжения

```tsx
import { useSlide } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function SlideExample() {
  const { controls, slideIn, variants } = useSlide({
    direction: 'left',
    distance: 100
  });

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <button onClick={slideIn}>Скользить внутрь</button>
      <div>Этот контент появится с эффектом скольжения</div>
    </motion.div>
  );
}
```

### Анимация масштабирования

```tsx
import { useScale } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function ScaleExample() {
  const { controls, scaleIn } = useScale({
    duration: 0.5,
    initialScale: 0.5
  });

  return (
    <motion.div animate={controls}>
      <button onClick={scaleIn}>Увеличить</button>
      <div>Этот контент появится с эффектом масштабирования</div>
    </motion.div>
  );
}
```

## API

### useFade

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| duration | number | 0.5 | Длительность анимации в секундах |
| delay | number | 0 | Задержка перед началом анимации |
| initialOpacity | number | 0 | Начальное значение прозрачности |
| finalOpacity | number | 1 | Конечное значение прозрачности |

### useSlide

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| duration | number | 0.5 | Длительность анимации в секундах |
| delay | number | 0 | Задержка перед началом анимации |
| direction | 'left' \| 'right' \| 'up' \| 'down' | 'left' | Направление скольжения |
| distance | number | 100 | Расстояние скольжения в пикселях |
| initialOffset | number | 0 | Начальное смещение |

### useScale

| Параметр | Тип | По умолчанию | Описание |
|----------|-----|--------------|-----------|
| duration | number | 0.5 | Длительность анимации в секундах |
| delay | number | 0 | Задержка перед началом анимации |
| initialScale | number | 0 | Начальное значение масштаба |
| finalScale | number | 1 | Конечное значение масштаба |
| initialOpacity | number | 0 | Начальное значение прозрачности |
| finalOpacity | number | 1 | Конечное значение прозрачности |

## Часто задаваемые вопросы

### Как использовать несколько анимаций одновременно?

```tsx
function MultipleAnimations() {
  const { controls: fadeControls } = useFade();
  const { controls: slideControls } = useSlide();

  return (
    <div>
      <motion.div animate={fadeControls}>
        Элемент с анимацией появления
      </motion.div>
      <motion.div animate={slideControls}>
        Элемент с анимацией скольжения
      </motion.div>
    </div>
  );
}
```

### Как добавить задержку перед анимацией?

```tsx
const { controls } = useFade({
  delay: 0.5 // Задержка 500мс
});
```

### Как изменить длительность анимации?

```tsx
const { controls } = useSlide({
  duration: 1 // Анимация длится 1 секунду
});
``` 