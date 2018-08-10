var aljuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var gemiddelde = 0
var gonio1 = 0
var gonio2 = 0
var A = 0
var B = 0
var K = 0
var L = 0
var tip = ""

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 8) + 1;
if (typevariatie < 5) 
	{
	K = 0
	L = 0
	}
if ((typevariatie > 4) && (typevariatie < 7)) 
	{
	K = Math.floor(Math.random() * 7) - 2
	L = 0
	}
if (typevariatie == 7) 
	{
	K = 0
	L = Math.floor(Math.random() * 7) - 2
	}
if (typevariatie == 8) 
	{
	K = Math.floor(Math.random() * 7) - 2
	L = Math.floor(Math.random() * 7) - 2
	}
}


function kiesgetallen()
{
A = 0
if (typeoefening == 1) 
	{
	while (A%45 == 0) A = Math.floor(Math.random() * 360) - 179
	B = 0 - A
	if (gonio1 == 1) gonio2 = 5  
	if (gonio1 == 2) gonio2 = 2
	if (gonio1 == 3) gonio2 = 7
	if (gonio1 == 4) gonio2 = 8
	tip = "tegengestelde hoeken"
	} 

if (typeoefening == 2) 
	{
	while (A%45 == 0) A = Math.floor(Math.random() * 360) - 179
	B = 180 - A
	if (gonio1 == 1) gonio2 = 1  
	if (gonio1 == 2) gonio2 = 6
	if (gonio1 == 3) gonio2 = 7
	if (gonio1 == 4) gonio2 = 8
	tip = "supplementaire hoeken"
	} 

if (typeoefening == 3) 
	{
	while (A%45 == 0) A = Math.floor(Math.random() * 360) - 179
	B = 180 + A
	if (gonio1 == 1) gonio2 = 5  
	if (gonio1 == 2) gonio2 = 6
	if (gonio1 == 3) gonio2 = 3
	if (gonio1 == 4) gonio2 = 4
	tip = "antisupplementaire hoeken"
	} 

if (typeoefening == 4) 
	{
	while (A%45 == 0) A = Math.floor(Math.random() * 360) - 179
	B = 90 - A
	if (gonio1 == 1) gonio2 = 2  
	if (gonio1 == 2) gonio2 = 1
	if (gonio1 == 3) gonio2 = 4
	if (gonio1 == 4) gonio2 = 3
	tip = "complementaire hoeken"
	} 

if (typeoefening == 5) 
	{
	while (A%45 == 0) A = Math.floor(Math.random() * 360) - 179
	B = 90 + A
	if (gonio1 == 1) gonio2 = 2  
	if (gonio1 == 2) gonio2 = 5
	if (gonio1 == 3) gonio2 = 8
	if (gonio1 == 4) gonio2 = 7
	tip = "anticomplementaire hoeken"
	} 

A = A + L * 360
B = B + K * 360
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 5) + 1;
gonio1 = Math.floor(Math.random() * 4) + 1;
	if (gonio1 == 1) txtgonio = "sin"  
	if (gonio1 == 2) txtgonio = "cos"
	if (gonio1 == 3) txtgonio = "tan"
	if (gonio1 == 4) txtgonio = "cot"
}

function toonoef()
{
verwant.txthoek1.value = B + "°"
verwant.txthoek2.value = A + "°"
verwant.txtgonio1.value = txtgonio
}

function nieuwoef()
{
aljuist = 0
document.opl.src = "../images/vraagteken.gif";
verwant.antw.options.value = "0"
kiesvariatie()
kiesoef()
kiesgetallen()
toonoef()
}

function controle() 
{
if (aljuist == 1) 
	{
	verwant.antw.options.value = gekozen
	alert('Deze oefening had je al eens juist. Kies a.u.b. eerste een nieuwe oefening.')
	}
else
{
gekozen = verwant.antw.options.value
if (gekozen == "0") document.opl.src="../images/vraagteken.gif"
else
	{
	pogingenteller++
	if (gekozen == gonio2) 
		{
		document.opl.src="../images/goed.gif"
		oplossingenteller++
		aljuist = 1
		}
	else 
		{
		document.opl.src="../images/fout.gif"
		alert('Het gaat hier om ' + tip + '!')
		}
		
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.verwant.aantaljuist.value = oplossingenteller
	document.verwant.aantalpogingen.value = pogingenteller
	document.verwant.percentage.value = procent		
	}
}
}