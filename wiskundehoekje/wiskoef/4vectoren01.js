var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var X1 = 0
var X2 = 0
var Y1 = 0
var Y2 = 0
var X = 0
var Y = 0
var A = 0
var B = 0
var txtA = ""
var txtB = ""

function kiesgetallen()
{
X1 = (Math.floor(Math.random() * 20 ) - 9);
X2 = (Math.floor(Math.random() * 20 ) - 9);
Y1 = (Math.floor(Math.random() * 20 ) - 9);
Y2 = (Math.floor(Math.random() * 20 ) - 9);
A = 0
B = 0
while (A == 0) A = (Math.floor(Math.random() * 10 ) - 4);
while (B == 0) B = (Math.floor(Math.random() * 10 ) - 4);
txtA = A
if (B > 0) txtB = "+" + B
if (B < 0) txtB = B
 
if (typeoefening == 1)
	{
	X = X2 - X1
	Y = Y2 - Y1
	}

if (typeoefening == 2)
	{
	X = A * X1 + B * X2
	Y = A * Y1 + B * Y2
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
typevariatie = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.all.oef1.style.display = ""
	if (typevariatie == 1)
		{
		coeff.txt1X1.value = X1
		coeff.txt1Y1.value = Y1
		coeff.txt1X2.value = X2
		coeff.txt1Y2.value = Y2
		}
	if (typevariatie == 2)
		{
		coeff.txt1X1.value = X1
		coeff.txt1Y1.value = Y1
		coeff.txt1X.value = X
		coeff.txt1Y.value = Y
		}
	if (typevariatie == 3)
		{
		coeff.txt1X1.value = X1
		coeff.txt1Y2.value = Y2
		coeff.txt1X2.value = X2
		coeff.txt1Y.value = Y
		}
	if (typevariatie == 4)
		{
		coeff.txt1X1.value = X1
		coeff.txt1Y2.value = Y2
		coeff.txt1X.value = X
		coeff.txt1Y.value = Y
		}
	if (typevariatie == 5)
		{
		coeff.txt1Y1.value = Y1
		coeff.txt1X2.value = X2
		coeff.txt1Y2.value = Y2
		coeff.txt1X.value = X
		}
	if (typevariatie == 6)
		{
		coeff.txt1X2.value = X2
		coeff.txt1Y2.value = Y2
		coeff.txt1X.value = X
		coeff.txt1Y.value = Y
		}
	}

if (typeoefening == 2)
	{
	document.all.oef2.style.display = ""
	if (typevariatie == 1)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y1.value = Y1
		coeff.txt2X2.value = X2
		coeff.txt2Y2.value = Y2
		coeff.txtA.value = txtA
		coeff.txtB.value = txtB
		}
	if (typevariatie == 2)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y1.value = Y1
		coeff.txt2X.value = X
		coeff.txt2Y.value = Y
		coeff.txtA.value = txtA
		coeff.txtB.value = txtB
		}
	if (typevariatie == 3)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y2.value = Y2
		coeff.txt2X2.value = X2
		coeff.txt2Y.value = Y
		coeff.txtA.value = txtA
		coeff.txtB.value = txtB
		}
	if (typevariatie == 4)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y2.value = Y2
		coeff.txt2X.value = X
		coeff.txt2Y.value = Y
		coeff.txtA.value = txtA
		coeff.txtB.value = txtB
		}
	if (typevariatie == 5)
		{
		coeff.txt2X1.value = X1
		coeff.txt2X2.value = X2
		coeff.txt2Y2.value = Y2
		coeff.txt2X.value = X
		coeff.txt2Y.value = Y
		coeff.txtB.value = txtB
		}
	if (typevariatie == 6)
		{
		coeff.txt2Y1.value = Y1
		coeff.txt2X2.value = X2
		coeff.txt2Y2.value = Y2
		coeff.txt2X.value = X
		coeff.txt2Y.value = Y
		coeff.txtA.value = txtA
		}
	
	}

}


function nieuwoef()
{
algemaakt = 0
coeff.opl.src = "../images/vraagteken.gif"
document.all.oef1.style.display = "none"
document.all.oef2.style.display = "none"
document.coeff.txt1X1.value = "";
document.coeff.txt1Y1.value = "";
document.coeff.txt1X2.value = "";
document.coeff.txt1Y2.value = "";
document.coeff.txt1X.value = "";
document.coeff.txt1Y.value = "";
document.coeff.txt2X1.value = "";
document.coeff.txt2Y1.value = "";
document.coeff.txt2X2.value = "";
document.coeff.txt2Y2.value = "";
document.coeff.txt2X.value = "";
document.coeff.txt2Y.value = "";
document.coeff.txtA.value = "";
document.coeff.txtB.value = "";
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening')
else
	{
	if (typeoefening == 1)
		{
		if ((coeff.txt1X1.value == "") || (coeff.txt1Y1.value == "") || (coeff.txt1X2.value == "") || (coeff.txt1Y2.value == "") || (coeff.txt1X.value == "") || (coeff.txt1Y.value == "")) alert('Geef alle ontbrekende coördinaten in.') 
		else
			{
			pogingenteller++
			if ((coeff.txt1X1.value == X1) && (coeff.txt1Y1.value == Y1) && (coeff.txt1X2.value == X2) && (coeff.txt1Y2.value == Y2) && (coeff.txt1X.value == X) && (coeff.txt1Y.value == Y))
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 2)
		{
		if ((coeff.txt2X1.value == "") || (coeff.txt2Y1.value == "") || (coeff.txt2X2.value == "") || (coeff.txt2Y2.value == "") || (coeff.txtA.value == "") || (coeff.txtB.value == "") || (coeff.txt2X.value == "") || (coeff.txt2Y.value == "")) alert('Geef alle ontbrekende coördinaten in.') 
		else
			{
			pogingenteller++
			if ((coeff.txt2X1.value == X1) && (coeff.txt2Y1.value == Y1) && (coeff.txt2X2.value == X2) && (coeff.txt2Y2.value == Y2) && (eval(coeff.txtA.value) == A) && (eval(coeff.txtB.value) == B) && (coeff.txt2X.value == X) && (coeff.txt2Y.value == Y))
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}

}
