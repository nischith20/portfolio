import React from "react";

export default function SectionLabel({ children }) {
  return (
    <div
      className="font-mono"
      style={{
        fontSize: 18,
        letterSpacing: "0.05em",
        color: "var(--brass)",
        marginBottom: 12,
        textTransform: "uppercase",
        
      }}
    >
     {children}
      
    </div>
  );
}