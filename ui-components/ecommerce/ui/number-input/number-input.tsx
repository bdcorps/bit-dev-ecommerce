import React, { ReactNode, useState } from "react";

export type NumberInputProps = {
  defaultValue: number;
  label: string;
};

export function NumberInput({ defaultValue = 0, label }: NumberInputProps) {
  const [value, setValue] = useState(defaultValue);
  return (
    <div>
      <p>{label}</p>
      <div
        style={{
          display: "flex",
          backgroundColor: "#EFF2F6",
          borderRadius: "0.25rem",
        }}
      >
        <button
          style={{
            width: "50px",
            height: "50px",
            textAlign: "center",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 0,
            fontSize: "1.25rem",
            backgroundColor: "transparent",
          }}
          onClick={() => {
            setValue(value - 1);
          }}
        >
          -
        </button>
        <div
          style={{
            textAlign: "center",
            width: "80px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            border: 0,
            fontSize: "1.25rem",
          }}
        >
          {value}
        </div>
        <button
          style={{
            width: "50px",
            height: "50px",
            textAlign: "center",
            border: 0,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            fontSize: "1.25rem",
            backgroundColor: "transparent",
          }}
          onClick={() => {
            setValue(value + 1);
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}
