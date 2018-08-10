var pogingenteller = 0
var oplossingenteller = 0

function controleer() 
{

var oplossing = 'opl' + document.grafiek.selecteer.options[document.grafiek.selecteer.selectedIndex].value;

var antwoord = document.grafiek.formulenaam.options[document.grafiek.formulenaam.selectedIndex].value;

if (antwoord == "opnieuw") grafiek.controle.src = "../images/vraagteken.gif"
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
