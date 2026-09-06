"use client";

import dynamic from "next/dynamic";

const SolarHeroScene = dynamic(() => import("./SolarHeroScene"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-transparent" />,
});

const PanelOrbit = dynamic(() => import("./PanelOrbit"), {
  ssr: false,
  loading: () => <div className="h-full w-full bg-navy/5" />,
});

export function HeroCanvas() {
  return <SolarHeroScene />;
}

export function OrbitCanvas() {
  return <PanelOrbit />;
}
