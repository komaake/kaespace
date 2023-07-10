import React from "react";

export default function Container({
  children = null,
  className = "",
  fluid = false,
}) {
  return (
    <div
      className={`${fluid ? "md:container" : "container"} m-auto ${className}`}
    >
      {children}
    </div>
  );
}
