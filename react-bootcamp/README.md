# 🚀 ИНЖЕНЕРНЫЙ СПЕЦНАЗ: REACT 2026

## От новичка до Middle+ за 4–5 месяцев жесткого тренинга

> **Философия:** Ты не просто учишь библиотеки — ты учишься решать проблемы бизнеса.  
> Каждый модуль заканчивается задачей, которая могла бы прийти в реальном спринте.  
> **Никакого `any` без объяснения. Никаких пропусков. Только код, архитектура и инженерное мышление.**

---

## 🎯 КОМПЕТЕНЦИИ НА ВЫХОДЕ

| Скилл | Уровень |
|-------|---------|
| TypeScript (Generics, Conditional, Mapped, Template Literal Types) | ⭐⭐⭐⭐⭐ |
| React (Hooks, Composition, Performance, Compound Components) | ⭐⭐⭐⭐⭐ |
| Next.js 15 (App Router, RSC, Server Actions, Caching, Streaming) | ⭐⭐⭐⭐⭐ |
| Асинхронность (Event Loop, Promise, Async/Await, AbortController, Debounce/Throttle) | ⭐⭐⭐⭐⭐ |
| Многопоточность (Web Workers, Shared Workers, Service Workers, Comlink, OffscreenCanvas) | ⭐⭐⭐⭐ |
| Fullstack (tRPC + Prisma, WebSocket) | ⭐⭐⭐⭐⭐ |
| State Management (React Query + Zustand) | ⭐⭐⭐⭐⭐ |
| Тестирование (Unit, Integration, E2E, a11y, асинхронное) | ⭐⭐⭐⭐ |
| Архитектура (Feature-Based, SOLID, Adapters, Services, Dependency Injection) | ⭐⭐⭐⭐⭐ |
| CI/CD (GitHub Actions, автоматизация) | ⭐⭐⭐⭐ |
| Безопасность (XSS, CSRF, JWT в cookies) | ⭐⭐⭐⭐ |
| Мониторинг (Sentry, Web Vitals) | ⭐⭐⭐ |
| PWA, Offline, Push-уведомления | ⭐⭐⭐⭐ |
| Работа с файлами (Excel, PDF, большие данные) | ⭐⭐⭐⭐ |

---

## 📚 СТРУКТУРА КУРСА (15 МОДУЛЕЙ)

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
- React Query: оптимистичные обновления, зависимые запросы, бесконечный скролл, параллельные запросы
- Zustand (клиентское состояние)
- React Hook Form + Zod (сложные формы, массивы полей)
- **Практика:** Личный кабинет с профилем, аватаром, таблицей заказов

---

### Модуль 6: АСИНХРОННОСТЬ В JAVASCRIPT (НОВЫЙ!)
- Event Loop, Microtasks и Macrotasks – как всё работает под капотом
- Promise: состояния, цепочки, статические методы, создание своего Promise
- Async/Await: сахар и его работа на генераторах
- Отмена операций: `AbortController`, `AbortSignal`, отмена fetch и собственных операций
- Race Conditions и борьба с ними (паттерн «последний победил»)
- Debounce и Throttle – реализация, применение
- Асинхронные итераторы и генераторы (`async function*`, `for await...of`)
- **Практика:** Поиск с автодополнением (debounce + отмена запросов), потоковая загрузка данных

---

### Модуль 7: Fullstack на tRPC + Prisma
- Prisma: модели, миграции, отношения, CRUD
- tRPC: роутеры, middleware, валидация, ошибки, подписки (WebSocket)
- JWT в httpOnly cookies (безопасность)
- **Практика:** Блог с комментариями, авторизация, роли, real-time обновления

### Модуль 8: Next.js 15 – серверный рендеринг и оптимизация
- App Router: layouts, loading, error, streaming
- Server Components vs Client Components
- Server Actions (асинхронные мутации без API)
- Стратегии кэширования: Request Memoization, Data Cache, Full Route Cache
- Middleware, Edge Runtime, динамические метаданные
- **Практика:** Миграция проекта с Vite на Next.js с грамотным кэшированием

### Модуль 9: Архитектура – код, который живёт годами
- Feature-Based структура (группировка по фичам)
- Adapter Pattern (трансформация данных с бэка)
- Repository Pattern и Service Layer (абстракция над API)
- Dependency Injection
- **Практика:** Рефакторинг по SOLID + адаптеры для API

