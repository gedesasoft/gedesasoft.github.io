function veranderafbeelding()
{
var nummer = document.grafiek.selecteer.options[document.grafiek.selecteer.selectedIndex].value;
var nieuwefunctie = 'images/3gra' + nummer + '.gif';
document.functie.src= nieuwefunctie;
}

function controleer() 
{


var oplossing = 'gra' + document.grafiek.selecteer.options[document.grafiek.selecteer.selectedIndex].value;

var antwoord = document.grafiek.formulenaam.options[document.grafiek.formulenaam.selectedIndex].value;

if (antwoord == "opnieuw") grafiek.controle.src = "../images/vraagteken.gif"
else

if (oplossing == antwoord) grafiek.controle.src = "../images/goed.gif"
else grafiek.controle.src = "../images/fout.gif";
}
