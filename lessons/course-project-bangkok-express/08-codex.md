# 08 — Codex

## Что можно отдать Codex

Codex можно попросить:

```text
- добавить файлы проекта в репозиторий
- создать HTML/CSS каркас
- создать script.js с TODO
- проверить самостоятельную реализацию
- объяснить ошибку из console
- объяснить ошибку fetch
- проверить архитектуру
- проверить edge cases
- предложить рефакторинг после самостоятельной реализации
- подготовить git diff
- подготовить commit message
```

## Что студент пишет сам

Самостоятельно пишу:

```text
- state
- render-функции
- loadProducts
- applyFilters
- ProductCard
- Cart
- Carousel
- CartModal logic
- event handlers
- CustomEvent
- FormData
- validation
- order payload
- submitOrder
- async flow
```

## Что нельзя отдавать Codex

Codex нельзя просить:

```text
- полностью написать script.js
- написать весь проект за меня
- скрыть ошибки без объяснения
- удалить TODO и вставить готовое решение
- коммитить код, который я не могу объяснить
```

## Workflow

```text
1. Добавить файлы проекта
2. Прочитать requirements
3. Реализовать часть 1
4. Проверить в браузере
5. Реализовать часть 2
6. Проверить в браузере
7. Повторять до готовности
8. Ответить на interview questions
9. Попросить Codex сделать review
10. Исправить замечания
11. Сделать финальный коммит
```

## Prompt для Codex

```text
Возьми файлы из архива jsbasic_course_project_bangkok_express_final.zip и добавь их в текущий репозиторий.

Нужно добавить или заменить только:

lessons/course-project-bangkok-express/

Важно:
- Это финальный курсовой проект jsbasic.
- Не трогай Day 01–10.
- Не пиши готовую JavaScript-логику.
- В script.js должны остаться только TODO-комментарии.
- products.json можно добавить.
- После изменений покажи diff и git status.
- Не делай коммит без моего подтверждения.
```

## Commit

```bash
git add lessons/course-project-bangkok-express
git commit -m "docs: add jsbasic course project bangkok express"
git push
```
