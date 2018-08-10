var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var A = 0
var B = 0
var C = 0
var D = 0
var X1 = 0
var X2 = 0
var antw1 = 0
var antw2 = 0
var antw3 = 0
var antw4 = 0
var	aantalopl = 0

function kiesgetallen()
{
X1 = 0
X2 = 0

if (typeoefening == 6)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) - 10);
	X2 = (Math.floor(Math.random() * 10 ) - 10);
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 0
	}

if (typeoefening == 5)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) + 1);
	X2 = (Math.floor(Math.random() * 10 ) - 10);
	B = -A * (X1*X1 + X2)
	C = A * X1*X1 * X2
	aantalopl = 2
	}

if (typeoefening == 4)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) + 1);
	X2 = (Math.floor(Math.random() * 10 ) + 1);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1*X1 + X2*X2)
	C = A * X1*X1 * X2*X2
	aantalopl = 4
	}

if (typeoefening == 3)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) + 1);
	X2 = 0
	B = -A * (X1*X1 + X2*X2)
	C = A * X1*X1 * X2*X2
	aantalopl = 3
	}

if (typeoefening == 2)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) + 1);
	X2 = X1;
	B = -A * (X1*X1 + X2*X2)
	C = A * X1*X1 * X2*X2
	aantalopl = 2
	}

if (typeoefening == 1)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 10 ) - 10);
	X2 = 0
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 1
	}

if (typeoefening == 0)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	aantalopl = 0
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 7)
}

function toonoef()
{
document.fv.txtA.value = A;
document.fv.txtB.value = B;
document.fv.txtC.value = C;
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
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		}
	else fv.opl05.src = "../images/fout.gif"
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
		if (fv.enigeopl.value == X2) 
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
		if (((fv.oplx1.value == X1) && (fv.oplx2.value == -X1)) || ((fv.oplx1.value == -X1) && (fv.oplx2.value == X1))) 
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
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oplx3.value == "") || (fv.oplx1.value == fv.oplx2.value) || (fv.oplx1.value == fv.oplx3.value) || (fv.oplx2.value == fv.oplx3.value)) alert('Geef drie verschillende wortels in.')
	else
		{
		pogingenteller++
		if (fv.oplx1.value < 0) antw1 = fv.oplx1.value
		if (fv.oplx1.value == 0) antw2 = fv.oplx1.value  
		if (fv.oplx1.value > 0) antw3 = fv.oplx1.value
		if (fv.oplx2.value < 0) antw1 = fv.oplx2.value
		if (fv.oplx2.value == 0) antw2 = fv.oplx2.value  
		if (fv.oplx2.value > 0) antw3 = fv.oplx2.value
		if (fv.oplx3.value < 0) antw1 = fv.oplx3.value
		if (fv.oplx3.value == 0) antw2 = fv.oplx3.value  
		if (fv.oplx3.value > 0) antw3 = fv.oplx3.value
		if ((antw1 == -X1) && (antw2 == X2) && (antw3 == X1)) 
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
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "") || (fv.oplx3.value == "") || (fv.oplx4.value == "") || (fv.oplx1.value == fv.oplx2.value) || (fv.oplx1.value == fv.oplx3.value) || (fv.oplx1.value == fv.oplx4.value) || (fv.oplx2.value == fv.oplx3.value) || (fv.oplx2.value == fv.oplx4.value) || (fv.oplx3.value == fv.oplx4.value)) alert('Geef vier verschillende wortels in.')
	else
		{
		pogingenteller++
		var teller = 0
		if (fv.oplx1.value < 0) teller = teller + 1
		if (fv.oplx2.value < 0) teller = teller + 2
		if (fv.oplx3.value < 0) teller = teller + 4
		if (fv.oplx4.value < 0) teller = teller + 8
		if (teller == 3) 
			{
			antw1 = Math.min(fv.oplx1.value,fv.oplx2.value)
			antw2 = Math.max(fv.oplx1.value,fv.oplx2.value)
			antw3 = Math.min(fv.oplx3.value,fv.oplx4.value)
			antw4 = Math.max(fv.oplx3.value,fv.oplx4.value)
			} 
		if (teller == 5) 
			{
			antw1 = Math.min(fv.oplx1.value,fv.oplx3.value)
			antw2 = Math.max(fv.oplx1.value,fv.oplx3.value)
			antw3 = Math.min(fv.oplx2.value,fv.oplx4.value)
			antw4 = Math.max(fv.oplx2.value,fv.oplx4.value)
			} 
		if (teller == 9) 
			{
			antw1 = Math.min(fv.oplx1.value,fv.oplx4.value)
			antw2 = Math.max(fv.oplx1.value,fv.oplx4.value)
			antw3 = Math.min(fv.oplx2.value,fv.oplx3.value)
			antw4 = Math.max(fv.oplx2.value,fv.oplx3.value)
			} 
		if (teller == 6) 
			{
			antw1 = Math.min(fv.oplx2.value,fv.oplx3.value)
			antw2 = Math.max(fv.oplx2.value,fv.oplx3.value)
			antw3 = Math.min(fv.oplx1.value,fv.oplx4.value)
			antw4 = Math.max(fv.oplx1.value,fv.oplx4.value)
			} 
		if (teller == 10) 
			{
			antw1 = Math.min(fv.oplx2.value,fv.oplx4.value)
			antw2 = Math.max(fv.oplx2.value,fv.oplx4.value)
			antw3 = Math.min(fv.oplx1.value,fv.oplx3.value)
			antw4 = Math.max(fv.oplx1.value,fv.oplx3.value)
			} 
		if (teller == 12) 
			{
			antw1 = Math.min(fv.oplx3.value,fv.oplx4.value)
			antw2 = Math.max(fv.oplx3.value,fv.oplx4.value)
			antw3 = Math.min(fv.oplx1.value,fv.oplx2.value)
			antw4 = Math.max(fv.oplx1.value,fv.oplx2.value)
			}
		if ((teller != 3) && (teller != 5) && (teller != 9) && (teller != 6) && (teller != 10) && (teller != 12)) 
			{
			antw1 = 0
			}
		if (X1 < X2)
			{
			if ((antw1 == -X2) && (antw2 == -X1) && (antw3 == X1) && (antw4 == X2)) 
				{
				fv.opl.src = "../images/goed.gif"
				oplossingenteller++
				algemaakt = 1
				}
			else fv.opl.src = "../images/fout.gif"
			}
		if (X1 > X2)
			{
			if ((antw1 == -X1) && (antw2 == -X2) && (antw3 == X2) && (antw4 == X1)) 
				{
				fv.opl.src = "../images/goed.gif"
				oplossingenteller++
				algemaakt = 1
				}
			else fv.opl.src = "../images/fout.gif"
			}
		
		}
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		

}

