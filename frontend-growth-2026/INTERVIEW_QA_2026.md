# Вопросы на собеседования Frontend 2026 — короткие ответы

## JavaScript

### Чем let, const, var отличаются?

var имеет function scope и всплывает. let и const имеют block scope. const запрещает переопределить ссылку, но не делает объект неизменяемым.

### Что такое hoisting?

Hoisting — поведение, при котором объявления переменных и функций обрабатываются до выполнения кода. Function declaration можно вызвать до объявления. let и const находятся в temporal dead zone до строки объявления.

### Что такое замыкание?

Замыкание — это когда функция запоминает переменные из внешней области видимости даже после завершения внешней функции.

### Что такое event loop?

Event loop управляет выполнением синхронного кода, microtasks и macrotasks. Сначала выполняется call stack, потом microtasks, потом macrotasks.

### Что выполнится раньше: Promise или setTimeout?

Promise.then выполнится раньше, потому что это microtask. setTimeout — macrotask.

### Чем == отличается от ===?

== сравнивает с приведением типов. === сравнивает без приведения. В рабочем коде почти всегда используют ===.

### Что такое debounce?

Debounce откладывает выполнение функции, пока пользователь не перестанет часто вызывать событие. Например, поиск после остановки ввода.

### Что такое throttle?

Throttle ограничивает частоту вызова функции. Например, обработчик scroll не чаще одного раза в 200 мс.

### Чем map, filter, reduce отличаются?

map создаёт новый массив с преобразованными элементами. filter оставляет только подходящие элементы. reduce сводит массив к одному значению.

### Что такое иммутабельность?

Иммутабельность — подход, при котором мы не изменяем старые данные, а создаём новые. В React это важно для корректного обновления UI.

---

## TypeScript

### Зачем нужен TypeScript?

TypeScript помогает находить ошибки до запуска кода, описывать структуру данных и делать код понятнее для команды.

### Чем type отличается от interface?

interface чаще используют для описания объектов и его можно расширять через declaration merging. type универсальнее: union, intersection, primitives, tuples.

### Что такое union type?

Union позволяет значению быть одним из нескольких типов.

```ts
type Status = 'idle' | 'loading' | 'success' | 'error'
```

### Что такое generic?

Generic позволяет сохранить тип и переиспользовать функцию или компонент с разными типами.

```ts
function identity<T>(value: T): T {
  return value
}
```

### Что такое narrowing?

Narrowing — сужение типа через проверки.

```ts
function print(value: string | number) {
  if (typeof value === 'string') {
    console.log(value.toUpperCase())
  }
}
```

### Что такое Partial, Pick, Omit?

Это utility types.

```ts
Partial<User> // все поля необязательные
Pick<User, 'id' | 'name'> // взять часть полей
Omit<User, 'password'> // исключить поле
```

---

## React

### Что такое component?

Компонент — независимая часть интерфейса, которая принимает props и возвращает UI.

### Что такое props?

Props — данные, которые родитель передаёт дочернему компоненту.

### Что такое state?

State — внутренние данные компонента, при изменении которых React перерисовывает UI.

### Чем controlled component отличается от uncontrolled?

Controlled component хранит значение формы в React state. Uncontrolled component хранит значение внутри DOM, а React получает его через ref.

### Что делает useEffect?

useEffect запускает побочные эффекты: запросы, подписки, работу с DOM, timers. Он выполняется после render.

### Когда не нужен useEffect?

Если значение можно вычислить из props/state прямо во время render, useEffect не нужен. Частая ошибка — хранить derived state в useEffect.

### Что такое custom hook?

Custom hook — функция, которая использует React hooks и выносит переиспользуемую логику.

### Зачем нужен key в списках?

key помогает React понять, какой элемент изменился, добавился или удалился. Нельзя использовать index, если порядок элементов может меняться.

### Что такое lifting state up?

Это перенос состояния в общего родителя, если нескольким компонентам нужны одни и те же данные.

### Что такое memoization в React?

Оптимизация, которая помогает избежать лишних вычислений или ререндеров через memo, useMemo, useCallback.

---

## Next.js

### Что такое App Router?

Современная система маршрутизации Next.js через папку app, layouts, Server Components, Client Components и nested routes.

### Чем Server Component отличается от Client Component?

Server Component рендерится на сервере и не отправляет свой JS на клиент. Client Component нужен для интерактива: state, effects, event handlers.

### Когда нужен use client?

Когда компонент использует useState, useEffect, browser API, event handlers или client-side libraries.

### Где лучше делать data fetching в Next.js?

Если данные нужны для страницы и не требуют интерактива — на сервере.

### Что такое caching в Next.js?

Caching сохраняет результат запроса или вычисления, чтобы не выполнять его заново.

### Что такое revalidation?

Revalidation обновляет cached data, чтобы страница была быстрой, но данные не устаревали.

### Что такое revalidatePath?

revalidatePath инвалидирует кэш для конкретного path. Его можно вызывать в Server Functions и Route Handlers, но не в Client Components.

### Что такое metadata в Next.js?

SEO-данные страницы: title, description, open graph, robots и другие мета-теги.

### Чем SSR отличается от SSG?

SSR генерирует HTML на каждый запрос. SSG генерирует HTML заранее на build-time. ISR позволяет обновлять статические страницы после деплоя.

### Что такое hydration?

Hydration — процесс, когда HTML с сервера становится интерактивным на клиенте.

---

## Архитектура

### Как организовать React-проект?

Простой вариант:

```text
src/
  components/
  hooks/
  pages/
  services/
  store/
  types/
  utils/
```

Главное — отделять UI, бизнес-логику, API и типы.

### Где хранить API-запросы?

В отдельном слое: services, api или shared/api.

### Где хранить бизнес-логику?

Не в JSX. Лучше в hooks, utils, services, store или domain-функциях.

### Когда нужен Zustand/Redux?

Когда состояние нужно многим компонентам, сложно прокидывать props или есть глобальные сущности: user, cart, filters, builder state.

### Когда не нужен глобальный store?

Если состояние нужно только одному компоненту или небольшой группе рядом стоящих компонентов.

---

## Performance

### Как оптимизировать React-приложение?

- убрать лишние ререндеры
- делить компоненты
- использовать memoization точечно
- lazy loading
- code splitting
- оптимизировать изображения
- кешировать запросы
- виртуализировать длинные списки

### Что такое lazy loading?

Загрузка части кода или ресурса только тогда, когда он реально нужен.

### Что такое code splitting?

Разделение bundle на части, чтобы пользователь не загружал весь JS сразу.

### Что такое Web Vitals?

Метрики качества пользовательского опыта: загрузка, интерактивность, визуальная стабильность.

---

## Testing

### Что тестировать во frontend?

- бизнес-логику
- utils
- hooks
- формы
- критические user flows
- loading/error/empty states

### Какие виды тестов знать?

- unit tests
- integration tests
- e2e tests

### Чем unit отличается от e2e?

Unit проверяет маленькую функцию или компонент. E2E проверяет полный пользовательский сценарий в браузере.
