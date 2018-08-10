var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typevariatie = 0
var typeoefening = 0
var breuk = ""
var antw = ""
var opl = ""
var vgl = ""

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var M = 0
var P = 0
var Q = 0
var X = 0
var Y = 0
var punt = 0
var beeld = 0

function vereenvoudigbreuk(teller,noemer)
{
if (noemer < 0) 
{
noemer = 0 - noemer
teller = 0 - teller
}
var ng1 = Math.abs(teller);
var ng2 = Math.abs(noemer);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

teller = teller / ng1
noemer = noemer / ng1

if (noemer == 1) breuk = teller
if (noemer != 1) breuk = teller + "/" + noemer
}

function kiesoefening()
{
typeoefening = Math.floor(Math.random() * 2) + 1
typevariatie = Math.floor(Math.random() * 2) + 1
}

function kiesgetallen()
{
A = 0
while ((A == 0) || (P == 0) || ((A*X+C*Y) == 0))
	{
	A = Math.floor(Math.random() * 18) - 6
	P = Math.floor(Math.random() * 20) - 10
	C = Math.floor(Math.random() * 25) - 10
	X = Math.floor(Math.random() * 18) - 6
	B = Math.floor(Math.random() * 8) - 2
	D = Math.floor(Math.random() * 8) - 2
	Y = Math.floor(Math.random() * 8) - 2
	if (B < 1) B = 1
	if (D < 1) D = 1
	if (Y < 1) Y = 1
	}
	
if (typeoefening == 2)
	{
	B = 1
	D = 1	
	}

vereenvoudigbreuk(X,Y)
punt = breuk
vereenvoudigbreuk(A,B)
M = breuk
vereenvoudigbreuk(C,D)
Q = breuk

if (typeoefening == 1)
	{
	E = A * D * X + B * C * Y
	F = B * D * Y
	}

if (typeoefening == 2)
	{
	E = P * Y
	F = A * X + C * Y	
	}

	vgl = ""
	if ((M != 1) && (M != -1)) vgl += M
	if (M == -1) vgl += "-"
	vgl += "x"
	if (C > 0) vgl += "+" + Q
	if (C < 0) vgl += Q
	
vereenvoudigbreuk(E,F)
beeld = breuk
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.all.opg1.style.display= "";
	oefgetal.txtvgl.value = vgl
	}

if (typeoefening == 2)
	{
	document.all.opg2.style.display= "";
	oefgetal.txtvglteller.value = P
	oefgetal.txtvglnoemer.value = vgl
	}
	
if (typevariatie == 1)
	{
	oefgetal.txtpunt.value = punt
	opl = beeld
	}

if (typevariatie == 2)
	{
	oefgetal.txtbeeld.value = beeld
	opl = punt
	}

}

function nieuwoef()
{
antwoordjuist = 0
document.opl.src = "../images/vraagteken.gif"
document.oefgetal.txtpunt.value = ""
document.oefgetal.txtbeeld.value = ""
document.all.opg1.style.display= "none";
document.all.opg2.style.display= "none";
document.oefgetal.txtvgl.value = ""
document.oefgetal.txtvglteller.value = ""
document.oefgetal.txtvglnoemer.value = ""
kiesoefening()
kiesgetallen()
toonoef()
}

function controle()
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	if (typevariatie == 1) antw = oefgetal.txtbeeld.value
	if (typevariatie == 2) antw = oefgetal.txtpunt.value

	if (antw == "") alert('Je hebt nog niets ingevuld!')
	else
		{
		if (antw.indexOf('.') != -1) alert('Geen decimale getallen a.u.b., geef een geheel getal of een breuk in.')
		else
		{
		pogingenteller++
		
		if (antw == opl)
			{
			document.opl.src = "../images/goed.gif"
			oplossingenteller++;
			antwoordjuist = 1
			} 
		else
			{
			document.opl.src = "../images/fout.gif"
			if (eval(antw) == eval(opl)) alert('Je bent vergeten te vereenvoudigen')
			}
	
		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.oefgetal.aantaljuist.value = oplossingenteller
		document.oefgetal.aantalpogingen.value = pogingenteller
		document.oefgetal.percentage.value = procent		
		}
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

