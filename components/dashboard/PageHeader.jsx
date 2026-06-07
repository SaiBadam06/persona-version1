"use client";

import { motion } from "framer-motion";
import { Bell, Sparkles, User } from "lucide-react";
import { usePathname } from "next/navigation";
import { allScreens, pageFromPathname, subtitleFor } from "@/data/navigation";
import { MagneticButton, SplitText } from "@/components/ui/motion";
import { useDashboard } from "./DashboardContext";

export default function PageHeader() {
  const pathname = usePathname();
  const page = pageFromPathname(pathname);
  const PageIcon = allScreens.find(([name]) => name === page)?.[1] || Sparkles;
  const { showToast, navigate } = useDashboard();

  return (
    <header className="app-header">
      <div className="page-title">
        <motion.div
          key={`${page}-icon`}
          initial={{ rotate: -20, scale: 0.7, opacity: 0 }}
          animate={{ rotate: 0, scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 260, damping: 18 }}
          className="page-title-icon"
        >
          <PageIcon size={24} />
        </motion.div>
        <div>
          <h1>
            <SplitText key={page}>{page}</SplitText>
          </h1>
          <p>{subtitleFor(page)}</p>
        </div>
      </div>

      <div className="top-actions">
        <span className="status-pill live">
          <span className="live-dot" /> Live
        </span>
        <MagneticButton
          className="icon-btn"
          aria-label="Open notifications"
          strength={0.4}
          onClick={() => showToast("Notifications opened")}
        >
          <Bell size={18} />
        </MagneticButton>
        <button className="account" onClick={() => navigate("Settings")}>
          <User size={16} /> Sai
        </button>
      </div>
    </header>
  );
}
