# React Use Magic Animations

Набор простых в использовании React хуков для профессиональных анимаций, основанных на популярных библиотеках анимаций, таких как framer-motion и GSAP.

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/YOUR_USERNAME/react-use-magic-animations/actions/workflows/ci.yml/badge.svg)](https://github.com/YOUR_USERNAME/react-use-magic-animations/actions/workflows/ci.yml)

## Возможности

- 🎨 Простые в использовании хуки для анимаций
- ⚡ Построено на основе framer-motion
- 📦 Нет зависимостей (кроме peer dependencies)
- 🔧 Полностью типизировано с TypeScript
- 🎯 Простой и интуитивный API

## Установка

```bash
npm install react-use-magic-animations
# или
yarn add react-use-magic-animations
```

## Использование

### Анимация появления/исчезновения

```tsx
import { useFade } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function FadeComponent() {
  const { controls, fadeIn, fadeOut } = useFade({
    duration: 0.5, // длительность анимации в секундах
    delay: 0.2,    // задержка перед началом анимации
  });

  return (
    <motion.div animate={controls}>
      <button onClick={fadeIn}>Появиться</button>
      <button onClick={fadeOut}>Исчезнуть</button>
    </motion.div>
  );
}
```

### Анимация скольжения

```tsx
import { useSlide } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function SlideComponent() {
  const { controls, slideIn, slideOut, variants } = useSlide({
    direction: 'left', // направление: left, right, up, down
    distance: 100,     // расстояние скольжения в пикселях
    duration: 0.5,     // длительность анимации
  });

  return (
    <motion.div
      initial="initial"
      animate={controls}
      variants={variants}
    >
      <button onClick={slideIn}>Скользить внутрь</button>
      <button onClick={slideOut}>Скользить наружу</button>
    </motion.div>
  );
}
```

### Анимация масштабирования

```tsx
import { useScale } from 'react-use-magic-animations';
import { motion } from 'framer-motion';

function ScaleComponent() {
  const { controls, scaleIn, scaleOut } = useScale({
    duration: 0.5,      // длительность анимации
    initialScale: 0.5,  // начальный масштаб
  });

  return (
    <motion.div animate={controls}>
      <button onClick={scaleIn}>Увеличить</button>
      <button onClick={scaleOut}>Уменьшить</button>
    </motion.div>
  );
}
```

## Доступные хуки

### useFade

Предоставляет анимации появления и исчезновения.

Параметры:
- `duration`: Длительность анимации в секундах (по умолчанию: 0.5)
- `delay`: Задержка перед началом анимации в секундах (по умолчанию: 0)
- `initialOpacity`: Начальное значение прозрачности (по умолчанию: 0)
- `finalOpacity`: Конечное значение прозрачности (по умолчанию: 1)

### useSlide

Предоставляет анимации скольжения в любом направлении.

Параметры:
- `duration`: Длительность анимации в секундах (по умолчанию: 0.5)
- `delay`: Задержка перед началом анимации в секундах (по умолчанию: 0)
- `direction`: Направление скольжения ('left', 'right', 'up', 'down') (по умолчанию: 'left')
- `distance`: Расстояние скольжения в пикселях (по умолчанию: 100)
- `initialOffset`: Начальное смещение (по умолчанию: 0)

### useScale

Предоставляет анимации масштабирования с опциональным изменением прозрачности.

Параметры:
- `duration`: Длительность анимации в секундах (по умолчанию: 0.5)
- `delay`: Задержка перед началом анимации в секундах (по умолчанию: 0)
- `initialScale`: Начальное значение масштаба (по умолчанию: 0)
- `finalScale`: Конечное значение масштаба (по умолчанию: 1)
- `initialOpacity`: Начальное значение прозрачности (по умолчанию: 0)
- `finalOpacity`: Конечное значение прозрачности (по умолчанию: 1)

## Как внести свой вклад

Мы приветствуем ваш вклад! Пожалуйста, не стесняйтесь отправлять Pull Request.

1. Сделайте форк репозитория
2. Создайте ветку для вашей функции (`git checkout -b feature/amazing-feature`)
3. Зафиксируйте изменения (`git commit -m 'Добавлена новая функция'`)
4. Отправьте изменения в ветку (`git push origin feature/amazing-feature`)
5. Откройте Pull Request

## Разработка

```bash
# Установка зависимостей
npm install

# Сборка пакета
npm run build

# Запуск тестов
npm test

# Проверка кода линтером
npm run lint
```

## Лицензия

Этот проект распространяется под лицензией MIT - подробности в файле [LICENSE](LICENSE).

# Инициализируйте Git репозиторий
git init

# Добавьте все файлы в индекс
git add .

# Создайте первый коммит
git commit -m "Начальная версия: пакет React Use Magic Animations"

# Добавьте удаленный репозиторий (замените YOUR_USERNAME на ваше имя пользователя GitHub)
git remote add origin https://github.com/YOUR_USERNAME/react-use-magic-animations.git

# Отправьте код в репозиторий
git push -u origin main 