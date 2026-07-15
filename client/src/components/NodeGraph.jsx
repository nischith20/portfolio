import React from "react";

export default function NodeGraph() {
  const nodes = [
    { x: 340, y: 40, label: "Gateway" },
    { x: 140, y: 140, label: "Customer" },
    { x: 340, y: 140, label: "Account" },
    { x: 540, y: 140, label: "Transaction" },
    { x: 340, y: 240, label: "Registry" },
  ];
  const edges = [
    [0, 1],
    [0, 2],
    [0, 3],
    [1, 4],
    [2, 4],
    [3, 4],
  ];

  return (
    <svg viewBox="0 0 680 280" style={{ width: "100%", maxWidth: 520, opacity: 0.9 }}>
      {edges.map(([a, b], i) => (
        <line
          key={i}
          x1={nodes[a].x}
          y1={nodes[a].y}
          x2={nodes[b].x}
          y2={nodes[b].y}
          stroke="var(--teal)"
          strokeWidth="1"
          opacity="0.35"
        >
          <animate
            attributeName="opacity"
            values="0.15;0.55;0.15"
            dur="3s"
            begin={`${i * 0.4}s`}
            repeatCount="indefinite"
          />
        </line>
      ))}
      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r="5" fill="var(--brass)" />
          <text
            x={n.x}
            y={n.y - 14}
            textAnchor="middle"
            fontSize="11"
            fontFamily="JetBrains Mono, monospace"
            fill="var(--muted)"
          >
            {n.label}
          </text>
        </g>
      ))}
    </svg>
  );
}