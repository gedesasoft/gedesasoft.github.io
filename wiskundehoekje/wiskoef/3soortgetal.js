var antwoordgegeven = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var typegetal = ""
var gekozengetal = ""
var opgave = ""
var plusofmin = ""
var soortgetallen = ""
var soortoef = ""
var gekliktop = ""

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var G = 0
var H = 0
var decimalevorm = 0;
var txtdecimalevorm = "";
var onbegrensdedecimalevorm = "";
var breuk = ""
var breuk1 = ""
var breuk2 = ""


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
E = 0
F = 0
G = 0
H = 0

if (typeoefening == 1)
	{
	typegetal = "rat"
	A = 0
	while (A == 0) A = (Math.floor(Math.random() * 10000) - 5000) / 2
	if ((Math.round(A) == A) && (A > 0)) typegetal = "nat"  
	if ((Math.round(A) == A) && (A < 0)) typegetal = "geh"
	if (Math.round(A) != A) A = A + Math.floor(Math.random() * 500) / 1000;
	}
	
if (typeoefening == 2)
	{
	typegetal = "rat"
	while ((A == 0) || (A%3 == 0) || (A%7 == 0) || (A%11 == 0)) A = Math.floor(Math.random() * 100) - 50
	C = Math.floor(Math.random() * 9) + 1
	if (C == 1) B = 3 
	if (C == 2) B = 6 
	if (C == 3) B = 7 
	if (C == 4) B = 9 
	if (C == 5) B = 11 
	if (C == 6) B = 12 
	if (C == 7) B = 14 
	if (C == 8) B = 15 
	if (C == 9) B = 18 
	txtdecimalevorm = A + "/" + B
	decimalevorm = A / B
	onbegrensdedecimalevorm = decimalevorm.toString()
	var voorlaatstecijfer = onbegrensdedecimalevorm.length - 1
	onbegrensdedecimalevorm = onbegrensdedecimalevorm.substring(0,voorlaatstecijfer)
	onbegrensdedecimalevorm = onbegrensdedecimalevorm + '...';
	}

if (typeoefening == 3)
	{
	typegetal = "irr"
	A = Math.floor(Math.random() * 100) - 50
	B = Math.floor(Math.random() * 5)
	C = B + 1
	D = C + 1
	E = D + 1
	F = E + 1
	G = F + 1
	H = G + 1
	onbegrensdedecimalevorm = A + "." + B + "" + C + "" + D + "" + E + "" + F + "" + G + "" + H + "..."  
	}

if (typeoefening == 4)
	{
	typegetal = "irr"
	A = Math.floor(Math.random() * 100) - 50
	B = Math.floor(Math.random() * 9) + 1
	onbegrensdedecimalevorm = A + "." + B + "0" + B + "00" + B + "000" + B + "0000" + B + "..."  
	}

if (typeoefening == 5)
	{
	typegetal = "rat"
	A = (Math.floor(Math.random() * 100) + 1) / 10
	B = Math.round(A*A * 100) / 100
	opgave = B
	if (Math.round(Math.sqrt(eval(opgave))) == Math.sqrt(eval(opgave))) typegetal = "nat" 
	}
	
if (typeoefening == 6)
	{
	typegetal = "irr"
	A = (Math.floor(Math.random() * 100) + 1) / 10
	B = Math.round(A*A * 100 + 1) / 100
	opgave = B
	}

if (typeoefening == 7)
	{
	typegetal = "rat"
	A = (Math.floor(Math.random() * 100) + 1) / 10
	B = Math.round(A*A * 100) / 100
	while (C == 0) C = (Math.floor(Math.random() * 50)  - 24) / 10
	breuk1 = Math.round((B - C) * 100) / 100
	breuk2 = Math.round(C * 100) / 100
	if (breuk2 > 0) opgave = breuk1 + " + " + Math.abs(breuk2)
	if (breuk2 < 0) opgave = breuk1 + " - " + Math.abs(breuk2)
	if (Math.round(Math.sqrt(eval(opgave))) == Math.sqrt(eval(opgave))) typegetal = "nat" 
	}
	
