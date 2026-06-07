"use client";

import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { Mic, Play, Plus, Send } from "lucide-react";
import { ActionList, ChatTranscript, FactCloud, StatList, VoiceWave } from "@/components/ui/widgets";
import { personaTabs, sourceRows } from "@/data/persona";
import ChatPage from "./ChatPage";

const SOURCE_TYPES = ["LinkedIn", "Resume", "Website", "Files", "URL", "YouTube", "Podcast RSS", "X thread"];
const STATUS_TONE = { Live: "green", Processing: "amber", Failed: "red" };
const ease = [0.22, 1, 0.36, 1];

export default function PersonaPage({ setModal, showToast }) {
  const searchParams = useSearchParams();
  const urlTab = searchParams.get("tab");
  const [tab, setTab] = useState("Knowledge");
  // The tour and deep-links drive the active tab via ?tab=
  useEffect(() => {
    if (urlTab && personaTabs.includes(urlTab)) setTab(urlTab);
  }, [urlTab]);

  return (
    <div className="page">
      <div className="tabbar" role="tablist" aria-label="Persona sections">
        {personaTabs.map((t) => (
          <button key={t} role="tab" aria-selected={tab === t} onClick={() => setTab(t)} className={tab === t ? "active" : ""}>
            {tab === t && <motion.span layoutId="build-tab" className="tab-bg" transition={{ type: "spring", stiffness: 380, damping: 30 }} />}
            <span style={{ position: "relative", zIndex: 1 }}>{t}</span>
          </button>
        ))}
      </div>

      {tab === "Knowledge" && (
        <>
          {/* WHY: Sources are the persona's raw material, adding & monitoring them is the primary task of this tab. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Knowledge sources</h2>
                <span className="why">What your persona learns from, health and coverage at a glance</span>
              </div>
              <button className="section-action" onClick={() => setModal("Add knowledge source")}>Add source</button>
            </div>
            <div className="source-types">
              {SOURCE_TYPES.map((x) => (
                <button key={x} className="source-type" onClick={() => setModal("Add knowledge source")}>
                  <Plus size={14} /> {x}
                </button>
              ))}
            </div>
            <div className="list">
              {sourceRows.map(([name, status, score, note]) => (
                <div className="list-row" key={name}>
                  <span className="lr-main">{name}</span>
                  <span className={`ui-badge ui-badge--${STATUS_TONE[status] || "neutral"}`}>{status}</span>
                  <span className="lr-meta">{score}</span>
                  <span className="lr-meta src-note">{note}</span>
                </div>
              ))}
            </div>
          </motion.section>

          {/* WHY: Extraction preview proves the sources worked, these are concepts the persona can now speak to. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: 0.06 }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Extracted topics</h2>
                <span className="why">Concepts pulled from your sources</span>
              </div>
            </div>
            <FactCloud />
          </motion.section>
        </>
      )}

      {tab === "Studio" && (
        <>
          {/* WHY: The interview studio fills knowledge gaps, answering prompts is the one job here. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Interview studio</h2>
                <span className="why">Answer prompts to strengthen weak areas</span>
              </div>
              <button className="section-action" onClick={() => showToast("Answer saved to persona memory")}>Answer next</button>
            </div>
            <ChatTranscript compact />
          </motion.section>

          {/* WHY: The queue shows what to improve next, with progress in one calm view. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: 0.06 }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Improvement queue</h2>
                <span className="why">Gaps ranked by impact</span>
              </div>
            </div>
            <div className="grid-2">
              <StatList stats={[["Saved answers", "128"], ["Persona score", "84%"], ["Knowledge gaps", "7"], ["Suggestions", "14"]]} />
              <ActionList items={["Clarify pricing philosophy", "Add failed startup lesson", "Describe coaching boundaries"]} />
            </div>
          </motion.section>
        </>
      )}

      {tab === "Chat" && <ChatPage setModal={setModal} showToast={showToast} />}

      {tab === "Voice" && (
        <>
          {/* WHY: Voice cloning is optional, one setup flow, gated by consent. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Voice clone</h2>
                <span className="why">Record a sample so your persona can speak answers aloud</span>
              </div>
              <button className="section-action" onClick={() => setModal("Audio sample upload")}>Upload sample</button>
            </div>
            <VoiceWave />
            <ActionList
              items={[
                "Minimum 90 seconds recorded",
                "Consent accepted",
                "Voice preview generated",
                "TTS available for public chat"
              ]}
            />
          </motion.section>

          {/* WHY: A quick playback confirms the clone before it goes public. */}
          <motion.section className="section" initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4, ease, delay: 0.06 }}>
            <div className="section-head">
              <div className="section-head-text">
                <h2>Voice test</h2>
                <span className="why">Hear how an answer sounds</span>
              </div>
            </div>
            <div className="mock-player">
              <Play size={20} />
              <span>Aria explains how she evaluates founder clarity.</span>
              <Mic size={18} />
            </div>
          </motion.section>
        </>
      )}
    </div>
  );
}
