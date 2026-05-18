# Day 06 — Практика

## Практика: Bangkok Express Components

Ты создаёшь компонентную основу для будущего проекта **Bangkok Express**.

Главная цель — понять классы, компоненты, `this`, `CustomEvent`, слабую связанность компонентов и будущую модульную структуру.

## Перед стартом

Открой `index.html`.

Проверь, что есть:

- блок `Carousel component`;
- блок `Products components`;
- блок `Cart component`;
- блок `Architecture notes`.

Открой DevTools Console.

## Шаг 1. Создать массив products

В `script.js` создай массив товаров.

Каждый товар:

```text
id
name
price
category
```

Добавь минимум 4 товара из Bangkok Express.

## Шаг 2. Создать массив slides

Создай массив слайдов.

Каждый слайд:

```text
title
description
```

Добавь минимум 3 слайда.

## Шаг 3. Найти DOM-контейнеры

Найди:

- products container;
- cart container;
- carousel container;
- architecture notes container.

Проверь найденные элементы через `console.log`.

## Шаг 4. Создать formatPrice

Создай функцию `formatPrice`.

Она принимает число и возвращает строку:

```text
€16.00
```

## Шаг 5. Создать class ProductCard

Создай класс:

```text
ProductCard
```

Класс принимает `product`.

В `constructor(product)` нужно сохранить:

```text
this.product
this.element
```

`this.element` должен быть DOM-элементом карточки.

## Шаг 6. Создать root element карточки

Внутри `constructor` или отдельного метода создай:

```text
article
```

Добавь ему класс:

```text
product-card
```

Сохрани в:

```text
this.element
```

## Шаг 7. Создать render ProductCard

Метод `render` должен заполнить карточку:

```text
name
category
price
button Add to cart
```

Кнопка должна иметь:

```text
data-action="add-to-cart"
```

После render карточка должна быть готова для вставки в DOM.

## Шаг 8. Добавить обработчик кнопки внутри ProductCard

Кнопка Add to cart должна слушать `click`.

При клике она должна вызвать метод, который отправляет событие `product-add`.

## Шаг 9. Создать CustomEvent

Событие:

```text
product-add
```

В `detail` передай:

```text
product
```

Событие должно всплывать:

```text
bubbles: true
```

## Шаг 10. Отправить событие

Отправь событие через:

```text
this.element.dispatchEvent(event)
```

Проверь в Console, что событие можно поймать.

## Шаг 11. Создать destroy

Добавь метод:

```text
destroy()
```

Он должен удалить карточку:

```text
this.element.remove()
```

Пока можно не использовать, но метод должен быть понятен.

## Шаг 12. Создать class Cart

Создай класс:

```text
Cart
```

В `constructor(container)` сохрани:

```text
this.container
this.items
```

`this.items` изначально пустой массив.

## Шаг 13. Создать Cart.addItem

Метод принимает `product`.

Логика:

```text
если item с таким id уже есть:
  увеличить quantity

если item нет:
  добавить новый item с quantity = 1
```

## Шаг 14. Создать Cart.getTotal

Метод считает сумму корзины:

```text
price * quantity для каждого item
```

Можно использовать `forEach`.

## Шаг 15. Создать Cart.render

Метод должен очистить `container` и отрисовать:

```text
- если корзина пустая: Cart is empty
- если не пустая: список товаров
- quantity каждого товара
- total
```

После каждого изменения корзины нужно вызывать `cart.render()`.

## Шаг 16. Создать class Carousel

Создай класс:

```text
Carousel
```

В `constructor(slides, container)` сохрани:

```text
this.slides
this.container
this.currentIndex
```

`currentIndex` изначально `0`.

## Шаг 17. Создать Carousel.next

Метод увеличивает `currentIndex`.

Если индекс вышел за конец массива — возвращается к `0`.

## Шаг 18. Создать Carousel.prev

Метод уменьшает `currentIndex`.

Если индекс меньше `0` — становится последним индексом.

## Шаг 19. Создать Carousel.render

Метод должен очистить `container` и показать:

```text
title текущего слайда
description текущего слайда
button Prev
button Next
```

Кнопки должны переключать слайды и снова вызывать `render`.

## Шаг 20. Создать экземпляр Cart

Создай:

```text
const cart = new Cart(cartContainer)
```

Вызови:

```text
cart.render()
```

## Шаг 21. Создать ProductCard для каждого товара

Для каждого товара:

```text
const card = new ProductCard(product)
```

Вызови render карточки, если твоя реализация требует явного render.

Добавь:

```text
card.element
```

в products container.

## Шаг 22. Связать ProductCard и Cart через CustomEvent

На `productsContainer` слушай событие:

```text
product-add
```

Когда событие произошло:

```text
const product = event.detail.product
cart.addItem(product)
cart.render()
```

Важно: `ProductCard` не должен напрямую знать про `cart`.

## Шаг 23. Создать Carousel

Создай:

```text
const carousel = new Carousel(slides, carouselContainer)
```

Вызови:

```text
carousel.render()
```

Проверь кнопки Prev / Next.

## Шаг 24. Вывести Architecture notes

Выведи в список:

```text
ProductCard owns product card DOM
Cart owns cart state and cart DOM
Carousel owns slides and current index
ProductCard communicates with Cart using CustomEvent
Components do not directly change each other
```

## Шаг 25. Проверить сценарии

Проверь:

- карточки товаров появились;
- каждая карточка — отдельный экземпляр ProductCard;
- Add to cart добавляет товар в Cart;
- повторное добавление увеличивает quantity;
- total считается правильно;
- Cart is empty показывается для пустой корзины;
- carousel переключается вперёд;
- carousel переключается назад;
- ProductCard не вызывает `cart.addItem` напрямую;
- событие `product-add` передаёт товар через `event.detail.product`;
- в консоли нет неожиданных ошибок.

## Шаг 26. Проверить архитектурно

Перед коммитом ответь себе:

```text
ProductCard отвечает только за карточку?
Cart отвечает только за корзину?
Carousel отвечает только за карусель?
Связь между ProductCard и Cart идёт через CustomEvent?
```

## Шаг 27. Подготовить будущую модульную структуру

Пока код может быть в одном `script.js`.

Но зафиксируй структуру, к которой придём дальше:

```text
src/
  components/
    ProductCard/
      ProductCard.js
    Cart/
      Cart.js
    Carousel/
      Carousel.js
  data/
    products.js
    slides.js
  utils/
    formatPrice.js
  index.js
```

## Усложнение

Если основная задача готова:

1. Добавь `Cart.clear()`.
2. Добавь `Cart.removeItem(productId)`.
3. Добавь кнопки `+` и `-` в Cart.
4. Добавь `ProductCard.destroy()`.
5. Создай отдельный компонент `ArchitectureNotes`.
6. Раздели код на реальные модули с `type="module"`.
