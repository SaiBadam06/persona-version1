import {
  BadgeCheck,
  Clock,
  Compass,
  Infinity as InfinityIcon,
  Layers,
  MessageCircle,
  Mic,
  Rocket,
  Search,
  Shield,
  Star,
  TrendingUp,
  Users
} from "lucide-react";

export const brandStrip = [
  "Northstar",
  "Seedloop",
  "Studio Five",
  "Arc Studio",
  "Heliograph",
  "Atlas Capital",
  "Cardinal & Co",
  "Foundry 7"
];

export const pillars = [
  {
    icon: Mic,
    tag: "Capture",
    title: "Joins every meeting, automatically.",
    body: "Native to Zoom, Meet, and Teams. Records, transcribes, and structures, no bot to invite.",
    accent: "violet"
  },
  {
    icon: Layers,
    tag: "Organize",
    title: "Filed by project, person, and decision.",
    body: "Every meeting attached to the work it belongs to. Context surfaces exactly where you need it.",
    accent: "cyan"
  },
  {
    icon: Search,
    tag: "Recall",
    title: "Ask in your words. Get the moment cited.",
    body: "Natural-language search across every call. Each answer points to the exact line that was said.",
    accent: "emerald"
  },
  {
    icon: InfinityIcon,
    tag: "Compound",
    title: "Smarter every meeting.",
    body: "Context carries from call to call. Your tenth client conversation already knows the first nine.",
    accent: "amber"
  }
];

export const moduleShowcase = [
  {
    name: "Capture",
    kicker: "01, Capture",
    title: "Show up. We'll handle the writing down.",
    body: "Auto-join your calls, transcribe with speaker labels, and pull out decisions and follow-ups in the background.",
    points: ["Zoom · Meet · Teams native", "Speaker-labeled transcripts", "Decisions & follow-ups detected", "No bot to invite manually"]
  },
  {
    name: "Organize",
    kicker: "02, Organize",
    title: "One memory, sorted three ways.",
    body: "Every meeting filed by project, by person, and by decision, so context for the next conversation is already waiting.",
    points: ["Per-project timeline", "Per-person dossier", "Decision log with sources", "Follow-up board with due dates"]
  },
  {
    name: "Recall",
    kicker: "03, Recall",
    title: "Ask. Get the answer with receipts.",
    body: "Natural-language search across everything ever said. Citations link straight to the moment in the call.",
    points: ["\"What did we promise Acme?\"", "\"What's open with Maya?\"", "\"When did we decide on pricing?\"", "Every answer timestamped"]
  },
  {
    name: "Connect",
    kicker: "04, Connect",
    title: "Plays nicely with the rest of your stack.",
    body: "Push decisions to Slack, follow-ups to Linear, context to your CRM. Memory flows to where work happens.",
    points: ["Slack & Gmail digests", "Linear, Notion, Asana follow-ups", "Salesforce & HubSpot context", "Calendar-aware prep"]
  }
];

export const stats = [
  { value: 1284, label: "Meetings remembered / mo", suffix: "", icon: MessageCircle },
  { value: 89, label: "Cited recall accuracy", suffix: "%", icon: BadgeCheck },
  { value: 47, label: "Hours reclaimed per month", suffix: "h", icon: Clock },
  { value: 290, label: "Decisions never lost", suffix: "+", icon: TrendingUp }
];

export const useCases = [
  {
    tag: "Founders",
    title: "Stop rebuilding decisions every Monday.",
    body: "What the team agreed on Friday is still here on Monday, sourced and ready to act on.",
    icon: Rocket
  },
  {
    tag: "Consultants & Advisors",
    title: "Every client's context, instantly recallable.",
    body: "Walk into the next call already remembering the last six, without re-reading a single note.",
    icon: Compass
  },
  {
    tag: "Sales & Account Managers",
    title: "Know what was promised, before the renewal.",
    body: "Every commitment, objection, and stakeholder mood logged against the account. No surprise churn.",
    icon: TrendingUp
  },
  {
    tag: "Managers & Executives",
    title: "Stay close to the work, not every meeting.",
    body: "Friday digest reads like you were in the room. Drill into the moment when you weren't.",
    icon: Shield
  },
  {
    tag: "Recruiters",
    title: "Every candidate's signal, in one place.",
    body: "Screens, panel debriefs, hiring-manager calls, stitched per candidate, instantly recallable.",
    icon: Users
  },
  {
    tag: "Creators & Trainers",
    title: "Coaching calls that become a body of work.",
    body: "Every session adds to a library you and your students can search forever.",
    icon: Star
  }
];

export const testimonials = [
  {
    quote: "I stopped re-reading transcripts. I ask PersonaOn 'what did we agree on pricing?', and it tells me, with the exact moment cited.",
    name: "Maya Chen",
    role: "Growth Lead, Northstar"
  },
  {
    quote: "Half my consultancy is remembering what every client said three months ago. PersonaOn handed me that memory back.",
    name: "Daniel Ruiz",
    role: "Founder, Seedloop"
  },
  {
    quote: "Renewal conversations are night and day. Our team finally has one source of truth for what was actually decided.",
    name: "Priya Shah",
    role: "Design Partner, Studio Five"
  },
  {
    quote: "I forwarded the weekly summary to my board without editing a word. First AI thing I've ever said that about.",
    name: "Jon Bell",
    role: "Operator-in-Residence, Heliograph"
  }
];

export const pricingTeases = [
  {
    name: "Starter",
    price: "$0",
    tag: "individuals",
    perks: ["1 user", "5 meetings / month", "30-day memory window", "Basic recall search"],
    cta: "Start free"
  },
  {
    name: "Pro",
    price: "$29",
    tag: "founders & consultants",
    perks: ["Unlimited meetings", "Permanent memory", "Slack & Gmail digests", "Action items & follow-ups", "Voice + chat recall"],
    cta: "Start 14-day trial",
    highlight: true
  },
  {
    name: "Studio",
    price: "Talk to us",
    tag: "teams & agencies",
    perks: ["Shared team memory", "SSO + admin controls", "CRM integrations", "API + workflows", "Dedicated success"],
    cta: "Book a walkthrough"
  }
];
