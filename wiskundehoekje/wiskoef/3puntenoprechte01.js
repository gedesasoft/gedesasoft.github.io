var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var algemaakt = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var Y3vals = 0
var M = 0
var Q = 0
var oplossing = ""
var anwt = ""

function kiesgetallen()
{
	X1 = Math.floor(Math.random() * 20) - 10;
	X2 = X1
	X3 = X1
	while (X1 == X2) X2 = Math.floor(Math.random() * 20) - 10;
	while ((X1 == X3) || (X2 == X3)) X3 = Math.floor(Math.random() * 20) - 10;
	M = Math.floor(Math.random() * 16) - 8;
	Q = Math.floor(Math.random() * 16) - 8;

	Y1 = M * X1 + Q
	Y2 = M * X2 + Q
	Y3 = M * X3 + Q

if (typeoefening == 1)
	{
	if (Y3 != 0) Y3vals = 0 - Y3
	if (Y3 == 0) Y3vals = 1
	}
if (typeoefening == 2)
	{
	Y3vals = Y3 + 1
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = X3

if (typevariatie == 1)
	{
	document.coeff.txtY3.value = Y3
	oplossing = "ja"
	}

if (typevariatie == 2)
	{
	document.coeff.txtY3.value = Y3vals
	oplossing = "nee"
	}

}


function nieuwoef()
{
document.coeff.opl.src = "../images/vraagteken.gif";
document.coeff.keuze.value = "?";
algemaakt = 0
kiesoef()
kiesvariatie()
kiesgetallen()
toonoef()
}

function controle() 
{
if (algemaakt == 1) 
	{
	document.coeff.keuze.options.value = antw
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
antw = document.coeff.keuze.options[document.coeff.keuze.selectedIndex].value;

if (antw == "?") document.opl.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	algemaakt = 1
	if (antw == oplossing)
		{
		oplossingenteller++
		document.opl.src = "../images/goed.gif"		
		}
	else
		{
		document.opl.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}


