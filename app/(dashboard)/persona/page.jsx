"use client";

import { Suspense } from "react";
import PersonaPage from "@/components/dashboard/pages/PersonaPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return (
    <Suspense fallback={null}>
      <PersonaPage setModal={openModal} showToast={showToast} />
    </Suspense>
  );
}
