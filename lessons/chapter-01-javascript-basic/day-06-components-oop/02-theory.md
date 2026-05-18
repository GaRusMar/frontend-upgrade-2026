# Day 06 — Теория

## 1. Что такое компонент

Компонент — это самостоятельная часть интерфейса.

Примеры компонентов:

```text
карточка товара
корзина
карусель
модальное окно
форма заказа
ленточное меню
```

Компонент обычно отвечает за четыре вещи:

```text
1. свои данные
2. свою разметку
3. свои события
4. своё обновление
```

Например, компонент `ProductCard` отвечает только за карточку товара.

Компонент `Cart` отвечает только за корзину.

Компонент `Carousel` отвечает только за карусель.

## 2. Зачем нужны компоненты

Если весь проект писать в одном файле, очень быстро появляется хаос:

```text
данные товаров
рендер карточек
логика корзины
логика карусели
модалка
форма заказа
валидация
fetch
```

Всё смешивается.

Компонентный подход помогает:

```text
- разделить код на понятные части;
- переиспользовать интерфейс;
- проще искать ошибки;
- проще расширять проект;
- проще переносить код;
- проще готовиться к React.
```

## 3. Компонент без React

React не изобрёл идею компонентов. Компоненты можно делать и на чистом JavaScript.

Пример идеи:

```js
const card = new ProductCard(product)

productsContainer.append(card.element)
```

Смысл:

```text
ProductCard получает данные товара
ProductCard создаёт DOM карточки
внешний код просто вставляет карточку на страницу
```

## 4. Чем компонент отличается от обычной render-функции

Render-функция обычно просто создаёт или обновляет DOM.

```js
function renderProduct(product) {
  // создать карточку
}
```

Компонент хранит больше:

```text
- данные
- DOM-элемент
- методы
- внутренние события
- логику обновления
```

Например:

```js
const card = new ProductCard(product)
```

У `card` может быть:

```text
card.product
card.element
card.render()
card.destroy()
```

## 5. Что такое класс

Класс — это шаблон для создания объектов.

```js
class ProductCard {
  constructor(product) {
    this.product = product
  }
}
```

Класс сам по себе ещё не карточка.

Он описывает, как создавать карточки.

## 6. Что такое экземпляр класса

Экземпляр — это конкретный объект, созданный по классу.

```js
const firstCard = new ProductCard(firstProduct)
const secondCard = new ProductCard(secondProduct)
```

`firstCard` и `secondCard` созданы по одному классу, но хранят разные товары.

## 7. Оператор new

`new` создаёт новый экземпляр класса.

```js
const card = new ProductCard(product)
```

Когда используется `new`, JavaScript:

```text
1. создаёт новый объект;
2. привязывает this к этому объекту;
3. вызывает constructor;
4. возвращает созданный экземпляр.
```

На практике важно запомнить:

```text
class описывает шаблон
new создаёт конкретный экземпляр
```

## 8. constructor

`constructor` — специальный метод класса.

Он запускается автоматически при создании экземпляра.

```js
class ProductCard {
  constructor(product) {
    this.product = product
  }
}
```

Когда мы пишем:

```js
const card = new ProductCard(product)
```

вызывается `constructor(product)`.

## 9. this в классе

`this` внутри класса указывает на конкретный экземпляр.

```js
class ProductCard {
  constructor(product) {
    this.product = product
  }

  getTitle() {
    return this.product.name
  }
}
```

Если вызвать:

```js
card.getTitle()
```

то `this` внутри `getTitle` — это `card`.

## 10. Свойства экземпляра

Свойства экземпляра записываются через `this`.

```js
this.product = product
this.element = document.createElement('article')
```

Это значит:

```text
у каждого экземпляра ProductCard будет свой product
у каждого экземпляра ProductCard будет свой element
```

## 11. Метод класса

Метод — это функция внутри класса.

```js
class Cart {
  addItem(product) {
    // добавить товар
  }

  getTotal() {
    // посчитать сумму
  }

  render() {
    // обновить DOM
  }
}
```

Методы описывают поведение компонента.

## 12. Корневой DOM-элемент компонента

