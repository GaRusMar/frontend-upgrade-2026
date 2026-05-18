# Day 02 — Теория

## 1. Что такое объект

Объект — это структура данных, которая хранит значения по именам.

Пример:

```js
const product = {
  id: 1,
  name: 'Penang shrimp',
  price: 16,
  category: 'Seafood dishes'
}
```

Здесь:

```text
id       → ключ
1        → значение

name     → ключ
'Penang shrimp' → значение
```

Объект удобно использовать, когда у сущности есть несколько связанных характеристик.

## 2. Объекты во frontend

Во frontend объектами часто описывают данные:

```js
const user = {
  name: 'Ruslan',
  role: 'frontend developer'
}
```

```js
const product = {
  name: 'Tom yam kai',
  price: 7,
  spicy: 3
}
```

```js
const order = {
  customerName: 'Santa Claus',
  phone: '+1234567',
  total: 39
}
```

Для Bangkok Express объект `product` — это одно блюдо.

Объект `cart` — корзина.

Объект `order` — заказ.

## 3. Object literal

Самый частый способ создать объект — литерал объекта.

```js
const product = {
  name: 'Penang shrimp',
  price: 16
}
```

Фигурные скобки создают объект.

Внутри — пары `ключ: значение`.

## 4. Чтение свойств через точку

Если имя свойства известно заранее, читаем через точку:

```js
product.name
product.price
```

Пример:

```js
console.log(product.name)
```

## 5. Чтение свойств через квадратные скобки

Если имя свойства хранится в переменной, нужны квадратные скобки.

```js
const propertyName = 'price'

console.log(product[propertyName])
```

Это полезно, когда свойство выбирается динамически.

## 6. Запись свойства

Можно изменить существующее свойство:

```js
product.price = 18
```

Можно добавить новое свойство:

```js
product.isAvailable = true
```

После этого объект станет таким:

```js
{
  name: 'Penang shrimp',
  price: 18,
  isAvailable: true
}
```

## 7. Удаление свойства

Свойство можно удалить через `delete`.

```js
delete product.isAvailable
```

Но в реальных проектах часто лучше не удалять свойства без необходимости. Иногда безопаснее поставить значение:

```js
product.isAvailable = false
```

## 8. Перебор свойств через for...in

`for...in` позволяет пройти по ключам объекта.

```js
for (const key in product) {
  console.log(key)
  console.log(product[key])
}
```

Почему `product[key]`, а не `product.key`?

Потому что `key` — это переменная.

Если написать:

```js
product.key
```

JavaScript будет искать свойство с буквальным названием `key`.

## 9. Object.keys()

`Object.keys()` возвращает массив ключей объекта.

```js
Object.keys(product)
```

Результат:

```js
['name', 'price']
```

## 10. Object.values()

`Object.values()` возвращает массив значений объекта.

```js
Object.values(product)
```

Результат:

```js
['Penang shrimp', 16]
```

## 11. Object.entries()

`Object.entries()` возвращает массив пар `[key, value]`.

```js
Object.entries(product)
```

Результат:

```js
[
  ['name', 'Penang shrimp'],
  ['price', 16]
]
```

Это удобно для вывода характеристик товара.

## 12. Примитивы и объекты

Примитивы:

```text
string
number
boolean
null
undefined
symbol
bigint
```

Объект — не примитив.

Главное отличие: объекты передаются по ссылке.

## 13. Передача объекта по ссылке

Пример:

```js
const product = {
  name: 'Penang shrimp',
  price: 16
}

const sameProduct = product

sameProduct.price = 20

console.log(product.price) // 20
```

Почему `product.price` тоже изменился?

Потому что `product` и `sameProduct` ссылаются на один и тот же объект.

Это очень важная особенность.

## 14. Почему ссылка может быть опасной

Представь, что ты хочешь сделать черновик товара, но случайно меняешь оригинал.

```js
const originalProduct = {
  name: 'Tom yam kai',
  price: 7
}

const draftProduct = originalProduct

draftProduct.price = 10
```

Теперь `originalProduct.price` тоже стал `10`.

Это может привести к багам.

## 15. Копирование объекта через spread

Чтобы сделать поверхностную копию объекта:

```js
const copiedProduct = {
  ...originalProduct
}
```

Теперь:

```js
copiedProduct.price = 10
```

не изменит `originalProduct.price`.

## 16. Поверхностная копия

Spread делает поверхностную копию.

Это значит: верхние свойства копируются, но вложенные объекты всё ещё могут остаться ссылками.

Пример:

```js
const product = {
  name: 'Soup',
  nutrition: {
    calories: 200
  }
}

const copy = {
  ...product
}

copy.nutrition.calories = 300
```

В этом случае `product.nutrition.calories` тоже изменится.

Для первого этапа важно понимать хотя бы это:

