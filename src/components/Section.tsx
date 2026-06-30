"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  eyebrow: string;
  title: string;
  intro?: string;
  children: ReactNode;
};

export function Section({ id, eyebrow, title, intro, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 py-16 sm:py-20">
      <div className="section-shell">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-90px" }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mb-8 max-w-3xl"
        >
          <p className="mb-3 text-sm font-bold uppercase tracking-[0.18em] gold-text">
            {eyebrow}
          </p>
          <h2 className="text-3xl font-bold text-[var(--foreground)] sm:text-4xl">
            {title}
          </h2>
          {intro ? (
            <p className="mt-4 text-base leading-7 text-[var(--muted)] sm:text-lg">
              {intro}
            </p>
          ) : null}
        </motion.div>
        {children}
      </div>
    </section>
  );
}
