var q = ""
var tegq = ""
var mvoor = ""
var qna = ""
var tegmvoor = ""
var tegqna = ""
var mna = ""
var qvoor = ""
var tegmna = ""
var tegqvoor = ""
var voorschrift1 = ""
var voorschrift2 = ""
var voorschrift3 = ""
var voorschrift4 = ""
var voorschrift5 = ""
var voorschrift6 = ""
var oplossing = ""
var nummeroplossing = 0
var algemaakt = 0
var typeoef1 = 0
var pogingenteller = 0
var oplossingenteller = 0

function nieuwoef()
{
algemaakt = 0
document.opl1.src = "../images/vraagteken.gif"
document.functies.keuze1.value = "?"
document.functies.txt1.value= ""
document.functies.txt2.value= ""
document.functies.txt3.value= ""
document.functies.txt4.value= ""
document.functies.txt5.value= ""
document.functies.txt6.value= ""

typeoef1 = Math.floor(Math.random() * 70) + 1;

if ((typeoef1 > 0) && (typeoef1 < 8)) 
	{
	mvoor = "2"
	tegmvoor = "-2"
	mna = " + 2"
	tegmna = " - 2"
	}

if ((typeoef1 > 7) && (typeoef1 < 14)) 
	{
	mvoor = "-2"
	tegmvoor = "2"
	mna = " - 2"
	tegmna = " + 2"
	}

if ((typeoef1 > 14) && (typeoef1 < 22)) 
	{
	mvoor = ""
	tegmvoor = "-"
	mna = " + 1"
	tegmna = " - 1"
	}

if ((typeoef1 > 21) && (typeoef1 < 29)) 
	{
	mvoor = "-"
	tegmvoor = ""
	mna = " - 1"
	tegmna = " + 1"
	}

if ((typeoef1 > 28) && (typeoef1 < 36)) 
	{
	mvoor = "3"
	tegmvoor = "-3"
	mna = " + 3"
	tegmna = " - 3"
	}

if ((typeoef1 > 35) && (typeoef1 < 43)) 
	{
	mvoor = "-3"
	tegmvoor = "3"
	mna = " - 3"
	tegmna = " + 3"
	}

if ((typeoef1 > 42) && (typeoef1 < 50)) 
	{
	mvoor = "0,5"
	tegmvoor = "-0,5"
	mna = " + 0,5"
	tegmna = " - 0,5"
	}

if ((typeoef1 > 49) && (typeoef1 < 57)) 
	{
	mvoor = "-0,5"
	tegmvoor = "0,5"
	mna = " - 0,5"
	tegmna = " + 0,5"
	}

if ((typeoef1 > 0) && (typeoef1 < 57))
	{
	if (typeoef1 % 7 == 1) 
		{
		qna = ""
		tegqna = " - 1"
		qvoor = ""
		tegqvoor = "-"
		}
	
	if (typeoef1 % 7 == 2) 
		{
		qna = " - 3"
		tegqna = " + 3"
		qvoor = "-3"
		tegqvoor = "3"
		}
	
	if (typeoef1 % 7 == 3) 	
		{
		qna = " - 2"
		tegqna = " + 2"
		qvoor = "-2"
		tegqvoor = "2"
		}
	
	if (typeoef1 % 7 == 4) 
		{
		qna = " - 1"
		tegqna = " + 1"
		qvoor = "-"
		tegqvoor = ""
		}
	
	if (typeoef1 % 7 == 5) 
		{
		qna = " + 1"
		tegqna = " - 1"
		qvoor = ""
		tegqvoor = "-"
		}
	
	if (typeoef1 % 7 == 6) 
		{
		qna = " + 2"
		tegqna = " - 2"
		qvoor = "2"
		tegqvoor = "-2"
		}

	if (typeoef1 % 7 == 0) 
		{
		qna = " + 3"
		tegqna = " - 3"
		qvoor = "3"
		tegqvoor = "-3"
		}
	}

if ((typeoef1 > 56) && (typeoef1 < 71))
	{
	if (typeoef1 % 7 == 1) 
		{
		q = "0"
		tegq = "-2"
		}
	
	if (typeoef1 % 7 == 2) 
		{
		q = "-3"
		tegq = "3"
		}
	
	if (typeoef1 % 7 == 3) 	
		{
		q = "-2"
		tegq = "2"
		}
	
	if (typeoef1 % 7 == 4) 
		{
		q = "-1"
		tegq = "1"
		}
	
	if (typeoef1 % 7 == 5) 
		{
		q = "1"
		tegq = "-1"
		}
	
	if (typeoef1 % 7 == 6) 
		{
		q = "2"
		tegq = "-2"
		}

	if (typeoef1 % 7 == 0) 
		{
		q = "3"
		tegq = "-3"
		}
	}
	
if (typeoef1 < 57) 	
	{
	voorschrift1 = "y = " + mvoor + "x" + qna
	voorschrift2 = "y = " + tegmvoor + "x" + qna
	voorschrift3 = "y = " + mvoor + "x" + tegqna
	voorschrift4 = "y = " + tegmvoor + "x" + tegqna
	voorschrift5 = "y = " + qvoor + "x" + mna
	voorschrift6 = "y = " + qvoor + "x" + tegmna
	}

if ((typeoef1 == 3) || (typeoef1 == 10))
	{
	voorschrift5 = "y = 0,5x - 2"
	voorschrift6 = "y = -0,5x - 2"
	}
if ((typeoef1 == 6) || (typeoef1 == 13))
	{
	voorschrift5 = "y = 0,5x + 2"
	voorschrift6 = "y = -0,5x + 2"
	}
if ((typeoef1 == 18) || (typeoef1 == 25))
	{
	voorschrift5 = "y = 1,5x + 1"
	voorschrift6 = "y = -1,5x + 1"
	}
if ((typeoef1 == 19) || (typeoef1 == 26))
	{
	voorschrift5 = "y = 1,5x - 1"
	voorschrift6 = "y = -1,5x - 1"
	}
if ((typeoef1 == 30) || (typeoef1 == 37))
	{
	voorschrift5 = "y = 2,5x - 3"
	voorschrift6 = "y = -2,5x - 3"
	}
if ((typeoef1 == 35) || (typeoef1 == 42))
	{
	voorschrift5 = "y = 2,5x + 3"
	voorschrift6 = "y = -2,5x + 3"
	}

if ((typeoef1 > 56) && (typeoef1 < 64)) 	
	{
	voorschrift1 = "y = " + q
	voorschrift2 = "y = " + tegq
	voorschrift3 = "y = " + q + "x"
	voorschrift4 = "y = " + tegq + "x"
	voorschrift5 = "x = " + q
	voorschrift6 = "x = " + tegq
	}

if ((typeoef1 > 63) && (typeoef1 < 71)) 	
	{
	voorschrift1 = "x = " + q
	voorschrift2 = "x = " + tegq
	voorschrift3 = "y = " + q + "x"
	voorschrift4 = "y = " + tegq + "x"
	voorschrift5 = "y = " + q
	voorschrift6 = "y = " + tegq
	}

if ((typeoef1 == 57) || (typeoef1 == 64))
	{
	voorschrift3 = "y = x"
	voorschrift4 = "y = -x"
	}
	
if (typeoef1 < 10) typeoef1 = '0' + typeoef1

document.fig1.src = "images/3rechte" + typeoef1 + ".gif"

nummeroplossing = Math.floor(Math.random() * 6) + 1;

if (nummeroplossing == 1)
	{
	oplossing = "A"
	document.functies.txt1.value = voorschrift1
	document.functies.txt2.value = voorschrift2
	document.functies.txt3.value = voorschrift3
	document.functies.txt4.value = voorschrift4
	document.functies.txt5.value = voorschrift5
	document.functies.txt6.value = voorschrift6
	}

if (nummeroplossing == 2)
	{
	oplossing = "B"
	document.functies.txt1.value = voorschrift2
	document.functies.txt2.value = voorschrift1
	document.functies.txt3.value = voorschrift3
	document.functies.txt4.value = voorschrift4
	document.functies.txt5.value = voorschrift5
	document.functies.txt6.value = voorschrift6
	}
	
if (nummeroplossing == 3)
	{
	oplossing = "C"
	document.functies.txt1.value = voorschrift3
	document.functies.txt2.value = voorschrift2
	document.functies.txt3.value = voorschrift1
	document.functies.txt4.value = voorschrift4
	document.functies.txt5.value = voorschrift5
	document.functies.txt6.value = voorschrift6
	}

if (nummeroplossing == 4)
	{
	oplossing = "D"
	document.functies.txt1.value = voorschrift4
	document.functies.txt2.value = voorschrift2
	document.functies.txt3.value = voorschrift3
	document.functies.txt4.value = voorschrift1
	document.functies.txt5.value = voorschrift5
	document.functies.txt6.value = voorschrift6
	}
if (nummeroplossing == 5)
	{
	oplossing = "E"
	document.functies.txt1.value = voorschrift5
	document.functies.txt2.value = voorschrift2
	document.functies.txt3.value = voorschrift3
	document.functies.txt4.value = voorschrift4
	document.functies.txt5.value = voorschrift1
	document.functies.txt6.value = voorschrift6
	}
if (nummeroplossing == 6)
	{
	oplossing = "F"
	document.functies.txt1.value = voorschrift6
	document.functies.txt2.value = voorschrift2
	document.functies.txt3.value = voorschrift3
	document.functies.txt4.value = voorschrift4
	document.functies.txt5.value = voorschrift5
	document.functies.txt6.value = voorschrift1
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
			alert('De grafiek heeft als vergelijking: ' + voorschrift1 + ' , het is dus rechte ' + oplossing.toLowerCase() + ' !')  
			}		
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.functies.aantaljuist.value = oplossingenteller
	document.functies.aantalpogingen.value = pogingenteller
	document.functies.percentage.value = procent		
}
}