---

### Модуль 10: МНОГОПОТОЧНОСТЬ В БРАУЗЕРЕ (НОВЫЙ!)
- Web Workers: создание, обмен данными (`postMessage`), ограничения
- Transferable Objects – передача данных без копирования (ArrayBuffer)
- SharedArrayBuffer (общая память) – с осторожностью
- Comlink – RPC-библиотека для удобной работы с воркерами
- OffscreenCanvas – рендеринг в фоновом потоке
- Shared Workers – общение между вкладками
- Service Workers – прокси, перехват запросов, кэширование, оффлайн
- **Практика:** Обработка изображений в воркере, экспорт отчётов в фоне, PWA с Service Worker

---

### Модуль 11: Тесты, безопасность, мониторинг, производительность
- Тесты: Unit (Vitest), Integration, E2E (Playwright)
- Тестирование Server Components, tRPC процедур, асинхронного кода, Web Workers
- a11y-тесты (axe)
- Безопасность: XSS, CSRF, JWT в cookies, Helmet, CORS
- Мониторинг: Sentry (ошибки), Web Vitals
- Производительность: профилировка, memo, виртуализация (react-window), Code Splitting
- **Практика:** Настроить CI/CD с блокировкой мержа при падении тестов, добавить Sentry

### Модуль 12: Реальное время (WebSocket)
- Socket.io сервер в Next.js (или отдельно)
- Хук `useSocket`
- Real-time чат или уведомления
- **Практика:** Чат в HR-панели

### Модуль 13: Работа с файлами и данными
- Импорт/экспорт Excel (xlsx) – с обработкой в воркере
- Экспорт PDF (react-pdf)
- Загрузка больших файлов с прогрессом, прерыванием, возобновлением
- **Практика:** Импорт кандидатов из Excel, экспорт отчёта в PDF

### Модуль 14: Offline и PWA
- Service Worker: регистрация, кэширование статики и API, обновление
- Оффлайн-режим
- Push-уведомления
- **Практика:** Сделать приложение доступным офлайн, настроить уведомления о новых вакансиях

### Модуль 15: БОНУС – Продвинутые паттерны асинхронности
- RxJS (базово) – реактивные потоки
- Async/Await vs Generators – когда что использовать
- Cancellation Tokens (своя реализация)
- Async Iterators – применение в реальных задачах
- **Практика:** Реализовать простой аналог RxJS или потоковую обработку данных

---

## 🏁 ФИНАЛЬНЫЙ ПРОЕКТ (СКВОЗНОЙ)

**HR-панель управления** – объединяет все модули:

- Next.js 15 (App Router) + tRPC + Prisma (PostgreSQL)
- Аутентификация (JWT в cookies) + роли (админ/рекрутер)
- Дашборд с графиками (Recharts)
- Список кандидатов с виртуализацией, фильтрами (в URL), экспортом в Excel (в воркере)
- Чат (WebSocket) между рекрутерами
- Импорт кандидатов из Excel (с обработкой в воркере)
- PWA + оффлайн (Service Worker)
- Полные тесты (Unit + Integration + E2E, включая асинхронные)
- Sentry + Web Vitals
- Деплой на Vercel с GitHub Actions

---

## 📋 ПРАВИЛА ПРОХОЖДЕНИЯ

1. **Запрет на `any`** – каждое использование должно быть обосновано в комментарии.
2. **Code Review** – после каждого модуля создаёшь Pull Request. Я ревьювлю как в FAANG.
3. **Защита модуля** – ты должен объяснить каждую строчку кода устно (или письменно).
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

**Официальная документация:**
- [Next.js](https://nextjs.org/docs)
- [TanStack Query](https://tanstack.com/query)
- [tRPC](https://trpc.io)
- [Prisma](https://www.prisma.io/docs)
- [Zod](https://zod.dev)
- [React Hook Form](https://react-hook-form.com)
- [Vitest](https://vitest.dev)
- [Playwright](https://playwright.dev)
- [Sentry](https://sentry.io)
- [Comlink](https://github.com/GoogleChromeLabs/comlink)
- [MDN: Web Workers](https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API)
- [MDN: Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API)

**Книги:**
- "Чистая архитектура" – Роберт Мартин (для мышления)
- "RxJS in Action" – для бонусного модуля (опционально)

**YouTube:**
- UlbiTV
- Хватит спорить (Артем Мичурин)

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