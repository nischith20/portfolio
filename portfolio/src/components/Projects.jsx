import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "0 48px 80px" }}>
      <SectionLabel>Projects</SectionLabel>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((p) => (
          <div
            key={p.entry}
            style={{
              borderTop: "1px solid var(--hairline)",
              padding: "28px 0",
              display: "flex",
              gap: 28,
              flexWrap: "wrap",
            }}
          >
            <div
              className="font-mono"
              style={{
                color: p.accent === "brass" ? "var(--brass)" : "var(--teal)",
                fontSize: 13,
                minWidth: 90,
              }}
            >
              ENTRY NO.
              <br />
              {p.entry}
            </div>

            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 className="font-display" style={{ fontSize: 22, margin: "0 0 6px", fontWeight: 600 }}>
                {p.title}
              </h3>
              <div className="font-mono" style={{ fontSize: 12, color: "var(--muted)", marginBottom: 10 }}>
                {p.stack}
              </div>
              <p style={{ fontSize: 14.5, lineHeight: 1.7, color: "var(--text)", margin: 0, maxWidth: 620 }}>
                {p.desc}
              </p>
            </div>

            <div style={{ display: "flex", alignItems: "flex-start", color: "var(--muted)" }}>
              <ArrowUpRight size={20} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}