// Day 06 — Компонентная архитектура, ООП

// TODO: создать массив products

// TODO: каждый product должен иметь id, name, price, category

// TODO: создать массив slides

// TODO: каждый slide должен иметь title, description

// TODO: найти products container

// TODO: найти cart container

// TODO: найти carousel container

// TODO: найти architecture notes container

// TODO: временно проверить найденные контейнеры через console.log

// TODO: создать функцию formatPrice(price)

// TODO: создать class ProductCard

// TODO: в constructor(product) сохранить this.product

// TODO: в constructor создать this.element

// TODO: this.element должен быть article

// TODO: добавить this.element класс product-card

// TODO: создать метод render в ProductCard

// TODO: render должен очистить this.element перед новой отрисовкой

// TODO: render должен создать title товара

// TODO: render должен создать category товара

// TODO: render должен создать price товара

// TODO: render должен создать кнопку Add to cart

// TODO: кнопка Add to cart должна иметь data-action="add-to-cart"

// TODO: внутри ProductCard добавить обработчик click на кнопку

// TODO: при клике создать CustomEvent product-add

// TODO: в detail передать this.product

// TODO: событие должно иметь bubbles: true

// TODO: отправить событие через this.element.dispatchEvent(event)

// TODO: создать метод destroy в ProductCard

// TODO: destroy должен удалить this.element

// TODO: создать class Cart

// TODO: в constructor(container) сохранить this.container

// TODO: в Cart создать this.items как пустой массив

// TODO: создать метод addItem(product)

// TODO: внутри addItem найти item по product.id

// TODO: если товар уже есть, увеличить quantity

// TODO: если товара нет, добавить новый item с quantity 1

// TODO: создать метод getTotal()

// TODO: getTotal должен считать сумму price * quantity

// TODO: создать метод render()

// TODO: render должен очищать this.container

// TODO: если корзина пустая, render должен показать Cart is empty

// TODO: если корзина не пустая, render должен показать список товаров

// TODO: render должен показать quantity каждого товара

// TODO: render должен показать total

// TODO: создать class Carousel

// TODO: в constructor(slides, container) сохранить this.slides

// TODO: в constructor сохранить this.container

// TODO: в constructor создать this.currentIndex = 0

// TODO: создать метод next()

// TODO: next увеличивает currentIndex

// TODO: next возвращает currentIndex к 0 после последнего слайда

// TODO: создать метод prev()

// TODO: prev уменьшает currentIndex

// TODO: prev переводит currentIndex к последнему слайду, если индекс меньше 0

// TODO: создать метод render()

// TODO: render должен очищать this.container

// TODO: render должен показывать title текущего слайда

// TODO: render должен показывать description текущего слайда

// TODO: render должен создавать кнопки Prev и Next

// TODO: кнопка Prev должна вызывать this.prev() и this.render()

// TODO: кнопка Next должна вызывать this.next() и this.render()

// TODO: создать экземпляр Cart

// TODO: вызвать cart.render()

// TODO: для каждого product создать экземпляр ProductCard

// TODO: вызвать render карточки, если в твоей реализации это нужно

// TODO: добавить card.element в products container

// TODO: на products container слушать событие product-add

// TODO: внутри обработчика получить event.detail.product

// TODO: вызвать cart.addItem(product)

// TODO: вызвать cart.render()

// TODO: создать экземпляр Carousel

// TODO: вызвать carousel.render()

// TODO: вывести architecture notes на страницу

// TODO: проверить, что ProductCard не вызывает cart.addItem напрямую

// TODO: проверить, что в Console нет неожиданных ошибок
