# React Use Magic Animations

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/kidoweb/react-use-magic-animations/actions/workflows/ci.yml/badge.svg)](https://github.com/kidoweb/react-use-magic-animations/actions/workflows/ci.yml)
[![npm version](https://img.shields.io/npm/v/react-use-magic-animations.svg)](https://www.npmjs.com/package/react-use-magic-animations)
[![npm downloads](https://img.shields.io/npm/dm/react-use-magic-animations.svg)](https://www.npmjs.com/package/react-use-magic-animations)
[![GitHub license](https://img.shields.io/github/license/kidoweb/react-use-magic-animations.svg)](https://github.com/kidoweb/react-use-magic-animations/blob/main/LICENSE)

Набор React хуков для создания красивых анимаций с использованием framer-motion.

## 📚 [Подробная документация](docs/README.md)

## Возможности

- 🎨 Простые в использовании хуки для анимаций
- ⚡ Построено на основе framer-motion
- 📦 Нет зависимостей (кроме peer dependencies)
- 🔧 Полностью типизировано с TypeScript
- 🎯 Простой и интуитивный API
- 🌟 Поддержка всех современных браузеров
- 📱 Оптимизировано для мобильных устройств

## Что нового
- Добавлен хук useFade для анимаций появления/исчезновения
- Добавлен хук useSlide для анимаций скольжения
- Добавлен хук useScale для анимаций масштабирования

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

- `useFade` - анимации появления и исчезновения
- `useSlide` - анимации скольжения в любом направлении
- `useScale` - анимации масштабирования

## Особенности

- 🎨 Простой и интуитивный API
- ⚡️ Оптимизированная производительность
- 📱 Поддержка мобильных устройств
- 🌐 Кросс-браузерная совместимость
- 📦 Легкий вес
- 🔧 Полностью настраиваемые анимации

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

## Поддержка

Если у вас возникли проблемы или есть предложения, пожалуйста, создайте issue в [GitHub](https://github.com/kidoweb/react-use-magic-animations/issues).

## Лицензия

Этот проект распространяется под лицензией MIT - подробности в файле [LICENSE](LICENSE). 