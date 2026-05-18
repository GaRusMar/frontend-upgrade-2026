# Day 04 — Практика

## Практика: Product Card Renderer

Ты создаёшь динамическую генерацию карточек товаров для будущего проекта **Bangkok Express**.

Главная цель — научиться превращать массив объектов в интерфейс на странице.

## Перед стартом

Открой `index.html` в браузере.

Проверь, что на странице есть:

- блок Featured product;
- блок Categories;
- блок Products;
- сообщение Empty state;
- кнопка `Render products`;
- кнопка `Clear products`.

Открой DevTools:

```text
Elements
Console
```

## Шаг 1. Создать массив products

В `script.js` создай массив `products`.

Каждый элемент — объект.

Минимальные свойства товара:

```text
id
name
price
category
spicy
hasNuts
isVegetarian
isFeatured
```

Добавь минимум 5 товаров из Bangkok Express.

## Шаг 2. Создать массив categories

Создай массив категорий:

```text
All
Salads
Soups
Seafood dishes
Chicken dishes
```

## Шаг 3. Найти DOM-контейнеры

Найди:

- контейнер featured product;
- список категорий;
- контейнер products;
- элемент empty state;
- кнопку render;
- кнопку clear.

## Шаг 4. Проверить элементы в Console

Временно выведи найденные элементы:

```js
console.log(productsContainer)
console.log(categoriesList)
```

Если где-то `null`, проверь селектор.

## Шаг 5. Создать formatPrice

Напиши функцию `formatPrice`.

Она принимает число и возвращает строку:

```text
€16.00
```

## Шаг 6. Создать createProductCard

Напиши функцию:

```text
createProductCard(product)
```

Она должна возвращать DOM-элемент карточки.

## Шаг 7. Создать article

Внутри `createProductCard` создай:

```text
article
```

Добавь класс:

```text
product-card
```

## Шаг 8. Добавить dataset

Добавь карточке:

```text
data-product-id
```

Через:

```js
card.dataset.productId = product.id
```

## Шаг 9. Добавить featured class

Если:

```text
product.isFeatured === true
```

добавь класс:

```text
product-card--featured
```

## Шаг 10. Создать title

Создай `h3`.

Запиши туда название товара через `textContent`.

Добавь в карточку.

## Шаг 11. Создать category

Создай элемент для категории.

Запиши туда `product.category`.

Добавь в карточку.

## Шаг 12. Создать price

Создай элемент для цены.

Используй `formatPrice(product.price)`.

Добавь в карточку.

## Шаг 13. Создать badges

Создай список badges.

Добавь badges:

```text
spicy: X
nuts / no nuts
vegetarian / meat
```

Каждый badge — отдельный DOM-элемент.

## Шаг 14. Вернуть карточку

Функция `createProductCard` должна вернуть готовую карточку.

## Шаг 15. Создать renderProducts

Напиши функцию:

```text
renderProducts(productsToRender)
```

Она должна:

```text
1. Очистить products container
2. Если массив пустой — показать empty state
3. Если массив не пустой — скрыть empty state
4. Создать карточку для каждого товара
5. Добавить карточку в контейнер
```

## Шаг 16. Очистить контейнер

Перед render используй:

```js
productsContainer.replaceChildren()
```

## Шаг 17. Показать empty state

Если товаров нет:

```text
empty state должен быть виден
```

Если товары есть:

```text
empty state должен быть скрыт
```

Используй `hidden`.

## Шаг 18. Отрисовать products

Вызови:

```text
renderProducts(products)
```

Проверь, что карточки появились.

## Шаг 19. Создать renderCategories

Напиши функцию:

```text
renderCategories(categories)
```

Она должна создать список категорий.

Каждая категория — `li` или `button`.

Добавь `data-category`.

## Шаг 20. Отрисовать categories

Вызови:

```text
renderCategories(categories)
```

Проверь, что категории появились.

## Шаг 21. Отрисовать featured product

Найди товар:

```text
isFeatured === true
```

Создай для него карточку и добавь в featured container.

Если featured товара нет — покажи текст:

```text
No featured product
```

## Шаг 22. Подключить кнопки

Кнопка `Render products` должна вызвать:

```text
renderProducts(products)
```

Кнопка `Clear products` должна вызвать:

```text
renderProducts([])
```

## Шаг 23. Проверить DOM в Elements

Открой DevTools → Elements.

Проверь:

- карточки реально появились в DOM;
- у карточек есть класс `product-card`;
- у карточек есть `data-product-id`;
- у featured карточки есть класс `product-card--featured`;
- categories имеют `data-category`.

## Шаг 24. Проверить повторный render

Нажми `Render products` несколько раз.

Карточки не должны дублироваться.

Если дублируются — значит контейнер не очищается перед render.

## Шаг 25. Убрать лишние console.log

Перед коммитом можно оставить только полезные `console.log` или убрать всё лишнее.

## Усложнение

Если основная задача готова:

1. Добавь badge `🔥` для spicy >= 3.
2. Добавь класс `product-card--vegetarian`.
3. Добавь картинку товара через `img`.
4. Добавь `alt` для картинки.
5. Добавь кнопку `Add to cart`, но без логики клика.
6. Создай функцию `createBadge(text)`.
7. Создай функцию `createElement(tag, className, text)`.
