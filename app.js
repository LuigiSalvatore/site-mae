/* Conteúdo editável: altere as listas abaixo e a página se atualiza. */
const specific = [
  "Preparar profissionais graduados nas áreas da saúde e biológicas para um mercado de trabalho cada vez mais competitivo e em franca expansão: a reprodução humana assistida (RHA);",
  "Expor a relevância e a relação entre o conhecimento teórico e as práticas clínicas e laboratoriais, criando uma atitude crítica e capacitada, capaz de contribuir efetivamente nas tomadas de decisões;",
  "Incentivar e habilitar os profissionais a buscar conhecimento baseado em rigorosos critérios científicos, para elaborar propostas de pesquisa e manuscritos relacionados a seus interesses específicos dentre os inúmeros tópicos da RHA;",
  "Proporcionar a oportunidade única de vivenciar a rotina de uma clínica de RHA, desde a entrevista inicial com os pacientes até o final de um ciclo, com acompanhamento presencial em atividades clínicas e laboratoriais;",
  "Oportunizar a observação de atividades laboratoriais práticas de preparo de material seminal para exame de rotina, para emprego nas diferentes técnicas de inseminação/fertilização e para criopreservação;",
  "Possibilitar a observação de atividades laboratoriais práticas de manipulação de gametas e embriões para técnicas de fertilização in vitro (FIV), cultivo embrionário e criopreservação de oócitos e blastocistos;",
  "Favorecer, a partir de atividades presenciais, o contato com especialistas em RHA e construir uma valiosa rede de contatos para futuras parcerias e intercâmbio de conhecimento e prática;",
  "Capacitar os profissionais à tomada de decisões baseadas em conceitos sólidos e adequados a cada situação individualizada do paciente."
];
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
