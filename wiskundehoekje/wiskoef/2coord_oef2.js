var oplossingenteller = 0
var pogingenteller = 0
var aljuist = 0
var typeoefening = 0
var typevariatie = 0

var X = 0
var Y = 0

var hoogteboven = 0
var lengtelinks = 0
var lengterechts = 0
var hoogteonder = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function nieuwoef()
{
aljuist = 0
document.opl1.src = "../images/vraagteken.gif"
document.opl2.src = "../images/vraagteken.gif"
document.co.X1.value= ""
document.co.Y1.value= ""
document.co.X2.value= ""
document.co.Y2.value= ""
document.all.opg1.style.display= "none";
document.all.opg2.style.display= "none";
kiesoef()
kiesvariatie()
kiesgetallen()
toonoef()
}

function kiesgetal(onder, boven)
{
return (Math.floor(Math.random() * (boven - onder)) + onder)
}

function kiesgetallen()
{
X = kiesgetal(-14,14) / 2
Y = kiesgetal(-10,10) / 2
lengtelinks = 38 * X + 278
lengterechts = 568 - 7 - lengtelinks
hoogteboven = -36 * Y + 199
hoogteonder = 397 - 7 - hoogteboven 
}

function toonoef()
{
document.all.boven.height = hoogteboven
document.all.onder.height = hoogteonder
document.all.links.width = lengtelinks
document.all.rechts.width = lengterechts
if (typeoefening == 1)
	{
	document.all.opg1.style.display= "";
	document.all.punt.src = "images/2coord_oef2_punt.gif"
	}
if (typeoefening == 2)
	{
	document.all.opg2.style.display= "";
	document.all.punt.src = "images/leeg.gif"
	if ((typevariatie == 1) && (Math.floor(X) != X))
		{ 
		document.co.X2.value = 2 * X + "/2"
		}
	else document.co.X2.value = X

	if ((typevariatie == 1) && (Math.floor(Y) != Y))
		{ 
		document.co.Y2.value = 2 * Y + "/2"
		}
	else document.co.Y2.value = Y
	}
}

function controle1()
{
if (aljuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	var antwX = document.co.X1.value
	var antwY = document.co.Y1.value
	if ((antwX == "") && (antwY == "")) alert('Vul beide coördinaten in a.u.b.')
	else
		{
		pogingenteller++
		if ((eval(antwX) == X) && (eval(antwY) == Y))
			{
			oplossingenteller++
			document.opl1.src = "../images/goed.gif"
			aljuist = 1
			}
		else 
			{
			document.opl1.src = "../images/fout.gif"
			if (eval(antwX) == X) alert('De x-coördinaat is al juist.') 
			if (eval(antwY) == Y) alert('De y-coördinaat is al juist.') 
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.co.aantaljuist.value = oplossingenteller
		document.co.aantalpogingen.value = pogingenteller
		document.co.percentage.value = procent		
		}
	}
}

function controle2goed()
{
if (typeoefening == 2)
{
if (aljuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	pogingenteller++
	oplossingenteller++
	document.punt.src = "images/2coord_oef2_punt.gif"
	document.opl2.src = "../images/goed.gif"
	aljuist = 1
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.co.aantaljuist.value = oplossingenteller
	document.co.aantalpogingen.value = pogingenteller
	document.co.percentage.value = procent		
	}
}
}

function controle2mis()
{
if (typeoefening == 2)
{
if (aljuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	pogingenteller++
	document.opl2.src = "../images/fout.gif"
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.co.aantaljuist.value = oplossingenteller
	document.co.aantalpogingen.value = pogingenteller
	document.co.percentage.value = procent		
	}
}
}


