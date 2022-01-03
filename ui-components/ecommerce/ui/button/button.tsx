import React, { ReactNode } from "react";

export type ButtonProps = {
  text?: string;
  icon?: string;
};

export function Button({ text, icon }: ButtonProps) {
  return (
    <div>
      <a
        style={{
          backgroundColor: "#345DEE",
          borderRadius: "0.5rem",
          color: "white",
          textDecoration: "none",
          padding: "0.75rem 1rem 0.75rem 1rem",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {text ? (
          <div style={{ paddingRight: "0.4rem", height: "1.5rem" }}>{icon}</div>
        ) : (
          <div style={{ height: "1.5rem" }}>{icon}</div>
        )}
        {text && (
          <span
            style={{ fontSize: "18px", lineHeight: "24px", fontWeight: "400" }}
          >
            {text}
          </span>
        )}
      </a>
    </div>
  );
}
