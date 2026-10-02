/* Mockup Landing Page BioCursos - RHA UFRGS */

const courseModules = [
  {
    id: 1,
    category: "ead",
    title: "Fisiologia e Embriologia Reprodutiva Humana",
    startDate: "01/03/2027",
    endDate: "30/04/2027",
    duration: "40 horas",
    format: "EaD Síncrono",
    gradient: "linear-gradient(135deg, #12386b, #4f7fc0)",
    bgIcon: "🧬",
    teachers: [
      { name: "Drª. Adriana Bos-Mikich", title: "Doutora · UFRGS", initials: "AB" },
      { name: "Dr. Eduardo Chiela", title: "Doutor · UFRGS", initials: "EC" }
    ],
    topics: [
      "Anatomia e histologia dos sistemas reprodutores masculino e feminino",
      "Fisiologia hormonal do ciclo menstrual e espermatogênese",
      "Fecundação, clivagem e embriogênese inicial",
      "Mecanismos moleculares de implantação embrionária"
    ]
  },
  {
    id: 2,
    category: "pratica",
    title: "Fertilização in Vitro (FIV) e Cultivo Embrionário",
    startDate: "03/05/2027",
    endDate: "30/06/2027",
    duration: "50 horas",
    format: "EaD + Prática",
    gradient: "linear-gradient(135deg, #5f2158, #e6007e)",
    bgIcon: "🔬",
    teachers: [
      { name: "Drª. Paula Rigon Soster", title: "Doutora · UFRGS", initials: "PS" },
      { name: "Msc. Daiane Pagliarin", title: "Mestre · Nilo Frantz", initials: "DP" }
    ],
    topics: [
      "Manipulação e avaliação morfofuncional de oócitos",
      "Inseminação convencional vs. Injeção Intracitoplasmática (ICSI)",
      "Sistemas de cultivo embrionário e controle de qualidade de laboratório",
      "Acompanhamento até o estágio de blastocisto"
    ]
  },
  {
    id: 3,
    category: "pratica",
    title: "Andrologia Avançada e Processamento Seminal",
    startDate: "01/07/2027",
    endDate: "31/08/2027",
    duration: "45 horas",
    format: "EaD + Prática",
    gradient: "linear-gradient(135deg, #0e4b68, #2a9d8f)",
    bgIcon: "🧫",
    teachers: [
      { name: "Dr. Alexandre Duarte", title: "Doutor · UFRGS", initials: "AD" },
      { name: "Msc. Marcelo Ferreira", title: "Mestre · Nilo Frantz", initials: "MF" }
    ],
    topics: [
      "Análise seminal rigorosa (parâmetros OMS 6ª Edição)",
      "Capacitação e técnicas de seleção espermática (Gradient/Swim-up)",
      "Avaliação de fragmentação do DNA espermático",
      "Automação e bioestatística em Andrologia"
    ]
  },
  {
    id: 4,
    category: "ead",
    title: "Genética Reprodutiva e Testes Pré-Implantacionais (PGT)",
    startDate: "01/09/2027",
    endDate: "31/10/2027",
    duration: "40 horas",
    format: "EaD Síncrono",
    gradient: "linear-gradient(135deg, #3d2645, #8338ec)",
    bgIcon: "📊",
    teachers: [
      { name: "Dr. Lucas Rosa Fraga", title: "Doutor · UFRGS", initials: "LF" },
      { name: "Drª. Maria Teresa Sanseverino", title: "Doutora · Ext", initials: "MS" }
    ],
    topics: [
      "Bases da citogenética e genética molecular aplicada",
      "Indicadores e protocolo para PGT-A (Aneuploidias) e PGT-M (Monogênicas)",
      "Técnicas de biópsia de trofectoderma",
      "Aconselhamento genético em casais tentantes"
    ]
  },
  {
    id: 5,
    category: "pratica",
    title: "Criopreservação de Gametas e Embriões",
    startDate: "01/11/2027",
    endDate: "15/12/2027",
    duration: "40 horas",
    format: "EaD + Prática",
    gradient: "linear-gradient(135deg, #1b4965, #62b6cb)",
    bgIcon: "❄️",
    teachers: [
      { name: "Drª. Ana Helena da Rosa Paz", title: "Doutora · UFRGS", initials: "AP" },
      { name: "Dr. Marcos Iuri Kulmann", title: "Doutor · Nilo Frantz", initials: "MK" }
    ],
    topics: [
      "Física da criopreservação: Congelamento lento vs. Vitrificação",
      "Protocolos de vitrificação e aquecimento de oócitos e blastocistos",
      "Segurança e controle contínuo em biobancos de N2 líquido",
      "Aspectos éticos e legais do armazenamento de embriões"
    ]
  },
  {
    id: 6,
    category: "imersao",
    title: "Imersão Prática Presencial na Clínica Nilo Frantz",
    startDate: "10/01/2028",
    endDate: "28/02/2028",
    duration: "45 horas presenciais",
    format: "Presencial · Porto Alegre",
    gradient: "linear-gradient(135deg, #12386b, #e6007e)",
    bgIcon: "🏥",
    teachers: [
      { name: "Equipe Clínica Nilo Frantz", title: "Especialistas RHA", initials: "NF" },
      { name: "Drª. Adriana Bos-Mikich", title: "Coordenadora UFRGS", initials: "AB" }
    ],
    topics: [
      "Vivência real de rotina clínica da consulta inicial ao término do ciclo",
      "Observação guiada de punção oocitária e transferência de embriões",
      "Acompanhamento direto em laboratório de alta complexidade",
      "Discussão presencial de casos clínicos complexos"
    ]
  }
];

