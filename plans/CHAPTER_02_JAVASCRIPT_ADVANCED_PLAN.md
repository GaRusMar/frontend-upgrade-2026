# Chapter 02 — JavaScript Advanced

## Цель главы

Дать глубокое знание JavaScript, соответствующее уровню уверенного junior+ / middle-frontend.

Эта глава не повторяет `jsbasic` один в один. Она проходит знакомые темы глубже:

```text
jsbasic:
понять базу и научиться делать простые интерфейсы

javascript advanced:
понять внутренние механизмы языка, браузера, архитектуры, тестов, роутинга и сборки
```

## Главный проект главы

```text
Shop Admin
```

Админка товаров для магазина:

```text
- dashboard
- date range picker
- sortable table
- products page
- product edit page
- image upload
- drag'n'drop сортировка картинок
- categories tree
- SPA routing
- async data loading
- tests
- Vite build
```

## Почему есть повторы после jsbasic

Темы повторяются:

```text
объекты
массивы
функции
DOM
события
fetch
Promise
TypeScript
компоненты
```

Но уровень другой.

Пример:

```text
jsbasic DOM:
найти элемент, изменить текст, обработать click

advanced DOM:
модули, загрузка страницы, порядок scripts/modules, производительность,
компоненты Tooltip и RangePicker
```

Пример:

```text
jsbasic события:
click, target/currentTarget, delegation

advanced события:
delegation, behavior pattern, CustomEvent, component communication,
drag'n'drop, архитектура событий
```

Пример:

```text
jsbasic fetch:
загрузить products.json, отправить форму

advanced fetch:
GET/POST, кодировка, JSON, загрузка изображений, AbortController,
ошибки, архитектура API-слоя
```

---

# Структура главы

## Day 01 — Основы языка глубже

### Оригинальная тема программы

```text
Основы языка
```

Разбираем:

```text
- примитивные типы данных
- методы примитивов
- преобразование типов
- объекты и их преобразования к примитивам
- спецификация ECMAScript
```

### Цель урока

Понять, как JavaScript работает с базовыми значениями глубже, чем на уровне “строка/число/boolean”.

### Теория

```text
- primitive vs object
- string/number/boolean/null/undefined/symbol/bigint
- wrapper objects
- методы примитивов
- ToPrimitive
- valueOf
- toString
- Symbol.toPrimitive
- implicit conversion
- explicit conversion
- сравнения и edge cases
- как читать ECMAScript spec на базовом уровне
```

### Практика

```text
Shop Admin — Value Inspector
```

Мини-инструмент, который показывает:

```text
value
typeof
String(value)
Number(value)
Boolean(value)
comparison result
```

### Вопросы

```text
- Почему у строки есть методы, если строка примитив?
- Что такое wrapper object?
- Что такое ToPrimitive?
- В каком порядке вызываются valueOf/toString?
- Чем null отличается от undefined?
- Почему Number('') даёт 0?
- Почему Boolean('false') даёт true?
```

---

## Day 02 — Объекты, массивы и функции глубже

### Оригинальная тема программы

```text
Объекты, массивы и функции
```

Разбираем:

```text
- замыкание и область видимости
- функции как значение
- стрелочные функции
- объект как коллекция
- передача по ссылке
- итерация
- копирование
- флаги свойств
- Set/Map
- деструктуризация
- основы тестов
```

### Цель урока

Научиться уверенно работать с данными и функциями как с основой архитектуры приложения.

### Теория

```text
- lexical environment
- scope chain
- closure
- function declaration/expression
- arrow functions
- callbacks
- object references
- shallow copy
- deep copy idea
- property flags
- Object.keys/values/entries
- Object.defineProperty
- Map
- Set
- WeakMap/WeakSet overview
- destructuring
- rest/spread
- basics of tests
```

### Практика

```text
Shop Admin — Products Data Engine
```

Сделать модуль обработки товаров:

```text
filter products
sort products
group by category
calculate totals
deduplicate categories через Set
cache metadata через Map
```

### Вопросы

```text
- Что такое замыкание?
- Почему объект передаётся по ссылке?
- Чем Map отличается от Object?
- Чем Set отличается от массива?
- Что такое shallow copy?
- Что делают property flags?
- Почему стрелочная функция не имеет своего this?
```

---

## Day 03 — TypeScript и ООП

### Оригинальная тема программы

```text
TypeScript и объектно-ориентированное программирование
```

Разбираем:

```text
- настройка TypeScript
- методы объектов
- динамический this
- потеря контекста
- bind/call/apply
- operator new
- экземпляры класса
- наследование
- приватные поля
- компонентная архитектура
- компонент диаграмма
```

### Цель урока

Понять особенности `this`, классов, наследования и базовой типизации в TypeScript.

### Теория

```text
- this in object methods
- dynamic this
- lost context
- bind/call/apply
- new operator
- prototype link
- class syntax
- constructor
- extends
- super
- private fields
- TypeScript class types
- interfaces
- access modifiers
- component architecture
```

### Практика

```text
Shop Admin — Dashboard Chart Component
```

Сделать компонент диаграммы:

