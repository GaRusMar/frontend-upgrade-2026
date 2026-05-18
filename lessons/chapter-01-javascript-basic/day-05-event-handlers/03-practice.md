# Day 05 — Практика

## Практика: Events Playground

Ты добавляешь интерактивность для будущего проекта **Bangkok Express**.

## Перед стартом

Открой `index.html` в браузере. Проверь, что есть категории, список товаров, cart counter, carousel и event log.

## Шаг 1. Создать массив products

Каждый товар:

```text
id
name
price
category
image
```

Добавь минимум 5 товаров.

## Шаг 2. Создать массив slides

Каждый слайд:

```text
title
description
image
```

## Шаг 3. Найти DOM-элементы

Найди список категорий, контейнер товаров, cart counter, carousel title, description, image, controls и event log.

## Шаг 4. Создать состояние

```text
selectedCategory = 'All'
cartCount = 0
currentSlideIndex = 0
```

## Шаг 5. Создать addEventLog

Функция принимает текст и добавляет его в event log. Новые сообщения лучше добавлять сверху.

## Шаг 6. Создать renderProducts

Функция должна очистить контейнер, отфильтровать товары по `selectedCategory`, создать карточки, добавить кнопку Add to cart и записать `data-product-id`.

## Шаг 7. Создать renderCategories

Функция создаёт кнопки категорий, добавляет `data-category` и active-класс выбранной категории.

## Шаг 8. Создать renderCartCounter

Функция выводит `cartCount` на страницу.

## Шаг 9. Создать renderSlide

Функция показывает текущий слайд по `currentSlideIndex`.

## Шаг 10. Повесить обработчик на categories

Один обработчик на контейнере категорий:

```text
1. Найти кнопку через closest
2. Если кнопки нет — return
3. Прочитать category из dataset
4. Обновить selectedCategory
5. Вызвать renderCategories и renderProducts
6. Добавить сообщение в event log
```

## Шаг 11. Проверить target и currentTarget

Временно выведи:

```js
console.log(event.target)
console.log(event.currentTarget)
```

## Шаг 12. Делегирование на products

Один обработчик на контейнере товаров. Внутри найди `[data-action="add-to-cart"]` через `closest`.

## Шаг 13. Обработать Add to cart

```text
1. Прочитать product id из dataset
2. Преобразовать id в Number
3. Найти товар через find
4. Увеличить cartCount
5. Обновить cart counter
6. Добавить сообщение в event log
```

## Шаг 14. Карусель через data-action

На кнопках карусели:

```text
data-action="prev"
data-action="next"
```

Один обработчик на контейнер controls.

## Шаг 15. Реализовать next / prev

`next` увеличивает индекс. Если индекс вышел за конец массива — становится `0`.

`prev` уменьшает индекс. Если индекс меньше `0` — становится последним индексом.

## Шаг 16. Начальный render

Вызови:

```text
renderCategories()
renderProducts()
renderCartCounter()
renderSlide()
```

## Шаг 17. Проверить сценарии

Проверь: категории фильтруют товары, active-класс меняется, Add to cart увеличивает counter, next/prev переключают слайд, event log заполняется.

## Шаг 18. Проверить DevTools

Проверь `data-category`, `data-product-id`, `data-action`, active-класс.

## Усложнение

1. Добавь кнопку `Clear cart`.
2. Добавь лог `target/currentTarget`.
3. Добавь клавиши ArrowLeft / ArrowRight для карусели.
