var nummer = 0
var plusoo = ""
var minoo = ""
var tweeLL = ""
var tweeRL = ""
var tweelim = ""
var pogingenteller = 0
var oplossingenteller = 0
var limplusoo_goed = 0;
var limminoo_goed = 0;
var lim2LL_goed = 0;
var lim2RL_goed = 0;
var lim2_goed = 0;

function veranderafbeelding()
{
grafiek.limplusoo.options.value = "opnieuw";
grafiek.limminoo.options.value = "opnieuw";
grafiek.lim2LL.options.value = "opnieuw";
grafiek.lim2RL.options.value = "opnieuw";
grafiek.lim2.options.value = "opnieuw";
limplusoo_goed = 0;
limminoo_goed = 0;
lim2LL_goed = 0;
lim2RL_goed = 0;
lim2_goed = 0;
grafiek.opllimplusoo.src = "../images/vraagteken.gif"
grafiek.opllimminoo.src = "../images/vraagteken.gif"
grafiek.opllim2LL.src = "../images/vraagteken.gif"
grafiek.opllim2RL.src = "../images/vraagteken.gif"
grafiek.opllim2.src = "../images/vraagteken.gif"
nummer = Math.floor(Math.random() * 80) + 1;
var nieuwefunctie = 'images/5limiet' + nummer + '.png';
document.functie.src= nieuwefunctie;
limieten()
}

function limieten()
{
if (nummer < 61)
{
	if (nummer%5 == 1) 
	{
	plusoo = "0"
	minoo = "0"
	}
	if (nummer%5 == 2) 
	{
	plusoo = "-2"
	minoo = "-2"
	}
	if (nummer%5 == 3) 
	{
	plusoo = "-1"
	minoo = "-1"
	}
	if (nummer%5 == 4) 
	{
	plusoo = "1"
	minoo = "1"
	}
	if (nummer%5 == 0) 
	{
	plusoo = "2"
	minoo = "2"
	}
}
	
	if ((nummer > 0) && (nummer < 6) || (nummer > 30) && (nummer < 36)) 
	{
	tweeLL = "-oo"
	tweeRL = "+oo"
	tweelim = "/"
	}

	if ((nummer > 5) && (nummer < 11) || (nummer > 35) && (nummer < 41)) 
	{
	tweeLL = "+oo"
	tweeRL = "-oo"
	tweelim = "/"
	}

	if ((nummer > 10) && (nummer < 16) || (nummer > 20) && (nummer < 26) || (nummer > 40) && (nummer < 46) || (nummer > 50) && (nummer < 56)) 
	{
	tweeLL = "+oo"
	tweeRL = "+oo"
	tweelim = "+oo"
	}

	if ((nummer > 15) && (nummer < 21) || (nummer > 25) && (nummer < 31) || (nummer > 45) && (nummer < 51) || (nummer > 55) && (nummer < 61)) 
	{
	tweeLL = "-oo"
	tweeRL = "-oo"
	tweelim = "-oo"
	}

if (nummer == 61)
	{
	plusoo = "-oo"
	minoo = "+oo"
	tweeLL = "+oo"
	tweeRL = "+oo"
	tweelim = "+oo"
	}
if (nummer == 62)
	{
	plusoo = "+oo"
	minoo = "-oo"
	tweeLL = "-oo"
	tweeRL = "-oo"
	tweelim = "-oo"
	}
if (nummer == 63)
	{
	plusoo = "-oo"
	minoo = "+oo"
	tweeLL = "-oo"
	tweeRL = "+oo"
	tweelim = "/"
	}
if (nummer == 64)
	{
	plusoo = "+oo"
	minoo = "-oo"
	tweeLL = "+oo"
	tweeRL = "-oo"
	tweelim = "/"
	}
if (nummer == 65)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "+oo"
	tweeRL = "-oo"
	tweelim = "/"
	}
if (nummer == 66)
	{
	plusoo = "+oo"
	minoo = "+oo"
	tweeLL = "-oo"
	tweeRL = "+oo"
	tweelim = "/"
	}
if (nummer == 67)
	{
	plusoo = "-oo"
	minoo = "+oo"
	tweeLL = "+oo"
	tweeRL = "-oo"
	tweelim = "/"
	}
if (nummer == 68)
	{
	plusoo = "+oo"
	minoo = "-oo"
	tweeLL = "-oo"
	tweeRL = "+oo"
	tweelim = "/"
	}
if (nummer == 69)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "1"
	tweeRL = "1"
	tweelim = "1"
	}
if (nummer == 70)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "-2"
	tweeRL = "-2"
	tweelim = "-2"
	}
if (nummer == 71)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "-1"
	tweeRL = "-1"
	tweelim = "-1"
	}
if (nummer == 72)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "0"
	tweeRL = "0"
	tweelim = "0"
	}
