# Chapter 01 — JavaScript Basic

## Цель главы

Дать крепкую практическую базу JavaScript для создания браузерных интерфейсов.

Эта глава отвечает на вопрос:

```text
Как писать понятный JavaScript-код для DOM, событий, форм, компонентов, fetch и базовой архитектуры?
```

## Уровень главы

```text
junior foundation
```

После главы студент должен уверенно понимать:

```text
- основы языка
- объекты
- массивы
- функции
- DOM
- события
- формы
- fetch
- Promise basics
- async/await basics
- компоненты
- ООП basics
- TypeScript basics
```

## Главный проект главы

```text
Bangkok Express
```

Учебный интерфейс ресторана с онлайн-заказом:

```text
- carousel
- ribbon menu
- products grid
- filters
- cart
- cart modal
- order form
- validation
- fetch
- async submit
```

## Почему глава важна

Без этой главы нельзя нормально переходить к advanced JavaScript, TypeScript, React и Next.js.

Она даёт фундамент:

```text
data → state → render → events → state update → render
```

---

# Структура главы

## Day 01 — Основы языка, инструменты для разработки и отладки

### Оригинальная тема программы

```text
Основы языка, инструменты для разработки и отладки
```

### Разбираем

```text
- важные особенности JavaScript
- инструменты разработки
- Chrome DevTools
- debugging
- базовая работа с DOM
- переменные
- события
```

### Практика

```text
Counter
```

### Результат

Студент умеет:

```text
- найти DOM-элемент
- прочитать текст
- изменить текст
- повесить обработчик click
- хранить простое состояние
- отлаживать код через console и DevTools
```

---

## Day 02 — Объекты

### Оригинальная тема программы

```text
Объекты
```

### Разбираем

```text
- объект как структура данных
- запись и чтение свойств
- перебор свойств
- передача по ссылке
- копирование объектов
- методы объекта
- this
- деструктуризация объектов и массивов
```

### Практика

```text
User Settings / Product Object
```

### Результат

Студент умеет:

```text
- создавать объекты
- читать и менять свойства
- использовать методы
- понимать this на базовом уровне
- делать простую деструктуризацию
```

---

## Day 03 — Массивы и функции

### Оригинальная тема программы

```text
Массивы и Функции
```

### Разбираем

```text
- Function Declaration
- Function Expression
- arrow functions
- callbacks
- closures basics
- array methods
- sorting
- searching
```

### Практика

```text
Products List / Users Renderer
```

### Результат

Студент умеет:

```text
- писать функции
- передавать функцию как значение
- работать с массивом данных
- использовать forEach/map/filter/find/some/every
- рендерить список из массива
```

---

## Day 04 — DOM-модель

### Оригинальная тема программы

```text
DOM-модель
```

### Разбираем

```text
- DOM-модель документа
- поиск элементов
- создание элементов
- вставка элементов
- изменение элементов
- атрибуты
- свойства
- classList
- динамическая генерация интерфейса
```

### Практика

```text
Dynamic Interface Renderer
```

### Результат

Студент умеет:

```text
- создавать DOM через JS
- обновлять DOM
- работать с classList
- генерировать UI из данных
```

---

## Day 05 — Обработчики событий

### Оригинальная тема программы

```text
Обработчики событий
```

### Разбираем

```text
- addEventListener
- event object
- target/currentTarget
- preventDefault
- capturing/bubbling
- delegation
- behavior pattern
- data-action
- menu
- carousel basics
```

### Практика

```text
Menu + Carousel + Product Actions
```

### Результат

Студент умеет:

```text
- обрабатывать события
- использовать делегирование
- понимать всплытие
- работать с dataset
- строить интерактивный UI
```

---

## Day 06 — Компонентная архитектура, ООП

### Оригинальная тема программы

```text
Компонентная архитектура, ООП
```

### Разбираем

```text
- интерфейсные компоненты
- class
- constructor
- new
- this
- instance
- render
- CustomEvent
- modules basics
```

### Практика

```text
ProductCard + Cart + Carousel
```

### Результат

Студент умеет:

```text
- создать простой компонент
- создать class
- создать экземпляр через new
- хранить root element
- связать компоненты через CustomEvent
```

---

## Day 07 — Более сложные компоненты

### Оригинальная тема программы

```text
Более сложные компоненты
```

### Разбираем

```text
- modal
- ribbon menu
- slider
- autocomplete
- keyboard events
- pointer/mouse/touch events
- drag'n'drop basics
- debounce
- throttle
```

### Практика

```text
Advanced UI Components
```

### Результат

Студент умеет:

```text
- делать modal
- закрывать modal по overlay/Escape
- делать autocomplete
- использовать debounce/throttle
- проверять edge cases сложного UI
```

---

## Day 08 — Взаимодействие с сервером

### Оригинальная тема программы

```text
Взаимодействие с сервером
```

### Разбираем

```text
- HTTP forms
- submit
- preventDefault
- FormData
- validation
- regexp
- fetch
- Promise basics
- JSON
- GET/POST
- loading/error/success states
```

### Практика

```text
Products Loader and Order Form
```

### Результат

Студент умеет:

```text
- загрузить данные через fetch
- проверить response.ok
- прочитать response.json
- валидировать форму
- отправить payload
- обработать ошибку и успех
```

---

## Day 09 — Promise в деталях, более сложный асинхронный код

### Оригинальная тема программы

```text
Promise в деталях, более сложный асинхронный код
```

### Разбираем

```text
- event loop basics
- Promise states
- then/catch/finally
- Promise chain
- Promise.all
- Promise.race
- Promise.allSettled
- promisification
- async/await
- try/catch/finally
```

### Практика

```text
Async Order Flow
```

### Результат

Студент умеет:

```text
- написать fakeRequest
- построить Promise chain
- использовать Promise methods
- переписать код на async/await
- управлять loading в finally
```

---

## Day 10 — Основы TypeScript и сборка проекта

### Оригинальная тема программы

```text
Основы TypeScript и сборка проекта
```

### Разбираем

```text
- TypeScript basics
- types
- interfaces
- union types
- optional properties
- function types
- modules
- import/export
- tsconfig
- strict
- noImplicitAny
- npm scripts
- typecheck
- build
- Webpack concept
```

### Практика

```text
Bangkok Express TypeScript Starter
```

### Результат

Студент умеет:

```text
- описать Product/CartItem/Order
- типизировать функцию
- разделить код на модули
- запустить typecheck
- понимать сборку проекта
```

---

# Course Project — Bangkok Express

## Цель проекта

Собрать финальный проект по блоку `jsbasic`.

## Что должно быть

```text
- carousel
- ribbon menu
- filters
- products grid
- cart
- cart modal
- order form
- validation
- fetch products
- async submit
- loading/error/success states
```

## Темы, которые проект закрепляет

```text
DOM
events
delegation
components
classes
CustomEvent
forms
validation
fetch
JSON
Promise
async/await
TypeScript architecture notes
```

## Результат главы

После Chapter 01 студент готов к:

```text
Chapter 02 — JavaScript Advanced
```

Потому что он уже понимает базовую механику интерфейсов и может углубляться в язык, браузер, архитектуру, тесты, роутинг и сборку.
