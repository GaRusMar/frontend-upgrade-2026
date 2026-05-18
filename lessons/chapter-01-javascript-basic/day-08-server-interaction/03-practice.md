# Day 08 — Практика

## Практика: Products Loader and Order Form

Ты создаёшь экран загрузки товаров и формы заказа для будущего проекта **Bangkok Express**.

## Шаг 1. Найти DOM-элементы

Найди load products button, loading element, load error element, products container, order form, error elements для name/phone/email/address, submit error, submit success, submit button.

## Шаг 2. Создать state

```text
products = []
isLoading = false
loadError = ''
isSubmitting = false
submitError = ''
submitSuccess = ''
```

## Шаг 3. URLs

```text
PRODUCTS_URL = './products.json'
ORDER_URL = 'https://example.com/orders'
```

POST на fake URL может падать. Это нормально: нужно обработать ошибку.

## Шаг 4. Render-функции загрузки

Создай `renderLoading`, `renderLoadError`, `renderProducts`. Если products пустой — покажи empty state.

## Шаг 5. loadProducts

Функция включает loading, очищает ошибку, делает `fetch(PRODUCTS_URL)`, проверяет `response.ok`, получает `response.json()`, записывает products, вызывает render, ловит ошибку и в `finally` выключает loading.

## Шаг 6. Проверка загрузки

Проверь успешную загрузку. Потом временно поставь неправильный URL и проверь error state. Верни правильный URL.

## Шаг 7. FormData

На форму повесь `submit`, вызови `event.preventDefault()`. Создай `getOrderFormData(form)` через `new FormData(form)`. Прочитай `name`, `phone`, `email`, `address`, `comment` и сделай `trim()`.

## Шаг 8. validateOrder

Создай phone regexp и email regexp. `validateOrder` возвращает объект ошибок. Проверки: name не пустой, phone валиден, email валиден, address не пустой, comment необязательный.

## Шаг 9. renderFormErrors

Покажи ошибки рядом с полями. Если ошибки нет — очисти текст ошибки.

## Шаг 10. createOrderPayload

Создай объект: `customer`, `phone`, `email`, `address`, `comment`, `items`, `createdAt`. `createdAt` через `new Date().toISOString()`.

## Шаг 11. renderSubmitState

Показывай `submitError`, `submitSuccess`, блокируй submit button при `isSubmitting`.

## Шаг 12. sendOrder

POST через `fetch`: method `POST`, header `Content-Type: application/json`, body `JSON.stringify(orderPayload)`, проверка `response.ok`.

## Шаг 13. submit flow

В submit handler: очистить submitError/success, получить orderData, validate, render errors, если ошибки есть — stop, создать payload, console.log payload, `isSubmitting = true`, sendOrder, success/reset form или error/keep form, finally `isSubmitting = false`.

## Шаг 14. Проверить сценарии

Проверь пустое имя, имя из пробелов, невалидный phone, невалидный email, пустой address, valid data, ошибка POST, disabled submit, success mock, что форма не очищается при ошибке.

## Усложнение

Добавь mock success через `setTimeout`, переключатель real/mock POST, total заказа, disabled для Load products, retry button после ошибки загрузки, Network debug block.
