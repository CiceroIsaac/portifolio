"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { projects, type Project, type ProjectFilter } from "@/data/projects";
import iexpressImage from "@/assets/portfolio/iexpress.png";
import { closeOnBackdrop, openDialog } from "./Header";

/** Botões de filtro, na mesma ordem da versão original. */
const FILTERS: { value: ProjectFilter; label: string }[] = [
  { value: "all", label: "Todos" },
  { value: "dev", label: "Desenvolvimento" },
  { value: "academic", label: "Acadêmicos" },
  { value: "figma", label: "UI / Figma" },
  { value: "professional", label: "Profissionais" },
];

/** Aplica a regra de filtro: "Todos" esconde itens com `showInAll: false`. */
function filterProjects(filter: ProjectFilter): Project[] {
  return projects.filter((p) => (filter === "all" ? p.showInAll !== false : p.filters.includes(filter)));
}

/** Rótulo do canto superior da capa. */
function coverLabel(p: Project) {
  if (p.id === "iexpress") return "ESTUDO VISUAL";
  if (p.id === "private" || (p.cover === "landing" && !p.site)) return "EM CONSTRUÇÃO";
  if (p.cover === "landing") return "ESTUDO PUBLICADO";
  return "CAPA EDITORIAL";
}

/** Conteúdo ilustrativo de cada tipo de capa (desenhado via CSS). */
function CoverContent({ project: p }: { project: Project }) {
  let content: React.ReactNode = null;
  switch (p.cover) {
    case "landing":
      content = (
        <div className="landing-slot">
          <span className="landing-index">LANDING PAGE / {p.slot}</span>
          <strong>{p.brand}</strong>
          <div className="landing-placeholder" aria-hidden="true">
            <span>{p.site ? "<estudo publicado />" : "<design em construção />"}</span>
            <i></i>
            <i></i>
          </div>
          <span className="landing-status">
            <i></i> {p.site ? "ESTUDO INDEPENDENTE · DISPONÍVEL" : "ESTUDO INDEPENDENTE · EM BREVE"}
          </span>
        </div>
      );
      break;
    case "iexpress":
      content = <Image src={iexpressImage} alt="Estudo da página inicial iExpress no Figma" />;
      break;
    case "donuts":
      content = (
        <>
          <div className="donut-title">
            <span>$ ./</span>donuts
            <br />
            game<span>_</span>
          </div>
          <div className="donut-art" aria-hidden="true"></div>
          <span className="terminal-caption">PRESS START → EXERCITE A LÓGICA</span>
        </>
      );
      break;
    case "private":
      content = (
        <>
          <div className="private-title">
            Do fluxo
            <br />à interface.
          </div>
          <div className="private-diagram" aria-hidden="true">
            <i></i>
            <i></i>
            <i></i>
            <i>{"{ }"}</i>
          </div>
          <span className="private-note">
            CASE PROFISSIONAL
            <br />
            APRESENTAÇÃO RESERVADA
          </span>
        </>
      );
      break;
  }
  return (
    <>
      <span className="cover-label">{coverLabel(p)}</span>
      <div className="cover-inner">{content}</div>
    </>
  );
}

/** Classes da capa: tipo + tom da marca (quando existir). */
const coverClass = (p: Project) => `project-cover cover-${p.cover}${p.tone ? ` tone-${p.tone}` : ""}`;

