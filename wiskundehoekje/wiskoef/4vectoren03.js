var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var X1 = 0
var X2 = 0
var Y1 = 0
var Y2 = 0
var X3 = 0
var X4 = 0
var Y3 = 0
var Y4 = 0
var X = 0
var Y = 0
var sp = 0
var N = 0
var V = 0

function kiesgetallen()
{
X1 = (Math.floor(Math.random() * 20 ) - 9);
Y1 = (Math.floor(Math.random() * 20 ) - 9);
X2 = (Math.floor(Math.random() * 20 ) - 9);
Y2 = (Math.floor(Math.random() * 20 ) - 9);
X3 = (Math.floor(Math.random() * 20 ) - 9);
Y3 = (Math.floor(Math.random() * 20 ) - 9);
X4 = (Math.floor(Math.random() * 20 ) - 9);
Y4 = (Math.floor(Math.random() * 20 ) - 9);
 
if (typeoefening == 1)
	{
	sp = X1 * X2 + Y1 * Y2
	}
	
if (typeoefening == 2)
	{
	sp = X1 * X2 + Y1 * Y2
	}

if (typeoefening == 3)
	{
	sp = (X2 - X1) * (X4 - X3) + (Y2 - Y1) * (Y4 - Y3)  
	}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1
typevariatie = Math.floor(Math.random() * 4) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.all.oef1.style.display = ""
	coeff.txt1X1.value = X1
	coeff.txt1Y1.value = Y1
	coeff.txt1X2.value = X2
	coeff.txt1Y2.value = Y2
	}

if (typeoefening == 2)
	{
	document.all.oef2.style.display = ""
	if (typevariatie%4 == 0)
		{
		coeff.txt2Y1.value = Y1
		coeff.txt2X2.value = X2
		coeff.txt2Y2.value = Y2
		coeff.txt2sp.value = sp
		}
	if (typevariatie%4 == 1)
		{
		coeff.txt2X1.value = X1
		coeff.txt2X2.value = X2
		coeff.txt2Y2.value = Y2
		coeff.txt2sp.value = sp
		}
	if (typevariatie%4 == 2)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y1.value = Y1
		coeff.txt2Y2.value = Y2
		coeff.txt2sp.value = sp
		}
	if (typevariatie%4 == 3)
		{
		coeff.txt2X1.value = X1
		coeff.txt2Y1.value = Y1
		coeff.txt2X2.value = X2
		coeff.txt2sp.value = sp
		}
	}

if (typeoefening == 3)
	{
	document.all.oef3.style.display = ""
	coeff.txt3X1.value = X1
	coeff.txt3Y1.value = Y1
	coeff.txt3X2.value = X2
	coeff.txt3Y2.value = Y2
	coeff.txt3X3.value = X3
	coeff.txt3Y3.value = Y3
	coeff.txt3X4.value = X4
	coeff.txt3Y4.value = Y4
	}

}


function nieuwoef()
{
algemaakt = 0
coeff.opl.src = "../images/vraagteken.gif"
document.all.oef1.style.display = "none"
document.all.oef2.style.display = "none"
document.all.oef3.style.display = "none"
document.coeff.txt1X1.value = "";
document.coeff.txt1Y1.value = "";
document.coeff.txt1X2.value = "";
document.coeff.txt1Y2.value = "";
document.coeff.txt1sp.value = "";
document.coeff.txt2X1.value = "";
document.coeff.txt2Y1.value = "";
document.coeff.txt2X2.value = "";
document.coeff.txt2Y2.value = "";
document.coeff.txt2sp.value = "";
document.coeff.txt3X1.value = "";
document.coeff.txt3Y1.value = "";
document.coeff.txt3X2.value = "";
document.coeff.txt3Y2.value = "";
document.coeff.txt3X3.value = "";
document.coeff.txt3Y3.value = "";
document.coeff.txt3X4.value = "";
document.coeff.txt3Y4.value = "";
document.coeff.txt3sp.value = "";
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
		if (coeff.txt1sp.value == "") alert('Geef a.u.b. het scalair product van de vectoren in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt1sp.value) == sp)
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
		if ((coeff.txt2X1.value == "") || (coeff.txt2Y1.value == "") || (coeff.txt2X2.value == "") || (coeff.txt2Y2.value == "") || (coeff.txt2sp.value == "")) alert('Geef de ontbrekende coördinaat in.') 
		else
			{
			pogingenteller++
			if ((eval(coeff.txt2X1.value) == X1) && (eval(coeff.txt2Y1.value) == Y1) && (eval(coeff.txt2X2.value) == X2) && (eval(coeff.txt2Y2.value) == Y2) && (coeff.txt2sp.value == sp))
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 3)
		{
		if (coeff.txt3sp.value == "") alert('Geef a.u.b. het scalair product van de vectoren in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt3sp.value) == sp)
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
