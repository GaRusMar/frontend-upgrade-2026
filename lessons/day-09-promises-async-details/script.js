// Day 09 — Promise в деталях, более сложный асинхронный код

// TODO: найти все buttons по data-action

// TODO: найти loading element

// TODO: найти error element

// TODO: найти success element

// TODO: найти results list

// TODO: найти event log

// TODO: создать состояние isLoading

// TODO: создать состояние errorMessage

// TODO: создать состояние successMessage

// TODO: создать состояние results

// TODO: создать функцию renderState()

// TODO: создать функцию addLog(message)

// TODO: создать функцию resetState()

// TODO: создать event loop demo

// TODO: event loop demo должен показать sync start / sync end / promise microtask / timeout task

// TODO: создать функцию fakeRequest(label, delay, shouldFail, data)

// TODO: fakeRequest должна возвращать Promise

// TODO: внутри fakeRequest использовать setTimeout

// TODO: если shouldFail true, вызвать reject с Error

// TODO: иначе вызвать resolve с data

// TODO: создать функцию runPromiseChain()

// TODO: выполнить load categories через fakeRequest

// TODO: затем выполнить load products

// TODO: затем выполнить load featured product

// TODO: использовать then/catch/finally

// TODO: создать функцию runPromiseAll()

// TODO: внутри использовать Promise.all для products/categories/deliverySettings

// TODO: создать функцию createTimeoutPromise(delay)

// TODO: создать функцию runPromiseRace()

// TODO: внутри использовать Promise.race для request vs timeout

// TODO: создать функцию runPromiseAllSettled()

// TODO: внутри использовать Promise.allSettled для reviews/recommendations/discounts

// TODO: один из Promise должен завершиться reject

// TODO: создать callback API legacyLoadOrder(callback)

// TODO: создать функцию loadOrderPromisified()

// TODO: loadOrderPromisified должна возвращать Promise

// TODO: создать функцию runPromisification()

// TODO: создать async function loadDashboard()

// TODO: внутри loadDashboard использовать try/catch/finally

// TODO: внутри try использовать await для categories/products

// TODO: внутри try использовать Promise.all для reviews/recommendations

// TODO: повесить обработчики кликов на buttons по data-action

// TODO: проверить, что loading выключается при успехе и ошибке

// TODO: проверить порядок event loop
