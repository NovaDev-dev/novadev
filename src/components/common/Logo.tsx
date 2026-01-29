"use client";

export default function Logo({ className = ""}) {
  return (
    <span
      className={`font-display font-bold text-4xl select-none whitespace-nowrap ${className} `}
    >
      {`{ NovaDev }`}
    </span>
  );
}
