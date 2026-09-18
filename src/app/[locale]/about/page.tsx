import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function AboutPage() {
  return (
    <LegalPage title="About">
      <p>{siteConfig.name} is an independent fan-built guide hub covering the Loot to Forge gameplay loop: collecting loot, forging and upgrading gear, clearing dungeons, and progressing through rebirth.</p>
      <p>Our goal is to keep codes, item and weapon lists, forging recipes, and beginner walkthroughs in one place for new and veteran players alike.</p>
      <p>We are not affiliated with the developers of Loot to Forge or with Roblox Corporation. Questions or corrections can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
