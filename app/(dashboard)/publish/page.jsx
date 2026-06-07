"use client";

import PublishPage from "@/components/dashboard/pages/PublishPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return <PublishPage setModal={openModal} showToast={showToast} />;
}
