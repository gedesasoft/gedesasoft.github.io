var algemaakt = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var nummer = 0
var LL1 = ""
var RL1 = ""
var LL2 = ""
var RL2 = ""
var tekenoplossing = 0
var typevariatie = 0
var keuzelid = 0
var eigopl = ""
var eig = ""
var teken = ""

letterkeuze = new Array(15)
letterkeuze[0] = "x"
letterkeuze[1] = "x"
letterkeuze[2] = "x"
letterkeuze[3] = "x"
letterkeuze[4] = "x"
letterkeuze[5] = "x"
letterkeuze[6] = "a"
letterkeuze[7] = "a"
letterkeuze[8] = "b"
letterkeuze[9] = "b"
letterkeuze[10] = "t"
letterkeuze[11] = "u"
letterkeuze[12] = "v"
letterkeuze[13] = "z"


var A = 0
var B = 0
var C = 0

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 4) + 1;
}

function kieslid()
{
keuzelid = Math.floor(Math.random() * 4) + 1;
}

function kiesgetallen()
{
A = 0
B = 0
C = 0
nummer = Math.floor(Math.random() * 14);
while ((A == 0) || (A == 1)) A = (Math.floor(Math.random() * 20 ) - 9);
while ((B == 0) || (B == 1)) B = (Math.floor(Math.random() * 20 ) - 9);
while ((C == 0) || (C == B)) C = (Math.floor(Math.random() * 20 ) - 9);

if (typeoefening < 5)
	{
	tekenoplossing = typevariatie
	eigopl = "1"
	}    
if (typeoefening > 4)
	{
	if (A < 0) 
		{
		tekenoplossing = 5 - typevariatie
		eigopl = "3"
		}
	else 
		{
		tekenoplossing = typevariatie
		eigopl = "2"
		}
	}    
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 11);
}

function bepaal_vgl()
{
if (typeoefening == "0")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + B
	
	if (A > 0) LL2 = LL1 + ' + ' + Math.abs(A)
	if (A < 0) LL2 = LL1 + ' - ' + Math.abs(A)
	RL2 = RL2 + (A + B)
	}

if (typeoefening == "1")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + 'y'
	
	if (A > 0) LL2 = LL1 + ' + ' + Math.abs(A)
	if (A < 0) LL2 = LL1 + ' - ' + Math.abs(A)
	if (A > 0) RL2 = RL1 + ' + ' + Math.abs(A)
	if (A < 0) RL2 = RL1 + ' - ' + Math.abs(A)
	}

if (typeoefening == "2")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + B + letterkeuze[nummer]
	
	LL2 = LL2 + (1 + A) + letterkeuze[nummer]
	RL2 = RL2 + (B + A) + letterkeuze[nummer]
	}

if (typeoefening == "3")
	{
	LL1 = LL1 + "0"
	RL1 = RL1 + B + letterkeuze[nummer]
	
	LL2 = LL2 + A + letterkeuze[nummer]
	RL2 = RL2 + (B + A) + letterkeuze[nummer]
	}

if (typeoefening == "4")
	{
	LL1 = LL1 + B + letterkeuze[nummer]
	RL1 = RL1 + C + letterkeuze[nummer]
	
	LL2 = LL2 + (B + A) + letterkeuze[nummer]
	RL2 = RL2 + (C + A) + letterkeuze[nummer]
	}

if (typeoefening == "5")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + 'y'
	
	LL2 = A + LL1
	RL2 = A + RL1
	}

if (typeoefening == "6")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + B + 'y'
	
	LL2 = A + LL1
	RL2 = (A*B) + 'y'
	}

if (typeoefening == "7")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + B
	
	LL2 = A + LL1
	RL2 = A*B
	}
	
if (typeoefening == "8")
	{
	LL1 = LL1 + letterkeuze[nummer]
	RL1 = RL1 + "0"
	
	LL2 = A + LL1
	RL2 = RL1
	}

if (typeoefening == "9")
	{
	LL1 = LL1 + B + letterkeuze[nummer]
	RL1 = RL1 + "0"
	
	LL2 = LL2 + (A*B) + letterkeuze[nummer]
	RL2 = RL1
	}

if (typeoefening == "10")
	{
	LL1 = LL1 + B + letterkeuze[nummer]
	RL1 = RL1 + C + letterkeuze[nummer]
	
	LL2 = LL2 + (A*B) + letterkeuze[nummer]
	RL2 = RL2 + (A*C) + letterkeuze[nummer]
	}

}

function toonoef()
{
if (keuzelid == 1)
	{
	document.oefvgl.txtLL1.value = LL1
	document.oefvgl.txtRL1.value = RL1
	document.oefvgl.txtLL2.value = LL2
	document.oefvgl.txtRL2.value = RL2
	}
if (keuzelid == 2)
	{
	document.oefvgl.txtLL1.value = RL1
	document.oefvgl.txtRL1.value = LL1
	document.oefvgl.txtLL2.value = RL2
	document.oefvgl.txtRL2.value = LL2
	}
if (keuzelid == 3)
	{
	document.oefvgl.txtLL1.value = LL2
	document.oefvgl.txtRL1.value = RL2
	document.oefvgl.txtLL2.value = LL1
	document.oefvgl.txtRL2.value = RL1
	}
if (keuzelid == 4)
	{
	document.oefvgl.txtLL1.value = RL2
	document.oefvgl.txtRL1.value = LL2
	document.oefvgl.txtLL2.value = RL1
	document.oefvgl.txtRL2.value = LL1
	}

if (typevariatie == "1")
	{
	document.oefvgl.txttekenopgave.value = "<"
	}
if (typevariatie == "2")
	{
	document.oefvgl.txttekenopgave.value = "<="
	}
if (typevariatie == "3")
	{
	document.oefvgl.txttekenopgave.value = ">="
	}
if (typevariatie == "4")
	{
	document.oefvgl.txttekenopgave.value = ">"
	}
 
}

function nieuwoef()
{
algemaakt = 0
LL1 = ""
RL1 = ""
LL2 = ""
RL2 = ""
document.oplteken.src = "../images/vraagteken.gif";
document.opleig.src = "../images/vraagteken.gif";
document.oefvgl.tekenantwoord.value = "0"
document.oefvgl.eigantwoord.value = "0"
kieslid()
kiesvariatie()
kiesoef()
kiesgetallen()
bepaal_vgl()
toonoef()
}

function controleereig()
{
if (eig == eigopl)
	{
	document.opleig.src = "../images/goed.gif"
	}
else 
	{
	document.opleig.src = "../images/fout.gif"
	}
}

function controleerteken()
{
if (teken == tekenoplossing)
	{
	document.oplteken.src = "../images/goed.gif"
	}
else 
	{
	document.oplteken.src = "../images/fout.gif"
	}
}

function controleer() 
{
teken = document.oefvgl.tekenantwoord.options[document.oefvgl.tekenantwoord.selectedIndex].value;

eig = document.oefvgl.eigantwoord.options[document.oefvgl.eigantwoord.selectedIndex].value;

if ((eig == "0") || (teken == "0")) alert('Je antwoord is nog niet volledig!')
else
	{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	controleereig()
	controleerteken()
	
	if ((eig == eigopl) && (teken == tekenoplossing)) 
		{
		oplossingenteller++;
		algemaakt = 1
		}
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.oefvgl.aantaljuist.value = oplossingenteller
	document.oefvgl.aantalpogingen.value = pogingenteller
	document.oefvgl.percentage.value = procent		
	}
}
}
