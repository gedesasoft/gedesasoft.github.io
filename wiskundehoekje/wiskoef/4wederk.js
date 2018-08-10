var situatie = 0
var soortoefening = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var P = 0
var Q = 0
var R = 0
var coX4 = 0
var coX3 = 0
var coX2 = 0
var coX1 = 0
var coX0 = 0
var getal = 0
var antw1 = 0
var antw2 = 0
var antw3 = 0
var antw4 = 0
var opl1 = 0
var opl2 = 0
var opl3 = 0
var opl4 = 0
var	aantalopl = 0

function kiesgetallen()
{
if (typeoefening == 1)
	{
 	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	B = Math.floor(Math.random() * Math.abs(A));
	aantalopl = 0
	situatie = 0
	}

if (typeoefening == 2)
	{
	C = (Math.floor(Math.random() * 3 ) + 1);

	getal = Math.floor(Math.random() * 8) + 1
	if (getal == 1) P = 2
	if (getal == 2) P = 4
	if (getal == 3) P = 7
	if (getal == 4) P = 8
	if (getal == 5) P = -2
	if (getal == 6) P = -4
	if (getal == 7) P = -7
	if (getal == 8) P = -8

	getal = Math.floor(Math.random() * 3) + 1
	if (getal == 1) Q = 1
	if (getal == 2) Q = 3
	if (getal == 3) Q = 5

	A = C * P * Q
	B = (P*P + Q*Q) * (0 - C)
	
	aantalopl = 2
	situatie = 4

	if (Q == 1) 
		{
		opl1 = P
		if (P > 0) opl2 = "1/" + P 
		if (P < 0) opl2 = "-1/" + Math.abs(P) 
		}
	else
		{
		if (P > 0) 
			{
			opl1 = P + "/" + Q
			opl2 = Q + "/" + P
			}
		if (P < 0) 
			{
			opl1 = P + "/" + Q
			opl2 = "-" + Q + "/" + Math.abs(P)
			}
		} 
	}

if (soortoefening == 1)
	{
	aantalopl = aantalopl + 1
	situatie = situatie + 1

	opl3 = 1

	coX4 = 0
	coX3 = A
	coX2 = B - A
	coX1 = A - B
	coX0 = 0 - A
	}
	
if (soortoefening == 2)
	{
	aantalopl = aantalopl + 1
	situatie = situatie + 2

	opl3 = -1

	coX4 = 0
	coX3 = A
	coX2 = B + A
	coX1 = B + A
	coX0 = A
	}
	
if (soortoefening == 3)
	{
	aantalopl = aantalopl + 2
	situatie = situatie + 3

	opl3 = 1
	opl4 = -1 

	coX4 = A
	coX3 = B
	coX2 = 0
	coX1 = 0 - B
	coX0 = 0 - A
	}

if (soortoefening == 4)
	{
	getal = Math.floor(Math.random() * 8) + 1
	if (getal == 1) R = 3
	if (getal == 2) R = 5
	if (getal == 3) R = 6
	if (getal == 4) R = 9
	if (getal == 5) R = -3
	if (getal == 6) R = -5
	if (getal == 7) R = -6
	if (getal == 8) R = -9

	D = R
	E = (R*R + 1) * (0 - 1)
	
	aantalopl = aantalopl + 2
	situatie = situatie + 4

	opl3 = R
	if (R > 0) opl4 = "1/" + R 
	if (R < 0) opl4 = "-1/" + Math.abs(R)

	coX4 = A * D
	coX3 = A * E + B * D
	coX2 = A * D + B * E + A * D
	coX1 = A * E + B * D
	coX0 = A * D
	}

}

function kiessoortoef()
{
soortoefening = Math.floor(Math.random() * 4) + 1
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
if (coX4 != 0)
	{
	document.all.vierdemacht.style.display= "";
	document.fv.txtX4.value = coX4;
	}
else
	{
	document.all.vierdemacht.style.display= "none";
	}

if (coX3 != 0)
	{
	document.all.derdemacht.style.display= "";
	document.fv.txtX3.value = coX3;
	}
else
	{
	document.all.derdemacht.style.display= "none";
	}
	
if (coX2 != 0)
	{
	document.all.tweedemacht.style.display= "";
	document.fv.txtX2.value = coX2;
	}
else
	{
	document.all.tweedemacht.style.display= "none";
	}

if (coX1 != 0)
	{
	document.all.eerstemacht.style.display= "";
	document.fv.txtX1.value = coX1;
	}
else
	{
	document.all.eerstemacht.style.display= "none";
	}

document.fv.txtX0.value = coX0;
}

