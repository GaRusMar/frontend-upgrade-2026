# 04 — Data and API

## products.json

В проекте есть локальный файл:

```text
products.json
```

Это mock API для загрузки товаров.

## Product shape

Каждый товар:

```json
{
  "id": 1,
  "name": "Penang shrimp",
  "price": 16,
  "category": "Seafood dishes",
  "spicy": 3,
  "image": "🍤",
  "description": "Shrimp with spicy curry sauce"
}
```

## Categories

Категории можно получить из products:

```text
All + unique categories from products
```

Или задать вручную:

```text
All
Salads
Soups
Seafood dishes
Chicken dishes
```

## CartItem shape

```json
{
  "id": 1,
  "name": "Penang shrimp",
  "price": 16,
  "quantity": 2
}
```

## Order payload

```json
{
  "customer": "Santa Claus",
  "phone": "+123456789",
  "email": "santa@example.com",
  "address": "Bangkok street, 1",
  "comment": "No onion, please",
  "items": [
    {
      "id": 1,
      "name": "Penang shrimp",
      "price": 16,
      "quantity": 2
    }
  ],
  "total": 32,
  "createdAt": "2026-01-01T10:00:00.000Z"
}
```

## Load products flow

```text
loadProducts()
→ isLoadingProducts = true
→ fetch('./products.json')
→ check response.ok
→ response.json()
→ products = data
→ applyFilters()
→ renderProducts()
→ catch productsError
→ finally isLoadingProducts = false
```

## Submit order flow

В проекте нет реального backend.

Можно использовать fake endpoint:

```text
https://example.com/orders
```

Он может падать. Это нормально.

Главное — обработать ошибку.

## Mock submit

Можно сделать mock submit через Promise:

```text
fakeSubmitOrder(order)
```

Она должна:

```text
вернуть Promise
через setTimeout имитировать задержку
иногда resolve
иногда reject
```

## Validation

Правила:

```text
name required
phone required + phone regexp
email required + email regexp
address required
comment optional
cart must not be empty
```

## Phone regexp

Учебный вариант:

```text
^\+?[0-9\s-]{7,20}$
```

## Email regexp

Учебный вариант:

```text
^[^\s@]+@[^\s@]+\.[^\s@]+$
```

## Loading states

```text
isLoadingProducts
isSubmitting
```

## Error states

```text
productsError
submitError
formErrors
```

## Success state

```text
submitSuccess
```

## Edge cases

Нужно проверить:

```text
products.json не загрузился
products пустой
cart пустой
форма пустая
phone invalid
email invalid
address из пробелов
submit failed
submit success
double submit
```
