"use client";

import { LazyMotion, domAnimation } from "framer-motion";

/**
 * Carga Framer Motion de forma lazy (domAnimation ~18kb en lugar de ~30kb).
 * Envuelve toda la app para que todos los componentes que usen `m.*` funcionen.
 */
export default function MotionProvider({ children }: { children: React.ReactNode }) {
  return (
    <LazyMotion features={domAnimation} strict>
      {children}
    </LazyMotion>
  );
}