function wissen()
{
fv.opl05.src = "../images/vraagteken.gif"
fv.opl.src = "../images/vraagteken.gif"
document.fv.keuzenp.options.value = "x";
document.fv.enigeopl.value = ""
document.fv.oplx1.value = ""
document.fv.oplx2.value = ""
document.fv.oplx3.value = ""
document.fv.oplx4.value = ""
document.all.eenopl.style.display= "none";
document.all.tweeopl.style.display= "none";
document.all.drieopl.style.display= "none";
document.all.vieropl.style.display= "none";
}

function nieuwoef()
{
algemaakt = 0
wissen()
kiesoef()
kiessoortoef()
kiesgetallen()
toonoef()
}

function wijzignp()
{
var aantalnp = document.fv.keuzenp.options[document.fv.keuzenp.selectedIndex].value;

if (aantalnp == "x") 
	{
	fv.opl05.src = "../images/vraagteken.gif"
	document.all.eenopl.style.display= "none";
	document.all.tweeopl.style.display= "none";
	document.all.drieopl.style.display= "none";
	document.all.vieropl.style.display= "none";
	}
if (aantalnp == "0") 
	{
	pogingenteller++
	fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "1") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.eenopl.style.display= "";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "2") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.tweeopl.style.display= "";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "3") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.tweeopl.style.display= "";
		document.all.drieopl.style.display= "";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "4") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.tweeopl.style.display= "";
		document.all.drieopl.style.display= "";
		document.all.vieropl.style.display= "";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else eigenlijkecontrole()
}

function eigenlijkecontrole()
{
if (aantalopl == 1)
	{
	if (fv.enigeopl.value == "") alert('Geef de wortel in.')
	else
		{
		pogingenteller++
		if (fv.enigeopl.value == opl3) 
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			}
		else fv.opl.src = "../images/fout.gif"
		}
	}
if (aantalopl == 2)
	{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "")) alert('Geef beide wortels in.')
	else
		{
		pogingenteller++
		if (((fv.oplx1.value == opl3) && (fv.oplx2.value == opl4)) || ((fv.oplx1.value == opl4) && (fv.oplx2.value == opl3))) 
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			}
		else fv.opl.src = "../images/fout.gif"
		}
	}
	
if (aantalopl == 3)
	{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oplx3.value == "")) alert('Geef drie wortels in.')
	else
		{
		pogingenteller++
		if (((fv.oplx1.value == opl1) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl3)) || ((fv.oplx1.value == opl1) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl2)) || ((fv.oplx1.value == opl2) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl3)) || ((fv.oplx1.value == opl2) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl1)) || ((fv.oplx1.value == opl3) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl2)) || ((fv.oplx1.value == opl3) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl1))) 
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			}
		else fv.opl.src = "../images/fout.gif"
		}
	}
	
if (aantalopl == 4)
	{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oplx3.value == "") || (fv.oplx4.value == "")) alert('Geef vier wortels in.')
	else
		{
		pogingenteller++
		if (fv.oplx1.value == opl1) 
			{
			if (((fv.oplx4.value == opl4) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl3)) || ((fv.oplx4.value == opl4) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl3)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl4)) || ((fv.oplx4.value == opl3) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl3) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl4))) 
				{
				fv.opl.src = "../images/goed.gif"
				oplossingenteller++
				algemaakt = 1
				}
			else fv.opl.src = "../images/fout.gif"
			} 
		else
			{
			if (fv.oplx1.value == opl2) 
				{
				if (((fv.oplx4.value == opl4) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl3)) || ((fv.oplx4.value == opl4) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl3)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl4)) || ((fv.oplx4.value == opl3) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl3) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl4))) 
					{
					fv.opl.src = "../images/goed.gif"
					oplossingenteller++
					algemaakt = 1
					}
				else fv.opl.src = "../images/fout.gif"
				}
			else
				{
				if (fv.oplx1.value == opl3) 
					{
					if (((fv.oplx4.value == opl4) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl4) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl4)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl4) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl4))) 
						{
						fv.opl.src = "../images/goed.gif"
						oplossingenteller++
						algemaakt = 1
						}
					else fv.opl.src = "../images/fout.gif"
					}		
				else
					{
					if (fv.oplx1.value == opl4) 
						{
						if (((fv.oplx4.value == opl3) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl3) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl2)) || ((fv.oplx4.value == opl1) && (fv.oplx2.value == opl2) && (fv.oplx3.value == opl3)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl3) && (fv.oplx3.value == opl1)) || ((fv.oplx4.value == opl2) && (fv.oplx2.value == opl1) && (fv.oplx3.value == opl3))) 
							{
							fv.opl.src = "../images/goed.gif"
							oplossingenteller++
							algemaakt = 1
							}
						else fv.opl.src = "../images/fout.gif"
						}				
					}
				}
			}
		}
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		

}

