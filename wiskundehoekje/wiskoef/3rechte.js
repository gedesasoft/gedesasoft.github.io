var voorschrift = ""
var oplossing = ""
var nummeroplossing = 0
var algemaakt = 0
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
algemaakt = 0
voorschrift = ""
document.opl1.src = "../images/vraagteken.gif"
document.functies.keuze1.value = "?"
document.functies.txtvoorschrift.value= ""
typeoef1 = 0
typeoef2 = 0
typeoef3 = 0
typeoef4 = 0
typeoef5 = 0
typeoef6 = 0

while (typeoef1 == 0) typeoef1 = Math.floor(Math.random() * 70) + 1;

if ((typeoef1 > 0) && (typeoef1 < 8)) 
	{
	typeoef2 = typeoef1 + 7
	typeoef3 = typeoef1 + 42
	typeoef6 = typeoef1 + 49
	}

if ((typeoef1 > 7) && (typeoef1 < 14)) 
	{
	typeoef2 = typeoef1 - 7
	typeoef3 = typeoef1 + 35
	typeoef6 = typeoef1 + 42
	}

if ((typeoef1 > 14) && (typeoef1 < 22)) 
	{
	typeoef2 = typeoef1 + 7
	typeoef3 = typeoef1 + 42
	typeoef6 = typeoef1 - 14
	}

if ((typeoef1 > 21) && (typeoef1 < 29)) 
	{
	typeoef2 = typeoef1 - 7
	typeoef3 = typeoef1 + 35
	typeoef6 = typeoef1 - 14
	}

if ((typeoef1 > 28) && (typeoef1 < 36)) 
	{
	typeoef2 = typeoef1 + 7
	typeoef3 = typeoef1 - 28
	typeoef6 = typeoef1 - 7
	}

if ((typeoef1 > 35) && (typeoef1 < 43)) 
	{
	typeoef2 = typeoef1 - 7
	typeoef3 = typeoef1 - 28
	typeoef6 = typeoef1 + 7
	}

if ((typeoef1 > 42) && (typeoef1 < 50)) 
	{
	typeoef2 = typeoef1 + 7
	typeoef3 = typeoef1 - 42
	typeoef6 = typeoef1 - 35
	}

if ((typeoef1 > 49) && (typeoef1 < 57)) 
	{
	typeoef2 = typeoef1 - 7
	typeoef3 = typeoef1 - 42
	typeoef6 = typeoef1 - 49
	}

if ((typeoef1 > 56) && (typeoef1 < 64)) 
	{
	typeoef2 = typeoef1 + 7
	typeoef3 = typeoef1 - 42
	typeoef6 = typeoef1 - 35
	}
	
if ((typeoef1 > 63) && (typeoef1 < 71)) 
	{
	typeoef2 = typeoef1 - 7
	typeoef3 = typeoef1 - 42
	typeoef6 = typeoef1 - 49
	}
	
if (typeoef1 % 7 == 1) 
	{
	typeoef4 = typeoef1 + 4
	typeoef5 = typeoef2 + 4
	}
if (typeoef1 % 7 == 2) 
	{
	typeoef4 = typeoef1 + 5
	typeoef5 = typeoef2 + 5
	}
if (typeoef1 % 7 == 3) 
	{
	typeoef4 = typeoef1 + 3
	typeoef5 = typeoef2 + 3
	}
if (typeoef1 % 7 == 4) 
	{
	typeoef4 = typeoef1 + 1
	typeoef5 = typeoef2 + 1
	}
if (typeoef1 % 7 == 5) 
	{
	typeoef4 = typeoef1 - 1
	typeoef5 = typeoef2 - 1
	}
if (typeoef1 % 7 == 6) 
	{
	typeoef4 = typeoef1 - 3
	typeoef5 = typeoef2 - 3
	}
if (typeoef1 % 7 == 0) 
	{
	typeoef4 = typeoef1 - 5
	typeoef5 = typeoef2 - 5
	}

