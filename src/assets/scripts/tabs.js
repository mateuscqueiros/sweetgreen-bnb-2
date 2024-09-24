// Quando clicar em um item do header do carrossel:

/*
  1 - mudar a classe active do header.
  2 - mudar a classe active do content
    2.1 - selecionar elementos iterativamente
    2.2 - adicionar class active no conteúdo correspondente
    2.3 - remover o active dos outros conteúdos
*/

const tabHeadersIDs = ['salads-button', 'bowls-button', 'sides-button'];
const tabHeadersEls = tabHeadersIDs.map((headerID) =>
  document.getElementById(headerID)
);

const tabContentsIDs = ['salads-content', 'bowls-content', 'sides-content'];
const tabContentsEls = tabContentsIDs.map((contentID) =>
  document.getElementById(contentID)
);

tabHeadersEls.map((tabHeader, tabHeaderIndex) => {
  tabHeader.addEventListener('click', () => {
    // Adicionar a classe active no header que foi clicado.
    tabHeader.classList.add('active');
    // Remover class active nos outros headers.
    tabHeadersEls.map((innerTabHeader, innerTabHeaderIndex) => {
      if (tabHeaderIndex !== innerTabHeaderIndex) {
        innerTabHeader.classList.remove('active');
      }
    });
    // Adicionar class no content ativo
    tabContentsEls[tabHeaderIndex].classList.add('active');
    // Remover class dos outros conteúdos
    tabContentsEls.map((tabContent, tabContentIndex) => {
      if (tabContentIndex !== tabHeaderIndex) {
        tabContent.classList.remove('active');
      }
    });
  });
});
