"use client";

import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Navbar from "@/components/landing/Navbar";
import Hero from "@/components/landing/Hero";
import FeatureShowcase from "@/components/landing/FeatureShowcase";
import WhyNowSection from "@/components/landing/WhyNowSection";
import CompoundingMemorySection from "@/components/landing/CompoundingMemorySection";
import SystemLearningSection from "@/components/landing/SystemLearningSection";
import RealVoiceSection from "@/components/landing/RealVoiceSection";
import HabitMoatSection from "@/components/landing/HabitMoatSection";
import Footer from "@/components/landing/Footer";
import DemoStartPrompt from "@/components/landing/DemoStartPrompt";
import { DEMO_STORAGE_KEY } from "@/data/demo";

export default function Page() {
  const router = useRouter();
  const [prompted, setPrompted] = useState(false);

  // Tour merged into the new landing: auto-prompt after first visit.
  useEffect(() => {
    let dismissed = false;
    try {
      dismissed = window.localStorage.getItem(DEMO_STORAGE_KEY) === "1";
    } catch {
      /* ignore */
    }
    if (dismissed) return;
    const t = setTimeout(() => setPrompted(true), 2400);
    return () => clearTimeout(t);
  }, []);

  const markSeen = () => {
    try {
      window.localStorage.setItem(DEMO_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  };
  const accept = () => {
    markSeen();
    router.push("/home?tour=1");
  };
  const decline = () => {
    markSeen();
    setPrompted(false);
  };

  return (
    <div
      id="personaon-app-root"
      style={{ display: "flex", flexDirection: "column", minHeight: "100vh", position: "relative", background: "var(--bg-light)" }}
    >
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <Hero />
        <FeatureShowcase />
        <WhyNowSection />
        <CompoundingMemorySection />
        <SystemLearningSection />
        <RealVoiceSection />
        <HabitMoatSection />
      </main>
      <Footer />
      <AnimatePresence>
        {prompted && <DemoStartPrompt onAccept={accept} onDecline={decline} />}
      </AnimatePresence>
    </div>
  );
}
