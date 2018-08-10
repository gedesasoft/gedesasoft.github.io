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
var norm = 0
var N = 0
var V = 0

function kiesgetallen()
{
N = Math.floor(Math.random() * 9 ) + 1;
V = Math.floor(Math.random() * 6 ) + 1;
X = (Math.floor(Math.random() * 20 ) - 9);
Y = (Math.floor(Math.random() * 20 ) - 9);
 
if (typeoefening == 1)
	{
	if (typevariatie == 1) 
		{
		X1 = V * N;
		Y1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 2) 
		{
		Y1 = V * N;
		X1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 3) 
		{
		X1 = (0 - V) * N;
		Y1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 4) 
		{
		X1 = V * N;
		Y1 = (0 - V) * (N * N - 1) / 2;
		}
	if (typevariatie == 5) 
		{
		Y1 = V * N;
		X1 = (0 - V) * (N * N - 1) / 2;
		}
	if (typevariatie == 6) 
		{
		Y1 = (0 - V) * N;
		X1 = (0 - V) * (N * N - 1) / 2;
		}
	norm = V * (N * N + 1) / 2;
	}
	
if (typeoefening == 2)
	{
	if (typevariatie%2 == 1) 
		{
		X1 = V * N;
		Y1 = V * (N * N - 1) / 2;
		}
	else 
		{
		Y1 = V * N;
		X1 = V * (N * N - 1) / 2;
		}
	norm = V * (N * N + 1) / 2;
	}

if (typeoefening == 3)
	{
	if (typevariatie == 1) 
		{
		X1 = V * N;
		Y1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 2) 
		{
		Y1 = V * N;
		X1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 3) 
		{
		X1 = (0 - V) * N;
		Y1 = V * (N * N - 1) / 2;
		}
	if (typevariatie == 4) 
		{
		X1 = V * N;
		Y1 = (0 - V) * (N * N - 1) / 2;
		}
	if (typevariatie == 5) 
		{
		Y1 = V * N;
		X1 = (0 - V) * (N * N - 1) / 2;
		}
	if (typevariatie == 6) 
		{
		Y1 = (0 - V) * N;
		X1 = (0 - V) * (N * N - 1) / 2;
		}
	X2 = X + X1
	Y2 = Y + Y1
	norm = V * (N * N + 1) / 2;
	}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1
typevariatie = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.all.oef1.style.display = ""
	coeff.txt1X1.value = X1
	coeff.txt1Y1.value = Y1
	}

if (typeoefening == 2)
	{
	document.all.oef2.style.display = ""
	if (typevariatie%2 == 1)
		{
		coeff.txt2X1.value = X1
		coeff.txt2norm.value = norm
		}
	else
		{
		coeff.txt2Y1.value = Y1
		coeff.txt2norm.value = norm
		}
	}

if (typeoefening == 3)
	{
	document.all.oef3.style.display = ""
	coeff.txt3X1.value = X
	coeff.txt3Y1.value = Y
	coeff.txt3X2.value = X2
	coeff.txt3Y2.value = Y2
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
document.coeff.txt1norm.value = "";
document.coeff.txt2X1.value = "";
document.coeff.txt2Y1.value = "";
document.coeff.txt2norm.value = "";
document.coeff.txt3X1.value = "";
document.coeff.txt3Y1.value = "";
document.coeff.txt3X2.value = "";
document.coeff.txt3Y2.value = "";
document.coeff.txt3norm.value = "";
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
		if (coeff.txt1norm.value == "") alert('Geef a.u.b. de norm van de vector in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt1norm.value) == norm)
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
		if ((coeff.txt2X1.value == "") || (coeff.txt2Y1.value == "") || (coeff.txt2norm.value == "")) alert('Geef de ontbrekende coördinaat in.') 
		else
			{
			pogingenteller++
			if (((eval(coeff.txt2X1.value) == X1) || (eval(coeff.txt2X1.value) == -X1)) && ((eval(coeff.txt2Y1.value) == Y1) || (eval(coeff.txt2Y1.value) == -Y1)) && (coeff.txt2norm.value == norm))
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
		if (coeff.txt3norm.value == "") alert('Geef a.u.b. de norm van de vector in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt3norm.value) == norm)
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