export function Projects() {
  const [filter, setFilter] = useState<ProjectFilter>("all");
  const [selected, setSelected] = useState<Project | null>(null);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const visible = filterProjects(filter);

  // Abre o diálogo depois que o conteúdo do projeto escolhido foi renderizado.
  useEffect(() => {
    const dialog = dialogRef.current;
    if (!selected || !dialog || dialog.open) return;
    openDialog(dialog);
    dialog.scrollTop = 0;
  }, [selected]);

  // Qualquer elemento com `data-project` na página abre o diálogo
  // (por exemplo, o botão da seção UI & Figma, fora deste componente).
  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const trigger = (event.target as Element | null)?.closest<HTMLElement>("[data-project]");
      const project = projects.find((p) => p.id === trigger?.dataset.project);
      if (project) setSelected(project);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return (
    <section className="projects section container" id="projetos" aria-labelledby="projects-title">
      <div className="section-kicker">
        <span>01 / PROJETOS SELECIONADOS</span>
        <span>FEITO DE CURIOSIDADE + PRÁTICA</span>
      </div>
      <div className="section-heading">
        <h2 id="projects-title">
          Ideias que saíram
          <br />
          do <span className="serif">papel.</span>
        </h2>
        <p>
          Interfaces, sistemas e experimentos.
          <br />
          Um pouco do que venho construindo.
        </p>
      </div>

      <div className="filters" role="group" aria-label="Filtrar projetos">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            className={filter === f.value ? "active" : undefined}
            aria-pressed={filter === f.value}
            onClick={() => setFilter(f.value)}
          >
            {f.label}
            {f.value === "all" && (
              <>
                {" "}
                <sup>{String(filterProjects("all").length).padStart(2, "0")}</sup>
              </>
            )}
          </button>
        ))}
      </div>
      <p className="sr-only" id="filter-status" aria-live="polite">
        {visible.length} {visible.length === 1 ? "projeto exibido" : "projetos exibidos"}
      </p>

      <div className="project-grid" id="project-grid">
        {visible.map((p) => (
          <article key={p.id} className="project-card">
            <button className={coverClass(p)} data-project={p.id} aria-label={`Ver detalhes de ${p.name}`}>
              <CoverContent project={p} />
              <span className="cover-open" aria-hidden="true">
                ↗
              </span>
            </button>
            <div className="project-meta">
              <span>{p.label}</span>
              <span className="project-number">0{projects.indexOf(p) + 1}</span>
            </div>
            <h3>
              <button className="project-title-button" data-project={p.id}>
                {p.name}
              </button>
            </h3>
            <p>{p.description}</p>
            <div className="tags">
              {p.tags.map((t) => (
                <span key={t}>{t}</span>
              ))}
            </div>
          </article>
        ))}
      </div>

      <div className="project-footer">
        <span>
          <span className="status-dot"></span> Cada projeto, uma nova forma de aprender.
        </span>
        <a
          className="text-link"
          href="https://github.com/CiceroIsaac?tab=repositories"
          target="_blank"
          rel="noopener noreferrer"
        >
          Todos os repositórios <span>↗</span>
        </a>
      </div>

      {/* Diálogo com os detalhes do projeto selecionado */}
      <dialog
        ref={dialogRef}
        id="project-dialog"
        className="project-dialog"
        aria-labelledby="detail-title"
        onClose={() => {
          document.body.classList.remove("body-locked");
          setSelected(null);
        }}
        onClick={closeOnBackdrop}
      >
        <button className="dialog-close" aria-label="Fechar projeto" onClick={() => dialogRef.current?.close()}>
          ×
        </button>
        <div id="project-detail">{selected && <ProjectDetail project={selected} onNavigate={() => dialogRef.current?.close()} />}</div>
      </dialog>
    </section>
  );
}

/** Conteúdo do diálogo de um projeto. */
function ProjectDetail({ project: p, onNavigate }: { project: Project; onNavigate: () => void }) {
  return (
    <>
      <div className="detail-cover">
        {p.image ? (
          <Image src={iexpressImage} alt={`Conceito de interface ${p.name}`} />
        ) : (
          <div className={coverClass(p)}>
            <CoverContent project={p} />
          </div>
        )}
      </div>
      <div className="detail-body">
        <span className="eyebrow">{p.label}</span>
        <h2 id="detail-title">{p.name}</h2>
        <p>{p.summary}</p>
        <div className="tags">
          {p.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
        <h3>{p.id === "private" ? "Estrutura para o case" : "O que explorar"}</h3>
        <ul>
          {p.points.map((t) => (
            <li key={t}>{t}</li>
          ))}
        </ul>
        {p.image && (
          <a className="detail-image-link" href={iexpressImage.src} target="_blank" rel="noopener noreferrer">
            Ver imagem completa ↗
          </a>
        )}
        <div className="detail-links">
          {p.repo && (
            <a className="button primary" href={p.repo} target="_blank" rel="noopener noreferrer">
              Ver código no GitHub <span>↗</span>
            </a>
          )}
          {/* Landing pages ficam no mesmo site: link relativo, na mesma aba. */}
          {p.site && (
            <a className="button outline" href={p.site}>
              Visitar projeto <span>↗</span>
            </a>
          )}
          {p.id === "private" && (
            <a className="button outline" href="#contato" onClick={onNavigate}>
              Conversar sobre projetos <span>↗</span>
            </a>
          )}
        </div>
        <p className="detail-note">{p.note}</p>
      </div>
    </>
  );
}
