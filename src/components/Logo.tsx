import React from "react";

export default function Logo({ className }: { className?: string }) {
  return (
    <div className={`flex items-center gap-3 ${className || ""}`}>
      <div
        aria-hidden
        className="w-10 h-10 flex items-center justify-center rounded-full bg-yellow-400"
      >
        <span className="w-6 h-6 rounded-full bg-green-700 block" />
      </div>
      <span className="font-semibold text-lg">Pison</span>
    </div>
  );
}
