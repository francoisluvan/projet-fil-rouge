


//EXERCICE JSON du tableau animaux
imgtigre = "<img class='imganimal'  src='tigre.jpg' alt='photo tigre'/>";
imgelephant = "<img class='imganimal'  src='elephant.jpg' alt='photo elephant'/>";
imgleopard = "<img class='imganimal'  src='leopard.jpg' alt='photo leopard'/>";
imglion = "<img class='imganimal'  src='lion.jpg' alt='photo leopard'/>";
input = "<input type='submit' value='voir'>";

var ligne = '{ "animal" : [' + '{"nom":"tigre" , "img":"'+imgtigre+'", "description" : "Description tigre" , "pays":"Bengale" , "input":"'+input+'"},' + '{"nom":"elephant" , "img":"'+imgelephant+'", "description" : "Description elephant" , "pays":"Bengale" , "input":"'+input+'"},' + '{"nom":"leopard" , "img":"'+imgleopard+'", "description" : "Description leopard" , "pays":"Bengale" , "input":"'+input+'"}, ' + '{"nom":"lion" , "img":"'+imglion+'", "description" : "Description lion" , "pays":"Bengale" , "input":"'+input+'"} ]}';



var tablanimo = JSON.parse(ligne);

  for (var i=0; i<tablanimo.animal.length ; i++ ){
    var banane =$('<tr>');
    var id = "ligne" + i;
    banane.attr({id:id});
    $('table').append(banane);
    $('#'+id).append("<td>"+ tablanimo.animal[i].nom+"</td>");
    $('#'+id).append("<td>"+ tablanimo.animal[i].img+"</td>");
    $('#'+id).append("<td>"+ tablanimo.animal[i].description+"</td>");
    $('#'+id).append("<td>"+ tablanimo.animal[i].pays+"</td>");
    $('#'+id).append("<td>"+ tablanimo.animal[i].input+"</td>");
  }



//EXERCICE OBJET JQUERY
/*

function Ligne(nom, img, description, pays, input) {
  this.nom = nom;
  this.img = img;
  this.desc=description;
  this.pays= pays;
  this.input= input;
}
//alert(tigre.nom)
var tigre = new Ligne('tigre',
'<img class="imganimal"  src="tigre.jpg" alt="photo tigre"/>',
'Description tigre',
'Bengale',
'<input type="submit" value="voir">');

var elephant = new Ligne ('elephant',
'<img class="imganimal"  src="elephant.jpg" alt="photo elephant"/>',
'Description elephant',
'Bengale',
'<input type="submit" value="voir">');

var leopard = new Ligne ('Leopard',
'<img class="imganimal" src="leopard.jpg" alt="photo leopard"/>',
'Description leopard',
'Bengale',
'<input type="submit" value="voir">' );

var lion = new Ligne ('lion',
'<img class="imganimal" src="lion.jpg" alt="photo lion"/>',
'Description lion',
'Bengale',
'<input type="submit" value="voir">');

var tablanimo = [tigre, elephant, leopard, lion];


  for (var i=0; i<tablanimo.length ; i++ ){
    var ligne =$('<tr>');
    var id = "ligne" + i;
    ligne.attr({id:id})
    $('table').append(ligne);
    $('#'+id).append("<td>"+ tablanimo[i].nom+"</td>");
    $('#'+id).append("<td>"+ tablanimo[i].img+"</td>");
    $('#'+id).append("<td>"+ tablanimo[i].desc+"</td>");
    $('#'+id).append("<td>"+ tablanimo[i].pays+"</td>");
    $('#'+id).append("<td>"+ tablanimo[i].input+"</td>");
  }


*/


//EXERCICE JS

/*var tigre = ['tigre',
'<img class="imganimal"  src="tigre.jpg" alt="photo tigre"/>',
'Description tigre',
'Bengale',
'<input type="submit" value="voir">' ];

var elephant = ['elephant',
'<img class="imganimal"  src="elephant.jpg" alt="photo elephant"/>',
'Description elephant',
'Bengale',
'<input type="submit" value="voir">' ];

var leopard= ['Leopard',
'<img class="imganimal" src="leopard.jpg" alt="photo leopard"/>',
'Description leopard',
'Bengale',
'<input type="submit" value="voir">' ];

var lion = ['lion',
'<img class="imganimal" src="lion.jpg" alt="photo lion"/>',
'Description lion',
'Bengale',
'<input type="submit" value="voir">' ];

var tablanimo = [tigre, elephant, leopard, lion];


  function ajoutetablo (tablanimo){

    for (var i=0; i<tablanimo.length; i++){
//je mets mon tr dans une variable
var ligne =$('<tr>')
// j'ai besoin d'un id à ajouter à chaque ligne (tr) sinon il galère et moi plus
var id = "ligne" + i;
// on ajoute l'attribut id aux tr
ligne.attr({id:id})
//on ajoute cette ligne dans la table
$('table').append(ligne);

 var animaux = tablanimo[i];

        for (var j=0; j<animaux.length; j++) {
          //on récupère la valeur id et on met un # pour pouvoir le lire
          $('#'+id).append("<td>"+ animaux[j]+"</td>");
        }
    }
    }



ajoutetablo (tablanimo);

console.log("trop beau ton tableau");
*/
