var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var X = 0
var Y = 0
var A = 0
var B = 0
var C = 0
var P = 0
var Q = 0
var vgl = ""

function kiesgetallen()
{
if ((typeoefening == 1) || (typeoefening == 2))
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while (P == 0) P = Math.floor(Math.random() * 20) - 10;
	while (A == 0) A = Math.floor(Math.random() * 20) - 10;
	}
if (typeoefening == 1)
	{
	Y = P*X + A
	}
if (typeoefening == 2)
	{
	Y = A*X + P
	}
if ((typeoefening == 3) || (typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6))
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while (Y == 0) Y = Math.floor(Math.random() * 20) - 10;
	while (P == 0) P = Math.floor(Math.random() * 20) - 10;
	while (A == 0) A = Math.floor(Math.random() * 20) - 10;
	while (B == 0) B = Math.floor(Math.random() * 20) - 10;
	while (C == 0) C = Math.floor(Math.random() * 20) - 10;
	}
if (typeoefening == 3)
	{
	Q = A*X + P*Y
	}
if (typeoefening == 4)
	{
	Q = P*X + A*Y
	}
if (typeoefening == 5)
	{
	Q = (A*P+B)*X + C*Y
	}
if (typeoefening == 6)
	{
	Q = C*X + (A*P+B)*Y
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	vgl = vgl + 'y = px '
	if (A < 0) vgl = vgl + ' - ' + Math.abs(A)
	if (A > 0) vgl = vgl + ' + ' + Math.abs(A)
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}

if (typeoefening == 2)
	{
	vgl = vgl + 'y = ' + A + 'x + p'
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}
if (typeoefening == 3)
	{
	vgl = vgl + A + 'x + py '
	if (Q < 0) vgl = vgl + ' + ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' - ' + Math.abs(Q)
	vgl = vgl  + ' = 0'
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}
if (typeoefening == 4)
	{
	vgl = vgl + 'px'
	if (A < 0) vgl = vgl + ' - ' + Math.abs(A) + 'y'
	if (A > 0) vgl = vgl + ' + ' + Math.abs(A) + 'y'
	if (Q < 0) vgl = vgl + ' + ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' - ' + Math.abs(Q)
	vgl = vgl  + ' = 0'
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}
if (typeoefening == 5)
	{
	vgl = vgl + '(' + A + 'p' 
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B) + ')x'
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B) + ')x'
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C) + 'y'
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C) + 'y'
	if (Q < 0) vgl = vgl + ' + ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' - ' + Math.abs(Q)
	vgl = vgl  + ' = 0'
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}
if (typeoefening == 6)
	{
	vgl = vgl + C + 'x + ('
	vgl = vgl + A + 'p' 
	if (B < 0) vgl = vgl + ' - ' + Math.abs(B) + ')y'
	if (B > 0) vgl = vgl + ' + ' + Math.abs(B) + ')y'
	if (Q < 0) vgl = vgl + ' + ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' - ' + Math.abs(Q)
	vgl = vgl  + ' = 0'
	document.coeff.txtvgl.value = vgl
	document.coeff.txtpunt.value = '(' + X + ',' + Y + ')'
	}

}


function nieuwoef()
{
vgl = ""
A = 0
B = 0
C = 0
P = 0
X = 0
Y = 0
document.coeff.txtvgl.value = "";
document.coeff.txtpunt.value = "";
document.coeff.txtopl.value = "??";
document.coeff.opl.src = "../images/vraagteken.gif";
document.coeff.opl.value = "";
antwoordjuist = 0
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
var antwp = document.coeff.txtopl.value;
if (antwp == "") alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (antwp == P) 
		{
		coeff.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else coeff.opl.src = "../images/fout.gif";
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
}


