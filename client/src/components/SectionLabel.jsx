import React from "react";

export default function SectionLabel({ children }) {
  return (
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
      {children}
    </div>
  );
}