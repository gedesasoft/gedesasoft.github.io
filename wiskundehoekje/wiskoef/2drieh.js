var antwoordjuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0

var h1 = ""
var h2 = ""
var h3 = ""

var RL = ""

var hoek1 = 0
var hoek2 = 0
var hoek3 = 0

var A = 0
var B = 0
var C = 0
var D = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesgetallen()
{
hoek1 = 0
hoek2 = 0
hoek3 = 0
A = Math.floor(Math.random() * 4) + 2;
B = A;
while (A == B) B = Math.floor(Math.random() * 4) + 2;
C = Math.floor(Math.random() * 4) + 2;
D = C;
while (D == C) D = Math.floor(Math.random() * 4) + 2;

if (typeoefening < 6) 
	{
	hoek1 = Math.floor(Math.random() * 120) + 1;
	while ((hoek2 == 0) || (hoek1 + hoek2 > 178))
		{
		hoek2 = Math.floor(Math.random() * 120) + 1;
		}
	hoek3 = 180 - hoek1 - hoek2
	}		
 
if (typeoefening > 5) 
	{
	hoek1 = 2 * (Math.floor(Math.random() * 75) + 1);
	hoek2 = (180 - hoek1) / 2
	hoek3 = hoek2
	}
}
	

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 3) + 1

if (typevariatie == "1")
	{
	h1 = "Â"
	h2 = "Ô"
	h3 = "Ê"
	}

if (typevariatie == "2")
	{
	h1 = "Ô"
	h2 = "Ê"
	h3 = "Â"
	}

if (typevariatie == "3")
	{
	h1 = "Ê"
	h2 = "Â"
	h3 = "Ô"
	}

}

function toonoef()
{
RL = ""
drieh.antwhoek1.value = "";
drieh.antwhoek2.value = "";
drieh.antwhoek3.value = "";

if (typeoefening == "1")
	{
	drieh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	drieh.txtgeg2.value = h2 + ' = ' + hoek2 + '°'
	}

if (typeoefening == "2")
	{
	drieh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	drieh.txtgeg2.value = A + h2 + ' + ' + B + h3 + ' = ' + (A*hoek2 + B*hoek3) + '°';
	}

if (typeoefening == "3")
	{
	drieh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	RL = RL + A + h2
	if ((A*hoek2 - hoek3) > 0) RL = RL + ' - ' + (A*hoek2 - hoek3)  
	if ((A*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek3)  
	drieh.txtgeg2.value = h3 + ' = ' + RL + '°';
	}

if (typeoefening == "4")
	{
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	drieh.txtgeg1.value = h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + B + h2
	if ((B*hoek2 - hoek3) > 0) RL = RL + ' - ' + (B*hoek2 - hoek3)  
	if ((B*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - hoek3)  
	drieh.txtgeg2.value = h3 + ' = ' + RL + '°';
	}

if (typeoefening == "5")
	{
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	drieh.txtgeg1.value = A + h1 + ' = ' + RL + '°'
	RL = ""
	RL = RL + C + h2
	if ((C*hoek2 - hoek3) > 0) RL = RL + ' - ' + (C*hoek2 - hoek3)  
	if ((C*hoek2 - hoek3) < 0) RL = RL + ' + ' + Math.abs(C*hoek2 - hoek3)  
	drieh.txtgeg2.value = h3 + ' = ' + RL + '°';
	}

if (typeoefening == "6")
	{
	drieh.txtgeg1.value = h1 + ' = ' + hoek1 + '°'
	drieh.txtgeg2.value = h2 + ' = ' + h3
	}

if (typeoefening == "7")
	{
	drieh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + A + h2
	if ((A*hoek2 - hoek1) > 0) RL = RL + ' - ' + (A*hoek2 - hoek1)  
	if ((A*hoek2 - hoek1) < 0) RL = RL + ' + ' + Math.abs(A*hoek2 - hoek1)  
	drieh.txtgeg2.value = h1 + ' = ' + RL + '°';
	}

if (typeoefening == "8")
	{
	drieh.txtgeg1.value = h2 + ' = ' + h3
	RL = RL + B + h2
	if ((B*hoek2 - A*hoek1) > 0) RL = RL + ' - ' + (B*hoek2 - A*hoek1)  
	if ((B*hoek2 - A*hoek1) < 0) RL = RL + ' + ' + Math.abs(B*hoek2 - A*hoek1)  
	drieh.txtgeg2.value = A + h1 + ' = ' + RL + '°'
	}


}

function nieuwoef()
{
antwoordjuist = 0
kiesvariatie()
kiesoef()
kiesgetallen()
toonoef()
document.drieh.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
var antw1 = drieh.antwhoek1.value; 
var antw2 = drieh.antwhoek2.value; 
var antw3 = drieh.antwhoek3.value; 

if ((antw1 == "") || (antw2 == "") || (antw3 == "")) 
alert ('Je hebt je antwoord nog niet volledig ingevuld!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
{

pogingenteller++;
if (typevariatie == "1")
	{
	if ((antw1 == hoek1) && (antw2 == hoek3) && (antw3 == hoek2)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.drieh.opl.src = "../images/goed.gif";
		}
	else document.drieh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "2")
	{
	if ((antw1 == hoek3) && (antw2 == hoek2) && (antw3 == hoek1)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.drieh.opl.src = "../images/goed.gif";
		}
	else document.drieh.opl.src = "../images/fout.gif"
	}

if (typevariatie == "3")
	{
	if ((antw1 == hoek2) && (antw2 == hoek1) && (antw3 == hoek3)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.drieh.opl.src = "../images/goed.gif";
		}
	else document.drieh.opl.src = "../images/fout.gif"
	}
	
}
 

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.drieh.aantaljuist.value = oplossingenteller
	document.drieh.aantalpogingen.value = pogingenteller
	document.drieh.percentage.value = procent		
}
}


