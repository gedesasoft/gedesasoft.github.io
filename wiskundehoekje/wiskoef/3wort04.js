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



function controleA()
{
if (Aalgemaakt == 1) 
	{
	document.absw.antwA.options.value = antwA
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwA = document.absw.antwA.options[document.absw.antwA.selectedIndex].value;
	Aalgemaakt = 1
	pogingenteller++;
	if (oplA == antwA)  
		{
		absw.oplA.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplA.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}

function controleB()
{
if (Balgemaakt == 1) 
	{
	document.absw.antwB.options.value = antwB
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwB = document.absw.antwB.options[document.absw.antwB.selectedIndex].value;
	Balgemaakt = 1
	pogingenteller++;
	if (oplB == antwB)  
		{
		absw.oplB.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplB.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}

function controleC()
{
if (Calgemaakt == 1) 
	{
	document.absw.antwC.options.value = antwC
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwC = document.absw.antwC.options[document.absw.antwC.selectedIndex].value;
	Calgemaakt = 1
	pogingenteller++;
	if (oplC == antwC)  
		{
		absw.oplC.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplC.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleD()
{
if (Dalgemaakt == 1) 
	{
	document.absw.antwD.options.value = antwD
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwD = document.absw.antwD.options[document.absw.antwD.selectedIndex].value;
	Dalgemaakt = 1
	pogingenteller++;
	if (oplD == antwD)  
		{
		absw.oplD.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplD.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleE()
{
if (Ealgemaakt == 1) 
	{
	document.absw.antwE.options.value = antwE
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwE = document.absw.antwE.options[document.absw.antwE.selectedIndex].value;
	Ealgemaakt = 1
	pogingenteller++;
	if (oplE == antwE)  
		{
		absw.oplE.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplE.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleF()
{
if (Falgemaakt == 1) 
	{
	document.absw.antwF.options.value = antwF
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwF = document.absw.antwF.options[document.absw.antwF.selectedIndex].value;
	Falgemaakt = 1
	pogingenteller++;
	if (oplF == antwF)  
		{
		absw.oplF.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplF.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleG()
{
if (Galgemaakt == 1) 
	{
	document.absw.antwG.options.value = antwG
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwG = document.absw.antwG.options[document.absw.antwG.selectedIndex].value;
	Galgemaakt = 1
	pogingenteller++;
	if (oplG == antwG)  
		{
		absw.oplG.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplG.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleH()
{
if (Halgemaakt == 1) 
	{
	document.absw.antwH.options.value = antwH
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwH = document.absw.antwH.options[document.absw.antwH.selectedIndex].value;
	Halgemaakt = 1
	pogingenteller++;
	if (oplH == antwH)  
		{
		absw.oplH.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplH.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleI()
{
if (Ialgemaakt == 1) 
	{
	document.absw.antwI.options.value = antwI
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwI = document.absw.antwI.options[document.absw.antwI.selectedIndex].value;
	Ialgemaakt = 1
	pogingenteller++;
	if (oplI == antwI)  
		{
		absw.oplI.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplI.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
function controleJ()
{
if (Jalgemaakt == 1) 
	{
	document.absw.antwJ.options.value = antwJ
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwJ = document.absw.antwJ.options[document.absw.antwJ.selectedIndex].value;
	Jalgemaakt = 1
	pogingenteller++;
	if (oplJ == antwJ)  
		{
		absw.oplJ.src = "../images/goed.gif";
		oplossingenteller++;
		}
	else absw.oplJ.src = "../images/fout.gif";

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.absw.aantaljuist.value = oplossingenteller
	document.absw.aantalpogingen.value = pogingenteller
	document.absw.percentage.value = procent		
	}  
}
