// 1 - Localizar os elementos que abrem e fecham o menu (querySelector, getElementById)
// 2 - Adicionar os eventos de click (addEventListener)
// 3 - Adicionar/remover a classe em cada evento (element.classList.add)

const navElement = document.querySelector('.menu .container nav');
const openMenuButton = document.getElementById('open-menu');
const closeMenuButton = document.getElementById('close-menu');

openMenuButton.addEventListener('click', () => {
  navElement.classList.add('open');
});

closeMenuButton.addEventListener('click', () => {
  navElement.classList.remove('open');
});
