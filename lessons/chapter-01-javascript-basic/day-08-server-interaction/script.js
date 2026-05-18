// Day 08 — Взаимодействие с сервером

// TODO: найти load products button
// TODO: найти loading element
// TODO: найти load error element
// TODO: найти products container
// TODO: найти order form
// TODO: найти error elements для name, phone, email, address
// TODO: найти submit error element
// TODO: найти submit success element
// TODO: найти submit button
// TODO: создать PRODUCTS_URL
// TODO: создать ORDER_URL
// TODO: создать состояние products
// TODO: создать состояние isLoading
// TODO: создать состояние loadError
// TODO: создать состояние isSubmitting
// TODO: создать состояние submitError
// TODO: создать состояние submitSuccess
// TODO: создать функцию formatPrice(price)
// TODO: создать функцию renderLoading()
// TODO: создать функцию renderLoadError()
// TODO: создать функцию renderProducts()
// TODO: создать функцию loadProducts()
// TODO: внутри loadProducts включить loading, сделать fetch, проверить response.ok, получить response.json, записать products, обработать catch/finally
// TODO: повесить click на load products button
// TODO: создать phone regexp
// TODO: создать email regexp
// TODO: создать функцию getOrderFormData(form) через FormData
// TODO: прочитать name, phone, email, address, comment и применить trim
// TODO: создать функцию validateOrder(orderData)
// TODO: проверить name, phone, email, address
// TODO: создать функцию hasErrors(errors)
// TODO: создать функцию renderFormErrors(errors)
// TODO: создать функцию createOrderPayload(orderData)
// TODO: payload должен содержать customer, phone, email, address, comment, items, createdAt
// TODO: создать функцию renderSubmitState()
// TODO: renderSubmitState должна показывать submitError, submitSuccess и блокировать submit button при isSubmitting
// TODO: создать функцию sendOrder(orderPayload)
// TODO: внутри sendOrder сделать fetch POST с Content-Type application/json и JSON.stringify(orderPayload)
// TODO: проверить response.ok
// TODO: повесить submit на order form
// TODO: внутри submit вызвать event.preventDefault()
// TODO: очистить submitError и submitSuccess перед отправкой
// TODO: прочитать orderData, validateOrder, renderFormErrors
// TODO: если есть ошибки, остановить submit
// TODO: создать orderPayload и вывести в console.log
// TODO: установить isSubmitting = true и вызвать renderSubmitState
// TODO: отправить orderPayload через sendOrder
// TODO: при успехе показать success и очистить form
// TODO: при ошибке показать submit error и НЕ очищать form
// TODO: в finally установить isSubmitting = false и вызвать renderSubmitState
// TODO: проверить все сценарии из 03-practice.md
