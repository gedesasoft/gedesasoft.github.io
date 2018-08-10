var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var X = 0
var A = 0
var B = 0
var C = 0
var M = 0
var P = 0
var Q = 0
var R = 0
var S = 0
var vgl = ""

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8)
}

function kiesgetallen()
{
if (typeoefening == 0)
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while (M == 0) M = Math.floor(Math.random() * 20) - 10;
	while (B == 0) B = Math.floor(Math.random() * 20) - 10;
	C = 0 + M*X
	opgave = 'product = '
	}
if (typeoefening == 1)
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while (M == 0) M = Math.floor(Math.random() * 20) - 10;
	while (C == 0) C = Math.floor(Math.random() * 20) - 10;
	B = 0 - M*X
	opgave = 'som = '
	}
if (typeoefening == 2)
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while ((A > -2) && (A < 2)) A = Math.floor(Math.random() * 10) - 5;
	while (C == 0) C = Math.floor(Math.random() * 20) - 10;
	M = 0 - A*X
	opgave = 'som = '
	}
if (typeoefening == 3)
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while ((A > -2) && (A < 2)) A = Math.floor(Math.random() * 10) - 5;
	while (B == 0) B = Math.floor(Math.random() * 20) - 10;
	M = 0 + A*X
	opgave = 'product = '
	}

if (typeoefening == 4)
	{
	while (P == 0) P = Math.floor(Math.random() * 5) + 2;
	while (Q == 0) Q = Math.floor(Math.random() * 20) - 10;
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	M = Math.floor(Math.random() * 20) - 10;
	while (C == 0) C = Math.floor(Math.random() * 20) - 10;
	B = 0 - (P*M+Q)*X
	opgave = 'som = '
	}

if (typeoefening == 5)
	{
	while (P == 0) P = Math.floor(Math.random() * 5) + 2;
	while (Q == 0) Q = Math.floor(Math.random() * 20) - 10;
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	M = Math.floor(Math.random() * 20) - 10;
	while ((A > -2) && (A < 2)) A = Math.floor(Math.random() * 10) - 5;
	while (C == 0) C = Math.floor(Math.random() * 20) - 10;
	Q = 0 - (A*X + P*M)
	opgave = 'som = '
	}

if (typeoefening == 6)
	{
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	while ((A > -2) && (A < 2)) A = Math.floor(Math.random() * 10) - 5;
	while (B == 0) B = Math.floor(Math.random() * 20) - 10;
	while (P == 0) P = Math.floor(Math.random() * 5) + 2;
	M = Math.floor(Math.random() * 20) - 10;
	Q = A*X - P*M
	opgave = 'product = '
	}

if (typeoefening == 7)
	{
	while (P == 0) P = Math.floor(Math.random() * 5) + 2;
	while (Q == 0) Q = Math.floor(Math.random() * 20) - 10;
	while (X == 0) X = Math.floor(Math.random() * 20) - 10;
	M = Math.floor(Math.random() * 20) - 10;
	while (B == 0) B = Math.floor(Math.random() * 20) - 10;
	C = (P*M+Q)*X
	opgave = 'product = '
	}


}


function toonoef()
{
if ((typeoefening == 1) || (typeoefening == 0)) 
	{
	vgl = vgl + 'mx² '
	if (B == -1) vgl = vgl + ' - ' 
	if (B < -1) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 1) vgl = vgl + ' + ' + Math.abs(B)
	if (B == 1) vgl = vgl + ' + ' 
	vgl = vgl + 'x '
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C)
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C)
	vgl = vgl + ' = 0'
	}

if (typeoefening == 2)
	{
	vgl = vgl + A + 'x² + mx '
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C)
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C)
	vgl = vgl + ' = 0'
	}

if (typeoefening == 3)
	{
	vgl = vgl + A + 'x² '
	if (B == -1) vgl = vgl + ' - ' 
	if (B < -1) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 1) vgl = vgl + ' + ' + Math.abs(B)
	if (B == 1) vgl = vgl + ' + ' 
	vgl = vgl + 'x + m = 0'
	}

if ((typeoefening == 4) || (typeoefening == 7))
	{
	vgl = vgl + '(' + P + 'm' 
	if (Q < 0) vgl = vgl + ' - ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' + ' + Math.abs(Q)
	vgl = vgl + ')x² '
	if (B == -1) vgl = vgl + ' - ' 
	if (B < -1) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 1) vgl = vgl + ' + ' + Math.abs(B)
	if (B == 1) vgl = vgl + ' + ' 
	vgl = vgl + 'x '
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C)
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C)
	vgl = vgl + ' = 0'
	}

if (typeoefening == 5)
	{
	vgl = vgl + A + 'x² + (' + P + 'm'
	if (Q < 0) vgl = vgl + ' - ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' + ' + Math.abs(Q)
	vgl = vgl + ')x '
	if (C < 0) vgl = vgl + ' - ' + Math.abs(C)
	if (C > 0) vgl = vgl + ' + ' + Math.abs(C)
	vgl = vgl + ' = 0'
	}

if (typeoefening == 6)
	{
	vgl = vgl + A + 'x² '
	if (B == -1) vgl = vgl + ' - ' 
	if (B < -1) vgl = vgl + ' - ' + Math.abs(B)
	if (B > 1) vgl = vgl + ' + ' + Math.abs(B)
	if (B == 1) vgl = vgl + ' + ' 
	vgl = vgl + 'x + ' + P + 'm'
	if (Q < 0) vgl = vgl + ' - ' + Math.abs(Q)
	if (Q > 0) vgl = vgl + ' + ' + Math.abs(Q)
	vgl = vgl + ' = 0'
	}

document.coeff.txtvgl.value = vgl
document.coeff.txtpunt.value = opgave + X

}


function nieuwoef()
{
vgl = ""
A = 0
B = 0
C = 0
M = 0
X = 0
P = 0
Q = 0
R = 0
S = 0
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
var antwm = document.coeff.txtopl.value;
if (antwm == "") alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (antwm == M) 
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


