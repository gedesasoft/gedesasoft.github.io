var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typevariatie = 0
var typeoefening = 0
var X = 0
var Y = 0
var C = 0
var vgl = ""
var tellerrico = 0
var noemerrico = 0
var rico = ""

function kiesgetallen()
{
while (X == 0) X = Math.floor(Math.random() * 30) - 15;
while (Y == 0) Y = Math.floor(Math.random() * 30) - 15;
 
C = X*Y

tellerrico = 0 - Y
noemerrico = X

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

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function kiesoefening()
{
typeoefening = Math.floor(Math.random() * 10) + 1
}

function toonoef()
{
if (typeoefening == 1) 
	{
	vgl = vgl + X + 'y = ' + X*Y
	}
else
{
if (typeoefening == 2) 
	{
	vgl = vgl + Y + 'x = ' + Y*X
	}
else
{
if (typevariatie == 1)
	{
	if (Y == 1) vgl = vgl + 'x'
	if (Y == -1) vgl = vgl + '-x'
	if ((Y != 1) && (Y != -1)) vgl = vgl + Y + 'x'
	if (X == 1) vgl = vgl + ' + y'
	if (X == -1) vgl = vgl + ' - y'
	if (X < -1) vgl = vgl + ' - ' + Math.abs(X) + 'y'
	if (X > 1) vgl = vgl + ' + ' + Math.abs(X) + 'y'
	if (C < 0) vgl = vgl + ' + ' + Math.abs(C)
	if (C > 0) vgl = vgl + ' - ' + Math.abs(C)
	vgl = vgl + ' = 0'
	}

if (typevariatie == 2)
	{
	vgl = vgl + 'y = ' + rico + 'x'
	if (Y < 0) vgl = vgl + ' - ' + Math.abs(Y)
	if (Y > 0) vgl = vgl + ' + ' + Math.abs(Y)
	}
}
}
document.coeff.txtvgl.value = vgl

}


function nieuwoef()
{
vgl = ""
Y = 0
X = 0
C = 0
document.coeff.txtvgl.value = "";
document.coeff.txtX1.value = "??";
document.coeff.txtY1.value = "??";
document.coeff.txtX2.value = "??";
document.coeff.txtY2.value = "??";
document.coeff.opl.src = "../images/vraagteken.gif";
antwoordjuist = 0
kiesoefening()
kiesvariatie()
kiesgetallen()
toonoef()
}

function controle()
{
var antwX1 = document.coeff.txtX1.value;
var antwY1 = document.coeff.txtY1.value;
var antwX2 = document.coeff.txtX2.value;
var antwY2 = document.coeff.txtY2.value;

if ((antwX1 == "") || (antwY1 == "") || (antwX2 == "") || (antwY2 == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (typeoefening == 1)
		{
		if ((antwX1 == "/") && (antwY1 == "/") && (antwX2 == "0") && (antwY2 == Y))
			{
			coeff.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else coeff.opl.src = "../images/fout.gif";
		}

	if (typeoefening == 2)
		{
		if ((antwX1 == X) && (antwY1 == "0") && (antwX2 == "/") && (antwY2 == "/"))
			{
			coeff.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else coeff.opl.src = "../images/fout.gif";
		}		
	
	if (typeoefening > 2)
		{
		if ((antwX1 == X) && (antwY1 == "0") && (antwX2 == "0") && (antwY2 == Y))
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
}

