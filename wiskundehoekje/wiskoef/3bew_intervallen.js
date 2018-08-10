var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var tekenA = 0
var tekenB = 0
var tekenC = 0
var tekenD = 0
var tekenE = 0
var tekenF = 0
var haakA = 0
var haakB = 0
var haakC = 0
var haakD = 0
var haakE = 0
var haakF = 0
var interval1 = ""
var interval2 = ""
var typeoefening = 0
var oplossing = ""
var antwoord = ""
var algemaakt = 0
var pogingenteller = 0
var oplossingenteller = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1;
}

function kiespunten()
{
tekenA = Math.floor(Math.random() * 2);
tekenB = Math.floor(Math.random() * 2);
tekenC = Math.floor(Math.random() * 2);
tekenD = Math.floor(Math.random() * 2);

if (typeoefening == 1)
	{
	A = Math.floor(Math.random() * 200) - 100;
	C = A + Math.floor(Math.random() * 50) + 1;
	B = C + Math.floor(Math.random() * 50) - 40;
	D = B + Math.floor(Math.random() * 50) + 1;

	E = Math.max(A,B)
	if (A < B) tekenE = tekenB  
	if (A > B) tekenE = tekenA
	if (A == B) 
		{
		if (tekenA == tekenB) tekenE = tekenA
		else tekenE = 1
		}  

	F = Math.min(C,D)
	if (C < D) tekenF = tekenC  
	if (C > D) tekenF = tekenD
	if (C == D) 
		{
		if (tekenC == tekenD) tekenF = tekenC
		else tekenF = 0
		}  
	}


if (typeoefening == 2)
	{
	A = Math.floor(Math.random() * 200) - 100;
	C = A + Math.floor(Math.random() * 50) + 1;
	B = C - (Math.floor(Math.random() * 25) + 1);
	D = A - 1
	while (D <= A)
		{
		D = B + Math.floor(Math.random() * 50) + 1;
		}
		
	E = Math.min(A,B)
	if (A < B) tekenE = tekenA  
	if (A > B) tekenE = tekenB
	if (A == B) 
		{
		if (tekenA == tekenB) tekenE = tekenA
		else tekenE = 0
		}  

	F = Math.max(C,D)
	if (C < D) tekenF = tekenD  
	if (C > D) tekenF = tekenC
	if (C == D) 
		{
		if (tekenC == tekenD) tekenF = tekenC
		else tekenF = 1
		}  
	}
	
if (typeoefening == 3)
	{
	A = Math.floor(Math.random() * 200) - 100;
	C = A + Math.floor(Math.random() * 50) + 1;
	B = A + 1
	D = C - 1
	while ((A <= B) && (D <= C))
		{
		B = C + Math.floor(Math.random() * 50) - 40;
		D = B + Math.floor(Math.random() * 50) + 1;
		}
		
	if (D < A) 
		{
		E = A
		tekenE = tekenA
		F = C
		tekenF = tekenC
		}
		  
	if (D == A) 
		{
		E = A
		if (tekenA == 1) tekenE = 1
		if (tekenA == 0) tekenE = tekenD
		F = C
		tekenF = tekenC
		}

	if ((A < D) && (D < C)) 
		{
		E = D
		tekenE = tekenD
		F = C
		tekenF = tekenC
		}

	if ((A < D) && (D == C)) 
		{
		if ((tekenC == 1) && (tekenD == 0)) 
			{
			E = C
			F = C
			}
		else
			{
			E = 2
			F = 1
			}
		}

	if ((A == B) && (B < C)) 
		{
		if ((tekenA == 0) && (tekenB == 1)) 
			{
			E = A
			F = A
			}
		else
			{
			E = 2
			F = 1
			}
		}

	if ((A < B) && (B < C)) 
		{
		E = A
		tekenE = tekenA
		F = B
		tekenF = tekenB
		}
		  
	if (B == C) 
		{
		E = A
		tekenE = tekenA
		F = C
		if (tekenC == 0) tekenF = 0
		if (tekenC == 1) tekenF = tekenB
		}

	if (C < B) 
		{
		E = A
		tekenE = tekenA
		F = C
		tekenF = tekenC
		}

	if ((B < A) && (C < D)) 
		{
		E = 2
		F = 1
		}

	}
}

function berekenintervallen()
{
if (tekenA == 0) haakA = "["
else haakA = "]"
if (tekenB == 0) haakB = "["
else haakB = "]"
if (tekenC == 0) haakC = "["
else haakC = "]"
if (tekenD == 0) haakD = "["
else haakD = "]"
if (tekenE == 0) haakE = "["
else haakE = "]"
if (tekenF == 0) haakF = "["
else haakF = "]"

interval1 = haakA + A + "," + C + haakC   
interval2 = haakB + B + "," + D + haakD   

if (E < F) oplossing = haakE + E + "," + F + haakF
if (E > F) oplossing = "{}"
if (E == F) oplossing = "{" + E + "}"
}

function toonoef()
{
document.interval.txtinterval1.value = interval1
document.interval.txtinterval2.value = interval2
if (typeoefening == 1) document.teken.src = "images/doorsnede.gif"
if (typeoefening == 2) document.teken.src = "images/unie.gif"
if (typeoefening == 3) document.teken.src = "images/verschil.gif"
}

function nieuwoef()
{
algemaakt = 0
document.opl.src = "../images/vraagteken.gif"
document.interval.txtinterval.value = ""
kiesoef()
kiespunten()
berekenintervallen()
toonoef()
}

function controle() 
{
if (algemaakt == 1) 
	{
	alert('Leuk dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening!')
	}
else
	{
	antwoord = document.interval.txtinterval.value;

	if (antwoord == "") 
		{
		document.opl.src = "../images/vraagteken.gif"
		alert('Geef a.u.b. een oplossing in voor je op controle klikt.')
		}
	else
		{
		pogingenteller++
		if (antwoord == oplossing)
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			algemaakt = 1
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.interval.aantaljuist.value = oplossingenteller
	document.interval.aantalpogingen.value = pogingenteller
	document.interval.percentage.value = procent		
}
}

function replace(string,text,by) 
{
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
}

