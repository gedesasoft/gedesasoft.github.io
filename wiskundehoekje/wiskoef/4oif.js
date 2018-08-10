var factor = ''
var veelterm = ''
var typeoefening = 0
var ontbinding = ''

var veelterm = ''
var factorA = ''
var factorB = ''
var factorC = ''
var factorD = ''
var factorE = ''
var tweedegraadsfunctie = ''

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0

var L = 0
var M = 0

var coX5 = 0
var coX4 = 0
var coX3 = 0
var coX2 = 0
var coX1 = 0
var coX0 = 0

var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><br><p>'

var naoplossing = '</b></TD></TR></TABLE></b></body></html>';


function schrijffactor(waarde)
{
if (waarde > 0) factor = '(x - ' + Math.abs(waarde) + ')'
if (waarde < 0) factor = '(x + ' + Math.abs(waarde) + ')'
}
 
function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0
E = 0

L = 0
M = 0

while (A == 0) A = Math.floor(Math.random() * 7 ) - 3;
while ((B == 0) || (B == A)) B = Math.floor(Math.random() * 7 ) - 3;
while ((C == 0) || (C == A) || (C == B)) C = Math.floor(Math.random() * 9 ) - 4;
while ((D == 0) || (D == A) || (D == B) || (D == C)) D = Math.floor(Math.random() * 9 ) - 4;
while ((E == 0) || (E == A) || (E == B) || (E == C) || (E == D)) E = Math.floor(Math.random() * 11 ) - 5;

while (L == 0) L = Math.floor(Math.random() * 11 ) - 5;
M = Math.floor(L * L / 4) + 2

schrijffactor(A)
factorA = factor
schrijffactor(B)
factorB = factor
schrijffactor(C)
factorC = factor
schrijffactor(D)
factorD = factor
schrijffactor(E)
factorE = factor

if (typeoefening == 2) 
	{
	C = B
	}

if (typeoefening == 5) 
	{
	D = C
	}

if (typeoefening == 6) 
	{
	D = B
	C = A
	}

if (typeoefening == 8) 
	{
	B = A
	}

if (typeoefening == 10) 
	{
	E = D
	}

if (typeoefening == 11) 
	{
	D = B
	E = C
	}

if (typeoefening == 13) 
	{
	C = B
	}

if (typeoefening == 15) 
	{
	B = A
	}


if (typeoefening < 3)
	{
	coX3 = 1
	coX2 = 0-(A+B+C)
	coX1 = A*B+A*C+B*C
	coX0 = 0-A*B*C
	}

if (typeoefening == 3)
	{
	coX3 = 1
	coX2 = L-A
	coX1 = M-A*L
	coX0 = 0-A*M
	}

if ((typeoefening > 3) && (typeoefening < 7)) 
	{
	coX4 = 1
	coX3 = 0-(A+B+C+D)
	coX2 = A*B+A*C+A*D+B*C+B*D+C*D
	coX1 = 0-(A*B*C+A*B*D+A*C*D+B*C*D)
	coX0 = A*B*C*D
	}

if ((typeoefening > 6) && (typeoefening < 9)) 
	{
	coX4 = 1
	coX3 = L-A-B
	coX2 = A*B-A*L-B*L+M
	coX1 = A*B*L-A*M-B*M
	coX0 = A*B*M
	}

if ((typeoefening > 8) && (typeoefening < 12)) 
	{
	coX5 = 1
	coX4 = 0-(A+B+C+D+E)
	coX3 = A*B+A*C+A*D+A*E+B*C+B*D+B*E+C*D+C*E+D*E
	coX2 = 0-(A*B*C+A*B*D+A*B*E+A*C*D+A*C*E+A*D*E+B*C*D+B*C*E+B*D*E+C*D*E)
	coX1 = A*B*C*D+A*B*C*E+A*B*D*E+A*C*D*E+B*C*D*E
	coX0 = 0-A*B*C*D*E
	}

if ((typeoefening > 11) && (typeoefening < 14)) 
	{
	coX5 = 1
	coX4 = L-A-B-C
	coX3 = A*B+A*C-A*L+B*C-B*L-C*L+M
	coX2 = 0-(A*B*C-A*B*L-A*C*L+A*M+B*M-B*C*L+C*M)
	coX1 = A*B*M+A*C*M+B*C*M-A*B*C*L
	coX0 = 0-A*B*C*M
	}

if (typeoefening > 13)
	{
	coX2 = 1
	coX1 = 0-(A+B)
	coX0 = A*B
	}

}

