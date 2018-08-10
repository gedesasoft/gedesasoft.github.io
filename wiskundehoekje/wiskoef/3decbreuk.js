var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var decimalevorm = 0;
var onbegrensdedecimalevorm = "";
var A = 0;
var B = 0;

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
}


function maakopgave()
{
A = 0
B = 0
while ((A == 0) || (B == 0) || (A%B == 0))
	{
	A = Math.floor(Math.random() * 999) + 1;
	B = Math.floor(Math.random() * 15) + 2;
	}

decimalevorm = A / B

var ng1 = Math.abs(A);
var ng2 = Math.abs(B);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

A = A / ng1
B = B / ng1
}

function toonoef()
{
document.decivorm.txtoplteller.value = "";
document.decivorm.txtoplnoemer.value = "";

if ((B == 2) || (B == 4) || (B == 5) || (B == 8) || (B == 10) || (B == 16))          
	{
	document.decivorm.txtopgave.value = decimalevorm;
	}
else
	{
	onbegrensdedecimalevorm = decimalevorm.toString()
	var voorlaatstecijfer = onbegrensdedecimalevorm.length - 1
	onbegrensdedecimalevorm = onbegrensdedecimalevorm.substring(0,voorlaatstecijfer)
	document.decivorm.txtopgave.value = onbegrensdedecimalevorm + '...';
	}
}

function nieuwoef()
{
algemaakt = 0;
maakopgave()
toonoef()
document.decivorm.opl.src = "../images/vraagteken.gif"
}


function controle() 
{
var antwteller = document.decivorm.txtoplteller.value;
var antwnoemer = document.decivorm.txtoplnoemer.value;

if ((antwteller == "") || (antwnoemer == ""))decivorm.opl.src = "../images/vraagteken.gif"
else
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens geprobeerd hebt, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	algemaakt = 1
	if ((antwteller == A) && (antwnoemer == B)) 
		{
		decivorm.opl.src = "../images/goed.gif"		
		oplossingenteller++;
		}
	else 
		{
		decivorm.opl.src = "../images/fout.gif"
		if ((antwteller / antwnoemer) == (A / B)) alert ('Je bent vergeten te vereenvoudigen')
		alert('De decimale vorm is gelijk aan de breuk ' + A + '/' + B)
		}
	
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.decivorm.aantaljuist.value = oplossingenteller
	document.decivorm.aantalpogingen.value = pogingenteller
	document.decivorm.percentage.value = procent		
}
}
