var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var A = 0
var B = 0
var C = 0
var X = ""
var Xteller = 0
var Xnoemer = 0
 
function kiesgetallen()
{
A = (Math.floor(Math.random() * 19 ) + 2);
B = (Math.floor(Math.random() * 19 ) + 2);
C = (Math.floor(Math.random() * 19 ) + 2);
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function toonoef()
{
document.gelijkv_drh.geg1.value = "";
document.gelijkv_drh.geg2.value = "";
document.gelijkv_drh.geg3.value = "";
document.gelijkv_drh.gevr.value = "";
document.gelijkv_drh.antw.value = "";

if (typeoefening == "1")
	{
	document.gelijkv_drh.geg1.value = "|AP| = " + A
	document.gelijkv_drh.geg2.value = "|BP| = " + B
	document.gelijkv_drh.geg3.value = "|PQ| = " + C
	document.gelijkv_drh.gevr.value = "|BC|"
	Xteller = (A + B) * C
	Xnoemer = A
	}

if (typeoefening == "2")
	{
	document.gelijkv_drh.geg1.value = "|AB| = " + (A + B)
	document.gelijkv_drh.geg2.value = "|BP| = " + B
	document.gelijkv_drh.geg3.value = "|BC| = " + C
	document.gelijkv_drh.gevr.value = "|PQ|"
	Xteller = A * C
	Xnoemer = A + B
	}

if (typeoefening == "3")
	{
	document.gelijkv_drh.geg1.value = "|AP| = " + A
	document.gelijkv_drh.geg2.value = "|BP| = " + B
	document.gelijkv_drh.geg3.value = "|AQ| = " + C
	document.gelijkv_drh.gevr.value = "|QC|"
	Xteller = B * C
	Xnoemer = A
	}

if (typeoefening == "4")
	{
	document.gelijkv_drh.geg1.value = "|AB| = " + A
	document.gelijkv_drh.geg2.value = "|AQ| = " + B
	document.gelijkv_drh.geg3.value = "|QC| = " + C
	document.gelijkv_drh.gevr.value = "|BP|"
	Xteller = A * C
	Xnoemer = B + C
	}

if (typeoefening == "5")
	{
	document.gelijkv_drh.geg1.value = "|PQ| = " + A
	document.gelijkv_drh.geg2.value = "|BC| = " + (A + B)
	document.gelijkv_drh.geg3.value = "|QC| = " + C
	document.gelijkv_drh.gevr.value = "|AQ|"
	Xteller = A * C
	Xnoemer = B
	}

if (typeoefening == "6")
	{
	document.gelijkv_drh.geg1.value = "|PQ| = " + A
	document.gelijkv_drh.geg2.value = "|BC| = " + (A + B)
	document.gelijkv_drh.geg3.value = "|AQ| = " + C
	document.gelijkv_drh.gevr.value = "|AC|"
	Xteller = (A + B) * C
	Xnoemer = A
	}

if (typeoefening == "7")
	{
	document.gelijkv_drh.geg1.value = "|PQ| = " + A
	document.gelijkv_drh.geg2.value = "|BC| = " + (A + B)
	document.gelijkv_drh.geg3.value = "|AQ| = " + C
	document.gelijkv_drh.gevr.value = "|QC|"
	Xteller = B * C
	Xnoemer = A
	}

if (typeoefening == "8")
	{
	document.gelijkv_drh.geg1.value = "|PQ| = " + A
	document.gelijkv_drh.geg2.value = "|BC| = " + (A + B)
	document.gelijkv_drh.geg3.value = "|AB| = " + C
	document.gelijkv_drh.gevr.value = "|BP|"
	Xteller = B * C
	Xnoemer = A + B
	}
	
}

function nieuwoef()
{
aljuist = 0
kiesgetallen()
kiesoef()
toonoef()
document.gelijkv_drh.opl.src = "../images/vraagteken.gif"
}

function controle()
{
var antwoord = document.gelijkv_drh.antw.value
var Xng1 = Math.abs(Xteller);
var Xng2 = Math.abs(Xnoemer);
var XngA = Xng1
var XngB = Xng2
var Xrest = 1
	
while (Xrest != 0)
	{
	Xrest = Xng1 % Xng2;
	Xng1 = Xng2;
	Xng2 = Xrest;
	}

Xteller = Xteller / Xng1
Xnoemer = Xnoemer / Xng1

if (Xnoemer == 1) X = Xteller + ""
else
X = Xteller + "/" + Xnoemer

pogingenteller++;

if (antwoord == X) 
	{
	document.gelijkv_drh.opl.src = "../images/goed.gif"
	oplossingenteller++;
	aljuist = 1
	}
else document.gelijkv_drh.opl.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.gelijkv_drh.aantaljuist.value = oplossingenteller
	document.gelijkv_drh.aantalpogingen.value = pogingenteller
	document.gelijkv_drh.percentage.value = procent		
}

function controleer()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else controle()
}
