var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var antwoplv = 0
var nr_teken = 0
var waarde_teken = 0
var totaal_teken = 0
var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var G = 0
var H = 0
var X1 = 0
var X2 = 0
var X3 = 0
var X4 = 0
var X5 = 0
var antw3 = 0
var antw4 = 0
var antw5 = 0
var wortel1 = 0
var wortel2 = 0
var wortel3 = 0
var wortel4 = 0
var wortel5 = 0
var	aantalopl = 0
var	opgave = ""
var	rechts = ""

function kiesgetallen()
{

if (typeoefening == 1)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2

	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 2
	H = (Math.floor(Math.random() * 10 ) - 6);
	if (H == 0) H = 3
	if (typevariatie == 2)
		{
		B = B + G;
		C = C + H
		}

	aantalopl = 0
	}

if (typeoefening == 2)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = X1
	B = -A * (X1 + X2)
	C = A * X1 * X2

	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 2
	H = (Math.floor(Math.random() * 10 ) - 6);
	if (H == 0) H = 3
	if (typevariatie == 2)
		{
		B = B + G;
		C = C + H
		}

	aantalopl = 1
	}

if (typeoefening == 3)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = (Math.floor(Math.random() * 20 ) - 9);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2

	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 2
	H = (Math.floor(Math.random() * 10 ) - 6);
	if (H == 0) H = 3
	if (typevariatie == 2)
		{
		B = B + G;
		C = C + H
		}

	aantalopl = 2
	}
	
if (typeoefening == 4)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	aantalopl = 1
	X5 = (Math.floor(Math.random() * 20 ) - 9);
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}

if (typeoefening == 5)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = X1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 2
	X5 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}

if (typeoefening == 6)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = (Math.floor(Math.random() * 20 ) - 9);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 3
	X5 = (Math.floor(Math.random() * 20 ) - 9);
	while ((X5 == X1) || (X5 == X2))  X5 = X5 + 1
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}

if (typeoefening == 7)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	aantalopl = 2
	X3 = (Math.floor(Math.random() * 20 ) - 9);
	X4 = (Math.floor(Math.random() * 20 ) - 9);
	if (X3 == X4) X4 = X3 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	}

if (typeoefening == 8)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = X1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 3
	X3 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	X4 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	if (X3 == X1) X3 = X1 + 1
	while ((X4 == X1) || (X4 == X3))  X4 = X4 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	}

if (typeoefening == 9)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = (Math.floor(Math.random() * 20 ) - 9);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 4
	X3 = (Math.floor(Math.random() * 20 ) - 9);
	X4 = (Math.floor(Math.random() * 20 ) - 9);
	while ((X3 == X1) || (X3 == X2))  X3 = X3 + 1
	while ((X4 == X1) || (X4 == X2) || (X4 == X3))  X4 = X4 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	}

if (typeoefening == 10)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	aantalopl = 3
	X3 = (Math.floor(Math.random() * 20 ) - 9);
	X4 = (Math.floor(Math.random() * 20 ) - 9);
	if (X3 == X4) X4 = X3 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	X5 = (Math.floor(Math.random() * 20 ) - 9);
	while ((X5 == X3) || (X5 == X4))  X5 = X5 + 1
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}

if (typeoefening == 11)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = X1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 4
	X3 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	X4 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	if (X3 == X1) X3 = X1 + 1
	while ((X4 == X1) || (X4 == X3))  X4 = X4 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	X5 = X1 + (Math.floor(Math.random() * 10 ) + 1);
	while ((X5 == X3) || (X5 == X4) || (X5 == X1))  X5 = X5 + 1
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}

