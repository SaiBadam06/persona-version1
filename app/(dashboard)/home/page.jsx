"use client";

import HomePage from "@/components/dashboard/pages/HomePage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { navigate, openModal, showToast } = useDashboard();
  return <HomePage setPage={navigate} setModal={openModal} showToast={showToast} />;
}
