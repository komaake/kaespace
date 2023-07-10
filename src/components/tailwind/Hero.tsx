import React from "react";

export default function Hero({
  className = "",
  children = null,
  fullHeight = true,
}) {
  return (
    <div className={`flex ${fullHeight ? "h-screen" : ""} ${className}`}>
      <div className="m-auto">{children}</div>
    </div>
  );
}