```text
class Chart
constructor(data, options)
render()
update()
destroy()
```

TypeScript-типы:

```text
ChartData
ChartOptions
DashboardMetric
```

### Вопросы

```text
- Что такое динамический this?
- Почему теряется контекст?
- Чем bind отличается от call/apply?
- Что делает new?
- Что такое экземпляр класса?
- Что такое private field?
- Чем class в JS связан с prototype?
```

---

## Day 04 — DOM-модель в деталях

### Оригинальная тема программы

```text
DOM-модель в деталях
```

Разбираем:

```text
- DOM-модель документа
- основные методы DOM
- JavaScript-модули
- отличие modules от обычных scripts
- подключение ресурсов
- производительность загрузки страницы
- порядок выполнения модулей и скриптов
- компоненты Tooltip и RangePicker
```

### Цель урока

Понять DOM и загрузку страницы глубже, чем просто `querySelector`.

### Теория

```text
- DOM tree
- nodes vs elements
- querySelector/querySelectorAll
- closest/matches
- createElement
- DocumentFragment
- template
- modules
- defer/async/type=module
- loading lifecycle
- DOMContentLoaded
- load
- script execution order
- performance basics
```

### Практика

```text
Shop Admin — Tooltip + RangePicker
```

Компоненты:

```text
Tooltip
RangePicker
```

RangePicker нужен для dashboard date range.

### Вопросы

```text
- Чем node отличается от element?
- Что такое DocumentFragment?
- Зачем нужен template?
- Чем module script отличается от обычного script?
- Чем defer отличается от async?
- Когда срабатывает DOMContentLoaded?
```

---

## Day 05 — События и архитектура компонентов

### Оригинальная тема программы

```text
События
```

Разбираем:

```text
- установка обработчиков
- погружение и всплытие
- делегирование
- behavior pattern
- связывание компонентов через свои события
- drag'n'drop
- Tooltip и RangePicker для проекта
```

### Цель урока

Понять событийную архитектуру сложного интерфейса.

### Теория

```text
- event phases
- capturing
- bubbling
- stopPropagation
- preventDefault
- event delegation
- behavior pattern
- data-action
- CustomEvent
- component communication
- dragstart/dragover/drop
- pointer events
```

### Практика

```text
Shop Admin — Sortable Categories + Image Sort
```

Сделать:

```text
categories drag'n'drop
image list drag'n'drop
CustomEvent category-sort
CustomEvent image-sort
```

### Вопросы

```text
- Что такое capturing?
- Что такое bubbling?
- Когда использовать delegation?
- Что такое behavior pattern?
- Почему компоненты лучше связывать через CustomEvent?
- Почему в dragover нужен preventDefault?
```

---

## Day 06 — Взаимодействие с сервером

### Оригинальная тема программы

```text
Взаимодействие с сервером
```

Разбираем:

```text
- HTTP-формы
- динамические формы
- валидация
- DOM-свойства форм
- Fetch API
- POST-запросы
- кодировка
- JSON
- события клавиатуры
- загрузка изображений
```

### Цель урока

Научиться строить API-слой и работать с формами как в реальном приложении.

### Теория

```text
- FormData
- form.elements
- validation
- fetch GET/POST/PATCH/DELETE
- headers
- JSON.stringify
- response.ok
- API layer
- upload files
- image preview
- keyboard events
- error handling
```

### Практика

```text
Shop Admin — Product Edit Form
```

Сделать:

```text
load product
edit fields
validate
upload images preview
save product via PATCH/POST mock
show success/error toast
```

### Вопросы

```text
- Почему submit слушают на form?
- Что такое FormData?
- Чем POST отличается от PATCH?
- Зачем Content-Type?
- Как показать preview изображения?
- Почему сервер тоже должен валидировать данные?
```

---

## Day 07 — Promise в деталях и async/await

### Оригинальная тема программы

```text
Promise в деталях, более сложный асинхронный код
```

Разбираем:

```text
- event loop
- setTimeout(..., 0)
- macrotasks
- microtasks
- Promise advanced methods
- promisification
- async/await
- error handling
- dynamic import
- AbortController
```

### Цель урока

Понять внутреннее устройство асинхронности и управлять сложными async-сценариями.

### Теория

```text
- event loop deeper
- microtasks/macrotasks
- Promise.all
- Promise.allSettled
- Promise.race
- Promise.any
- promisification
- async/await
- try/catch/finally
- dynamic import
- AbortController
- request cancellation
```

### Практика

```text
Shop Admin — Products Loader with AbortController
```

Сделать:

```text
load products
cancel previous request
search with debounce
AbortController
dynamic import product page
loading/error/success
```

### Вопросы

```text
- Почему microtask выполняется раньше setTimeout?
- Чем Promise.all отличается от allSettled?
- Что делает AbortController?
- Зачем отменять предыдущий запрос?
- Что такое dynamic import?
```

---

## Day 08 — Тестирование JavaScript-приложений

### Оригинальная тема программы

```text
Тестирование JavaScript-приложений
```

Разбираем:

```text
- TDD/BDD
- unit tests
- integration tests
- E2E tests
- spy
- mock
- stub
- Vitest
- Playwright/Cypress
```

