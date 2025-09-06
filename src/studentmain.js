// js/main.js

const container = document.getElementById("cards-container");

trabalhos.forEach((t, index) => {
  const cardId = `trabalho-${index + 1}`;
  const resumoId = `resumo-modal-${index + 1}`;
  const bibtexId = `bibtex-modal-${index + 1}`;

  // montar HTML do card
  const html = `
    <div class="trabalho-card" id="${cardId}" style="width: 90%; max-width: 90%; margin: 0 auto;">
      <div class="trabalho-grid">
        <div class="trabalho-meta">
          <div class="campo"><div class="titulo">${t.titulo}</div></div>
          <div class="campo"><label>Tipo</label><div class="valor">${t.tipo}</div></div>
          <div class="campo"><label>Autor</label><div class="valor">${t.autor}</div></div>
          <div class="campo"><label>Orientador</label><div class="valor">${t.orientador}</div></div>
          <div class="campo"><label>Ano</label><div class="valor">${t.ano}</div></div>
          <div class="acoes">
            <a class="btn" href="#${resumoId}">Resumo</a>
            <a class="btn-texto" href="${t.link}" target="_blank" rel="noopener">Texto</a>
            <a class="btn-site" href="${t.site}" target="_blank" rel="noopener">Site</a>
            <a class="btn-bibtex" href="#${bibtexId}">BibTeX</a>
          </div>
        </div>
        <div>
          <img class="figura-card" src="${t.imagem}" alt="Figura ilustrativa do trabalho">
        </div>
      </div>

      <!-- Modal Resumo -->
      <div id="${resumoId}" class="modal" role="dialog" aria-modal="true">
        <div class="modal-card">
          <div class="modal-top">
            <h3>Resumo</h3>
            <a class="fechar" href="#${cardId}">Fechar</a>
          </div>
          <div class="modal-conteudo">
            <p>${t.resumo}</p>
          </div>
        </div>
      </div>

      <!-- Modal BibTeX -->
      <div id="${bibtexId}" class="modal" role="dialog" aria-modal="true">
        <div class="modal-card">
          <div class="modal-top">
            <h3>BibTeX</h3>
            <a class="fechar" href="#${cardId}">Fechar</a>
          </div>
          <div class="modal-conteudo">
            <pre>${t.bibtex}</pre>
          </div>
        </div>
      </div>
    </div>
  `;

  container.insertAdjacentHTML("beforeend", html);
});
