var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var breuk = "";
var typerij = ""
var gekozenrij = ""
var antw1 =  ""
var antw2 = ""

var U1 = 0
var U2 = 0
var U3 = 0
var U4 = 0
var U5 = 0
var U8 = 0
var U10 = 0
var U1teller = 0
var U2teller = 0
var U3teller = 0
var U4teller = 0
var U5teller = 0
var U8teller = 0
var U10teller = 0
var U1noemer = 0
var U2noemer = 0
var U3noemer = 0
var U4noemer = 0
var U5noemer = 0
var U8noemer = 0
var U10noemer = 0

var A = 0
var B = 0
var C = 0
var D = 0
var N = 0

var Q = 0
var Qteller = 0
var Qnoemer = 0
var V = 0
var Vteller = 0
var Vnoemer = 0

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

function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0

if (typeoefening == 1)
	{
	typerij = "RR"
	A = Math.floor(Math.random() * 20) - 8
	B = Math.floor(Math.random() * 10) + 1
	if (B > 6) B = 1
	while (C == 0) C = Math.floor(Math.random() * 20) - 8
	D = Math.floor(Math.random() * 10) + 1
	if (D > 6) D = 1

	Vteller = C
	Vnoemer = D
	vereenvoudigbreuk(Vteller,Vnoemer) 
	V = breuk
	
	U1teller = A
	U1noemer = B
	vereenvoudigbreuk(U1teller,U1noemer) 
	U1 = breuk

	U2teller = A*D + B*C
	U2noemer = B*D
	vereenvoudigbreuk(U2teller,U2noemer) 
	U2 = breuk

	U3teller = A*D + 2*B*C
	U3noemer = B*D
	vereenvoudigbreuk(U3teller,U3noemer) 
	U3 = breuk

	U4teller = A*D + 3*B*C
	U4noemer = B*D
	vereenvoudigbreuk(U4teller,U4noemer) 
	U4 = breuk

	U5teller = A*D + 4*B*C
	U5noemer = B*D
	vereenvoudigbreuk(U5teller,U5noemer) 
	U5 = breuk

	U10teller = A*D + 9*B*C
	U10noemer = B*D
	vereenvoudigbreuk(U10teller,U10noemer) 
	U10 = breuk
	}
	

if (typeoefening == 2)
	{
	typerij = "MR"
	A = Math.floor(Math.random() * 20) - 8
	B = Math.floor(Math.random() * 10) + 1
	if (B > 6) B = 1
	while ((C == 0) || (C == 1)) C = Math.floor(Math.random() * 8) - 3
	D = Math.floor(Math.random() * 6) + 1
	if (D > 3) D = 1

	Qteller = C
	Qnoemer = D
	vereenvoudigbreuk(Qteller,Qnoemer) 
	Q = breuk
	
	U1teller = A
	U1noemer = B
	vereenvoudigbreuk(U1teller,U1noemer) 
	U1 = breuk

	U2teller = A*C
	U2noemer = B*D
	vereenvoudigbreuk(U2teller,U2noemer) 
	U2 = breuk

	U3teller = A*Math.pow(C,2)
	U3noemer = B*Math.pow(D,2)
	vereenvoudigbreuk(U3teller,U3noemer) 
	U3 = breuk

	U4teller = A*Math.pow(C,3)
	U4noemer = B*Math.pow(D,3)
	vereenvoudigbreuk(U4teller,U4noemer) 
	U4 = breuk

	U5teller = A*Math.pow(C,4)
	U5noemer = B*Math.pow(D,4)
	vereenvoudigbreuk(U5teller,U5noemer) 
	U5 = breuk

	U8teller = A*Math.pow(C,7)
	U8noemer = B*Math.pow(D,7)
	vereenvoudigbreuk(U8teller,U8noemer) 
	U8 = breuk
	}
	
