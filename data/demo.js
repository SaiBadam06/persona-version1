import {
  Activity,
  ArrowUpRight,
  Brain,
  HelpCircle,
  Hexagon,
  LayoutDashboard,
  MessageCircle,
  Mic,
  PanelRight,
  Settings,
  Shield,
  Star,
  User,
  Users,
  Wand2,
  Workflow
} from "lucide-react";

export const DEMO_STORAGE_KEY = "personaon_demo_seen_v1";

export const demoSteps = [
  {
    page: "Home",
    section: "Home",
    icon: LayoutDashboard,
    title: "Home — your work memory at a glance",
    body: "Mission control for everything PersonaOn remembers. See readiness, recent activity, and what to act on next.",
    features: [
      "Memory readiness score",
      "Recent meetings & decisions",
      "Open follow-ups",
      "Suggested next actions"
    ]
  },
  {
    page: "Persona",
    section: "Persona · Profile",
    buildTab: "Profile",
    icon: User,
    title: "Persona · Profile — who you are",
    body: "Your name, role, organization, and bio anchor every memory. PersonaOn uses this to attribute decisions and follow-ups to the right person.",
    features: [
      "Persona name, role, organization",
      "Bio & headline for context",
      "Social links",
      "Completeness checklist"
    ]
  },
  {
    page: "Persona",
    section: "Persona · Knowledge",
    buildTab: "Knowledge",
    icon: Brain,
    title: "Persona · Knowledge — sources of truth",
    body: "Upload docs, link your website or LinkedIn, drop in podcasts or YouTube. PersonaOn chunks, scores, and citation-pins everything.",
    features: [
      "LinkedIn · Resume · Files · URL · RSS",
      "Per-source health & quality",
      "Knowledge graph preview",
      "Extracted-fact cloud"
    ]
  },
  {
    page: "Persona",
    section: "Persona · Studio",
    buildTab: "Studio",
    icon: Wand2,
    title: "Persona · Studio — fill the gaps",
    body: "Interview-style prompts surface what's missing. Promote strong answers to verified, fix weak ones inline.",
    features: [
      "Interview-prompt queue",
      "Saved answer library",
      "Knowledge gaps highlighted",
      "Persona quality score"
    ]
  },
  {
    page: "Persona",
    section: "Persona · Voice",
    buildTab: "Voice",
    icon: Mic,
    title: "Persona · Voice — optional clone",
    body: "Record 90 seconds, accept consent, and PersonaOn can read recall answers back to you (or to your audience) in your voice.",
    features: [
      "90-second sample recording",
      "Consent & usage controls",
      "Voice preview generation",
      "TTS toggle for public chat"
    ]
  },
  {
    page: "Persona",
    section: "Persona · Chat",
    buildTab: "Chat",
    icon: MessageCircle,
    title: "Persona · Chat — recall in your own words",
    body: "Ask your work memory anything. Every answer points back to the exact moment in the call where it was said.",
    features: [
      "Natural-language search across calls",
      "Citation drawer with timestamps",
      "Queued visitor questions",
      "Voice & text input · streaming"
    ]
  },
  {
    page: "Meetings",
    section: "Meetings",
    icon: Hexagon,
    title: "Meetings — every call, captured",
    body: "Auto-joined meetings with speaker labels. Decisions and follow-ups extracted as soon as the call ends.",
    features: [
      "Bookings inbox & calendar status",
      "Live transcript & twin attendance",
      "Per-meeting summaries",
      "Weekly Friday digest"
    ]
  },
  {
    page: "Publish",
    section: "Publish",
    icon: ArrowUpRight,
    title: "Publish — where memory shows up",
    body: "Turn pieces of your memory into shareable surfaces with fine-grained toggles. Three distribution points covered next.",
    features: [
      "Public memory page (toggle by trait)",
      "Embed widget for your site",
      "Share studio · QR · signature",
      "Booking button"
    ]
  },
  {
    page: "Marketplace",
    section: "Publish · Marketplace",
    icon: Users,
    title: "Publish · Marketplace — discovery surface",
    body: "Opt-in directory where founders, advisors, and creators can be found by topic or geography. Optional revenue source.",
    features: [
      "Topic, geo, and category filters",
      "Verified twin badges",
      "Sample-Q&A previews",
      "Try-before-commit chat"
    ]
  },
  {
    page: "Public Persona Page",
    section: "Publish · Public page",
    icon: Star,
    title: "Publish · Public page — your handle",
    body: "personaon.ai/p/your-handle — visitor-facing profile with chat, voice, booking, and share controls.",
    features: [
      "Chat panel with citations",
      "Voice toggle & mic input",
      "Booking button (optional)",
      "Share modal · QR · social"
    ]
  },
  {
    page: "Embedded Widget",
    section: "Publish · Widget",
    icon: PanelRight,
    title: "Publish · Widget — embed on any site",
    body: "Drop a one-line embed. Configure colors, position, welcome message, lead capture — all without code.",
    features: [
      "Allowed domains list",
      "Bubble color & position",
      "Welcome & lead-capture prompts",
      "Public key with revocation"
    ]
  },
  {
    page: "Automations",
    section: "Automations",
    icon: Workflow,
    title: "Automations — memory in motion",
    body: "Push decisions to Slack, follow-ups to Linear, account context to your CRM. Memory flows where the work happens.",
    features: [
      "Triggers · actions · approval flows",
      "Slack · Gmail · Linear · Salesforce",
      "Action inbox & run history",
      "API keys · webhooks · domain limits"
    ]
  },
  {
    page: "Insights",
    section: "Insights",
    icon: Activity,
    title: "Insights — your memory pulse",
    body: "How much you're remembering, how often it gets recalled, and where the leverage is.",
    features: [
      "Conversations & engagement charts",
      "Top visitor questions",
      "Widget lead intent ranking",
      "Answerability & quality score"
    ]
  },
  {
    page: "Admin Preview",
    section: "Insights · Admin",
    icon: Shield,
    title: "Insights · Admin Preview — for ops teams",
    body: "Internal operations view: monitoring, audits, graph tooling, and safety controls. Useful for teams running PersonaOn for many users.",
    features: [
      "Twin health monitoring",
      "Audit log & change history",
      "Knowledge graph tooling",
      "Safety / consent checks"
    ]
  },
  {
    page: "Settings",
    section: "Settings",
    icon: Settings,
    title: "Settings — account & privacy",
    body: "Account, billing, retention, exports, and destructive controls — the boring-but-critical stuff.",
    features: [
      "Account & billing · usage meters",
      "Notifications & digests",
      "Privacy, consent, exports",
      "Reset / delete twin or account"
    ]
  },
  {
    page: "Help & Legal",
    section: "Settings · Help & Legal",
    icon: HelpCircle,
    title: "Settings · Help & Legal — answers & policies",
    body: "Help center, contact, policy library, and consent management. One place for everything compliance-related.",
    features: [
      "Help articles & quickstart",
      "Terms · Privacy · Consent",
      "Compliance & data residency",
      "Contact support"
    ]
  }
];

export const featureDistribution = {
  Home: [
    ["Command center", ["Landing page", "Active persona overview", "Persona status card", "Persona quality/readiness score", "Knowledge readiness", "Public link shortcut"]],
    ["Operating pulse", ["Recent activity", "Recent chats", "Recent leads", "Recent meetings", "Calendar status preview"]],
    ["Access and onboarding", ["User signup", "Login", "Password reset", "Invitation acceptance flow", "Onboarding flow", "LinkedIn/manual persona creation"]],
    ["Next actions", ["Quick actions", "Re-enrich persona button", "Persona switcher", "Trial/plan notice", "Suggested next actions", "Persona lifecycle management"]]
  ]
};
