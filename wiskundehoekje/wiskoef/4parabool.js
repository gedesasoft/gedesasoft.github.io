var beginopgave = "Bepaal de vergelijking van de parabool die "
var soortparabool = 0
var typeoefening = 0
var A = 0
var B = 0
var C = 0
var D = 0
var X1 = 0
var X2 = 0
var	Xtopteller = 0
var	Xtopnoemer = 0
var	Ytopteller = 0
var	Ytopnoemer = 0
var Xtop = ""
var Ytop = ""
var punt1x = 0
var punt2x = 0
var punt3x = 0
var punt1y = 0
var punt2y = 0
var punt3y = 0

function kiesgetallen()
{
if (soortparabool == 2)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = (Math.floor(Math.random() * 15 ) - 6);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (soortparabool == 1)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = X1;
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (soortparabool == 0)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	}

D = B * B - 4 * A * C
	
if (A < 0)
	{
	Xtopteller = B
	Xtopnoemer = -2 * A
	Ytopteller = D
	Ytopnoemer = -4 * A
	}
if (A > 0)
	{
	Xtopteller = -B
	Xtopnoemer = 2 * A
	Ytopteller = -D
	Ytopnoemer = 4 * A
	}

var Xng1 = Math.abs(Xtopteller);
var Xng2 = Math.abs(Xtopnoemer);
var XngA = Xng1
var XngB = Xng2
var Xrest = 1
	
while (Xrest != 0)
	{
	Xrest = Xng1 % Xng2;
	Xng1 = Xng2;
	Xng2 = Xrest;
	}

Xtopteller = Xtopteller / Xng1
Xtopnoemer = Xtopnoemer / Xng1

var Yng1 = Math.abs(Ytopteller);
var Yng2 = Math.abs(Ytopnoemer);
var YngA = Yng1
var YngB = Yng2
var Yrest = 1
	
while (Yrest != 0)
	{
	Yrest = Yng1 % Yng2;
	Yng1 = Yng2;
	Yng2 = Yrest;
	}

Ytopteller = Ytopteller / Yng1
Ytopnoemer = Ytopnoemer / Yng1

if (Xtopnoemer ==1) Xtop = Xtopteller + ""
else
Xtop = Xtopteller + "/" + Xtopnoemer

if (Ytopnoemer ==1) Ytop = Ytopteller + ""
else
Ytop = Ytopteller + "/" + Ytopnoemer

punt1x = (Math.floor(Math.random() * 10 ) - 6);
if ((Xtopnoemer == 1) && (Xtopteller == punt1x)) punt1x = punt1x + 1
punt1y = A * punt1x * punt1x + B * punt1x + C
punt2x = (Math.floor(Math.random() * 10 ) - 6);
if (punt2x == punt1x) punt2x = punt1x + 2
if ((Xtopnoemer == 1) && (Xtopteller == punt2x)) punt2x = punt2x + 1
punt2y = A * punt2x * punt2x + B * punt2x + C
punt3x = (Math.floor(Math.random() * 10 ) - 6);
if (punt3x == punt1x) punt3x = punt1x + 2
if (punt3x == punt2x) punt3x = punt2x + 3
punt3y = A * punt3x * punt3x + B * punt3x + C

}

function kiesoef()
{
soortparabool = Math.floor(Math.random() * 3)
typeoefening = Math.floor(Math.random() * 4) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.fv.opgave.value = beginopgave + "door de punten (" + punt1x + "," + punt1y + ") , (" + punt2x + "," + punt2y + ") en (" +  punt3x + "," + punt3y + ") gaat." 	
	}

if (typeoefening == 2)
	{
	document.fv.opgave.value = beginopgave + "door het punt (" + punt1x + "," + punt1y + ") gaat en als top (" + Xtop + "," + Ytop + ") heeft." 	
	}

if (typeoefening == 3)
	{
	document.fv.opgave.value = beginopgave + "door de punten (" + punt1x + "," + punt1y + ") en (" + punt2x + "," + punt2y + ") gaat en als as x = " + Xtop + " heeft." 	
	}

if ((typeoefening == 4) && (soortparabool == 2))
	{
	document.fv.opgave.value = beginopgave + "als nulpunten (" + X1 + ", 0) en (" + X2 + ",0) heeft en waarvan de top als tweede coördinaatgetal " + Ytop + " heeft." 	
	}

if ((typeoefening == 4) && ((soortparabool == 1) || (soortparabool == 0)))
	{
	document.fv.opgave.value = beginopgave + "door de punten (" + punt1x + "," + punt1y + ") , (" + punt2x + "," + punt2y + ") en (" +  punt3x + "," + punt3y + ") gaat." 	
	}
}


function nieuwoef()
{
document.opl.src = "../images/vraagteken.gif"
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
if ((fv.txtA.value == A) && (fv.txtB.value == B) && (fv.txtC.value == C)) fv.opl.src = "../images/goed.gif"
else fv.opl.src = "../images/fout.gif"
}