Компоненту удобно иметь главный DOM-элемент.

```js
this.element = document.createElement('article')
```

Этот элемент называют root element.

Потом внешний код может сделать:

```js
productsContainer.append(card.element)
```

Внешнему коду не нужно знать, из каких внутренних элементов состоит карточка.

## 13. Метод render

`render` создаёт или обновляет интерфейс компонента.

```js
render() {
  this.element.textContent = this.product.name
}
```

Более реалистично:

```text
render создаёт title
render создаёт price
render создаёт category
render создаёт button
render добавляет элементы в this.element
```

Главная схема:

```text
данные компонента → render → DOM компонента
```

## 14. Почему render лучше делать методом

Если `render` — метод компонента, он имеет доступ к данным через `this`.

```js
this.product
this.items
this.currentIndex
```

Компонент сам знает, как себя отрисовать.

Это лучше, чем держать всю отрисовку в одном огромном внешнем файле.

## 15. ProductCard

`ProductCard` — компонент карточки товара.

Он должен:

```text
- хранить product;
- создать DOM карточки;
- показать name;
- показать category;
- показать price;
- создать кнопку Add to cart;
- сообщить наружу, что товар добавлен.
```

Важно: `ProductCard` не должен сам менять корзину.

Он не должен знать, как устроен `Cart`.

## 16. Почему ProductCard не должен напрямую менять Cart

Плохо:

```text
ProductCard получает cart
ProductCard вызывает cart.addItem()
ProductCard знает слишком много о Cart
```

Так компоненты становятся сильно связаны.

Если потом изменить Cart, придётся менять ProductCard.

Лучше:

```text
ProductCard сообщает: “товар добавлен”
внешний код или Cart слушает событие
Cart сам решает, как обновиться
```

Это называется слабая связанность.

## 17. Cart

`Cart` — компонент корзины.

Он должен:

```text
- хранить items;
- добавлять товар;
- увеличивать quantity, если товар уже есть;
- считать total;
- показывать список товаров;
- показывать итоговую сумму;
- обновляться через render.
```

Корзина отвечает только за корзину.

## 18. Cart item

Обычно в корзине товар хранится не просто как product.

У позиции корзины есть quantity.

Пример:

```js
{
  product: product,
  quantity: 2
}
```

Или:

```js
{
  id: product.id,
  name: product.name,
  price: product.price,
  quantity: 2
}
```

Оба варианта возможны. Для учебного проекта проще второй.

## 19. getTotal

Метод `getTotal` считает сумму корзины.

Логика:

```text
total = сумма price * quantity по всем items
```

Через `forEach`:

```js
let total = 0

this.items.forEach(item => {
  total = total + item.price * item.quantity
})
```

Позже можно использовать `reduce`, но сейчас `forEach` проще.

## 20. Carousel

`Carousel` — компонент карусели.

Он должен:

```text
- хранить slides;
- хранить currentIndex;
- показывать текущий слайд;
- переключать next;
- переключать prev;
- обновлять DOM через render.
```

Состояние карусели:

```js
this.currentIndex = 0
```

## 21. Границы индекса в Carousel

Если нажали next на последнем слайде, нужно вернуться к первому.

```text
если currentIndex больше последнего индекса
currentIndex = 0
```

Если нажали prev на первом слайде, нужно перейти к последнему.

```text
если currentIndex меньше 0
currentIndex = slides.length - 1
```

## 22. Связь компонентов

Компоненты могут общаться разными способами.

В этом уроке используем схему:

```text
ProductCard → CustomEvent → общий контейнер → Cart
```

ProductCard отправляет событие.

Контейнер ловит событие.

Cart обновляется.

## 23. CustomEvent

`CustomEvent` — пользовательское событие.

```js
const event = new CustomEvent('product-add', {
  detail: {
    product: this.product
  }
})
```

Имя события:

```text
product-add
```

Данные события:

```text
detail.product
```

## 24. detail

`detail` — место, куда кладут данные пользовательского события.

```js
detail: {
  product: this.product
}
```

Потом обработчик получит данные так:

```js
event.detail.product
```

## 25. dispatchEvent

`dispatchEvent` отправляет событие из DOM-элемента.

