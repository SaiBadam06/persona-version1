import {
  Activity,
  ArrowUpRight,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  MessageCircle,
  Mic,
  PanelRight,
  Settings,
  Sparkles,
  Upload,
  Users,
  Video,
  Workflow
} from "lucide-react";

export const nav = [
  ["Home", LayoutDashboard],
  ["Persona", Sparkles],
  ["Meetings", Video],
  ["Publish", Globe2],
  ["Automations", Workflow],
  ["Insights", Activity],
  ["Settings", Settings]
];

export const allScreens = [
  ...nav,
  ["Marketplace", Users],
  ["Public Persona Page", Globe2],
  ["Embedded Widget", PanelRight],
  ["Admin Preview", LayoutDashboard],
  ["Help & Legal", HelpCircle]
];

export const navChildren = {
  Publish: ["Marketplace", "Public Persona Page", "Embedded Widget"],
  Insights: ["Admin Preview"],
  Settings: ["Help & Legal"]
};

export const commandSuggestions = [
  ["Ask Aria anything", "Test a cited answer in Persona chat", MessageCircle, "Persona"],
  ["Add memory", "Upload a source, link, or transcript", Upload, "Persona"],
  ["Capture meeting", "Review the next call and transcript flow", Mic, "Meetings"],
  ["Publish persona", "Open public page, widget, and share controls", ArrowUpRight, "Publish"]
];

// ---------- ROUTING: page name <-> URL slug ----------
// Dashboard routes live under the (app) route group, so slugs map to /<slug>.
export const pageToSlug = {
  Home: "home",
  Persona: "persona",
  Chat: "chat",
  Meetings: "meetings",
  Publish: "publish",
  Automations: "automations",
  Insights: "insights",
  Settings: "settings",
  Marketplace: "marketplace",
  "Public Persona Page": "public-page",
  "Embedded Widget": "widget",
  "Admin Preview": "admin",
  "Help & Legal": "help"
};

export const slugToPage = Object.fromEntries(
  Object.entries(pageToSlug).map(([name, slug]) => [slug, name])
);

export function hrefFor(pageName) {
  const slug = pageToSlug[pageName] || "home";
  return `/${slug}`;
}

export function pageFromPathname(pathname) {
  const slug = (pathname || "/").split("?")[0].replace(/^\//, "").split("/")[0];
  return slugToPage[slug] || "Home";
}

export const subtitles = {
  Home: "Mission control, readiness, activity, leads, meetings, and what to do next.",
  Persona: "Profile, knowledge, studio Q&A, chat testing, and voice cloning.",
  Chat: "Recall in your own words, every answer cited to the moment it was said.",
  Meetings: "Bookings, live transcripts, summaries, twin attendance, weekly digest.",
  Publish: "Public page, marketplace, widget embed, share links, QR, visibility controls.",
  Automations: "Actions, triggers, connectors, approvals, execution history, API keys.",
  Insights: "Conversation analytics, lead quality, top questions, answer scoring.",
  Settings: "Account, billing, usage, privacy, exports, consent.",
  Marketplace: "Opt-in discovery directory by topic, geography, and category.",
  "Public Persona Page": "Your visitor-facing profile with chat, voice, booking, and share.",
  "Embedded Widget": "Drop-in embed for any site, colors, position, lead capture.",
  "Admin Preview": "Internal operations view: monitoring, audits, graph tooling, safety.",
  "Help & Legal": "Help center, contact, policy library, and consent management."
};

export function subtitleFor(pageName) {
  return subtitles[pageName] || "";
}
