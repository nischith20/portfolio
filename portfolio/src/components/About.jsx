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
        Information Science graduate with hands-on experience designing microservices
        architectures using Java and Spring Boot, backed by a strong foundation in REST
        APIs, relational databases, and containerization with Docker. I enjoy solving
        problems at the intersection of backend engineering and data — from building
        JWT-secured banking APIs to shipping a real-time computer vision model.
      </p>
    </section>
  );
}