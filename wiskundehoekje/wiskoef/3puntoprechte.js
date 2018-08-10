var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var Aalgemaakt = 0
var Balgemaakt = 0
var Calgemaakt = 0
var Dalgemaakt = 0
var Ealgemaakt = 0
var Falgemaakt = 0
var Galgemaakt = 0
var Halgemaakt = 0
var Ialgemaakt = 0
var Jalgemaakt = 0
var nrrechte = 0
var oplA = ""
var oplB = ""
var oplC = ""
var oplD = ""
var oplE = ""
var oplF = ""
var oplG = ""
var oplH = ""
var oplI = ""
var oplJ = ""
var antwA = ""
var antwB = ""
var antwC = ""
var antwD = ""
var antwE = ""
var antwF = ""
var antwG = ""
var antwH = ""
var antwI = ""
var antwJ = ""


rechte = new Array(27)
rechte[0] = "y = 2x - 7"
rechte[1] = "y = -3"
rechte[2] = "y = -7/3x + 5/3"
rechte[3] = "y = -4x + 5"
rechte[4] = "y = -15/8x + 3/4"
rechte[5] = "y = -4/3x - 1/3"
rechte[6] = "y = -5/3x + 1/3"
rechte[7] = "y = -2x + 1"
rechte[8] = "y = -2/3x - 13/3"
rechte[9] = "y = -9/2x - 1/2"
rechte[10] = "y = -x - 4"
rechte[11] = "y = -16x + 11"
rechte[12] = "y = -16/3x + 1/3"
rechte[13] = "y = -10x + 5"
rechte[14] = "y = 7x + 11"
rechte[15] = "y = -4/3x - 17/3"
rechte[16] = "y = 5/3x + 1/3"
rechte[17] = "y = 6/5x - 3/5"
rechte[18] = "y = 3/4x + 19/4"
rechte[19] = "y = -2/3x + 10/3"
rechte[20] = "y = -2,7x + 1,3"
rechte[21] = "y = -11/3x + 1/3"
rechte[22] = "y = -8/3x + 4/3"
rechte[23] = "y = 8/3x + 5/3"
rechte[24] = "x = 1/2"
rechte[25] = "y = 1/3"
rechte[26] = "y = -2/3x + 1/3"


function kiesgetallen()
{
nrrechte = Math.floor(Math.random() * 27);

if (nrrechte < 8) oplA = "j"
else oplA = "n"

if ((nrrechte == 0) || ((nrrechte > 7) && (nrrechte < 14))) oplB = "j"
else oplB = "n"

if ((nrrechte == 1) || (nrrechte == 8) || ((nrrechte > 13) && (nrrechte < 18))) oplC = "j"
else oplC = "n"

if ((nrrechte == 2) || (nrrechte == 9) || (nrrechte == 14) || ((nrrechte > 17) && (nrrechte < 23))) oplD = "j"
else oplD = "n"

if ((nrrechte == 10) || (nrrechte == 15) || (nrrechte == 18)) oplE = "j"
else oplE = "n"

if ((nrrechte == 3) || (nrrechte == 11) || (nrrechte == 19) || (nrrechte == 23) || (nrrechte == 24)) oplF = "j"
else oplF = "n"

if ((nrrechte == 4) || (nrrechte == 20)) oplG = "j"
else oplG = "n"

if ((nrrechte == 5) || (nrrechte == 23) || (nrrechte == 25)) oplH = "j"
else oplH = "n"

if ((nrrechte == 6) || (nrrechte == 12) || (nrrechte == 16) || (nrrechte == 21) || (nrrechte == 25) || (nrrechte == 26)) oplI = "j"
else oplI = "n"

if ((nrrechte == 7) || (nrrechte == 13) || (nrrechte == 17) || (nrrechte == 22) || (nrrechte == 24) || (nrrechte == 26)) oplJ = "j"
else oplJ = "n"
}


function toonoef()
{
document.coeff.txtvgl.value = rechte[nrrechte]
}

