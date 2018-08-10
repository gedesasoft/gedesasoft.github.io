var aljuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var A = 0
var B = 0
var C = 0
var D = 0
var N = 0
var ng1 = 0
var ng2 = 0
var rest = 0
var eersteterm = ""
var verschil = ""
var ndetermteller = 0
var ndetermnoemer = 0
var ndeterm = ""
var somtermenteller = 0
var somtermennoemer = 0
var somtermen = ""
var factor = ""

function ggd(getal1, getal2)
{
ng1 = Math.abs(getal1);
ng2 = Math.abs(getal2);
rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}
}

function resetscore()
{
pogingenteller = 0
oplossingenteller = 0
document.oef.aantaljuist.value = ""
document.oef.aantalpogingen.value = ""
document.oef.percentage.value = ""		
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 10) + 1
}

function kiesgetallen()
{
A = (Math.floor(Math.random() * 20 ) - 10);
C = 0
while (C == 0) C = (Math.floor(Math.random() * 20 ) - 10);
N = (Math.floor(Math.random() * 27 ) + 4);

if (factor == "1")
	{
	B = 1;
	D = 1;
	}

if (factor == "2")
	{
	if (A%2 != 0) B = 2
	else
		{
		if (A%3 != 0) B = 3
		else
			{
			if (A%5 != 0) B = 5
			}
		}
	if (C%2 != 0) D = 2
	else
		{
		if (C%3 != 0) D = 3
		else
			{
			if (C%5 != 0) D = 5
			}
		}
	}

ndetermteller = A * D + (N - 1) * B * C
ndetermnoemer = B * D

somtermenteller = 2 * A * D * N + (N - 1) * B * C * N
somtermennoemer = 2 * B * D

}

function vereenvoudigbreuken()
{
if (B == 1) eersteterm = A + ""
else
eersteterm = A + "/" + B

if (D == 1) verschil = C + ""
else
verschil = C + "/" + D

ggd(ndetermteller, ndetermnoemer)

ndetermteller = ndetermteller / ng1
ndetermnoemer = ndetermnoemer / ng1

if (ndetermnoemer == 1) ndeterm = ndetermteller + ""
else
ndeterm = ndetermteller + "/" + ndetermnoemer

ggd(somtermenteller, somtermennoemer)

somtermenteller = somtermenteller / ng1
somtermennoemer = somtermennoemer / ng1

if (somtermennoemer == 1) somtermen = somtermenteller + ""
else
somtermen = somtermenteller + "/" + somtermennoemer
}

function nieuwoef()
{
factor = document.oef.kiesoef.options[document.oef.kiesoef.selectedIndex].value;
if (factor == "0") alert('Kies eerst een moeilijkheidsgraad!')
else
	{
	verbergoef()
	kiesgetallen()
	vereenvoudigbreuken()
	kiesoef()
	toonoef()
	}
}

function toonpercentage()
{
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.oef.aantaljuist.value = oplossingenteller
	document.oef.aantalpogingen.value = pogingenteller
	document.oef.percentage.value = procent		
}

function verbergoef()
{
document.all.oef1geg.style.display = "none"
document.all.oef1gevr.style.display = "none"
document.all.oef2geg.style.display = "none"
document.all.oef2gevr.style.display = "none"
document.all.oef3geg.style.display = "none"
document.all.oef3gevr.style.display = "none"
document.all.oef4geg.style.display = "none"
document.all.oef4gevr.style.display = "none"
document.all.oef5geg.style.display = "none"
document.all.oef5gevr.style.display = "none"
document.all.oef6geg.style.display = "none"
document.all.oef6gevr.style.display = "none"
document.all.oef7geg.style.display = "none"
document.all.oef7gevr.style.display = "none"
document.all.oef8geg.style.display = "none"
document.all.oef8gevr.style.display = "none"
document.all.oef9geg.style.display = "none"
document.all.oef9gevr.style.display = "none"
document.all.oef10geg.style.display = "none"
document.all.oef10gevr.style.display = "none"
}

