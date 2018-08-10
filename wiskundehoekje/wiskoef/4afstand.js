var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var vglAB = ""
var X3 = 0
var Y3 = 0
var A = 0
var B = 0
var C = 0
var M = 0
var Q = 0
var tellerX1 = 0
var noemerX1 = 0
var tellerY1 = 0
var noemerY1 = 0
var tellerX2 = 0
var noemerX2 = 0
var tellerY2 = 0
var noemerY2 = 0
var tellerM = 0
var noemerM = 0
var tellerQ = 0
var noemerQ = 0
var breuk = ""
var afstand = 0

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
typeoefening = Math.floor(Math.random() * 3) + 1;
typevariatie = Math.floor(Math.random() * 4) + 1;
}

function kiesgetallen()
{
A = 0
B = 0
while ((A == 0) && (B == 0))
	{
	A = Math.floor(Math.random() * 30) - 15;
	B = Math.floor(Math.random() * 30) - 15;
	}
C = Math.floor(Math.random() * 30) - 15;

X3 = Math.floor(Math.random() * 30) - 15;
Y3 = Math.floor(Math.random() * 30) - 15;

afstand = Math.round(1000 * Math.abs(A * X3 + B * Y3 + C) / (Math.sqrt (Math.pow(A,2) + Math.pow(B,2)))) / 1000

vglAB = ""

if (typeoefening == 1)
	{
	if (A != 0) vglAB += "" + A + "x"
	if (B > 0) vglAB += " + " + Math.abs(B) + "y"
	if (B < 0) vglAB += " - " + Math.abs(B) + "y"
	if (C > 0) vglAB += " + " + Math.abs(C) + " = 0"
	if (C < 0) vglAB += " - " + Math.abs(C) + " = 0"
	if (C == 0) vglAB += " = 0"
	}

if (typeoefening == 2)
	{
	tellerM = 0 - A
	noemerM = B

	vereenvoudigbreuk(tellerM,noemerM)
	M = breuk
	
	tellerQ = 0 - C
	noemerQ = B

	vereenvoudigbreuk(tellerQ,noemerQ)
	Q = breuk
	
	vglAB += "y = " + M + "x"
	if (B*C < 0) vglAB += " + " + Q
	if (B*C > 0) vglAB += " " + Q
	}

if (typeoefening == 3)
	{
	X2 = X1
	Y2 = Y1
	while((X2 == X1) && (Y2 == Y1))
	{
	if (typevariatie%2 == 0) 
		{
		Y2 = Math.floor(Math.random() * 30) - 15;
		tellerX2 = 0 - C - B * Y2
		noemerX2 = A
		vereenvoudigbreuk(tellerX2,noemerX2)
		X2 = breuk
		}
	if (typevariatie%2 == 1) 
		{
		X2 = Math.floor(Math.random() * 30) - 15;
		tellerY2 = 0 - C - A * X2
		noemerY2 = B
		vereenvoudigbreuk(tellerY2,noemerY2)
		Y2 = breuk
		}
	if (typevariatie < 3)
		{
		X1 = Math.floor(Math.random() * 30) - 15;
		tellerY1 = 0 - C - A * X1
		noemerY1 = B
		vereenvoudigbreuk(tellerY1,noemerY1)
		Y1 = breuk
		}
	if (typevariatie > 2) 
		{
		Y1 = Math.floor(Math.random() * 30) - 15;
		tellerX1 = 0 - C - B * Y1
		noemerX1 = A
		vereenvoudigbreuk(tellerX1,noemerX1)
		X1 = breuk
		}
	}
	}
}

function toonoef()
{
if (typeoefening == 3)
	{
	document.all.opg1.style.display= "";
	coeff.txtX1.value = X1
	coeff.txtY1.value = Y1
	coeff.txtX2.value = X2	
	coeff.txtY2.value = Y2
	coeff.txtX3.value = X3
	coeff.txtY3.value = Y3
	}
if (typeoefening < 3)
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
coeff.txtafstand.value = ""
document.all.opg1.style.display= "none";
document.all.opg2.style.display= "none";
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
	var antw = coeff.txtafstand.value 
		if (antw == "") alert('Geef a.u.b. de afstand van P tot AB in.')
		else
			{
			pogingenteller++
			if (eval(antw) == afstand)
				{
				coeff.opl.src = "../images/goed.gif";
				oplossingenteller++;
				antwoordjuist = 1
				}
			else coeff.opl.src = "../images/fout.gif";
			}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  

}

