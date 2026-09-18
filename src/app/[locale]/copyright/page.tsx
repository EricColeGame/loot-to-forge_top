import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function CopyrightPage() {
  return (
    <LegalPage title="Copyright">
      <p>Loot to Forge, Roblox, in-game artwork, logos, and related media belong to their respective owners.</p>
      <p>{siteConfig.name} is a non-official fan wiki built for guide and reference purposes. We claim no ownership over the game or its assets.</p>
      <p>If you own rights to content displayed here and have a concern, please contact <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a> and we will review it.</p>
    </LegalPage>
  );
}