if (typeoefening == 3)
	{
	typerij = "GR"
	while ((A == 0) || (A == 1) || (A == -1)) A = Math.floor(Math.random() * 10) - 4
	U1 = A + 3
	U2 = Math.pow(A,2) + 3	
	U3 = Math.pow(A,3) + 3	
	U4 = Math.pow(A,4) + 3	
	U5 = Math.pow(A,5) + 3	
	}

}

function wijzigrij()
{
var gekozenrij = document.regelm.keuzerij.options[document.regelm.keuzerij.selectedIndex].value;

if (gekozenrij == "x") 
	{
	regelm.oplrij.src = "../images/vraagteken.gif"
	document.all.reken.style.display= "none";
	document.all.meet.style.display= "none";
	document.all.controle.style.display= "none";
	}
else
	{
	pogingenteller++
	if (gekozenrij == typerij)
		{
		regelm.oplrij.src = "../images/goed.gif"
		oplossingenteller++
		if (typerij == "RR")
			{
			document.all.reken.style.display= "";
			document.all.meet.style.display= "none";
			document.all.controle.style.display= "";
			}
		if (typerij == "MR")
			{
			document.all.reken.style.display= "none";
			document.all.meet.style.display= "";
			document.all.controle.style.display= "";
			}
		}
	else regelm.oplrij.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.regelm.aantaljuist.value = oplossingenteller
	document.regelm.aantalpogingen.value = pogingenteller
	document.regelm.percentage.value = procent		
	}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1
}

function toonoef()
{
document.regelm.txtU1.value = U1
document.regelm.txtU2.value = U2
document.regelm.txtU3.value = U3
document.regelm.txtU4.value = U4
document.regelm.txtU5.value = U5
}


function nieuwoef()
{
antwoordjuist = 0
document.oplrij.src = "../images/vraagteken.gif"
document.opl.src = "../images/vraagteken.gif"
document.regelm.keuzerij.value = "x"
document.all.reken.style.display= "none";
document.all.meet.style.display= "none";
document.all.controle.style.display= "none";
document.regelm.txtV.value= "";
document.regelm.txtQ.value= "";
document.regelm.txtRRu10.value= "";
document.regelm.txtMRu10.value= "";
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
if (typeoefening == 1)
	{
	antw1 = document.regelm.txtV.value
	antw2 = document.regelm.txtRRu10.value

	if ((antw1 == "") || (antw2 == "")) alert('Geef a.u.b. het verschil en de 10de term van deze rekenkundige rij in!')
	else
		{
		pogingenteller++
		if ((antw1 == V) && (antw2 == U10))
			{
			oplossingenteller++
			regelm.opl.src = "../images/goed.gif";
			antwoordjuist = 1
			}
		else
			{
			if ((eval(antw1) == eval(V)) && (eval(antw2) == eval(U10))) alert('Helaas, vergeten te vereenvoudigen.')
			regelm.opl.src = "../images/fout.gif";
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)	
		document.regelm.aantaljuist.value = oplossingenteller
		document.regelm.aantalpogingen.value = pogingenteller
		document.regelm.percentage.value = procent		
		}
	}

if (typeoefening == 2)
	{
	antw1 = document.regelm.txtQ.value
	antw2 = document.regelm.txtMRu10.value

	if ((antw1 == "") || (antw2 == "")) alert('Geef a.u.b. het verschil en de 10de term van deze rekenkundige rij in!')
	else
		{
		pogingenteller++
		if ((antw1 == Q) && (antw2 == U8))
			{
			oplossingenteller++
			regelm.opl.src = "../images/goed.gif";
			antwoordjuist = 1
			}
		else
			{
			if ((eval(antw1) == eval(Q)) && (eval(antw2) == eval(U8))) alert('Helaas, vergeten te vereenvoudigen.')
			regelm.opl.src = "../images/fout.gif";
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)	
		document.regelm.aantaljuist.value = oplossingenteller
		document.regelm.aantalpogingen.value = pogingenteller
		document.regelm.percentage.value = procent		
		}
	}



}

