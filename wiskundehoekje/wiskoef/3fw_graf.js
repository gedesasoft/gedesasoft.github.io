var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var antw = ""
var vorige = 0

var A = 0
var B = 0
var C = 0
var M = 0
var Q = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0

function kiesgetal(onder, boven)
{
return (Math.floor(Math.random() * (boven - onder)) + onder)
}

function kiesoefening()
{
while (typeoefening == vorige) typeoefening = Math.floor(Math.random() * 6) + 1
vorige = typeoefening
}

function kiesgetallen()
{
if (typeoefening == 1)
	{
	M = 1
	Q = 2
	A = 0.5
	B = 1
	C = -2
	X1 = kiesgetal(-5, 3)
	X2 = kiesgetal(-4, 2)
	}

if (typeoefening == 2)
	{
	M = -2
	Q = 3
	A = 0.5
	B = -2
	C = -3.5
	X1 = kiesgetal(-1, 4)
	X2 = kiesgetal(-2, 5)
	}

if (typeoefening == 3)
	{
	M = -0.5
	Q = -2
	A = -0.5
	B = -1
	C = 4.5
	X1 = kiesgetal(-5, 5)
	X2 = kiesgetal(-3, 5)
	}

if (typeoefening == 4)
	{
	M = 1.5
	Q = -0.5
	A = -1
	B = 3
	C = 2
	X1 = kiesgetal(-3, 3)
	X2 = kiesgetal(-5, -1)
	}

if (typeoefening == 5)
	{
	M = 0
	Q = 3
	A = -1
	B = 0
	C = 2
	X1 = kiesgetal(-5, 5)
	X2 = kiesgetal(-2, 2)
	}

if (typeoefening == 6)
	{
	M = -1
	Q = -3
	A = 0.5
	B = 0
	C = -4
	X1 = kiesgetal(-5, 2)
	X2 = kiesgetal(-4, 4)
	}


Y1 = M * X1 + Q
Y2 = A * (X2 + B) * (X2 + B) + C
}

function toonoef()
{
document.graf.src = "images/3fw_graf0" + typeoefening + ".gif"
document.oefgetal.txtX1.value = X1
document.oefgetal.txtX2.value = X2
}

function nieuwoef()
{
antwoordjuist = 0
document.oefgetal.txtX1.value = ""
document.oefgetal.txtX2.value = ""
document.oefgetal.txtY1.value = ""
document.oefgetal.txtY2.value = ""
document.opl.src = "../images/vraagteken.gif"
document.graf.src = "images/leeg.gif"
kiesoefening()
kiesgetallen()
toonoef()
}

function controle()
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	antw1 = oefgetal.txtY1.value
	antw2 = oefgetal.txtY2.value

	if ((antw1 == "") || (antw2 == "")) alert('Geef beide beelden in a.u.b.!')
	else
		{
		pogingenteller++
		
		if ((eval(antw1) == eval(Y1)) && (eval(antw2) == eval(Y2)))
			{
			document.opl.src = "../images/goed.gif"
			oplossingenteller++;
			antwoordjuist = 1
			} 
		else
			{
			document.opl.src = "../images/fout.gif"
			if (eval(antw1) == eval(Y1)) alert('g(' + X2 + ') is fout.') 
			if (eval(antw2) == eval(Y2)) alert('f(' + X1 + ') is fout.')
			if ((eval(antw1) != eval(Y1)) && (eval(antw2) != eval(Y2))) alert('Beide fout.') 
			}
	
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.oefgetal.aantaljuist.value = oplossingenteller
		document.oefgetal.aantalpogingen.value = pogingenteller
		document.oefgetal.percentage.value = procent		
		}
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