### Цель урока

Научиться писать тесты для логики, компонентов и пользовательских сценариев.

### Теория

```text
- зачем нужны тесты
- unit vs integration vs e2e
- TDD
- BDD
- describe/it/expect
- mocks
- spies
- stubs
- testing async code
- testing DOM components
- Vitest
- Playwright overview
```

### Практика

```text
Shop Admin — Tests
```

Написать тесты:

```text
formatPrice
sortProducts
filterProducts
validateProductForm
Cart/ProductTable logic
async API mock
```

### Вопросы

```text
- Чем unit отличается от integration?
- Что такое mock?
- Что такое spy?
- Что такое stub?
- Как тестировать async function?
- Что лучше тестировать unit-тестом, а что E2E?
```

---

## Day 09 — Архитектура веб-приложений и роутинг

### Оригинальная тема программы

```text
Архитектура веб-приложений, роутинг
```

Разбираем:

```text
- SPA
- MPA
- History API
- router
- страницы без перезагрузки
- SSR
- SSG
```

### Цель урока

Понять, как устроены одностраничные приложения и навигация без перезагрузки.

### Теория

```text
- SPA
- MPA
- routing
- History API
- pushState
- popstate
- route params
- lazy page loading
- layout
- SSR overview
- SSG overview
```

### Практика

```text
Shop Admin — SPA Router
```

Страницы:

```text
/dashboard
/products
/products/:id
/categories
/sales
```

Сделать:

```text
router
navigation
active menu item
dynamic page loading
404 page
```

### Вопросы

```text
- Чем SPA отличается от MPA?
- Что делает history.pushState?
- Что такое popstate?
- Как сделать 404?
- Что такое SSR?
- Что такое SSG?
```

---

## Day 10 — Сборка проекта с Vite

### Оригинальная тема программы

```text
Сборка проекта с помощью Vite
```

Разбираем:

```text
- Vite
- конфигурация
- сборка
- плагины
- CSS
- полифилы
- публикация
```

### Цель урока

Собрать проект как современное frontend-приложение.

### Теория

```text
- Vite dev server
- build
- preview
- entry point
- environment variables
- CSS imports
- assets
- code splitting
- dynamic imports
- polyfills overview
- deploy basics
```

### Практика

```text
Shop Admin — Vite Build
```

Сделать:

```text
vite setup
src structure
CSS imports
assets
npm scripts
build
preview
```

### Вопросы

```text
- Чем Vite отличается от Webpack на уровне идеи?
- Что делает dev server?
- Что делает build?
- Зачем preview?
- Что такое code splitting?
- Зачем env variables?
```

---

## Day 11 — Дополнительные темы и подготовка к фреймворкам

### Оригинальная тема программы

```text
Дополнительные темы, ответы на вопросы
```

Разбираем:

```text
- куда двигаться дальше
- продвинутое применение AI
- MCP и агенты
- обзор фреймворков и библиотек
- вопросы
```

### Цель урока

Собрать картину дальнейшего развития и подготовиться к React/Vue/Angular.

### Теория

```text
- React/Vue/Angular overview
- component model
- state management overview
- data fetching libraries
- routing libraries
- testing strategy
- AI-assisted development
- MCP/agents overview
- learning roadmap
```

### Практика

```text
Shop Admin — Framework Migration Plan
```

Подготовить план переноса Shop Admin на React/Next.js:

```text
components map
state map
routing map
api layer
types
tests
```

### Вопросы

```text
- Почему React проще после компонентной архитектуры?
- Что такое state management?
- Что такое client routing?
- Что переносить в компоненты?
- Что переносить в api layer?
```

---

## Day 12 — Подготовка к курсовому проекту

### Цель урока

Перед курсовым проектом собрать требования, архитектуру и план реализации.

### Практика

```text
Shop Admin Project Planning
```

Документы:

```text
requirements
architecture
components
api
routing
testing
acceptance criteria
interview questions
codex prompt
```

---

# Course Project — Shop Admin

## Цель проекта

Собрать админку товаров для магазина.

## Что должно быть

```text
- dashboard
- cards with metrics
- mini charts
- date range picker
- products table
- sortable table
- filters
- product edit page
- image upload
- drag'n'drop image sorting
- categories tree
- drag'n'drop categories
- SPA router
- API layer
- loading/error states
- tests
- Vite build
```

## Страницы

```text
/dashboard
/products
/products/:id
/categories
/sales
```

## Компоненты

```text
Sidebar
DashboardCard
MiniChart
DateRangePicker
SortableTable
ProductTable
ProductForm
ImageUploader
CategoriesTree
Tooltip
Notification
Router
```

## Темы, которые проект закрепляет

```text
advanced objects
closures
Map/Set
classes
this
TypeScript basics
DOM details
modules
events
CustomEvent
drag'n'drop
forms
fetch
Promise advanced
AbortController
tests
routing
Vite build
```

## Итоговый результат

После Chapter 02 студент должен быть готов к следующей главе:

```text
Chapter 03 — TypeScript
```

А после TypeScript:

```text
Chapter 04 — React
Chapter 05 — Next.js
```
