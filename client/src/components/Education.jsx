import React from "react";
import SectionLabel from "./SectionLabel";
import { education } from "../data/content";

export default function Education() {
  return (
    <section id="education" className="page-section shift-slight">
      <SectionLabel>Education</SectionLabel>

      <div style={{ paddingTop: 24 }}>
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 8 }}>
          <h3 className="font-display" style={{ fontSize: 19, margin: 0, fontWeight: 600,textTransform: "uppercase", }}>
            {education.school}
          </h3>
          
        </div>
        <p style={{  maxWidth: 640,fontSize: 14.5, lineHeight: 1.7, color: "var(--muted)", marginTop: 10,textTransform: "uppercase" }}>
          {education.degree}
        </p>
        <span className="font-mono" style={{ fontSize: 12, color: "var(--muted)" }}>
            {education.period}
          </span>
      </div>
    </section>
  );
}