if (typeoef1 < 64) voorschrift = voorschrift + 'y = '
if (typeoef1 > 63) voorschrift = voorschrift + 'x = '
if ((typeoef1 > 0) && (typeoef1 < 8)) voorschrift = voorschrift + '2x ' 
if ((typeoef1 > 7) && (typeoef1 < 15)) voorschrift = voorschrift + '-2x ' 
if ((typeoef1 > 14) && (typeoef1 < 22)) voorschrift = voorschrift + 'x ' 
if ((typeoef1 > 21) && (typeoef1 < 29)) voorschrift = voorschrift + '-x ' 
if ((typeoef1 > 28) && (typeoef1 < 36)) voorschrift = voorschrift + '3x ' 
if ((typeoef1 > 35) && (typeoef1 < 43)) voorschrift = voorschrift + '-3x ' 
if ((typeoef1 > 42) && (typeoef1 < 50)) voorschrift = voorschrift + '0,5x ' 
if ((typeoef1 > 49) && (typeoef1 < 57)) voorschrift = voorschrift + '-0,5x ' 

if ((typeoef1 < 57) && (typeoef1 % 7 == 2)) voorschrift = voorschrift + '- 3' 
if ((typeoef1 < 57) && (typeoef1 % 7 == 3)) voorschrift = voorschrift + '- 2' 
if ((typeoef1 < 57) && (typeoef1 % 7 == 4)) voorschrift = voorschrift + '- 1' 
if ((typeoef1 < 57) && (typeoef1 % 7 == 5)) voorschrift = voorschrift + '+ 1' 
if ((typeoef1 < 57) && (typeoef1 % 7 == 6)) voorschrift = voorschrift + '+ 2' 
if ((typeoef1 < 57) && (typeoef1 % 7 == 0)) voorschrift = voorschrift + '+ 3' 

if ((typeoef1 > 56) && (typeoef1 % 7 == 1)) voorschrift = voorschrift + '0' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 2)) voorschrift = voorschrift + '-3' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 3)) voorschrift = voorschrift + '-2' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 4)) voorschrift = voorschrift + '-1' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 5)) voorschrift = voorschrift + '1' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 6)) voorschrift = voorschrift + '2' 
if ((typeoef1 > 56) && (typeoef1 % 7 == 0)) voorschrift = voorschrift + '3' 

document.functies.txtvoorschrift.value= voorschrift

if (typeoef1 < 10) typeoef1 = '0' + typeoef1
if (typeoef2 < 10) typeoef2 = '0' + typeoef2
if (typeoef3 < 10) typeoef3 = '0' + typeoef3
if (typeoef4 < 10) typeoef4 = '0' + typeoef4
if (typeoef5 < 10) typeoef5 = '0' + typeoef5
if (typeoef6 < 10) typeoef6 = '0' + typeoef6

nummeroplossing = Math.floor(Math.random() * 6) + 1;

if (nummeroplossing == 1)
	{
	oplossing = "A"
	document.fig1.src = "images/3rechte" + typeoef1 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef6 + ".gif"
	}

if (nummeroplossing == 2)
	{
	oplossing = "B"
	document.fig1.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef1 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef6 + ".gif"
	}
	
if (nummeroplossing == 3)
	{
	oplossing = "C"
	document.fig1.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef1 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef6 + ".gif"
	}

if (nummeroplossing == 4)
	{
	oplossing = "D"
	document.fig1.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef1 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef6 + ".gif"
	}
if (nummeroplossing == 5)
	{
	oplossing = "E"
	document.fig1.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef1 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef6 + ".gif"
	}
if (nummeroplossing == 6)
	{
	oplossing = "F"
	document.fig1.src = "images/3rechte" + typeoef6 + ".gif"
	document.fig2.src = "images/3rechte" + typeoef2 + ".gif"
	document.fig3.src = "images/3rechte" + typeoef3 + ".gif"
	document.fig4.src = "images/3rechte" + typeoef4 + ".gif"
	document.fig5.src = "images/3rechte" + typeoef5 + ".gif"
	document.fig6.src = "images/3rechte" + typeoef1 + ".gif"
	}
}

function controle() 
{
if (algemaakt == 1) 
	{
	document.functies.keuze1.options.value = gekozenoplossing
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	gekozenoplossing = document.functies.keuze1.options[document.functies.keuze1.selectedIndex].value;

	if (gekozenoplossing == "?") document.opl1.src = "../images/vraagteken.gif"
	else
		{
		pogingenteller++
		algemaakt = 1
		if (gekozenoplossing == oplossing)
			{
			oplossingenteller++
			document.opl1.src = "../images/goed.gif"		
			}
		else
			{
			document.opl1.src = "../images/fout.gif"
			alert('De rechte met vergelijking ' + voorschrift + ' is getekend in grafiek ' + oplossing + '!')  
			}		
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
}
}
