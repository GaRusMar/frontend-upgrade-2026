# Day 10 — Практика

## Практика: TypeScript Starter

Ты создаёшь минимальную TypeScript-структуру для будущего проекта **Bangkok Express**.

## Шаг 1. Создать package.json

Создай `package.json`.

Скрипты:

```text
typecheck
build
dev
```

## Шаг 2. Установить зависимости

Вариант с Webpack:

```text
typescript
webpack
webpack-cli
ts-loader
```

## Шаг 3. Создать tsconfig.json

Включи:

```text
strict: true
noImplicitAny: true
```

## Шаг 4. Создать структуру src

```text
src/
  data/
  types/
  utils/
  components/
  main.ts
```

## Шаг 5. Создать Product type

Файл:

```text
src/types/product.ts
```

Опиши `Category` и `Product`.

`Product`:

```text
id
name
price
category
spicy
description?
```

## Шаг 6. Создать CartItem type

Файл:

```text
src/types/cart.ts
```

`CartItem`:

```text
id
name
price
quantity
```

## Шаг 7. Создать Order type

Файл:

```text
src/types/order.ts
```

`Order`:

```text
customer
phone
email
address
items
createdAt
```

## Шаг 8. Создать products data

Файл:

```text
src/data/products.ts
```

Создай:

```text
products: Product[]
```

Добавь минимум 4 товара.

## Шаг 9. Создать formatPrice

Файл:

```text
src/utils/formatPrice.ts
```

Функция:

```text
formatPrice(price: number): string
```

## Шаг 10. Создать ProductCard

Файл:

```text
src/components/ProductCard.ts
```

Class `ProductCard`.

Constructor принимает:

```text
product: Product
```

`render(): HTMLElement`.

## Шаг 11. Создать Cart

Файл:

```text
src/components/Cart.ts
```

Методы:

```text
addItem(product: Product): void
getTotal(): number
render(): HTMLElement
```

## Шаг 12. Создать main.ts

Импортируй products, ProductCard, Cart, formatPrice.

## Шаг 13. Проверить import/export

Каждый файл экспортирует нужное.

`main.ts` импортирует зависимости.

## Шаг 14. Проверить typecheck

```bash
npm run typecheck
```

## Шаг 15. Создать намеренную ошибку

Временно сделай:

```text
price: '16'
```

Проверь, что TypeScript ругается.

Потом исправь.

## Шаг 16. Проверить build

```bash
npm run build
```

## Шаг 17. Зафиксировать roadmap

```text
После jsbasic:
1. JavaScript advanced
2. TypeScript
3. React
4. Next.js
5. Portfolio projects
```

## Усложнение

1. Добавь `ApiResponse<T>`.
2. Добавь `OrderStatus` union.
3. Добавь `ProductCardProps`.
4. Добавь generic функцию `createElement`.
