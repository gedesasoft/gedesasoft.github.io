var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var opgave = ""
var verb = ""
var boven = 0
var onder = 0
var A = 0
var B = 0
var C = 0
var D = 0
var X1 = 0
var X2 = 0
var antw1 = 0
var antw2 = 0
var	aantalopl = 0
var breuk = ""
var npok = 0

function vereenvoudigbreuk(teller,noemer)
{

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

boven = teller
onder = noemer

if (noemer == 1) breuk = teller
if (noemer != 1) breuk = teller + "/" + noemer


}


function kiesgetallen()
{
if (typeoefening == 1)
	{
	aantalopl = 2
	A = 0
	B = 0
	while (A == 0) A = Math.floor(Math.random() * 45) - 15
	while ((B == 0) || (B == A)) B = Math.floor(Math.random() * 45) - 15
	vereenvoudigbreuk(A,B)	
	X1 = 0
	if (boven == 1) X2 = 0 - onder
	if (boven == -1) X2 = onder
	if (boven < -1) X2 = onder + "/" + Math.abs(boven)
	if (boven > 1) X2 = (0-onder) + "/" + boven
	opgave = ""
	if (A == -1) opgave += "-" 
	if ((A < -1) || (A > 1)) opgave += A 
	opgave += "x<sup>2</sup>"
	if (B == 1) opgave += " + "
	if (B == -1) opgave += " - "
	if (B < -1) opgave += " - " + Math.abs(B)
	if (B > 1) opgave += " + " + B
	opgave += "x = 0"

	if (A < 0)
		{
		boven = -boven
		onder = -onder
		}
	verb = opgave + "<p>"
	if (A != boven) txtfactor = A / boven
	else txtfactor = ""
	if (txtfactor == "-1") txtfactor = "-"
	verb += "<=> " + txtfactor + "x . ("
	if (boven == -1) verb += "-" 
	if ((boven < -1) || (boven > 1)) verb += boven 
	verb += "x"
	if (onder < 0) verb += " - " + Math.abs(onder)
	if (onder > 0) verb += " + " + onder
	verb += ") = 0<p>"
	verb += "<=> " + txtfactor + "x = 0 of "
	if (boven == -1) verb += "-" 
	if ((boven < -1) || (boven > 1)) verb += boven 
	verb += "x"
	if (onder < 0) verb += " - " + Math.abs(onder)
	if (onder > 0) verb += " + " + onder
	verb += " = 0<p>"
	
	verb += "<=> x = 0 of x = " + X2
	}

if (typeoefening == 2)
	{
	aantalopl = 2
	A = 0
	C = 0
	D = 0
	while (D == 0) D = Math.floor(Math.random() * 17) - 4
	if (D > 6) D = 1
	while (A == 0) A = Math.floor(Math.random() * 20) + 1
	while ((C == 0) || (C == A)) C = Math.floor(Math.random() * 20) + 1
	vereenvoudigbreuk(A,C)	
	A = boven
	C = onder
	if (boven == 1) X1 = onder
	if (boven > 1) X1 = onder + "/" + boven
	if (boven == 1) X2 = 0 - onder
	if (boven > 1) X2 = (0 - onder) + "/" + boven
	opgave = ""
	if (A*A*D == -1) opgave += "-" 
	if ((A*A*D < -1) || (A*A*D > 1)) opgave += A*A*D 
	opgave += "x<sup>2</sup>"
	if (D*C*C < 0) opgave += " + " + Math.abs(D*C*C)
	if (D*C*C > 0) opgave += " - " + D*C*C
	opgave += " = 0"

	verb = opgave + "<p>"
	if (D != 1)
		{
		verb += "<=> "
		if (A*A > 1) verb += A*A 
		verb += "x<sup>2</sup> - " + C*C
		verb += " = 0<p>"
		}
	verb += "<=> "
	if (A*A > 1) verb += A*A 
	verb += "x<sup>2</sup> = " + C*C + "<p>"

	if (A*A > 1) 
		{
		verb += "<=> "
		verb += "x<sup>2</sup> = " + C*C
		verb += "/" + A*A 
		verb += "<p>"
		}

	verb += "<=> x = " + X1 + " of x = " + X2
	}

if (typeoefening == 3)
	{
	aantalopl = 0
	A = 0
	C = 0
	D = 0
	while (D == 0) D = Math.floor(Math.random() * 17) - 4
	if (D > 6) D = 1
	while (A == 0) A = Math.floor(Math.random() * 20) + 1
	while ((C == 0) || (C == A)) C = Math.floor(Math.random() * 20) + 1
	vereenvoudigbreuk(A,C)	
	A = boven
	C = onder
	opgave = ""
	if (A*A*D == -1) opgave += "-" 
	if ((A*A*D < -1) || (A*A*D > 1)) opgave += A*A*D 
	opgave += "x<sup>2</sup>"
	if (D*C*C < 0) opgave += " - " + Math.abs(D*C*C)
	if (D*C*C > 0) opgave += " + " + D*C*C
	opgave += " = 0"

	verb = opgave + "<p>"
	if (D != 1)
		{
		verb += "<=> "
		if (A*A > 1) verb += A*A 
		verb += "x<sup>2</sup> + " + C*C
		verb += " = 0<p>"
		}
	verb += "<=> "
	if (A*A > 1) verb += A*A 
	verb += "x<sup>2</sup> = -" + C*C + "<p>"

	if (A*A > 1) 
		{
		verb += "<=> "
		verb += "x<sup>2</sup> = -" + C*C
		verb += "/" + A*A 
		verb += "<p>"
		}

	verb += "dus geen oplossingen"
	}

if (typeoefening == 4)
	{
	aantalopl = 2
	A = 0
	B = 0
	while ((B == 0) || (B == A)) B = Math.floor(Math.random() * 45) - 15
	C = 0
	D = 0
	while (D == 0) D = Math.floor(Math.random() * 17) - 4
	if (D > 6) D = 1
	while (A == 0) A = Math.floor(Math.random() * 20) + 1
	while ((C == 0) || (C == A)) C = Math.floor(Math.random() * 20) + 1
	vereenvoudigbreuk(A,(C-B))	
	if (boven == 1) X1 = onder
	if (boven > 1) X1 = onder + "/" + boven

	vereenvoudigbreuk(A,(-C-B))	
	if (boven == 1) X2 = onder
	if (boven > 1) X2 = onder + "/" + boven

	opgave = ""
	if (D == -1) opgave += "-" 
	if ((D < -1) || (D > 1)) opgave += D
	opgave += "("
	if (A > 1) opgave += A
	opgave += "x"
	if (B > 0) opgave += " + " + B + ")"
	if (B < 0) opgave += " - " + Math.abs(B) + ")"
	opgave += "<sup>2</sup>"
	if (D*C*C < 0) opgave += " + " + Math.abs(D*C*C)
	if (D*C*C > 0) opgave += " - " + D*C*C
	opgave += " = 0"

	verb = opgave + "<p>"
	if (D != 1)
		{
		verb += "<=> ("
		if (A > 1) verb += A
		verb += "x"
		if (B > 0) verb += " + " + B + ")"
		if (B < 0) verb += " - " + Math.abs(B) + ")"
		verb += "<sup>2</sup>"
		verb += " - " + C*C
		verb += " = 0<p>"
		}
	
	verb += "<=> ("
	if (A > 1) verb += A
	verb += "x"
	if (B > 0) verb += " + " + B + ")"
	if (B < 0) verb += " - " + Math.abs(B) + ")"
	verb += "<sup>2</sup>"
	verb += " = " + C*C + "<p>"

	verb += "<=> "
	if (A > 1) verb += A
	verb += "x"
	if (B > 0) verb += " + " + B
	if (B < 0) verb += " - " + Math.abs(B)
	verb += " = " + C
	verb += " of "
	if (A > 1) verb += A
	verb += "x"
	if (B > 0) verb += " + " + B
	if (B < 0) verb += " - " + Math.abs(B)
	verb += " = " + (-C) + "<p>"
	
	verb += "<=> x = " + X1 + " of x = " + X2
	}

if (typeoefening == 5)
	{
	aantalopl = 0
	A = 0
	B = 0
	while ((B == 0) || (B == A)) B = Math.floor(Math.random() * 45) - 15
	C = 0
	D = 0
	while (D == 0) D = Math.floor(Math.random() * 17) - 4
	if (D > 6) D = 1
	while (A == 0) A = Math.floor(Math.random() * 20) + 1
	while ((C == 0) || (C == A)) C = Math.floor(Math.random() * 20) + 1

	opgave = ""
	if (D == -1) opgave += "-" 
	if ((D < -1) || (D > 1)) opgave += D
	opgave += "("
	if (A > 1) opgave += A
	opgave += "x"
	if (B > 0) opgave += " + " + B + ")"
	if (B < 0) opgave += " - " + Math.abs(B) + ")"
	opgave += "<sup>2</sup>"
	if (D*C*C < 0) opgave += " - " + Math.abs(D*C*C)
	if (D*C*C > 0) opgave += " + " + D*C*C
	opgave += " = 0"

	verb = opgave + "<p>"
	if (D != 1)
		{
		verb += "<=> ("
		if (A > 1) verb += A
		verb += "x"
		if (B > 0) verb += " + " + B + ")"
		if (B < 0) verb += " - " + Math.abs(B) + ")"
		verb += "<sup>2</sup>"
		verb += " + " + C*C
		verb += " = 0<p>"
		}
	
	verb += "<=> ("
	if (A > 1) verb += A
	verb += "x"
	if (B > 0) verb += " + " + B + ")"
	if (B < 0) verb += " - " + Math.abs(B) + ")"
	verb += "<sup>2</sup>"
	verb += " = -" + C*C + "<p>"

	verb += "dus geen oplossingen"
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 5) + 1
}

