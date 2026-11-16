"use client";

import { useEffect } from "react";

/**
 * Animação de entrada ao rolar a página.
 *
 * Qualquer elemento com a classe `reveal` começa oculto (ver landing.css) e
 * recebe `is-visible` quando entra na tela. Um único IntersectionObserver
 * atende a página inteira, então as seções continuam Server Components.
 *
 * Sem JavaScript ou com movimento reduzido, o CSS mostra tudo normalmente.
 */
export function RevealObserver() {
  useEffect(() => {
    const elements = document.querySelectorAll<HTMLElement>(".reveal:not(.is-visible)");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target); // anima uma vez só
        });
      },
      { rootMargin: "0px 0px -10% 0px", threshold: 0.12 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
