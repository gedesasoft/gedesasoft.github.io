var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var A = 0
var B = 0
var C = 0
var U1 = 0
var UN = 0
var N = 0
var V = 0
var Q = 1
var SN = 0
var typerij = ""
var voorschrift = ""
var gekozenrij = ""
var txtrij = ""

function kiesgetallen()
{
if (typeoefening == 1)
	{
	typerij = "RR"
	txtrij = "rekenkundige rij"
	A = Math.floor(Math.random() * 20);
	B = A + Math.floor(Math.random() * 40) + 1;
	C = Math.floor(Math.random() * 30) - 10;
	N = B - A + 1
	V = 0
	while (V == 0) V = Math.floor(Math.random() * 15) - 5;
	U1 = A * V + C 
	UN = B * V + C
	SN = N * (U1 + UN) / 2
	}
if (typeoefening == 2)
	{
	typerij = "MR"
	txtrij = "meetkundige rij"
	A = Math.floor(Math.random() * 4);
	B = A + Math.floor(Math.random() * 10) + 1;
	C = 0
	while (C == 0) C = Math.floor(Math.random() * 15) - 5;
	N = B - A + 1
	Q = 0
	while ((Q == 0) || (Q == 1)) Q = Math.floor(Math.random() * 8) - 3;
	U1 = Math.pow(Q,A) * C 
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
document.som.txtA.value = "i = " + A;
document.som.txtB.value = B;

if (typeoefening == 1)
	{
	voorschrift = "("
	if (V == 1) voorschrift += "i"
	if (V == -1) voorschrift += "-i"
	if ((V != 1) && (V != -1)) voorschrift += V +"i"
	if (C > 0) voorschrift += " + " + Math.abs(C)
	if (C < 0) voorschrift += " - " + Math.abs(C)
	voorschrift += ")"
	}

if (typeoefening == 2)
	{
	voorschrift = "("
	if (C == -1) voorschrift += "-"
	if ((C < -1) || (C > 1)) voorschrift += C + " . "
	if (Q < 0) voorschrift += "(" + Q + ")^i"
	if (Q > 0) voorschrift += Q + "^i"
	voorschrift += ")"
	}

document.som.txtvoorschrift.value = voorschrift;
}


function nieuwoef()
{
algemaakt = 0
som.opl.src = "../images/vraagteken.gif"
document.som.txtopl.value = "";
document.som.keuzerij.value = "x"
document.all.txtcontrole.style.display= "none";
document.all.antwoord.style.display= "none";
kiesoef()
kiesgetallen()
toonoef()
}

function wijzigrij()
{
var gekozenrij = document.som.keuzerij.options[document.som.keuzerij.selectedIndex].value;

if (gekozenrij == "x") 
	{
	som.opl.src = "../images/vraagteken.gif"
	document.all.txtcontrole.style.display= "none";
	document.all.antwoord.style.display= "none";
	}
else
	{
	if (gekozenrij == typerij)
		{
		document.all.txtcontrole.style.display= "";
		document.all.antwoord.style.display= "";
		}
	else alert('Het betreft hier een ' + txtrij + '!') 
	}
}

function controle()
{
if (algemaakt == 1) alert('Kies a.u.b. eerst een nieuwe oefening')
else
{
	if (som.txtopl.value == "") alert('Geef a.u.b. de som in alvorens op "Controle" te klikken.')
	else
	{
	pogingenteller++
	if (som.txtopl.value == SN)
		{
		oplossingenteller++
		som.opl.src = "../images/goed.gif"
		algemaakt = 1
		} 
	else som.opl.src = "../images/fout.gif"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.som.aantaljuist.value = oplossingenteller
	document.som.aantalpogingen.value = pogingenteller
	document.som.percentage.value = procent		
}
}
