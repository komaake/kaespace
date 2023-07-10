import React from "react";

export function Header({ children = null, className = "" }) {
  return (
    <div
      className={`border-b border-gray-100 bg-gray-50 text-gray-500 text-left px-4 py-3 text-1xl ${className}`}
    >
      {children}
    </div>
  );
}

export function Footer({ children = null, className = "" }) {
  return (
    <div
      className={`border-t border-gray-100 bg-gray-10 text-right px-4 py-2 ${className}`}
    >
      {children}
    </div>
  );
}

export function Body({ children = null, className = "" }) {
  return <div className={`px-4 py-5 sm:px-6 ${className}`}>{children}</div>;
}

function Card({ className = "", children = null, body = false }) {
  return (
    <div
      className={`bg-white shadow overflow-hidden sm:rounded-lg ${className} mt-2`}
    >
      {body ? <Body>{children}</Body> : children}
    </div>
  );
}

Card.Body = Body;
Card.Header = Header;
Card.Footer = Footer;

export default Card;
