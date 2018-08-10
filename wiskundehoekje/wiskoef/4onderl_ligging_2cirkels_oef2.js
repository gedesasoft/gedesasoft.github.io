var pogingenteller = 0
var oplossingenteller = 0
var aljuist = 0
var oplossing = "";
var typevariatie = 0;
var typeoefening = 0;
var A = 0
var B = 0
var aantalsnijp = 0

var Acirkel1 = 0
var Bcirkel1 = 0
var Ccirkel1 = 0
var Acirkel2 = 0
var Bcirkel2 = 0
var Ccirkel2 = 0
var X1 = 0
var X2 = 0
var X3 = 0
var X4 = 0
var X5 = 0
var Y1 = 0
var Y2 = 0
var Y3 = 0
var Y4 = 0
var Y5 = 0
var M = 0
var N = 0
var P = 0
var vglc1 = ""
var vglc2 = ""
var algemaakt = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 5) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function kiesgetallen()
{
X1 = Math.floor(Math.random() * 20) - 9;
Y1 = Math.floor(Math.random() * 20) - 9;
A = Math.floor(Math.random() * 3) + 2
B = Math.floor(Math.random() * 3) + 2

M = Math.floor(Math.random() * 3) + 2;
N = M + Math.floor(Math.random() * 3) + 1;
P = Math.floor(Math.random() * 3) + 1;

X2 = X1 + N * A
Y2 = Y1 + N * B

X3 = X1 + M*A + B*P
Y3 = Y1 + M*B - A*P

X4 = X1 + M*A - B*P
Y4 = Y1 + M*B + A*P

X5 = X1 + M*A
Y5 = Y1 + M*B

if (typeoefening == 1)
	{
	oplossing = "buit"
	aantalsnijp = 0
	Acirkel1 = 0 - 2 * X1
	Bcirkel1 = 0 - 2 * Y1
	Ccirkel1 = 2 * X1 * X5 + 2 * Y1 * Y5 - X5 * X5 - Y5 * Y5 + Math.floor(Math.random() * 4) + 5;

	Acirkel2 = 0 - 2 * X2
	Bcirkel2 = 0 - 2 * Y2
	Ccirkel2 = 2 * X5 * X2 + 2 * Y5 * Y2 - X5 * X5 - Y5 * Y5
	}

if (typeoefening == 2)
	{
	oplossing = "uitw"
	aantalsnijp = 1
	Acirkel1 = 0 - 2 * X1
	Bcirkel1 = 0 - 2 * Y1
	Ccirkel1 = 2 * X1 * X5 + 2 * Y1 * Y5 - X5 * X5 - Y5 * Y5

	Acirkel2 = 0 - 2 * X2
	Bcirkel2 = 0 - 2 * Y2
	Ccirkel2 = 2 * X5 * X2 + 2 * Y5 * Y2 - X5 * X5 - Y5 * Y5
	}

if (typeoefening == 3)
	{
	oplossing = "sn"
	aantalsnijp = 2
	Acirkel1 = 0 - 2 * X1
	Bcirkel1 = 0 - 2 * Y1
	Ccirkel1 = 2 * X1 * X3 + 2 * Y1 * Y3 - X3 * X3 - Y3 * Y3

	Acirkel2 = 0 - 2 * X2
	Bcirkel2 = 0 - 2 * Y2
	Ccirkel2 = 2 * X3 * X2 + 2 * Y3 * Y2 - X3 * X3 - Y3 * Y3
	}

if (typeoefening == 4)
	{
	oplossing = "inw"
	aantalsnijp = 1
	Acirkel1 = 0 - 2 * X1
	Bcirkel1 = 0 - 2 * Y1
	Ccirkel1 = 2 * X1 * X2 + 2 * Y1 * Y2 - X2 * X2 - Y2 * Y2

	Acirkel2 = 0 - 2 * X5
	Bcirkel2 = 0 - 2 * Y5
	Ccirkel2 = 2 * X2 * X5 + 2 * Y5 * Y2 - X2 * X2 - Y2 * Y2
	}

if (typeoefening == 5)
	{
	oplossing = "binn"
	aantalsnijp = 0
	Acirkel1 = 0 - 2 * X1
	Bcirkel1 = 0 - 2 * Y1
	Ccirkel1 = 2 * X1 * X2 + 2 * Y1 * Y2 - X2 * X2 - Y2 * Y2 - (Math.floor(Math.random() * 25) + 25)

	Acirkel2 = 0 - 2 * X5
	Bcirkel2 = 0 - 2 * Y5
	Ccirkel2 = 2 * X2 * X5 + 2 * Y5 * Y2 - X2 * X2 - Y2 * Y2
	}

}

