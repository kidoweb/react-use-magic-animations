# React Use Magic Animations

Коллекция React хуков для создания профессиональных анимаций с использованием Framer Motion.

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