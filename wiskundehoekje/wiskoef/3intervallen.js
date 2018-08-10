var punt1 = 0
var punt2 = 0
var lengtelinks = 0
var lengtetussen = 0
var kleurpunt1 = ""
var kleurpunt2 = ""
var oplossing = ""
var oplossing2 = ""
var antwoord = ""
var algemaakt = 0
var pogingenteller = 0
var oplossingenteller = 0

function kiespunten()
{
punt1 = Math.floor(Math.random() * 18) - 9;
punt2 = punt1 + Math.floor(Math.random() * (9 - punt1)) + 1;
}

function berekenlengtesafbeeldingen()
{
lengtelinks = 20 * punt1 + 198
lengtetussen = 20 * (punt2 - punt1) - 4
}

function kieskleurpunten()
{
var kleur1 = Math.floor(Math.random() * 2);
if (kleur1 == 0) kleurpunt1 = "groen"
if (kleur1 == 1) kleurpunt1 = "rood"

var kleur2 = Math.floor(Math.random() * 2);
if (kleur2 == 0) kleurpunt2 = "groen"
if (kleur2 == 1) kleurpunt2 = "rood"
}

function toonoef()
{
document.links.width = lengtelinks
document.punt1.src = "images/punt" + kleurpunt1 + ".gif" 
document.tussen.src = "images/lijngroen.gif" 
document.tussen.width = lengtetussen
document.punt2.src = "images/punt" + kleurpunt2 + ".gif" 
}

function berekenoplossing()
{
oplossing = ""
if (kleurpunt1 == "groen") oplossing = oplossing + "["
if (kleurpunt1 == "rood") oplossing = oplossing + "]"
oplossing = oplossing + punt1 + "," + punt2
if (kleurpunt2 == "groen") oplossing = oplossing + "]"
if (kleurpunt2 == "rood") oplossing = oplossing + "["

oplossing2 = ""
if (kleurpunt1 == "groen") oplossing2 = oplossing2 + "["
if (kleurpunt1 == "rood") oplossing2 = oplossing2 + "]"
oplossing2 = oplossing2 + punt1 + ";" + punt2
if (kleurpunt2 == "groen") oplossing2 = oplossing2 + "]"
if (kleurpunt2 == "rood") oplossing2 = oplossing2 + "["
}

function nieuwoef()
{
algemaakt = 0
document.opl.src = "../images/vraagteken.gif"
document.interval.txtinterval.value = ""
kiespunten()
berekenlengtesafbeeldingen()
kieskleurpunten()
berekenoplossing()
toonoef()
}

function controle() 
{
if (algemaakt == 1) 
	{
	alert('Leuk dat je deze oefening al eens geprobeerd hebt, kies nu eerst een nieuwe oefening!')
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
		algemaakt = 1
		pogingenteller++
		if ((antwoord == oplossing) || (antwoord == oplossing2))
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			alert('Het juiste antwoord was het interval ' + oplossing + ' !')
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

