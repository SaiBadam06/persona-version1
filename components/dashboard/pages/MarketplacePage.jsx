"use client";

import { motion } from "framer-motion";
import { Search, MessageSquare, ArrowUpRight, Rocket } from "lucide-react";
import { persona } from "@/data/persona";

export default function MarketplacePage({ setPage }) {
  const ease = [0.22, 1, 0.36, 1];
  const filters = ["Product", "Founder coaching", "US", "AI strategy"];
  const results = [
    { name: "Aria Morgan", role: persona.role, topic: "Product strategy & founder clarity" },
    { name: "Noah Patel", role: "Growth Operator", topic: "Go-to-market & retention" },
    { name: "Elena Torres", role: "Design Partner", topic: "Brand & product design" },
    { name: "Jon Bell", role: "Startup Advisor", topic: "Fundraising & investor prep" }
  ];

  return (
    <div className="page">
      {/* WHY: Search + filters lead the page, discovery is the one primary task, so the entry point sits first and minimal. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Discover personas</h2>
            <span className="why">Find verified founders, operators, and advisors</span>
          </div>
        </div>
        <div className="market-search">
          <Search size={18} />
          <input placeholder="Search by name, role, or topic…" />
        </div>
        <div className="filterbar">
          {filters.map((f, i) => (
            <button key={f} className={i === 0 ? "active" : undefined}>
              {f}
            </button>
          ))}
        </div>
      </motion.section>

      {/* WHY: Results are a clean grid-3 of comparable entries, same name/role/topic shape + a single Chat action, no card clutter. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.05 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>Results</h2>
            <span className="why">{results.length} published personas</span>
          </div>
        </div>
        <div className="grid-3">
          {results.map((r) => (
            <div key={r.name} className="card market-card">
              <div className="avatar large">
                {r.name
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <span className="mc-name">{r.name}</span>
              <span className="mc-role">{r.role}</span>
              <p className="mc-topic">{r.topic}</p>
              <div className="mc-foot">
                <span className="ui-badge ui-badge--green">Verified</span>
                <button className="meeting-join" onClick={() => setPage("Public Persona Page")}>
                  <MessageSquare size={14} /> Chat
                </button>
              </div>
            </div>
          ))}
        </div>
      </motion.section>

      {/* WHY: A single CTA section invites supply-side creators, one clear next step, no competing buttons. */}
      <motion.section
        className="section"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease, delay: 0.1 }}
      >
        <div className="section-head">
          <div className="section-head-text">
            <h2>List your persona</h2>
            <span className="why">Publish your work memory to the marketplace</span>
          </div>
          <button className="section-action" onClick={() => setPage("Builder")}>
            <Rocket size={15} /> Get listed <ArrowUpRight size={15} />
          </button>
        </div>
      </motion.section>
    </div>
  );
}
