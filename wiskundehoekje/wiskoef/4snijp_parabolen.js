var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var A = 0
var B = 0
var C = 0
var X1 = 0
var X2 = 0
var Y1 = 0
var Y2 = 0
var	M = 0
var P = 0
var	Q = 0
var	vglp1 = ""
var	vglp2 = ""
var algemaakt = 0
 
function kiesgetallen()
{
if (typeoefening == 2)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = (Math.floor(Math.random() * 15 ) - 6);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (typeoefening == 1)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = X1;
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (typeoefening == 0)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	}

M = 0
while ((M == 0) || (M == -A)) M = (Math.floor(Math.random() * 15 ) - 6);
P = (Math.floor(Math.random() * 15 ) - 6);
Q = (Math.floor(Math.random() * 15 ) - 6);

Y1 = M * X1 * X1 + P * X1 + Q
Y2 = M * X2 * X2 + P * X2 + Q
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3)
}

function toonoef()
{
vglp1 = "y = "
if ((A + M) == 1) vglp1 = vglp1 + "x� "
if ((A + M) == -1) vglp1 = vglp1 + "-x� "
if (((A + M) > 1) || ((A + M) < -1)) vglp1 = vglp1 + (A + M) + "x� "

if ((B + P) == 1) vglp1 = vglp1 + "+ x "
if ((B + P) == -1) vglp1 = vglp1 + "- x "
if ((B + P) > 1) vglp1 = vglp1 + "+ " + (B + P) + "x "
if ((B + P) < -1) vglp1 = vglp1 + "- " + Math.abs(B + P) + "x "

if ((C + Q) > 0) vglp1 = vglp1 + "+ " + (C + Q)
if ((C + Q) < 0) vglp1 = vglp1 + "- " + Math.abs(C + Q)

vglp2 = "y = "
if (M == 1) vglp2 = vglp2 + "x� "
if (M == -1) vglp2 = vglp2 + "-x� "
if ((M > 1) || (M < -1)) vglp2 = vglp2 + M + "x� "

if (P == 1) vglp2 = vglp2 + "+ x "
if (P == -1) vglp2 = vglp2 + "- x "
if (P > 1) vglp2 = vglp2 + "+ " + P + "x "
if (P < -1) vglp2 = vglp2 + "- " + Math.abs(P) + "x "

if (Q > 0) vglp2 = vglp2 + "+ " + Q
if (Q < 0) vglp2 = vglp2 + "- " + Math.abs(Q)

document.fv.txtparabool1.value = vglp1;
document.fv.txtparabool2.value = vglp2;
}

function afbwissen()
{
document.fv.txtparabool1.value = "";
document.fv.txtparabool2.value = "";
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
	if ((fv.enigeoplx.value == "") || (fv.enigeoply.value == "")) alert('Geef de co�rdinaten van het snijpunt in.')
	else
	{
	pogingenteller++
	if ((fv.enigeoplx.value == X1) && (fv.enigeoply.value == Y1)) 
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
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oply1.value == "") || (fv.oply2.value == "")) alert('Geef van beide snijpunten de co�rdinaten in.')
	else
	{
	pogingenteller++
	if (((fv.oplx1.value == X1) && (fv.oplx2.value == X2) && (fv.oply1.value == Y1) && (fv.oply2.value == Y2)) || ((fv.oply1.value == Y2) && (fv.oply2.value == Y1) && (fv.oplx1.value == X2) && (fv.oplx2.value == X1))) 
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

