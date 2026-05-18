# Day 07 — Теория

## 1. Что такое сложный компонент

Сложный компонент — это часть интерфейса, где есть своё состояние, несколько DOM-элементов, несколько событий, правила поведения, edge cases и обновление интерфейса.

Примеры: модальное окно, ленточное меню, слайдер, автодополнение, drag'n'drop список.

Обычная кнопка обычно имеет один обработчик. Сложный компонент имеет сценарии поведения.

## 2. Состояние сложного компонента

У сложного компонента почти всегда есть состояние:

```text
modal: isModalOpen
ribbon: selectedCategory
slider: spicyLevel
autocomplete: searchQuery, suggestions, activeSuggestionIndex
drag'n'drop: draggedItemId
scroll: scrollHandledCount
```

Базовая схема:

```text
event → изменить state → render → проверить edge cases
```

## 3. Modal window

Modal появляется поверх страницы. У него есть overlay, content, close button и open state.

```js
let isModalOpen = false
```

Открытие: `isModalOpen = true`, затем `renderModal()`. Закрытие: `isModalOpen = false`, затем `renderModal()`.

## 4. renderModal

`renderModal` синхронизирует state и DOM:

```js
modal.hidden = !isModalOpen
```

Главная мысль: state управляет DOM, а не наоборот.

## 5. Закрытие modal

Modal должен закрываться по кнопке, overlay и Escape. Это стандартный UX.

Закрытие по overlay:

```js
if (event.target === event.currentTarget) {
  closeModal()
}
```

Если `target` и `currentTarget` равны, клик был по самому overlay, а не по content.

Закрытие по Escape:

```js
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isModalOpen) {
    closeModal()
  }
})
```

Проверка `isModalOpen` нужна, чтобы Escape при закрытой modal не запускал лишнюю логику.

## 6. Ribbon menu

Ribbon menu — горизонтальное меню категорий. Для Bangkok Express это `All`, `Salads`, `Soups`, `Seafood dishes`, `Chicken dishes`.

Состояние:

```js
let selectedCategory = 'All'
```

При клике меняем `selectedCategory` и перерисовываем меню. Active state показывает выбранную категорию.

## 7. Slider component

Slider выбирает число из диапазона. Для spicy level достаточно:

```html
<input type="range" min="0" max="5">
```

Используй событие `input`, потому что оно срабатывает сразу при движении ползунка.

## 8. Pointer / mouse / touch events

Pointer events объединяют мышь, touch и стилус: `pointerdown`, `pointermove`, `pointerup`.

Mouse events работают только с мышью: `mousedown`, `mousemove`, `mouseup`.

Touch events работают с касанием: `touchstart`, `touchmove`, `touchend`.

Для кастомных слайдеров и drag-интерфейсов pointer events часто удобнее, потому что это один API для разных устройств.

## 9. Пользовательский ввод и нормализация

Search input работает через событие `input`.

Перед поиском строку нужно нормализовать:

```js
const query = searchInput.value.trim().toLowerCase()
```

`trim` убирает пробелы, `toLowerCase` делает поиск нечувствительным к регистру.

## 10. Autocomplete

Autocomplete показывает подсказки во время ввода.

Схема:

```text
input → normalize query → filter products → save suggestions → renderSuggestions
```

Нужно обработать пустой query, no results, выбор мышью, выбор клавиатурой и Escape.

## 11. Пустой query

Пустая строка — отдельный edge case. Если query пустой, suggestions должны быть пустыми. Нельзя показывать все товары просто потому, что пустая строка содержится в любом названии.

## 12. No results

Если query не пустой, но совпадений нет, покажи `No results`. Это лучше, чем пустой список: пользователь понимает, что поиск сработал.

## 13. Keyboard navigation

Для autocomplete нужны клавиши `ArrowDown`, `ArrowUp`, `Enter`, `Escape`.

`activeSuggestionIndex = -1` означает, что ничего не выбрано. ArrowDown увеличивает индекс, ArrowUp уменьшает, Enter выбирает активную подсказку, Escape очищает suggestions.

Проверяй границы массива. ArrowDown при пустых suggestions не должен ломать код.

## 14. debounce

`debounce` откладывает выполнение функции, пока пользователь не перестал часто вызывать событие.

```js
function debounce(callback, delay) {
  let timerId

  return function(...args) {
    clearTimeout(timerId)
    timerId = setTimeout(() => callback(...args), delay)
  }
}
```

Search input лучше делать через debounce, чтобы не запускать фильтрацию/render на каждую букву мгновенно.

## 15. throttle

`throttle` ограничивает частоту выполнения функции.

```js
function throttle(callback, delay) {
  let isWaiting = false

  return function(...args) {
    if (isWaiting) return
    callback(...args)
    isWaiting = true
    setTimeout(() => { isWaiting = false }, delay)
  }
}
```

Scroll происходит очень часто, поэтому scroll handler лучше throttling.

## 16. Debounce vs throttle

```text
debounce ждёт паузу
throttle ограничивает частоту
```

Ориентир:

```text
input/search/autocomplete → debounce
scroll/resize/move → throttle
```

## 17. Drag'n'Drop

Базовые события: `dragstart`, `dragover`, `dragleave`, `drop`.

Чтобы drop сработал, в `dragover` обычно нужен:

```js
event.preventDefault()
```

В этом уроке достаточно drag preview: сохранить `draggedItemId`, подсветить drop zone, показать сообщение после drop.

## 18. Edge cases сложного UI

Проверяй: Escape при закрытой modal, клик внутри modal content, пустой search query, ArrowDown при пустых suggestions, Enter без активной подсказки, drop без draggedItemId, слишком частый scroll handler.

## 19. Что важно запомнить

```text
сложные компоненты имеют состояние
modal должен закрываться несколькими способами
ribbon menu управляет категорией
slider управляет числовым значением
autocomplete работает с input и keyboard events
пустой query — отдельный edge case
debounce подходит для поиска
throttle подходит для scroll
drag'n'drop строится на событиях
edge cases обязательны
```
