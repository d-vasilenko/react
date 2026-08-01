
# 🚀 ИНЖЕНЕРНЫЙ СПЕЦНАЗ: REACT 2026

## От новичка до Middle+ за 4 месяца жесткого тренинга

> **Философия:** Ты не просто учишь библиотеки — ты учишься решать проблемы бизнеса.  
> Каждый модуль заканчивается задачей, которая могла бы прийти в реальном спринте.  
> **Никакого `any` без объяснения. Никаких пропусков. Только код и архитектура.**

---

## 🎯 КОМПЕТЕНЦИИ НА ВЫХОДЕ

| Скилл | Уровень |
|-------|---------|
| TypeScript (Generics, Unions, Utility Types, Conditional Types) | ⭐⭐⭐⭐⭐ |
| React (Hooks, Composition, Performance, Compound Components) | ⭐⭐⭐⭐⭐ |
| Next.js 15 (App Router, RSC, Server Actions, Caching) | ⭐⭐⭐⭐⭐ |
| tRPC + Prisma (Fullstack типобезопасность, WebSockets) | ⭐⭐⭐⭐⭐ |
| State Management (React Query + Zustand) | ⭐⭐⭐⭐⭐ |
| Тестирование (Unit, Integration, E2E, a11y) | ⭐⭐⭐⭐ |
| Архитектура (Feature-Based, SOLID, Adapters, Services) | ⭐⭐⭐⭐⭐ |
| CI/CD (GitHub Actions, автоматизация) | ⭐⭐⭐⭐ |
| Безопасность (XSS, CSRF, JWT в cookies) | ⭐⭐⭐⭐ |
| Мониторинг (Sentry, Web Vitals) | ⭐⭐⭐ |
| PWA, WebSocket, i18n, работа с файлами (Excel, PDF) | ⭐⭐⭐ |

---

## 📚 СТРУКТУРА КУРСА (13 МОДУЛЕЙ)

### Модуль 0: Боевая подготовка
- Настройка VSCode, pnpm, Git (rebase, stash, cherry-pick)
- `tsconfig.json` с максимальной строгостью
- GitHub Actions: `tsc --noEmit`, `eslint`, `vitest` на каждый push
- Первая утилита: `deepFreeze<T>` с полной типизацией

### Модуль 1: TypeScript – оружие массового поражения
- Generics, extends, infer
- Условные, Mapped и Template Literal типы
- Свои утилиты: `DeepPartial`, `OmitByType`, `RequiredByKeys`
- Zod + `z.infer` для валидации API
- **Практика:** SDK для GitHub API с полной типизацией

### Модуль 2: React – анатомия компонента
- Все хуки на уровне "почему, а не как"
- Кастомные хуки: `useLocalStorage`, `useDebounce`, `usePrevious`
- Паттерны: Render Props, HOC, Compound Components
- **Практика:** Корзина с `useReducer`, undo/redo, debounce-синхронизация

### Модуль 3: UI Kit – стили и доступность
- Tailwind + CVA + `tailwind-merge` + темная тема
- Framer Motion (микровзаимодействия)
- Storybook как документация с контролами
- **Практика:** UI Kit (Button, Input, Select, Modal, Toast) с a11y

### Модуль 4: Роутинг – URL как состояние
- React Router v6.4+: Loader-ы, Action-ы, защита роутов
- Синхронизация фильтров с `useSearchParams`
- Lazy loading роутов
- **Практика:** Каталог с фильтрами (цена, категория) в URL

### Модуль 5: Состояние и данные – сервер vs клиент
- React Query: оптимистичные обновления, зависимые запросы, бесконечный скролл
- Zustand (клиентское состояние)
- React Hook Form + Zod (сложные формы, массивы полей)
- **Практика:** Личный кабинет с профилем, аватаром, таблицей заказов

### Модуль 6: Fullstack на tRPC + Prisma
- Prisma: модели, миграции, отношения, CRUD
- tRPC: роутеры, middleware, валидация, ошибки
- JWT в httpOnly cookies (безопасность)
- **Практика:** Блог с комментариями, авторизация, роли

### Модуль 7: Next.js 15 – серверный рендеринг
- App Router: layouts, loading, error, streaming
- Server Components vs Client Components
- Server Actions (мутации без API)
- Стратегии кэширования: Request Memoization, Data Cache, Full Route Cache
- **Практика:** Миграция проекта с Vite на Next.js

### Модуль 8: Архитектура – код, который живёт годами
- Feature-Based структура
- Adapter Pattern (трансформация данных)
- Repository Pattern и Service Layer
- Dependency Injection
- **Практика:** Рефакторинг по SOLID + адаптеры для API

### Модуль 9: Тесты, безопасность, мониторинг, производительность
- Unit (Vitest), Integration, E2E (Playwright)
- Тестирование Server Components и tRPC
- a11y-тесты (axe)
- Sentry (ошибки), Web Vitals
- Оптимизация: memo, виртуализация (react-window)
- **Практика:** Настроить CI/CD с блокировкой мержа при падении тестов, добавить Sentry

