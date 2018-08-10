var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var vglAB = ""
var X = 0
var Y = 0
var A = 0
var B = 0
var C = 0
var M = 0
var Q = 0
var tellerX = 0
var noemerX = 0
var tellerY = 0
var noemerY = 0
var tellerM = 0
var noemerM = 0
var tellerQ = 0
var noemerQ = 0
var breuk = ""

function vereenvoudigbreuk(teller,noemer)
{
if (noemer < 0) 
{
noemer = 0 - noemer
teller = 0 - teller
}
var ng1 = Math.abs(teller);
var ng2 = Math.abs(noemer);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

teller = teller / ng1
noemer = noemer / ng1

if (noemer == 1) breuk = teller
if (noemer != 1) breuk = teller + "/" + noemer
}

function kiesoefening()
{
typeoefening = Math.floor(Math.random() * 6) + 1;
if (typeoefening > 2) typeoefening = 3
typevariatie = Math.floor(Math.random() * 2) + 1;

}

function kiesgetallen()
{
X1 = Math.floor(Math.random() * 30) - 15;
Y1 = Math.floor(Math.random() * 30) - 15;
X3 = Math.floor(Math.random() * 30) - 15;
Y3 = Math.floor(Math.random() * 30) - 15;
C = 0
while (C == 0) C = Math.floor(Math.random() * 30) - 15;
A = 0
while (A == 0) A = Math.floor(Math.random() * 30) - 15;

vglAB = ""

if (typeoefening == 2)
	{
	X2 = X1
	Y2 = Y1
	while (Y2 == Y1) Y2 = Math.floor(Math.random() * 30) - 15;
	vglAB += "" + A + "x"
	if (C > 0) vglAB += " + " + Math.abs(C) + " = 0"
	if (C < 0) vglAB += " - " + Math.abs(C) + " = 0"
	}

if (typeoefening == 1)
	{
	X2 = X1
	Y2 = Y1
	while (X2 == X1) X2 = Math.floor(Math.random() * 30) - 15;
	vglAB += "" + A + "y"
	if (C > 0) vglAB += " + " + Math.abs(C) + " = 0"
	if (C < 0) vglAB += " - " + Math.abs(C) + " = 0"
	}

if (typeoefening == 3)
	{
	X2 = X1
	Y2 = Y1
	while (X2 == X1) X2 = Math.floor(Math.random() * 30) - 15;
	while (Y2 == Y1) Y2 = Math.floor(Math.random() * 30) - 15;
	}

if (typeoefening == 1)
	{
	X = X3
	}

if (typeoefening == 2)
	{
	Y = Y3
	}

if (typeoefening == 3)
	{
	tellerM = X1 - X2
	noemerM = Y2 - Y1
	if (noemerM < 0)
		{
		tellerM = 0 - tellerM
		noemerM = 0 - noemerM
		} 
	A = noemerM
	B = tellerM

	vereenvoudigbreuk(tellerM,noemerM)
	M = breuk

	tellerQ = Y3 * (Y2 - Y1) + X3 * (X2 - X1)
	noemerQ = Y2 - Y1
	if (noemerQ < 0)
		{
		tellerQ = 0 - tellerQ
		noemerQ = 0 - noemerQ
		} 
	vereenvoudigbreuk(tellerQ,noemerQ)
	Q = breuk
	
	vglAB += "" + A + "x"
	if (B > 0) vglAB += " + " + Math.abs(B) + "y" 
	if (B < 0) vglAB += " - " + Math.abs(B) + "y"
	if (C > 0) vglAB += " + " + Math.abs(C) + " = 0"
	if (C < 0) vglAB += " - " + Math.abs(C) + " = 0"
	}
}

