# Day 01 — Практика

## Практика: Price / Delivery Calculator

Ты делаешь калькулятор для будущего проекта **Bangkok Express**.

Пользователь вводит:

```text
Dish price
Quantity
Delivery price
Promo code
```

Программа считает:

```text
Items total
Discount
Delivery
Final total
```

## Перед стартом

Открой `index.html` в браузере.

Проверь, что на странице есть:

- поле `Dish price`;
- поле `Quantity`;
- поле `Delivery price`;
- поле `Promo code`;
- кнопка `Calculate`;
- блок результата;
- блок ошибки.

Открой DevTools:

```text
Right click → Inspect → Console
```

## Шаг 1. Найти форму

В `script.js` найди форму:

```js
const form = document.querySelector('.calculator__form')
```

Проверь:

```js
console.log(form)
```

Если в консоли `null`, значит селектор неправильный.

## Шаг 2. Найти input-элементы

Найди:

- input цены блюда;
- input количества;
- input цены доставки;
- input промокода.

Используй классы из HTML.

## Шаг 3. Найти элементы результата

Найди элементы:

- items total;
- discount;
- delivery;
- final total;
- error.

## Шаг 4. Повесить submit

Добавь обработчик на форму:

```js
form.addEventListener('submit', (event) => {
  // код будет здесь
})
```

## Шаг 5. Отменить перезагрузку

Внутри обработчика вызови:

```js
event.preventDefault()
```

Проверь:

- введи любые данные;
- нажми Calculate;
- страница не должна перезагружаться.

## Шаг 6. Получить значения

Внутри submit-обработчика получи значения:

```js
const priceValue = priceInput.value
const quantityValue = quantityInput.value
const deliveryValue = deliveryInput.value
const promoCode = promoInput.value.trim()
```

Добавь временный `console.log`, чтобы увидеть значения.

## Шаг 7. Преобразовать строки в числа

Создай числа:

```js
const dishPrice = Number(priceValue)
const quantity = Number(quantityValue)
const deliveryPrice = Number(deliveryValue)
```

Проверь через `console.log`, что это числа.

## Шаг 8. Очистить старую ошибку

Перед проверками очищай ошибку:

```text
errorElement.textContent = ''
```

Также можно сбрасывать результаты на `—`.

## Шаг 9. Проверить некорректные числа

Проверь:

```text
если dishPrice — NaN
если quantity — NaN
если deliveryPrice — NaN
```

Используй:

```js
Number.isNaN(...)
```

Если ошибка есть:

- показать текст ошибки;
- остановить выполнение через `return`.

## Шаг 10. Проверить отрицательные и нулевые значения

Правила:

```text
dishPrice должен быть больше 0
quantity должен быть больше 0
deliveryPrice не должен быть меньше 0
```

Если данные неправильные — показать ошибку.

## Шаг 11. Посчитать itemsTotal

Формула:

```text
itemsTotal = dishPrice * quantity
```

## Шаг 12. Посчитать скидку

Правило:

```text
если promoCode === "BANGKOK10"
discount = itemsTotal * 0.1
иначе
discount = 0
```

## Шаг 13. Посчитать доставку

Правило:

```text
если itemsTotal >= 30
delivery = 0
иначе
delivery = deliveryPrice
```

## Шаг 14. Посчитать finalTotal

Формула:

```text
finalTotal = itemsTotal - discount + delivery
```

## Шаг 15. Вывести результат

Выведи:

- itemsTotal;
- discount;
- delivery;
- finalTotal.

Используй `textContent`.

## Шаг 16. Форматировать деньги

Для начала можно вывести просто число.

Потом улучши:

```js
finalTotal.toFixed(2)
```

Пример:

```text
€32.00
```

## Шаг 17. Проверить сценарии

Проверь вручную:

### Сценарий 1

```text
Dish price: 16
Quantity: 2
Delivery price: 5
Promo code: пусто
```

Ожидание:

```text
itemsTotal = 32
discount = 0
delivery = 0
finalTotal = 32
```

### Сценарий 2

```text
Dish price: 10
Quantity: 2
Delivery price: 5
Promo code: BANGKOK10
```

Ожидание:

```text
itemsTotal = 20
discount = 2
delivery = 5
finalTotal = 23
```

### Сценарий 3

```text
Dish price: пусто
Quantity: 2
Delivery price: 5
```

Ожидание:

```text
показать ошибку
```

### Сценарий 4

```text
Dish price: 10
Quantity: 0
Delivery price: 5
```

Ожидание:

```text
показать ошибку
```

## Шаг 18. Использовать debugger

Поставь внутри submit:

```js
debugger
```

Открой DevTools → Sources.

Нажми Calculate.

Посмотри:

- какие значения в переменных;
- как выполняются условия;
- какой получается finalTotal.

После проверки убери `debugger`.

## Шаг 19. Убрать лишние console.log

Перед коммитом удали временные `console.log`, если они больше не нужны.

## Усложнение

Если основная задача готова:

1. Добавь промокод `FREEDELIVERY`, который делает доставку бесплатной.
2. Добавь минимальную сумму заказа `10`.
3. Добавь блок `You saved €...`.
4. Добавь класс ошибки на неправильные поля.
5. Добавь кнопку `Reset`.
