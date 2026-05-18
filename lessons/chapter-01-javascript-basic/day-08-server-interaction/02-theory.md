# Day 08 — Теория

## 1. HTML-форма и submit

Форма собирает пользовательские данные. Событие `submit` происходит на форме при отправке: по кнопке или Enter.

```js
form.addEventListener('submit', (event) => {
  event.preventDefault()
})
```

Submit лучше слушать на форме, а не на кнопке, потому что Enter в input тоже отправляет форму.

## 2. preventDefault

`preventDefault` отменяет стандартную отправку и перезагрузку страницы. Мы говорим браузеру: данные обработает JavaScript.

## 3. form.elements, input.value и name

`form.elements` содержит поля формы. Если у input есть `name`, можно обратиться так:

```js
form.elements.phone.value
```

Без `name` поле не попадёт в `FormData`.

## 4. FormData

```js
const formData = new FormData(form)
const name = formData.get('name')
```

`FormData` удобно использовать, когда полей несколько.

## 5. trim

```js
const name = formData.get('name').trim()
```

`trim` убирает пробелы в начале и конце. Строка из пробелов не должна считаться валидной.

## 6. Валидация

Валидация — проверка данных перед отправкой. Для заказа: name не пустой, phone похож на телефон, email похож на email, address не пустой.

Frontend-валидация нужна для UX. Сервер всё равно должен валидировать данные, потому что frontend можно обойти.

## 7. Объект ошибок

Ошибки удобно хранить объектом:

```js
const errors = { phone: 'Phone is invalid' }
```

Проверка:

```js
Object.keys(errors).length > 0
```

## 8. RegExp

Регулярное выражение — шаблон для проверки строки.

```js
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
emailPattern.test(email)
```

Phone pattern для урока:

```js
const phonePattern = /^\+?[0-9\s-]{7,20}$/
```

## 9. fetch

`fetch` делает сетевой запрос и возвращает Promise, потому что сеть отвечает не сразу.

```js
fetch('./products.json')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
```

## 10. then / catch / finally

`then` выполняется при успехе. `catch` выполняется при ошибке. `finally` выполняется всегда и удобен для выключения loading.

```js
fetch(url)
  .then(...)
  .catch(...)
  .finally(() => { isLoading = false })
```

## 11. response.ok

HTTP-ошибка не всегда попадает в `catch`, поэтому нужно проверять:

```js
if (!response.ok) {
  throw new Error('Failed to load products')
}
```

Без этого можно ошибочно считать плохой HTTP-ответ успешным.

## 12. response.json и JSON

`response.json()` превращает JSON-ответ в JavaScript-данные.

JSON — текстовый формат обмена данными. JavaScript object — структура данных внутри JS. Они похожи, но это не одно и то же.

## 13. GET и POST

GET получает данные:

```js
fetch('./products.json')
```

POST отправляет данные:

```js
fetch('/orders', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify(order)
})
```

## 14. Content-Type и JSON.stringify

`Content-Type: application/json` сообщает серверу, что тело запроса — JSON.

`JSON.stringify(order)` превращает JS object в JSON-строку. Нельзя отправлять обычный объект как JSON body.

## 15. Loading / Error / Success states

Пользователь должен понимать, что происходит:

```text
loading — запрос идёт
error — запрос сломался
success — действие выполнено
```

## 16. isSubmitting

`isSubmitting` показывает, что форма отправляется. Пока `isSubmitting === true`, submit button лучше блокировать, чтобы пользователь не отправил заказ несколько раз.

## 17. Fake URL, POST error и CORS

В учебном проекте `ORDER_URL` может быть фейковым. POST на `https://example.com/orders` может упасть — это нормально. Главное: показать submit error, не очистить форму и вернуть кнопку в активное состояние.

Иногда запрос к чужому домену падает из-за CORS. Для урока достаточно знать: это может быть не ошибка твоей логики.

## 18. Схема загрузки товаров

```text
click Load products
→ isLoading = true
→ loadError = ''
→ fetch products
→ response.ok check
→ response.json()
→ products = data
→ renderProducts()
→ catch error
→ finally isLoading = false
```

## 19. Схема отправки заказа

```text
submit form
→ preventDefault
→ FormData
→ trim values
→ validate
→ if errors: render errors and stop
→ create order payload
→ isSubmitting = true
→ fetch POST
→ if success: show success and reset form
→ if error: show submit error and keep form
→ finally isSubmitting = false
```

## 20. Частые ошибки

Забыть `preventDefault`; забыть `name`; не делать `trim`; не проверять `response.ok`; забыть `response.json`; отправить объект без `JSON.stringify`; не указать `Content-Type`; не показать loading/error; очистить форму при ошибке; не блокировать submit button.
