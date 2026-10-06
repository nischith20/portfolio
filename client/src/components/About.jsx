import React from "react";
import SectionLabel from "./SectionLabel";
import { AlignCenter } from "lucide-react";

export default function About() {
  return (
    <section

      style={{ padding: "40px 48px 80px"}}
    >
      <SectionLabel>about</SectionLabel>

      <p style={{ maxWidth: 720, fontSize: 25, lineHeight: 1.5, color: "var(--text)", textTransform: "uppercase", }}>
        Information Science graduate with practical experience designing and building full-stack applications 
        and microservices – from Spring Boot/Java backends to React/TypeScript frontends – with a strong grounding in REST API design,
         PostgreSQL/MySQL, Docker, and software testing. Passionate about clean architecture, automation, and solving real-world engineering problems.. 

      </p>
    </section>
  );
}