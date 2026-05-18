# Day 08 — Взаимодействие с сервером

## Ориентир по программе jsbasic

Тема из программы:

> Взаимодействие с сервером

Начинаем это занятие с обычных HTTP-форм, затем переходим к динамическим сетевым запросам.

В этом уроке разбираем:

```text
- HTTP-формы
- создание и отправка форм
- динамические формы
- валидация форм
- DOM-свойства и методы для форм
- чтение данных из формы
- метод fetch
- основы Promise для сетевых запросов
- обмен данными с сервером в формате JSON
- работа с данными: регулярные выражения
```

## Тема дня

```text
form → FormData → validation → regexp → fetch → Promise → JSON → loading/error/success states
```

## Цель урока

После урока ты должен уверенно понимать: `submit`, `preventDefault`, `FormData`, `form.elements`, `input.value`, `name`, `trim`, validation, regexp, `fetch`, Promise basics, `then/catch/finally`, `response.ok`, `response.json`, JSON, GET, POST, headers, `Content-Type`, body, `JSON.stringify`, loading/error/success states, `isSubmitting`, disabled submit.

## Что делаем

Практика:

```text
Bangkok Express Products Loader and Order Form
```

Интерфейс содержит кнопку Load products, loading, error, products list, order form, validation messages, submit loading, submit success и submit error.

## Что должен уметь код

```text
1. Найти DOM-элементы
2. Подготовить mock API URLs
3. Реализовать loading/error state для загрузки товаров
4. Загрузить products через fetch GET
5. Проверить response.ok
6. Получить JSON через response.json()
7. Отрисовать товары
8. Прочитать данные формы через FormData
9. Сделать trim строк
10. Проверить name, phone, email, address
11. Показать ошибки формы
12. Подготовить order payload
13. Реализовать isSubmitting
14. Заблокировать submit button во время отправки
15. Отправить order через fetch POST
16. Передать Content-Type application/json
17. Передать body через JSON.stringify
18. Обработать success/error
19. Не очищать форму при ошибке отправки
20. Очистить форму при успешной отправке
```

## Критерий готовности

Продукты загружаются через `fetch`; loading/error работают; `response.ok` проверяется; JSON читается через `response.json()`; форма не перезагружает страницу; данные читаются через `FormData`; строки очищаются через `trim`; phone/email валидируются regexp; order payload отправляется через POST и `JSON.stringify`; submit button блокируется во время отправки; ошибка submit показывается и не очищает форму; success очищает форму.
