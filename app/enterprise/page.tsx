"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import TrustSection from "@/components/landing/TrustSection";
import TelemetryDashboard from "@/components/landing/TelemetryDashboard";
import TeamsSection from "@/components/landing/TeamsSection";

export default function EnterprisePage() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        position: "relative",
        background: "var(--bg-light)",
      }}
    >
      <Navbar />
      <main style={{ flexGrow: 1 }}>
        <TrustSection />
        <TelemetryDashboard />
        <TeamsSection />
      </main>
      <Footer />
    </div>
  );
}
