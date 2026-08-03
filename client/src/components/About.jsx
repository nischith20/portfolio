import React from "react";
import SectionLabel from "./SectionLabel";

export default function About() {
  return (
    <section
      id="about"
      style={{ padding: "40px 48px 80px", borderTop: "1px solid var(--hairline)" }}
    >
      <SectionLabel>About</SectionLabel>

      <p style={{ maxWidth: 720, fontSize: 17, lineHeight: 1.8, color: "var(--text)" }}>
        Information Science graduate with practical experience designing and building full-stack applications 
        and microservices – from Spring Boot/Java backends to React/TypeScript frontends – with a strong grounding in REST API design,
         PostgreSQL/MySQL, Docker, and software testing. Passionate about clean architecture, automation, and solving real-world engineering problems.. 

      </p>
    </section>
  );
}