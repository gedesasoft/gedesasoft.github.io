var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var aljuist = 0
var A = 0
var B = 0
var X = ""
var Xteller = 0
var Xnoemer = 0
 
function resetvariabelen()
{
A = 0
B = 0
}

function kiesgetallen()
{
while (A == 0)
	{
	A = (Math.floor(Math.random() * 10 ) - 5);
	}
while (B == 0)
	{
	B = (Math.floor(Math.random() * 5 ) + 2);
	}

X = Math.abs(A * B)

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
document.er.tellereerstebreuk.value = "";
document.er.noemereerstebreuk.value = "";
document.er.tellertweedebreuk.value = "";
document.er.noemertweedebreuk.value = "";
document.er.antw1.value = "";
document.er.antw2.value = "";
if (typeoefening == "1")
	{
	document.er.tellereerstebreuk.value = A;
	document.er.noemereerstebreuk.value = "x";
	document.er.tellertweedebreuk.value = "x";
	document.er.noemertweedebreuk.value = A * B * B;
	}

if (typeoefening == "2")
	{
	document.er.tellereerstebreuk.value = "x";
	document.er.noemereerstebreuk.value = A;
	document.er.tellertweedebreuk.value = A * B * B;
	document.er.noemertweedebreuk.value = "x";
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
var antwoord1 = document.er.antw1.value
var antwoord2 = document.er.antw2.value
pogingenteller++;

if (((antwoord1 == X) && (antwoord2 == -X)) || ((antwoord1 == -X) && (antwoord2 == X)))  
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

