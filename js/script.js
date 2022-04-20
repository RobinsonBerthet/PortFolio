let toggleButton = document.getElementsByClassName('toggle-button')[0]// bouton trois traits
let navbarLinks = document.getElementsByClassName('navbar-links')[0]//menu
const liens = document.querySelector('.navbar-links > ul > li > a');// rubriques(liens) du menu


toggleButton.addEventListener('click', () => {// quand on clique sur les trois traits pour faire apparaitre le menu 
  navbarLinks.classList.toggle('active');// la class navbarLinks change de nom pour faire apparaitre le menu grace au css
  toggleButton.classList.toggle('active');
})


document.querySelectorAll('.navbar-links > ul > li > a').forEach((liens) => { // pour chaque lien du menu
    liens.addEventListener('click', () => { // quand on clique sur un lien du menu 
      navbarLinks.classList.toggle('opened');// Le menu se ferme
      navbarLinks.className = ('navbar-links');
      toggleButton.className= ('toggle-button');
    })
});
