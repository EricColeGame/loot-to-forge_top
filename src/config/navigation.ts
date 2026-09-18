import { BookOpen, Code2, Flame, Swords, Trophy, Users, Zap, type LucideIcon } from "lucide-react";

/**
 * 顶部导航项契约。
 * 消费者（src/components/site.tsx 的 SiteHeader）读取 `key`（翻译键）与 `path`（站内路径），
 * 二者必须始终存在，重建导航时不要改名。
 */
export interface NavItem {
  /** src/locales/<locale>.json 的 "nav" 命名空间下的翻译键 */
  key: string;
  /** 站内绝对路径，如 "/codes"；同时对应 content/<locale>/<path> 的内容目录名 */
  path: `/${string}`;
  icon: LucideIcon;
  /** 是否对应 content/<locale>/<path> 下的 MDX 内容目录 */
  isContentType: boolean;
}

/**
 * 导航配置的唯一真相源。
 *
 * 分类 slug 来自关键词聚类产物（关键词.json 的 categories 数组），
 * 必须与 content/<locale>/ 下的文章子目录名一一对应，四处保持一致：
 *   - 本文件的 NAVIGATION_CONFIG
 *   - src/locales/en.json 的 "nav"（标签）与顶级 overviewTitle/overviewDescription
 *   - src/lib/content.ts 的 GROUP_TITLES / GROUP_ORDER
 *   - content/<locale>/<slug>/ 目录
 *
 * 顺序即导航栏与侧边栏的展示顺序（GROUP_ORDER 与此保持一致）。
 */
export const NAVIGATION_CONFIG = [
  { key: "guide", path: "/guide", icon: BookOpen, isContentType: true },
  { key: "codes", path: "/codes", icon: Code2, isContentType: true },
  { key: "items", path: "/items", icon: Swords, isContentType: true },
  { key: "mechanics", path: "/mechanics", icon: Flame, isContentType: true },
  { key: "progression", path: "/progression", icon: Zap, isContentType: true },
  { key: "rewards", path: "/rewards", icon: Trophy, isContentType: true },
  { key: "community", path: "/community", icon: Users, isContentType: true },
] satisfies readonly NavItem[];

/** 内容类型列表由导航配置派生，sitemap / 静态路由随之保持一致 */
export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
