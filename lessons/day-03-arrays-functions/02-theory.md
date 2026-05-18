# Day 03 — Теория

## 1. Что такое массив

Массив — это список значений.

```js
const categories = ['Salads', 'Soups', 'Seafood dishes']
```

В массиве можно хранить строки:

```js
const names = ['Penang shrimp', 'Tom yam kai']
```

числа:

```js
const prices = [16, 7, 10]
```

объекты:

```js
const products = [
  { id: 1, name: 'Penang shrimp', price: 16 },
  { id: 2, name: 'Tom yam kai', price: 7 }
]
```

Во frontend чаще всего мы работаем именно с массивами объектов.

## 2. Зачем массивы во frontend

Интерфейс часто показывает список:

```text
товары
категории
пользователи
сообщения
заказы
```

Если есть список карточек товаров, значит в JavaScript обычно есть массив товаров.

```js
const products = [
  { name: 'Penang shrimp', price: 16 },
  { name: 'Tom yam kai', price: 7 }
]
```

Потом из этого массива можно создать интерфейс.

## 3. Индекс массива

У каждого элемента массива есть номер — индекс.

Индексация начинается с нуля.

```js
const categories = ['Salads', 'Soups', 'Seafood dishes']

categories[0] // 'Salads'
categories[1] // 'Soups'
categories[2] // 'Seafood dishes'
```

Частая ошибка новичков — думать, что первый элемент имеет индекс `1`.

На самом деле первый элемент имеет индекс `0`.

## 4. length

`length` показывает количество элементов массива.

```js
categories.length // 3
```

Если массив пустой:

```js
const items = []

items.length // 0
```

## 5. push

`push` добавляет элемент в конец массива.

```js
categories.push('Beef dishes')
```

После этого массив станет длиннее.

Важно: `push` изменяет исходный массив.

## 6. pop

`pop` удаляет последний элемент массива.

```js
categories.pop()
```

`pop` тоже изменяет исходный массив.

Он ещё и возвращает удалённый элемент:

```js
const removedCategory = categories.pop()
```

## 7. Массив объектов

Для Bangkok Express товар — это объект.

А меню — массив таких объектов.

```js
const products = [
  {
    id: 1,
    name: 'Penang shrimp',
    price: 16,
    category: 'Seafood dishes',
    spicy: 3
  },
  {
    id: 2,
    name: 'Tom yam kai',
    price: 7,
    category: 'Soups',
    spicy: 2
  }
]
```

Это очень важная структура:

```text
массив → много элементов
объект → один элемент с характеристиками
массив объектов → список сущностей
```

## 8. Функция

Функция — это блок кода, который можно вызвать по имени.

```js
function formatPrice(price) {
  return `€${price.toFixed(2)}`
}
```

Вызов:

```js
formatPrice(16)
```

Результат:

```text
€16.00
```

Функции нужны, чтобы не повторять код.

## 9. Function Declaration

Function Declaration:

```js
function getProductName(product) {
  return product.name
}
```

Особенность: такую функцию можно вызвать до объявления в коде.

```js
getProductName(product)

function getProductName(product) {
  return product.name
}
```

Это называется hoisting.

На старте не нужно глубоко уходить в механизм. Достаточно знать:

```text
Function Declaration удобно использовать для основных функций
```

## 10. Function Expression

Function Expression — это когда функция записывается в переменную.

```js
const getProductPrice = function(product) {
  return product.price
}
```

Такую функцию нельзя вызвать до строки, где она создана.

```js
getProductPrice(product) // ошибка

const getProductPrice = function(product) {
  return product.price
}
```

## 11. Arrow Function

Стрелочная функция — более короткий синтаксис.

```js
const getProductCategory = (product) => {
  return product.category
}
```

Если тело функции состоит из одного выражения, можно короче:

```js
const getProductCategory = product => product.category
```

Стрелочные функции часто используют в методах массивов.

```js
products.map(product => product.name)
```

## 12. Отличия функций на старте

Для первого уровня запомни так:

```text
Function Declaration — удобно для крупных именованных функций
Function Expression — функция как значение в переменной
Arrow Function — короткая функция, часто для callback
```

Важно: стрелочные функции не имеют собственного `this`.

Для методов объекта в Day 02 мы использовали обычный синтаксис метода.

## 13. return

`return` возвращает результат из функции.

```js
function getTotal(price, quantity) {
  return price * quantity
}
```

Если `return` не написать, функция вернёт `undefined`.

```js
function getTotal(price, quantity) {
  price * quantity
}
```

Это частая ошибка.

## 14. Callback-функция

Callback — это функция, которую мы передаём в другую функцию.

Пример:

```js
function runOperation(callback) {
  callback()
}

runOperation(function() {
  console.log('Hello')
})
```

В методах массивов callback используется постоянно.

```js
products.forEach(function(product) {
  console.log(product.name)
})
```

Здесь функция внутри `forEach` — callback.

## 15. forEach

`forEach` выполняет действие для каждого элемента массива.

```js
products.forEach(product => {
  console.log(product.name)
})
```

`forEach` ничего не возвращает для нового массива.

Он нужен, когда нужно:

```text
- вывести в console.log
- создать DOM-элементы
- посчитать что-то вручную
- выполнить действие для каждого элемента
```

## 16. map

`map` создаёт новый массив на основе старого.

```js
const productNames = products.map(product => product.name)
```

Если `products` — массив товаров, то `productNames` будет массивом названий.

```js
['Penang shrimp', 'Tom yam kai']
```

Главная мысль:

```text
map превращает один массив в другой массив той же длины
```

## 17. filter

