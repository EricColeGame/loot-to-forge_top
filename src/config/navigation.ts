import type { LucideIcon } from "lucide-react";

/**
 * 顶部导航项契约。
 * 消费者（src/components/site.tsx 的 SiteHeader）读取 `key`（翻译键）与 `path`（站内路径），
 * 二者必须始终存在，重建导航时不要改名。
 */
export interface NavItem {
  /** src/locales/<locale>.json 的 "nav" 命名空间下的翻译键 */
  key: string;
  /** 站内绝对路径，如 "/codes" */
  path: string;
  icon: LucideIcon;
  /** 是否对应 content/<locale>/<path> 下的 MDX 内容目录 */
  isContentType: boolean;
}

/**
 * 导航配置已清空（旧主题导航全部移除），后续按新主题内容结构重建。
 * 消费方均为 .map() 遍历，空数组安全：不渲染任何链接，且不会产生 404 路径。
 */
export const NAVIGATION_CONFIG: readonly NavItem[] = [];

/** 内容类型列表由导航配置派生，清空后为 []，sitemap / 静态路由随之不再生成旧内容页 */
export const CONTENT_TYPES: readonly string[] = NAVIGATION_CONFIG.filter(
  (item) => item.isContentType,
).map((item) => item.path.replace(/^\//, ""));