const specific = [
  "Preparar profissionais graduados nas áreas da saúde e biológicas para um mercado de trabalho em franca expansão: a reprodução humana assistida (RHA);",
  "Expor a relevância e a relação entre o conhecimento teórico e as práticas clínicas e laboratoriais, criando uma atitude crítica e capacitada;",
  "Incentivar e habilitar os profissionais a buscar conhecimento baseado em rigorosos critérios científicos para elaborar propostas de pesquisa;",
  "Proporcionar a oportunidade única de vivenciar a rotina de uma clínica de RHA (Nilo Frantz), desde a consulta inicial ao término do ciclo;",
  "Oportunizar a observação prática de preparo seminal, fertilização in vitro (FIV), manipulação de oócitos, cultivo embrionário e vitrificação;",
  "Favorecer o contato direto com renomados especialistas e pesquisadores em RHA, construindo uma valiosa rede de contatos para o mercado."
];

const subjects = [
  "Origem e Anatomia dos Sistemas Reprodutores Masculino e Feminino",
  "Histologia dos Sistemas Reprodutores Masculino e Feminino",
  "Fisiologia da Reprodução",
  "Embriologia Aplicada à Reprodução",
  "Genética Aplicada à Reprodução",
  "Farmacologia na Infertilidade",
  "Imunologia da Reprodução",
  "Microbiologia Aplicada à Reprodução",
  "Andrologia Laboratorial",
  "Tecnologias de Reprodução Assistida",
  "Laboratório de RHA: Manipulação e Cultivo Embrionário",
  "Criopreservação de Gametas e Embriões",
  "Atividade Prática de Observação (Clínica Nilo Frantz)"
];

const teamUfrgs = [
  ["Adriana Bos Mikich", "Doutora · Coordenadora"],
  ["Paula Rigon da Luz Soster", "Doutora · Coord. Adjunta"],
  ["Alexandre Tavares Duarte de Oliveira", "Doutor"],
  ["Ana Helena da Rosa Paz", "Doutora"],
  ["Charles Francisco Ferreira", "Doutor"],
  ["Eduardo Cambruzzi", "Doutor"],
  ["Eduardo Cremonese Filippi Chiela", "Doutor"],
  ["Eloisa da Silveira Loss", "Doutora"],
  ["Henrique Zaquia Leão", "Doutor"],
  ["José Artur Bogo Chies", "Doutor"],
  ["Lucas Rosa Fraga", "Doutor"],
  ["Taís Malysz", "Doutora"]
];

const teamExt = [
  ["Daiane Pagliarin", "Mestre · Nilo Frantz"],
  ["Marcelo Ferreira", "Mestre · Nilo Frantz"],
  ["Marcos Iuri Roos Kulmann", "Doutor · Nilo Frantz"],
  ["Maria Teresa Vieira Sanseverino", "Doutora · Genética"],
  ["Simone Mattiello", "Especialista · Embriologia"]
];

const testimonials = [
  {
    name: "Drª. Camile Mendonça",
    role: "Biomédica Embriologista",
    text: "A imersão prática na Clínica Nilo Frantz foi o diferencial divisor de águas na minha carreira. Ver a rotina real de um laboratório de RHA de alta precisão não tem preço.",
    avatar: "CM"
  },
  {
    name: "Juliano Silveira",
    role: "Biólogo & Pesquisador",
    text: "O corpo docente da UFRGS traz fundamentação científica de altíssimo nível. Recomendo fortemente para quem deseja se posicionar com autoridade em Reprodução Assistida.",
    avatar: "JS"
  },
  {
    name: "Mariana Alencar",
    role: "Farmacêutica",
    text: "O formato híbrido com EaD síncrono e aulas presenciais permitiu conciliar o trabalho com uma formação de referência nacional.",
    avatar: "MA"
  }
];

