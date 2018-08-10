var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var Acirkel = 0
var Bcirkel = 0
var Ccirkel = 0
var X1 = 0
var X2 = 0
var X3 = 0
var X4 = 0
var Y1 = 0
var Y2 = 0
var Y3 = 0
var Y4 = 0
var M = 0
var Q = 0
var vglc = ""
var vglr = ""
var Arechte = 0
var Brechte = 0
var Crechte = 0
var Mrechte = 0
var Qrechte = 0
var tellerM = 0
var noemerM = 0
var tellerQ = 0
var noemerQ = 0
var breuk = ""
var algemaakt = 0

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
M = 0
Q = 0
while (M == 0) M = Math.floor(Math.random() * 12) - 5;
while ((M == Q) || (Q == 0)) Q = Math.floor(Math.random() * 12) - 5;
X2 = X1 + M
Y2 = Y1 + Q
X3 = X1 + Q
Y3 = Y1 + M
X4 = X1 + 2 * M
Y4 = Y1 + 2 * Q

Acirkel = 0 - 2 * X1
Bcirkel = 0 - 2 * Y1
Ccirkel = 2 * X1 * X2 + 2 * Y1 * Y2 - X2 * X2 - Y2 * Y2

if (typeoefening == 2)
	{
	Arechte = Y2 - Y3
	Brechte = X3 - X2
	Crechte = X2 * (Y3 - Y2) - Y2 * (X3 - X2)
	}
if (typeoefening == 1)
	{
	Arechte = X2 - X1
	Brechte = Y2 - Y1
	Crechte = 0 - X2 * (X2 - X1) - Y2 * (Y2 - Y1)
	}
if (typeoefening == 0)
	{
	Arechte = X4 - X1
	Brechte = Y4 - Y1
	Crechte = 0 - X4 * (X4 - X1) - Y4 * (Y4 - Y1)
	}

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



function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3)
typevariatie = Math.floor(Math.random() * 2)
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

if (typevariatie == 0)
	{
	vglr = "y = "
	if (eval(tellerM/noemerM) == 1) vglr = vglr + "x "
	if (eval(tellerM/noemerM) == -1) vglr = vglr + "-x "
	if ((eval(tellerM/noemerM) > 0) && (eval(tellerM/noemerM) != 1)) vglr = vglr + Mrechte + "x "
	if ((eval(tellerM/noemerM) < 0) && (eval(tellerM/noemerM) != -1)) vglr = vglr + Mrechte + "x "

	if (eval(tellerQ/noemerQ) > 0) vglr = vglr + "+ " + Qrechte
	if (eval(tellerQ/noemerQ) < 0) vglr = vglr + Qrechte
	}

if (typevariatie == 1)
	{
	vglr = ""

	if (Arechte != 0) vglr = vglr + Arechte + "x "

	if (Brechte == 1) vglr = vglr + "+ y "
	if (Brechte == -1) vglr = vglr + "- y "
	if (Brechte > 1) vglr = vglr + "+ " + Math.abs(Brechte) + "y "
	if (Brechte < -1) vglr = vglr + "- " + Math.abs(Brechte) + "y "

	if (Crechte > 0) vglr = vglr + "+ " + Math.abs(Crechte) + " "
	if (Crechte < 0) vglr = vglr + "- " + Math.abs(Crechte) + " "

	vglr = vglr + "= 0"	
	}

document.fv.txtcirkel.value = vglc;
document.fv.txtrechte.value = vglr;
}

function afbwissen()
{
document.fv.txtcirkel.value = "";
document.fv.txtrechte.value = "";
document.fv.keuzenp.options.value = "x"
document.fv.enigeoplx.value = "";
document.fv.enigeoply.value = "";
document.fv.oplx1.value = "";
document.fv.oply1.value = "";
document.fv.oplx2.value = "";
document.fv.oply2.value = "";

document.all.Dnul.style.display= "none";
document.all.Dpos.style.display= "none";
fv.oplnp.src = "../images/vraagteken.gif"
fv.opl.src = "../images/vraagteken.gif"
}

function nieuwoef()
{
algemaakt = 0
afbwissen()
kiesoef()
kiesgetallen()
toonoef()
}


function wijzignp()
{
var aantalnp = document.fv.keuzenp.options[document.fv.keuzenp.selectedIndex].value;

if (aantalnp == "x") 
	{
	fv.oplnp.src = "../images/vraagteken.gif" 
	document.all.Dnul.style.display= "none";
	document.all.Dpos.style.display= "none";
	}
if (aantalnp == "0") 
	{
	if (aantalnp == typeoefening)
		{
		pogingenteller++
		oplossingenteller++
		fv.oplnp.src = "../images/goed.gif" 
		fv.opl.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "none";
		}
	else 
		{
		fv.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}

if (aantalnp == "1") 
	{
	if (aantalnp == typeoefening)
		{
		pogingenteller++
		oplossingenteller++
		fv.oplnp.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "";
		document.all.Dpos.style.display= "none";
		}
	else 
		{
		fv.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}

if (aantalnp == "2") 
	{
	if (aantalnp == typeoefening)
		{
		pogingenteller++
		oplossingenteller++
		fv.oplnp.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "";
		}
	else 
		{
		fv.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.fv.aantaljuist.value = oplossingenteller
		document.fv.aantalpogingen.value = pogingenteller
		document.fv.percentage.value = procent		

}

function controle()
{
var aantalnp = document.fv.keuzenp.options[document.fv.keuzenp.selectedIndex].value;
if (aantalnp == "x") alert('Geef eerst het aantal snijpunten in!')
else 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening')
else
{
if (typeoefening == 1)
	{
	if ((fv.enigeoplx.value == "") || (fv.enigeoply.value == "")) alert('Geef de coördinaten van het snijpunt in.')
	else
	{
	pogingenteller++
	if ((fv.enigeoplx.value == X2) && (fv.enigeoply.value == Y2)) 
		{
		oplossingenteller++
		fv.opl.src = "../images/goed.gif"
		algemaakt = 1
		} 
	else fv.opl.src = "../images/fout.gif" 
	}
	}
if (typeoefening == 2)
	{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oply1.value == "") || (fv.oply2.value == "")) alert('Geef van beide snijpunten de coördinaten in.')
	else
	{
	pogingenteller++
	if (((fv.oplx1.value == X2) && (fv.oplx2.value == X3) && (fv.oply1.value == Y2) && (fv.oply2.value == Y3)) || ((fv.oply1.value == Y3) && (fv.oply2.value == Y2) && (fv.oplx1.value == X3) && (fv.oplx2.value == X2))) 
		{
		oplossingenteller++
		fv.opl.src = "../images/goed.gif"
		algemaakt = 1
		} 
	else fv.opl.src = "../images/fout.gif"
	}
	}
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		
}
}	
}

