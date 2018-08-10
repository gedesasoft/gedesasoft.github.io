var antwoordjuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0

var h1 = ""
var h2 = ""
var h3 = ""
var h4 = ""

var RL = ""

var hoek1 = 0
var hoek2 = 0
var hoek3 = 0
var hoek4 = 0

var A = 0
var B = 0
var C = 0
var D = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 16) + 1
}

function kiesgetallen()
{
hoek1 = 0
hoek2 = 0
hoek3 = 0
hoek4 = 0
A = Math.floor(Math.random() * 4) + 2;
B = A;
while (A == B) B = Math.floor(Math.random() * 4) + 2;
C = Math.floor(Math.random() * 4) + 2;
D = C;
while (D == C) D = Math.floor(Math.random() * 4) + 2;

hoek1 = Math.floor(Math.random() * 120) + 61;
hoek2 = Math.floor(Math.random() * 120) + 1;
while ((hoek3 == 0) || (hoek1 + hoek2 + hoek3 > 356) || (hoek1 + hoek2 + hoek3 < 180))
	{
	hoek3 = Math.floor(Math.random() * 120) + 1;
	}

if (((typeoefening > 5) && (typeoefening < 9)) || (typeoefening > 13))  
	{
	hoek3 = hoek2
	while ((hoek1 + hoek2 + hoek3 > 356) || (hoek1 + hoek2 + hoek3 < 180))
		{
		hoek2 = Math.floor(Math.random() * 120) + 1;
		hoek3 = hoek2
		}
	}

hoek4 = 360 - hoek1 - hoek2 - hoek3
 
}
	

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 6) + 1

if (typevariatie == "1")
	{
	h1 = "Â"
	h2 = "Ô"
	h3 = "Ê"
	h4 = "Û"
	}

if (typevariatie == "2")
	{
	h1 = "Ô"
	h2 = "Ê"
	h3 = "Â"
	h4 = "Û"
	}

if (typevariatie == "3")
	{
	h1 = "Ê"
	h2 = "Â"
	h3 = "Ô"
	h4 = "Û"
	}

if (typevariatie == "4")
	{
	h1 = "Û"
	h2 = "Ê"
	h3 = "Â"
	h4 = "Ô"
	}

if (typevariatie == "5")
	{
	h1 = "Ô"
	h2 = "Û"
	h3 = "Â"
	h4 = "Ê"
	}

if (typevariatie == "6")
	{
	h1 = "Â"
	h2 = "Ô"
	h3 = "Û"
	h4 = "Ê"
	}

}

function toonoef()
{
RL = ""
vierh.antwhoek1.value = "";
vierh.antwhoek2.value = "";
vierh.antwhoek3.value = "";
vierh.antwhoek4.value = "";

if (typeoefening == "1")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	vierh.txtgeg2.value = h2 + ' = ' + hoek2 + '°'
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "2")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	vierh.txtgeg2.value = A + h2 + ' + ' + B + h3 + ' = ' + (A*hoek2 + B*hoek3) + '°';
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "3")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	RL = RL + A + h2
	if ((A*hoek2 - hoek3) > 0) RL = RL + ' - ' + (A*hoek2 - hoek3)  
	if ((A*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "4")
	{
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	vierh.txtgeg1.value = h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - hoek3) > 0) RL = RL + ' - ' + (B*hoek2 - hoek3)  
	if ((B*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "5")
	{
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	vierh.txtgeg1.value = A + h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + C + h2
	if ((C*hoek2 - hoek3) > 0) RL = RL + ' - ' + (C*hoek2 - hoek3)  
	if ((C*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "6")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	vierh.txtgeg2.value = h2 + ' = ' + h3
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "7")
	{
	vierh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	vierh.txtgeg2.value = h1 + ' = ' + RL + '°';
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "8")
	{
	vierh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	vierh.txtgeg2.value = A + h1 + ' = ' + RL + '°'
	vierh.txtgeg3.value = h3 + ' = ' + hoek3 + '°'
	}

if (typeoefening == "9")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	vierh.txtgeg2.value = h2 + ' = ' + hoek2 + '°'
	RL = RL + A + h2
	if ((A*hoek2 - hoek3) > 0) RL = RL + ' - ' + (A*hoek2 - hoek3)  
	if ((A*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek3)  
	vierh.txtgeg3.value = h3 + ' = ' + RL + '°'
	}

if (typeoefening == "10")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	vierh.txtgeg2.value = A + h2 + ' + ' + B + h3 + ' = ' + (A*hoek2 + B*hoek3) + '°';
	RL = RL + C + h2
	if ((C*hoek2 - hoek4) > 0) RL = RL + ' - ' + (C*hoek2 - hoek4)  
	if ((C*hoek2 - hoek4) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - hoek4)  
	vierh.txtgeg3.value = h4 + ' = ' + RL + '°'
	}

if (typeoefening == "11")
	{
	vierh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	RL = RL + A + h2
	if ((A*hoek2 - hoek3) > 0) RL = RL + ' - ' + (A*hoek2 - hoek3)  
	if ((A*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - hoek4) > 0) RL = RL + ' - ' + (B*hoek2 - hoek4)  
	if ((B*hoek2 - hoek4) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - hoek4)  
	vierh.txtgeg3.value = h4 + ' = ' + RL + '°';

	}

if (typeoefening == "12")
	{
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	vierh.txtgeg1.value = h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - hoek3) > 0) RL = RL + ' - ' + (B*hoek2 - hoek3)  
	if ((B*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	RL = ""
	RL = RL + C + h3
	if ((C*hoek3 - hoek4) > 0) RL = RL + ' - ' + (C*hoek3 - hoek4)  
	if ((C*hoek3 - hoek4) < 0) RL = RL + ' + ' + Math.abs(C*hoek3 - hoek4)  
	vierh.txtgeg3.value = h4 + ' = ' + RL + '°';
	}

if (typeoefening == "13")
	{
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	vierh.txtgeg1.value = A + h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + C + h2
	if ((C*hoek2 - hoek3) > 0) RL = RL + ' - ' + (C*hoek2 - hoek3)  
	if ((C*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - hoek3)  
	vierh.txtgeg2.value = h3 + ' = ' + RL + '°';
	RL = ""
	RL = RL + A + h1
	if ((A*hoek1 - hoek4) > 0) RL = RL + ' - ' + (A*hoek1 - hoek4)  
	if ((A*hoek1 - hoek4) < 0) RL = RL + ' + ' + Math.abs(A*hoek1 - hoek4)  
	vierh.txtgeg3.value = h4 + ' = ' + RL + '°';
	}

if (typeoefening == "14")
	{
	vierh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	vierh.txtgeg2.value = h1 + ' = ' + RL + '°';
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - hoek4) > 0) RL = RL + ' - ' + (B*hoek2 - hoek4)  
	if ((B*hoek2 - hoek4) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - hoek4)  
	vierh.txtgeg3.value = h4 + ' = ' + RL + '°';
	}

