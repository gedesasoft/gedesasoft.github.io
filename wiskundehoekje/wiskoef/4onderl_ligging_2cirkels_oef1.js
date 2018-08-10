var pogingenteller = 0
var oplossingenteller = 0
var aljuist = 0
var oplossing = "";
var typevariatie = 0;
var typeoefening = 0;
var R1 = 0
var R2 = 0
var M1M2 = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 6) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function kiesgetallen()
{
A = Math.floor(Math.random() * 20) + 3
B = A
while (A == B) B = Math.floor(Math.random() * 20) + 3

if (typeoefening == 1)
	{
	oplossing = "buit"
	C = A + B + Math.floor(Math.random() * 10) + 1
	R1 = A
	R2 = B
	M1M2 = C
	}

if (typeoefening == 2)
	{
	oplossing = "uitw"
	C = A + B
	R1 = A
	R2 = B
	M1M2 = C
	}

if (typeoefening == 3)
	{
	oplossing = "sn"
	if (B < A) 	C = A + Math.floor(Math.random() * B)
	if (A < B) 	C = B + Math.floor(Math.random() * A)
	R1 = A
	R2 = B
	M1M2 = C
	}

if (typeoefening == 4)
	{
	oplossing = "inw"
	C = A + B
	R1 = C
	R2 = B
	M1M2 = A
	}

if (typeoefening == 5)
	{
	oplossing = "binn"
	C = A + B + Math.floor(Math.random() * 10) + 1
	R1 = C
	R2 = B
	M1M2 = A
	}

if (typeoefening == 6)
	{
	oplossing = "conc"
	R1 = A
	R2 = B
	M1M2 = 0
	}
}

function toonoef()
{
if (typevariatie == 1)
	{
	document.cirkels.txtR1.value = R1;
	document.cirkels.txtR2.value = R2;
	} 
if (typevariatie == 2)
	{
	document.cirkels.txtR1.value = R2;
	document.cirkels.txtR2.value = R1;
	}
document.cirkels.txtM1M2.value = M1M2;
}


function nieuwoef()
{
aljuist = 0
oplossing = "";
kiesoef()
kiesgetallen()
kiesvariatie()
toonoef()
document.cirkels.opl.src="../images/vraagteken.gif"
document.cirkels.type.options.value ="opnieuw"
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
			cirkels.opl.src = "../images/goed.gif"
			oplossingenteller++
			aljuist = 1
			}
		else cirkels.opl.src = "../images/fout.gif";
			
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.cirkels.aantaljuist.value = oplossingenteller
		document.cirkels.aantalpogingen.value = pogingenteller
		document.cirkels.percentage.value = procent
		}		
	}
}
