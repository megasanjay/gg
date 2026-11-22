"use client";

import { Snowflake } from "lucide-react";
import { setSnowPaused, useSnowAvailable, useSnowPaused } from "./snow-store";

export default function SnowToggle() {
  const available = useSnowAvailable();
  const paused = useSnowPaused();

  if (!available) return null;

  return (
    <button
      type="button"
      onClick={() => setSnowPaused(!paused)}
      aria-label="Snow effect"
      aria-pressed={!paused}
      title={paused ? "Turn snow on" : "Turn snow off"}
      className="relative inline-flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-neutral-600 transition-all hover:bg-neutral-100 hover:text-neutral-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-400 dark:text-neutral-300 dark:hover:bg-neutral-900 dark:hover:text-neutral-100"
    >
      <Snowflake
        aria-hidden="true"
        className={`h-4 w-4 transition-opacity ${paused ? "opacity-50" : ""}`}
      />
      {paused && (
        // Diagonal slash to show the snow is off.
        <span
          aria-hidden="true"
          className="absolute h-5 w-px rotate-45 rounded-full bg-current"
        />
      )}
    </button>
  );
}