if (typeoefening == 12)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = (Math.floor(Math.random() * 20 ) - 9);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	aantalopl = 5
	X3 = (Math.floor(Math.random() * 20 ) - 9);
	X4 = (Math.floor(Math.random() * 20 ) - 9);
	while ((X3 == X1) || (X3 == X2))  X3 = X3 + 1
	while ((X4 == X1) || (X4 == X2) || (X4 == X3))  X4 = X4 + 1
 	D = (Math.floor(Math.random() * 5 ) + 1);
	E = -D * (X3 + X4)
	F = D * X3 * X4
	X5 = (Math.floor(Math.random() * 20 ) - 9);
	while ((X5 == X3) || (X5 == X4) || (X5 == X1) || (X5 == X2))  X5 = X5 + 1
	G = (Math.floor(Math.random() * 10 ) - 6);
	if (G == 0) G = 1
	H = 0 - G * X5
	}
}

function schrijfopgave()
{
opgavedeel1 = ""
opgavedeel2 = ""
opgavedeel3 = ""

if (typeoefening > 3) opgavedeel1 = opgavedeel1 + '('

if ((A > 1) || (A < -1)) opgavedeel1 = opgavedeel1 + A + 'x²'	
if (A == 1) opgavedeel1 = opgavedeel1 + 'x²'	
if (A == -1) opgavedeel1 = opgavedeel1 + '-x²'	

if (B > 1) opgavedeel1 = opgavedeel1 + ' + ' + Math.abs(B) + 'x'
if (B == 1) opgavedeel1 = opgavedeel1 + ' + x'
if (B == -1) opgavedeel1 = opgavedeel1 + ' - x'
if (B < -1) opgavedeel1 = opgavedeel1 + ' - ' + Math.abs(B) + 'x'

if (C > 0) opgavedeel1 = opgavedeel1 + ' + ' + Math.abs(C)
if (C < 0) opgavedeel1 = opgavedeel1 + ' - ' + Math.abs(C)

if (typeoefening > 3) opgavedeel1 = opgavedeel1 + ')'

if (typeoefening > 6)
	{
	opgavedeel2 = '('

	if ((D > 1) || (D < -1)) opgavedeel2 = opgavedeel2 + D + 'x²'	
	if (D == 1) opgavedeel2 = opgavedeel2 + 'x²'	
	if (D == -1) opgavedeel2 = opgavedeel2 + '-x²'	

	if (E > 1) opgavedeel2 = opgavedeel2 + ' + ' + Math.abs(E) + 'x'
	if (E == 1) opgavedeel2 = opgavedeel2 + ' + x'
	if (E == -1) opgavedeel2 = opgavedeel2 + ' - x'
	if (E < -1) opgavedeel2 = opgavedeel2 + ' - ' + Math.abs(E) + 'x'

	if (F > 0) opgavedeel2 = opgavedeel2 + ' + ' + Math.abs(F)
	if (F < 0) opgavedeel2 = opgavedeel2 + ' - ' + Math.abs(F)

	opgavedeel2 = opgavedeel2 + ')'
	}

if ((typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6) || (typeoefening == 10) || (typeoefening == 11) || (typeoefening == 12))
		{
		opgavedeel3 = opgavedeel3 + '('
		if ((G > 1) || (G < -1)) opgavedeel3 = opgavedeel3 + G + 'x'	
		if (G == 1) opgavedeel3 = opgavedeel3 + 'x'	
		if (G == -1) opgavedeel3 = opgavedeel3 + '-x'	
		if (H > 0) opgavedeel3 = opgavedeel3 + ' + ' + Math.abs(H)
		if (H < 0) opgavedeel3 = opgavedeel3 + ' - ' + Math.abs(H)
		opgavedeel3 = opgavedeel3 + ')'
		}

if (typeoefening < 4) opgave = opgavedeel1
if ((typeoefening > 3) && (typeoefening < 7)) 
	{
	var typevolgorde = Math.floor(Math.random() * 2) + 1
	if (typevolgorde == 1) opgave = opgavedeel1 + opgavedeel3
	if (typevolgorde == 2) opgave = opgavedeel3 + opgavedeel1
	} 
if ((typeoefening > 6) && (typeoefening < 10)) 
	{
	var typevolgorde = Math.floor(Math.random() * 2) + 1
	if (typevolgorde == 1) opgave = opgavedeel1 + opgavedeel2
	if (typevolgorde == 2) opgave = opgavedeel2 + opgavedeel1
	} 
if (typeoefening > 9) 
	{
	var typevolgorde = Math.floor(Math.random() * 6) + 1
	if (typevolgorde == 1) opgave = opgavedeel1 + opgavedeel2 + opgavedeel3
	if (typevolgorde == 2) opgave = opgavedeel1 + opgavedeel3 + opgavedeel2
	if (typevolgorde == 3) opgave = opgavedeel2 + opgavedeel1 + opgavedeel3
	if (typevolgorde == 4) opgave = opgavedeel2 + opgavedeel3 + opgavedeel1
	if (typevolgorde == 5) opgave = opgavedeel3 + opgavedeel1 + opgavedeel2
	if (typevolgorde == 6) opgave = opgavedeel3 + opgavedeel2 + opgavedeel1
	} 
}


