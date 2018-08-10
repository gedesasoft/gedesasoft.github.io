var algemaakt = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var nummer = 0
var LL = ""
var RL = ""
var factor = ""
var tekenoplossing = 0
var typevariatie = 0
var keuzelid = 0

letterkeuze = new Array(15)
letterkeuze[0] = "x"
letterkeuze[1] = "x"
letterkeuze[2] = "x"
letterkeuze[3] = "x"
letterkeuze[4] = "x"
letterkeuze[5] = "x"
letterkeuze[6] = "x"
letterkeuze[7] = "x"
letterkeuze[8] = "a"
letterkeuze[9] = "b"
letterkeuze[10] = "t"
letterkeuze[11] = "u"
letterkeuze[12] = "v"
letterkeuze[13] = "y"
letterkeuze[14] = "z"


var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var X = 0

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 4) + 1;
}

function kieslid()
{
keuzelid = Math.floor(Math.random() * 2) + 1;
}

function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0
E = 0
F = 0
nummer = Math.floor(Math.random() * 15 );
while (A == 0) A = (Math.floor(Math.random() * 20 ) - 9);
while ((B == 0) || (B == A)) B = (Math.floor(Math.random() * 20 ) - 9);
while ((C == 0) || (C == A) || (C == -A) || (C == B) || (A + B == C)) C = (Math.floor(Math.random() * 20 ) - 9);
while (D == 0) D = (Math.floor(Math.random() * 20 ) - 9);
while (E == 0) E = (Math.floor(Math.random() * 20 ) - 9);
while (F == 0) F = (Math.floor(Math.random() * 20 ) - 9);
X = (Math.floor(Math.random() * 20 ) - 9);

if ((typeoefening > 1) && (typeoefening < 5))
	{
	if (A < 0) tekenoplossing = 5 - typevariatie
	else tekenoplossing = typevariatie
	}    
if ((typeoefening > 4) && (typeoefening < 7))
	{
	if ((A - C) < 0) tekenoplossing = 5 - typevariatie
	else tekenoplossing = typevariatie
	}    
if (typeoefening == 7)
	{
	if ((A + C) < 0) tekenoplossing = 5 - typevariatie
	else tekenoplossing = typevariatie
	}    
if (typeoefening > 7)
	{
	if (((A + B) - C) < 0) tekenoplossing = 5 - typevariatie
	else tekenoplossing = typevariatie
	}    

if (typeoefening < 2)
	{
	tekenoplossing = typevariatie
	}    

if (keuzelid == 2) tekenoplossing = 5 - tekenoplossing
}

function kiesoef()
{
if (factor == "makk") typeoefening = Math.floor(Math.random() * 3) + 1;
if (factor == "norm") typeoefening = Math.floor(Math.random() * 4) + 4;
if (factor == "moei") typeoefening = Math.floor(Math.random() * 3) + 8;
}

