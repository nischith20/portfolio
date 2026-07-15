import React from "react";
import SectionLabel from "./SectionLabel";
import { skills } from "../data/content";

export default function Skills() {
  return (
    <section id="skills" style={{ padding: "0 48px 80px" }}>
      <SectionLabel>Skills</SectionLabel>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 20,
        }}
      >
        {skills.map((s) => (
          <div
            key={s.group}
            style={{
              background: "var(--surface)",
              border: "1px solid var(--hairline)",
              borderRadius: 8,
              padding: 18,
            }}
          >
            <div
              className="font-mono"
              style={{
                fontSize: 12,
                color: "var(--teal)",
                marginBottom: 10,
                textTransform: "uppercase",
                letterSpacing: "0.08em",
              }}
            >
              {s.group}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {s.items.map((it) => (
                <span
                  key={it}
                  style={{
                    fontSize: 13,
                    background: "var(--surface-2)",
                    padding: "4px 10px",
                    borderRadius: 4,
                    color: "var(--text)",
                  }}
                >
                  {it}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}