```text
spread хорошо копирует простой объект без вложенных объектов
```

## 17. Метод объекта

Метод — это функция внутри объекта.

```js
const cart = {
  total: 0,

  getTotal() {
    return this.total
  }
}
```

`getTotal` — метод объекта `cart`.

## 18. this

`this` внутри метода обычно указывает на объект, который вызвал метод.

```js
const cart = {
  total: 20,

  getTotal() {
    return this.total
  }
}

cart.getTotal()
```

Здесь `this` — это `cart`.

Значит:

```js
this.total
```

это то же самое, что:

```js
cart.total
```

## 19. Почему this нужен

Без `this` метод был бы менее универсальным.

Плохо:

```js
const cart = {
  total: 20,

  getTotal() {
    return cart.total
  }
}
```

Лучше:

```js
const cart = {
  total: 20,

  getTotal() {
    return this.total
  }
}
```

Так метод работает как часть объекта.

## 20. Важно про стрелочные функции и this

Для методов объекта на старте лучше использовать обычный синтаксис:

```js
getTotal() {
  return this.total
}
```

Не так:

```js
getTotal: () => {
  return this.total
}
```

У стрелочных функций нет собственного `this`, поэтому они часто ломают методы объекта.

Подробно стрелочные функции будут в теме “Массивы и Функции”.

## 21. Объект cart

Корзина может быть объектом:

```js
const cart = {
  itemName: 'Penang shrimp',
  quantity: 2,
  price: 16,

  getTotal() {
    return this.quantity * this.price
  }
}
```

Вызов:

```js
cart.getTotal()
```

Результат:

```text
32
```

## 22. Деструктуризация объекта

Деструктуризация позволяет достать свойства объекта в переменные.

```js
const product = {
  name: 'Penang shrimp',
  price: 16
}

const { name, price } = product
```

Теперь можно использовать:

```js
console.log(name)
console.log(price)
```

Это короче, чем:

```js
const name = product.name
const price = product.price
```

## 23. Переименование при деструктуризации

Можно достать свойство в переменную с другим именем.

```js
const { name: productName } = product
```

Теперь есть переменная:

```js
productName
```

## 24. Значение по умолчанию

Если свойства нет, можно задать значение по умолчанию.

```js
const { spicy = 0 } = product
```

Если `product.spicy` нет, переменная `spicy` будет равна `0`.

## 25. Деструктуризация массива

Массив тоже можно деструктурировать.

```js
const categories = ['Salads', 'Soups', 'Seafood dishes']

const [firstCategory, secondCategory] = categories
```

Теперь:

```js
firstCategory  // 'Salads'
secondCategory // 'Soups'
```

## 26. Деструктуризация в frontend

Деструктуризация часто встречается в React:

```js
function ProductCard({ name, price }) {
  // ...
}
```

Но сначала нужно понять её на обычных объектах.

## 27. Вывод объекта на страницу

Чтобы показать объект на странице, не нужно просто писать:

```js
element.textContent = product
```

Результат будет:

```text
[object Object]
```

Нужно выводить конкретные свойства:

```js
nameElement.textContent = product.name
priceElement.textContent = product.price
```

## 28. Алгоритм урока

```text
1. Создать product
2. Прочитать свойства product
3. Изменить свойство product
4. Добавить новое свойство
5. Удалить свойство
6. Перебрать свойства
7. Показать свойства на странице
8. Создать ссылку на объект и увидеть мутацию
9. Создать копию объекта и увидеть отличие
10. Создать cart с методами
11. Использовать this
12. Создать order
13. Использовать деструктуризацию
14. Вывести summary
```

## 29. Частые ошибки

### Ошибка 1. Путать объект и строку

Неправильно:

```js
const product = 'Penang shrimp'
```

Так мы храним только название.

Лучше:

```js
const product = {
  name: 'Penang shrimp',
  price: 16
}
```

### Ошибка 2. Использовать точку вместо квадратных скобок

Неправильно:

```js
const key = 'price'
product.key
```

Правильно:

```js
product[key]
```

### Ошибка 3. Случайно изменить оригинальный объект

```js
const copy = product
copy.price = 20
```

Это не копия. Это ещё одна ссылка.

### Ошибка 4. Использовать стрелочную функцию как метод

Неправильно:

```js
getTotal: () => this.price * this.quantity
```

Лучше:

```js
getTotal() {
  return this.price * this.quantity
}
```

### Ошибка 5. Выводить весь объект через textContent

```js
element.textContent = product
```

Результат:

```text
[object Object]
```

Нужно выводить свойства.

## 30. Что важно запомнить

```text
объект хранит связанные данные
свойства читаются через точку или []
объекты передаются по ссылке
spread делает поверхностную копию
метод — функция внутри объекта
this внутри метода указывает на объект
деструктуризация достаёт свойства в переменные
```
