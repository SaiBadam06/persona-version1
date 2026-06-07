"use client";

import MeetingsPage from "@/components/dashboard/pages/MeetingsPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return <MeetingsPage setModal={openModal} showToast={showToast} />;
}
