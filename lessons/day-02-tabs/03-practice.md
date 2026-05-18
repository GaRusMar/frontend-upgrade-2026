# Day 02: Практика — Tabs

## Перед стартом

Открой `index.html` в браузере и проверь, что на странице есть:

- 3 кнопки вкладок;
- 3 панели с контентом;
- одна активная кнопка;
- одна активная панель.

Потом открой `script.js`.

---

## Шаг 1. Найти все кнопки

Найди все кнопки вкладок:

```js
const tabButtons = document.querySelectorAll('.tabs__button')
```

Проверь себя через `console.log`:

```js
console.log(tabButtons)
```

Ты должен увидеть список кнопок.

---

## Шаг 2. Найти все панели

Найди все панели:

```js
const tabPanels = document.querySelectorAll('.tabs__panel')
```

Проверь через `console.log`.

---

## Шаг 3. Пройтись по всем кнопкам

Используй `forEach`:

```js
tabButtons.forEach((button) => {
  console.log(button)
})
```

Проверь, что в консоли выводятся все кнопки.

---

## Шаг 4. Добавить обработчик клика

Внутри `forEach` добавь обработчик:

```js
tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    console.log('click')
  })
})
```

Проверь: при клике по каждой вкладке в консоли должен появляться `click`.

---

## Шаг 5. Получить нажатую кнопку

Замени обработчик так, чтобы получить кнопку через `event.currentTarget`.

Подсказка:

```js
button.addEventListener('click', (event) => {
  const clickedButton = event.currentTarget
})
```

Проверь через `console.log(clickedButton)`.

---

## Шаг 6. Получить имя вкладки

У кнопки должен быть `data-tab`.

Пример:

```html
<button class="tabs__button" data-tab="html">HTML</button>
```

В JS получи значение:

```js
const tabName = clickedButton.dataset.tab
```

Проверь через `console.log(tabName)`.

---

## Шаг 7. Удалить активный класс у всех кнопок

Перед добавлением нового активного класса нужно очистить старые.

Подсказка:

```js
tabButtons.forEach((button) => {
  button.classList.remove('tabs__button--active')
})
```

---

## Шаг 8. Удалить активный класс у всех панелей

То же самое для панелей:

```js
tabPanels.forEach((panel) => {
  panel.classList.remove('tabs__panel--active')
})
```

---

## Шаг 9. Сделать нажатую кнопку активной

После очистки добавь active-класс на нажатую кнопку:

```js
clickedButton.classList.add('tabs__button--active')
```

Проверь: активный стиль должен переходить на выбранную кнопку.

---

## Шаг 10. Найти нужную панель

Найди панель по `data-tab-panel`.

Подсказка:

```js
const activePanel = document.querySelector(`[data-tab-panel="${tabName}"]`)
```

Проверь через `console.log(activePanel)`.

---

## Шаг 11. Показать нужную панель

Добавь active-класс нужной панели:

```js
activePanel.classList.add('tabs__panel--active')
```

Проверь:

- при клике на `HTML` виден HTML-контент;
- при клике на `CSS` виден CSS-контент;
- при клике на `JavaScript` виден JavaScript-контент.

---

## Шаг 12. Убрать временные console.log

Когда всё работает, удали временные `console.log`.

---

## Шаг 13. Проверить в браузере

Проверь:

- клик по каждой вкладке;
- активную кнопку;
- активную панель;
- отсутствие ошибок в Console.

---

## Усложнение

Если основная задача готова, добавь:

- 4-ю вкладку;
- плавную анимацию появления панели через CSS;
- защиту от ошибки, если панель не найдена.

Пример проверки:

```js
if (!activePanel) {
  return
}
```
