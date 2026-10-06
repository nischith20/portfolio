import React from "react";
import SectionLabel from "./SectionLabel";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <section id="experience" className="page-section shift-right">
      <SectionLabel>Experience</SectionLabel>

      <div style={{ paddingTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <h3 className="font-display" style={{ fontSize: 22, margin: 0, fontWeight: 600,textTransform: "uppercase", }}>
            {experience.role} — {experience.company}
          </h3>
        </div>
        <p style={{ maxWidth: 640, fontSize: 18, lineHeight: 1.7, color: "var(--muted)",  marginTop: 10,textTransform: "uppercase" }}>
          {experience.desc}
        </p>
        <span className="font-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {experience.period}
          </span>
      </div>
    </section>
  );
}