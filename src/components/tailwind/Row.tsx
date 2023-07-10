import React from "react";

export default function Row({
  className = "",
  children = null,
  vertical = false,
  reversed = false,
  breakpoint = "md",
}) {
  return (
    <div
      className={`flex ${
        (vertical ? "flex-col" : "flex-row") + (reversed ? "-reverse" : "")
      } ${className} ${breakpoint}:flex-col${reversed ? "-reverse" : ""}`}
    >
      {children}
    </div>
  );
}
