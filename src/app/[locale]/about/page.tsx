import { siteConfig } from "@/config/site";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { LegalPage } from "@/components/legal-page";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.about" });
  return { title: t("metaTitle"), description: t("metaDescription") };
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "legal.about" });
  return (
    <LegalPage title={t("title")}>
      <p>{t("p1", { name: siteConfig.name })}</p>
      <p>{t("p2")}</p>
      <p>{t.rich("contact", { email: siteConfig.supportEmail, link: (chunks) => <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{chunks}</a> })}</p>
    </LegalPage>
  );
}
