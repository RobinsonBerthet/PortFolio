const toggleButton = document.getElementsByClassName('toggle-button')[0]// bouton trois traits
const navbarLinks = document.getElementsByClassName('navbar-links')[0]//menu
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

var btnPopup = document.getElementById('btnPopup');//recup id popup
var overlay = document.getElementById('overlay');//recup id popup
var btnClose = document.getElementById('btnClose');//recup id popup
var popup = document.getElementById('popup');

btnPopup.addEventListener('click', ouvrePopup);

function ouvrePopup()
{
  overlay.style.display = "block";
  body.style.overflow = 'hidden';
}

btnClose.addEventListener('click', fermePopup)

function keyPress (e) {
    if(e.key == 27) {
      overlay.style.display = 'none';
    }
}

function fermePopup()
{
  overlay.style.display = 'none';
  body.style.overflow = 'scroll';
}


document.onkeydown = function(evt) {
    evt = evt || window.event;
    var isEscape = false;
    if ("key" in evt) {
        isEscape = (evt.key === "Escape" || evt.key === "Esc");
    } else {
        isEscape = (evt.keyCode === 27);
    }
    if (isEscape) {
        fermePopup();   
    }
};

