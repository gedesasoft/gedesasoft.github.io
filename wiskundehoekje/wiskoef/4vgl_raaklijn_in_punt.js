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


function kiesgetallen()
{
X1 = Math.floor(Math.random() * 20) - 9;
Y1 = Math.floor(Math.random() * 20) - 9;
M = Math.floor(Math.random() * 12) - 5;
Q = Math.floor(Math.random() * 12) - 5;
while ((M == 0) && (Q == 0)) Q = Math.floor(Math.random() * 12) - 5;
X2 = X1 + M
Y2 = Y1 + Q

Acirkel = 0 - 2 * X1
Bcirkel = 0 - 2 * Y1
Ccirkel = 2 * X1 * X2 + 2 * Y1 * Y2 - X2 * X2 - Y2 * Y2

Arechte = X2 - X1
Brechte = Y2 - Y1
Crechte = 0 - X2 * (X2 - X1) - Y2 * (Y2 - Y1)

if (Arechte == 0) typeoefening = 2 
else
	{
	if (Brechte == 0) typeoefening = 1
	else typeoefening = 3
	} 

if (typeoefening == 1)
	{
	X = X2
	}

if (typeoefening == 2)
	{
	Y = Y2
	}

if (typeoefening == 3)
	{
	noemerM = Brechte
	tellerM = 0 - Arechte
	noemerQ = Brechte
	tellerQ = 0 - Crechte

	if (noemerM < 0)
		{
		tellerM = 0 - tellerM
		noemerM = 0 - noemerM
		} 
	vereenvoudigbreuk(tellerM,noemerM)
	Mrechte = breuk
	
	if (noemerQ < 0)
		{
		tellerQ = 0 - tellerQ
		noemerQ = 0 - noemerQ
		} 	

	vereenvoudigbreuk(tellerQ,noemerQ)
	Qrechte = breuk
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
vglc = "x² + y² "
if (Acirkel == 1) vglc = vglc + "+ x "
if (Acirkel == -1) vglc = vglc + "- x "
if (Acirkel > 1) vglc = vglc + "+ " + Math.abs(Acirkel) + "x "
if (Acirkel < -1) vglc = vglc + "- " + Math.abs(Acirkel) + "x "

if (Bcirkel == 1) vglc = vglc + "+ y "
if (Bcirkel == -1) vglc = vglc + "- y "
if (Bcirkel > 1) vglc = vglc + "+ " + Math.abs(Bcirkel) + "y "
if (Bcirkel < -1) vglc = vglc + "- " + Math.abs(Bcirkel) + "y "

if (Ccirkel > 0) vglc = vglc + "+ " + Math.abs(Ccirkel) + " "
if (Ccirkel < 0) vglc = vglc + "- " + Math.abs(Ccirkel) + " "

vglc += "= 0"

document.coeff.txtcirkel.value = vglc;
document.coeff.txtX2.value = X2;
document.coeff.txtY2.value = Y2;
}


function nieuwoef()
{
coeff.txtcirkel.value = ""
coeff.txtX2.value = ""
coeff.txtY2.value = ""
coeff.txtX.value = ""
coeff.txtY.value = ""
coeff.txtM.value = ""
coeff.txtQ.value = ""
document.all.oef1.style.display= "none";
document.all.oef2.style.display= "none";
document.all.oef3.style.display= "none";
document.coeff.keuzevgl.value= "x";
document.coeff.opl05.src = "../images/vraagteken.gif";
document.coeff.opl.src = "../images/vraagteken.gif";
antwoordjuist = 0
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
			if ((eval(antwM) == eval(Mrechte)) && (eval(antwQ) == eval(Qrechte)))
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

