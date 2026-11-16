const projects = [
  { id:'donuts', name:'Donuts Game', label:'ESTUDO / LÓGICA & ESTRUTURAS', filters:['dev','academic'], description:'Um jogo em C para exercitar lógica, estruturas de dados e estratégias no terminal.', tags:['C','Estruturas de dados','Terminal'], cover:'donuts', summary:'Um projeto em C que usa um jogo no terminal como contexto para praticar lógica de programação e estruturas de dados.', points:['Aprendizado por meio da construção de um jogo.','Exploração de lógica e estruturas de dados em C.','Interação no terminal.'], repo:'https://github.com/CiceroIsaac/Donuts_Game', note:'Descrição baseada no README público do projeto. A capa é uma composição ilustrativa; a interface do jogo é no terminal.' },
  {"id": "itau", "name": "Itaú — landing page", "brand": "Itaú", "label": "ESTUDO / EM DESENVOLVIMENTO", "filters": ["dev", "academic"], "description": "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.", "tags": ["Landing page", "Estudo independente", "Em breve"], "cover": "landing", "tone": "itau", "slot": "01", "summary": "Este espaço está reservado para uma landing page conceitual inspirada na marca Itaú. O design e a implementação serão desenvolvidos em uma próxima etapa.", "points": ["Direção visual e composição a desenvolver.", "Implementação e versão responsiva a desenvolver.", "Links de demonstração e código ainda não disponíveis."], "repo": "", "site": "", "note": "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta."},
  {"id": "nescau", "name": "Nescau — landing page", "brand": "Nescau", "label": "ESTUDO / EM DESENVOLVIMENTO", "filters": ["dev", "academic"], "description": "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.", "tags": ["Landing page", "Estudo independente", "Em breve"], "cover": "landing", "tone": "nescau", "slot": "02", "summary": "Este espaço está reservado para uma landing page conceitual inspirada na marca Nescau. O design e a implementação serão desenvolvidos em uma próxima etapa.", "points": ["Direção visual e composição a desenvolver.", "Implementação e versão responsiva a desenvolver.", "Links de demonstração e código ainda não disponíveis."], "repo": "", "site": "", "note": "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta."},
  {"id": "dona-benta", "name": "Farinha Dona Benta — landing page", "brand": "Farinha Dona Benta", "label": "ESTUDO / EM DESENVOLVIMENTO", "filters": ["dev", "academic"], "description": "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.", "tags": ["Landing page", "Estudo independente", "Em breve"], "cover": "landing", "tone": "dona-benta", "slot": "03", "summary": "Este espaço está reservado para uma landing page conceitual inspirada na marca Farinha Dona Benta. O design e a implementação serão desenvolvidos em uma próxima etapa.", "points": ["Direção visual e composição a desenvolver.", "Implementação e versão responsiva a desenvolver.", "Links de demonstração e código ainda não disponíveis."], "repo": "", "site": "", "note": "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta."},
  {"id": "burger-king", "name": "Burger King — landing page", "brand": "Burger King", "label": "ESTUDO / EM DESENVOLVIMENTO", "filters": ["dev", "academic"], "description": "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.", "tags": ["Landing page", "Estudo independente", "Em breve"], "cover": "landing", "tone": "burger-king", "slot": "04", "summary": "Este espaço está reservado para uma landing page conceitual inspirada na marca Burger King. O design e a implementação serão desenvolvidos em uma próxima etapa.", "points": ["Direção visual e composição a desenvolver.", "Implementação e versão responsiva a desenvolver.", "Links de demonstração e código ainda não disponíveis."], "repo": "", "site": "", "note": "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta."},
  {"id": "doritos", "name": "Doritos — landing page", "brand": "Doritos", "label": "ESTUDO / EM DESENVOLVIMENTO", "filters": ["dev", "academic"], "description": "Espaço reservado para um estudo de landing page. Design e código em desenvolvimento.", "tags": ["Landing page", "Estudo independente", "Em breve"], "cover": "landing", "tone": "doritos", "slot": "05", "summary": "Este espaço está reservado para uma landing page conceitual inspirada na marca Doritos. O design e a implementação serão desenvolvidos em uma próxima etapa.", "points": ["Direção visual e composição a desenvolver.", "Implementação e versão responsiva a desenvolver.", "Links de demonstração e código ainda não disponíveis."], "repo": "", "site": "", "note": "Estudo independente para portfólio, sem vínculo, contratação ou parceria com a marca. A capa identifica um espaço reservado; não representa uma página pronta."},
  {"id": "iexpress", "name": "iExpress — interface study", "label": "UI DESIGN / CONCEITO", "filters": ["figma"], "showInAll": false, "description": "Estudo de landing page para uma marca fictícia de tecnologia, desenvolvido no Figma.", "tags": ["Figma", "UI Design", "Landing page"], "cover": "iexpress", "summary": "Uma proposta de interface para a página inicial da iExpress, marca fictícia de iPhones. O estudo explora hierarquia visual, apresentação de produto e chamadas para ação.", "points": ["Direção visual clara, com roxo como cor de destaque.", "Composição de hero com produto, mensagem e chamadas para ação.", "Apresentação da interface por uma prévia estática do Figma."], "image": "assets/iexpress.png", "note": "Conceito visual de marca fictícia, sem vínculo comercial. Apenas o recorte da página inicial é exibido; o arquivo Figma, painéis internos e dados administrativos não são disponibilizados. Não representa uma aplicação implementada."},
  { id:'private', name:'Catálogo & gestão comercial', label:'PROJETO PROFISSIONAL / RESERVADO', filters:['professional'], showInAll:false, description:'Espaço reservado para um case profissional de prototipagem e desenvolvimento.', tags:['Projeto colaborativo','UI / UX','Web'], cover:'private', summary:'Esta base reserva espaço para apresentar um projeto comercial, com contexto, papel individual, decisões de interface e implementação. Nome do cliente, telas e resultados permanecem fora da apresentação até a definição do material que pode ser divulgado.', points:['Contexto do desafio e escopo do trabalho.','Contribuição individual e participação dos colaboradores.','Fluxos, telas e resultados a inserir após confirmação.'], note:'Apresentação reservada. Nenhuma contratação, resultado de negócio, lançamento ou autorização de divulgação é afirmado nesta base.' }
];

