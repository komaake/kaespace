import React from "react";

export default function Link({ href = "", children = null, className = "" }) {
  return (
    <a href={href} className={`text-blue-500 hover:text-blue-800 ${className}`}>
      {children}
    </a>
  );
}