function kiesoef()
{
typeoefening = Math.floor(Math.random() * 12) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
if ((typevariatie == 2) && (typeoefening < 4))
	{
	rechts = ""
	if ((G > 1) || (G < -1)) rechts = rechts + G + 'x'	
	if (G == 1) rechts = rechts + 'x'	
	if (G == -1) rechts = rechts + '-x'	
	if (H > 0) rechts = rechts + ' + ' + Math.abs(H)
	if (H < 0) rechts = rechts + ' - ' + Math.abs(H)
	}
else rechts = "0"

document.fv.txtlinks.value = opgave;
document.fv.txtrechts.value = rechts;

nr_teken = Math.floor(Math.random() * 4) + 1
if (nr_teken == 1) fv.teken.src = "images/kleiner_dan.gif"
if (nr_teken == 2) fv.teken.src = "images/kleiner_dan_of_gelijk.gif"
if (nr_teken == 3) fv.teken.src = "images/groter_dan.gif"
if (nr_teken == 4) fv.teken.src = "images/groter_dan_of_gelijk.gif"
 
}

function wissen()
{
fv.opl10.src = "../images/vraagteken.gif"
fv.opl05.src = "../images/vraagteken.gif"
fv.opl.src = "../images/vraagteken.gif"
fv.teken.src = "images/leeg.gif"
document.fv.keuzenp.options.value = "x";
document.fv.keuzeoplv.options.value = "x";
document.fv.enigeopl.value = ""
document.fv.oplx1.value = ""
document.fv.oplx2.value = ""
document.fv.oplx3.value = ""
document.fv.oplx4.value = ""
document.fv.oplx5.value = ""
document.all.eenopl.style.display= "none";
document.all.tweeopl.style.display= "none";
document.all.drieopl.style.display= "none";
document.all.vieropl.style.display= "none";
document.all.vijfopl.style.display= "none";
document.all.oplverz.style.display= "none";
}

function nieuwoef()
{
algemaakt = 0
wissen()
kiesoef()
kiesvariatie()
kiesgetallen()
schrijfopgave()

wortel1 = ""
wortel2 = ""
wortel3 = ""
wortel4 = ""
wortel5 = ""

sorteerwortels()
toonoef()
}

function sorteerantw3()
{
if (antw3 < wortel1)
	{
	wortel3 = wortel2
	wortel2 = wortel1
	wortel1 = antw3
	}
if ((antw3 > wortel1) && (antw3 < wortel2)) 
	{
	wortel3 = wortel2
	wortel2 = antw3
	}
if (antw3 > wortel2)
	{
	wortel3 = antw3
	}
}

