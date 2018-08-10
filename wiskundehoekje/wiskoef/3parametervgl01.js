var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var aljuist = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var Y3vals = 0
var A = 0
var B = 0
var C = 0
var D = 0
var P = 0
var Q = 0
var R = 0
var breuk = ""
var Yteller = 0
var Ynoemer = 0
var M = 0
var Q = 0
var oplossing = ""
var antw = ""

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
	P = 0
	while (P == 0)	P = Math.floor(Math.random() * 20) - 10;
	Q = Math.floor(Math.random() * 10) + 1;
	R = Math.floor(Math.random() * 20) - 10;
	if (typevariatie < 4) R = Q * Math.floor(Math.random() * 20) - 10;
	K = Math.floor(Math.random() * 20) - 10;
	L = Math.floor(Math.random() * 10) + 1;
	M = K
	N = L
	while ((K/L) == (M/N)) 
	M = Math.floor(Math.random() * 20) - 10;
	N = Math.floor(Math.random() * 10) + 1;

	if (typevariatie < 5) 
		{
		X1 = Q * Math.floor(Math.random() * 10) - 4;
		X2 = X1
		while (X2 == X1) X2 = Q * Math.floor(Math.random() * 10) - 4;
		Yteller = X1 * (0 - P) - R
		Ynoemer = Q
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y1 = breuk 
		Yteller = X2 * (0 - P) - R
		Ynoemer = Q
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y2 = breuk 
		}

	else
		{
		vereenvoudigbreuk(K,L)
		X1 = breuk
		vereenvoudigbreuk(M,N)
		X2 = breuk
		
		Yteller = 0 - P * K - R * L
		Ynoemer = Q * L
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y1 = breuk 

		Yteller = 0 - P * M - R * N
		Ynoemer = Q * N
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y2 = breuk 
		}

	if (typeoefening == 7)
		{
		if (typevariatie < 5) 
			{
			X1 = Math.floor(Math.random() * 50) - 20;
			X2 = X1
			Y1 = Math.floor(Math.random() * 50) - 20;
			Y2 = Y1
			while (Y2 == Y1) Y2 = Math.floor(Math.random() * 50) - 20;
			}			
		else
			{
			vereenvoudigbreuk(K,L)
			X1 = breuk
			X2 = X1
			Yteller = Math.floor(Math.random() * 20) - 10;
			Ynoemer = Math.floor(Math.random() * 10) + 1;
			vereenvoudigbreuk(Yteller,Ynoemer)
			Y1 = breuk 
			Y2 = Y1
			while (Y2 == Y1)
				{
				Yteller = Math.floor(Math.random() * 20) - 10;
				Ynoemer = Math.floor(Math.random() * 10) + 1;
				vereenvoudigbreuk(Yteller,Ynoemer)
				Y2 = breuk 
				}
			}
		}
			
	if (typeoefening == 8)
		{
		if (typevariatie < 5) 
			{
			Y1 = Math.floor(Math.random() * 50) - 20;
			Y2 = Y1
			X1 = Math.floor(Math.random() * 50) - 20;
			X2 = X1
			while (X2 == X1) X2 = Math.floor(Math.random() * 50) - 20;
			}			
		else
			{
			vereenvoudigbreuk(K,L)
			Y1 = breuk
			Y2 = Y1	
			Yteller = Math.floor(Math.random() * 20) - 10;
			Ynoemer = Math.floor(Math.random() * 10) + 1;
			vereenvoudigbreuk(Yteller,Ynoemer)
			X1 = breuk 
			X2 = X1
			while (X2 == X1)
				{
				Yteller = Math.floor(Math.random() * 20) - 10;
				Ynoemer = Math.floor(Math.random() * 10) + 1;
				vereenvoudigbreuk(Yteller,Ynoemer)
				X2 = breuk 
				}
			}
		}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 5) + 1
}

function toonoef()
{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtA.value = ""
	document.coeff.txtB.value = ""
	document.coeff.txtC.value = ""
	document.coeff.txtD.value = ""

}


function nieuwoef()
{
document.coeff.opl.src = "../images/vraagteken.gif";
aljuist = 0
kiesoef()
kiesvariatie()
kiesgetallen()
toonoef()
}

function controle() 
{
if (aljuist == 1) 
	{
	alert('Fijn dat je deze opgave al eens juist had, probeer nu een nieuwe oefening.')
	}
else
{
A = coeff.txtA.value
B = coeff.txtB.value
C = coeff.txtC.value
D = coeff.txtD.value

if ((A == "") || (B == "") || (C == "") || (D == "")) alert('Gelieve alle coëfficiënten in te geven.') 
else
	{
	pogingenteller++
	if (typeoefening < 7)
		{
		if ((eval(eval(D)/eval(B)) == eval(-P/Q)) && (eval((eval(B)*eval(C)-eval(A)*eval(D))/eval(B)) == eval(-R/Q))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}

	if (typeoefening == 7)
		{
		if ((eval(B) == 0) && (eval(D) != 0) && (eval(A) == eval(X1))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}
		
	if (typeoefening == 8)
		{
		if ((eval(D) == 0) && (eval(B) != 0) && (eval(C) == eval(Y1))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
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
}

