"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { routing, type Locale } from "@/i18n/routing";

/**
 * 本地化 404 页面。
 * not-found.tsx 拿不到 params，因此语言从当前路径前缀推导（与 language-switcher 同思路），
 * 推导失败时回退到 routing.defaultLocale，避免拼出 /undefined/... 这类死链。
 */
export default function NotFoundPage() {
  const t = useTranslations("shared");
  const pathname = usePathname();
  const segment = pathname.split("/").filter(Boolean)[0] ?? "";
  const locale: Locale = routing.locales.includes(segment) ? segment : routing.defaultLocale;

  return (
    <main className="mx-auto grid min-h-[60vh] max-w-3xl place-items-center px-4 py-16 text-center">
      <div className="rounded-3xl border border-border bg-card/70 p-8">
        <h1 className="text-4xl font-extrabold tracking-tight text-foreground">{t("notFoundTitle")}</h1>
        <p className="mt-4 text-muted-foreground">{t("notFoundDescription")}</p>
        <Button asChild className="mt-6"><Link href={`/${locale}/guide`}>{t("browseGuides")}</Link></Button>
      </div>
    </main>
  );
}
