var vorige = 0
var typeoefening = 0
var afbeelding = ""
var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var G = 0
var H = 0

var figuuru = ""
var figuurv = ""
var figuuropl = ""

var oefteller = new Array(6)
oefteller[0] = "nee"
oefteller[1] = "nee"
oefteller[2] = "nee"
oefteller[3] = "nee"
oefteller[4] = "nee"
oefteller[5] = "nee"

function kiesoef()
{
oefteller[0] = "nee"
oefteller[1] = "nee"
oefteller[2] = "nee"
oefteller[3] = "nee"
oefteller[4] = "nee"
oefteller[5] = "nee"

typeoefening = 0

if (document.vect.plus.checked == true) 
	{
	oefteller[1] = "ja"
	}
if (document.vect.min.checked == true) 
	{
	oefteller[2] = "ja"
	}
if (document.vect.maal.checked == true) 
	{
	oefteller[3] = "ja"
	}
if ((document.vect.plus.checked == true) && (document.vect.maal.checked == true))  
	{
	oefteller[4] = "ja"
	}
if ((document.vect.min.checked == true) && (document.vect.maal.checked == true))  
	{
	oefteller[5] = "ja"
	}

if ((document.vect.plus.checked == false) && (document.vect.min.checked == false) && (document.vect.maal.checked == false)) 
	{
	alert('Je moet wel op zijn minst één onderdeel selecteren om een oefening te kunnen maken.')
	} 
else
	{
	while (oefteller[typeoefening] == "nee") typeoefening = Math.floor(Math.random() * 5) + 1
	}
}

function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0
E = 0
F = 0
G = 0
H = 0

while (((G == 0) && (H == 0)) || ((B == 0) && (C == 0)) || ((E == 0) && (F == 0)) || (G < -7) || (G > 7) || (H < -5) || (H > 5))
	{
	A = 0
	while ((A == 0) || (A == 1)) A = Math.floor(Math.random() * 8) - 3
	D = 0
	while ((D == 0) || (D == 1)) D = Math.floor(Math.random() * 8) - 3
	B = Math.floor(Math.random() * 15) - 7
	E = Math.floor(Math.random() * 15) - 7
	C = Math.floor(Math.random() * 11) - 5
	F = Math.floor(Math.random() * 11) - 5
	if (typeoefening == 1)
		{
		G = B + E
		H = C + F
		}
	if (typeoefening == 2)
		{
		G = B - E
		H = C - F
		}
	if (typeoefening == 3)
		{
		G = A * B
		H = A * C
		}
	if (typeoefening == 4)
		{
		G = A * B + D * E
		H = A * C + D * F
		}
	if (typeoefening == 5)
		{
		G = A * B - D * E
		H = A * C - D * F
		}
	} 
}

function bepaalfiguren()
{
figuuru = "images/3vector_(" + B + "," + C + ").gif" 
figuurv = "images/3vector_(" + E + "," + F + ").gif" 
figuuropl = "images/3vector_(" + G + "," + H + ").gif" 
}

function toonoef()
{
document.u.src = "images/leeg.gif"
document.v.src = "images/leeg.gif"
document.opl.src = "images/leeg.gif"
document.all.som.style.display="none"
document.all.verschil.style.display="none"
document.all.scpr.style.display="none"
document.all.scprsom.style.display="none"
document.all.scprverschil.style.display="none"

if (D < 0) txtD = "(" + D + ")"
else txtD = D

if (typeoefening == 1) document.all.som.style.display=""
if (typeoefening == 2) document.all.verschil.style.display=""
if (typeoefening == 3) 
	{
	document.all.scpr.style.display=""
	vect.txtscprA.value = A
	}
if (typeoefening == 4) 
	{
	document.all.scprsom.style.display=""
	vect.txtscprsomA.value = A
	vect.txtscprsomD.value = txtD
	}
if (typeoefening == 5) 
	{
	document.all.scprverschil.style.display=""
	vect.txtscprverschilA.value = A
	vect.txtscprverschilD.value = txtD
	}
 
document.u.src = figuuru
if (typeoefening != 3) document.v.src = figuurv
else document.v.src = "images/leeg.gif"

}

function toonopl()
{
if (typeoefening == 0) alert('Kies eerst een opgave.')
else document.opl.src = figuuropl
}

function nieuwoef()
{
kiesoef()
if (typeoefening != 0)
	{
	kiesgetallen()
	bepaalfiguren()
	toonoef()
	}
}

