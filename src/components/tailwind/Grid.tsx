import React from "react";

export default function Grid({ className = "", children = null, cols = null }) {
  return (
    <div className={`grid ${cols ? "grid-cols-" + cols : ""} ${className}`}>
      {children}
    </div>
  );
}
