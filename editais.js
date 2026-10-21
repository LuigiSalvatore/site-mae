// Add approved public PDFs here; paths are relative to editais.html.
const editais = [
  // { title: "Edital de seleção", file: "assets/editais/edital-selecao.pdf" },
];

const editaisList = document.getElementById("editais-list");
if (editaisList && editais.length) {
  editaisList.replaceChildren();
  editais.forEach(({ title, file }) => {
    const article = document.createElement("article");
    article.className = "edital";
    const heading = document.createElement("h2");
    heading.textContent = title;
    const actions = document.createElement("div");
    actions.className = "edital-actions";
    const open = document.createElement("a");
    open.className = "btn btn-sm";
    open.href = file;
    open.target = "_blank";
    open.rel = "noopener";
    open.textContent = "Abrir PDF em nova aba";
    const download = document.createElement("a");
    download.className = "btn btn-sm btn-ghost";
    download.href = file;
    download.download = "";
    download.textContent = "Baixar PDF";
    actions.append(open, download);
    const help = document.createElement("p");
    help.textContent = "Se o PDF não aparecer abaixo, use os botões para abrir ou baixar o documento.";
    const viewer = document.createElement("object");
    viewer.type = "application/pdf";
    viewer.data = file;
    viewer.setAttribute("aria-label", title);
    const fallback = document.createElement("a");
    fallback.href = file;
    fallback.textContent = "Abrir " + title + " (PDF)";
    viewer.append(fallback);
    article.append(heading, actions, help, viewer);
    editaisList.append(article);
  });
}
