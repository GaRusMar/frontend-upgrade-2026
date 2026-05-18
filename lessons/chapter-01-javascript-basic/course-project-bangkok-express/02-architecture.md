# 02 — Architecture

## Главная идея архитектуры

Проект должен быть построен по схеме:

```text
data → state → components/render → events → state update → render
```

Не нужно писать всё в одном огромном обработчике.

## Рекомендуемая структура

```text
course-project-bangkok-express/
  README.md
  01-requirements.md
  02-architecture.md
  03-components.md
  04-data-and-api.md
  05-tasks.md
  06-acceptance-criteria.md
  07-interview-questions.md
  08-codex.md
  index.html
  style.css
  script.js
  products.json
```

## Если делать расширенную структуру позже

```text
src/
  components/
    ProductCard.js
    Cart.js
    CartModal.js
    RibbonMenu.js
    Carousel.js
    OrderForm.js
  data/
    products.js
  api/
    productsApi.js
    ordersApi.js
  utils/
    formatPrice.js
    debounce.js
    throttle.js
    validateOrder.js
  main.js
```

## State

В `script.js` нужно явно хранить состояние:

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

## Почему state важен

State — источник правды.

Например:

```text
selectedCategory хранит выбранную категорию
cartItems хранит товары корзины
isCartOpen хранит открыта ли корзина
isSubmitting хранит отправляется ли заказ
```

DOM должен обновляться на основе state.

## Render functions

Render-функции должны отвечать за отображение:

```text
renderApp
renderProducts
renderCategories
renderCarousel
renderCartButton
renderCartModal
renderOrderFormErrors
renderStatus
```

## Event handlers

Обработчики событий должны:

```text
1. получить действие пользователя
2. изменить state
3. вызвать render
```

Пример:

```text
click category
→ selectedCategory = category
→ applyFilters()
→ renderCategories()
→ renderProducts()
```

## Component classes

В проекте можно использовать классы:

```text
ProductCard
Cart
Carousel
RibbonMenu
CartModal
```

Но не обязательно превращать всё в классы сразу.

Главное — не смешивать всю логику в одном месте.

## CustomEvent

`ProductCard` может отправлять событие:

```text
product-add
```

В `detail` передаётся product.

Cart или внешний код слушает это событие и обновляет корзину.

## Event delegation

Делегирование использовать для:

```text
- кликов по карточкам товаров
- действий корзины
- выбора категории
- кликов по suggestions
```

## Async architecture

Асинхронная загрузка товаров:

```text
isLoadingProducts = true
renderStatus()
fetch products
response.ok check
response.json()
products = data
applyFilters()
renderProducts()
catch error
finally isLoadingProducts = false
```

## Form architecture

Отправка заказа:

```text
submit
preventDefault
FormData
trim values
validateOrder
if errors → render errors
createOrderPayload
isSubmitting = true
submitOrder
success/error
finally isSubmitting = false
```

## Error handling

Ошибки не должны просто уходить в console.

Пользователь должен видеть:

```text
productsError
submitError
formErrors
```

## TypeScript migration notes

Позже проект можно перенести на TypeScript.

Типы:

```text
Product
Category
CartItem
Order
OrderFormData
ApiResponse<T>
```

## React migration notes

Позже проект можно перенести на React.

Соответствие:

```text
state → useState
render functions → components
CustomEvent/callbacks → props callbacks
form state → controlled inputs
fetch flow → useEffect / server actions / query library
```
