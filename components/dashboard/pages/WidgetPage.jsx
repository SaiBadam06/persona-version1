"use client";

import { motion } from "framer-motion";
import { Copy, Key } from "lucide-react";
import { FormGrid, RotatingPreview } from "@/components/ui/widgets";

const ease = [0.22, 1, 0.36, 1];
const enter = (i) => ({
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.4, ease, delay: i * 0.05 }
});

export default function WidgetPage() {
  return (
    <div className="page">
      {/* WHY: Primary task — get the widget onto a site. Snippet + public key are the only things needed to embed, shown first. */}
      <motion.section className="section" {...enter(0)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Embed snippet</h2>
            <span className="why">Paste once before &lt;/body&gt; to go live</span>
          </div>
          <button className="section-action">
            <Copy size={16} /> Copy
          </button>
        </div>
        <div className="card">
          <pre className="code-block">{`<script src="https://cdn.personaon.ai/widget.js"
  data-key="pk_live_aria_arc_studio"
  data-persona="aria-morgan" async></script>`}</pre>
        </div>
        <div className="list">
          <div className="list-row">
            <span className="lr-main"><Key size={15} /> Public key</span>
            <span className="lr-meta">pk_live_aria_arc_studio</span>
          </div>
        </div>
      </motion.section>

      {/* WHY: Appearance is the single configuration surface — one FormGrid groups every visible setting (Notion-style logical grouping). */}
      <motion.section className="section" {...enter(1)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Appearance</h2>
            <span className="why">How the widget looks and behaves</span>
          </div>
        </div>
        <FormGrid
          fields={[
            "Allowed domains",
            "Bubble color",
            "Widget position",
            "Welcome message",
            "Lead capture prompt"
          ]}
        />
      </motion.section>

      {/* WHY: Progressive disclosure — a calm live preview confirms the config without adding controls; advanced kept minimal. */}
      <motion.section className="section" {...enter(2)}>
        <div className="section-head">
          <div className="section-head-text">
            <h2>Preview</h2>
            <span className="why">What loads on your site</span>
          </div>
        </div>
        <RotatingPreview />
      </motion.section>
    </div>
  );
}
