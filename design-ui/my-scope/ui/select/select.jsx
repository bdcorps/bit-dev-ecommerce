import React, { useState } from "react";
import styles from "./select.module.css";

export function Select({ defaultValue = 0, label }) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <p>{label}</p>
      <div className={styles.selectWrapper}>
        <select
          name="cars"
          id="cars"
          style={{
            display: "flex",
            borderColor: "#EFF2F6",
            backgroundColor: "#FFF",
            borderRadius: "0.25rem",
            fontSize: "26px",
            width: "250px",
            height: "50px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
            appearance: "none",
          }}
        >
          <option value="l">L</option>
          <option value="xl">XL</option>
        </select>
      </div>
    </div>
  );
}
