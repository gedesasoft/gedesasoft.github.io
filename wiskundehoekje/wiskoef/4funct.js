var voorschrift1 = ""
var voorschrift2 = ""
var voorschrift3 = ""
var voorschrift4 = ""
var voorschrift5 = ""
var voorschrift6 = ""
var oplossing = ""
var nummeroplossing = 0
var algemaakt = 0
var typeoefa = 0
var typeoefalfa = 0
var typeoefbeta = 0
var mintypeoefa = 0
var mintypeoefalfa = 0
var mintypeoefbeta = 0
var andertypeoefa = 0
var minandertypeoefa = 0
var a = 0
var alfa = 0
var beta = 0
var pogingenteller = 0
var oplossingenteller = 0

function nieuwoef()
{
algemaakt = 0
voorschrift = ""
document.opl1.src = "../images/vraagteken.gif"
document.functies.keuze1.value = "?"
document.functies.txtvoorschrift.value= ""

typeoefalfa = 4
typeoefbeta = 4

while ((typeoefbeta == 4) && (typeoefalfa == 4))
	{ 
	typeoefbeta = Math.floor(Math.random() * 5) + 2;
	typeoefalfa = Math.floor(Math.random() * 7) + 1;
	}

if (typeoefbeta > 5) typeoefa = Math.floor(Math.random() * 3) + 5;
if (typeoefbeta < 3) typeoefa = Math.floor(Math.random() * 3) + 1;

if ((typeoefbeta > 2) && (typeoefbeta < 6))
	{
	typeoefa = 4
	while (typeoefa == 4) typeoefa = Math.floor(Math.random() * 7) + 1;
	} 

a = typeoefa - 4
alfa = typeoefalfa - 4
beta = 4 - typeoefbeta

voorschrift1 = 'f(x) = '
voorschrift2 = 'f(x) = '
voorschrift3 = 'f(x) = '
voorschrift4 = 'f(x) = '
voorschrift5 = 'f(x) = '
voorschrift6 = 'f(x) = '

if ((a > 1) || (a < -1)) voorschrift1 = voorschrift1 + a
if (a == -1) voorschrift1 = voorschrift2 + '-'

if (alfa > 0) voorschrift1 = voorschrift1 + '(x - ' + alfa + ')² '
if (alfa < 0) voorschrift1 = voorschrift1 + '(x + ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift1 = voorschrift1 + 'x² '

if (beta > 0) voorschrift1 = voorschrift1 + '+ ' + beta
if (beta < 0) voorschrift1 = voorschrift1 + '- ' + Math.abs(beta)

 
if ((a > 1) || (a < -1)) voorschrift2 = voorschrift2 + (0 - a)
if (a == 1) voorschrift2 = voorschrift2 + '-'

if (alfa > 0) voorschrift2 = voorschrift2 + '(x - ' + alfa + ')² '
if (alfa < 0) voorschrift2 = voorschrift2 + '(x + ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift2 = voorschrift2 + 'x² '

if (beta > 0) voorschrift2 = voorschrift2 + '+ ' + beta
if (beta < 0) voorschrift2 = voorschrift2 + '- ' + Math.abs(beta)
 

if ((a > 1) || (a < -1)) voorschrift3 = voorschrift3 + a
if (a == -1) voorschrift3 = voorschrift3 + '-'

if (alfa > 0) voorschrift3 = voorschrift3 + '(x + ' + alfa + ')² '
if (alfa < 0) voorschrift3 = voorschrift3 + '(x - ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift3 = voorschrift3 + 'x² '

if (beta > 0) voorschrift3 = voorschrift3 + '+ ' + beta
if (beta < 0) voorschrift3 = voorschrift3 + '- ' + Math.abs(beta)


if ((a > 1) || (a < -1)) voorschrift4 = voorschrift4 + a
if (a == -1) voorschrift4 = voorschrift4 + '-'

if (alfa > 0) voorschrift4 = voorschrift4 + '(x - ' + alfa + ')² '
if (alfa < 0) voorschrift4 = voorschrift4 + '(x + ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift4 = voorschrift4 + 'x² '

if (beta > 0) voorschrift4 = voorschrift4 + '- ' + beta
if (beta < 0) voorschrift4 = voorschrift4 + '+ ' + Math.abs(beta)


if ((a > 1) || (a < -1)) voorschrift5 = voorschrift5 + (0 - a)
if (a == 1) voorschrift5 = voorschrift5 + '-'

if (alfa > 0) voorschrift5 = voorschrift5 + '(x + ' + alfa + ')² '
if (alfa < 0) voorschrift5 = voorschrift5 + '(x - ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift5 = voorschrift5 + 'x² '

if (beta > 0) voorschrift5 = voorschrift5 + '+ ' + beta
if (beta < 0) voorschrift5 = voorschrift5 + '- ' + Math.abs(beta)


if ((a > 1) || (a < -1)) voorschrift6 = voorschrift6 + a
if (a == -1) voorschrift6 = voorschrift6 + '-'

if (alfa > 0) voorschrift6 = voorschrift6 + '(x + ' + alfa + ')² '
if (alfa < 0) voorschrift6 = voorschrift6 + '(x - ' + Math.abs(alfa) + ')² '
if (alfa == 0) voorschrift6 = voorschrift6 + 'x² '

if (beta > 0) voorschrift6 = voorschrift6 + '- ' + beta
if (beta < 0) voorschrift6 = voorschrift6 + '+ ' + Math.abs(beta)

nummeroplossing = Math.floor(Math.random() * 6) + 1;

while ((((nummeroplossing == 3) || (nummeroplossing == 5) || (nummeroplossing == 6)) && (typeoefalfa == 4)) || (((nummeroplossing == 4) || (nummeroplossing == 6)) && (typeoefbeta == 4)))
{
nummeroplossing = Math.floor(Math.random() * 6) + 1;
}  


if (nummeroplossing == 1)
	{
	oplossing = "A"
	document.functies.txtvoorschrift.value= voorschrift1
	}

if (nummeroplossing == 2)
	{
	oplossing = "B"
	document.functies.txtvoorschrift.value= voorschrift2
	}

if (nummeroplossing == 3)
	{
	oplossing = "C"
	document.functies.txtvoorschrift.value= voorschrift3
	}

if (nummeroplossing == 4)
	{
	oplossing = "D"
	document.functies.txtvoorschrift.value= voorschrift4
	}

if (nummeroplossing == 5)
	{
	oplossing = "E"
	document.functies.txtvoorschrift.value= voorschrift5
	}

if (nummeroplossing == 6)
	{
	oplossing = "F"
	document.functies.txtvoorschrift.value= voorschrift6
	}

mintypeoefa = 8 - typeoefa
mintypeoefalfa = 8 - typeoefalfa
mintypeoefbeta = 8 - typeoefbeta

if (typeoefa == 1) andertypeoefa = 2
if (typeoefa == 2) andertypeoefa = 3
if (typeoefa == 3) andertypeoefa = 1

if (typeoefa == 5) andertypeoefa = 6
if (typeoefa == 6) andertypeoefa = 7
if (typeoefa == 7) andertypeoefa = 5

minandertypeoefa = 8 - andertypeoefa

document.fig1.src = "images/4funct" + typeoefa + ".gif"
document.fig2.src = "images/4funct" + mintypeoefa + ".gif"
if (typeoefalfa == 4) document.fig3.src = "images/4funct" + andertypeoefa + ".gif"
else document.fig3.src = "images/4funct" + typeoefa + ".gif"

if (typeoefbeta == 4) document.fig4.src = "images/4funct" + andertypeoefa + ".gif"
else document.fig4.src = "images/4funct" + typeoefa + ".gif"

if (typeoefalfa == 4) document.fig5.src = "images/4funct" + minandertypeoefa + ".gif"
else document.fig5.src = "images/4funct" + mintypeoefa + ".gif"

if (typeoefbeta == 4) document.fig6.src = "images/4funct" + andertypeoefa + ".gif"
else 
	{
	if (typeoefalfa == 4) document.fig6.src = "images/4funct" + andertypeoefa + ".gif"
	else 
	document.fig6.src = "images/4funct" + typeoefa + ".gif"
	}

if (a < 0) document.fig1boven.height = 28 * typeoefbeta + 55
if (a > 0) document.fig1boven.height = 28 * typeoefbeta - 55
document.fig1links.width = 28 * (typeoefalfa - 1)

if (a > 0) document.fig2boven.height = 28 * typeoefbeta + 55
if (a < 0) document.fig2boven.height = 28 * typeoefbeta - 55
document.fig2links.width = 28 * (typeoefalfa - 1)

if (a < 0) document.fig3boven.height = 28 * typeoefbeta + 55
if (a > 0) document.fig3boven.height = 28 * typeoefbeta - 55
document.fig3links.width = 28 * (mintypeoefalfa - 1)

if (a < 0) document.fig4boven.height = 28 * mintypeoefbeta + 55
if (a > 0) document.fig4boven.height = 28 * mintypeoefbeta - 55
document.fig4links.width = 28 * (typeoefalfa - 1)

if (a > 0) document.fig5boven.height = 28 * typeoefbeta + 55
if (a < 0) document.fig5boven.height = 28 * typeoefbeta - 55
document.fig5links.width = 28 * (mintypeoefalfa - 1)

if (a < 0) document.fig6boven.height = 28 * mintypeoefbeta + 55
if (a > 0) document.fig6boven.height = 28 * mintypeoefbeta - 55
document.fig6links.width = 28 * (mintypeoefalfa - 1)
}

function controle() 
{
if (algemaakt == 1) 
	{
	document.functies.keuze1.options.value = gekozenoplossing
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	gekozenoplossing = document.functies.keuze1.options[document.functies.keuze1.selectedIndex].value;

	if (gekozenoplossing == "?") document.opl1.src = "../images/vraagteken.gif"
	else
		{
		pogingenteller++
		algemaakt = 1
		if (gekozenoplossing == oplossing)
			{
			oplossingenteller++
			document.opl1.src = "../images/goed.gif"		
			}
		else
			{
			document.opl1.src = "../images/fout.gif"
			alert('De rechte met vergelijking ' + voorschrift + ' is getekend in grafiek ' + oplossing + '!')  
			}		
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
}
}
