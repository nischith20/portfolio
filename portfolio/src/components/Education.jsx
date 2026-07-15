import React from "react";
import SectionLabel from "./SectionLabel";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" style={{ padding: "0 48px 80px" }}>
      <SectionLabel>Education</SectionLabel>

      <div style={{ borderTop: "1px solid var(--hairline)", paddingTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <h3 className="font-display" style={{ fontSize: 19, margin: 0, fontWeight: 600 }}>
            {education.school}
          </h3>
          <span className="font-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {education.period}
          </span>
        </div>
        <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)", maxWidth: 640, marginTop: 10 }}>
          {education.degree}
        </p>
      </div>
    </section>
  );
}