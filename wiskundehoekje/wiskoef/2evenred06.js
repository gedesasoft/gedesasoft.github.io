var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var X = ""
var Xteller = 0
var Xnoemer = 0
 
function resetvariabelen()
{
A = 0
B = 0
C = 0
D = 0
E = 0
F = 0
}

function kiesgetallen()
{
while (A == 0)
	{
	A = (Math.floor(Math.random() * 30 ) - 15);
	}
while (B == 0)
	{
	B = (Math.floor(Math.random() * 15 ) + 1);
	}
while (C == 0)
	{
	C = (Math.floor(Math.random() * 30 ) - 15);
	}
while (D == 0)
	{
	D = (Math.floor(Math.random() * 15 ) + 1);
	}
while (E == 0)
	{
	E = (Math.floor(Math.random() * 30 ) - 15);
	}
while (F == 0)
	{
	F = (Math.floor(Math.random() * 15 ) + 1);
	}

Xteller = C * E * B
Xnoemer = D * F * A

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 4) + 1
}

function toonoef()
{
document.er.tellereerstebreuk.value = "";
document.er.noemereerstebreuk.value = "";
document.er.tellertweedebreuk.value = "";
document.er.noemertweedebreuk.value = "";
document.er.antw.value = "";

if (typeoefening == "1")
	{
	document.er.tellereerstebreuk.value = A + "/" + B;
	document.er.noemereerstebreuk.value = C + "/" + D;
	document.er.tellertweedebreuk.value = E + "/" + F;
	document.er.noemertweedebreuk.value = "x";
	}

if (typeoefening == "2")
	{
	document.er.tellereerstebreuk.value = C + "/" + D;
	document.er.noemereerstebreuk.value = A + "/" + B;
	document.er.tellertweedebreuk.value = "x";
	document.er.noemertweedebreuk.value = E + "/" + F;
	}

if (typeoefening == "3")
	{
	document.er.tellereerstebreuk.value = C + "/" + D;
	document.er.noemereerstebreuk.value = "x";
	document.er.tellertweedebreuk.value = A + "/" + B;
	document.er.noemertweedebreuk.value = E + "/" + F;
	}

if (typeoefening == "4")
	{
	document.er.tellereerstebreuk.value = "x";
	document.er.noemereerstebreuk.value = C + "/" + D;
	document.er.tellertweedebreuk.value = E + "/" + F;
	document.er.noemertweedebreuk.value = A + "/" + B;
	}

}

function nieuwoef()
{
aljuist = 0
resetvariabelen()
kiesgetallen()
kiesoef()
toonoef()
document.er.opl.src = "../images/vraagteken.gif"
}

function controle()
{
var antwoord = document.er.antw.value
var Xng1 = Math.abs(Xteller);
var Xng2 = Math.abs(Xnoemer);
var XngA = Xng1
var XngB = Xng2
var Xrest = 1
	
while (Xrest != 0)
	{
	Xrest = Xng1 % Xng2;
	Xng1 = Xng2;
	Xng2 = Xrest;
	}

Xteller = Xteller / Xng1
Xnoemer = Xnoemer / Xng1

if (Xnoemer < 0)
	{
	Xteller = - Xteller
	Xnoemer = - Xnoemer
	}
if (Xnoemer == 1) X = Xteller + ""
else
X = Xteller + "/" + Xnoemer

pogingenteller++;

if (antwoord == X) 
	{
	document.er.opl.src = "../images/goed.gif"
	oplossingenteller++;
	aljuist = 1
	}
else document.er.opl.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.er.aantaljuist.value = oplossingenteller
	document.er.aantalpogingen.value = pogingenteller
	document.er.percentage.value = procent		
}

function controleer()
{
if (aljuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else controle()
}

