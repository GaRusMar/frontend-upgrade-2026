# Day 04 — Теория

## 1. Что такое DOM

DOM — это Document Object Model.

Когда браузер загружает HTML, он превращает его в дерево объектов.

HTML:

```html
<body>
  <h1>Bangkok Express</h1>
  <ul>
    <li>Soups</li>
    <li>Salads</li>
  </ul>
</body>
```

Браузер видит это как структуру объектов:

```text
document
  html
    body
      h1
      ul
        li
        li
```

JavaScript может обращаться к этим объектам и менять страницу.

## 2. document

`document` — это главный объект страницы.

Через него мы ищем элементы:

```js
const title = document.querySelector('h1')
```

Создаём элементы:

```js
const item = document.createElement('li')
```

И работаем со страницей.

## 3. Поиск одного элемента: querySelector

`querySelector` ищет первый элемент по CSS-селектору.

```js
const productsList = document.querySelector('.products')
```

Если элемент найден, вернётся DOM-элемент.

Если не найден, вернётся `null`.

Поэтому если в консоли ошибка:

```text
Cannot read properties of null
```

часто причина — неправильный селектор или элемента нет в HTML.

## 4. Поиск нескольких элементов: querySelectorAll

`querySelectorAll` ищет все подходящие элементы.

```js
const cards = document.querySelectorAll('.product-card')
```

Результат похож на массив, но это `NodeList`.

По нему можно пройтись через `forEach`.

```js
cards.forEach(card => {
  console.log(card)
})
```

## 5. textContent

`textContent` меняет текст внутри элемента.

```js
title.textContent = 'Bangkok Express'
```

Если нужно вывести обычный текст, `textContent` — хороший выбор.

Он не превращает строку в HTML, а значит безопаснее для пользовательских данных.

## 6. innerHTML

`innerHTML` позволяет вставить HTML-строку.

```js
element.innerHTML = '<strong>Hello</strong>'
```

Но с пользовательскими данными это опасно.

Если вставить в `innerHTML` текст от пользователя, можно получить XSS-уязвимость.

На старте правило простое:

```text
для обычного текста используй textContent
innerHTML используй только если точно понимаешь, зачем
```

## 7. createElement

`createElement` создаёт новый DOM-элемент.

```js
const card = document.createElement('article')
```

Элемент создан, но ещё не находится на странице.

Чтобы показать его пользователю, нужно вставить его в DOM.

## 8. append

`append` добавляет элемент внутрь другого элемента, в конец.

```js
productsList.append(card)
```

Пример:

```js
const li = document.createElement('li')
li.textContent = 'Tom yam kai'

categoriesList.append(li)
```

## 9. prepend

`prepend` добавляет элемент в начало контейнера.

```js
productsList.prepend(card)
```

Используется реже, но полезно, когда новый элемент должен появиться сверху.

## 10. replaceChildren

`replaceChildren` заменяет содержимое контейнера.

```js
productsList.replaceChildren()
```

Если вызвать без аргументов, контейнер очистится.

Можно использовать перед повторной отрисовкой:

```js
productsList.replaceChildren()
```

Потом снова добавить элементы.

Это лучше, чем постоянно добавлять новые карточки поверх старых.

## 11. Атрибуты

HTML-атрибут:

```html
<img src="image.jpg" alt="Soup">
```

В JavaScript можно поставить атрибут:

```js
image.setAttribute('src', 'image.jpg')
image.setAttribute('alt', 'Soup')
```

Получить атрибут:

```js
image.getAttribute('src')
```

## 12. Свойства

У DOM-элементов есть свойства.

Например, для картинки можно писать:

```js
image.src = 'image.jpg'
image.alt = 'Soup'
```

Для текста:

```js
title.textContent = 'Tom yam kai'
```

На старте можно использовать оба подхода, но важно понимать:

```text
атрибут — то, что в HTML
свойство — то, что в DOM-объекте
```

## 13. dataset

`dataset` позволяет работать с `data-*` атрибутами.

HTML:

```html
<article data-product-id="1"></article>
```

JavaScript:

```js
card.dataset.productId = '1'
```

Это создаст:

```html
data-product-id="1"
```

`dataset` очень полезен для связи DOM-элемента с данными.

Например, карточка товара может хранить id товара.

## 14. classList

`classList` управляет CSS-классами.

Добавить класс:

```js
card.classList.add('product-card')
```

Удалить класс:

```js
card.classList.remove('product-card--featured')
```

Переключить класс:

```js
card.classList.toggle('product-card--active')
```

Проверить класс:

```js
card.classList.contains('product-card--active')
```

## 15. Почему classList лучше, чем className

Можно сделать так:

```js
card.className = 'product-card'
```

Но это перезапишет все классы.

`classList` безопаснее:

```js
card.classList.add('product-card')
```

Он добавляет класс, не ломая остальные.

## 16. Генерация интерфейса из массива

У нас есть массив:

