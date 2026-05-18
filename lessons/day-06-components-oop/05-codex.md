# Day 06 — Codex

## Что можно отдать Codex

Codex можно попросить:

- создать структуру папки урока;
- создать `index.html`;
- создать `style.css`;
- создать пустой `script.js` с TODO;
- проверить мой код после самостоятельной реализации;
- объяснить ошибку из консоли;
- объяснить `this` в классе;
- объяснить, почему `new` обязателен;
- проверить, правильно ли работает `CustomEvent`;
- проверить, не связан ли `ProductCard` напрямую с `Cart`;
- предложить модульную структуру после самостоятельной реализации.

## Что студент пишет сам

Самостоятельно пишу:

- массив `products`;
- массив `slides`;
- class `ProductCard`;
- constructor `ProductCard`;
- root element `ProductCard`;
- render `ProductCard`;
- обработчик Add to cart внутри ProductCard;
- `CustomEvent product-add`;
- `detail`;
- `bubbles: true`;
- `dispatchEvent`;
- class `Cart`;
- `Cart.addItem`;
- `Cart.getTotal`;
- `Cart.render`;
- class `Carousel`;
- `Carousel.next`;
- `Carousel.prev`;
- `Carousel.render`;
- создание экземпляров через `new`;
- связь ProductCard и Cart через CustomEvent;
- будущую структуру modules.

## Что нельзя отдавать Codex

Codex нельзя просить:

- полностью написать `script.js`;
- написать классы за меня;
- написать CustomEvent за меня;
- напрямую связать ProductCard с Cart без понимания;
- разделить на модули без моего понимания;
- исправить код без объяснения причины;
- заменить моё понимание готовым решением;
- коммитить код, который я не могу объяснить.

## Workflow

```text
1. Прочитать 01-task.md
2. Прочитать 02-theory.md
3. Выполнить 03-practice.md
4. Написать JavaScript самостоятельно
5. Проверить компоненты в браузере
6. Проверить CustomEvent через Console
7. Проверить, что ProductCard не вызывает cart.addItem напрямую
8. Ответить на вопросы из 04-questions.md
9. Только после этого просить Codex сделать review
10. Сделать коммит
```

## Проверка перед review

Перед тем как просить Codex о ревью, студент должен ответить:

```text
1. Где создаётся ProductCard?
2. Где создаётся Cart?
3. Где создаётся Carousel?
4. Где ProductCard отправляет событие?
5. Где Cart слушает событие?
6. Почему эта связь лучше прямого вызова?
```

## Коммит

```bash
git status
git add lessons/day-06-components-oop
git commit -m "feat(jsbasic): implement day 06 components oop"
```
