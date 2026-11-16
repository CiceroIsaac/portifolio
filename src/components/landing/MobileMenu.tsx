"use client";

import { useEffect, useEffectEvent, useId, useRef, useState } from "react";

export interface NavLink {
  href: string;
  label: string;
}

interface MobileMenuProps {
  links: NavLink[];
  /** Classes do botão (cor, borda) — cada marca define o seu visual. */
  buttonClassName?: string;
  /** Classes do painel aberto (fundo, cor do texto). */
  panelClassName?: string;
  /** Classes de cada link do painel. */
  linkClassName?: string;
  /** Conteúdo extra no fim do painel (ex.: CTA principal). */
  footer?: React.ReactNode;
}

/**
 * Menu mobile acessível usado por todas as landing pages.
 * - `aria-expanded`/`aria-controls` no botão;
 * - fecha com Escape (devolvendo o foco ao botão), ao clicar fora,
 *   ao escolher uma seção e ao passar para a largura desktop;
 * - painel inerte quando fechado (fora da ordem de tabulação);
 * - transição curta, desligada com prefers-reduced-motion (landing.css).
 */
export function MobileMenu({ links, buttonClassName = "", panelClassName = "", linkClassName = "", footer }: MobileMenuProps) {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const rootRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape" && open) {
      setOpen(false);
      buttonRef.current?.focus();
    }
  });
  const onPointerDown = useEffectEvent((event: PointerEvent) => {
    if (open && !rootRef.current?.contains(event.target as Node)) setOpen(false);
  });

  useEffect(() => {
    // 1024 px = breakpoint `lg`, onde a navegação desktop aparece.
    const desktop = window.matchMedia("(min-width: 1024px)");
    const onDesktop = (e: MediaQueryListEvent) => e.matches && setOpen(false);
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    desktop.addEventListener("change", onDesktop);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
      desktop.removeEventListener("change", onDesktop);
    };
  }, []);

  return (
    <div ref={rootRef} className="lg:hidden">
      <button
        ref={buttonRef}
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        aria-label={open ? "Fechar menu" : "Abrir menu"}
        onClick={() => setOpen((o) => !o)}
        className={`relative grid size-12 place-items-center rounded-full ${buttonClassName}`}
      >
        {/* Ícone: duas linhas que viram um "X" */}
        <span aria-hidden="true" className="relative block h-3 w-6">
          <span
            className={`absolute left-0 top-0 h-0.5 w-6 rounded bg-current transition-transform duration-200 ${open ? "translate-y-[5px] rotate-45" : ""}`}
          />
          <span
            className={`absolute bottom-0 left-0 h-0.5 w-6 rounded bg-current transition-transform duration-200 ${open ? "-translate-y-[5px] -rotate-45" : ""}`}
          />
        </span>
      </button>

      <div
        id={panelId}
        inert={!open}
        className={`absolute inset-x-0 top-full origin-top transition-[opacity,transform] duration-200 ${
          open ? "translate-y-0 opacity-100" : "pointer-events-none -translate-y-2 opacity-0"
        } ${panelClassName}`}
      >
        <nav aria-label="Navegação da página" className="flex flex-col px-6 py-4">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)} className={`py-3 text-lg ${linkClassName}`}>
              {link.label}
            </a>
          ))}
          {footer && <div className="pt-3 pb-2" onClick={() => setOpen(false)}>{footer}</div>}
        </nav>
      </div>
    </div>
  );
}