function toonoef()
{
if (typeoefening == 1)
	{ 
	document.all.oef1geg.style.display = ""
	document.all.oef1gevr.style.display = ""
	document.oef.opl1.src = "../images/vraagteken.gif"
	document.oef.oef1geg1.value = eersteterm
	document.oef.oef1geg2.value = verschil
	document.oef.oef1geg3.value = N
	document.oef.oef1gevr1.value = ""
	document.oef.oef1gevr2.value = ""	
	}
if (typeoefening == 2)
	{ 
	document.all.oef2geg.style.display = ""
	document.all.oef2gevr.style.display = ""
	document.oef.opl2.src = "../images/vraagteken.gif"
	document.oef.oef2geg1.value = eersteterm
	document.oef.oef2geg2.value = ndeterm
	document.oef.oef2geg3.value = N
	document.oef.oef2gevr1.value = ""
	document.oef.oef2gevr2.value = ""	
	}
if (typeoefening == 3)
	{ 
	document.all.oef3geg.style.display = ""
	document.all.oef3gevr.style.display = ""
	document.oef.opl3.src = "../images/vraagteken.gif"
	document.oef.oef3geg1.value = eersteterm
	document.oef.oef3geg2.value = ndeterm
	document.oef.oef3geg3.value = somtermen
	document.oef.oef3gevr1.value = ""
	document.oef.oef3gevr2.value = ""	
	}
if (typeoefening == 4)
	{ 
	document.all.oef4geg.style.display = ""
	document.all.oef4gevr.style.display = ""
	document.oef.opl4.src = "../images/vraagteken.gif"
	document.oef.oef4geg1.value = eersteterm
	document.oef.oef4geg2.value = verschil
	document.oef.oef4geg3.value = ndeterm
	document.oef.oef4gevr1.value = ""
	document.oef.oef4gevr2.value = ""	
	}
if (typeoefening == 5)
	{ 
	document.all.oef5geg.style.display = ""
	document.all.oef5gevr.style.display = ""
	document.oef.opl5.src = "../images/vraagteken.gif"
	document.oef.oef5geg1.value = verschil
	document.oef.oef5geg2.value = N
	document.oef.oef5geg3.value = ndeterm
	document.oef.oef5gevr1.value = ""
	document.oef.oef5gevr2.value = ""	
	}
if (typeoefening == 6)
	{ 
	document.all.oef6geg.style.display = ""
	document.all.oef6gevr.style.display = ""
	document.oef.opl6.src = "../images/vraagteken.gif"
	document.oef.oef6geg1.value = eersteterm
	document.oef.oef6geg2.value = N
	document.oef.oef6geg3.value = somtermen
	document.oef.oef6gevr1.value = ""
	document.oef.oef6gevr2.value = ""	
	}
if (typeoefening == 7)
	{ 
	document.all.oef7geg.style.display = ""
	document.all.oef7gevr.style.display = ""
	document.oef.opl7.src = "../images/vraagteken.gif"
	document.oef.oef7geg1.value = eersteterm
	document.oef.oef7geg2.value = verschil
	document.oef.oef7geg3.value = somtermen
	document.oef.oef7gevr1.value = ""
	document.oef.oef7gevr2.value = ""	
	}
if (typeoefening == 8)
	{ 
	document.all.oef8geg.style.display = ""
	document.all.oef8gevr.style.display = ""
	document.oef.opl8.src = "../images/vraagteken.gif"
	document.oef.oef8geg1.value = verschil
	document.oef.oef8geg2.value = N
	document.oef.oef8geg3.value = somtermen
	document.oef.oef8gevr1.value = ""
	document.oef.oef8gevr2.value = ""	
	}
if (typeoefening == 9)
	{ 
	document.all.oef9geg.style.display = ""
	document.all.oef9gevr.style.display = ""
	document.oef.opl9.src = "../images/vraagteken.gif"
	document.oef.oef9geg1.value = verschil
	document.oef.oef9geg2.value = ndeterm
	document.oef.oef9geg3.value = somtermen
	document.oef.oef9gevr1.value = ""
	document.oef.oef9gevr2.value = ""	
	}
if (typeoefening == 10)
	{ 
	document.all.oef10geg.style.display = ""
	document.all.oef10gevr.style.display = ""
	document.oef.opl10.src = "../images/vraagteken.gif"
	document.oef.oef10geg1.value = N
	document.oef.oef10geg2.value = ndeterm
	document.oef.oef10geg3.value = somtermen
	document.oef.oef10gevr1.value = ""
	document.oef.oef10gevr2.value = ""	
	}
}

function controle1()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef1gevr1.value
var antwoord2 = document.oef.oef1gevr2.value

if ((antwoord1 == ndeterm) && (antwoord2 == somtermen)) 
	{
	oef.opl1.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != ndeterm) 
	{
	alert("De n-de term is " + ndeterm + " !");
	oef.opl1.src = "../images/fout.gif";
	}
