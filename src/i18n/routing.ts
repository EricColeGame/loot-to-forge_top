import { defineRouting } from "next-intl/routing";
import { siteConfig } from "@/config/site";

/**
 * 语言集合的唯一真相源（single source of truth）。
 * 支持的语言直接内联在此处，其余三处必须与之一致：
 *   - src/i18n/request.ts 的 messagesMap
 *   - src/components/language-switcher.tsx 的 localeLabels
 *   - src/locales/*.json 的文件名集合
 */
export const routing = defineRouting({
  // 显式断言为 string[]：避免 next-intl 把字面量数组推断成元组后，
  // 与下方的 `defaultLocale: string` 类型冲突（Locale 因此保持为 string）。
  locales: ["en", "es", "pt", "de"] as string[],
  defaultLocale: siteConfig.defaultLocale,
  localePrefix: "always",
  localeDetection: false,
});

export type Locale = (typeof routing.locales)[number];
