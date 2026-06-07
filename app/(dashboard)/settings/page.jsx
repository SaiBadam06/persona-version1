"use client";

import SettingsPage from "@/components/dashboard/pages/SettingsPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return <SettingsPage setModal={openModal} showToast={showToast} />;
}
