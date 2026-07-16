import React from "react";
import { Link, Mail, MapPin } from "lucide-react";
import NodeGraph from "./NodeGraph";

export default function Hero() {
  return (
    <section
      id="hero"
      style={{
        display: "flex",
        flexWrap: "wrap",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "80px 48px",
        gap: 40,
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <div
          className="font-mono"
          style={{
            fontSize: 12,
            letterSpacing: "0.15em",
            color: "var(--brass)",
            marginBottom: 12,
            textTransform: "uppercase",
          }}
        >
          Backend-leaning full stack developer
        </div>

        <h1
          className="font-display"
          style={{ fontSize: 48, lineHeight: 1.15, margin: 0, fontWeight: 600 }}
        >
          I build systems that move money and make sense.
        </h1>

        <p style={{ color: "var(--muted)", fontSize: 16, lineHeight: 1.7, marginTop: 20 }}>
          Java & Spring Boot microservices, REST APIs, and a growing full-stack range —
          with a data analyst's eye for what the numbers mean.
        </p>

        <div style={{ display: "flex", gap: 14, marginTop: 32 }}>
          <a 
            href="#projects">
          <button
            style={{
              background: "var(--brass)",
              color: "var(--brass-ink)",
              border: "none",
              padding: "12px 22px",
              borderRadius: 4,
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            View projects
          </button>
          </a>
          <a
            href="/resume.pdf"
            download="resume.pdf"
            style={{
              textDecoration: "none",
            }}
          >
          <button
            style={{
              background: "transparent",
              color: "var(--text)",
              border: "1px solid var(--hairline)",
              padding: "12px 22px",
              borderRadius: 4,
              fontSize: 14,
              cursor: "pointer",
            }}
          >
            Download resume
          </button>
          </a>
        </div>

        <div style={{ display: "flex", gap: 18, marginTop: 36, alignItems: "center", color: "var(--muted)", fontSize: 13 }}>
            <a href="https://github.com/nischith20" target="_blank" rel="noreferrer" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
            <Link size={14} /> GitHub
            </a>
            <a href="https://linkedin.com/in/nischith-s" target="_blank" rel="noreferrer" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
                <Link size={14} /> LinkedIn
            </a>
            <a href="mailto:nischith812@gmail.com" style={{ color: "inherit", display: "flex", alignItems: "center", gap: 4, textDecoration: "none" }}>
                <Mail size={14} /> Email
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                <MapPin size={14} /> Mysuru, Karnataka
            </span>
        </div>
      </div>

      <NodeGraph />
    </section>
  );
}