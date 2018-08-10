var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var A = 0
var B = 0
var C = 0
var X = ""
var Xteller = 0
var Xnoemer = 0
 
function resetvariabelen()
{
A = 0
B = 0
C = 0
}

function kiesgetallen()
{
while (A == 0)
	{
	A = (Math.floor(Math.random() * 30 ) - 15);
	}
while (B == 0)
	{
	B = (Math.floor(Math.random() * 30 ) - 15);
	}
while ((B == C) || (C == 0))
	{
	C = (Math.floor(Math.random() * 30 ) - 15);
	}

Xteller = B * A
Xnoemer = C - B

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
	document.er.tellereerstebreuk.value = "x";
	document.er.tellertweedebreuk.value = B;
	document.er.noemertweedebreuk.value = C;
	if (A < 0) 	document.er.noemereerstebreuk.value = "x - " + Math.abs(A)
	if (A > 0)	document.er.noemereerstebreuk.value = "x + " + A
	}

if (typeoefening == "2")
	{
	document.er.tellereerstebreuk.value = "x";
	document.er.noemereerstebreuk.value = B;
	document.er.noemertweedebreuk.value = C;
	if (A < 0) 	document.er.tellertweedebreuk.value = "x - " + Math.abs(A)
	if (A > 0)	document.er.tellertweedebreuk.value = "x + " + A
	}

if (typeoefening == "3")
	{
	document.er.tellereerstebreuk.value = C;
	document.er.noemereerstebreuk.value = B;
	document.er.noemertweedebreuk.value = "x";
	if (A < 0) 	document.er.tellertweedebreuk.value = "x - " + Math.abs(A)
	if (A > 0)	document.er.tellertweedebreuk.value = "x + " + A
	}

if (typeoefening == "4")
	{
	document.er.tellereerstebreuk.value = C;
	document.er.noemertweedebreuk.value = "x";	
	document.er.tellertweedebreuk.value = B;
	if (A < 0) 	document.er.noemereerstebreuk.value = "x - " + Math.abs(A)
	if (A > 0)	document.er.noemereerstebreuk.value = "x + " + A
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

