# 03 — Components

## ProductCard

### Ответственность

```text
- показать товар
- показать name / price / category / spicy / image / description
- иметь кнопку Add to cart
- отправить событие product-add
```

### Что не должен делать

ProductCard не должен напрямую менять cart.

Правильно:

```text
ProductCard сообщает о событии
Cart или внешний код обновляет корзину
```

### Событие

```text
product-add
```

`detail`:

```text
product
```

## Cart

### Ответственность

```text
- хранить cartItems
- addItem
- removeItem
- increaseQuantity
- decreaseQuantity
- getTotal
- clear
```

### Правила

```text
если товар уже есть — увеличить quantity
если quantity стала 0 — удалить товар
total = сумма price * quantity
```

## CartModal

### Ответственность

```text
- открыть корзину
- закрыть корзину
- закрыть по overlay
- закрыть по Escape
- показать список товаров
- показать total
- показать форму заказа
```

### State

```text
isCartOpen
```

## RibbonMenu

### Ответственность

```text
- показать категории
- хранить active state через selectedCategory
- менять selectedCategory по клику
```

### События

```text
click category
```

## Carousel

### Ответственность

```text
- показать промо-слайды
- next
- prev
- хранить currentSlideIndex
```

### Edge cases

```text
после последнего слайда перейти к первому
до первого слайда перейти к последнему
```

## Filters

### Ответственность

```text
- spicyLevel
- searchQuery
- autocomplete suggestions
```

### События

```text
input range
input search
keydown search
click suggestion
```

## OrderForm

### Ответственность

```text
- прочитать FormData
- сделать trim
- validate
- показать ошибки
- создать order payload
- отправить заказ
```

### Поля

```text
name
phone
email
address
comment
```

## Status Messages

### Ответственность

```text
- products loading
- products error
- submit loading
- submit error
- submit success
```

## Component communication

Рекомендуемая схема:

```text
ProductCard
  dispatch product-add

App / products container
  listen product-add
  cart.addItem(product)
  renderCart()
```

## Минимальный набор классов

Для проекта достаточно классов:

```text
ProductCard
Cart
Carousel
```

Остальное можно сделать render-функциями.

## Расширенный набор классов

Если уверенно:

```text
ProductCard
Cart
CartModal
RibbonMenu
Carousel
OrderForm
Autocomplete
```

## Главное правило

Каждый компонент должен иметь одну ответственность.

Плохо:

```text
один класс App делает всё
```

Лучше:

```text
ProductCard отвечает за карточку
Cart отвечает за корзину
OrderForm отвечает за форму
```