if (nummer == 73)
	{
	plusoo = "+oo"
	minoo = "+oo"
	tweeLL = "2"
	tweeRL = "2"
	tweelim = "2"
	}
if (nummer == 74)
	{
	plusoo = "+oo"
	minoo = "+oo"
	tweeLL = "-1"
	tweeRL = "-1"
	tweelim = "-1"
	}
if (nummer == 75)
	{
	plusoo = "+oo"
	minoo = "+oo"
	tweeLL = "1"
	tweeRL = "1"
	tweelim = "1"
	}
if (nummer == 76)
	{
	plusoo = "-oo"
	minoo = "-oo"
	tweeLL = "+oo"
	tweeRL = "-oo"
	tweelim = "/"
	}
if (nummer == 77)
	{
	plusoo = "+oo"
	minoo = "+oo"
	tweeLL = "-oo"
	tweeRL = "+oo"
	tweelim = "/"
	}
if (nummer == 78)
	{
	plusoo = "-oo"
	minoo = "+oo"
	tweeLL = "-oo"
	tweeRL = "-oo"
	tweelim = "-oo"
	}
if (nummer == 79)
	{
	plusoo = "+oo"
	minoo = "-oo"
	tweeLL = "+oo"
	tweeRL = "+oo"
	tweelim = "+oo"
	}
if (nummer == 80)
	{
	plusoo = "+oo"
	minoo = "-oo"
	tweeLL = "-2"
	tweeRL = "-2"
	tweelim = "-2"
	}

}

function controle() 
{
var antw_limplusoo = document.grafiek.limplusoo.options[document.grafiek.limplusoo.selectedIndex].value;
var antw_limminoo = document.grafiek.limminoo.options[document.grafiek.limminoo.selectedIndex].value;
var antw_lim2LL = document.grafiek.lim2LL.options[document.grafiek.lim2LL.selectedIndex].value;
var antw_lim2RL = document.grafiek.lim2RL.options[document.grafiek.lim2RL.selectedIndex].value;
var antw_lim2 = document.grafiek.lim2.options[document.grafiek.lim2.selectedIndex].value;

if ((antw_limplusoo == "opnieuw") || (antw_limminoo == "opnieuw") || (antw_lim2LL == "opnieuw") || (antw_lim2RL == "opnieuw") || (antw_lim2 == "opnieuw")) 
{
grafiek.opllimplusoo.src = "../images/vraagteken.gif"
grafiek.opllimminoo.src = "../images/vraagteken.gif"
grafiek.opllim2LL.src = "../images/vraagteken.gif"
grafiek.opllim2RL.src = "../images/vraagteken.gif"
grafiek.opllim2.src = "../images/vraagteken.gif"
}
else
{
if ((limplusoo_goed == 1) && (limminoo_goed == 1) && (lim2LL_goed == 1) && (lim2RL_goed == 1) && (lim2_goed == 1)) alert('Fijn dat je deze oefening al eens volledig goed had, kies nu eerst een nieuwe oefening.')
else
	{
	if (limplusoo_goed == 0)
		{
		pogingenteller++;
		if (antw_limplusoo == plusoo) 
			{
			grafiek.opllimplusoo.src = "../images/goed.gif"
			oplossingenteller++;
			limplusoo_goed = 1
			}
		else 
			{
			grafiek.opllimplusoo.src = "../images/fout.gif"
			}
		}

	if (limminoo_goed == 0)
		{
		pogingenteller++;
		if (antw_limminoo == minoo) 
			{
			grafiek.opllimminoo.src = "../images/goed.gif"
			oplossingenteller++;
			limminoo_goed = 1
			}
		else 
			{
			grafiek.opllimminoo.src = "../images/fout.gif"
			}
		}
	if (lim2LL_goed == 0)
		{
		pogingenteller++;
		if (antw_lim2LL == tweeLL) 
			{
			grafiek.opllim2LL.src = "../images/goed.gif"
			oplossingenteller++;
			lim2LL_goed = 1
			}
		else 
			{
			grafiek.opllim2LL.src = "../images/fout.gif"
			}
		}
	if (lim2RL_goed == 0)
		{
		pogingenteller++;
		if (antw_lim2RL == tweeRL) 
			{
			grafiek.opllim2RL.src = "../images/goed.gif"
			oplossingenteller++;
			lim2RL_goed = 1
			}
		else 
			{
			grafiek.opllim2RL.src = "../images/fout.gif"
			}
		}
	if (lim2_goed == 0)
		{
		pogingenteller++;
		if (antw_lim2 == tweelim) 
			{
			grafiek.opllim2.src = "../images/goed.gif"
			oplossingenteller++;
			lim2_goed = 1
			}
		else 
			{
			grafiek.opllim2.src = "../images/fout.gif"
			}
		}
	}
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.grafiek.aantaljuist.value = oplossingenteller
	document.grafiek.aantalpogingen.value = pogingenteller
	document.grafiek.percentage.value = procent		
	}
}
