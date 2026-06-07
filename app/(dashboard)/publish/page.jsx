"use client";

import { Suspense } from "react";
import PublishPage from "@/components/dashboard/pages/PublishPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { openModal, showToast } = useDashboard();
  return (
    <Suspense fallback={null}>
      <PublishPage setModal={openModal} showToast={showToast} />
    </Suspense>
  );
}