function nieuwoef()
{
Aalgemaakt = 0
Balgemaakt = 0
Calgemaakt = 0
Dalgemaakt = 0
Ealgemaakt = 0
Falgemaakt = 0
Galgemaakt = 0
Halgemaakt = 0
Ialgemaakt = 0
Jalgemaakt = 0
document.coeff.txtvgl.value = "";
document.coeff.antwA.value = "?";
document.coeff.antwB.value = "?";
document.coeff.antwC.value = "?";
document.coeff.antwD.value = "?";
document.coeff.antwE.value = "?";
document.coeff.antwF.value = "?";
document.coeff.antwG.value = "?";
document.coeff.antwH.value = "?";
document.coeff.antwI.value = "?";
document.coeff.antwJ.value = "?";
document.coeff.oplA.src = "../images/vraagteken.gif";
document.coeff.oplB.src = "../images/vraagteken.gif";
document.coeff.oplC.src = "../images/vraagteken.gif";
document.coeff.oplD.src = "../images/vraagteken.gif";
document.coeff.oplE.src = "../images/vraagteken.gif";
document.coeff.oplF.src = "../images/vraagteken.gif";
document.coeff.oplG.src = "../images/vraagteken.gif";
document.coeff.oplH.src = "../images/vraagteken.gif";
document.coeff.oplI.src = "../images/vraagteken.gif";
document.coeff.oplJ.src = "../images/vraagteken.gif";
kiesgetallen()
toonoef()
}

function controleA()
{
if (Aalgemaakt == 1) 
	{
	document.coeff.antwA.options.value = antwA
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwA = document.coeff.antwA.options[document.coeff.antwA.selectedIndex].value;
	Aalgemaakt = 1
	pogingenteller++;
	if (oplA == antwA)  
		{
		coeff.oplA.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplA.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}

function controleB()
{
if (Balgemaakt == 1) 
	{
	document.coeff.antwB.options.value = antwB
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwB = document.coeff.antwB.options[document.coeff.antwB.selectedIndex].value;
	Balgemaakt = 1
	pogingenteller++;
	if (oplB == antwB)  
		{
		coeff.oplB.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplB.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}

function controleC()
{
if (Calgemaakt == 1) 
	{
	document.coeff.antwC.options.value = antwC
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwC = document.coeff.antwC.options[document.coeff.antwC.selectedIndex].value;
	Calgemaakt = 1
	pogingenteller++;
	if (oplC == antwC)  
		{
		coeff.oplC.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplC.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleD()
{
if (Dalgemaakt == 1) 
	{
	document.coeff.antwD.options.value = antwD
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwD = document.coeff.antwD.options[document.coeff.antwD.selectedIndex].value;
	Dalgemaakt = 1
	pogingenteller++;
	if (oplD == antwD)  
		{
		coeff.oplD.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplD.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleE()
{
if (Ealgemaakt == 1) 
	{
	document.coeff.antwE.options.value = antwE
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwE = document.coeff.antwE.options[document.coeff.antwE.selectedIndex].value;
	Ealgemaakt = 1
	pogingenteller++;
	if (oplE == antwE)  
		{
		coeff.oplE.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplE.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleF()
{
if (Falgemaakt == 1) 
	{
	document.coeff.antwF.options.value = antwF
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwF = document.coeff.antwF.options[document.coeff.antwF.selectedIndex].value;
	Falgemaakt = 1
	pogingenteller++;
	if (oplF == antwF)  
		{
		coeff.oplF.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplF.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleG()
{
if (Galgemaakt == 1) 
	{
	document.coeff.antwG.options.value = antwG
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwG = document.coeff.antwG.options[document.coeff.antwG.selectedIndex].value;
	Galgemaakt = 1
	pogingenteller++;
	if (oplG == antwG)  
		{
		coeff.oplG.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplG.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleH()
{
if (Halgemaakt == 1) 
	{
	document.coeff.antwH.options.value = antwH
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwH = document.coeff.antwH.options[document.coeff.antwH.selectedIndex].value;
	Halgemaakt = 1
	pogingenteller++;
	if (oplH == antwH)  
		{
		coeff.oplH.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplH.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleI()
{
if (Ialgemaakt == 1) 
	{
	document.coeff.antwI.options.value = antwI
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwI = document.coeff.antwI.options[document.coeff.antwI.selectedIndex].value;
	Ialgemaakt = 1
	pogingenteller++;
	if (oplI == antwI)  
		{
		coeff.oplI.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplI.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
function controleJ()
{
if (Jalgemaakt == 1) 
	{
	document.coeff.antwJ.options.value = antwJ
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwJ = document.coeff.antwJ.options[document.coeff.antwJ.selectedIndex].value;
	Jalgemaakt = 1
	pogingenteller++;
	if (oplJ == antwJ)  
		{
		coeff.oplJ.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else coeff.oplJ.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}
