var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var AB = 0
var BC = 0
var AC = 0
var PQ = 0
var QR = 0
var PR = 0
var nummer = 0
var factor = 0 

factorkeuze = new Array(15)
factorkeuze[0] = "0.2"
factorkeuze[1] = "0.25"
factorkeuze[2] = "0.3"
factorkeuze[3] = "0.4"
factorkeuze[4] = "0.5"
factorkeuze[5] = "0.7"
factorkeuze[6] = "0.9"
factorkeuze[7] = "1.2"
factorkeuze[8] = "1.5"
factorkeuze[9] = "2"
factorkeuze[10] = "2.4"
factorkeuze[11] = "3"
factorkeuze[12] = "3.2"
factorkeuze[13] = "4"
factorkeuze[14] = "5"
 
function kiesgetallen()
{
AB = (Math.floor(Math.random() * 19 ) + 2);
BC = (Math.floor(Math.random() * 19 ) + 2);
AC = AB + BC
nummer = Math.floor(Math.random() * 15 );
factor = parseFloat(factorkeuze[nummer])
PQ = Math.round(factor * AB * 100) / 100
QR = Math.round(factor * BC * 100) / 100
PR = Math.round(factor * AC * 100) / 100
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
document.thales.txtAB.value = "";
document.thales.txtBC.value = "";
document.thales.txtAC.value = "";
document.thales.txtPQ.value = "";
document.thales.txtQR.value = "";
document.thales.txtPR.value = "";
if (typeoefening == "1")
	{
	document.thales.txtAB.value = AB
	document.thales.txtBC.value = BC
	document.thales.txtQR.value = QR 
	}
if (typeoefening == "2")
	{
	document.thales.txtAC.value = AC
	document.thales.txtBC.value = BC
	document.thales.txtPR.value = PR 
	}
if (typeoefening == "3")
	{
	document.thales.txtAB.value = AB
	document.thales.txtAC.value = AC
	document.thales.txtQR.value = QR 
	}
if (typeoefening == "4")
	{
	document.thales.txtBC.value = BC
	document.thales.txtQR.value = QR 
	document.thales.txtPR.value = PR
	}
if (typeoefening == "5")
	{
	document.thales.txtAC.value = AC
	document.thales.txtQR.value = QR 
	document.thales.txtPQ.value = PQ
	}
if (typeoefening == "6")
	{
	document.thales.txtBC.value = BC
	document.thales.txtPQ.value = PQ 
	document.thales.txtPR.value = PR
	}
}

function nieuwoef()
{
aljuist = 0
kiesgetallen()
kiesoef()
toonoef()
document.thales.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else controle()
}

function controle()
{
if ((document.thales.txtAB.value == "") || (document.thales.txtBC.value == "") || (document.thales.txtAC.value == "") || (document.thales.txtPQ.value == "") || (document.thales.txtQR.value == "") || (document.thales.txtPR.value == "")) alert ('Je hebt nog niet alle lengtes ingevuld!') 
else
{
var oplAB = parseFloat(document.thales.txtAB.value)
var oplBC = parseFloat(document.thales.txtBC.value)
var oplAC = parseFloat(document.thales.txtAC.value)
var oplPQ = parseFloat(document.thales.txtPQ.value)
var oplQR = parseFloat(document.thales.txtQR.value)
var oplPR = parseFloat(document.thales.txtPR.value)

pogingenteller++;

if ((oplAB == parseFloat(AB)) && (oplBC == parseFloat(BC)) && (oplAC == parseFloat(AC)) && (oplPQ == parseFloat(PQ)) && (oplQR == parseFloat(QR)) && (oplPR == parseFloat(PR))) 
	{
	document.thales.opl.src = "../images/goed.gif"
	oplossingenteller++;
	aljuist = 1
	}
else document.thales.opl.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.thales.aantaljuist.value = oplossingenteller
	document.thales.aantalpogingen.value = pogingenteller
	document.thales.percentage.value = procent		
}
}