function coverContent(p) {
  const contents={
    landing:`<div class="landing-slot"><span class="landing-index">LANDING PAGE / ${p.slot}</span><strong>${p.brand}</strong><div class="landing-placeholder" aria-hidden="true"><span>&lt;design em construção /&gt;</span><i></i><i></i></div><span class="landing-status"><i></i> ESTUDO INDEPENDENTE · EM BREVE</span></div>`,
    iexpress:`<img src="assets/iexpress.png" width="1442" height="985" alt="Estudo da página inicial iExpress no Figma" loading="lazy">`,
    donuts:`<div class="donut-title"><span>$ ./</span>donuts<br>game<span>_</span></div><div class="donut-art" aria-hidden="true"></div><span class="terminal-caption">PRESS START → EXERCITE A LÓGICA</span>`,
    private:`<div class="private-title">Do fluxo<br>à interface.</div><div class="private-diagram" aria-hidden="true"><i></i><i></i><i></i><i>{ }</i></div><span class="private-note">CASE PROFISSIONAL<br>APRESENTAÇÃO RESERVADA</span>`
  };
  return `<span class="cover-label">${p.id==='iexpress'?'ESTUDO VISUAL':p.id==='private'||p.cover==='landing'?'EM CONSTRUÇÃO':'CAPA EDITORIAL'}</span><div class="cover-inner">${contents[p.cover]}</div>`;
}

const grid=document.querySelector('#project-grid');
function renderProjects(filter='all') {
  const filtered=projects.filter(p=>filter==='all'?p.showInAll!==false:p.filters.includes(filter));
  grid.innerHTML=filtered.map(p=>`<article class="project-card"><button class="project-cover cover-${p.cover}${p.tone?` tone-${p.tone}`:''}" data-project="${p.id}" aria-label="Ver detalhes de ${p.name}">${coverContent(p)}<span class="cover-open" aria-hidden="true">↗</span></button><div class="project-meta"><span>${p.label}</span><span class="project-number">0${projects.indexOf(p)+1}</span></div><h3><button class="project-title-button" data-project="${p.id}">${p.name}</button></h3><p>${p.description}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div></article>`).join('');
  document.querySelector('#filter-status').textContent=`${filtered.length} ${filtered.length===1?'projeto exibido':'projetos exibidos'}`;
}
renderProjects();
document.querySelectorAll('[data-filter]').forEach(button=>button.addEventListener('click',()=>{
  document.querySelectorAll('[data-filter]').forEach(b=>{b.classList.toggle('active',b===button);b.setAttribute('aria-pressed',String(b===button));});
  renderProjects(button.dataset.filter);
}));

