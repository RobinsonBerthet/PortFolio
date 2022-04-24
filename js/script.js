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

var btnPopupPendu = document.getElementById('btnPopupPendu');//recup id popup
var overlayPendu = document.getElementById('overlayPendu');//recup id popup
var btnClosePendu = document.getElementById('btnClosePendu');//recup id popup
var popupPendu = document.getElementById('popupPendu');

var btnPopupAvtr = document.getElementById('btnPopupAvtr');//recup id popup
var overlayAvtr = document.getElementById('overlayAvtr');//recup id popup
var btnCloseAvtr = document.getElementById('btnCloseAvtr');//recup id popup
var popupAvtr = document.getElementById('popupAvtr');

btnPopup.addEventListener('click', ouvrePopup);
btnPopupPendu.addEventListener('click', ouvrePopupPendu);
btnPopupAvtr.addEventListener('click', ouvrePopupAvtr);


function ouvrePopup()
{
  overlay.style.display = "block";
  body.style.overflow = 'hidden';
}
function ouvrePopupPendu()
{
  overlayPendu.style.display = "block";
  body.style.overflow = 'hidden';
}

function ouvrePopupAvtr()
{
  overlayAvtr.style.display = "block";
  body.style.overflow = 'hidden';
}

btnClose.addEventListener('click', fermePopup);
btnClosePendu.addEventListener('click', fermePopupPendu);
btnCloseAvtr.addEventListener('click', fermePopupAvtr);

function keyPress (e) {
    if(e.key == 27) {
      overlay.style.display = 'none';
      overlayPendu.style.display = 'none';
    }
}

function fermePopup()
{
  overlay.style.display = 'none';
  body.style.overflow = 'visible';
}

function fermePopupPendu()
{
  overlayPendu.style.display = 'none';
  body.style.overflow = 'visible';
}

function fermePopupAvtr()
{
  overlayAvtr.style.display = 'none';
  body.style.overflow = 'visible';
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
        fermePopupPendu(); 
        fermePopupAvtr();  
    }
};

document.body.onload=function()
{
    nbr=3;
    p=0;
    container = document.getElementById('container');
    g = document.getElementById('g');
    d = document.getElementById('d');
    container.style.width = (450*nbr) + "px";
    for(i=1; i<=nbr; i++)
    {
        div = document.createElement("div");
        div.className="photo";
        div.style.backgroundImage = "url('img/img-form-"+ i +".png')";
        container.appendChild(div);
    }
}
g.onclick = function(){
    if(p<0)
        p++;
    container.style.transform = "translate("+p*450+"px)";
    container.style.transition = "all 0.5s ease";
    affichageBtn();
}
d.onclick = function(){
    if(p>-nbr+1)
        p--;
    container.style.transform = "translate("+p*450+"px)";
    container.style.transition = "all 0.5s ease";
    affichageBtn();
}
function affichageBtn() {
    if(p==-nbr+1)
    {
        d.style.visibility="hidden";
    }
    else
    {
        d.style.visibility="visible";
    }
        if(p==0)
    {
        g.style.visibility="hidden";
    }
    else
    {
        g.style.visibility="visible";
    }
}




