//Mettre le menu en javascript.
function Link(lien) {
  this.lien = lien;
}

var accueil = new Link ('<a class="onglet_menu" title="Accueil" href="index.html"> Accueil</a>');
var menu = new Link (' <ul> <li class="deroulant"> <a class="menu" href="index.html"> Menu </a> <ul class="sous">');
var animaux = new Link ('<a class="onglet_menu" title="Animaux" href="animaux.html"> Animaux</a>');
var banquedesons = new Link ('<a class="onglet_menu" title="Banque de sons" href="banque_de_sons.html"> Banque de sons</a>');
var visitevirtuelle = new Link ('<a class="onglet_menu" title="Visite virtuelle" href="visite_virtuelle.html"> Visite virtuelle</a>');
var forum = new Link ('<a class="onglet_menu" title="Forum" href="index.html"> Forum</a>');
var contact = new Link ('<a class="onglet_menu" title="Contact" href="contact.html"> Contact</a>');

var tablamenu = [accueil, menu, animaux, banquedesons, visitevirtuelle, forum, contact];

for (var i=0; i<tablamenu.length ; i++ ){
  var ligne =$('<div class=menu_element>');
  var id = "ligne" + i;
  ligne.attr({id:id})
  $('#flexcontainer3').append(ligne);
  $('#'+id).append(tablamenu[i].lien);
}

function Souslink(souslien) {
  this.souslien = souslien;
}

var sousaccueil = new Souslink ('<a href="index.html"> Accueil</a>');
var sousmenu = new Souslink ('<a href="index.html"> Menu </a>');
var sousanimaux = new Souslink ('<a href="animaux.html"> Animaux</a>');
var sousbanquedesons = new Souslink ('<a  href="banque_de_sons.html"> Banque de sons</a>');
var sousvisitevirtuelle = new Souslink ('<a  href="visite_virtuelle.html"> Visite virtuelle</a>');
var sousforum = new Souslink ('<a href="index.html"> Forum</a>');
var souscontact = new Souslink ('<a href="contact.html"> Contact</a>');


var tablasousmenu = [sousaccueil, sousmenu, sousanimaux, sousbanquedesons, sousvisitevirtuelle, sousforum, souscontact];


for (var i=0; i<tablasousmenu.length ; i++ ){
var banane2 =$('<li>');
var id = "banane2" + i;
banane2.attr({id:id});
$('.sous').append(banane2);
$('#'+id).append( tablasousmenu[i].souslien);
}
// Sous menu en objet.