function sorteerantw4()
{
if (antw4 < wortel1)
	{
	wortel4 = wortel3
	wortel3 = wortel2
	wortel2 = wortel1
	wortel1 = antw4
	}
if ((antw4 > wortel1) && (antw4 < wortel2)) 
	{
	wortel4 = wortel3
	wortel3 = wortel2
	wortel2 = antw4
	}
if ((antw4 > wortel2) && (antw4 < wortel3)) 
	{
	wortel4 = wortel3
	wortel3 = antw4
	}
if (antw4 > wortel3)
	{
	wortel4 = antw4
	}
}

function sorteerantw5()
{
if (antw5 < wortel1)
	{
	wortel5 = wortel4
	wortel4 = wortel3
	wortel3 = wortel2
	wortel2 = wortel1
	wortel1 = antw5
	}
if ((antw5 > wortel1) && (antw5 < wortel2)) 
	{
	wortel5 = wortel4
	wortel4 = wortel3
	wortel3 = wortel2
	wortel2 = antw5
	}
if ((antw5 > wortel2) && (antw5 < wortel3)) 
	{
	wortel5 = wortel4
	wortel4 = wortel3
	wortel3 = antw5
	}
if ((antw5 > wortel3) && (antw5 < wortel4)) 
	{
	wortel5 = wortel4
	wortel4 = antw5
	}
if (antw5 > wortel4)
	{
	wortel5 = antw5
	}
}

function sorteerwortels()
{
if (typeoefening == 2)
	{
	wortel1 = X1
	}
if (typeoefening == 4)
	{
	wortel1 = X5
	}
if ((typeoefening == 3) || (typeoefening == 6) || (typeoefening == 9) || (typeoefening == 12))
	{
	wortel1 = Math.min(X1,X2)
	wortel2 = Math.max(X1,X2)
	}
if (typeoefening == 5)
	{
	wortel1 = Math.min(X1,X5)
	wortel2 = Math.max(X1,X5)
	}
if ((typeoefening == 7) || (typeoefening == 10))
	{
	wortel1 = Math.min(X3,X4)
	wortel2 = Math.max(X3,X4)
	}
if ((typeoefening == 8) || (typeoefening == 11))
	{
	wortel1 = Math.min(X1,X3)
	wortel2 = Math.max(X1,X3)
	}
if ((typeoefening == 6) || (typeoefening == 10))
	{
	antw3 = X5
	sorteerantw3()
	}
if ((typeoefening == 8) || (typeoefening == 11))
	{
	antw3 = X4
	sorteerantw3()
	}
if ((typeoefening == 9) || (typeoefening == 12))
	{
	antw3 = X3
	sorteerantw3()
	antw4 = X4
	sorteerantw4()
	}
if (typeoefening == 11)
	{
	antw4 = X5
	sorteerantw4()
	}
if (typeoefening == 12)
	{
	antw5 = X5
	sorteerantw5()
	}
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
		schrijfoplv()
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

if (aantalnp == "5") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.tweeopl.style.display= "";
		document.all.drieopl.style.display= "";
		document.all.vieropl.style.display= "";
		document.all.vijfopl.style.display= "";
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
		if (fv.enigeopl.value == wortel1) 
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			schrijfoplv()
			}
		else fv.opl.src = "../images/fout.gif"
		}
	}
if (aantalopl == 2)
	{
		pogingenteller++
		if ((fv.oplx1.value == wortel1) && (fv.oplx2.value == wortel2))
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			schrijfoplv()
			}
		else fv.opl.src = "../images/fout.gif"

	}
	
if (aantalopl == 3)
	{
		pogingenteller++
		if ((fv.oplx1.value == wortel1) && (fv.oplx2.value == wortel2) && (fv.oplx3.value == wortel3))
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			schrijfoplv()
			}
		else fv.opl.src = "../images/fout.gif"
	}
	
