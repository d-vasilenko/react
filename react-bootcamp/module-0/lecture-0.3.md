
## ТЕМА 0.3: СОЗДАНИЕ ПРОЕКТА С VITE + REACT + TYPESCRIPT

### 1. Введение: почему Vite, а не Create React App (CRA)?

**CRA** был стандартом несколько лет, но сейчас он считается устаревшим. Он использует Webpack под капотом, медленно стартует и требует много настроек для оптимизации.

**Vite** — это современный сборщик, который:
- Запускает сервер разработки **мгновенно** (использует нативные ES-модули в браузере, без бандлинга).
- Горячая замена модулей (HMR) работает в 10 раз быстрее.
- Сборка для продакшена использует Rollup, давая оптимизированные бандлы.

**Источники:** [Официальный сайт Vite](https://vitejs.dev/), [Почему Vite](https://vitejs.dev/guide/why.html).

---

### 2. Создание проекта

**Команда:**
```bash
pnpm create vite . --template react-ts
```

Эта команда:
- Скачивает шаблон `react-ts`.
- Создаёт структуру папок (`src`, `public`, `index.html` и т.д.).
- Генерирует `package.json` с базовыми зависимостями (React, ReactDOM, TypeScript, Vite).
- Создаёт базовый `tsconfig.json` (но мы его заменим на наш жёсткий).

---

### 3. Структура проекта после создания

- `index.html` – точка входа, подключает `src/main.tsx`.
- `src/` – исходники:
  - `main.tsx` – рендерит React-приложение в DOM.
  - `App.tsx` – корневой компонент.
  - `App.css` – стили.
  - `vite-env.d.ts` – объявления типов для Vite.
- `public/` – статические файлы (favicon и т.д.).
- `package.json` – зависимости и скрипты:
  - `dev` – запуск dev-сервера.
  - `build` – сборка продакшена.
  - `preview` – локальный просмотр собранного приложения.
- `tsconfig.json` – базовый конфиг TypeScript (мы его заменим).
- `tsconfig.node.json` – конфиг для Node.js (для Vite-конфигов).

---

### 4. Важные файлы конфигурации

- **`vite.config.ts`** – конфигурация Vite. По умолчанию содержит плагин `@vitejs/plugin-react` для поддержки React и быстрой HMR.
- **`package.json`** – обрати внимание на `"type": "module"` (проект работает как ESM).

---

### 5. Практическое задание по теме 0.3

**Цель:** создать проект с Vite + React + TypeScript, заменить `tsconfig.json` на наш жёсткий, убедиться, что всё компилируется.

**Шаги:**

1. Убедись, что ты находишься в корневой папке твоего репозитория (или создай новую папку для проекта).
2. Выполни `pnpm create vite . --template react-ts`.
3. Установи зависимости: `pnpm install`.
4. Замени сгенерированный `tsconfig.json` на наш жёсткий (я привожу его ниже).
5. Установи **Vitest** и нужные пакеты для тестирования:
   ```bash
   pnpm add -D vitest @testing-library/react @testing-library/jest-dom jsdom
   ```
6. Создай `vitest.config.ts` для настройки тестов (я даю конфиг ниже).
7. Проверь, что dev-сервер запускается: `pnpm run dev` — должна открыться страница.
8. Проверь, что сборка работает: `pnpm run build` — должна создаться папка `dist`.
9. Сделай коммит с сообщением `chore: init project with Vite + React + TS`.

---

### Жёсткий `tsconfig.json` (копируй в корень)

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

### `vitest.config.ts`

Создай в корне:

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    globals: true,
    environment: 'jsdom',
  },
});
```

---

### 6. Вопросы для самопроверки (ответь письменно)

1. Почему Vite быстрее CRA в режиме разработки?
2. Что такое горячая замена модулей (HMR) и как она работает в Vite?
3. Зачем в `tsconfig.json` нужен флаг `"verbatimModuleSyntax": true`?
4. Почему мы не используем CRA, а используем Vite?

---

### 7. Что дальше?

После выполнения этого задания и ответов на вопросы мы перейдём к **теме 0.4: Жёсткий `tsconfig.json` — настройка TypeScript на максимум** (там мы подробно разберём каждый флаг).

---

**Ты готов выполнить задание? Приступай. После выполнения пришли ссылку на коммит или PR.**