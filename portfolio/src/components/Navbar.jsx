import React from "react";
import { Sun, Moon } from "lucide-react";

export default function Navbar({ theme, toggleTheme }) {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 48px",
        borderBottom: "1px solid var(--hairline)",
      }}
    >
      <span className="font-display" style={{ fontSize: 20, fontWeight: 600 }}>
        Nischith Y S
      </span>

      <div
        style={{
          display: "flex",
          gap: 28,
          alignItems: "center",
          fontSize: 14,
          color: "var(--muted)",
        }}
      >
        <a href="#about" style={{ color: "inherit", textDecoration: "none" }}>About</a>
        <a href="#skills" style={{ color: "inherit", textDecoration: "none" }}>Skills</a>
        <a href="#projects" style={{ color: "inherit", textDecoration: "none" }}>Projects</a>
        <a href="#contact" style={{ color: "inherit", textDecoration: "none" }}>Contact</a>

        <button
          onClick={toggleTheme}
          aria-label="Toggle light mode"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--hairline)",
            borderRadius: 20,
            width: 34,
            height: 34,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            color: "var(--text)",
          }}
        >
          {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
        </button>
      </div>
    </nav>
  );
}