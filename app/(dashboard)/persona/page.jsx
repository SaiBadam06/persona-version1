"use client";

import { useEffect, useState } from "react";
import PersonaPage from "@/components/dashboard/pages/PersonaPage";
import { useDashboard } from "@/components/dashboard/DashboardContext";

export default function Page() {
  const { navigate, openModal, showToast } = useDashboard();
  const [tab, setTab] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setTab(params.get("tab"));
  }, []);

  return (
    <PersonaPage
      setPage={navigate}
      setModal={openModal}
      showToast={showToast}
      buildTabOverride={tab}
    />
  );
}
