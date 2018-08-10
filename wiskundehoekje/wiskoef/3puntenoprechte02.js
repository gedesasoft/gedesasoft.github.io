var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var algemaakt = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var M = 0
var Q = 0
var oplossing = ""
var anwt = ""

function kiesgetallen()
{
	X1 = Math.floor(Math.random() * 20) - 10;
	X2 = X1
	X3 = X1
	while (X1 == X2) X2 = Math.floor(Math.random() * 20) - 10;
	while ((X1 == X3) || (X2 == X3)) X3 = Math.floor(Math.random() * 20) - 10;
	M = 0
	while (M == 0) M = Math.floor(Math.random() * 16) - 8;
	Q = Math.floor(Math.random() * 16) - 8;

	Y1 = M * X1 + Q
	Y2 = M * X2 + Q
	Y3 = M * X3 + Q
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.coeff.txtX1.value = "p"
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = X3
	document.coeff.txtY3.value = Y3
	}
if (typeoefening == 2)
	{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = "p"
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = X3
	document.coeff.txtY3.value = Y3
	}
if (typeoefening == 3)
	{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = "p"
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = X3
	document.coeff.txtY3.value = Y3
	}
if (typeoefening == 4)
	{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = "p"
	document.coeff.txtX3.value = X3
	document.coeff.txtY3.value = Y3
	}
if (typeoefening == 5)
	{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = "p"
	document.coeff.txtY3.value = Y3
	}
if (typeoefening == 6)
	{
	document.coeff.txtX1.value = X1
	document.coeff.txtY1.value = Y1
	document.coeff.txtX2.value = X2
	document.coeff.txtY2.value = Y2
	document.coeff.txtX3.value = X3
	document.coeff.txtY3.value = "p"
	}

}


function nieuwoef()
{
document.coeff.opl.src = "../images/vraagteken.gif";
document.coeff.txtP.value="";
algemaakt = 0
kiesoef()
kiesgetallen()
toonoef()
}

function controle() 
{
if (algemaakt == 1) 
	{
	alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe opgave.')
	}
else
{
antw = document.coeff.txtP.value;

if (antw == "")
	{
	document.opl.src = "../images/vraagteken.gif"
	alert('Je hebt nog geen waarde voor p ingegeven!')
	}
else
	{
	pogingenteller++
	if (((typeoefening == 1) && (antw == X1)) || ((typeoefening == 2) && (antw == Y1)) || ((typeoefening == 3) && (antw == X2)) || ((typeoefening == 4) && (antw == Y2)) || ((typeoefening == 5) && (antw == X3)) || ((typeoefening == 6) && (antw == Y3)))
		{
		oplossingenteller++
		document.opl.src = "../images/goed.gif"		
		algemaakt = 1
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


