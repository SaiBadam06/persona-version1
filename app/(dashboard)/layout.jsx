import { DashboardProvider } from "@/components/dashboard/DashboardContext";
import DashboardShell from "@/components/dashboard/DashboardShell";

export default function AppLayout({ children }) {
  return (
    <DashboardProvider>
      <DashboardShell>{children}</DashboardShell>
    </DashboardProvider>
  );
}
