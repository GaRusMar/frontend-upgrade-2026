# Day 10 — Теория

## 1. Зачем нужна сборка проекта

В реальном проекте файлов много:

```text
components
utils
data
types
styles
assets
```

Сборка помогает объединить модули, обработать TypeScript, проверить ошибки и подготовить код для браузера.

## 2. Bundler

Bundler — инструмент, который собирает проект.

Примеры:

```text
Webpack
Vite
Parcel
Rollup
```

В программе курса упоминается Webpack. В современной практике часто используют Vite, но идея одна.

## 3. Entry point

Entry point — главный файл приложения.

```text
src/main.ts
```

С него начинается импорт остальных файлов.

## 4. Модули

Модули позволяют разделить код по файлам.

```text
ProductCard.ts
Cart.ts
products.ts
formatPrice.ts
main.ts
```

## 5. import/export

`export` отдаёт код из файла.

```ts
export function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`
}
```

`import` получает код в другом файле.

```ts
import { formatPrice } from './utils/formatPrice'
```

## 6. Зачем нужен TypeScript

TypeScript добавляет типы к JavaScript.

```ts
function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`
}
```

Теперь видно, что `price` должен быть number, а функция возвращает string.

## 7. TypeScript компилируется в JavaScript

Браузер исполняет JavaScript.

TypeScript проверяется и компилируется в JavaScript.

## 8. Type annotation

```ts
const price: number = 16
const name: string = 'Tom yam kai'
const isAvailable: boolean = true
```

## 9. Primitive types

```text
string
number
boolean
null
undefined
```

## 10. Array types

```ts
const categories: string[] = ['Soups', 'Salads']
const products: Product[] = []
```

## 11. Interface

`interface` описывает форму объекта.

```ts
export interface Product {
  id: number
  name: string
  price: number
  category: string
}
```

## 12. Optional property

```ts
interface Product {
  id: number
  name: string
  description?: string
}
```

`description` может отсутствовать.

## 13. Union type

```ts
type Status = 'idle' | 'loading' | 'success' | 'error'
```

Переменная может принимать только эти значения.

## 14. Category union

```ts
export type Category =
  | 'Salads'
  | 'Soups'
  | 'Seafood dishes'
  | 'Chicken dishes'
```

TypeScript поймает опечатку в категории.

## 15. Type vs interface

На старте:

```text
interface удобно для объектов
type удобно для union и alias
```

## 16. Function types

```ts
function formatPrice(price: number): string {
  return `€${price.toFixed(2)}`
}
```

## 17. Void

```ts
function renderProducts(products: Product[]): void {
  // render
}
```

`void` значит: функция не возвращает полезное значение.

## 18. Any

`any` отключает пользу TypeScript.

Правило:

```text
избегай any
```

## 19. Unknown

`unknown` безопаснее `any`, потому что требует проверки перед использованием.

## 20. API response type

```ts
type ProductsResponse = Product[]
```

или:

```ts
interface ProductsResponse {
  products: Product[]
}
```

## 21. CartItem

```ts
export interface CartItem {
  id: number
  name: string
  price: number
  quantity: number
}
```

## 22. Order

```ts
export interface Order {
  customer: string
  phone: string
  email: string
  address: string
  items: CartItem[]
  createdAt: string
}
```

## 23. tsconfig

`tsconfig.json` — конфигурация TypeScript.

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "strict": true
  }
}
```

## 24. strict и noImplicitAny

`strict: true` включает строгую проверку.

`noImplicitAny: true` запрещает неявный any.

## 25. npm scripts

```json
{
  "scripts": {
    "typecheck": "tsc --noEmit",
    "build": "webpack"
  }
}
```

Запуск:

```bash
npm run typecheck
npm run build
```

## 26. Typecheck

Typecheck — проверка типов без запуска кода.

Цель: найти ошибки до браузера.

## 27. Build

Build — сборка проекта.

Результат обычно попадает в:

```text
dist/
```

## 28. Почему TypeScript важен для работодателей

TypeScript помогает уменьшить runtime-ошибки, лучше читать код, работать в команде, безопаснее рефакторить и описывать API.

## 29. Как устроены фреймворки

React, Vue, Angular, Svelte строятся вокруг:

```text
компоненты
данные
состояние
события
рендер
модули
сборка
```

## 30. Куда двигаться дальше

```text
1. JavaScript advanced
2. TypeScript глубже
3. React
4. Next.js
5. Тестирование
6. Архитектура frontend-приложений
7. Portfolio projects
```

## 31. Что важно запомнить

```text
TypeScript добавляет типы к JavaScript
interface описывает объект
type удобен для union
strict mode помогает учиться правильно
modules делят код по файлам
build готовит проект для браузера
React/Next.js проще понять после компонентов, модулей и TypeScript
```
