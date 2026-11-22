import { useSyncExternalStore } from "react";

// Shared state between the snow effect (in the layout) and its pause toggle
// (in the footer). The choice is remembered across visits.

const STORAGE_KEY = "snow-paused";
const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";

// Snow season: November 15 through December 31 (inclusive), local time.
function isSnowSeason(date: Date) {
  const month = date.getMonth(); // 0-indexed: 10 = Nov, 11 = Dec
  return (month === 10 && date.getDate() >= 15) || month === 11;
}

let paused: boolean | null = null;
const listeners = new Set<() => void>();

function subscribePaused(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function getPaused() {
  if (paused === null) {
    try {
      paused = localStorage.getItem(STORAGE_KEY) === "1";
    } catch {
      paused = false;
    }
  }
  return paused;
}

export function setSnowPaused(value: boolean) {
  paused = value;
  try {
    localStorage.setItem(STORAGE_KEY, value ? "1" : "0");
  } catch {
    // Storage unavailable (private mode etc.): still works for this visit.
  }
  listeners.forEach((listener) => listener());
}

/** Whether the visitor has paused the snow. */
export function useSnowPaused() {
  return useSyncExternalStore(subscribePaused, getPaused, () => true);
}

function subscribeMotion(listener: () => void) {
  const query = window.matchMedia(REDUCED_MOTION);
  query.addEventListener("change", listener);
  return () => query.removeEventListener("change", listener);
}

/**
 * Whether snow can appear at all: it's snow season and the visitor hasn't asked
 * for reduced motion. Evaluated on the client so a statically built page still
 * respects today's date, and reacts if the motion setting changes mid-visit.
 */
export function useSnowAvailable() {
  return useSyncExternalStore(
    subscribeMotion,
    () =>
      isSnowSeason(new Date()) && !window.matchMedia(REDUCED_MOTION).matches,
    () => false,
  );
}
