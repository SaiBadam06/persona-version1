"use client";

import MarketplacePage from "@/components/dashboard/pages/MarketplacePage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { navigate } = useDashboard();
  return <MarketplacePage setPage={navigate} />;
}
