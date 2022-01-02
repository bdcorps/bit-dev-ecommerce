import React from "react";
import styles from "./text.module.css";

export function Text({ text, type, align = "left" }) {
  return <p className={`${styles[type]} ${align}`}>{text}</p>;
}