### Модуль 10: Реальное время (WebSocket)
- Socket.io сервер в Next.js
- Хук `useSocket`
- Real-time чат или уведомления
- **Практика:** Чат в HR-панели

### Модуль 11: Работа с файлами и данными
- Импорт/экспорт Excel (xlsx)
- Экспорт PDF (react-pdf)
- Загрузка больших файлов с прогрессом
- **Практика:** Импорт кандидатов из Excel, экспорт отчёта в PDF

### Модуль 12: Offline и PWA
- Service Worker, кэширование статики и API
- Оффлайн-режим
- Push-уведомления
- **Практика:** Сделать приложение доступным офлайн

### Модуль 13: Боевой полигон (финальный аккорд)
5 задач с ограничением по времени (2-3 часа каждая):
1. Список с фильтрацией и пагинацией (React + TS + React Query)
2. Динамическая форма (RHF + Zod)
3. Оптимизация медленного приложения
4. Написание хука с дебаунсом и localStorage
5. Интеграция с внешним API (клиент + типизация)

---

## 🏁 ФИНАЛЬНЫЙ ПРОЕКТ (СКВОЗНОЙ)

**HR-панель управления** – объединяет все модули:

- Next.js 15 (App Router) + tRPC + Prisma (PostgreSQL)
- Аутентификация (JWT в cookies) + роли (админ/рекрутер)
- Дашборд с графиками (Recharts)
- Список кандидатов (виртуализация, фильтры в URL, экспорт Excel)
- Чат (WebSocket) между рекрутерами
- Импорт кандидатов из Excel
- PWA + оффлайн
- Полные тесты (Unit + Integration + E2E)
- Sentry + Web Vitals
- Деплой на Vercel с GitHub Actions

---

## 📋 ПРАВИЛА ПРОХОЖДЕНИЯ

1. **Запрет на `any`** – каждое использование должно быть обосновано в комментарии.
2. **Code Review** – после каждого модуля создаёшь Pull Request. Я ревьювлю как в FAANG.
3. **Защита модуля** – ты должен объяснить каждую строчку кода устно.
4. **Дедлайны** – не гонись, лучше разобраться один раз, чем переписывать десять.
5. **Проходной балл** – для перехода к следующему модулю нужно набрать ≥ 80% по критериям (код, типы, читаемость, тесты, объяснение).

---

## 📅 РЕКОМЕНДУЕМЫЙ ГРАФИК

- **ПН–СР:** 3–4 часа – новая тема + задания
- **ЧТ:** 1–2 часа – практика, лабы
- **ПТ:** лёгкий день – код-ревью, рефакторинг, мемы
- **СБ:** чтение статей, доклады (опционально)
- **ВС:** выходной

Общая длительность: **4–5 месяцев** при интенсивном режиме.

---

## 📚 ПОЛЕЗНЫЕ РЕСУРСЫ

- [Next.js Docs](https://nextjs.org/docs)
- [TanStack Query Docs](https://tanstack.com/query)
- [tRPC Docs](https://trpc.io)
- [Prisma Docs](https://www.prisma.io/docs)
- [Zod Docs](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [Sentry](https://sentry.io)

**YouTube:** UlbiTV, Хватит спорить (Артем Мичурин)  
**Книга:** "Чистая архитектура" – Роберт Мартин

---

## 🚀 ПЕРВОЕ ЗАДАНИЕ (Модуль 0)

1. Создай репозиторий на GitHub.
2. Инициализируй Vite + React + TypeScript.
3. Настрой `tsconfig.json` по шаблону ниже.
4. Напиши функцию `deepFreeze<T>(obj: T): DeepReadonly<T>`.
5. Напиши юнит-тест для неё (Vitest).
6. Настрой GitHub Actions: при каждом пуше в `main` запускай `tsc --noEmit` и `vitest run`.
7. Пришли мне ссылку на Pull Request.

### Шаблон `tsconfig.json`

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2022", "DOM", "DOM.Iterable"],
    "strict": true,
    "noUncheckedIndexedAccess": true,
    "noImplicitOverride": true,
    "noFallthroughCasesInSwitch": true,
    "exactOptionalPropertyTypes": true,
    "noPropertyAccessFromIndexSignature": true,
    "noImplicitReturns": true,
    "allowUnusedLabels": false,
    "allowUnreachableCode": false,
    "verbatimModuleSyntax": true,
    "skipLibCheck": false,
    "forceConsistentCasingInFileNames": true,
    "resolveJsonModule": true,
    "isolatedModules": true,
    "esModuleInterop": true,
    "jsx": "react-jsx"
  },
  "include": ["src"],
  "exclude": ["node_modules", "dist"]
}
```

---

## 💬 КАК ПОЛУЧИТЬ ПОМОЩЬ

- Задавай вопросы в комментариях к PR.
- Если что-то непонятно – пиши, разберём.
- В IT нет глупых вопросов, есть только те, кто боится спросить.

---

**ГОТОВ? НАЧИНАЕМ.**  
Жду твой PR. Погнали! 🔥🚀
```