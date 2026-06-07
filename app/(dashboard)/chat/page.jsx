"use client";

import ChatPage from "@/components/dashboard/pages/ChatPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return <ChatPage setModal={openModal} showToast={showToast} />;
}
