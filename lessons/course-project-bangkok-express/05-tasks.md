# 05 — Tasks

## Part 1 — Base setup

### Task 1. Проверить HTML

Проверь, что в `index.html` есть:

```text
header
carousel
ribbon menu
filters
products grid
cart button
cart modal
order form
status blocks
```

### Task 2. Найти DOM-элементы

Найди в `script.js` все нужные элементы:

```text
carousel
categories
products
cart button
cart modal
cart list
order form
status blocks
```

### Task 3. Создать state

Создай state:

```text
products
filteredProducts
selectedCategory
spicyLevel
searchQuery
cartItems
isCartOpen
isLoadingProducts
productsError
isSubmitting
submitError
submitSuccess
formErrors
currentSlideIndex
```

## Part 2 — Products loading

### Task 4. Создать loadProducts

Загрузить данные из `products.json`.

Использовать:

```text
fetch
response.ok
response.json
try/catch/finally или then/catch/finally
```

### Task 5. Loading / error

Показать:

```text
Loading products...
Products failed to load
```

### Task 6. renderProducts

Отрисовать товары из `filteredProducts`.

Если список пустой — показать empty state.

## Part 3 — Categories and filters

### Task 7. renderCategories

Создать кнопки категорий.

Добавить:

```text
data-category
active class
```

### Task 8. Category click

По клику менять `selectedCategory`.

После изменения:

```text
applyFilters()
renderCategories()
renderProducts()
```

### Task 9. Spicy filter

Range input меняет `spicyLevel`.

После изменения:

```text
applyFilters()
renderProducts()
```

### Task 10. Search / autocomplete

Search input меняет `searchQuery`.

Использовать debounce.

Показывать suggestions.

## Part 4 — Carousel

### Task 11. renderCarousel

Показать текущий slide.

### Task 12. next / prev

Кнопки переключают `currentSlideIndex`.

Индекс не должен выходить за границы.

## Part 5 — ProductCard and cart

### Task 13. ProductCard

Создать карточку товара.

Карточка должна иметь кнопку Add to cart.

### Task 14. product-add

При клике отправить `CustomEvent`:

```text
product-add
```

В `detail` передать product.

### Task 15. Cart addItem

Если товар уже есть — увеличить quantity.

Если нет — добавить.

### Task 16. renderCart

Показать:

```text
items
quantity
total
empty cart
```

### Task 17. Cart actions

Добавить действия:

```text
increase
decrease
remove
clear
```

Использовать делегирование.

## Part 6 — Cart modal

### Task 18. Open modal

Cart button открывает modal.

### Task 19. Close modal

Закрыть:

```text
по close button
по overlay
по Escape
```

### Task 20. Edge cases

Клик внутри modal content не закрывает modal.

Escape при закрытой modal не ломает код.

## Part 7 — Order form

### Task 21. Submit handler

На форму повесить submit.

Внутри:

```text
event.preventDefault()
```

### Task 22. FormData

Прочитать:

```text
name
phone
email
address
comment
```

Применить `trim`.

### Task 23. Validation

Проверить:

```text
name
phone
email
address
cart not empty
```

### Task 24. renderFormErrors

Показать ошибки пользователю.

### Task 25. createOrderPayload

Собрать order payload.

### Task 26. submitOrder

Сделать mock async submit.

Использовать Promise или async/await.

### Task 27. Submit states

Показать:

```text
isSubmitting
submitError
submitSuccess
```

Блокировать submit button во время отправки.

## Part 8 — Final checks

### Task 28. Проверить полный сценарий

```text
load products
filter category
filter spicy
search
add to cart
open cart
change quantity
submit invalid form
submit valid form
see success/error
```

### Task 29. Ответить на вопросы

Ответить на `07-interview-questions.md`.

### Task 30. Финальный коммит

Сделать коммит только после проверки.
