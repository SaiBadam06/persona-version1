"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Copy, KeyRound, Link2, Share2 } from "lucide-react";
import { ActionList, FormGrid, Panel, RotatingPreview, ToggleList } from "@/components/ui/widgets";
import { persona } from "@/data/persona";

const TABS = ["Profile", "Distribution"];

export default function PublishPage({ setModal, showToast }) {
  const [tab, setTab] = useState("Profile");

  return (
    <>
      <div className="tabbar" role="tablist" aria-label="Publish sections">
        {TABS.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={tab === t ? "active" : ""}>
            {tab === t && <motion.span layoutId="publish-tab" className="tab-bg" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span style={{ position: "relative", zIndex: 1 }}>{t}</span>
          </button>
        ))}
      </div>

      {tab === "Profile" && (
        <section className="two-col">
          <Panel title="Persona profile" action="Save draft" onAction={() => showToast("Profile draft saved")}>
            <FormGrid fields={["Persona name", "Headline", "Role", "Organization", "Bio/public intro", "Social links"]} />
          </Panel>
          <Panel title="Completeness checklist">
            <ActionList
              items={[
                "Avatar uploaded",
                "LinkedIn verification complete",
                "6 expertise areas selected",
                "4 achievements pinned",
                "Personality traits tuned",
                "Pinned questions ready"
              ]}
              done
            />
          </Panel>
        </section>
      )}

      {tab === "Distribution" && (
        <section className="publish-grid">
          <Panel title="Public profile publishing" action="Copy link" onAction={() => showToast("Public link copied")}>
            <ToggleList
              items={[
                "Published",
                "Show expertise",
                "Show achievements",
                "Show traits",
                "Show contributions",
                "Show social links",
                "Show pinned questions",
                "Booking button enabled"
              ]}
            />
            <div className="link-box">
              <Link2 size={16} /> personaon.ai{persona.handle}
            </div>
          </Panel>
          <RotatingPreview />
          <Panel title="Website widget setup" action="Copy embed" onAction={() => setModal("Website embed instructions")}>
            <FormGrid fields={["Allowed domains", "Bubble color", "Widget position", "Welcome message", "Lead capture prompt"]} />
            <div className="mock-key">
              <KeyRound size={16} /> pk_live_mock_aria_7R2… <Copy size={15} />
            </div>
          </Panel>
          <Panel title="Share studio">
            <div className="share-grid">
              {["QR code", "LinkedIn post", "Social post", "Email signature", "Featured YouTube", "Instagram link"].map((x) => (
                <button key={x}>
                  <Share2 size={15} /> {x}
                </button>
              ))}
            </div>
          </Panel>
        </section>
      )}
    </>
  );
}
