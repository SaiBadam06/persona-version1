import {
  Activity,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  PanelRight,
  Settings,
  Shield,
  Sparkles,
  Users,
  Video,
  Workflow
} from "lucide-react";

export const DEMO_STORAGE_KEY = "personaon_demo_seen_v1";

// Guided tour: walks every page and subpage, explaining what each one is for.
export const demoSteps = [
  {
    page: "Home",
    section: "Home",
    icon: LayoutDashboard,
    title: "Home, your mission control",
    body: "Your daily starting point. See how ready your persona is, what needs attention, and what to do next, all in one place.",
    features: [
      "Persona readiness at a glance",
      "Quick actions for common tasks",
      "Tasks waiting on you",
      "Recent activity from your twin"
    ]
  },
  {
    page: "Persona",
    section: "Persona",
    icon: Sparkles,
    title: "Persona, where you train your twin",
    body: "Feed your twin what it needs to sound like you. Add knowledge, fill gaps in the Studio, test answers in Chat, and clone your Voice.",
    features: [
      "Knowledge: connect sources and documents",
      "Studio: answer prompts to fill gaps",
      "Chat: test cited answers live",
      "Voice: record an optional voice clone"
    ]
  },
  {
    page: "Meetings",
    section: "Meetings",
    icon: Video,
    title: "Meetings, every call captured",
    body: "Bookings, live transcripts, and summaries in one view. Watch a call as it happens and review outcomes after.",
    features: [
      "Bookings inbox to approve requests",
      "Live capture with transcript",
      "Per-meeting outcomes and action items",
      "Weekly digest of what was decided"
    ]
  },
  {
    page: "Publish",
    section: "Publish",
    icon: Globe2,
    title: "Publish, your profile and distribution",
    body: "Set up your public profile and decide where it appears. The Profile tab edits your details; Distribution controls links, embeds, and sharing.",
    features: [
      "Profile: name, headline, role, and bio",
      "Distribution: public page and widget",
      "Share links, QR, and visibility toggles",
      "Completeness checklist"
    ]
  },
  {
    page: "Marketplace",
    section: "Publish, Marketplace",
    icon: Users,
    title: "Marketplace, get discovered",
    body: "An opt-in directory where founders, advisors, and creators can be found by topic or geography. Visitors can try your twin before reaching out.",
    features: [
      "Topic and category filters",
      "Verified twin badges",
      "Sample question previews",
      "Try-before-commit chat"
    ]
  },
  {
    page: "Public Persona Page",
    section: "Publish, Public page",
    icon: Globe2,
    title: "Public page, your shareable profile",
    body: "The visitor-facing page at your handle. People can chat with your twin, hear it in your voice, and book time with you.",
    features: [
      "Live preview of the visitor view",
      "Chat and voice toggles",
      "Optional booking button",
      "Share modal with QR and social"
    ]
  },
  {
    page: "Embedded Widget",
    section: "Publish, Widget",
    icon: PanelRight,
    title: "Widget, embed on any site",
    body: "Drop a one-line embed onto your website. Configure colors, position, welcome message, and lead capture without code.",
    features: [
      "Allowed domains list",
      "Bubble color and position",
      "Welcome and lead-capture prompts",
      "Public key with revocation"
    ]
  },
  {
    page: "Automations",
    section: "Automations",
    icon: Workflow,
    title: "Automations, memory in motion",
    body: "Push decisions to Slack, follow-ups to your tracker, and context to your CRM. Set rules once and let them run.",
    features: [
      "Triggers, actions, and approvals",
      "Slack, Gmail, and CRM connectors",
      "Action inbox and run history",
      "API keys and webhooks"
    ]
  },
  {
    page: "Insights",
    section: "Insights",
    icon: Activity,
    title: "Insights, your memory pulse",
    body: "See how much you are remembering, how often it gets recalled, and where to add memory next.",
    features: [
      "Conversation and engagement trends",
      "Top visitor questions",
      "Lead quality and intent",
      "Answerability and quality score"
    ]
  },
  {
    page: "Admin Preview",
    section: "Insights, Admin",
    icon: Shield,
    title: "Admin Preview, for ops teams",
    body: "An internal operations view for teams running PersonaOn across many users: monitoring, audits, and safety controls.",
    features: [
      "Twin health monitoring",
      "Audit log and change history",
      "Knowledge graph tooling",
      "Safety and consent checks"
    ]
  },
  {
    page: "Settings",
    section: "Settings",
    icon: Settings,
    title: "Settings, account and privacy",
    body: "Manage your account, billing, notifications, privacy, and data exports. The important but quiet controls live here.",
    features: [
      "Account and billing",
      "Notification preferences",
      "Privacy, consent, and exports",
      "Reset or delete your twin"
    ]
  },
  {
    page: "Help & Legal",
    section: "Settings, Help & Legal",
    icon: HelpCircle,
    title: "Help and Legal, answers and policies",
    body: "Find quickstart guides, contact support, and read the policies. One place for everything compliance related.",
    features: [
      "Help articles and quickstart",
      "Terms, Privacy, and Consent",
      "Compliance and data residency",
      "Contact support"
    ]
  }
];

export const featureDistribution = {
  Home: [
    ["Command center", ["Landing page", "Active persona overview", "Persona status card", "Persona quality and readiness score", "Knowledge readiness", "Public link shortcut"]],
    ["Operating pulse", ["Recent activity", "Recent chats", "Recent leads", "Recent meetings", "Calendar status preview"]],
    ["Access and onboarding", ["User signup", "Login", "Password reset", "Invitation acceptance flow", "Onboarding flow", "LinkedIn or manual persona creation"]],
    ["Next actions", ["Quick actions", "Re-enrich persona button", "Persona switcher", "Trial or plan notice", "Suggested next actions", "Persona lifecycle management"]]
  ]
};
