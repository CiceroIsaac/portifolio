"use client";

import { useEffect, useEffectEvent, useRef, useState, type MouseEvent } from "react";
import { prefersReducedMotion } from "@/lib/motion";

/** Seções observadas para destacar o link ativo da navegação desktop. */
const OBSERVED_SECTIONS = ["projetos", "sobre", "trajetoria"];

/** Links do menu mobile e da navegação rápida (⌘K). */
const MOBILE_LINKS = [
  { href: "#projetos", label: "Projetos" },
  { href: "#figma", label: "UI & Figma" },
  { href: "#sobre", label: "Sobre mim" },
  { href: "#trajetoria", label: "Trajetória" },
  { href: "#contato", label: "Contato" },
];

const COMMAND_LINKS = [
  { href: "#projetos", index: "01", label: "Projetos" },
  { href: "#figma", index: "⌘", label: "UI & Figma" },
  { href: "#sobre", index: "02", label: "Sobre mim" },
  { href: "#trajetoria", index: "03", label: "Trajetória" },
  { href: "#contato", index: "04", label: "Vamos conversar" },
];

/** Abre um <dialog> como modal e trava o scroll da página. */
export function openDialog(dialog: HTMLDialogElement | null) {
  if (!dialog) return;
  dialog.showModal();
  document.body.classList.add("body-locked");
}

/** Fecha o diálogo quando o clique acontece no fundo (fora da caixa). */
export function closeOnBackdrop(event: MouseEvent<HTMLDialogElement>) {
  const dialog = event.currentTarget;
  if (event.target !== dialog) return;
  const r = dialog.getBoundingClientRect();
  const outside =
    event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom;
  if (outside) dialog.close();
}

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const toggleRef = useRef<HTMLButtonElement>(null);
  const navRef = useRef<HTMLElement>(null);
  const commandRef = useRef<HTMLDialogElement>(null);
  const animationRef = useRef<Animation | null>(null);

  /**
   * Abre/fecha o menu mobile com a mesma animação de 220 ms da versão original
   * (Web Animations API). Retorna uma Promise resolvida ao fim da animação.
   */
  function setMenu(open: boolean): Promise<void> {
    const nav = navRef.current;
    if (!nav) return Promise.resolve();
    animationRef.current?.cancel();
    setMenuOpen(open);
    nav.inert = !open;
    if (nav.hidden && !open) return Promise.resolve();
    nav.hidden = false;

    const style = getComputedStyle(nav);
    const expanded = {
      height: `${nav.offsetHeight}px`,
      opacity: 1,
      paddingTop: style.paddingTop,
      paddingBottom: style.paddingBottom,
    };
    const collapsed = { height: "0px", opacity: 0, paddingTop: "0px", paddingBottom: "0px" };

    if (prefersReducedMotion()) {
      nav.hidden = !open;
      return Promise.resolve();
    }

    const animation = nav.animate(open ? [collapsed, expanded] : [expanded, collapsed], {
      duration: 220,
      easing: "cubic-bezier(.22,1,.36,1)",
    });
    animationRef.current = animation;
    return animation.finished.then(
      () => {
        if (animationRef.current === animation) {
          nav.hidden = !open;
          animationRef.current = null;
        }
      },
      () => {} // animação cancelada: nada a fazer
    );
  }

  // Handlers dos listeners globais. `useEffectEvent` sempre enxerga o estado
  // atual (menuOpen) sem precisar recriar os listeners a cada render.
  const onKeyDown = useEffectEvent((event: KeyboardEvent) => {
    if (event.key === "Escape" && menuOpen) {
      setMenu(false);
      toggleRef.current?.focus();
    }
    // Atalho Ctrl/⌘ + K: alterna a navegação rápida.
    if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const projectDialog = document.getElementById("project-dialog") as HTMLDialogElement | null;
      if (projectDialog?.open) projectDialog.close();
      const command = commandRef.current;
      if (command?.open) command.close();
      else openDialog(command);
    }
  });
  const onClick = useEffectEvent((event: globalThis.MouseEvent) => {
    const target = event.target as Element | null;
    if (menuOpen && !target?.closest(".header")) setMenu(false);
  });
  const onResize = useEffectEvent(() => {
    if (window.innerWidth > 800) setMenu(false);
  });

  // Registra Escape, clique fora, resize e atalho de teclado.
  useEffect(() => {
    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("click", onClick);
    window.addEventListener("resize", onResize);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("click", onClick);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  // Destaca na navegação desktop a seção visível no momento.
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { rootMargin: "-15% 0px -65% 0px" }
    );
    OBSERVED_SECTIONS.forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });
    return () => observer.disconnect();
  }, []);

  /** No mobile: fecha o menu primeiro e só então rola até a seção. */
  async function handleMobileLink(event: MouseEvent<HTMLAnchorElement>, hash: string) {
    event.preventDefault();
    await setMenu(false);
    history.pushState(null, "", hash);
    document.querySelector(hash)?.scrollIntoView({ behavior: prefersReducedMotion() ? "instant" : "smooth" });
  }

  return (
    <>
      <header className="header">
        <div className="nav-wrap">
          <a href="#inicio" className="brand" aria-label="Isaac, início">
            <span className="brand-symbol">{"{i}"}</span> isaac<span className="brand-dot">.</span>
            <small>DEV / DESIGN</small>
          </a>
          <nav className="desktop-nav" aria-label="Navegação principal">
            {[
              ["projetos", "Projetos", "01"],
              ["sobre", "Sobre", "02"],
              ["trajetoria", "Trajetória", "03"],
            ].map(([id, label, n]) => (
              <a key={id} href={`#${id}`} className={activeSection === id ? "active" : undefined}>
                {label}
                <span>{n}</span>
              </a>
            ))}
          </nav>
          <div className="nav-actions">
            <button className="command-button" aria-label="Abrir navegação rápida" onClick={() => openDialog(commandRef.current)}>
              <span>⌘</span>
              <span>K</span>
            </button>
            <a className="nav-contact" href="#contato">
              Vamos conversar <span>↗</span>
            </a>
            <button
              ref={toggleRef}
              className="menu-toggle"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              onClick={() => setMenu(!menuOpen)}
            >
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <nav ref={navRef} id="mobile-nav" className="mobile-nav" aria-label="Navegação móvel" hidden>
          {MOBILE_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={(e) => handleMobileLink(e, link.href)}>
              {link.label}
            </a>
          ))}
        </nav>
      </header>

      {/* Navegação rápida (⌘K / Ctrl+K) */}
      <dialog
        ref={commandRef}
        id="command-dialog"
        className="command-dialog"
        aria-label="Navegação rápida"
        onClose={() => document.body.classList.remove("body-locked")}
        onClick={closeOnBackdrop}
      >
        <div className="command-head">
          <span>Ir para…</span>
          <button className="dialog-close" aria-label="Fechar navegação" onClick={() => commandRef.current?.close()}>
            ×
          </button>
        </div>
        <nav aria-label="Navegação rápida">
          {COMMAND_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => commandRef.current?.close()}>
              <span>{link.index}</span> {link.label} <span>↵</span>
            </a>
          ))}
        </nav>
        <small>Use Tab para navegar · Esc para fechar</small>
      </dialog>
    </>
  );
}