`filter` создаёт новый массив только с теми элементами, которые прошли проверку.

```js
const soups = products.filter(product => product.category === 'Soups')
```

Если условие вернуло `true`, элемент попадёт в новый массив.

Если `false`, не попадёт.

Главная мысль:

```text
filter оставляет несколько элементов
```

## 18. find

`find` ищет один элемент.

```js
const product = products.find(product => product.id === 1)
```

Если элемент найден, вернётся объект.

Если не найден, вернётся `undefined`.

Главная мысль:

```text
find возвращает первый подходящий элемент
```

## 19. filter vs find

`filter` возвращает массив:

```js
products.filter(product => product.category === 'Soups')
```

Результат:

```js
[
  { id: 2, name: 'Tom yam kai', category: 'Soups' },
  { id: 3, name: 'Tom kha kai', category: 'Soups' }
]
```

`find` возвращает один элемент:

```js
products.find(product => product.id === 2)
```

Результат:

```js
{ id: 2, name: 'Tom yam kai', category: 'Soups' }
```

## 20. sort

`sort` сортирует массив.

```js
products.sort((a, b) => a.price - b.price)
```

Так сортируем по цене от меньшей к большей.

Важно: `sort` изменяет исходный массив.

Если не хочешь менять оригинал, сначала сделай копию:

```js
const sortedProducts = [...products].sort((a, b) => a.price - b.price)
```

## 21. Сортировка строк

Для строк можно использовать `localeCompare`.

```js
const sortedByName = [...products].sort((a, b) => {
  return a.name.localeCompare(b.name)
})
```

Это пригодится для сортировки названий блюд.

## 22. Расчёт total

Можно считать total через `forEach`.

```js
let total = 0

cartItems.forEach(item => {
  total = total + item.price * item.quantity
})
```

Здесь `total` меняется, поэтому используется `let`.

Позже можно будет использовать `reduce`, но для этого урока достаточно `forEach`.

## 23. Замыкание простыми словами

Замыкание — это когда внутренняя функция помнит переменные из внешней функции.

Пример:

```js
function createCategoryFilter(category) {
  return function(product) {
    return product.category === category
  }
}
```

Использование:

```js
const isSoup = createCategoryFilter('Soups')

const soups = products.filter(isSoup)
```

Функция `isSoup` помнит значение `'Soups'`.

Это и есть простое замыкание.

## 24. Зачем замыкание в реальной практике

Замыкание помогает создавать функции с заранее сохранёнными настройками.

Например:

```js
const isSeafood = createCategoryFilter('Seafood dishes')
const seafoodProducts = products.filter(isSeafood)
```

Мы один раз создали фильтр, потом используем его как обычную функцию.

## 25. Чистая функция

Чистая функция:

```text
- получает данные через параметры
- возвращает результат
- не меняет внешние данные
```

Пример:

```js
function getProductTotal(product, quantity) {
  return product.price * quantity
}
```

Такие функции легче тестировать и понимать.

## 26. Побочные эффекты

Побочный эффект — когда функция меняет что-то снаружи.

Например:

```js
function addProduct(product) {
  products.push(product)
}
```

Она меняет внешний массив `products`.

Это не всегда плохо, но нужно понимать, когда функция меняет данные.

## 27. Вывод массива на страницу

Чтобы вывести массив, нужно пройтись по элементам.

```js
products.forEach(product => {
  const item = document.createElement('li')
  item.textContent = product.name
  list.append(item)
})
```

Это подготовка к DOM-модели, но простую генерацию списка можно использовать уже сейчас.

## 28. Алгоритм урока

```text
1. Создать products
2. Создать categories
3. Проверить length
4. Добавить товар через push
5. Удалить товар через pop
6. Написать Function Declaration
7. Написать Function Expression
8. Написать Arrow Function
9. Использовать forEach
10. Использовать map
11. Использовать filter
12. Использовать find
13. Использовать sort на копии массива
14. Посчитать total
15. Создать функцию-фильтр через замыкание
16. Вывести результаты на страницу
```

## 29. Частые ошибки

### Ошибка 1. Думать, что первый индекс — 1

Неправильно:

```js
products[1] // первый товар
```

Правильно:

```js
products[0] // первый товар
```

### Ошибка 2. Забыть return в map

Неправильно:

```js
const names = products.map(product => {
  product.name
})
```

Правильно:

```js
const names = products.map(product => {
  return product.name
})
```

Или короче:

```js
const names = products.map(product => product.name)
```

### Ошибка 3. Использовать map вместо forEach

Если тебе не нужен новый массив, чаще подходит `forEach`.

### Ошибка 4. Ждать от forEach новый массив

`forEach` не возвращает новый массив.

### Ошибка 5. Использовать filter, когда нужен один элемент

Если нужен один товар по id, лучше `find`.

### Ошибка 6. Не помнить, что sort меняет массив

```js
products.sort(...)
```

изменит `products`.

Для безопасной сортировки:

```js
const sortedProducts = [...products].sort(...)
```

### Ошибка 7. Забыть, что find может вернуть undefined

```js
const product = products.find(product => product.id === 999)

console.log(product.name) // ошибка, если product undefined
```

Нужно проверять:

```js
if (product) {
  console.log(product.name)
}
```

## 30. Что важно запомнить

```text
массив хранит список
индекс начинается с 0
length показывает количество элементов
push/pop изменяют массив
функция возвращает результат через return
callback — функция, переданная в другую функцию
forEach выполняет действие
map создаёт новый массив
filter создаёт массив подходящих элементов
find возвращает один элемент
sort меняет массив
замыкание позволяет функции помнить внешние переменные
```