```js
const products = [
  { name: 'Penang shrimp', price: 16 },
  { name: 'Tom yam kai', price: 7 }
]
```

Нужно получить карточки на странице.

Алгоритм:

```text
1. Найти контейнер
2. Очистить контейнер
3. Пройтись по массиву
4. Для каждого товара создать DOM-элементы
5. Заполнить элементы данными
6. Добавить элементы в карточку
7. Добавить карточку в контейнер
```

## 17. render-функция

Функция, которая показывает данные на странице, часто называется `render`.

```js
function renderProducts(products) {
  // создать карточки товаров
}
```

Главная идея:

```text
данные → render → интерфейс
```

Это основа frontend-мышления.

## 18. Почему нужно очищать контейнер перед render

Если вызвать render два раза и не очистить контейнер, карточки продублируются.

Плохо:

```text
Tom yam kai
Penang shrimp
Tom yam kai
Penang shrimp
```

Поэтому перед render часто делают:

```js
productsList.replaceChildren()
```

или:

```js
productsList.textContent = ''
```

## 19. Пустое состояние

Если массив пустой, нужно показать пользователю сообщение.

```js
if (products.length === 0) {
  emptyElement.textContent = 'No products found'
}
```

Это называется empty state.

В реальных интерфейсах empty state очень важен.

## 20. Featured product

Featured product — выделенный товар.

Например, если у товара есть свойство:

```js
isFeatured: true
```

Можно добавить класс:

```js
card.classList.add('product-card--featured')
```

Так данные влияют на внешний вид.

## 21. DOM и DevTools Elements

Во вкладке Elements можно смотреть реальный DOM.

Там видно:

```text
- какие элементы создал JavaScript
- какие классы добавлены
- какие data-атрибуты появились
- где находится карточка в дереве DOM
```

Если интерфейс не выглядит как ожидается, открой Elements и проверь DOM.

## 22. Console для проверки DOM

Можно выводить элементы в консоль:

```js
console.log(productsList)
console.log(card)
```

Так удобно проверять, найден ли элемент и какие у него свойства.

## 23. Разница между HTML-файлом и DOM

HTML-файл — исходный текст.

DOM — живая структура в браузере.

JavaScript меняет DOM, но не меняет сам HTML-файл на диске.

Если ты создаёшь карточку через JavaScript, она появится в Elements, но не появится в исходном `index.html`.

## 24. Создание карточки товара

Обычно карточка состоит из нескольких элементов:

```text
article
  h3 title
  p category
  p price
  ul badges
```

Пример алгоритма:

```text
создать article
добавить class product-card
создать title
записать product.name
создать price
записать product.price
добавить всё в article
добавить article в productsList
```

## 25. Когда использовать шаблонные строки

Для текста удобно использовать шаблонные строки:

```js
priceElement.textContent = `€${product.price.toFixed(2)}`
```

Это не `innerHTML`, это просто строка для `textContent`.

## 26. Атрибут hidden

Можно скрывать элементы через атрибут `hidden`.

```js
emptyElement.hidden = true
```

Показать:

```js
emptyElement.hidden = false
```

Это удобно для empty state.

## 27. Алгоритм урока

```text
1. Создать products
2. Создать categories
3. Найти DOM-контейнеры
4. Написать formatPrice
5. Написать createProductCard
6. Внутри createProductCard создать article
7. Добавить классы
8. Добавить dataset.productId
9. Создать title/category/price/badges
10. Собрать карточку
11. Написать renderProducts
12. Очистить контейнер
13. Отрисовать карточки
14. Написать renderCategories
15. Отрисовать категории
16. Показать empty state
17. Показать featured product
```

## 28. Частые ошибки

### Ошибка 1. Неправильный селектор

```js
document.querySelector('products-list')
```

Если это класс, нужна точка:

```js
document.querySelector('.products-list')
```

### Ошибка 2. Создать элемент, но не вставить

```js
const card = document.createElement('article')
```

Элемент создан, но не виден.

Нужно:

```js
productsList.append(card)
```

### Ошибка 3. Использовать innerHTML для пользовательского текста

Лучше:

```js
title.textContent = product.name
```

### Ошибка 4. Не очищать контейнер

Повторный render создаст дубли.

### Ошибка 5. Перезаписывать className

```js
card.className = 'active'
```

Можно случайно удалить другие классы.

Лучше:

```js
card.classList.add('active')
```

### Ошибка 6. Забыть, что dataset хранит строки

```js
card.dataset.productId = product.id
```

В DOM это станет строкой.

Если потом нужно число:

```js
Number(card.dataset.productId)
```

## 29. Что важно запомнить

```text
DOM — живая структура страницы
document — вход в DOM
querySelector ищет один элемент
querySelectorAll ищет несколько элементов
createElement создаёт элемент
append вставляет элемент
textContent безопасно меняет текст
dataset связывает DOM с данными
classList управляет классами
render превращает данные в интерфейс
```