if (typeoefening == 8)
	{
	typegetal = "irr"
	A = (Math.floor(Math.random() * 100) + 1) / 10
	B = Math.round(A*A * 100 + 1) / 100
	while (C == 0) C = (Math.floor(Math.random() * 50)  - 24) / 10
	breuk1 = Math.round((B - C) * 100) / 100
	breuk2 = Math.round(C * 100) / 100
	if (breuk2 > 0) opgave = breuk1 + " + " + Math.abs(breuk2)
	if (breuk2 < 0) opgave = breuk1 + " - " + Math.abs(breuk2)
	}
	
if (typeoefening == 9)
	{
	typegetal = "rat"
	A = Math.floor(Math.random() * 20) + 1
	B = A
	while (B == A) B = Math.floor(Math.random() * 20) + 1
	C = A*A
	D = B*B
	vereenvoudigbreuk(C,D)
	opgave = breuk
	if (Math.round(Math.sqrt(eval(opgave))) == Math.sqrt(eval(opgave))) typegetal = "nat" 
	}
	
if (typeoefening == 10)
	{
	typegetal = "irr"
	A = Math.floor(Math.random() * 20) + 1
	B = A
	while (B == A) B = Math.floor(Math.random() * 20) + 1
	C = A*A + 1
	D = B*B
	vereenvoudigbreuk(C,D)
	opgave = breuk
	}
	
if (typeoefening == 11)
	{
	typegetal = "rat"
	A = Math.floor(Math.random() * 20) + 1
	B = A
	while (B == A) B = Math.floor(Math.random() * 20) + 1
	E = Math.floor(Math.random() * 20) - 9
	F = Math.floor(Math.random() * 10) + 1
	vereenvoudigbreuk(E,F)
	breuk2 = breuk
	C = A*A*F - B*B*E 
	D = B*B*F
	vereenvoudigbreuk(C,D)
	breuk1 = breuk
	if (E > 0) opgave = breuk1 + " + " + breuk2
	if (E < 0) opgave = breuk1 + " - " + breuk2.substring(1,8)
	if (Math.round(Math.sqrt(eval(opgave))) == Math.sqrt(eval(opgave))) typegetal = "nat" 
	}
	
if (typeoefening == 12)
	{
	typegetal = "irr"
	A = Math.floor(Math.random() * 20) + 1
	B = A
	while (B == A) B = Math.floor(Math.random() * 20) + 1
	E = Math.floor(Math.random() * 20) - 9
	F = Math.floor(Math.random() * 10) + 1
	vereenvoudigbreuk(E,F)
	breuk2 = breuk.toString()
	C = (A*A+1)*F - B*B*E 
	D = B*B*F
	vereenvoudigbreuk(C,D)
	breuk1 = breuk
	if (E > 0) opgave = breuk1 + " + " + breuk2
	if (E < 0) opgave = breuk1 + " - " + breuk2.substring(1,8)
	}

if (typeoefening == 13)
	{
	typegetal = "nat"
	A = Math.floor(Math.random() * 20) + 1
	B = A*A
	opgave = B
	}
	
if (typeoefening == 14)
	{
	typegetal = "nat"
	A = Math.floor(Math.random() * 20) + 1
	B = A*A
	C = Math.floor(Math.random() * 80) + 1
	opgave = (B - C) + " + " + C
	}

if (typeoefening == 0)
	{
	A = Math.floor(Math.random() * 20) + 1
	C = 0
	while (C ==0) C = Math.floor(Math.random() * 80)  - 35
	B = A * C
	opgave = B + " / " + A
	if (C > 0) typegetal = "nat"
	if (C < 0) typegetal = "geh"
	}

}

