import js from "@eslint/js";
import tseslint from "typescript-eslint";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";

export default tseslint.config(
  // Глобальные игноры
  { ignores: ["dist", "node_modules", "*.config.*"] },

  // Базовые правила JS
  js.configs.recommended,

  // TypeScript + React
  ...tseslint.configs.recommended,
  {
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      // Запрет any — как в правилах буткемпа
      "@typescript-eslint/no-explicit-any": "error",
      // Запрет неиспользуемых переменных (с исключением для _)
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
    },
  },
);