```js
this.element.dispatchEvent(event)
```

Если событие отправлено из карточки, его можно слушать на самой карточке.

Если событие должно дойти до контейнера, нужен `bubbles`.

## 26. bubbles

`bubbles: true` разрешает событию всплывать вверх по DOM.

```js
const event = new CustomEvent('product-add', {
  bubbles: true,
  detail: {
    product: this.product
  }
})
```

Тогда событие можно слушать на общем контейнере:

```js
productsContainer.addEventListener('product-add', (event) => {
  cart.addItem(event.detail.product)
  cart.render()
})
```

Без `bubbles: true` контейнер может не поймать событие, если оно отправлено из внутреннего элемента.

## 27. Почему CustomEvent хорош для компонентов

Компонент не знает, кто его слушает.

`ProductCard` не знает:

```text
есть ли Cart
где находится Cart
как Cart хранит items
как Cart считает total
```

`ProductCard` просто сообщает событие:

```text
product-add
```

Это делает компонент более независимым.

## 28. destroy

Иногда компонент нужно удалить.

Простой метод:

```js
destroy() {
  this.element.remove()
}
```

В больших проектах `destroy` может также снимать обработчики событий и чистить таймеры.

Для этого урока достаточно понимать идею.

## 29. Модули JavaScript

Модуль — отдельный JavaScript-файл.

Вместо одного огромного `script.js` можно сделать:

```text
ProductCard.js
Cart.js
Carousel.js
products.js
formatPrice.js
index.js
```

## 30. export

Чтобы отдать класс из файла:

```js
export class ProductCard {
  // ...
}
```

Или так:

```js
export default ProductCard
```

## 31. import

Чтобы получить класс в другом файле:

```js
import { ProductCard } from './ProductCard.js'
```

Для default export:

```js
import ProductCard from './ProductCard.js'
```

## 32. type="module"

Чтобы браузер понимал `import` и `export`, script подключают как модуль:

```html
<script type="module" src="./index.js"></script>
```

В этом уроке можно писать в одном `script.js`, но нужно понимать, как потом разнести код по модулям.

## 33. Будущая структура Bangkok Express

```text
src/
  components/
    ProductCard/
      ProductCard.js
    Cart/
      Cart.js
    Carousel/
      Carousel.js
  data/
    products.js
    slides.js
  utils/
    formatPrice.js
  index.js
```

Так проект легче поддерживать.

## 34. Как это связано с React

В React тоже есть компоненты.

React-компонент:

```text
получает данные
возвращает интерфейс
может иметь состояние
может реагировать на события
```

В этом уроке мы делаем похожую идею вручную, чтобы понять основу.

## 35. Частые ошибки

### Ошибка 1. Забыть `new`

Неправильно:

```js
const card = ProductCard(product)
```

Правильно:

```js
const card = new ProductCard(product)
```

### Ошибка 2. Не сохранить root element

Если компонент создаёт DOM, удобно хранить:

```js
this.element
```

### Ошибка 3. Потерять `this`

Если метод класса передать как обычный callback, `this` может потеряться.

На старте проще вызывать методы явно:

```js
cart.render()
```

или использовать стрелочную функцию внутри обработчика.

### Ошибка 4. ProductCard напрямую меняет Cart

Это сильная связанность.

Лучше отправить `CustomEvent`.

### Ошибка 5. Не передать данные через `detail`

Если не передать product, Cart не узнает, какой товар добавлять.

### Ошибка 6. Забыть `bubbles: true`

Если событие должно всплыть до общего контейнера, без `bubbles: true` оно может не дойти.

### Ошибка 7. Смешать все компоненты в один класс

Если один класс делает и карточки, и корзину, и карусель — это не компонентный подход.

## 36. Что важно запомнить

```text
компонент — самостоятельная часть интерфейса
class — шаблон
new создаёт экземпляр
constructor задаёт начальные данные
this указывает на экземпляр
render превращает данные в DOM
ProductCard не должен напрямую менять Cart
CustomEvent связывает компоненты слабой связью
detail передаёт данные события
bubbles позволяет событию всплывать
modules помогают разделять код по файлам
```