function controleer(waarde)
{
if (waarde == "nat") gekliktop = "1"
if (waarde == "geh") gekliktop = "1"
if (waarde == "rat") gekliktop = "2"
if (waarde == "irr") gekliktop = "3"

if (gekliktop <= soortgetallen) 
{
if (antwoordgegeven == 1) 
	{
	alert('Sorry, maar je antwoord wijzigen mag niet meer!')
	}
else
	{
	antwoordgegeven = 1
	pogingenteller++
	if (waarde == typegetal)
		{
		getallen.opl.src = "../images/goed.gif"
		oplossingenteller++
		}
	else 
		{
		getallen.opl.src = "../images/fout.gif"
		if (typegetal == "nat") alert('Dit getal behoort tot N: je had dus op de gele zone moeten klikken.')
		if (typegetal == "geh") alert('Dit getal behoort tot Z, maar niet tot N: je had dus op de blauwe zone moeten klikken.')
		if (typegetal == "rat") alert('Dit getal behoort tot Q, maar niet tot Z: je had dus op de groene zone moeten klikken.')
		if (typegetal == "irr") alert('Dit getal behoort tot R, maar niet tot Q (het is irrationaal): je had dus op de paarse zone moeten klikken.')
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.getallen.aantaljuist.value = oplossingenteller
	document.getallen.aantalpogingen.value = pogingenteller
	document.getallen.percentage.value = procent		
	}
}	
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 18) - 4
if (typeoefening < 1) typeoefening = typeoefening + 4
}

function toonoef()
{
if (typeoefening < 5) document.all.zonderwortel.style.display= "";
if (typeoefening > 4) 

{
document.all.metwortel.style.display= "";
plusofmin = Math.floor(Math.random() * 2)
if (plusofmin == 1)
	{
	document.tekenvoorwortel.src = "images/3rat_of_irrat_wortel0.gif"
	if (typegetal == "nat") typegetal = "geh"
	}
else document.tekenvoorwortel.src = "images/leeg.gif"
} 
if (typeoefening == 0) document.getallen.getal.value = opgave
if (typeoefening == 1) document.getallen.getal.value = A
if (typeoefening == 2) 
	{
	typevariatie = Math.floor(Math.random() * 2)
	if (typevariatie == 0) document.getallen.getal.value = onbegrensdedecimalevorm 
	if (typevariatie == 1) document.getallen.getal.value = txtdecimalevorm 
	}

if (typeoefening == 3) document.getallen.getal.value = onbegrensdedecimalevorm
if (typeoefening == 4) document.getallen.getal.value = onbegrensdedecimalevorm
if (typeoefening > 4) document.getallen.getalonderwortel.value = opgave

}


function nieuwoef()
{
soortgetallen = document.getallen.keuze.options[document.getallen.keuze.selectedIndex].value;
if (soortgetallen == "x") alert('Kies eerst met welk soort getallen je wil oefenen.\nMet welke getallenverzamelingen heb je al kennis gemaakt?')
else
	{
	antwoordgegeven = 0
	if (soortgetallen == "1") document.diagram.src = "images/3soortgetal_Z.gif"
	if (soortgetallen == "2") document.diagram.src = "images/3soortgetal_Q.gif"
	if (soortgetallen == "3") document.diagram.src = "images/3soortgetal.gif"
	document.opl.src = "../images/vraagteken.gif"
	document.all.zonderwortel.style.display= "none";
	document.all.metwortel.style.display= "none";
	document.getallen.getal.value= "";
	document.getallen.getalonderwortel.value= "";
	soortoef = 4
	while (soortgetallen < soortoef)
		{
		kiesoef()
		kiesgetallen()
		if (typegetal == "nat") soortoef = "1" 
		if (typegetal == "geh") soortoef = "1" 
		if (typegetal == "rat") soortoef = "2" 
		if (typegetal == "irr") soortoef = "3"
		}
	toonoef()
	}
}