function toonoef()
{
vglc1 = "x² + y² "
if (Acirkel1 == 1) vglc1 = vglc1 + "+ x "
if (Acirkel1 == -1) vglc1 = vglc1 + "- x "
if (Acirkel1 > 1) vglc1 = vglc1 + "+ " + Math.abs(Acirkel1) + "x "
if (Acirkel1 < -1) vglc1 = vglc1 + "- " + Math.abs(Acirkel1) + "x "

if (Bcirkel1 == 1) vglc1 = vglc1 + "+ y "
if (Bcirkel1 == -1) vglc1 = vglc1 + "- y "
if (Bcirkel1 > 1) vglc1 = vglc1 + "+ " + Math.abs(Bcirkel1) + "y "
if (Bcirkel1 < -1) vglc1 = vglc1 + "- " + Math.abs(Bcirkel1) + "y "

if (Ccirkel1 > 0) vglc1 = vglc1 + "+ " + Math.abs(Ccirkel1) + " "
if (Ccirkel1 < 0) vglc1 = vglc1 + "- " + Math.abs(Ccirkel1) + " "

vglc1 += "= 0"

vglc2 = "x² + y² "
if (Acirkel2 == 1) vglc2 = vglc2 + "+ x "
if (Acirkel2 == -1) vglc2 = vglc2 + "- x "
if (Acirkel2 > 1) vglc2 = vglc2 + "+ " + Math.abs(Acirkel2) + "x "
if (Acirkel2 < -1) vglc2 = vglc2 + "- " + Math.abs(Acirkel2) + "x "

if (Bcirkel2 == 1) vglc2 = vglc2 + "+ y "
if (Bcirkel2 == -1) vglc2 = vglc2 + "- y "
if (Bcirkel2 > 1) vglc2 = vglc2 + "+ " + Math.abs(Bcirkel2) + "y "
if (Bcirkel2 < -1) vglc2 = vglc2 + "- " + Math.abs(Bcirkel2) + "y "

if (Ccirkel2 > 0) vglc2 = vglc2 + "+ " + Math.abs(Ccirkel2) + " "
if (Ccirkel2 < 0) vglc2 = vglc2 + "- " + Math.abs(Ccirkel2) + " "

vglc2 += "= 0"

if (typevariatie == 1)
	{
	document.cirkels.txtc1.value = vglc1;
	document.cirkels.txtc2.value = vglc2;
	} 
if (typevariatie == 2)
	{
	document.cirkels.txtc1.value = vglc2;
	document.cirkels.txtc2.value = vglc1;
	}
}


function nieuwoef()
{
aljuist = 0
algemaakt = 0
oplossing = "";
document.cirkels.txtc1.value = "";
document.cirkels.txtc2.value = "";
document.cirkels.keuzenp.options.value = "x"
document.cirkels.enigeoplx.value = "";
document.cirkels.enigeoply.value = "";
document.cirkels.oplx1.value = "";
document.cirkels.oply1.value = "";
document.cirkels.oplx2.value = "";
document.cirkels.oply2.value = "";
document.all.Dnul.style.display= "none";
document.all.Dpos.style.display= "none";
document.cirkels.opl.src="../images/vraagteken.gif"
document.cirkels.oplnp.src="../images/vraagteken.gif"
document.cirkels.opl2.src="../images/vraagteken.gif"
document.cirkels.type.options.value ="opnieuw"
kiesoef()
kiesgetallen()
kiesvariatie()
toonoef()
}


