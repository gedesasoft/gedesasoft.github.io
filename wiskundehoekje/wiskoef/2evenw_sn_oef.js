var antwoordjuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var opgave = ""

var h1 = ""
var h2 = ""

var hoek1 = 0
var hoek2 = 0

var A = 0
var B = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesgetallen()
{
hoek1 = Math.floor(Math.random() * 110) + 35;
hoek2 = 180 - hoek1

A = Math.floor(Math.random() * 4) + 2;
B = A;
while (A == B) B = Math.floor(Math.random() * 4) + 2;
}
	

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 16) + 1

if (typevariatie < 5)
	{
	h1 = "Â<sub>1</sub>"
	}

if ((typevariatie > 4) && (typevariatie < 9)) 
	{
	h1 = "Â<sub>3</sub>"
	}

if ((typevariatie > 8) && (typevariatie < 13)) 
	{
	h1 = "Ê<sub>4</sub>"
	}

if (typevariatie > 12) 
	{
	h1 = "Ê<sub>2</sub>"
	}

if (typevariatie%4 == 0)
	{
	h2 = "Â<sub>2</sub>"
	}

if (typevariatie%4 == 1)
	{
	h2 = "Â<sub>4</sub>"
	}

if (typevariatie%4 == 2)
	{
	h2 = "Ê<sub>1</sub>"
	}

if (typevariatie%4 == 3)
	{
	h2 = "Ê<sub>3</sub>"
	}
}

var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><br><font size="+1">Gegeven: </font><font color="#ff0000" size="+1">';

var naopgave = '</font></TD></TR></TABLE></b></body></html>';

function schrijfoefening()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + opgave + naopgave)
}

function toonoef()
{
opgave = ""

if (typeoefening == "1")
	{
	opgave = '' + h1 + ' = ' + hoek1 + '°'
	}

if (typeoefening == "2")
	{
	opgave = '' + h2 + ' = ' + hoek2 + '°'
	}

if (typeoefening == "3")
	{
	opgave = '' + h1 + ' = ' + h2
	if ((hoek2 - hoek1) > 0) opgave += ' - ' + (hoek2 - hoek1) + '°'  
	if ((hoek2 - hoek1) < 0) opgave += ' + ' + Math.abs(hoek2 - hoek1) + '°'  
	}

if (typeoefening == "4")
	{
	opgave = '' + h2 + ' = ' + h1
	if ((hoek1 - hoek2) > 0) opgave += ' - ' + (hoek1 - hoek2) + '°'  
	if ((hoek1 - hoek2) < 0) opgave += ' + ' + Math.abs(hoek1 - hoek2) + '°'  
	}

if (typeoefening == "5")
	{
	opgave = '' + h1 + ' = ' + A + h2
	if ((A*hoek2 - hoek1) > 0) opgave += ' - ' + (A*hoek2 - hoek1) + '°'  
	if ((A*hoek2 - hoek1) < 0) opgave += ' + ' + Math.abs(A*hoek2 - hoek1) + '°'  
	}

if (typeoefening == "6")
	{
	opgave = '' + h2 + ' = ' + A + h1
	if ((A*hoek1 - hoek2) > 0) opgave += ' - ' + (A*hoek1 - hoek2) + '°'  
	if ((A*hoek1 - hoek2) < 0) opgave += ' + ' + Math.abs(A*hoek1 - hoek2) + '°'  
	}

if (typeoefening == "7")
	{
	opgave = '' + A + h1 + ' = ' + B + h2
	if ((B*hoek2 - A*hoek1) > 0) opgave += ' - ' + (B*hoek2 - A*hoek1) + '°'  
	if ((B*hoek2 - A*hoek1) < 0) opgave += ' + ' + Math.abs(B*hoek2 - A*hoek1) + '°'  
	}

if (typeoefening == "8")
	{
	opgave = '' + A + h2 + ' = ' + B + h1
	if ((B*hoek1 - A*hoek2) > 0) opgave += ' - ' + (B*hoek1 - A*hoek2) + '°'  
	if ((B*hoek1 - A*hoek2) < 0) opgave += ' + ' + Math.abs(B*hoek1 - A*hoek2) + '°'  
	}

schrijfoefening()
}

function nieuwoef()
{
document.evenw.txtA1.value = ""
document.evenw.txtA2.value = ""
document.evenw.txtA3.value = ""
document.evenw.txtA4.value = ""
document.evenw.txtE1.value = ""
document.evenw.txtE2.value = ""
document.evenw.txtE3.value = ""
document.evenw.txtE4.value = ""
antwoordjuist = 0
kiesvariatie()
kiesoef()
kiesgetallen()
toonoef()
document.evenw.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
var antwA1 = evenw.txtA1.value; 
var antwA2 = evenw.txtA2.value; 
var antwA3 = evenw.txtA3.value; 
var antwA4 = evenw.txtA4.value; 
var antwE1 = evenw.txtE1.value; 
var antwE2 = evenw.txtE2.value; 
var antwE3 = evenw.txtE3.value; 
var antwE4 = evenw.txtE4.value; 

if ((antwA1 == "") || (antwA2 == "") || (antwA3 == "") ||  (antwA4 == "") || (antwE1 == "") || (antwE2 == "") || (antwE3 == "") ||  (antwE4 == "")) 
alert ('Je hebt je antwoord nog niet volledig ingevuld: geef alle hoekgroottes in!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if ((antwA1 == hoek1) && (antwA2 == hoek2) && (antwA3 == hoek1) && (antwA4 == hoek2) && (antwE1 == hoek2) && (antwE2 == hoek1) && (antwE3 == hoek2) &&  (antwE4 == hoek1))
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.evenw.opl.src = "../images/goed.gif";
		}
		else document.evenw.opl.src = "../images/fout.gif"
	}
 
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.evenw.aantaljuist.value = oplossingenteller
	document.evenw.aantalpogingen.value = pogingenteller
	document.evenw.percentage.value = procent		
	}
}


