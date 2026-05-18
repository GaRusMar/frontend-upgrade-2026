# Day 02 — Практика

## Практика: Product / Cart / Order Objects

Ты создаёшь модели данных для будущего проекта **Bangkok Express**.

В этом уроке не нужно делать сложный интерфейс. Главная цель — научиться уверенно работать с объектами.

## Перед стартом

Открой `index.html` в браузере.

Проверь, что на странице есть:

- блок Product;
- блок Product properties;
- блок Cart;
- блок Order summary;
- блок Debug notes.

Открой DevTools Console.

## Шаг 1. Создать объект product

В `script.js` создай объект `product`.

Минимальные свойства:

```text
id
name
price
category
spicy
hasNuts
isVegetarian
```

Пример значений:

```text
name: Penang shrimp
price: 16
category: Seafood dishes
spicy: 3
hasNuts: false
isVegetarian: false
```

## Шаг 2. Вывести product в консоль

Используй:

```js
console.log(product)
```

Открой Console и посмотри структуру объекта.

## Шаг 3. Найти DOM-элементы

Найди элементы для вывода:

- названия товара;
- цены;
- категории;
- остроты;
- nuts status;
- vegetarian status.

## Шаг 4. Прочитать свойства через точку

Выведи на страницу:

```text
product.name
product.price
product.category
```

Используй `textContent`.

## Шаг 5. Прочитать свойство через квадратные скобки

Создай переменную:

```js
const priceKey = 'price'
```

Получить цену нужно через:

```js
product[priceKey]
```

Выведи это значение в консоль.

## Шаг 6. Изменить свойство объекта

Измени цену товара:

```text
price: 18
```

После изменения снова обнови отображение цены на странице.

## Шаг 7. Добавить новое свойство

Добавь свойство:

```text
currency: '€'
```

Используй это свойство при выводе цены:

```text
€18.00
```

## Шаг 8. Удалить лишнее свойство

Добавь временное свойство:

```text
temporaryNote
```

Потом удали его через `delete`.

Проверь объект в консоли.

## Шаг 9. Перебрать свойства product

Найди список `Product properties`.

Через `for...in` выведи свойства товара в список.

Формат:

```text
name: Penang shrimp
price: 18
category: Seafood dishes
```

## Шаг 10. Попробовать Object.keys

Выведи в консоль:

```js
Object.keys(product)
```

## Шаг 11. Попробовать Object.values

Выведи в консоль:

```js
Object.values(product)
```

## Шаг 12. Попробовать Object.entries

Выведи в консоль:

```js
Object.entries(product)
```

## Шаг 13. Показать передачу по ссылке

Создай:

```js
const sameProduct = product
```

Измени цену у `sameProduct`.

Проверь, что цена у `product` тоже изменилась.

Добавь заметку в Debug notes:

```text
sameProduct changes original product because objects are passed by reference
```

## Шаг 14. Сделать копию объекта

Создай копию:

```js
const copiedProduct = {
  ...product
}
```

Измени цену у `copiedProduct`.

Проверь, что `product.price` не изменился.

Добавь заметку в Debug notes:

```text
copiedProduct does not change original product because spread created a copy
```

## Шаг 15. Создать объект cart

Создай объект `cart`.

Свойства:

```text
itemName
price
quantity
```

Методы:

```text
increase()
decrease()
getTotal()
```

Правила:

```text
increase увеличивает quantity на 1
decrease уменьшает quantity на 1, но не ниже 1
getTotal возвращает price * quantity
```

Важно: методы должны использовать `this`.

## Шаг 16. Вывести cart на страницу

Покажи:

```text
item name
quantity
total
```

## Шаг 17. Проверить методы cart

Временно вызови:

```js
cart.increase()
cart.increase()
cart.decrease()
```

Проверь итоговое количество и total.

## Шаг 18. Использовать деструктуризацию объекта

Достань из `product`:

```text
name
price
category
```

через деструктуризацию.

Выведи эти значения в консоль.

## Шаг 19. Использовать переименование

Достань `name` как `productName`.

```js
const { name: productName } = product
```

Выведи `productName` в консоль.

## Шаг 20. Использовать значение по умолчанию

Достань `description` со значением по умолчанию:

```text
No description yet
```

Проверь результат в консоли.

## Шаг 21. Использовать деструктуризацию массива

Создай массив категорий:

```text
Salads
Soups
Seafood dishes
```

Достань первую и вторую категории через деструктуризацию массива.

## Шаг 22. Создать объект order

Создай объект `order`.

Свойства:

```text
customerName
phone
address
product
cart
```

## Шаг 23. Вывести Order summary

На страницу выведи:

```text
Customer
Phone
Address
Product
Quantity
Total
```

Используй данные из `order`.

## Шаг 24. Проверить в браузере

Проверь:

- данные товара отображаются;
- цена обновляется;
- свойства товара выводятся списком;
- cart total считается;
- quantity не падает ниже 1;
- order summary отображается;
- в консоли нет неожиданных ошибок.

## Шаг 25. Убрать лишние console.log

Перед коммитом можно оставить только полезные `console.log` или убрать всё лишнее.

## Усложнение

Если основная задача готова:

1. Добавь метод `cart.reset()`.
2. Добавь метод `cart.setQuantity(value)`.
3. Добавь объект `customer`.
4. Сделай функцию `renderProduct(product)`.
5. Сделай функцию `renderCart(cart)`.
6. Сделай функцию `renderOrder(order)`.
7. Добавь форматирование цены через `toFixed(2)`.
