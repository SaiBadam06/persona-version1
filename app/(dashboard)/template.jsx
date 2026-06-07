"use client";

import { motion } from "framer-motion";
import PageHeader from "@/components/dashboard/PageHeader";

// A template re-mounts on every navigation, so the page-header + content
// entrance animation replays each time you switch routes.
export default function AppTemplate({ children }) {
  return (
    <>
      <PageHeader />
      <motion.div
        className="content"
        initial={{ opacity: 0, y: 24, filter: "blur(10px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 0.4, ease: [0.22, 0.8, 0.2, 1] }}
      >
        {children}
      </motion.div>
    </>
  );
}
