"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { commandSuggestions } from "@/data/navigation";

export default function MockModal({ title, onClose, showToast }) {
  const isCommandCenter = title === "AI command center";
  return (
    <motion.div className="modal-backdrop" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={onClose}>
      <motion.div
        className={`modal ${isCommandCenter ? "command-modal" : ""}`}
        initial={{ y: 40, scale: 0.92, opacity: 0 }}
        animate={{ y: 0, scale: 1, opacity: 1 }}
        exit={{ y: 20, scale: 0.96, opacity: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 24 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="panel-head">
          <h3>{title}</h3>
          <button onClick={onClose}>Close</button>
        </div>
        {isCommandCenter ? (
          <>
            <label className="command-search">
              <Search size={18} />
              <input autoFocus placeholder="Ask, add memory, search meetings, publish..." />
            </label>
            <div className="command-results">
              {commandSuggestions.map(([label, body, Icon]) => (
                <button
                  key={label}
                  onClick={() => {
                    showToast(`${label} selected`);
                    onClose();
                  }}
                >
                  <Icon size={17} />
                  <span>
                    <strong>{label}</strong>
                    <small>{body}</small>
                  </span>
                  <kbd>Enter</kbd>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            <p>
              This is a frontend-only mock interaction. In the pitch prototype, this can represent loading, copying,
              approving, publishing, checkout, or connector setup.
            </p>
            <div className="modal-actions">
              <button className="secondary" onClick={onClose}>
                Cancel
              </button>
              <button
                className="primary"
                onClick={() => {
                  showToast(`${title} completed`);
                  onClose();
                }}
              >
                Run mock flow
              </button>
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
}
