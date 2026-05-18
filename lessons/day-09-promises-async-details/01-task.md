# Day 09 — Promise в деталях, более сложный асинхронный код

## Ориентир по программе jsbasic

Тема из программы:

> Promise в деталях, более сложный асинхронный код

Для организации последовательных сетевых запросов или других асинхронных вызовов используются специальные объекты Promise. Изучаем, как с ними работать.

В этом уроке разбираем:

```text
- событийный цикл браузера
- объект Promise в деталях
- методы Promise
- цепочки Promise
- промисификация функций
- использование async/await
```

## Тема дня

```text
event loop → Promise → chain → Promise methods → promisification → async/await → async UI
```

## Цель урока

После урока ты должен понимать event loop, call stack, task queue, microtask queue, состояния Promise, `resolve/reject`, `then/catch/finally`, Promise chains, `Promise.all`, `Promise.race`, `Promise.allSettled`, промисификацию, `async/await`, `try/catch/finally` и loading/error/success состояния.

## Что делаем

Практика:

```text
Bangkok Express Async Order Flow
```

Сценарии:

```text
1. Загрузить категории
2. Загрузить товары
3. Загрузить featured товар
4. Параллельно загрузить reviews и recommendations
5. Обработать частичные ошибки
6. Симулировать отправку заказа
7. Переписать цепочку на async/await
```

## Что должен уметь код

```text
1. Создать fakeRequest
2. fakeRequest возвращает Promise
3. Реализовать resolve-сценарий
4. Реализовать reject-сценарий
5. Построить Promise chain
6. Использовать then/catch/finally
7. Использовать Promise.all
8. Использовать Promise.race
9. Использовать Promise.allSettled
10. Промисифицировать callback-функцию
11. Создать async функцию loadDashboard
12. Использовать await
13. Использовать try/catch/finally
14. Отображать loading/error/success states
15. Логировать порядок event loop
```

## Критерий готовности

Задача выполнена, если есть `fakeRequest`, успешный и rejected Promise, chain из `then`, `catch`, `finally`, `Promise.all`, `Promise.race`, `Promise.allSettled`, промисификация callback API, async/await версия сценария, обработка ошибок через `try/catch`, loading выключается через `finally`, UI показывает loading/error/success.

## Итог урока

Ты должен уметь объяснить event loop, microtasks, Promise states, chain, all/race/allSettled, promisification и async/await.
