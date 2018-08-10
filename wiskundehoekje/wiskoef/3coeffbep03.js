var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var keuzekant = 0
var X = 0
var Y = 0
var A = 0
var B = 0
var C = 0
var D = 0
var P = 0
var factor = 0
var vgl = ""
var vgl2 = ""
var tellerrico = 0
var noemerrico = 0
var rico = ""

function kiesgetallen()
{
while (X == 0) X = Math.floor(Math.random() * 30) - 15;
while (Y == 0) Y = Math.floor(Math.random() * 30) - 15;
while (A == 0) A = Math.floor(Math.random() * 30) - 10;
while (B == 0) B = Math.floor(Math.random() * 30) - 10;
while (C == 0) C = Math.floor(Math.random() * 30) - 10;
while (D == 0) D = Math.floor(Math.random() * 30) - 10;
while ((P == 0) || (P == A) || (P == C)) P = Math.floor(Math.random() * 30) - 10;
while (factor == 0) factor = Math.floor(Math.random() * 10) - 4;


if (typeoefening == 1)
	{
	tellerrico = P
	noemerrico = 1
	}
if (typeoefening == 2)
	{
	tellerrico = 0 - A
	noemerrico = P
	}
if (typeoefening == 3)
	{
	tellerrico = 0 - P
	noemerrico = A
	}
if (typeoefening == 4)
	{
	tellerrico = 0 - (A*P + B)
	noemerrico = C
	}
if (typeoefening == 5)
	{
	tellerrico = 0 - C
	noemerrico = A*P + B
	}
if (typeoefening == 6)
	{
	tellerrico = A - P
	noemerrico = C
	}
if (typeoefening == 7)
	{
	tellerrico = 0 - A
	noemerrico = C - P
	}
if (typeoefening == 8)
	{
	tellerrico = B - A*P
	noemerrico = C
	}

if (noemerrico < 0) 
{
noemerrico = 0 - noemerrico
tellerrico = 0 - tellerrico
}
var ng1 = Math.abs(tellerrico);
var ng2 = Math.abs(noemerrico);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

tellerrico = tellerrico / ng1
noemerrico = noemerrico / ng1

if (noemerrico == 1) rico = tellerrico
if (noemerrico != 1) rico = tellerrico + "/" + noemerrico

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function kieskant()
{
keuzekant = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	vgl = vgl + 'y = px '
	if (A < 0) vgl = vgl + ' - ' + Math.abs(A)
	if (A > 0) vgl = vgl + ' + ' + Math.abs(A)
	}

if (typeoefening == 2)
	{
	vgl = vgl + A + 'x + py '
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B)
	vgl = vgl  + ' = 0'
	}
if (typeoefening == 3)
	{
	vgl = vgl + 'px'
	if (A < 0) vgl = vgl + ' - ' + Math.abs(A) + 'y'
	if (A > 0) vgl = vgl + ' + ' + Math.abs(A) + 'y'
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B)
	vgl = vgl  + ' = 0'
	}
if (typeoefening == 4)
	{
	vgl = vgl + '(' + A + 'p' 
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B) + ')x'
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B) + ')x'
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C) + 'y'
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C) + 'y'
	if (D < 0) vgl = vgl + ' - ' + Math.abs(D)
	if (D > 0) vgl = vgl + ' + ' + Math.abs(D)
	vgl = vgl  + ' = 0'
	}
if (typeoefening == 5)
	{
	vgl = vgl + C + 'x + ('
	vgl = vgl + A + 'p' 
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B) + ')y'
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B) + ')y'
	if (D < 0) vgl = vgl + ' - ' + Math.abs(D)
	if (D > 0) vgl = vgl + ' + ' + Math.abs(D)
	vgl = vgl  + ' = 0'
	}
if (typeoefening == 6)
	{
	vgl = vgl + 'px'
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C) + 'y'
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C) + 'y'
	if (D < 0) vgl = vgl + ' - ' + Math.abs(D)
	if (D > 0) vgl = vgl + ' + ' + Math.abs(D)
	vgl = vgl  + ' = ' + A + 'x'
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B)
	}
if (typeoefening == 7)
	{
	vgl = vgl + A + 'x'
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C) + 'y'
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C) + 'y'
	if (D < 0) vgl = vgl + ' - ' + Math.abs(D)
	if (D > 0) vgl = vgl + ' + ' + Math.abs(D)
	vgl = vgl  + ' = ' + 'py'
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B)
	}
if (typeoefening == 8)
	{
	vgl = vgl + C + 'y + p(' + B 
	if (A < 0) vgl = vgl + ' - ' + Math.abs(A) + 'x)'
	if (A > 0) vgl = vgl + ' + ' + Math.abs(A) + 'x)'
	vgl = vgl  + ' = ' + B + 'x'
	if (D < 0) vgl = vgl + ' - ' + Math.abs(D)
	if (D > 0) vgl = vgl + ' + ' + Math.abs(D)
	}

if (typevariatie == 1)
	{
	vgl2 = vgl2 + 'y = ' + rico + 'x'
	if (factor < 0) vgl2 = vgl2 + ' - ' + Math.abs(factor)
	if (factor > 0) vgl2 = vgl2 + ' + ' + Math.abs(factor)
	}

if (typevariatie == 2)
	{
	if (0 - factor * tellerrico == 1) vgl2 = vgl2 + 'x'
	if (0 - factor * tellerrico != 1) vgl2 = vgl2 + (0 - factor * tellerrico) + 'x'
	if (factor * noemerrico < 0) vgl2 = vgl2 + ' - ' + Math.abs(factor * noemerrico)
	if (factor * noemerrico > 1) vgl2 = vgl2 + ' + ' + Math.abs(factor * noemerrico)
	if (factor * noemerrico == 1) vgl2 = vgl2 + ' + '
	vgl2 = vgl2 + 'y'
	if (D * A < 0) vgl2 = vgl2 + ' - ' + Math.abs(D * A) + ' = 0'
	if (D * A > 0) vgl2 = vgl2 + ' + ' + Math.abs(D * A) + ' = 0'
	}

if (keuzekant == 1)
	{
	document.coeff.txtvgl.value = vgl
	document.coeff.txtvgl2.value = vgl2
	}	

if (keuzekant == 2)
	{
	document.coeff.txtvgl.value = vgl2
	document.coeff.txtvgl2.value = vgl
	}	
	
}


function nieuwoef()
{
vgl = ""
vgl2 = ""
factor = 0
A = 0
B = 0
C = 0
D = 0
P = 0
X = 0
Y = 0
document.coeff.txtvgl.value = "";
document.coeff.txtvgl2.value = "";
document.coeff.txtopl.value = "??";
document.coeff.opl.src = "../images/vraagteken.gif";
document.coeff.opl.value = "";
antwoordjuist = 0
kiesvariatie()
kieskant()
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
var antwp = document.coeff.txtopl.value;
if (antwp == "") alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (antwp == P) 
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


