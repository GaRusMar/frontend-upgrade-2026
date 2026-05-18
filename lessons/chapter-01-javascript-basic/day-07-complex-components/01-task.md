# Day 07 — Более сложные компоненты

## Ориентир по программе jsbasic

Тема из программы:

> Более сложные компоненты

Продолжаем практиковаться в создании интерфейсных компонентов, изучаем новые события.

В этом уроке разбираем:

```text
- Drag'n'Drop при помощи событий
- компонент слайдер
- pointer events
- mouse events
- touch events
- обработка пользовательского ввода
- события клавиатуры
- модальное окно
- ленточное меню
- автодополнение при вводе
- оптимизация: throttle/debounce
```

## Тема дня

```text
сложный UI → состояние → события → render → edge cases → оптимизация
```

## Цель урока

После урока ты должен уверенно понимать: как сложный интерфейс делится на компоненты; зачем компоненту своё состояние; как работает modal open/close; как закрывать modal по кнопке, overlay и Escape; как работает ribbon menu; как хранить selected category; как работает slider; чем pointer events отличаются от mouse/touch events; как работает autocomplete; как управлять подсказками через клавиатуру; зачем нужны debounce/throttle; как работает базовый drag'n'drop; как проверять edge cases сложного UI.

## Что делаем

Практика:

```text
Bangkok Express Advanced UI Components
```

Компоненты:

```text
Modal
RibbonMenu
SpicySlider
Autocomplete
DragSortPreview
DebouncedSearch
ThrottledScrollCart
```

## Что должен уметь код

```text
1. Создать categories и products
2. Реализовать modal open / close
3. Закрывать modal по кнопке, overlay и Escape
4. Реализовать ribbon menu категорий
5. Переключать active category
6. Реализовать slider spicy level
7. Понимать, где нужны pointer events
8. Реализовать autocomplete поиска
9. Обрабатывать пустой query
10. Обрабатывать no results
11. Управлять подсказками через keyboard events
12. Реализовать debounce для поиска
13. Реализовать throttle для scroll-события
14. Добавить базовый drag'n'drop preview
15. Проверить edge cases
```

## Критерий готовности

Modal открывается и закрывается всеми способами; клик внутри content не закрывает modal; Escape при закрытой modal не ломает код; ribbon active category меняется; spicy slider обновляет значение; autocomplete показывает suggestions, no results и корректно обрабатывает пустой query; ArrowUp/ArrowDown/Enter/Escape работают; debounce применяется к search; throttle применяется к scroll; drag preview работает; drop без выбранного элемента не ломает код; в консоли нет неожиданных ошибок.
