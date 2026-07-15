import React from "react";
import SectionLabel from "./SectionLabel";
import { certifications } from "../data/content";

export default function Certifications() {
  return (
    <section id="certifications" style={{ padding: "0 48px 80px" }}>
      <SectionLabel>Certifications</SectionLabel>

      <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
        {certifications.map((c) => (
          <div
            key={c.name}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--hairline)",
              borderRadius: 8,
              padding: "14px 18px",
              minWidth: 220,
            }}
          >
            <div style={{ fontSize: 14.5, color: "var(--text)", marginBottom: 4 }}>
              {c.name}
            </div>
            <div className="font-mono" style={{ fontSize: 12, color: "var(--brass)" }}>
              {c.issuer}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}