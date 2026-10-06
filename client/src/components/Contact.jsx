import React, { useState } from "react";
import SectionLabel from "./SectionLabel";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | sent | error

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    setStatus("sending");
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
    } catch (err) {
      setStatus("error");
    }
  };

  const inputStyle = {
    background: "var(--surface)",
    border: "1px solid var(--hairline)",
    borderRadius: 4,
    padding: "10px 12px",
    color: "var(--text)",
    fontSize: 14,
  };

  return (
    <section id="contact" className="page-section shift-slight">
      <SectionLabel>Contact</SectionLabel>

      <div style={{ maxWidth: 480 }}>
        {status === "sent" ? (
          <p style={{ color: "var(--teal)", fontSize: 15 }}>
            Message sent — thanks for reaching out.
          </p>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <input name="name" placeholder="Your name" value={form.name} onChange={handleChange} style={inputStyle} />
            <input name="email" placeholder="Email" value={form.email} onChange={handleChange} style={inputStyle} />
            <textarea
              name="message"
              placeholder="Message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              style={{ ...inputStyle, resize: "vertical" }}
            />
            <button
              onClick={handleSubmit}
              disabled={status === "sending"}
              style={{
                background: "var(--brass)",
                color: "var(--brass-ink)",
                border: "none",
                padding: "12px 20px",
                borderRadius: 4,
                fontWeight: 600,
                fontSize: 14,
                cursor: "pointer",
                alignSelf: "flex-start",
              }}
            >
              {status === "sending" ? "Sending..." : "Send message"}
            </button>
            {status === "error" && (
              <p style={{ color: "#c96b4a", fontSize: 13 }}>
                Couldn't reach the server.
              </p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}