if (antwoord2 != somtermen) 
	{
	alert("De som van de termen is " + somtermen + " !");
	oef.opl1.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle2()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef2gevr1.value
var antwoord2 = document.oef.oef2gevr2.value

if ((antwoord1 == verschil) && (antwoord2 == somtermen)) 
	{
	oef.opl2.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != verschil) 
	{
	alert("Het verschil is " + verschil + " !");
	oef.opl2.src = "../images/fout.gif";
	}
if (antwoord2 != somtermen) 
	{
	alert("De som van de termen is " + somtermen + " !");
	oef.opl2.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle3()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef3gevr1.value
var antwoord2 = document.oef.oef3gevr2.value

if ((antwoord1 == verschil) && (antwoord2 == N)) 
	{
	oef.opl3.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != verschil) 
	{
	alert("Het verschil is " + verschil + " !");
	oef.opl3.src = "../images/fout.gif";
	}
if (antwoord2 != N) 
	{
	alert("Het aantal termen is " + N + " !");
	oef.opl3.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle4()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef4gevr1.value
var antwoord2 = document.oef.oef4gevr2.value

if ((antwoord1 == N) && (antwoord2 == somtermen)) 
	{
	oef.opl4.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != N) 
	{
	alert("Het aantal termen is " + N + " !");
	oef.opl4.src = "../images/fout.gif";
	}
if (antwoord2 != somtermen) 
	{
	alert("De som van de termen is " + somtermen + " !");
	oef.opl4.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle5()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef5gevr1.value
var antwoord2 = document.oef.oef5gevr2.value

if ((antwoord1 == eersteterm) && (antwoord2 == somtermen)) 
	{
	oef.opl5.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != eersteterm) 
	{
	alert("De eerste term is " + eersteterm + " !");
	oef.opl5.src = "../images/fout.gif";
	}
if (antwoord2 != somtermen) 
	{
	alert("De som van de termen is " + somtermen + " !");
	oef.opl5.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle6()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef6gevr1.value
var antwoord2 = document.oef.oef6gevr2.value

if ((antwoord1 == verschil) && (antwoord2 == ndeterm)) 
	{
	oef.opl6.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != verschil) 
	{
	alert("Het verschil is " + verschil + " !");
	oef.opl6.src = "../images/fout.gif";
	}
if (antwoord2 != ndeterm) 
	{
	alert("De n-de term is " + ndeterm + " !");
	oef.opl6.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle7()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef7gevr1.value
var antwoord2 = document.oef.oef7gevr2.value

if ((antwoord1 == N) && (antwoord2 == ndeterm)) 
	{
	oef.opl7.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != N) 
	{
	alert("Het aantal termen is " + N + " !");
	oef.opl7.src = "../images/fout.gif";
	}
if (antwoord2 != ndeterm) 
	{
	alert("De n-de term is " + ndeterm + " !");
	oef.opl7.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle8()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef8gevr1.value
var antwoord2 = document.oef.oef8gevr2.value

if ((antwoord1 == eersteterm) && (antwoord2 == ndeterm)) 
	{
	oef.opl8.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != eersteterm) 
	{
	alert("De eerste term is " + eersteterm + " !");
	oef.opl8.src = "../images/fout.gif";
	}
if (antwoord2 != ndeterm) 
	{
	alert("De n-de term is " + ndeterm + " !");
	oef.opl8.src = "../images/fout.gif";
	}
toonpercentage()
}
}

function controle9()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef9gevr1.value
var antwoord2 = document.oef.oef9gevr2.value

if ((antwoord1 == eersteterm) && (antwoord2 == N)) 
	{
	oef.opl9.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != eersteterm) 
	{
	alert("De eerste term is " + eersteterm + " !");
	oef.opl9.src = "../images/fout.gif";
	}
if (antwoord2 != N) 
	{
	alert("Het aantal termen is " + N + " !");
	oef.opl9.src = "../images/fout.gif";
	}
toonpercentage()
}
}


function controle10()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else 
{
aljuist = 1
pogingenteller++
var antwoord1 = document.oef.oef10gevr1.value
var antwoord2 = document.oef.oef10gevr2.value

if ((antwoord1 == eersteterm) && (antwoord2 == verschil)) 
	{
	oef.opl10.src = "../images/goed.gif"
	oplossingenteller++
	}
if (antwoord1 != eersteterm) 
	{
	alert("De eerste term is " + eersteterm + " !");
	oef.opl10.src = "../images/fout.gif";
	}
if (antwoord2 != verschil) 
	{
	alert("Het verschil is " + verschil + " !");
	oef.opl10.src = "../images/fout.gif";
	}
toonpercentage()
}
}

