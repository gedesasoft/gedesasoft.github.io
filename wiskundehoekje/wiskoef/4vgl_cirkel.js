var soortoefening = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var oplcirkel = ""
var A = 0
var B = 0
var C = 0
var D = 0
var X1 = 0
var Y1 = 0
var R = 0
var vgl = ""

function kiesgetallen()
{
vgl = ""

if (typeoefening == 1)
	{
 	X1 = (Math.floor(Math.random() * 20 ) - 8) / 2;
 	Y1 = (Math.floor(Math.random() * 20 ) - 8) / 2;
	R = (Math.floor(Math.random() * 8 ) + 1);
	A = (0 - 2) * X1
	B = (0 - 2) * Y1
	C = X1 * X1 + Y1 * Y1 - R * R
	vgl += "x² + y² "
	if (A > 0) vgl += "+ " + A + "x "
	if (A < 0) vgl += "- " + Math.abs(A) + "x "
	if (B > 0) vgl += "+ " + B + "y "
	if (B < 0) vgl += "- " + Math.abs(B) + "y "
	if (C > 0) vgl += "+ " + C + " = 0"
	if (C < 0) vgl += "- " + Math.abs(C) + " = 0"
	if (C == 0) vgl += "= 0"
	}

if (typeoefening == 2)
	{
	if (soortoefening == 1)
		{
		A = (Math.floor(Math.random() * 40 ) - 16);
 		B = (Math.floor(Math.random() * 40 ) - 16);
		C = A * A + B * B + Math.floor(Math.random() * 12 ) + 1;
		vgl += "x² + y² "
		if (A > 0) vgl += "+ " + A + "x "
		if (A < 0) vgl += "- " + Math.abs(A) + "x "
		if (B > 0) vgl += "+ " + B + "y "
		if (B < 0) vgl += "- " + Math.abs(B) + "y "
		if (C > 0) vgl += "+ " + C + " = 0"
		if (C < 0) vgl += "- " + Math.abs(C) + " = 0"
		}
	if (soortoefening == 2)
		{
		A = (Math.floor(Math.random() * 40 ) - 16);
 		B = (Math.floor(Math.random() * 40 ) - 16);
		R = (Math.floor(Math.random() * 8 ) + 1);
		C = A * A + B * B - R * R;
		vgl += "x² + 2y² "
		if (A > 0) vgl += "+ " + A + "x "
		if (A < 0) vgl += "- " + Math.abs(A) + "x "
		if (B > 0) vgl += "+ " + B + "y "
		if (B < 0) vgl += "- " + Math.abs(B) + "y "
		if (C > 0) vgl += "+ " + C + " = 0"
		if (C < 0) vgl += "- " + Math.abs(C) + " = 0"
		}
	if (soortoefening == 3)
		{
		A = (Math.floor(Math.random() * 40 ) - 16);
 		B = (Math.floor(Math.random() * 40 ) - 16);
		R = (Math.floor(Math.random() * 8 ) + 1);
		C = A * A + B * B - R * R;
		vgl += "3x² + y² "
		if (A > 0) vgl += "+ " + A + "x "
		if (A < 0) vgl += "- " + Math.abs(A) + "x "
		if (B > 0) vgl += "+ " + B + "y "
		if (B < 0) vgl += "- " + Math.abs(B) + "y "
		if (C > 0) vgl += "+ " + C + " = 0"
		if (C < 0) vgl += "- " + Math.abs(C) + " = 0"
		}
	}

}

function kiessoortoef()
{
soortoefening = Math.floor(Math.random() * 3) + 1
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2) + 1
if (typeoefening == 1) oplcirkel = "j" 
if (typeoefening == 2) oplcirkel = "n" 
}

function wissen()
{
vglcirkel.opl05.src = "../images/vraagteken.gif"
vglcirkel.opl.src = "../images/vraagteken.gif"
document.vglcirkel.keuze.options.value = "x";
document.vglcirkel.txtvgl.value = ""
document.vglcirkel.txtXM.value = ""
document.vglcirkel.txtYM.value = ""
document.vglcirkel.txtR.value = ""
document.all.invul.style.display= "none";
}

function nieuwoef()
{
algemaakt = 0
wissen()
kiesoef()
kiessoortoef()
kiesgetallen()
document.vglcirkel.txtvgl.value = vgl
}

function wijzig()
{
var gekozen = document.vglcirkel.keuze.options[document.vglcirkel.keuze.selectedIndex].value;

if (gekozen == "x") 
	{
	vglcirkel.opl05.src = "../images/vraagteken.gif"
	document.all.invul.style.display= "none";
	}
if (gekozen == "j") 
	{
	pogingenteller++
	if (gekozen == oplcirkel)
		{
		oplossingenteller++
		vglcirkel.opl05.src = "../images/goed.gif"
		document.all.invul.style.display= "";
		}
	else 
		{
		vglcirkel.opl05.src = "../images/fout.gif"
		if (soortoefening > 1) alert('Deze vergelijking is niet te herleiden naar x² + y² + 2ax + 2by + c = 0.')  
		if (soortoefening == 1) alert('Je kan de straal niet berekenen omdat je dan de wortel uit een negatief getal zou moeten bepalen.')  
		}
	}

if (gekozen == "n") 
	{
	pogingenteller++
	if (gekozen == oplcirkel)
		{
		oplossingenteller++
		vglcirkel.opl05.src = "../images/goed.gif"
		}
	else vglcirkel.opl05.src = "../images/fout.gif"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.vglcirkel.aantaljuist.value = oplossingenteller
	document.vglcirkel.aantalpogingen.value = pogingenteller
	document.vglcirkel.percentage.value = procent		
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else eigenlijkecontrole()
}

function eigenlijkecontrole()
{
if ((vglcirkel.txtXM.value == "") || (vglcirkel.txtYM.value == "") || (vglcirkel.txtR.value == "")) alert('Geef het middelpunt en de straal in.')
else
	{
	pogingenteller++
	if ((eval(vglcirkel.txtXM.value) == X1) && (eval(vglcirkel.txtYM.value) == Y1) && (eval(vglcirkel.txtR.value) == R)) 
		{
		vglcirkel.opl.src = "../images/goed.gif"
		oplossingenteller++
		algemaakt = 1
		}
		else vglcirkel.opl.src = "../images/fout.gif"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.vglcirkel.aantaljuist.value = oplossingenteller
	document.vglcirkel.aantalpogingen.value = pogingenteller
	document.vglcirkel.percentage.value = procent		

}

