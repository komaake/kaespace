import React from "react";

export default function Col({ children = null, className = "" }) {
  return <div className={`grow ${className}`}>{children}</div>;
}
