var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var foutenteller = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var X4 = 0
var Y4 = 0
var M = 0
var Q = 0
var A = 0
var B = 0
var C = 0
var Rkwadraat = 0

function kiesoefening()
{
typevariatie = Math.floor(Math.random() * 5) + 1;
if (typevariatie < 3) typeoefening = 1
if ((typevariatie > 2) && (typevariatie < 5)) typeoefening = 2
if (typevariatie > 4) typeoefening = 3
}

function kiesgetallen()
{
X1 = Math.floor(Math.random() * 30) - 15;
Y1 = Math.floor(Math.random() * 30) - 15;
M = 0
Q = 0
while (M == 0) M = Math.floor(Math.random() * 20) - 9;
while ((M == (0-Q)) || (M == Q) || (Q == 0)) Q = Math.floor(Math.random() * 20) - 9;
X2 = X1 + M
Y2 = Y1 + Q
X3 = X1 + Q
Y3 = Y1 + M
X4 = X1 - M
Y4 = Y1 + Q

A = 0 - 2 * X1
B = 0 - 2 * Y1
C = 2 * X1 * X2 + 2 * Y1 * Y2 - X2 * X2 - Y2 * Y2

Rkwadraat = M * M + Q * Q
}


function toonoef()
{
if (typeoefening == 1)
	{
	document.all.opg1.style.display= "";
	coeff.opg1txtX1.value = X1
	coeff.opg1txtY1.value = Y1
	coeff.opg1txtX2.value = X2	
	coeff.opg1txtY2.value = Y2
	}
if (typeoefening == 2)
	{
	document.all.opg2.style.display= "";
	coeff.opg2txtX1.value = X1
	coeff.opg2txtY1.value = Y1
	coeff.opg2txtR.value = Rkwadraat
	}
if (typeoefening == 3)
	{
	document.all.opg3.style.display= "";
	coeff.opg3txtX2.value = X2	
	coeff.opg3txtY2.value = Y2
	coeff.opg3txtX3.value = X3
	coeff.opg3txtY3.value = Y3
	coeff.opg3txtX4.value = X4
	coeff.opg3txtY4.value = Y4
	}

document.all.invul.style.display= "";
}


function nieuwoef()
{
coeff.opg1txtX1.value = ""
coeff.opg1txtY1.value = ""
coeff.opg1txtX2.value = ""
coeff.opg1txtY2.value = ""
coeff.opg2txtX1.value = ""
coeff.opg2txtY1.value = ""
coeff.opg2txtR.value = ""
coeff.opg3txtX2.value = ""
coeff.opg3txtY2.value = ""
coeff.opg3txtX3.value = ""
coeff.opg3txtY3.value = ""
coeff.opg3txtX4.value = ""
coeff.opg3txtY4.value = ""
coeff.txtA.value = ""
coeff.txtB.value = ""
coeff.txtC.value = ""
document.all.opg1.style.display= "none";
document.all.opg2.style.display= "none";
document.all.opg3.style.display= "none";
document.all.invul.style.display= "none";
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
	var antwA = coeff.txtA.value 
	var antwB = coeff.txtB.value 
	var antwC = coeff.txtC.value 
	if ((antwA == "") || (antwB == "") || (antwC == "")) alert('Geef a.u.b. alle coëfficiënten in (geef desnoods nul in).')
	else
		{
		pogingenteller++
		if ((antwA == A) && (antwB == B) && (antwC == C))
				{
				coeff.opl.src = "../images/goed.gif";
				oplossingenteller++;
				antwoordjuist = 1
				}
			else 
				{
				if (antwA != A) foutenteller = 1
				else foutenteller = 0
				if (antwB != B) foutenteller = foutenteller + 2
				if (antwC != C) foutenteller = foutenteller + 4
				if (foutenteller == 1) alert('De coëfficiënt voor x is fout, de andere twee zijn goed.')
				if (foutenteller == 2) alert('De coëfficiënt voor y is fout, de andere twee zijn goed.')
				if (foutenteller == 3) alert('De coëfficiënten voor x en y zijn beide fout.')
				if (foutenteller == 4) alert('De constante term is fout, de coëfficiënten voor x en y zijn goed.')				
				if (foutenteller == 5) alert('Enkel de coëfficiënt voor y is juist.')
				if (foutenteller == 6) alert('Enkel de coëfficiënt voor x is juist.')
				if (foutenteller == 7) alert('Helaas, je hebt niets juist ingevuld.')

				coeff.opl.src = "../images/fout.gif";
				}
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  

}

