# 01 — Requirements

## Название проекта

```text
Bangkok Express
```

## Тип проекта

Учебный frontend-проект на чистом JavaScript.

## Цель

Собрать интерфейс ресторана с онлайн-заказом.

Проект должен показать, что студент умеет:

```text
- работать с DOM
- создавать интерфейс из данных
- обрабатывать события
- строить компоненты
- использовать классы
- связывать компоненты через события
- работать с формами
- делать валидацию
- загружать данные
- обрабатывать loading/error/success
- писать асинхронный код
```

## Основной сценарий пользователя

Пользователь должен уметь:

```text
1. Открыть страницу ресторана
2. Увидеть carousel с промо-товарами
3. Выбрать категорию в ribbon menu
4. Отфильтровать товары
5. Изменить spicy level
6. Найти товар через search/autocomplete
7. Добавить товар в корзину
8. Открыть корзину
9. Увидеть товары в корзине
10. Увеличить/уменьшить количество
11. Удалить товар
12. Заполнить форму заказа
13. Получить ошибки валидации, если данные неверные
14. Отправить заказ
15. Увидеть success или error state
```

## Обязательные блоки интерфейса

```text
Header
Hero / Carousel
Ribbon Menu
Filters
Products Grid
Cart Button
Cart Modal
Order Form
Status Messages
```

## Обязательные данные товара

Каждый товар должен иметь:

```text
id
name
price
category
spicy
image
description
```

## Обязательные данные корзины

Каждый cart item должен иметь:

```text
id
name
price
quantity
```

## Обязательные данные заказа

Order payload должен содержать:

```text
customer
phone
email
address
comment
items
total
createdAt
```

## Обязательные состояния

```text
isLoadingProducts
productsError
products
selectedCategory
spicyLevel
searchQuery
cartItems
isCartOpen
formErrors
isSubmitting
submitError
submitSuccess
```

## Обязательные функции

```text
loadProducts
renderProducts
renderCategories
renderCarousel
renderCart
renderOrderFormErrors
validateOrder
createOrderPayload
submitOrder
formatPrice
debounce
throttle
```

## Обязательные компоненты

```text
ProductCard
Cart
CartModal
RibbonMenu
Carousel
OrderForm
```

## Обязательные события

```text
click
input
submit
keydown
CustomEvent
```

## Обязательные JavaScript-темы

```text
arrays
objects
functions
DOM
events
event delegation
dataset
classList
classes
this
CustomEvent
Promise
fetch
async/await
try/catch/finally
FormData
regexp
JSON
```

## Что не требуется

В этом проекте не требуется:

```text
- backend
- база данных
- авторизация
- платежи
- React
- TypeScript-реализация всего проекта
- идеальная accessibility
- production-ready UI
```

Но нужно оставить architecture notes, как проект можно потом перенести на TypeScript / React.
