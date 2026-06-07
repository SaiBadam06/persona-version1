"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { hrefFor, nav, navChildren, pageFromPathname } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();
  const page = pageFromPathname(pathname);

  return (
    <aside className="sidebar">
      <div className="sidebar-sheen" />
      <Link className="brand" href="/home" style={{ cursor: "pointer" }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/personaon_logo.png" alt="PersonaOn" className="brand-logo" />
      </Link>
      <nav>
        <span className="nav-section-label">Workspace</span>
        {nav.map(([name, Icon], i) => (
          <div className="nav-group" key={name}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.04 }}
            >
              <Link className={page === name ? "nav-item active" : "nav-item"} href={hrefFor(name)}>
                <Icon size={18} />
                <span>{name}</span>
                {page === name && (
                  <motion.span
                    layoutId="nav-pip"
                    className="nav-pip"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            </motion.div>
            {navChildren[name] && (page === name || navChildren[name].includes(page)) && (
              <div className="nav-subitems">
                {navChildren[name].map((child) => (
                  <Link key={child} className={page === child ? "active" : ""} href={hrefFor(child)}>
                    {child}
                  </Link>
                ))}
              </div>
            )}
          </div>
        ))}
      </nav>
      <div className="sidebar-card">
        <div className="mini-orb" />
        <span className="sidebar-card-kicker">Active persona</span>
        <strong>Aria Morgan</strong>
        <p>84% ready. Public profile is live, meeting capture connected, 2 lead pings today.</p>
        <div className="sidebar-meter">
          <motion.i initial={{ width: 0 }} animate={{ width: "84%" }} transition={{ duration: 1.2, delay: 0.4 }} />
        </div>
        <Link href={hrefFor("Home")}>Open overview</Link>
      </div>
    </aside>
  );
}
