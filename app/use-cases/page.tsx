"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import Footer from "@/components/landing/Footer";
import UseCasesSections from "@/components/landing/UseCasesSections";
import UseCasesInteractiveWorkflow from "@/components/landing/UseCasesInteractiveWorkflow";

export default function UseCasesPage() {
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
        <UseCasesSections />
        <UseCasesInteractiveWorkflow />
      </main>
      <Footer />
    </div>
  );
}
