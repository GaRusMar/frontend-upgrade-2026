# Day 02: Теория — Tabs

## 1. Зачем нужны вкладки

Вкладки — это интерфейс, где пользователь выбирает один раздел, а остальные разделы скрываются.

Примеры:

- вкладки в настройках профиля;
- переключение тарифов;
- блок “Описание / Характеристики / Отзывы”;
- секции на лендинге;
- кабинет пользователя.

Главная идея:

```text
клик по кнопке → определить нужный контент → показать его → скрыть остальные
```

---

## 2. querySelectorAll

В Day 01 мы использовали `querySelector`, чтобы найти один элемент.

```js
const plusButton = document.querySelector('.counter__button--plus')
```

Но во вкладках кнопок несколько. Поэтому нужен `querySelectorAll`.

```js
const tabButtons = document.querySelectorAll('.tabs__button')
```

`querySelectorAll` возвращает не один элемент, а коллекцию элементов.

Например:

```text
[
  button HTML,
  button CSS,
  button JavaScript
]
```

Важно:

- `querySelector` ищет первый подходящий элемент;
- `querySelectorAll` ищет все подходящие элементы.

---

## 3. NodeList

Результат `querySelectorAll` называется `NodeList`.

С ним можно пройтись через `forEach`:

```js
tabButtons.forEach((button) => {
  console.log(button)
})
```

Это значит:

```text
для каждой кнопки из списка tabButtons выполни код
```

---

## 4. forEach

`forEach` нужен, когда нужно выполнить действие для каждого элемента.

Во вкладках это нужно, чтобы повесить обработчик клика на каждую кнопку:

```js
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    // код после клика
  })
})
```

Если кнопок 3, обработчик будет добавлен на каждую из них.

---

## 5. Активный класс

Во вкладках всегда есть активная кнопка и активная панель.

Например:

```html
<button class="tabs__button tabs__button--active">HTML</button>
```

Класс `tabs__button--active` отвечает за внешний вид активной вкладки.

Для панели:

```html
<div class="tabs__panel tabs__panel--active">HTML content</div>
```

Класс `tabs__panel--active` отвечает за показ нужного контента.

---

## 6. Почему нужно сначала удалить active-классы

Если просто добавлять active-класс при клике, активными могут стать сразу несколько вкладок.

Неправильное поведение:

```text
HTML active
CSS active
JavaScript active
```

Правильное поведение:

```text
только одна вкладка active
```

Поэтому алгоритм такой:

```text
1. Удалить active-класс у всех кнопок
2. Удалить active-класс у всех панелей
3. Добавить active-класс выбранной кнопке
4. Добавить active-класс нужной панели
```

---

## 7. data-* атрибуты

`data-*` атрибуты позволяют хранить дополнительную информацию в HTML.

Например:

```html
<button class="tabs__button" data-tab="html">HTML</button>
```

Здесь `data-tab="html"` говорит:

```text
эта кнопка связана с вкладкой html
```

Панель можно сделать так:

```html
<div class="tabs__panel" data-tab-panel="html">
  HTML content
</div>
```

Теперь у кнопки и панели есть общий ключ:

```text
html
```

---

## 8. dataset

В JavaScript `data-*` атрибуты читаются через `dataset`.

```js
const tabName = button.dataset.tab
```

Если в HTML написано:

```html
<button data-tab="html">HTML</button>
```

То в JavaScript:

```js
button.dataset.tab
```

вернёт:

```text
html
```

---

## 9. event.currentTarget

Когда пользователь кликает по кнопке, нам нужно понять, какая именно кнопка была нажата.

В обработчике события есть объект `event`.

```js
button.addEventListener('click', (event) => {
  console.log(event.currentTarget)
})
```

`event.currentTarget` — это элемент, на который мы повесили обработчик.

Для вкладок это удобно:

```js
const clickedButton = event.currentTarget
```

---

## 10. Как найти нужную панель

Когда мы получили имя вкладки:

```js
const tabName = clickedButton.dataset.tab
```

Можно найти нужную панель:

```js
const activePanel = document.querySelector(`[data-tab-panel="${tabName}"]`)
```

Если `tabName` равен `html`, получится поиск:

```js
document.querySelector('[data-tab-panel="html"]')
```

---

## 11. Общий алгоритм вкладок

```text
1. Найти все кнопки вкладок
2. Найти все панели
3. Для каждой кнопки добавить обработчик клика
4. При клике:
   - получить имя вкладки из data-tab
   - удалить active-класс у всех кнопок
   - удалить active-класс у всех панелей
   - добавить active-класс на нажатую кнопку
   - найти нужную панель
   - добавить active-класс на нужную панель
```

---

## 12. Частые ошибки

### Ошибка 1. Использовать querySelector вместо querySelectorAll

Неправильно:

```js
const tabButtons = document.querySelector('.tabs__button')
```

Так найдётся только первая кнопка.

Правильно:

```js
const tabButtons = document.querySelectorAll('.tabs__button')
```

---

### Ошибка 2. Не удалить старые active-классы

Если не удалить старые классы, активными будут несколько вкладок.

---

### Ошибка 3. Перепутать data-tab и data-tab-panel

Кнопка:

```html
<button data-tab="html">
```

Панель:

```html
<div data-tab-panel="html">
```

Если значения разные, связь не сработает.

---

### Ошибка 4. Забыть точку в CSS-селекторе

Неправильно:

```js
document.querySelectorAll('tabs__button')
```

Правильно:

```js
document.querySelectorAll('.tabs__button')
```

---

### Ошибка 5. Пытаться добавить класс на NodeList

Неправильно:

```js
tabButtons.classList.remove('tabs__button--active')
```

`tabButtons` — это список, а не один элемент.

Правильно:

```js
tabButtons.forEach((button) => {
  button.classList.remove('tabs__button--active')
})
```
