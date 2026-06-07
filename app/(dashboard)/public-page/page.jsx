"use client";

import PublicPersonaPage from "@/components/dashboard/pages/PublicPersonaPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal } = useDashboard();
  return <PublicPersonaPage setModal={openModal} />;
}