function controleer() 
{
if (aljuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	var antwoord = document.cirkels.type.options[document.cirkels.type.selectedIndex].value;

	if (antwoord == "opnieuw") cirkels.opl.src = "../images/vraagteken.gif"
	else
		{
		pogingenteller++
		if (oplossing == antwoord) 
			{
			cirkels.opl2.src = "../images/goed.gif"
			oplossingenteller++
			aljuist = 1
			}
		else cirkels.opl2.src = "../images/fout.gif";
			
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.cirkels.aantaljuist.value = oplossingenteller
		document.cirkels.aantalpogingen.value = pogingenteller
		document.cirkels.percentage.value = procent
		}		
	}
}

function wijzignp()
{
var aantalnp = document.cirkels.keuzenp.options[document.cirkels.keuzenp.selectedIndex].value;

if (aantalnp == "x") 
	{
	cirkels.oplnp.src = "../images/vraagteken.gif" 
	document.all.Dnul.style.display= "none";
	document.all.Dpos.style.display= "none";
	}
if (aantalnp == "0") 
	{
	if (aantalnp == aantalsnijp)
		{
		pogingenteller++
		oplossingenteller++
		cirkels.oplnp.src = "../images/goed.gif" 
		cirkels.opl.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "none";
		}
	else 
		{
		cirkels.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}

if (aantalnp == "1") 
	{
	if (aantalnp == aantalsnijp)
		{
		pogingenteller++
		oplossingenteller++
		cirkels.oplnp.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "";
		document.all.Dpos.style.display= "none";
		}
	else 
		{
		cirkels.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}

if (aantalnp == "2") 
	{
	if (aantalnp == aantalsnijp)
		{
		pogingenteller++
		oplossingenteller++
		cirkels.oplnp.src = "../images/goed.gif" 
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "";
		}
	else 
		{
		cirkels.oplnp.src = "../images/fout.gif"
		pogingenteller++
		} 
	}
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.cirkels.aantaljuist.value = oplossingenteller
		document.cirkels.aantalpogingen.value = pogingenteller
		document.cirkels.percentage.value = procent		

}

function controle()
{
var aantalnp = document.cirkels.keuzenp.options[document.cirkels.keuzenp.selectedIndex].value;
if (aantalnp == "x") alert('Geef eerst het aantal snijpunten in!')
else 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening')
else
{
if (aantalsnijp == 1)
	{
	if ((cirkels.enigeoplx.value == "") || (cirkels.enigeoply.value == "")) alert('Geef de coördinaten van het raakpunt in.')
	else
	{
	pogingenteller++
	if (typeoefening == 2)
		{
		if ((cirkels.enigeoplx.value == X5) && (cirkels.enigeoply.value == Y5)) 
			{
			oplossingenteller++
			cirkels.opl.src = "../images/goed.gif"
			algemaakt = 1
			} 
		else cirkels.opl.src = "../images/fout.gif" 
		}
	if (typeoefening == 4)
		{
		if ((cirkels.enigeoplx.value == X2) && (cirkels.enigeoply.value == Y2)) 
			{
			oplossingenteller++
			cirkels.opl.src = "../images/goed.gif"
			algemaakt = 1
			} 
		else cirkels.opl.src = "../images/fout.gif" 
		}
	}
	}

if (aantalsnijp == 2)
	{
	if ((cirkels.oplx1.value == "") || (cirkels.oplx2.value == "") || (cirkels.oply1.value == "") || (cirkels.oply2.value == "")) alert('Geef van beide snijpunten de coördinaten in.')
	else
	{
	pogingenteller++
	if (((cirkels.oplx1.value == X4) && (cirkels.oplx2.value == X3) && (cirkels.oply1.value == Y4) && (cirkels.oply2.value == Y3)) || ((cirkels.oply1.value == Y3) && (cirkels.oply2.value == Y4) && (cirkels.oplx1.value == X3) && (cirkels.oplx2.value == X4))) 
		{
		oplossingenteller++
		cirkels.opl.src = "../images/goed.gif"
		algemaakt = 1
		} 
	else cirkels.opl.src = "../images/fout.gif"
	}
	}
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.cirkels.aantaljuist.value = oplossingenteller
	document.cirkels.aantalpogingen.value = pogingenteller
	document.cirkels.percentage.value = procent		
}
}	
}


