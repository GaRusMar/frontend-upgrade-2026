// Day 07 — Более сложные компоненты

// TODO: создать массив products
// TODO: каждый product должен иметь id, name, category, spicy
// TODO: создать массив categories
// TODO: найти open modal button
// TODO: найти modal
// TODO: найти modal content
// TODO: найти close modal button
// TODO: найти ribbon container
// TODO: найти spicy range input
// TODO: найти spicy value
// TODO: найти search input
// TODO: найти suggestions list
// TODO: найти drag list
// TODO: найти drop zone
// TODO: найти drag status
// TODO: найти scroll log
// TODO: создать состояние isModalOpen
// TODO: создать состояние selectedCategory
// TODO: создать состояние spicyLevel
// TODO: создать состояние searchQuery
// TODO: создать состояние suggestions
// TODO: создать состояние activeSuggestionIndex
// TODO: создать состояние draggedItemId
// TODO: создать состояние scrollHandledCount
// TODO: создать функцию openModal()
// TODO: создать функцию closeModal()
// TODO: создать функцию renderModal()
// TODO: по клику на open modal button вызвать openModal
// TODO: по клику на close modal button вызвать closeModal
// TODO: по клику на overlay закрывать modal только если event.target === event.currentTarget
// TODO: по keydown Escape закрывать modal, если он открыт
// TODO: создать функцию renderRibbonMenu()
// TODO: renderRibbonMenu должна создать кнопки категорий, data-category и active-класс
// TODO: по клику на ribbon container менять selectedCategory
// TODO: по input spicy range обновлять spicyLevel и spicy value
// TODO: создать функцию debounce(callback, delay)
// TODO: создать функцию updateSuggestions()
// TODO: если searchQuery пустой, suggestions должен стать пустым массивом
// TODO: если searchQuery не пустой, отфильтровать products
// TODO: создать функцию renderSuggestions()
// TODO: если результатов нет, показать No results
// TODO: подсказке добавлять active-класс по activeSuggestionIndex
// TODO: создать debounced search handler
// TODO: по input search обновлять searchQuery через debounce
// TODO: по клику на suggestion выбрать подсказку
// TODO: по keydown search обработать ArrowDown, ArrowUp, Enter, Escape
// TODO: ArrowDown / ArrowUp не должны ломаться при пустых suggestions
// TODO: Enter не должен ломаться без активной подсказки
// TODO: создать dragstart handler для drag items
// TODO: в dragstart сохранить draggedItemId
// TODO: в dragover drop zone вызвать event.preventDefault()
// TODO: в dragover добавить active-класс drop zone
// TODO: в dragleave убрать active-класс drop zone
// TODO: при drop показать сообщение, какой элемент был перенесён
// TODO: drop без draggedItemId не должен ломать код
// TODO: создать функцию throttle(callback, delay)
// TODO: создать throttled scroll handler
// TODO: по scroll увеличивать scrollHandledCount через throttle
// TODO: обновлять scroll log
// TODO: вызвать renderModal
// TODO: вызвать renderRibbonMenu
// TODO: вывести стартовое spicy value
// TODO: проверить все edge cases из 03-practice.md
