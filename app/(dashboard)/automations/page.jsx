"use client";

import AutomationsPage from "@/components/dashboard/pages/AutomationsPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return <AutomationsPage setModal={openModal} showToast={showToast} />;
}
