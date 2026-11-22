"use client";

import { useEffect, useRef, useState } from "react";
import { Snowflake } from "lucide-react";
import { useSnowAvailable, useSnowPaused } from "./snow-store";

const FLAKE_COUNT = 40;

// How strongly scrolling pushes flakes sideways, and how fast that gust dies out.
const WIND_PER_SCROLL_PX = 4;
const MAX_WIND = 400; // px/s
const WIND_DECAY = 2.5; // per second (higher = gust fades faster)

type Flake = {
  x: number; // px, base horizontal position
  y: number; // px, from top of viewport
  size: number;
  depth: number; // 0.4 (far) .. 1 (near): scales fall speed, parallax and wind
  fallSpeed: number; // px/s
  drift: number; // px/s constant sideways drift
  sway: number; // px amplitude of side-to-side sway
  swayFreq: number; // radians/s
  phase: number;
  opacity: number;
  windDir: number; // -1..1: this flake's direction/strength in the current gust
};

const randomWindDir = () => Math.random() * 2 - 1;

function makeFlakes(width: number, height: number): Flake[] {
  return Array.from({ length: FLAKE_COUNT }, () => {
    const depth = 0.4 + Math.random() * 0.6;
    return {
      x: Math.random() * width,
      y: Math.random() * height,
      size: 8 + depth * 16,
      depth,
      fallSpeed: 30 + depth * 60,
      drift: (Math.random() - 0.5) * 12,
      sway: 15 + Math.random() * 25,
      swayFreq: (2 * Math.PI) / (2.5 + Math.random() * 3),
      phase: Math.random() * Math.PI * 2,
      opacity: 0.2 + Math.random() * 0.4,
      windDir: randomWindDir(),
    };
  });
}

// Wrap a value into [min, max).
function wrap(value: number, min: number, max: number) {
  const range = max - min;
  return ((((value - min) % range) + range) % range) + min;
}

export default function Snow() {
  const [flakes, setFlakes] = useState<Flake[] | null>(null);
  const nodes = useRef<(SVGSVGElement | null)[]>([]);

  const available = useSnowAvailable();
  const paused = useSnowPaused();
  const active = available && !paused;

  useEffect(() => {
    setFlakes(
      active ? makeFlakes(window.innerWidth, window.innerHeight) : null,
    );
  }, [active]);

  useEffect(() => {
    if (!flakes) return;

    let width = window.innerWidth;
    let height = window.innerHeight;
    let lastScrollY = window.scrollY;
    let wind = 0;
    let time = 0;
    let last = performance.now();
    let frame = 0;

    const onResize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
    };

    const onScroll = () => {
      const delta = window.scrollY - lastScrollY;
      lastScrollY = window.scrollY;

      // Snow moves with the page, so it feels like it fills the whole page
      // rather than being stuck to the screen. Nearer flakes move more (parallax).
      for (const f of flakes) f.y -= delta * f.depth;

      // A fresh gust (after the last one has died down) scatters each flake
      // in a new random direction.
      if (wind < MAX_WIND * 0.05) {
        for (const f of flakes) f.windDir = randomWindDir();
      }

      // Scrolling stirs up a gust; faster scrolling = stronger gust.
      wind = Math.min(MAX_WIND, wind + Math.abs(delta) * WIND_PER_SCROLL_PX);
    };

    const tick = (now: number) => {
      // Clamp dt so returning to a background tab doesn't teleport flakes.
      const dt = Math.min((now - last) / 1000, 0.05);
      last = now;
      time += dt;
      wind *= Math.exp(-WIND_DECAY * dt);

      const margin = 40;
      flakes.forEach((f, i) => {
        f.y += f.fallSpeed * dt;
        f.x += (f.drift + wind * f.windDir * f.depth) * dt;
        f.y = wrap(f.y, -margin, height + margin);
        f.x = wrap(f.x, -margin, width + margin);

        const swayOffset = Math.sin(time * f.swayFreq + f.phase) * f.sway;
        const tilt = Math.cos(time * f.swayFreq + f.phase) * 25;
        const node = nodes.current[i];
        if (node) {
          node.style.transform = `translate3d(${f.x + swayOffset}px, ${f.y}px, 0) rotate(${tilt}deg)`;
        }
      });

      frame = requestAnimationFrame(tick);
    };

    window.addEventListener("resize", onResize);
    window.addEventListener("scroll", onScroll, { passive: true });
    frame = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("scroll", onScroll);
    };
  }, [flakes]);

  if (!flakes) return null;

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-50 overflow-hidden"
    >
      {flakes.map((flake, i) => (
        <Snowflake
          key={i}
          ref={(el) => {
            nodes.current[i] = el;
          }}
          className="absolute top-0 left-0 text-sky-400 will-change-transform dark:text-sky-300"
          style={{
            width: flake.size,
            height: flake.size,
            opacity: flake.opacity,
            transform: `translate3d(${flake.x}px, ${flake.y}px, 0)`,
          }}
        />
      ))}
    </div>
  );
}
