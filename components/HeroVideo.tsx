"use client";

import { useEffect, useState } from "react";

const HERO_VIDEO = {
  src: "/hero-consultation-loop.mp4",
  poster: "/hero-consultation-poster.jpg",
};

export default function HeroVideo() {
  const [reducedMotion, setReducedMotion] = useState(true);

  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const apply = () => setReducedMotion(reducedMotion.matches);

    apply();
    reducedMotion.addEventListener("change", apply);
    return () => {
      reducedMotion.removeEventListener("change", apply);
    };
  }, []);

  return (
    <div
      className="absolute inset-0 bg-cover bg-center bg-[url(/hero-consultation-poster.jpg)]"
      aria-hidden="true"
    >
      {!reducedMotion && (
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster={HERO_VIDEO.poster}
        >
          <source src={HERO_VIDEO.src} type="video/mp4" />
        </video>
      )}
    </div>
  );
}
