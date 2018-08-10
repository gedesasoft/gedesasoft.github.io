var pogingenteller = 0
var oplossingenteller = 0


function veranderafbeelding()
{
var nummer = document.grafiek.selecteer.options[document.grafiek.selecteer.selectedIndex].value;
var nieuwefunctie = 'images/4ele' + nummer + '.gif';
document.functie.src= nieuwefunctie;
}

function controleer() 
{


var oplossing = 'ele' + document.grafiek.selecteer.options[document.grafiek.selecteer.selectedIndex].value;

var antwoord = document.grafiek.formulenaam.options[document.grafiek.formulenaam.selectedIndex].value;

if (antwoord == "opnieuw") grafiek.controle.value = ""
else
	{
	pogingenteller++;
	
	if (oplossing == antwoord) 
		{
		grafiek.controle.src = "../images/goed.gif"
		oplossingenteller++;
		}
	else grafiek.controle.src = "../images/fout.gif";
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.grafiek.aantaljuist.value = oplossingenteller
	document.grafiek.aantalpogingen.value = pogingenteller
	document.grafiek.percentage.value = procent		
	}
}