const projectDialog=document.querySelector('#project-dialog');
const commandDialog=document.querySelector('#command-dialog');
function openDialog(dialog){dialog.showModal();document.body.classList.add('body-locked');}
[projectDialog,commandDialog].forEach(dialog=>{
  dialog.querySelector('.dialog-close').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('close',()=>document.body.classList.remove('body-locked'));
  dialog.addEventListener('click',event=>{if(event.target===dialog){const r=dialog.getBoundingClientRect();if(event.clientX<r.left||event.clientX>r.right||event.clientY<r.top||event.clientY>r.bottom)dialog.close();}});
});
document.addEventListener('click',event=>{
  const button=event.target.closest('[data-project]');if(!button)return;
  const p=projects.find(p=>p.id===button.dataset.project);if(!p)return;
  projectDialog.setAttribute('aria-labelledby','detail-title');
  document.querySelector('#project-detail').innerHTML=`<div class="detail-cover">${p.image?`<img src="${p.image}" alt="Conceito de interface ${p.name}">`:`<div class="project-cover cover-${p.cover}${p.tone?` tone-${p.tone}`:''}">${coverContent(p)}</div>`}</div><div class="detail-body"><span class="eyebrow">${p.label}</span><h2 id="detail-title">${p.name}</h2><p>${p.summary}</p><div class="tags">${p.tags.map(t=>`<span>${t}</span>`).join('')}</div><h3>${p.id==='private'?'Estrutura para o case':'O que explorar'}</h3><ul>${p.points.map(t=>`<li>${t}</li>`).join('')}</ul>${p.image?`<a class="detail-image-link" href="${p.image}" target="_blank" rel="noopener noreferrer">Ver imagem completa ↗</a>`:''}<div class="detail-links">${p.repo?`<a class="button primary" href="${p.repo}" target="_blank" rel="noopener noreferrer">Ver código no GitHub <span>↗</span></a>`:''}${p.site?`<a class="button outline" href="${p.site}" target="_blank" rel="noopener noreferrer">Visitar projeto <span>↗</span></a>`:''}${p.id==='private'?'<a class="button outline" href="#contato" data-close-project>Conversar sobre projetos <span>↗</span></a>':''}</div><p class="detail-note">${p.note}</p></div>`;
  openDialog(projectDialog);projectDialog.scrollTop=0;
  projectDialog.querySelector('[data-close-project]')?.addEventListener('click',()=>projectDialog.close());
});
document.querySelectorAll('[data-command]').forEach(b=>b.addEventListener('click',()=>openDialog(commandDialog)));
document.addEventListener('keydown',event=>{if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();if(projectDialog.open)projectDialog.close();commandDialog.open?commandDialog.close():openDialog(commandDialog);}});
commandDialog.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>commandDialog.close()));

const menu=document.querySelector('.menu-toggle'),mobileNav=document.querySelector('#mobile-nav');
let menuAnimation;
function setMenu(open){
  menuAnimation?.cancel();
  menu.setAttribute('aria-expanded',String(open));
  menu.setAttribute('aria-label',open?'Fechar menu':'Abrir menu');
  mobileNav.inert=!open;
  if(mobileNav.hidden&&!open)return Promise.resolve();
  mobileNav.hidden=false;
  const style=getComputedStyle(mobileNav);
  const expanded={height:`${mobileNav.offsetHeight}px`,opacity:1,paddingTop:style.paddingTop,paddingBottom:style.paddingBottom};
  const collapsed={height:'0px',opacity:0,paddingTop:'0px',paddingBottom:'0px'};
  if(window.matchMedia('(prefers-reduced-motion: reduce)').matches){mobileNav.hidden=!open;return Promise.resolve();}
  const animation=mobileNav.animate(open?[collapsed,expanded]:[expanded,collapsed],{duration:220,easing:'cubic-bezier(.22,1,.36,1)'});
  menuAnimation=animation;
  return animation.finished.then(()=>{if(menuAnimation===animation){mobileNav.hidden=!open;menuAnimation=null;}},()=>{});
}
function closeMenu(){return setMenu(false);}
menu.addEventListener('click',()=>setMenu(menu.getAttribute('aria-expanded')!=='true'));
mobileNav.querySelectorAll('a').forEach(a=>a.addEventListener('click',async event=>{
  event.preventDefault();
  await closeMenu();
  history.pushState(null,'',a.hash);
  document.querySelector(a.hash)?.scrollIntoView({behavior:window.matchMedia('(prefers-reduced-motion: reduce)').matches?'instant':'smooth'});
}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&menu.getAttribute('aria-expanded')==='true'){closeMenu();menu.focus();}});
document.addEventListener('click',event=>{if(menu.getAttribute('aria-expanded')==='true'&&!event.target.closest('.header'))closeMenu();});
window.addEventListener('resize',()=>{if(innerWidth>800)closeMenu();});

