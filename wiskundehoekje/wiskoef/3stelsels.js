var algemaakt = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var nummer1 = 0
var nummer2 = 0
var eerstevgl = ""
var tweedevgl = ""

var A = 0
var B = 0
var C = 0
var D = 0
var X = 0
var Y = 0

function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0
nummer1 = Math.floor(Math.random() * 13 / 2) * 2 ;
nummer2 = nummer1 + 1
while (A == 0) A = (Math.floor(Math.random() * 20 ) - 9);
while (B == 0) B = (Math.floor(Math.random() * 20 ) - 9);
while ((C == 0) || (D == 0) || (A / C == B / D))
	{
	C = (Math.floor(Math.random() * 20 ) - 9);
	D = (Math.floor(Math.random() * 20 ) - 9);
	}
X = (Math.floor(Math.random() * 20 ) - 9);
Y = (Math.floor(Math.random() * 20 ) - 9);
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 4) + 1;
}

function bepaal_vgl()
{
if (A == 1)	eerstevgl = eerstevgl + 'x'
if (A == -1) eerstevgl = eerstevgl + '-' + 'x'
if ((A > 1) || (A < -1)) eerstevgl = eerstevgl + A + 'x'
if (B == 1) eerstevgl = eerstevgl + '+' + 'y'
if (B == -1) eerstevgl = eerstevgl + '-' + 'y'
if (B > 1) eerstevgl = eerstevgl + '+' + B + 'y'
if (B < -1) eerstevgl = eerstevgl + B + 'y'

var variatie = Math.floor(Math.random() * 2) + 1;

if (variatie == 1)
	{ 
	if (C == 1)	tweedevgl = tweedevgl + 'x'
	if (C == -1) tweedevgl = tweedevgl + '-' + 'x'
	if ((C > 1) || (C < -1)) tweedevgl = tweedevgl + C + 'x'
	if (D == 1) tweedevgl = tweedevgl + '+' + 'y'
	if (D == -1) tweedevgl = tweedevgl + '-' + 'y'
	if (D > 1) tweedevgl = tweedevgl + '+' + D + 'y'
	if (D < -1) tweedevgl = tweedevgl + D + 'y'
	}
if (variatie == 2)
	{ 
	if (D == 1)	tweedevgl = tweedevgl + 'y'
	if (D == -1) tweedevgl = tweedevgl + '-' + 'y'
	if ((D > 1) || (D < -1)) tweedevgl = tweedevgl + D + 'y'
	if (C == 1) tweedevgl = tweedevgl + '+' + 'x'
	if (C == -1) tweedevgl = tweedevgl + '-' + 'x'
	if (C > 1) tweedevgl = tweedevgl + '+' + C + 'x'
	if (C < -1) tweedevgl = tweedevgl + C + 'x'
	}

if ((typeoefening == "1") || (typeoefening == "2")) 
	{
	eerstevgl = eerstevgl + ' = ' + (A*X + B*Y)
	}
	
if ((typeoefening == "3") || (typeoefening == "4")) 
	{
	if ((A*X + B*Y) > 0) eerstevgl = eerstevgl + '-' + (A*X + B*Y) + ' = 0'
	if ((A*X + B*Y) < 0) eerstevgl = eerstevgl + '+' + (- A*X - B*Y) + ' = 0'
	if ((A*X + B*Y) == 0) eerstevgl = eerstevgl + ' = 0'
	}

if ((typeoefening == "1") || (typeoefening == "3")) 
	{
	tweedevgl = tweedevgl + ' = ' + (C*X + D*Y)
	}
	
if ((typeoefening == "2") || (typeoefening == "4")) 
	{
	if ((C*X + D*Y) > 0) tweedevgl = tweedevgl + '-' + (C*X + D*Y) + ' = 0'
	if ((C*X + D*Y) < 0) tweedevgl = tweedevgl + '+' + (- C*X - D*Y) + ' = 0'
	if ((C*X + D*Y) == 0) tweedevgl = tweedevgl + ' = 0'
	}
}

function toonoef()
{
document.oefstelsel.txteerstevgl.value = eerstevgl; 
document.oefstelsel.txttweedevgl.value = tweedevgl; 
}

function nieuwoef()
{
algemaakt = 0
eerstevgl = ""
tweedevgl = ""
oefstelsel.controle.src = "../images/vraagteken.gif";
document.oefstelsel.antwoordX.value = "??"
document.oefstelsel.antwoordY.value = "??"
kiesoef()
kiesgetallen()
bepaal_vgl()
toonoef()
}

function antwoordXwissen()
{
document.oefstelsel.antwoordX.value = ""
}

function antwoordYwissen()
{
document.oefstelsel.antwoordY.value = ""
}

function controleer() 
{
var oplX = document.oefstelsel.antwoordX.value;
var oplY = document.oefstelsel.antwoordY.value;

if ((oplX == "") || (oplY == "")) alert('Je hebt je oplossing nog niet volledig ingevuld!')
else
	{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens gemaakt hebt, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	algemaakt = 1
	if ((oplX == X) && (oplY == Y)) 
		{
		oefstelsel.controle.src = "../images/goed.gif"
		oplossingenteller++;
		}
		else 
		{
		oefstelsel.controle.src = "../images/fout.gif";
		alert ('De oplossing moet zijn: OplS = {(' + X + ',' + Y + ')} !')
		}
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.oefstelsel.aantaljuist.value = oplossingenteller
	document.oefstelsel.aantalpogingen.value = pogingenteller
	document.oefstelsel.percentage.value = procent		
	}
}
}
