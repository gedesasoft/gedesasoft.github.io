var oplossing1 = ""
var oplossing2 = ""
var oplossing3 = ""
var oplossing4 = ""
var oplossing5 = ""
var oplossing6 = ""
var fig1algemaakt = 0
var fig2algemaakt = 0
var fig3algemaakt = 0
var fig4algemaakt = 0
var fig5algemaakt = 0
var fig6algemaakt = 0
var typeoef1 = 0
var typeoef2 = 0
var typeoef3 = 0
var typeoef4 = 0
var typeoef5 = 0
var typeoef6 = 0
var pogingenteller = 0
var oplossingenteller = 0


function nieuwoef()
{
fig1algemaakt = 0
fig2algemaakt = 0
fig3algemaakt = 0
fig4algemaakt = 0
fig5algemaakt = 0
fig6algemaakt = 0
document.functies.keuze1.options.value = "?"
document.functies.keuze2.options.value = "?"
document.functies.keuze3.options.value = "?"
document.functies.keuze4.options.value = "?"
document.functies.keuze5.options.value = "?"
document.functies.keuze6.options.value = "?"
document.opl1.src = "../images/vraagteken.gif"
document.opl2.src = "../images/vraagteken.gif"
document.opl3.src = "../images/vraagteken.gif"
document.opl4.src = "../images/vraagteken.gif"
document.opl5.src = "../images/vraagteken.gif"
document.opl6.src = "../images/vraagteken.gif"
typeoef1 = 0
typeoef2 = 0
typeoef3 = 0
typeoef4 = 0
typeoef5 = 0
typeoef6 = 0

while (typeoef1 == 0) typeoef1 = Math.floor(Math.random() * 50) + 1;
while ((typeoef2 == 0) || (typeoef2 == typeoef1)) typeoef2 = Math.floor(Math.random() * 50) + 1;
while ((typeoef3 == 0) || (typeoef3 == typeoef1) || (typeoef3 == typeoef2)) typeoef3 = Math.floor(Math.random() * 50) + 1;
while ((typeoef4 == 0) || (typeoef4 == typeoef1) || (typeoef4 == typeoef2) || (typeoef4 == typeoef3)) typeoef4 = Math.floor(Math.random() * 50) + 1;
while ((typeoef5 == 0) || (typeoef5 == typeoef1) || (typeoef5 == typeoef2) || (typeoef5 == typeoef3) || (typeoef5 == typeoef4)) typeoef5 = Math.floor(Math.random() * 50) + 1;
while ((typeoef5 == 0) || (typeoef5 == typeoef1) || (typeoef5 == typeoef2) || (typeoef5 == typeoef3) || (typeoef5 == typeoef4)) typeoef5 = Math.floor(Math.random() * 50) + 1;
while ((typeoef6 == 0) || (typeoef6 == typeoef1) || (typeoef6 == typeoef2) || (typeoef6 == typeoef3) || (typeoef6 == typeoef4) || (typeoef6 == typeoef5)) typeoef6 = Math.floor(Math.random() * 50) + 1;

document.fig1.src = "images/3funct" + typeoef1 + ".gif"
document.fig2.src = "images/3funct" + typeoef2 + ".gif"
document.fig3.src = "images/3funct" + typeoef3 + ".gif"
document.fig4.src = "images/3funct" + typeoef4 + ".gif"
document.fig5.src = "images/3funct" + typeoef5 + ".gif"
document.fig6.src = "images/3funct" + typeoef6 + ".gif"

}

function controle1() 
{
if (fig1algemaakt == 1) 
	{
	document.functies.keuze1.options.value = oplossing1
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
oplossing1 = document.functies.keuze1.options[document.functies.keuze1.selectedIndex].value;

if (oplossing1 == "?") document.opl1.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig1algemaakt = 1
	if (((oplossing1 == "ja") && (typeoef1 <= 30)) || ((oplossing1 == "nee") && (typeoef1 > 30)))
		{
		oplossingenteller++
		document.opl1.src = "../images/goed.gif"		
		}
	else
		{
		document.opl1.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}

function controle2() 
{
if (fig2algemaakt == 1) 
	{
	document.functies.keuze2.options.value = oplossing2
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
oplossing2 = document.functies.keuze2.options[document.functies.keuze2.selectedIndex].value;

if (oplossing2 == "?") document.opl2.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig2algemaakt = 1
	if (((oplossing2 == "ja") && (typeoef2 <= 30)) || ((oplossing2 == "nee") && (typeoef2 > 30)))
		{
		oplossingenteller++
		document.opl2.src = "../images/goed.gif"		
		}
	else
		{
		document.opl2.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}

function controle3() 
{
if (fig3algemaakt == 1) 
	{
	document.functies.keuze3.options.value = oplossing3
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
oplossing3 = document.functies.keuze3.options[document.functies.keuze3.selectedIndex].value;

if (oplossing3 == "?") document.opl3.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig3algemaakt = 1
	if (((oplossing3 == "ja") && (typeoef3 <= 30)) || ((oplossing3 == "nee") && (typeoef3 > 30)))
		{
		oplossingenteller++
		document.opl3.src = "../images/goed.gif"		
		}
	else
		{
		document.opl3.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}

function controle4() 
{
if (fig4algemaakt == 1) 
	{
	document.functies.keuze4.options.value = oplossing4
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
oplossing4 = document.functies.keuze4.options[document.functies.keuze4.selectedIndex].value;

if (oplossing4 == "?") document.opl4.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig4algemaakt = 1
	if (((oplossing4 == "ja") && (typeoef4 <= 30)) || ((oplossing4 == "nee") && (typeoef4 > 30)))
		{
		oplossingenteller++
		document.opl4.src = "../images/goed.gif"		
		}
	else
		{
		document.opl4.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}
function controle5() 
{
if (fig5algemaakt == 1) 
	{
	document.functies.keuze5.options.value = oplossing5
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else

{
oplossing5 = document.functies.keuze5.options[document.functies.keuze5.selectedIndex].value;

if (oplossing5 == "?") document.opl5.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig5algemaakt = 1
	if (((oplossing5 == "ja") && (typeoef5 <= 30)) || ((oplossing5 == "nee") && (typeoef5 > 30)))
		{
		oplossingenteller++
		document.opl5.src = "../images/goed.gif"		
		}
	else
		{
		document.opl5.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}
function controle6() 
{
if (fig6algemaakt == 1) 
	{
	document.functies.keuze6.options.value = oplossing6
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
{
oplossing6 = document.functies.keuze6.options[document.functies.keuze6.selectedIndex].value;

if (oplossing6 == "?") document.opl6.src = "../images/vraagteken.gif"
else
	{
	pogingenteller++
	fig6algemaakt = 1
	if (((oplossing6 == "ja") && (typeoef6 <= 30)) || ((oplossing6 == "nee") && (typeoef6 > 30)))
		{
		oplossingenteller++
		document.opl6.src = "../images/goed.gif"		
		}
	else
		{
		document.opl6.src = "../images/fout.gif"
		}		
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
	}
}
