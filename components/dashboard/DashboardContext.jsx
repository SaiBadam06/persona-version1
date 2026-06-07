"use client";

import { useRouter } from "next/navigation";
import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import { hrefFor } from "@/data/navigation";
import { demoSteps, DEMO_STORAGE_KEY } from "@/data/demo";

const DashboardContext = createContext(null);

export function useDashboard() {
  const ctx = useContext(DashboardContext);
  if (!ctx) throw new Error("useDashboard must be used within <DashboardProvider>");
  return ctx;
}

export function DashboardProvider({ children }) {
  const router = useRouter();
  const [modal, setModal] = useState("");
  const [toast, setToast] = useState("");
  const [tourStep, setTourStep] = useState(null); // null = tour inactive
  const toastTimer = useRef(null);

  const navigate = useCallback(
    (pageName) => {
      router.push(hrefFor(pageName));
    },
    [router]
  );

  const openModal = useCallback((title) => setModal(title), []);
  const closeModal = useCallback(() => setModal(""), []);

  const showToast = useCallback((message) => {
    setToast(message);
    if (toastTimer.current) clearTimeout(toastTimer.current);
    toastTimer.current = setTimeout(() => setToast(""), 2200);
  }, []);

  const markTourSeen = useCallback(() => {
    try {
      window.localStorage.setItem(DEMO_STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const goToStep = useCallback(
    (index) => {
      if (index < 0) return;
      if (index >= demoSteps.length) {
        setTourStep(null);
        markTourSeen();
        return;
      }
      const step = demoSteps[index];
      setTourStep(index);
      const query = step.buildTab ? `?tab=${encodeURIComponent(step.buildTab)}` : "";
      router.push(`${hrefFor(step.page)}${query}`);
    },
    [router, markTourSeen]
  );

  const startTour = useCallback(() => goToStep(0), [goToStep]);
  const nextStep = useCallback(() => goToStep((tourStep ?? -1) + 1), [goToStep, tourStep]);
  const backStep = useCallback(() => goToStep((tourStep ?? 0) - 1), [goToStep, tourStep]);
  const endTour = useCallback(() => {
    setTourStep(null);
    markTourSeen();
  }, [markTourSeen]);

  // ⌘K / Ctrl+K opens the command center
  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setModal("AI command center");
      }
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  // Auto-start the guided tour when ?tour=1 is present on any dashboard route.
  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    if (params.get("tour") === "1") {
      setTourStep((prev) => (prev === null ? 0 : prev));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const value = {
    navigate,
    modal,
    openModal,
    closeModal,
    toast,
    showToast,
    tourStep,
    tourActive: tourStep !== null,
    startTour,
    nextStep,
    backStep,
    endTour
  };

  return <DashboardContext.Provider value={value}>{children}</DashboardContext.Provider>;
}
