# Prompt для Codex — Day 01 Counter

Ты работаешь в моём учебном frontend-проекте.

Твоя задача — помочь подготовить инфраструктуру урока, но не писать за меня основную JavaScript-логику.

## Контекст

Я учусь frontend-разработке и хочу сам писать код, чтобы вырасти до уровня React + TypeScript + Next.js разработчика.

Текущий урок: `Day 01: Counter — переменные и события`.

## Что нужно создать

Создай папку:

```text
day-01-counter/
```

Внутри создай файлы:

```text
index.html
style.css
script.js
README.md
```

## Что должно быть в index.html

Сверстай простой счётчик:

```text
[-1] [0] [+1] [Reset]
```

Используй БЭМ-классы:

```text
counter
counter__title
counter__body
counter__button
counter__button--minus
counter__button--plus
counter__button--reset
counter__value
```

Подключи:

```html
<link rel="stylesheet" href="style.css">
<script src="script.js" defer></script>
```

## Что должно быть в style.css

Сделай простые аккуратные стили:

- центрирование блока;
- кнопки;
- значение счётчика;
- классы:
  - `counter__value--positive`
  - `counter__value--negative`

## Что должно быть в script.js

Оставь файл почти пустым.

Добавь только комментарии-подсказки:

```js
// 1. Найти кнопки и значение счётчика
// 2. Создать переменную count
// 3. Повесить обработчики кликов
// 4. Создать функцию updateCounter
// 5. Обновлять текст и CSS-классы
```

Не пиши готовую JS-логику.

## Что должно быть в README.md

Кратко опиши:

- цель урока;
- что нужно сделать;
- что я пишу сам;
- что можно поручать Codex;
- критерий готовности;
- команду для коммита.

## Важно

Не реализуй за меня:

- querySelector;
- addEventListener;
- переменную count;
- обработчики кликов;
- функцию updateCounter;
- условия для positive/negative классов.

Я должен написать это сам.
