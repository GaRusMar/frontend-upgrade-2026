# Day 09 — Практика

## Практика: Async Order Flow

Ты создаёшь асинхронный сценарий загрузки данных для будущего проекта **Bangkok Express**.

## Перед стартом

Открой `index.html`.

Проверь, что есть кнопки:

```text
Event loop demo
Run Promise chain
Run Promise.all
Run Promise.race
Run Promise.allSettled
Run promisification
Run async/await
```

## Шаг 1. Найти DOM-элементы

Найди все кнопки, loading, error, success, results list, event log.

## Шаг 2. Создать state

```text
isLoading = false
errorMessage = ''
successMessage = ''
results = []
```

## Шаг 3. Создать renderState

Функция отображает loading, error, success и results.

## Шаг 4. Создать addLog

Функция добавляет сообщение в event log.

## Шаг 5. Event loop demo

По клику выведи:

```text
sync start
sync end
promise microtask
timeout task
```

## Шаг 6. Создать fakeRequest

Функция принимает:

```text
label
delay
shouldFail
data
```

Возвращает Promise.

Через `setTimeout` делает `resolve(data)` или `reject(Error)`.

## Шаг 7. Promise chain

Сценарий:

```text
load categories
then load products
then load featured product
then render results
catch render error
finally выключить loading
```

## Шаг 8. Promise.all

Параллельно загрузить:

```text
products
categories
deliverySettings
```

Если все успешны — показать результаты.

Если один падает — показать ошибку.

## Шаг 9. Promise.race

Сделай race:

```text
load products
timeout promise
```

Если timeout первый — показать timeout error.

## Шаг 10. Promise.allSettled

Загрузить:

```text
reviews
recommendations
discounts
```

Один Promise должен упасть.

Показать fulfilled и rejected результаты.

## Шаг 11. Callback API

Создай:

```text
legacyLoadOrder(callback)
```

Через setTimeout вызывает callback.

## Шаг 12. Промисификация

Создай:

```text
loadOrderPromisified()
```

Она возвращает Promise и использует `legacyLoadOrder`.

## Шаг 13. Async/await flow

Создай:

```text
async function loadDashboard()
```

Внутри используй:

```text
try
await
Promise.all
catch
finally
```

## Шаг 14. Проверить ошибки

Сделай один fakeRequest с `shouldFail = true`.

Проверь, что ошибка попадает в catch.

## Шаг 15. Проверить finally

Loading должен выключаться и при успехе, и при ошибке.

## Усложнение

1. Добавь random delay.
2. Добавь retry для failed request.
3. Добавь timeout wrapper.
4. Добавь сравнение Promise-chain и async/await в UI.
