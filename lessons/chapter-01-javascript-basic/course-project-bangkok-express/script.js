// Course Project — Bangkok Express

// ==================================================
// 1. DATA / CONSTANTS
// ==================================================

// TODO: создать PRODUCTS_URL

// TODO: создать ORDER_URL или mock submit mode

// TODO: создать массив slides для carousel

// TODO: создать phone regexp

// TODO: создать email regexp

// ==================================================
// 2. DOM ELEMENTS
// ==================================================

// TODO: найти cart button

// TODO: найти cart count element

// TODO: найти carousel title

// TODO: найти carousel description

// TODO: найти carousel controls

// TODO: найти categories container

// TODO: найти products container

// TODO: найти load products button

// TODO: найти products loading element

// TODO: найти products error element

// TODO: найти search input

// TODO: найти suggestions list

// TODO: найти spicy input

// TODO: найти spicy value element

// TODO: найти cart modal

// TODO: найти cart modal content

// TODO: найти cart close button

// TODO: найти cart items container

// TODO: найти cart total element

// TODO: найти order form

// TODO: найти form error elements

// TODO: найти submit button

// TODO: найти submit loading element

// TODO: найти submit error element

// TODO: найти submit success element

// ==================================================
// 3. STATE
// ==================================================

// TODO: создать состояние products

// TODO: создать состояние filteredProducts

// TODO: создать состояние selectedCategory

// TODO: создать состояние spicyLevel

// TODO: создать состояние searchQuery

// TODO: создать состояние suggestions

// TODO: создать состояние activeSuggestionIndex

// TODO: создать состояние cartItems

// TODO: создать состояние isCartOpen

// TODO: создать состояние isLoadingProducts

// TODO: создать состояние productsError

// TODO: создать состояние isSubmitting

// TODO: создать состояние submitError

// TODO: создать состояние submitSuccess

// TODO: создать состояние formErrors

// TODO: создать состояние currentSlideIndex

// ==================================================
// 4. UTILS
// ==================================================

// TODO: создать formatPrice(price)

// TODO: создать debounce(callback, delay)

// TODO: создать throttle(callback, delay) если понадобится

// TODO: создать getUniqueCategories(products)

// TODO: создать normalizeQuery(value)

// TODO: создать hasErrors(errors)

// ==================================================
// 5. PRODUCTS LOADING
// ==================================================

// TODO: создать async function loadProducts()

// TODO: внутри loadProducts включить isLoadingProducts

// TODO: внутри loadProducts очистить productsError

// TODO: сделать fetch(PRODUCTS_URL)

// TODO: проверить response.ok

// TODO: получить data через response.json()

// TODO: записать products

// TODO: вызвать applyFilters()

// TODO: обработать ошибку через catch

// TODO: выключить loading в finally

// TODO: вызвать renderProductsStatus()

// TODO: вызвать renderCategories()

// TODO: вызвать renderProducts()

// ==================================================
// 6. FILTERS
// ==================================================

// TODO: создать applyFilters()

// TODO: applyFilters должен учитывать selectedCategory

// TODO: applyFilters должен учитывать spicyLevel

// TODO: applyFilters должен учитывать searchQuery

// TODO: создать renderCategories()

// TODO: renderCategories должен добавить All и категории товаров

// TODO: renderCategories должен подсвечивать active category

// TODO: создать обработчик клика по categories через делегирование

// TODO: создать обработчик input spicy

// TODO: создать debounced search handler

// TODO: создать updateSuggestions()

// TODO: создать renderSuggestions()

// TODO: обработать click по suggestion

// TODO: обработать keyboard navigation для suggestions

// ==================================================
// 7. CAROUSEL
// ==================================================

// TODO: создать renderCarousel()

// TODO: создать carouselNext()

// TODO: создать carouselPrev()

// TODO: индекс carousel не должен выходить за границы массива

// TODO: повесить обработчики на carousel controls

// ==================================================
// 8. PRODUCT CARD
// ==================================================

// TODO: создать class ProductCard

// TODO: ProductCard constructor принимает product

// TODO: ProductCard создаёт this.element

// TODO: ProductCard render создаёт DOM карточки

// TODO: кнопка Add to cart должна иметь data-action или отправлять CustomEvent

// TODO: ProductCard должен отправлять CustomEvent product-add с detail.product

// ==================================================
// 9. CART
// ==================================================

// TODO: создать функцию addToCart(product)

// TODO: если товар уже есть, увеличить quantity

// TODO: если товара нет, добавить item

// TODO: создать removeFromCart(productId)

// TODO: создать increaseQuantity(productId)

// TODO: создать decreaseQuantity(productId)

// TODO: если quantity стала 0, удалить item

// TODO: создать clearCart()

// TODO: создать getCartTotal()

// TODO: создать renderCartButton()

// TODO: создать renderCart()

// TODO: использовать делегирование для cart actions

// TODO: слушать product-add на products container

// ==================================================
// 10. CART MODAL
// ==================================================

// TODO: создать openCart()

// TODO: создать closeCart()

// TODO: создать renderCartModal()

// TODO: открыть modal по cart button

// TODO: закрыть modal по close button

// TODO: закрыть modal по overlay click

// TODO: закрыть modal по Escape

// TODO: клик внутри modal content не должен закрывать modal

// ==================================================
// 11. ORDER FORM
// ==================================================

// TODO: создать getOrderFormData(form)

// TODO: использовать FormData

// TODO: применить trim к строкам

// TODO: создать validateOrder(orderData)

// TODO: проверить name

// TODO: проверить phone regexp

// TODO: проверить email regexp

// TODO: проверить address

// TODO: проверить cartItems не пустой

// TODO: создать renderOrderFormErrors(errors)

// TODO: создать createOrderPayload(orderData)

// TODO: payload должен содержать customer, phone, email, address, comment, items, total, createdAt

// TODO: создать async function submitOrder(payload)

// TODO: submitOrder может использовать mock Promise

// TODO: создать renderSubmitState()

// TODO: обработать form submit

// TODO: внутри submit вызвать preventDefault

// TODO: если есть errors, остановить submit

// TODO: во время submit заблокировать кнопку

// TODO: при успехе показать submitSuccess

// TODO: при успехе очистить форму и корзину

// TODO: при ошибке показать submitError

// TODO: при ошибке НЕ очищать форму

// TODO: в finally выключить isSubmitting

// ==================================================
// 12. INITIALIZATION
// ==================================================

// TODO: создать init()

// TODO: внутри init вызвать renderCarousel

// TODO: внутри init вызвать renderCartButton

// TODO: внутри init вызвать renderCartModal

// TODO: внутри init вызвать renderProductsStatus

// TODO: внутри init повесить все event listeners

// TODO: вызвать init()

// ==================================================
// 13. FINAL CHECKS
// ==================================================

// TODO: проверить полный пользовательский сценарий

// TODO: проверить edge cases

// TODO: убедиться, что в Console нет неожиданных ошибок

// TODO: ответить на вопросы из 07-interview-questions.md