if (aantalopl == 4)
	{
		pogingenteller++
		if ((fv.oplx1.value == wortel1) && (fv.oplx2.value == wortel2) && (fv.oplx3.value == wortel3) && (fv.oplx4.value == wortel4))
				{
				fv.opl.src = "../images/goed.gif"
				oplossingenteller++
				algemaakt = 1
				schrijfoplv()
				}
			else fv.opl.src = "../images/fout.gif"
		}

if (aantalopl == 5)
	{
		pogingenteller++
		if ((fv.oplx1.value == wortel1) && (fv.oplx2.value == wortel2) && (fv.oplx3.value == wortel3) && (fv.oplx4.value == wortel4) && (fv.oplx5.value == wortel5))
				{
				fv.opl.src = "../images/goed.gif"
				oplossingenteller++
				algemaakt = 1
				schrijfoplv()
				}
			else fv.opl.src = "../images/fout.gif"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		

}

function totaalteken()
{
if (typeoefening < 4)
	{
	if (A < 0) waarde_teken = 0
	if (A > 0) waarde_teken = 4
	}
if ((typeoefening > 3) && (typeoefening < 7))
	{
	if (A*G < 0) waarde_teken = 0
	if (A*G > 0) waarde_teken = 4
	}
if ((typeoefening > 6) && (typeoefening < 10))
	{
	if (A*D < 0) waarde_teken = 0
	if (A*D > 0) waarde_teken = 4
	}
if (typeoefening > 9)
	{
	if (A*D*G < 0) waarde_teken = 0
	if (A*D*G > 0) waarde_teken = 4
	}

totaal_teken = waarde_teken + nr_teken
if (typeoefening == 1)
	{
	if (totaal_teken == 1) antwoplv = 1
	if (totaal_teken == 2) antwoplv = 1
	if (totaal_teken == 3) antwoplv = 2
	if (totaal_teken == 4) antwoplv = 2
	if (totaal_teken == 5) antwoplv = 2
	if (totaal_teken == 6) antwoplv = 2
	if (totaal_teken == 7) antwoplv = 1
	if (totaal_teken == 8) antwoplv = 1
	}

if (typeoefening > 1)
	{
	if (totaal_teken == 1) antwoplv = 1
	if (totaal_teken == 2) antwoplv = 2
	if (totaal_teken == 3) antwoplv = 3
	if (totaal_teken == 4) antwoplv = 4
	if (totaal_teken == 5) antwoplv = 3
	if (totaal_teken == 6) antwoplv = 4
	if (totaal_teken == 7) antwoplv = 1
	if (totaal_teken == 8) antwoplv = 2
	}

}

