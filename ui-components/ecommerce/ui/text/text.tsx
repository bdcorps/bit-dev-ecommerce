import React, { ReactNode } from "react";
import styles from "./text.module.css";

export type TextProps = {
  text: string;
  type: string;
  align?: "left" | "center" | "right";
};

export function Text({ text, type, align = "left" }: TextProps) {
  return <p className={`${styles[type]} ${align}`}>{text}</p>;
}