const $ = id => document.getElementById(id);

// Render specific objectives
if ($("specific")) {
  $("specific").innerHTML = specific.map(t => `<li>${t}</li>`).join("");
}

// Render legacy subjects list
if ($("subjects")) {
  $("subjects").innerHTML = subjects.map((t, i) =>
    `<li${i === subjects.length - 1 ? ' class="practical"' : ""}>${t}</li>`).join("");
}

// Render team
const person = ([n, t]) => `<li>
  <span class="avatar">${n.split(" ").filter(w => w[0] === w[0].toUpperCase()).map(w => w[0]).slice(0, 2).join("")}</span>
  <div><strong>${n}</strong><span>${t}</span></div>
</li>`;

if ($("team-ufrgs")) $("team-ufrgs").innerHTML = teamUfrgs.map(person).join("");
if ($("team-ext")) $("team-ext").innerHTML = teamExt.map(person).join("");

// Render Testimonials
if ($("testimonials-grid")) {
  $("testimonials-grid").innerHTML = testimonials.map(t => `
    <div class="testimonial-card">
      <div class="test-header">
        <div class="test-avatar">${t.avatar}</div>
        <div>
          <strong>${t.name}</strong>
          <span>${t.role}</span>
        </div>
      </div>
      <p class="test-text">"${t.text}"</p>
      <div class="test-rating">★★★★★</div>
    </div>
  `).join("");
}

// Render Course Cards
function renderCourseCards(filter = "all") {
  const container = $("course-grid");
  if (!container) return;

  const filtered = filter === "all" ? courseModules : courseModules.filter(m => m.category === filter);

  container.innerHTML = filtered.map(c => `
    <div class="course-card" tabindex="0" data-id="${c.id}">
      <div class="card-inner">
        <!-- Front of Card -->
        <div class="card-front" style="background: ${c.gradient}">
          <div class="topic-bg-icon">${c.bgIcon}</div>
          <div class="card-header-badge">
            <span class="badge-format">${c.format}</span>
            <span class="badge-duration">⏱️ ${c.duration}</span>
          </div>

          <h3 class="card-title">${c.title}</h3>

          <div class="card-dates-box">
            <div class="date-item">
              <span class="date-label">Início</span>
              <strong>${c.startDate}</strong>
            </div>
            <div class="date-arrow">➔</div>
            <div class="date-item">
              <span class="date-label">Término</span>
              <strong>${c.endDate}</strong>
            </div>
          </div>

          <!-- Foreground Teachers Display -->
          <div class="teacher-foreground">
            <span class="teachers-label">Professores Responsáveis:</span>
            <div class="teacher-avatars-row">
              ${c.teachers.map(t => `
                <div class="teacher-chip" title="${t.name} (${t.title})">
                  <span class="chip-avatar">${t.initials}</span>
                  <span class="chip-name">${t.name.split(" ")[0]} ${t.name.split(" ").slice(-1)}</span>
                </div>
              `).join("")}
            </div>
          </div>

          <div class="card-hover-hint">
            <span>Passe o mouse ou clique para ver ementa</span>
            <span class="hint-icon">🔄</span>
          </div>
        </div>

        <!-- Back of Card (Hover / Click Detail) -->
        <div class="card-back">
          <div class="card-back-header">
            <h4>${c.title}</h4>
            <span class="back-dates">📅 ${c.startDate} até ${c.endDate}</span>
          </div>

          <div class="card-syllabus">
            <h5>Programação & Tópicos:</h5>
            <ul>
              ${c.topics.map(tp => `<li>${tp}</li>`).join("")}
            </ul>
          </div>

          <div class="card-teachers-detail">
            <h5>Corpo Docente Responsável:</h5>
            ${c.teachers.map(t => `
              <div class="t-detail-item">
                <span class="t-avatar-sm">${t.initials}</span>
                <div>
                  <strong>${t.name}</strong>
                  <span class="t-title-sm">${t.title}</span>
                </div>
              </div>
            `).join("")}
          </div>

          <div class="card-action-bar">
            <a href="#contato" class="btn btn-sm btn-card-action">Garantir Vaga no Curso</a>
          </div>
        </div>
      </div>
    </div>
  `).join("");

  // Add click to flip capability for touch & keyboard users
  document.querySelectorAll(".course-card").forEach(card => {
    card.addEventListener("click", (e) => {
      if (e.target.tagName !== "A") {
        card.classList.toggle("flipped");
      }
    });
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        card.classList.toggle("flipped");
      }
    });
  });
}

// Filter tabs
document.querySelectorAll(".tab-btn").forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".tab-btn").forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderCourseCards(btn.dataset.filter);
  });
});