function schrijfoplv()
{
totaalteken()
document.all.oplverz.style.display= "";
if (typeoefening == 1)
	{
	fv.mog1.value = "]-oo,+oo["
	fv.mog2.value = "{}"
	}
if (typeoefening == 2)
	{
	fv.mog1.value = "]-oo," + wortel1 + "[ U ]" + wortel1 + ",+oo["
	fv.mog2.value = "]-oo,+oo["
	fv.mog3.value = "{}"
	fv.mog4.value = "{" + wortel1 + "}"
	}
if (typeoefening == 4)
	{
	fv.mog1.value = "]" + wortel1 + ",+oo["
	fv.mog2.value = "[" + wortel1 + ",+oo["
	fv.mog3.value = "]-oo," + wortel1 + "["
	fv.mog4.value = "]-oo," + wortel1 + "]"
	}
if (typeoefening == 5)
	{
	fv.mog1.value = "]" + wortel2 + ",+oo["
	fv.mog2.value = "{" + wortel1 + "} U [" + wortel2 + ",+oo["
	fv.mog3.value = "]-oo," + wortel1 + "[ U ]" + wortel1 + "," + wortel2 + "["
	fv.mog4.value = "]-oo," + wortel2 + "]"
	}
if ((typeoefening == 3) || (typeoefening == 7))
	{
	fv.mog1.value = "]-oo," + wortel1 + "[ U ]" + wortel2 + ",+oo["
	fv.mog2.value = "]-oo," + wortel1 + "] U [" + wortel2 + ",+oo["
	fv.mog3.value = "]" + wortel1 + "," + wortel2 + "["
	fv.mog4.value = "[" + wortel1 + "," + wortel2 + "]"
	}
if ((typeoefening == 6) || (typeoefening == 10)) 
	{
	fv.mog1.value = "]" + wortel1 + "," + wortel2 + "[ U ]" + wortel3 + ",+oo["
	fv.mog2.value = "[" + wortel1 + "," + wortel2 + "] U [" + wortel3 + ",+oo["
	fv.mog3.value = "]-oo," + wortel1 + "[ U ]" + wortel2 + "," + wortel3 + "["
	fv.mog4.value = "]-oo," + wortel1 + "] U [" + wortel2 + "," + wortel3 + "]"
	}
if (typeoefening == 8)
	{
	fv.mog1.value = "]-oo," + wortel1 + "[ U ]" + wortel1 + "," + wortel2 + "[ U ]" + wortel3 + ",+oo["
	fv.mog2.value = "]-oo," + wortel2 + "] U [" + wortel3 + ",+oo["
	fv.mog3.value = "]" + wortel2 + "," + wortel3 + "["
	fv.mog4.value = "{" + wortel1 + "} U [" + wortel2 + "," + wortel3 + "]"
	}
if (typeoefening == 9)
	{
	fv.mog1.value = "]-oo," + wortel1 + "[ U ]" + wortel2 + "," + wortel3 + "[ U ]" + wortel4 + ",+oo["
	fv.mog2.value = "]-oo," + wortel1 + "] U [" + wortel2 + "," + wortel3 + "] U [" + wortel4 + ",+oo["
	fv.mog3.value = "]" + wortel1 + "," + wortel2 + "[ U ]" + wortel3 + "," + wortel4 + "["
	fv.mog4.value = "[" + wortel1 + "," + wortel2 + "] U [" + wortel3 + "," + wortel4 + "]"
	}
if (typeoefening == 11)
	{
	fv.mog1.value = "]" + wortel2 + "," + wortel3 + "[ U ]" + wortel4 + ",+oo["
	fv.mog2.value = "{" + wortel1 + "} U [" + wortel2 + "," + wortel3 + "] U [" + wortel4 + ",+oo["
	fv.mog3.value = "]-oo," + wortel1 + "[ U ]" + wortel1 + "," + wortel2 + "[ U ]" + wortel3 + "," + wortel4 + "["
	fv.mog4.value = "]-oo,"  + wortel2 + "] U [" + wortel3 + "," + wortel4 + "]"
	}
if (typeoefening == 12)
	{
	fv.mog1.value = "]" + wortel1 + "," + wortel2 + "[ U ]" + wortel3 + "," + wortel4 + "[ U ]" + wortel5 + ",+oo[" 
	fv.mog2.value = "[" + wortel1 + "," + wortel2 + "] U [" + wortel3 + "," + wortel4 + "] U [" + wortel5 + ",+oo[" 
	fv.mog3.value = "]-oo," + wortel1 + "[ U ]" + wortel2 + "," + wortel3 + "[ U ]" + wortel4 + "," + wortel5 + "["
	fv.mog4.value = "]-oo," + wortel1 + "] U [" + wortel2 + "," + wortel3 + "] U [" + wortel4 + "," + wortel5 + "]"
	}
}

function controleeroplv()
{
var oplverzameling = document.fv.keuzeoplv.options[document.fv.keuzeoplv.selectedIndex].value;

if (oplverzameling == "x") 
	{
	fv.opl10.src = "../images/vraagteken.gif"
	}
else
	{
	pogingenteller++
	if (oplverzameling == antwoplv)
		{
		oplossingenteller++
		fv.opl10.src = "../images/goed.gif"
		}
	else fv.opl10.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		
	}
}