function wijzigvgl()
{
var typevgl = document.coeff.keuzevgl.options[document.coeff.keuzevgl.selectedIndex].value;

if (typevgl == "x") 
	{
	coeff.opl05.src = "../images/vraagteken.gif"
	document.all.oef1.style.display= "none";
	document.all.oef2.style.display= "none";
	document.all.oef3.style.display= "none";
	}
if (typevgl == "1") 
	{
	if (typevgl == typeoefening)
		{
		coeff.opl05.src = "../images/goed.gif"
		document.all.oef1.style.display= "";
		document.all.oef2.style.display= "none";
		document.all.oef3.style.display= "none";
		}
	else coeff.opl05.src = "../images/fout.gif"
	}

if (typevgl == "2") 
	{
	if (typevgl == typeoefening)
		{
		coeff.opl05.src = "../images/goed.gif"
		document.all.oef1.style.display= "none";
		document.all.oef2.style.display= "";
		document.all.oef3.style.display= "none";
		}
	else coeff.opl05.src = "../images/fout.gif"
	}

if (typevgl == "3") 
	{
	if (typevgl == typeoefening)
		{
		coeff.opl05.src = "../images/goed.gif"
		document.all.oef1.style.display= "none";
		document.all.oef2.style.display= "none";
		document.all.oef3.style.display= "";
		}
	else coeff.opl05.src = "../images/fout.gif"
	}

}

function toonoef()
{
if (typevariatie == 1)
	{
	document.all.opg1.style.display= "";
	coeff.txtX1.value = X1
	coeff.txtY1.value = Y1
	coeff.txtX2.value = X2	
	coeff.txtY2.value = Y2
	coeff.txtX3.value = X3
	coeff.txtY3.value = Y3
	}
if (typevariatie == 2)
	{
	document.all.opg2.style.display= "";
	coeff.txtvgl.value = vglAB
	coeff.txtX4.value = X3
	coeff.txtY4.value = Y3
	}
}


function nieuwoef()
{
coeff.txtX1.value = ""
coeff.txtY1.value = ""
coeff.txtX2.value = ""
coeff.txtY2.value = ""
coeff.txtX3.value = ""
coeff.txtY3.value = ""
coeff.txtX4.value = ""
coeff.txtY4.value = ""
coeff.txtvgl.value = ""
coeff.txtX.value = ""
coeff.txtY.value = ""
coeff.txtM.value = ""
coeff.txtQ.value = ""
document.all.opg1.style.display= "none";
document.all.opg2.style.display= "none";
document.all.oef1.style.display= "none";
document.all.oef2.style.display= "none";
document.all.oef3.style.display= "none";
document.coeff.keuzevgl.value= "x";
document.coeff.opl05.src = "../images/vraagteken.gif";
document.coeff.opl.src = "../images/vraagteken.gif";
antwoordjuist = 0
kiesoefening()
kiesgetallen()
toonoef()
}

function controle()
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	if (typeoefening == 2)
		{
		var antwY = coeff.txtY.value 
		if (antwY == "") alert('Geef a.u.b. een getal in.')
		else
			{
			pogingenteller++
			if (eval(antwY) == eval(Y))
				{
				coeff.opl.src = "../images/goed.gif";
				oplossingenteller++;
				antwoordjuist = 1
				}
			else coeff.opl.src = "../images/fout.gif";
			}
		}

	if (typeoefening == 1)
		{
		var antwX = coeff.txtX.value 
		if (antwX == "") alert('Geef a.u.b. een getal in.')
		else
			{
			pogingenteller++
			if (eval(antwX) == eval(X))
				{
				coeff.opl.src = "../images/goed.gif";
				oplossingenteller++;
				antwoordjuist = 1
				}
			else coeff.opl.src = "../images/fout.gif";
			}
		}

	if (typeoefening == 3)
		{
		var antwM = coeff.txtM.value 
		var antwQ = coeff.txtQ.value 
		if ((antwM == "") || (antwQ == "")) alert('Geef a.u.b. twee getallen in (geef eventueel een nul in).')
		else
			{
			pogingenteller++
			if ((eval(antwM) == eval(M)) && (eval(antwQ) == eval(Q)))
				{
				coeff.opl.src = "../images/goed.gif";
				oplossingenteller++;
				antwoordjuist = 1
				}
			else coeff.opl.src = "../images/fout.gif";
			}
		}


	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  

}

