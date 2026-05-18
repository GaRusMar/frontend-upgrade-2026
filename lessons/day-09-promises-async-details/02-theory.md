# Day 09 — Теория

## 1. Почему frontend асинхронный

Frontend постоянно ждёт внешние события:

```text
сетевой запрос
таймер
загрузка изображения
действие пользователя
```

Если ждать это синхронно, интерфейс зависнет.

## 2. Синхронный код

```js
console.log('A')
console.log('B')
console.log('C')
```

Результат:

```text
A
B
C
```

Код выполняется сверху вниз.

## 3. Асинхронный код

```js
console.log('A')

setTimeout(() => {
  console.log('B')
}, 0)

console.log('C')
```

Результат:

```text
A
C
B
```

Callback таймера выполняется позже.

## 4. Event loop

Event loop — механизм браузера, который управляет выполнением асинхронного кода.

Упрощённо:

```text
1. выполнить синхронный код
2. выполнить microtasks
3. выполнить tasks
4. обновить интерфейс
5. повторить цикл
```

## 5. Call stack

Call stack — место, где выполняется текущий синхронный код.

Асинхронные callbacks ждут, пока call stack освободится.

## 6. Tasks / macrotasks

Tasks/macrotasks:

```text
setTimeout
setInterval
DOM events
```

## 7. Microtasks

Microtasks:

```text
Promise.then
Promise.catch
Promise.finally
queueMicrotask
```

Microtasks выполняются раньше tasks.

## 8. Порядок event loop

```js
console.log('A')

Promise.resolve().then(() => console.log('B'))

setTimeout(() => console.log('C'), 0)

console.log('D')
```

Результат:

```text
A
D
B
C
```

Потому что `B` — microtask, а `C` — task.

## 9. Что такое Promise

Promise — объект будущего результата асинхронной операции.

```js
const promise = new Promise((resolve, reject) => {
  // async operation
})
```

## 10. Состояния Promise

```text
pending — ожидание
fulfilled — успех
rejected — ошибка
```

Promise меняет состояние только один раз.

## 11. resolve

`resolve` завершает Promise успешно.

```js
new Promise(resolve => {
  resolve('Products loaded')
})
```

Результат попадёт в `then`.

## 12. reject

`reject` завершает Promise ошибкой.

```js
new Promise((resolve, reject) => {
  reject(new Error('Network error'))
})
```

Ошибка попадёт в `catch`.

## 13. then

`then` обрабатывает успешный результат.

```js
loadProducts().then(products => {
  console.log(products)
})
```

## 14. catch

`catch` обрабатывает ошибку.

```js
loadProducts().catch(error => {
  console.log(error.message)
})
```

## 15. finally

`finally` выполняется всегда.

```js
loadProducts()
  .then(...)
  .catch(...)
  .finally(() => {
    isLoading = false
  })
```

Идеально для выключения loading.

## 16. Promise chain

Цепочка Promise нужна для последовательных async операций.

```js
loadCategories()
  .then(categories => {
    return loadProducts(categories)
  })
  .then(products => {
    return loadFeaturedProduct(products)
  })
  .then(featured => {
    renderFeatured(featured)
  })
  .catch(renderError)
```

Каждый следующий `then` ждёт результат предыдущего.

## 17. return внутри then

Если вернуть значение, следующий `then` его получит.

Если вернуть Promise, следующий `then` дождётся его.

Если забыть `return`, следующий `then` получит `undefined`.

## 18. Ошибка внутри then

Если внутри `then` выбросить ошибку:

```js
throw new Error('Failed')
```

цепочка перейдёт в `catch`.

## 19. Promise.all

`Promise.all` ждёт, пока все Promise завершатся успешно.

```js
Promise.all([loadProducts(), loadCategories()])
```

Если один Promise rejected, весь `Promise.all` rejected.

Используется, когда все результаты обязательны.

## 20. Promise.allSettled

`Promise.allSettled` ждёт все Promise независимо от ошибок.

Результаты имеют статус:

```text
fulfilled
rejected
```

Подходит, когда частичные ошибки допустимы.

## 21. Promise.race

`Promise.race` ждёт первый завершившийся Promise.

Полезно для timeout-сценариев:

```text
request vs timeout
```

## 22. Промисификация

Промисификация — превращение callback API в Promise API.

```js
function loadPromisified() {
  return new Promise((resolve, reject) => {
    legacyLoad((error, data) => {
      if (error) {
        reject(error)
        return
      }

      resolve(data)
    })
  })
}
```

## 23. async function

`async function` всегда возвращает Promise.

```js
async function loadData() {
  return 'data'
}
```

## 24. await

`await` ждёт завершения Promise.

```js
async function loadData() {
  const products = await loadProducts()
}
```

`await` можно использовать только внутри `async function`.

## 25. async/await — это Promise

`async/await` — удобный синтаксис поверх Promise.

Promise chain:

```js
loadProducts().then(renderProducts).catch(renderError)
```

async/await:

```js
try {
  const products = await loadProducts()
  renderProducts(products)
} catch (error) {
  renderError(error)
}
```

## 26. try/catch/finally

В async function ошибки ловятся через `try/catch`.

`finally` нужен для cleanup:

```js
try {
  isLoading = true
  const data = await fakeRequest()
} catch (error) {
  errorMessage = error.message
} finally {
  isLoading = false
}
```

## 27. Loading/error/success states

Асинхронный UI почти всегда имеет состояния:

```text
idle
loading
success
error
```

Loading включается перед запросом и выключается в `finally`.

## 28. Частые ошибки

```text
- думать, что then выполняется синхронно
- забыть return внутри then
- не поставить catch
- выключить loading только в then
- использовать Promise.all, когда нужны частичные результаты
- забыть try/catch в async function
- думать, что async/await отменяет Promise
```

## 29. Что важно запомнить

```text
event loop управляет асинхронным кодом
Promise имеет pending/fulfilled/rejected
then — успех
catch — ошибка
finally — всегда
Promise.all — все успешны или ошибка
allSettled — все результаты
race — первый результат
promisification превращает callback API в Promise API
async/await — синтаксис поверх Promise
loading выключается в finally
```
