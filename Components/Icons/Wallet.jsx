import React from "react";

export const Wallet = ({ width = 24, height = 24, className = "", ...props }) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M21 12V7H5V7a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v5" />
    <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
    <path d="M18 12a2 2 0 0 0 0 4 2 2 0 0 0 0-4" />
  </svg>
);