// Mobile menu toggle
const menuBtn = document.querySelector(".menu-btn");
const navLinks = document.querySelector(".nav-links");
if (menuBtn && navLinks) {
  menuBtn.addEventListener("click", () => {
    const expanded = menuBtn.getAttribute("aria-expanded") === "true";
    menuBtn.setAttribute("aria-expanded", !expanded);
    navLinks.classList.toggle("open");
  });
}

/* Situação das inscrições (13/10/2026 a 15/01/2027) */
(() => {
  const open = new Date(2026, 9, 13), close = new Date(2027, 0, 15, 23, 59, 59), now = new Date();
  const days = Math.ceil((open - now) / 864e5);
  const statusEl = $("status");
  if (statusEl) {
    statusEl.textContent =
      now < open ? `Inscrições abrem em ${days} ${days === 1 ? "dia" : "dias"} (em 13/10/2026).` :
      now <= close ? "Inscrições abertas até 15/01/2027." : "Período de inscrições encerrado.";
  }
})();

// Initial render
renderCourseCards();

const subjects = [
  "Origem e Anatomia dos Sistemas Reprodutores Masculino e Feminino",
  "Histologia dos Sistemas Reprodutores Masculino e Feminino",
  "Fisiologia da Reprodução",
  "Embriologia Aplicada à Reprodução",
  "Genética Aplicada à Reprodução",
  "Farmacologia na Infertilidade",
  "Exames de Imagem Aplicados à Reprodução Humana Assistida",
  "Preservação da Fertilidade",
  "Reprodução Humana Assistida voltada à população LGBTQIAPN+",
  "Ética e Legislação em Reprodução Humana Assistida",
  "Administração e Gerenciamento de Clínicas de Reprodução Humana Assistida",
  "Metodologia da Pesquisa e TCC",
  "Atividade Prática de Observação"
];
const teamUfrgs = [
  ["Adriana Bos Mikich","Doutora"],["Alexandre Tavares Duarte de Oliveira","Doutor"],["Ana Helena da Rosa Paz","Doutora"],
  ["Charles Francisco Ferreira","Doutor"],["Eduardo Cambruzzi","Doutor"],["Eduardo Cremonese Filippi Chiela","Doutor"],
  ["Eloisa da Silveira Loss","Doutora"],["Henrique Zaquia Leão","Doutor"],["João Henrique Correa Kanan","Doutor"],
  ["José Artur Bogo Chies","Doutor"],["Lisiane Bernardi","Doutor"],["Dirce Maria Santin","Doutora"],
  ["Lucas Rosa Fraga","Doutor"],["Paula Rigon da Luz Soster","Doutora"],["Rossana Colla Solette","Doutora"],
  ["Taís Malysz","Doutora"],["Tatiana Luft","Doutora"]
];
const teamExt = [
  ["Daiane Pagliarin","Mestre"],["Gabriela Mamede Andrade","Doutora"],["Marcelo Ferreira","Mestre"],
  ["Marcos Iuri Roos Kulmann","Doutor"],["Maria Teresa Vieira Sanseverino","Doutora"],
  ["Norma Pagnoncelli Oliveira","Mestre"],["Simone Mattiello","Especialista"]
];

const $ = id => document.getElementById(id);
$("specific").innerHTML = specific.map(t => `<li>${t}</li>`).join("");
$("subjects").innerHTML = subjects.map((t, i) =>
  `<li${i === subjects.length - 1 ? ' class="practical"' : ""}>${t}</li>`).join("");
const person = ([n, t]) => `<li><span class="avatar">${n.split(" ").filter(w => w[0] === w[0].toUpperCase())
  .map(w => w[0]).slice(0, 2).join("")}</span><div><strong>${n}</strong><span>${t}</span></div></li>`;
$("team-ufrgs").innerHTML = teamUfrgs.map(person).join("");
$("team-ext").innerHTML = teamExt.map(person).join("");

/* Situação das inscrições (13/10/2026 a 15/01/2027) */
(() => {
  const open = new Date(2026, 9, 13), close = new Date(2027, 0, 15, 23, 59, 59), now = new Date();
  const days = Math.ceil((open - now) / 864e5);
  $("status").textContent =
    now < open ? `Inscrições abrem em ${days} ${days === 1 ? "dia" : "dias"}, em 13/10/2026.` :
    now <= close ? "Inscrições abertas até 15/01/2027." : "Período de inscrições encerrado.";
})();

/* Menu mobile */
const btn = document.querySelector(".menu-btn"), menu = $("menu");
btn.addEventListener("click", () => btn.setAttribute("aria-expanded", menu.classList.toggle("open")));
menu.addEventListener("click", e => { if (e.target.tagName === "A") { menu.classList.remove("open"); btn.setAttribute("aria-expanded", "false"); } });
