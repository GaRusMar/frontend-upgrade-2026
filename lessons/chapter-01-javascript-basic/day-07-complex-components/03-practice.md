# Day 07 — Практика

## Практика: Advanced UI Components

Ты создаёшь сложные UI-компоненты для будущего проекта **Bangkok Express**.

## Шаг 1. Создать products

Создай массив `products`. Каждый товар: `id`, `name`, `category`, `spicy`. Добавь минимум 6 товаров.

## Шаг 2. Создать categories

Создай категории: `All`, `Salads`, `Soups`, `Seafood dishes`, `Chicken dishes`.

## Шаг 3. Найти DOM-элементы

Найди open modal button, modal, modal content, close modal button, ribbon container, spicy range input, spicy value, search input, suggestions list, drag list, drop zone, drag status, scroll log.

## Шаг 4. Создать state

```text
isModalOpen = false
selectedCategory = 'All'
spicyLevel = 0
searchQuery = ''
suggestions = []
activeSuggestionIndex = -1
draggedItemId = null
scrollHandledCount = 0
```

## Шаг 5. Modal

Создай `openModal`, `closeModal`, `renderModal`. Modal показывается/скрывается через `hidden`.

## Шаг 6. Закрытие modal

Закрывай modal по close button, overlay click через `event.target === event.currentTarget`, Escape при открытой modal. Клик внутри content не должен закрывать modal.

## Шаг 7. Ribbon menu

`renderRibbonMenu` очищает контейнер, создаёт кнопки категорий, добавляет `data-category` и active-класс. Один обработчик на контейнере меняет `selectedCategory`.

## Шаг 8. Spicy slider

Range input по событию `input` обновляет `spicyLevel` и текст значения.

## Шаг 9. debounce

Создай `debounce(callback, delay)`. Каждый новый вызов очищает старый timer. Callback выполняется только после паузы.

## Шаг 10. Autocomplete

По input через debounced handler обновляй `searchQuery`, сбрасывай `activeSuggestionIndex`, фильтруй products и вызывай `renderSuggestions`.

## Шаг 11. renderSuggestions

Функция очищает список. Если query пустой — ничего не показывает. Если результатов нет — показывает `No results`. Если результаты есть — показывает подсказки и active-класс.

## Шаг 12. Выбор suggestion

По клику на suggestion записать название товара в input, очистить suggestions, сбросить activeSuggestionIndex.

## Шаг 13. Keyboard navigation

Поддержи `ArrowDown`, `ArrowUp`, `Enter`, `Escape`. Пустые suggestions и Enter без активной подсказки не должны ломать код.

## Шаг 14. Drag preview

На `dragstart` сохрани `draggedItemId`. На `dragover` вызови `preventDefault` и подсвети drop zone. На `dragleave` убери подсветку. На `drop` покажи сообщение. Drop без draggedItemId не должен ломать код.

## Шаг 15. throttle

Создай `throttle(callback, delay)`. Scroll handler должен обновлять `scrollHandledCount` не чаще заданного интервала.

## Шаг 16. Начальный render

Вызови `renderModal()`, `renderRibbonMenu()`, выведи стартовое значение spicyLevel.

## Шаг 17. Проверка

Проверь modal, ribbon, slider, autocomplete, keyboard navigation, drag/drop, throttle и все edge cases.

## Усложнение

Сделай отдельные классы `Modal`, `RibbonMenu`, `Autocomplete`, `Slider`; добавь focus на input после открытия modal; добавь aria-атрибуты; добавь реальную фильтрацию товаров по selectedCategory и spicyLevel.
