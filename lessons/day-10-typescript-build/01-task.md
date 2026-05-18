# Day 10 — Основы TypeScript и сборка проекта

## Ориентир по программе jsbasic

Тема из программы:

> Основы TypeScript и сборка проекта

На этом занятии учимся собирать проекты из модулей и компонентов, а также изучаем основы TypeScript.

В этом уроке разбираем:

```text
- сборка проекта при помощи Webpack
- подключение TypeScript
- базовая настройка проекта
- основы типизации
- типы
- интерфейсы
- проверка кода на этапе разработки
- основные JavaScript фреймворки: как устроены
- куда двигаться дальше
- что изучать
- откуда брать информацию
- особенности собеседований и стажировок
```

## Тема дня

```text
project setup → modules → TypeScript → interfaces → build → frontend roadmap
```

## Цель урока

После урока ты должен понимать сборку проекта, bundler, modules, TypeScript, type annotations, union types, interfaces, optional properties, function types, `tsconfig`, `strict`, `typecheck`, `build`, npm scripts и связь с React/Next.js.

## Что делаем

Практика:

```text
Bangkok Express TypeScript Starter
```

Структура:

```text
src/
  data/
    products.ts
  types/
    product.ts
    cart.ts
    order.ts
  utils/
    formatPrice.ts
  components/
    ProductCard.ts
    Cart.ts
  main.ts
```

## Что должен уметь код

```text
1. Создать package.json
2. Создать tsconfig.json
3. Создать src/main.ts
4. Создать тип Product
5. Создать тип Category
6. Создать тип CartItem
7. Создать тип Order
8. Создать products.ts
9. Создать formatPrice.ts
10. Создать ProductCard.ts
11. Создать Cart.ts
12. Использовать import/export
13. Проверить типы через npm script
14. Собрать проект через build script
15. Зафиксировать roadmap после jsbasic
```

## Критерий готовности

Есть структура TypeScript-проекта, `package.json`, `tsconfig.json`, `src/main.ts`, типы Product/CartItem/Order, products data, `formatPrice`, ProductCard, Cart, import/export, типы функций, нет неявного any, студент понимает build и TypeScript.