function schrijfveelterm()
{
termcoX4 = ''
termcoX3 = ''
termcoX2 = ''
termcoX1 = ''
termcoX0 = ''

if (coX4 == 1) termcoX4 = ' + x<sup>4</sup>'
if (coX4 == -1) termcoX4 = ' - x<sup>4</sup>'
if (coX4 > 1) termcoX4 = ' + ' + Math.abs(coX4) + 'x<sup>4</sup>'
if (coX4 < -1) termcoX4 = ' - ' + Math.abs(coX4) + 'x<sup>4</sup>'

if (coX3 == 1) termcoX3 = ' + x<sup>3</sup>'
if (coX3 == -1) termcoX3 = ' - x<sup>3</sup>'
if (coX3 > 1) termcoX3 = ' + ' + Math.abs(coX3) + 'x<sup>3</sup>'
if (coX3 < -1) termcoX3 = ' - ' + Math.abs(coX3) + 'x<sup>3</sup>'

if (coX2 == 1) termcoX2 = ' + x<sup>2</sup>'
if (coX2 == -1) termcoX2 = ' - x<sup>2</sup>'
if (coX2 > 1) termcoX2 = ' + ' + Math.abs(coX2) + 'x<sup>2</sup>'
if (coX2 < -1) termcoX2 = ' - ' + Math.abs(coX2) + 'x<sup>2</sup>'

if (coX1 == 1) termcoX1 = ' + x'
if (coX1 == -1) termcoX1 = ' - x'
if (coX1 > 1) termcoX1 = ' + ' + Math.abs(coX1) + 'x'
if (coX1 < -1) termcoX1 = ' - ' + Math.abs(coX1) + 'x'

if (coX0 > 0) termcoX0 = ' + ' + Math.abs(coX0)
if (coX0 < 0) termcoX0 = ' - ' + Math.abs(coX0)

if (typeoefening < 4)
	{
	veelterm = 'x<sup>3</sup>' + termcoX2 + termcoX1 + termcoX0 
	}

if ((typeoefening > 3) && (typeoefening < 9)) 
	{
	veelterm = 'x<sup>4</sup>' + termcoX3 + termcoX2 + termcoX1 + termcoX0 
	}

if ((typeoefening > 8) && (typeoefening < 14)) 
	{
	veelterm = 'x<sup>5</sup>' + termcoX4 + termcoX3 + termcoX2 + termcoX1 + termcoX0 
	}

if (typeoefening > 13)
	{
	veelterm = 'x<sup>2</sup>' + termcoX1 + termcoX0 
	}
}

function schrijfontbinding()
{
tweedegraadsfunctie = '(x<sup>2</sup>'

if (L == 1) tweedegraadsfunctie += ' + x'
if (L == -1) tweedegraadsfunctie += ' - x'
if (L > 1) tweedegraadsfunctie += ' + ' + Math.abs(L) + 'x'
if (L < -1) tweedegraadsfunctie += ' - ' + Math.abs(L) + 'x'

if (M > 0) tweedegraadsfunctie += ' + ' + Math.abs(M)
if (M < 0) tweedegraadsfunctie += ' - ' + Math.abs(M)

tweedegraadsfunctie += ')'


ontbinding = ' = <font color="#0000ff">' + factorA

if ((typeoefening == 6) || (typeoefening == 8) || (typeoefening == 15))
	{
	ontbinding += '<sup>2</sup>'
	}
if ((typeoefening != 3) && (typeoefening != 8) && (typeoefening != 15))
	{
	ontbinding += factorB
	}
if ((typeoefening == 2) || (typeoefening == 6) || (typeoefening == 11) || (typeoefening == 13))
	{
	ontbinding += '<sup>2</sup>'
	}
if ((typeoefening == 1) || (typeoefening == 4) || (typeoefening == 5) || ((typeoefening > 8) && (typeoefening < 13)))
	{
	ontbinding += factorC
	}
if ((typeoefening == 5) || (typeoefening == 11))
	{
	ontbinding += '<sup>2</sup>'
	}
if ((typeoefening == 4) || (typeoefening == 9) || (typeoefening == 10))
	{
	ontbinding += factorD
	}
if (typeoefening == 10)
	{
	ontbinding += '<sup>2</sup>'
	}
if (typeoefening == 9)
	{
	ontbinding += factorE
	}
if ((typeoefening == 3) || (typeoefening == 7) || (typeoefening == 8) || (typeoefening == 12) || (typeoefening == 13))
	{
	ontbinding += tweedegraadsfunctie
	}
	
ontbinding += '</font>'
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 15) + 1
}

function nieuwoef()
{
kiesoef()
kiesgetallen()
schrijfveelterm()
schrijfontbinding()
toonoef()
}

function toonoef()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + veelterm + naoplossing)
}

function toonopl()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + veelterm + ontbinding + naoplossing)
}

