import React from "react";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid var(--hairline)",
        padding: "24px 48px",
        color: "var(--muted)",
        fontSize: 13,
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
        gap: 8,
      }}
    >
      <span>© 2026 Nischith Y S</span>
      <span className="font-mono">Built with MERN</span>
    </footer>
  );
}