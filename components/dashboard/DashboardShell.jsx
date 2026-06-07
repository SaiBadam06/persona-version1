"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hrefFor, nav, pageFromPathname } from "@/data/navigation";
import { demoSteps } from "@/data/demo";
import Sidebar from "./Sidebar";
import MockModal from "./MockModal";
import DemoOverlay from "./DemoOverlay";
import { useDashboard } from "./DashboardContext";

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const page = pageFromPathname(pathname);
  const { modal, closeModal, toast, showToast, tourStep, tourActive, nextStep, backStep, endTour } = useDashboard();

  return (
    <main
      className="app"
      onMouseMove={(e) => {
        e.currentTarget.style.setProperty("--cursor-x", `${e.clientX}px`);
        e.currentTarget.style.setProperty("--cursor-y", `${e.clientY}px`);
      }}
    >
      <div className="cursor-backdrop" />
      <a className="skip-link" href="#workspace-content">
        Skip to workspace
      </a>

      <Sidebar />

      <section className="workspace" id="workspace-content" tabIndex={-1}>
        <div className="workspace-ambient">
          <motion.span animate={{ x: [0, 22, -8, 0], y: [0, -12, 8, 0] }} transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span animate={{ x: [0, -18, 16, 0], y: [0, 18, -10, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} />
          <motion.span animate={{ x: [0, 12, -18, 0], y: [0, 10, -14, 0] }} transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }} />
        </div>

        {children}
      </section>

      <nav className="mobile-tabs">
        {nav.map(([name, Icon]) => (
          <Link key={name} className={page === name ? "active" : ""} href={hrefFor(name)}>
            <Icon size={19} />
            <span>{name}</span>
          </Link>
        ))}
      </nav>

      <AnimatePresence>
        {toast && (
          <motion.div
            className="toast"
            initial={{ opacity: 0, y: 24, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 360, damping: 24 }}
          >
            <Check size={16} /> {toast}
          </motion.div>
        )}
        {modal && <MockModal title={modal} onClose={closeModal} showToast={showToast} />}
      </AnimatePresence>

      <AnimatePresence>
        {tourActive && (
          <DemoOverlay
            step={tourStep}
            total={demoSteps.length}
            data={demoSteps[tourStep]}
            onNext={nextStep}
            onBack={backStep}
            onSkip={endTour}
          />
        )}
      </AnimatePresence>
    </main>
  );
}