const track=document.querySelector('#journey-track'),prev=document.querySelector('#prev-slide'),next=document.querySelector('#next-slide');
const reduced=window.matchMedia('(prefers-reduced-motion: reduce)');
function slideStep(){return track.firstElementChild.getBoundingClientRect().width+parseFloat(getComputedStyle(track).gap);}
function moveSlide(direction){track.scrollBy({left:slideStep()*direction,behavior:reduced.matches?'instant':'smooth'});}
prev.addEventListener('click',()=>moveSlide(-1));next.addEventListener('click',()=>moveSlide(1));
track.addEventListener('keydown',e=>{if(e.key==='ArrowRight'){e.preventDefault();moveSlide(1);}if(e.key==='ArrowLeft'){e.preventDefault();moveSlide(-1);}});
function updateCarousel(){const max=track.scrollWidth-track.clientWidth;const index=Math.round(track.scrollLeft/slideStep());prev.disabled=track.scrollLeft<3;next.disabled=track.scrollLeft>=max-3;document.querySelector('#carousel-position').textContent=`0${index+1} / 04`;document.querySelector('#carousel-progress').style.width=`${Math.min(100,((track.scrollLeft+track.clientWidth)/track.scrollWidth)*100)}%`;}
track.addEventListener('scroll',updateCarousel,{passive:true});window.addEventListener('resize',updateCarousel);updateCarousel();

document.querySelector('#copy-email').addEventListener('click',async()=>{
  const status=document.querySelector('#copy-status');
  try{await navigator.clipboard.writeText('ciceroisaacsc@gmail.com');status.textContent='E-mail copiado. Até já!';}
  catch{status.textContent='Selecione e copie: ciceroisaacsc@gmail.com';}
});
const sections=['projetos','sobre','trajetoria'].map(id=>document.getElementById(id));
const navObserver=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting)document.querySelectorAll('.desktop-nav a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id));});},{rootMargin:'-15% 0px -65% 0px'});sections.forEach(s=>navObserver.observe(s));

// Hero: uma única linha é escrita, permanece visível e é apagada.
// Sem dependências; pausa manual, aba oculta e movimento reduzido respeitados.
(() => {
  const output = document.querySelector('#typing-code');
  if (!output) return;
  const editor = document.querySelector('.typing-editor');
  const button = document.querySelector('#typing-toggle');
  const state = document.querySelector('#typing-state');
  const stepLabel = document.querySelector('#typing-step-label');
  const markers = [...document.querySelectorAll('.typing-steps i')];
  const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
  const lines = [
    'const ideia = await imaginar();',
    'const tela = desenhar(ideia);',
    'const produto = desenvolver();',
    'return publicar(produto);'
  ];
  let line = 0, character = 0, deleting = false, timer;
  let paused = motion.matches;

  function paint() {
    output.textContent = lines[line].slice(0, character);
    stepLabel.textContent = `0${line + 1} / 04`;
    markers.forEach((marker, index) => marker.classList.toggle('active', index === line));
    state.textContent = paused ? 'PAUSADO' : deleting ? 'APAGANDO' : 'ESCREVENDO';
    editor.classList.toggle('is-paused', paused);
    button.setAttribute('aria-pressed', String(paused));
    button.innerHTML = paused ? 'Reproduzir animação <span aria-hidden="true">▷</span>' : 'Pausar animação <span aria-hidden="true">Ⅱ</span>';
  }
  function schedule(delay) {
    clearTimeout(timer);
    if (!paused && !document.hidden) timer = setTimeout(tick, delay);
  }
  function tick() {
    if (paused || document.hidden) return;
    if (!deleting) {
      if (character < lines[line].length) {
        character++;
        paint();
        schedule(65);
      } else {
        deleting = true;
        state.textContent = 'PRÓXIMA IDEIA';
        schedule(1500);
      }
    } else if (character > 0) {
      character--;
      paint();
      schedule(30);
    } else {
      deleting = false;
      line = (line + 1) % lines.length;
      paint();
      schedule(350);
    }
  }
  button.addEventListener('click', () => {
    paused = !paused;
    clearTimeout(timer);
    paint();
    if (!paused) schedule(100);
  });
  motion.addEventListener('change', event => {
    paused = event.matches;
    clearTimeout(timer);
    if (paused) { deleting = false; character = lines[line].length; }
    paint();
    if (!paused) schedule(700);
  });
  document.addEventListener('visibilitychange', () => {
    clearTimeout(timer);
    if (!document.hidden && !paused) schedule(400);
  });
  if (paused) character = lines[0].length;
  paint();
  schedule(850);
})();
