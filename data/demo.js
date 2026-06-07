import {
  Activity,
  Brain,
  Globe2,
  HelpCircle,
  LayoutDashboard,
  MessageCircle,
  Mic,
  PanelRight,
  Settings,
  Share2,
  Shield,
  User,
  Users,
  Video,
  Wand2,
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
    section: "Persona, Knowledge",
    buildTab: "Knowledge",
    icon: Brain,
    title: "Persona, Knowledge sources",
    body: "Connect what your twin learns from: LinkedIn, your website, documents, and more. Each source shows its health and citation coverage.",
    features: [
      "Add LinkedIn, files, URLs, and RSS",
      "Per-source health and score",
      "Citation coverage",
      "Extracted topics preview"
    ]
  },
  {
    page: "Persona",
    section: "Persona, Studio",
    buildTab: "Studio",
    icon: Wand2,
    title: "Persona, Studio",
    body: "Answer interview-style prompts to fill the gaps in your twin's knowledge and raise its quality score.",
    features: [
      "Interview prompt queue",
      "Saved answer library",
      "Gaps ranked by impact",
      "Live quality score"
    ]
  },
  {
    page: "Persona",
    section: "Persona, Chat",
    buildTab: "Chat",
    icon: MessageCircle,
    title: "Persona, Chat testing",
    body: "Ask your twin anything and see cited answers, exactly as a visitor would. Catch weak answers before they go public.",
    features: [
      "Natural-language questions",
      "Cited, sourced answers",
      "Queued visitor questions",
      "Voice and text input"
    ]
  },
  {
    page: "Persona",
    section: "Persona, Voice",
    buildTab: "Voice",
    icon: Mic,
    title: "Persona, Voice clone",
    body: "Optionally record a short sample so your twin can speak answers aloud in your own voice.",
    features: [
      "90-second sample",
      "Consent controls",
      "Voice preview",
      "TTS for public chat"
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
    section: "Publish, Profile",
    buildTab: "Profile",
    icon: User,
    title: "Publish, Profile",
    body: "Edit the details visitors see: name, headline, role, and bio. The completeness checklist shows what is left to do.",
    features: [
      "Name, headline, role, and bio",
      "Social links",
      "Completeness checklist",
      "Save as draft"
    ]
  },
  {
    page: "Publish",
    section: "Publish, Distribution",
    buildTab: "Distribution",
    icon: Share2,
    title: "Publish, Distribution",
    body: "Control where your twin appears: the public page, the website widget, and share links with visibility toggles.",
    features: [
      "Public page visibility",
      "Website widget setup",
      "Share studio: QR, social, email",
      "Booking button"
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