function bepaal_vgl()
{
if (typeoefening == "1")
	{
	LL = LL + letterkeuze[nummer]
	if (A > 0) LL = LL + '+' + A
	if (A < 0) LL = LL + A

	RL = RL + (X + A)
	}

if (typeoefening == "2")
	{
	if (A != 1)	LL = LL + A;
	LL = LL + letterkeuze[nummer]

	RL = RL + (A * X)
	}

if (typeoefening == "3")
	{
	if (A != 1)	LL = LL + A;
	LL = LL + letterkeuze[nummer]
	if (B > 0) LL = LL + '+' + B
	if (B < 0) LL = LL + B

	RL = RL + (A*X + B)
	}

if (typeoefening == "4")
	{
	if (A != 1)	LL = LL + A + '(';
	LL = LL + letterkeuze[nummer]
	if (B > 0) LL = LL + '+' + B
	if (B < 0) LL = LL + B
	if (A != 1)	LL = LL + ')';
	if (C > 0) LL = LL + '+' + C
	if (C < 0) LL = LL + C

	RL = RL + (A*(X + B) + C)
	}

if (typeoefening == "5")
	{
	if (A != 1)	LL = LL + A;
	LL = LL + letterkeuze[nummer]
	if (B > 0) LL = LL + '+' + B
	if (B < 0) LL = LL + B

	if (C != 1)	RL = RL + C;
	RL = RL + letterkeuze[nummer]
	if ((A*X - C*X + B) > 0) RL = RL + '+' + (A*X - C*X + B)
	if ((A*X - C*X + B) < 0) RL = RL + (A*X - C*X + B)
	}

if (typeoefening == "6")
	{
	if (A != 1)	LL = LL + A + '(';
	LL = LL + letterkeuze[nummer]
	if (B > 0) LL = LL + '+' + B
	if (B < 0) LL = LL + B
	if (A != 1)	LL = LL + ')';
	if (D > 0) LL = LL + '+' + D
	if (D < 0) LL = LL + D

	if (C != 1)	RL = RL + C;
	RL = RL + letterkeuze[nummer]
	if ((A*X + A*B + D - C*X) > 0) RL = RL + '+' + (A*X + A*B + D - C*X)
	if ((A*X + A*B + D - C*X) < 0) RL = RL + (A*X + A*B + D - C*X)
	}

if (typeoefening == "7")
	{
	if (A != 1)	LL = LL + A + '(';
	LL = LL + letterkeuze[nummer]
	if (B > 0) LL = LL + '+' + B
	if (B < 0) LL = LL + B
	if (A != 1)	LL = LL + ')';
	if (C > 0) LL = LL + '+' + C
	if (C < 0) LL = LL + C
	LL = LL + letterkeuze[nummer]

	RL = RL + (A*X + A*B + C*X)
	}

if (typeoefening == "8")
	{
	if (A != 1)	LL = LL + A;
	LL = LL + letterkeuze[nummer]
	if (B > 1) LL = LL + '+' + B + '('
	if (B == 1) LL = LL + '+'
	if (B < 0) LL = LL + B + '('
	LL = LL + letterkeuze[nummer]
	if (D > 0) LL = LL + '+' + D
	if (D < 0) LL = LL + D
	if (B > 1) LL = LL + ')'
	if (B < 0) LL = LL + ')'

	if (C != 1)	RL = RL + C + '(';
	RL = RL + letterkeuze[nummer]
	if (E > 0) RL = RL + '+' + E
	if (E < 0) RL = RL + E
	if (C != 1)	RL = RL + ')'
	if ((A*X + B*X + B*D - C*X - C*E) > 0) RL = RL + '+' + (A*X + B*X + B*D - C*X - C*E)
	if ((A*X + B*X + B*D - C*X - C*E) < 0) RL = RL + (A*X + B*X + B*D - C*X - C*E)
	}

if (typeoefening == "9")
	{
	if (A != 1)	LL = LL + A + '(';
	LL = LL + letterkeuze[nummer]
	if (D > 0) LL = LL + '+' + D
	if (D < 0) LL = LL + D
	if (A != 1)	LL = LL + ')';
	if (B > 1) LL = LL + '+' + B 
	if (B == 1) LL = LL + '+'
	if (B < 0) LL = LL + B 
	LL = LL + letterkeuze[nummer]

	if (C != 1)	RL = RL + C
	RL = RL + letterkeuze[nummer]
	if ((A*X + A*D + B*X - C*X) > 0) RL = RL + '+' + (A*X + A*D + B*X - C*X)
	if ((A*X + A*D + B*X - C*X) < 0) RL = RL + (A*X + A*D + B*X - C*X)
	}

if (typeoefening == "10")
	{
	if (A != 1)	LL = LL + A + '(';
	LL = LL + letterkeuze[nummer]
	if (D > 0) LL = LL + '+' + D
	if (D < 0) LL = LL + D
	if (A != 1)	LL = LL + ')';
	if (B > 1) LL = LL + '+' + B + '(' 
	if (B == 1) LL = LL + '+'
	if (B < 0) LL = LL + B + '('
	LL = LL + letterkeuze[nummer]
	if (E > 0) LL = LL + '+' + E
	if (E < 0) LL = LL + E
	if (B > 1) LL = LL + ')'
	if (B < 0) LL = LL + ')'

	if (C != 1)	RL = RL + C + '('
	RL = RL + letterkeuze[nummer]
	if (F > 0) RL = RL + '+' + F
	if (F < 0) RL = RL + F
	if (C != 1)	RL = RL + ')'
	if ((A*X + A*D + B*X + B*E - C*X - C*F) > 0) RL = RL + '+' + (A*X + A*D + B*X + B*E - C*X - C*F)
	if ((A*X + A*D + B*X + B*E - C*X - C*F) < 0) RL = RL + (A*X + A*D + B*X + B*E - C*X - C*F)
	}
}

function toonoef()
{
if (keuzelid == 1)
	{
	document.oefvgl.txtLL.value = LL
	document.oefvgl.txtRL.value = RL
	}
if (keuzelid == 2)
	{
	document.oefvgl.txtLL.value = RL
	document.oefvgl.txtRL.value = LL
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

document.oefvgl.gevraagd.value = letterkeuze[nummer]; 
}

function nieuwoef()
{
algemaakt = 0
LL = ""
RL = ""
document.opl.src = "../images/vraagteken.gif";
factor = document.oefvgl.kiesoef.options[document.oefvgl.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	document.oefvgl.tekenantwoord.value = "0"
	antwoordwissen()
	kieslid()
	kiesvariatie()
	kiesoef()
	kiesgetallen()
	bepaal_vgl()
	toonoef()
	}
}

function antwoordwissen()
{
document.oefvgl.antwoord.value = ""
}

function controleer() 
{
var teken = document.oefvgl.tekenantwoord.options[document.oefvgl.tekenantwoord.selectedIndex].value;

var oplossing = document.oefvgl.antwoord.value;

if ((oplossing == "") || (teken == "0")) alert('Je antwoord is nog niet volledig!')
else
	{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens gemaakt hebt, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	algemaakt = 1
	if ((oplossing == X) && (teken == tekenoplossing)) 
		{
		document.opl.src = "../images/goed.gif"
		oplossingenteller++;
		}
		else 
		{
		document.opl.src = "../images/fout.gif"
		if (tekenoplossing == 1) alert ('De oplossing moet zijn: ' + letterkeuze[nummer] + ' < ' + X + " !")
		if (tekenoplossing == 2) alert ('De oplossing moet zijn: ' + letterkeuze[nummer] + ' <= ' + X + " !")
		if (tekenoplossing == 3) alert ('De oplossing moet zijn: ' + letterkeuze[nummer] + ' >= ' + X + " !")
		if (tekenoplossing == 4) alert ('De oplossing moet zijn: ' + letterkeuze[nummer] + ' > ' + X + " !")

		}
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.oefvgl.aantaljuist.value = oplossingenteller
	document.oefvgl.aantalpogingen.value = pogingenteller
	document.oefvgl.percentage.value = procent		
	}
}
}
