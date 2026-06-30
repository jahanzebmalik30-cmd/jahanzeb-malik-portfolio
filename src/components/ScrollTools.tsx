"use client";

import { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import { FiArrowUp } from "react-icons/fi";
import { contact } from "@/data/portfolio";

export function ScrollTools() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    function onScroll() {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? (window.scrollY / max) * 100 : 0);
      setVisible(window.scrollY > 520);
    }

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div
          className="h-full bg-[var(--gold)] transition-[width]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <a
        href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
        aria-label="Contact on WhatsApp"
        className="focus-ring fixed bottom-6 left-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-xl text-white shadow-lg shadow-black/20 transition hover:scale-105"
      >
        <FaWhatsapp aria-hidden />
      </a>

      <button
        type="button"
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className={`focus-ring fixed bottom-6 right-5 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[var(--navy)] text-white shadow-lg shadow-black/20 transition hover:bg-[var(--gold)] ${
          visible ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0 pointer-events-none"
        }`}
      >
        <FiArrowUp aria-hidden />
      </button>
    </>
  );
}
