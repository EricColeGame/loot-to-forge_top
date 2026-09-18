import { siteConfig } from "@/config/site";
import { LegalPage } from "@/components/legal-page";

export default function PrivacyPolicyPage() {
  return (
    <LegalPage title="Privacy Policy">
      <p>This fan wiki provides informational game guides for Loot to Forge. We do not request account credentials, Roblox passwords, or private payment information.</p>
      <p>Basic analytics, advertising, and hosting providers may process standard technical information such as device type, browser, approximate region, and visited pages.</p>
      <p>External links may lead to Roblox, Discord, YouTube, or community tools. Those services are governed by their own privacy policies.</p>
      <p>Questions about this policy can be sent to <a className="font-semibold text-[hsl(var(--nav-theme))] hover:underline" href={`mailto:${siteConfig.supportEmail}`}>{siteConfig.supportEmail}</a>.</p>
    </LegalPage>
  );
}
