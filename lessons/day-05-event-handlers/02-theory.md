# Day 05 — Теория

## 1. Что такое событие

Событие — это действие, которое происходит на странице: `click`, `input`, `submit`, `keydown`, `scroll`.

Когда пользователь нажимает кнопку, происходит событие `click`. JavaScript может реагировать на это действие.

## 2. addEventListener

```js
button.addEventListener('click', () => {
  console.log('Button clicked')
})
```

Смысл: когда на `button` произойдёт `click`, выполни функцию.

## 3. Обработчик события

Функция, которая выполняется при событии, называется обработчиком.

```js
function handleClick() {
  console.log('Click')
}

button.addEventListener('click', handleClick)
```

Важно: мы передаём функцию, а не вызываем её.

Неправильно:

```js
button.addEventListener('click', handleClick())
```

## 4. Объект event

Браузер передаёт в обработчик объект события.

```js
button.addEventListener('click', (event) => {
  console.log(event)
})
```

В `event` есть информация о том, где произошло событие.

## 5. event.target

`event.target` — элемент, на котором событие реально произошло.

Если пользователь нажал на `span` внутри кнопки, `target` может быть этим `span`.

## 6. event.currentTarget

`event.currentTarget` — элемент, на котором висит текущий обработчик.

Если обработчик висит на контейнере, `currentTarget` будет контейнером.

## 7. target vs currentTarget

Если обработчик висит на `button`, а пользователь кликнул по `span` внутри кнопки:

```text
event.target        → span
event.currentTarget → button
```

## 8. preventDefault

Некоторые элементы имеют стандартное поведение: форма отправляется, ссылка переходит по адресу.

```js
event.preventDefault()
```

отменяет стандартное поведение браузера.

## 9. Всплытие событий

Всплытие означает, что событие поднимается от вложенного элемента к родителям.

```text
button → card → container → body → document
```

## 10. Погружение событий

Погружение — обратная фаза: событие идёт сверху вниз к целевому элементу.

```js
element.addEventListener('click', handler, true)
```

На практике чаще используем всплытие.

## 11. Делегирование событий

Делегирование — один обработчик на родителе, который управляет кликами по дочерним элементам.

```js
productsList.addEventListener('click', (event) => {
  const button = event.target.closest('[data-action="add-to-cart"]')

  if (!button) {
    return
  }

  // add to cart
})
```

## 12. Почему делегирование важно

Оно помогает работать с большим количеством элементов, динамически созданными карточками и сложными интерфейсами.

## 13. closest

`closest` ищет ближайшего родителя, который подходит под селектор.

```js
const button = event.target.closest('[data-action="add-to-cart"]')
```

Если подходящего элемента нет, вернётся `null`.

## 14. matches

`matches` проверяет, подходит ли элемент под селектор.

```js
event.target.matches('.category-button')
```

## 15. dataset

`dataset` читает `data-*` атрибуты.

```html
<button data-product-id="3">Add to cart</button>
```

```js
const productId = Number(button.dataset.productId)
```

Важно: значения из `dataset` — строки.

## 16. data-action

`data-action` удобно использовать для поведения.

```html
<button data-action="next">Next</button>
```

```js
const action = button.dataset.action
```

## 17. Поведение через HTML-атрибуты

HTML сообщает, что элемент делает. JavaScript читает `data-action` и выполняет нужную логику.

## 18. classList и active state

```js
button.classList.add('category-button--active')
activeButton.classList.remove('category-button--active')
```

Так интерфейс показывает выбранное состояние.

## 19. Событие → состояние → render

```text
клик по категории
→ selectedCategory меняется
→ renderProducts(filteredProducts)
```

Это базовая схема интерфейса.

## 20. Карусель

Простая карусель хранит текущий индекс.

```js
let currentSlideIndex = 0
```

Next увеличивает индекс, Prev уменьшает. Индекс не должен выходить за границы массива.

## 21. Лог событий

Для обучения полезно выводить действия пользователя в список.

```js
function addEventLog(message) {
  const item = document.createElement('li')
  item.textContent = message
  logList.prepend(item)
}
```

## 22. Отладка событий в DevTools

Проверяй:

```text
console.log(event)
event.target
event.currentTarget
dataset
классы во вкладке Elements
Event Listeners
```

## 23. Частые ошибки

```text
- вызвать обработчик сразу: handleClick()
- путать target и currentTarget
- не проверять результат closest
- забыть, что dataset возвращает строку
- навешивать обработчики на каждую динамическую кнопку вместо делегирования
```

## 24. Что важно запомнить

```text
события делают интерфейс интерактивным
event хранит информацию о событии
target и currentTarget — разные вещи
всплытие позволяет использовать делегирование
data-action помогает описывать поведение в HTML
после события часто нужен render
```
