export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Loot to Forge Wiki",
  shortName: "Loot to Forge",
  logoText: "LF",
  tagline: "Codes, Forging Guides, Items & Progression Tips",
  description: "Loot to Forge is a Roblox crafting adventure built around collecting loot, forging powerful equipment and upgrading weapons. This fan wiki covers working codes, forging and crafting guides, item lists, rebirth and progression strategies.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://loot-to-forge.top",
  supportEmail: `support@${new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://loot-to-forge.top").hostname.replace(/^www\./, "")}`,
  gameUrl: "https://www.roblox.com/games/118805555015549/1-Loot-To-Forge",
  heroVideoId: "lnDRkFWMWSo", // Roblox Loot to Forge gameplay showcase
  social: {
    // No standalone official Loot to Forge Discord/YouTube channel is published yet;
    // point at the verified Roblox official channels and label them accordingly.
    discord: "https://discord.gg/roblox",
    youtube: "https://www.youtube.com/@Roblox",
  },
  locales: ["en", "es", "pt", "de", "fr"],
  defaultLocale: "en",
};
