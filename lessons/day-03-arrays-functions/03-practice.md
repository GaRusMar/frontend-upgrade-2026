# Day 03 — Практика

## Практика: Products Analyzer

Ты создаёшь набор функций для работы с меню будущего проекта **Bangkok Express**.

В этом уроке главная цель — научиться работать с массивами, функциями, callback и методами массивов.

## Перед стартом

Открой `index.html` в браузере.

Проверь, что на странице есть:

- блок Products count;
- блок Categories;
- блок Product names;
- блок Filtered products;
- блок Found product;
- блок Sorted products;
- блок Cart total;
- блок Closure result.

Открой DevTools Console.

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
```

Добавь минимум 5 товаров:

```text
Penang shrimp
Tom yam kai
Tom kha kai
Som tam papaya salad
Laab kai chicken salad
```

## Шаг 2. Создать массив categories

Создай массив категорий:

```text
All
Salads
Soups
Seafood dishes
Chicken dishes
```

## Шаг 3. Вывести массивы в консоль

Проверь:

```js
console.log(products)
console.log(categories)
```

## Шаг 4. Найти DOM-элементы

Найди элементы для вывода:

- products count;
- categories list;
- product names list;
- filtered products list;
- found product;
- sorted products list;
- cart total;
- closure result.

## Шаг 5. Показать количество товаров

Используй:

```text
products.length
```

Выведи количество на страницу.

## Шаг 6. Получить первый товар

Получи первый товар по индексу.

Проверь его в консоли.

Помни: первый индекс — `0`.

## Шаг 7. Добавить товар через push

Добавь новый товар через `products.push(...)`.

После этого обнови количество товаров.

## Шаг 8. Удалить последний товар через pop

Удалить последний товар:

```js
const removedProduct = products.pop()
```

Выведи удалённый товар в консоль.

## Шаг 9. Создать Function Declaration

Создай функцию `formatPrice`.

Она принимает число и возвращает строку:

```text
€16.00
```

Подсказка:

```text
toFixed(2)
```

## Шаг 10. Создать Function Expression

Создай функцию `getProductLabel`.

Она принимает товар и возвращает строку:

```text
Penang shrimp — €16.00
```

## Шаг 11. Создать Arrow Function

Создай стрелочную функцию `isVegetarianProduct`.

Она принимает товар и возвращает `true`, если товар vegetarian.

## Шаг 12. Использовать forEach для категорий

Пройди по `categories` через `forEach`.

Для каждой категории создай `li` и добавь в список категорий.

## Шаг 13. Использовать map для названий товаров

Создай массив названий товаров:

```text
productNames
```

Через `map`.

Выведи названия на страницу.

## Шаг 14. Использовать filter для категории

Отфильтруй товары категории:

```text
Soups
```

Выведи их в блок Filtered products.

## Шаг 15. Использовать filter для vegetarian

Отфильтруй vegetarian товары.

Проверь результат в консоли.

## Шаг 16. Использовать find по id

Найди товар с id `1`.

Выведи его в блок Found product.

Если товар не найден, покажи:

```text
Product not found
```

## Шаг 17. Использовать find по названию

Найди товар по названию:

```text
Tom yam kai
```

Проверь результат в консоли.

## Шаг 18. Использовать sort по цене

Создай копию массива и отсортируй её по цене от меньшей к большей.

Важно:

```text
не меняй исходный products
```

Используй копию через spread.

Выведи отсортированные товары в блок Sorted products.

## Шаг 19. Использовать sort по названию

Создай копию массива и отсортируй по названию через `localeCompare`.

Проверь результат в консоли.

## Шаг 20. Создать cartItems

Создай массив `cartItems`.

Каждый элемент:

```text
productId
name
price
quantity
```

Добавь 2–3 позиции.

## Шаг 21. Посчитать cart total

Создай `let total = 0`.

Пройди по `cartItems` через `forEach`.

Для каждого элемента добавь:

```text
item.price * item.quantity
```

Выведи total на страницу.

## Шаг 22. Создать функцию-фильтр через замыкание

Создай функцию:

```text
createCategoryFilter
```

Она принимает `category` и возвращает функцию, которая проверяет товар.

Логика:

```text
createCategoryFilter('Soups')
→ возвращает функцию
→ эта функция проверяет product.category === 'Soups'
```

## Шаг 23. Использовать замыкание

Создай:

```text
isSoup
```

через `createCategoryFilter('Soups')`.

Потом используй:

```text
products.filter(isSoup)
```

Выведи результат в блок Closure result.

## Шаг 24. Проверить в браузере

Проверь:

- количество товаров отображается;
- категории отображаются;
- названия товаров отображаются;
- фильтр по Soups работает;
- find по id работает;
- sort по цене работает;
- cart total считается;
- closure filter работает;
- в консоли нет неожиданных ошибок.

## Шаг 25. Убрать лишние console.log

Перед коммитом можно оставить только полезные `console.log` или убрать всё лишнее.

## Усложнение

Если основная задача готова:

1. Добавь фильтр по `spicy`.
2. Добавь фильтр `hasNuts === false`.
3. Добавь сортировку по убыванию цены.
4. Добавь функцию `getAveragePrice(products)`.
5. Добавь функцию `getProductsByCategory(products, category)`.
6. Добавь функцию `findProductByName(products, name)`.
7. Добавь проверку, что `find` может вернуть `undefined`.