function toonoef()
{
document.all.txtopgave.innerHTML = '<font size="+1">' + opgave + '</font>';
}

function toonopl()
{
algemaakt = 1
document.all.txtoplossing.innerHTML = '<font size="+1">' + verb + '</font>';
}

function wissen()
{
fv.opl05.src = "../images/vraagteken.gif"
fv.opl.src = "../images/vraagteken.gif"
document.fv.keuzenp.options.value = "x";
document.fv.enigeopl.value = ""
document.fv.oplx1.value = ""
document.fv.oplx2.value = ""
document.all.eenopl.style.display= "none";
document.all.tweeopl.style.display= "none";
}

function nieuwoef()
{
algemaakt = 0
wissen()
kiesoef()
kiesgetallen()
toonoef()
document.all.knopoplossing.style.display = "none"
document.all.txtoplossing.innerHTML = ""
}

function wijzignp()
{
var aantalnp = document.fv.keuzenp.options[document.fv.keuzenp.selectedIndex].value;

if (aantalnp == "x") 
	{
	fv.opl05.src = "../images/vraagteken.gif"
	document.all.eenopl.style.display= "none";
	document.all.tweeopl.style.display= "none";
	}
if (aantalnp == "0") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		npok = 1
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.knopoplossing.style.display = ""		
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "1") 
	{
	pogingenteller++
	if (aantalnp == aantalopl)
		{
		npok = 1
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
		npok = 1
		oplossingenteller++
		fv.opl05.src = "../images/goed.gif"
		document.all.tweeopl.style.display= "";
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
else 
	{
	if (npok == 1) eigenlijkecontrole()
	else alert('Geef a.u.b. eerst in hoeveel wortels er zijn.')
	}
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
		if (((fv.oplx1.value == X1) && (fv.oplx2.value == X2)) || ((fv.oplx1.value == X2) && (fv.oplx2.value == X1))) 
			{
			fv.opl.src = "../images/goed.gif"
			oplossingenteller++
			algemaakt = 1
			}
		else 
			{
			fv.opl.src = "../images/fout.gif"
			document.all.knopoplossing.style.display = ""
			}
		}
	}
	

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		

}