if (typeoefening == "15")
	{
	vierh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + C + h2
	if ((C*hoek2 - hoek1) > 0) RL = RL + ' - ' + (C*hoek2 - hoek1)  
	if ((C*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - hoek1)  
	vierh.txtgeg3.value = h1 + ' = ' + RL + '°';
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek4) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek4)  
	if ((B*hoek2 - A*hoek4) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek4)  
	vierh.txtgeg2.value = A + h4 + ' = ' + RL + '°'
	}

if (typeoefening == "16")
	{
	vierh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	vierh.txtgeg2.value = A + h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + C + h2
	if ((C*hoek2 - D*hoek4) > 0) RL = RL + ' - ' + (C*hoek2 - D*hoek4)  
	if ((C*hoek2 - D*hoek4) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - D*hoek4)  
	vierh.txtgeg3.value = D + h4 + ' = ' + RL + '°'
	}


}

function nieuwoef()
{
antwoordjuist = 0
kiesvariatie()
kiesoef()
kiesgetallen()
toonoef()
document.vierh.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
var antw1 = vierh.antwhoek1.value; 
var antw2 = vierh.antwhoek2.value; 
var antw3 = vierh.antwhoek3.value; 
var antw4 = vierh.antwhoek4.value; 

if ((antw1 == "") || (antw2 == "") || (antw3 == "") || (antw4 == "")) 
alert ('Je hebt je antwoord nog niet volledig ingevuld!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
{

pogingenteller++;
if (typevariatie == "1")
	{
	if ((antw1 == hoek1) && (antw2 == hoek3) && (antw3 == hoek2) && (antw4 == hoek4)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "2")
	{
	if ((antw1 == hoek3) && (antw2 == hoek2) && (antw3 == hoek1) && (antw4 == hoek4)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "3")
	{
	if ((antw1 == hoek2) && (antw2 == hoek1) && (antw3 == hoek3) && (antw4 == hoek4)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}
	
if (typevariatie == "4")
	{
	if ((antw1 == hoek3) && (antw2 == hoek2) && (antw3 == hoek4) && (antw4 == hoek1)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "5")
	{
	if ((antw1 == hoek3) && (antw2 == hoek4) && (antw3 == hoek1) && (antw4 == hoek2)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "6")
	{
	if ((antw1 == hoek1) && (antw2 == hoek4) && (antw3 == hoek2) && (antw4 == hoek3)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.vierh.opl.src = "../images/goed.gif";
		}
	else document.vierh.opl.src = "../images/fout.gif"
	}


}
 

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.vierh.aantaljuist.value = oplossingenteller
	document.vierh.aantalpogingen.value = pogingenteller
	document.vierh.percentage.value = procent		
}
}


