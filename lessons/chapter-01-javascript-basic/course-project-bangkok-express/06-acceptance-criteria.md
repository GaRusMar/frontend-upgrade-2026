# 06 — Acceptance Criteria

## Products

Проект принят, если:

```text
- товары загружаются из products.json
- есть loading state
- есть error state
- response.ok проверяется
- response.json используется
- товары отображаются на странице
- empty state есть
```

## Categories

```text
- категории отображаются
- есть All
- active category подсвечивается
- выбранная категория фильтрует товары
```

## Filters

```text
- spicy slider меняет значение
- товары фильтруются по spicy
- search работает
- search использует debounce
- пустой query не ломает интерфейс
```

## Carousel

```text
- carousel показывает текущий slide
- next работает
- prev работает
- индекс не выходит за границы
```

## Cart

```text
- Add to cart работает
- повторное добавление увеличивает quantity
- total считается правильно
- quantity можно увеличить
- quantity можно уменьшить
- товар можно удалить
- cart можно очистить
- empty cart отображается
```

## Cart Modal

```text
- modal открывается
- modal закрывается по кнопке
- modal закрывается по overlay
- modal закрывается по Escape
- клик внутри content не закрывает modal
```

## Order Form

```text
- submit не перезагружает страницу
- FormData используется
- trim используется
- name required
- phone regexp
- email regexp
- address required
- cart required
- ошибки показываются
- payload создаётся
- submit работает async
- submit button disabled во время отправки
- success state отображается
- error state отображается
- форма не очищается при ошибке
```

## Code Quality

```text
- нет огромной функции на весь проект
- есть render-функции
- есть понятный state
- используется делегирование
- используется CustomEvent или понятный callback flow
- используется try/catch/finally или then/catch/finally
- нет неожиданных ошибок в console
- студент может объяснить каждую часть
```

## Interview Readiness

Студент должен уметь объяснить:

```text
- DOM
- events
- delegation
- target/currentTarget
- dataset
- classList
- state
- render
- components
- class
- this
- CustomEvent
- fetch
- Promise
- async/await
- FormData
- validation
- regexp
- JSON
- loading/error/success
```

## Final Result

Финальный проект считается готовым, если пользователь может пройти сценарий:

```text
загрузить товары
выбрать категорию
найти товар
добавить в корзину
открыть корзину
оформить заказ
увидеть результат
```
