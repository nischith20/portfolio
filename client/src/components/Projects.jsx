import React from "react";
import { ArrowUpRight } from "lucide-react";
import SectionLabel from "./SectionLabel";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <section id="projects" style={{ padding: "100px 48px 80px" }}>
      <SectionLabel>Projects</SectionLabel>

      <div style={{ display: "flex", flexDirection: "column" }}>
        {projects.map((p) => (
          <a
            key={p.entry}
            href={p.github} 
            target="_blank"
            rel="noopener noreferrer"
            style={{
              padding: "58px 0",
              display: "flex",
              gap: 28,
              flexWrap: "wrap",
              textDecoration: "none",
              color: "inherit",
              transition: "background 0.2s",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => e.currentTarget.style.background = "var(--surface)"}
            onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}
          >
            <div
              className="font-mono"
              style={{
                color: p.accent === "brass" ? "var(--brass)" : "var(--teal)",
                fontSize: 13,
                minWidth: 90,
              }}
            >
            
              <br />
              <br />
              {p.entry}
            </div>

            <div style={{ flex: 1, minWidth: 260 }}>
              <h3 className="font-display" style={{ fontSize: 22, margin: "0 0 6px", fontWeight: 600,textTransform: "uppercase" }}>
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
          </a>
        ))}
      </div>
    </section>
  );
}