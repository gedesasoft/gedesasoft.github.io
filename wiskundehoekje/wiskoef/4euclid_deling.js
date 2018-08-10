var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var antw_Q = 0
var antw_R = 0
var factor = ''
var waarde = 0

var A = 0
var B = 0
var C = 0
var D = 0
var J = 0
var K = 0
var L = 0
var M = 0
var P = 0
var Q = 0
var R = 0

var coX6 = 0
var coX5 = 0
var coX4 = 0
var coX3 = 0
var coX2 = 0
var coX1 = 0
var coX0 = 0

var deeltal = ''
var deler = ''
var quotient = ''
var rest = ''

var voordeeltal = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=8 CELLSPACING=4><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><form name="euclid"><table><tr><td><b>deeltal</b></td><td><b>'

var voordeler ='</b></td></tr><tr><td><b>deler</b></td><td><b>'

var nadeler = '</b></td></tr><tr><td><b>quotient</b></td><td><input type="text" name="txtQ" size=12 maxlength=24></td></tr><tr><td><b>rest</b></td><td><input type="text" name="txtR" size=12 maxlength=24></td></tr></table></form></TD></TR></TABLE></b></body></html>';

 

function schrijfveeltermen()
{
deeltal = ''
deler = ''
quotient = ''
rest = ''

if (coX6 == 1) deeltal += 'x<sup>6</sup>'
if (coX6 == -1) deeltal += '-x<sup>6</sup>'
if (coX6 > 1) deeltal += Math.abs(coX6) + 'x<sup>6</sup>'
if (coX6 < -1) deeltal += '-' + Math.abs(coX6) + 'x<sup>6</sup>'

if (deeltal != '')
	{
	if (coX5 == 1) deeltal += '+x<sup>5</sup>'
	if (coX5 == -1) deeltal += '-x<sup>5</sup>'
	if (coX5 > 1) deeltal += '+' + Math.abs(coX5) + 'x<sup>5</sup>'
	if (coX5 < -1) deeltal += '-' + Math.abs(coX5) + 'x<sup>5</sup>'
	}
else
	{
	if (coX5 == 1) deeltal += 'x<sup>5</sup>'
	if (coX5 == -1) deeltal += '-x<sup>5</sup>'
	if (coX5 > 1) deeltal += Math.abs(coX5) + 'x<sup>5</sup>'
	if (coX5 < -1) deeltal += '-' + Math.abs(coX5) + 'x<sup>5</sup>'
	}

if (deeltal != '')
	{
	if (coX4 == 1) deeltal += '+x<sup>4</sup>'
	if (coX4 == -1) deeltal += '-x<sup>4</sup>'
	if (coX4 > 1) deeltal += '+' + Math.abs(coX4) + 'x<sup>4</sup>'
	if (coX4 < -1) deeltal += '-' + Math.abs(coX4) + 'x<sup>4</sup>'
	}
else
	{
	if (coX4 == 1) deeltal += 'x<sup>4</sup>'
	if (coX4 == -1) deeltal += '-x<sup>4</sup>'
	if (coX4 > 1) deeltal += Math.abs(coX4) + 'x<sup>4</sup>'
	if (coX4 < -1) deeltal += '-' + Math.abs(coX4) + 'x<sup>4</sup>'
	}
	
if (deeltal != '')
	{
	if (coX3 == 1) deeltal += '+x<sup>3</sup>'
	if (coX3 == -1) deeltal += '-x<sup>3</sup>'
	if (coX3 > 1) deeltal += '+' + Math.abs(coX3) + 'x<sup>3</sup>'
	if (coX3 < -1) deeltal += '-' + Math.abs(coX3) + 'x<sup>3</sup>'
	}
else
	{
	if (coX3 == 1) deeltal += 'x<sup>3</sup>'
	if (coX3 == -1) deeltal += '-x<sup>3</sup>'
	if (coX3 > 1) deeltal += Math.abs(coX3) + 'x<sup>3</sup>'
	if (coX3 < -1) deeltal += '-' + Math.abs(coX3) + 'x<sup>3</sup>'
	}
	
if (deeltal != '')
	{
	if (coX2 == 1) deeltal += '+x<sup>2</sup>'
	if (coX2 == -1) deeltal += '-x<sup>2</sup>'
	if (coX2 > 1) deeltal += '+' + Math.abs(coX2) + 'x<sup>2</sup>'
	if (coX2 < -1) deeltal += '-' + Math.abs(coX2) + 'x<sup>2</sup>'
	}
else	
	{
	if (coX2 == 1) deeltal += 'x<sup>2</sup>'
	if (coX2 == -1) deeltal += '-x<sup>2</sup>'
	if (coX2 > 1) deeltal += Math.abs(coX2) + 'x<sup>2</sup>'
	if (coX2 < -1) deeltal += '-' + Math.abs(coX2) + 'x<sup>2</sup>'
	}

if (deeltal != '')
	{
	if (coX1 == 1) deeltal += '+x'
	if (coX1 == -1) deeltal += '-x'
	if (coX1 > 1) deeltal += '+' + Math.abs(coX1) + 'x'
	if (coX1 < -1) deeltal += '-' + Math.abs(coX1) + 'x'
	}
else
	{
	if (coX1 == 1) deeltal += 'x'
	if (coX1 == -1) deeltal += '-x'
	if (coX1 > 1) deeltal += Math.abs(coX1) + 'x'
	if (coX1 < -1) deeltal += '-' + Math.abs(coX1) + 'x'
	}
	
if (coX0 > 0) deeltal += '+' + Math.abs(coX0)
if (coX0 < 0) deeltal += '-' + Math.abs(coX0)

if (J == 1) deler += 'x<sup>3</sup>'
if (J == -1) deler += '-x<sup>3</sup>'
if (J > 1) deler += Math.abs(J) + 'x<sup>3</sup>'
if (J < -1) deler += '-' + Math.abs(J) + 'x<sup>3</sup>'

if (deler != '')
	{
	if (K == 1) deler += '+x<sup>2</sup>'
	if (K == -1) deler += '-x<sup>2</sup>'
	if (K > 1) deler += '+' + Math.abs(K) + 'x<sup>2</sup>'
	if (K < -1) deler += '-' + Math.abs(K) + 'x<sup>2</sup>'
	}
else
	{
	if (K == 1) deler += 'x<sup>2</sup>'
	if (K == -1) deler += '-x<sup>2</sup>'
	if (K > 1) deler += Math.abs(K) + 'x<sup>2</sup>'
	if (K < -1) deler += '-' + Math.abs(K) + 'x<sup>2</sup>'
	}

if (deler != '')
	{
	if (L == 1) deler += '+x'
	if (L == -1) deler += '-x'
	if (L > 1) deler += '+' + Math.abs(L) + 'x'
	if (L < -1) deler += '-' + Math.abs(L) + 'x'
	}
else
	{
	if (L == 1) deler += 'x'
	if (L == -1) deler += '-x'
	if (L > 1) deler += Math.abs(L) + 'x'
	if (L < -1) deler += '-' + Math.abs(L) + 'x'
	}

if (M > 0) deler += '+' + Math.abs(M)
if (M < 0) deler += '-' + Math.abs(M)

if (A == 1) quotient += 'x³'
if (A == -1) quotient += '-x³'
if (A > 1) quotient += Math.abs(A) + 'x³'
if (A < -1) quotient += '-' + Math.abs(A) + 'x³'

if (quotient != '')
	{
	if (B == 1) quotient += '+x²'
	if (B == -1) quotient += '-x²'
	if (B > 1) quotient += '+' + Math.abs(B) + 'x²'
	if (B < -1) quotient += '-' + Math.abs(B) + 'x²'
	}
else	
	{
	if (B == 1) quotient += 'x²'
	if (B == -1) quotient += '-x²'
	if (B > 1) quotient += Math.abs(B) + 'x²'
	if (B < -1) quotient += '-' + Math.abs(B) + 'x²'
	}

if (quotient != '')
	{
	if (C == 1) quotient += '+x'
	if (C == -1) quotient += '-x'
	if (C > 1) quotient += '+' + Math.abs(C) + 'x'
	if (C < -1) quotient += '-' + Math.abs(C) + 'x'
	}
else	
	{
	if (C == 1) quotient += 'x'
	if (C == -1) quotient += '-x'
	if (C > 1) quotient += Math.abs(C) + 'x'
	if (C < -1) quotient += '-' + Math.abs(C) + 'x'
	}

if (quotient != '')
	{
	if (D > 0) quotient += '+' + Math.abs(D)
	if (D < 0) quotient += '-' + Math.abs(D)
	}
else	
	{
	if (D > 0) quotient += Math.abs(D)
	if (D < 0) quotient += '-' + Math.abs(D)
	}

if (P == 1) rest += 'x²'
if (P == -1) rest += '-x²'
if (P > 1) rest += Math.abs(P) + 'x²'
if (P < -1) rest += '-' + Math.abs(P) + 'x²'

if (rest != '')
	{
	if (Q == 1) rest += '+x'
	if (Q == -1) rest += '-x'
	if (Q > 1) rest += '+' + Math.abs(Q) + 'x'
	if (Q < -1) rest += '-' + Math.abs(Q) + 'x'
	}
else
	{
	if (Q == 1) rest += 'x'
	if (Q == -1) rest += '-x'
	if (Q > 1) rest += Math.abs(Q) + 'x'
	if (Q < -1) rest += '-' + Math.abs(Q) + 'x'
	}

if (rest != '')
	{
	if (R > 0) rest += '+' + Math.abs(R)
	if (R < 0) rest += '-' + Math.abs(R)
	}
else
	{
	if (R > 0) rest += Math.abs(R)
	if (R < 0) rest += '-' + Math.abs(R)
	}

	
if (typeoefening == 1) rest = '0'

}

function toonoef()
{
parent.oefening.document.open()
parent.oefening.document.write(voordeeltal + deeltal + voordeler + deler + nadeler)
}

function kiesgetallen()
{
if (factor == "makk") A = 0
else A = Math.floor(Math.random() * 13 ) - 5;

B = Math.floor(Math.random() * 13 ) - 5;
if ((factor == "moei") && (A == 0) && (B == 0)) B = 2

C = Math.floor(Math.random() * 13 ) - 5;
if ((factor == "norm") && (A == 0) && (B == 0) && (C ==0)) C = 3

D = 0
while (D == 0) D = Math.floor(Math.random() * 13 ) - 5;

if (typeoefening == 1)
	{
	P = 0
	Q = 0
	R = 0
	if (factor != "moei") J = 0 
	if (factor == "moei") J = Math.floor(Math.random() * 10 ) - 4; 
	if (factor == "makk") K = Math.floor(Math.random() * 30 ) - 4;
	if (factor == "norm") K = Math.floor(Math.random() * 20 ) - 4; 
	if (factor == "moei") K = Math.floor(Math.random() * 10 ) - 4; 
	if (K > 5) K = 0
	L = 0
	M = 0
	while (L == 0) L = Math.floor(Math.random() * 10 ) - 4;
	while (M == 0) M = Math.floor(Math.random() * 10 ) - 4;
	}

if (typeoefening == 2)
	{
	P = 0
	Q = 0
	R = 0
	while (R == 0) R = Math.floor(Math.random() * 10 ) - 4;
	if (factor != "moei") J = 0 
	if (factor == "moei") J = Math.floor(Math.random() * 10 ) - 4; 
	if (factor == "makk") K = Math.floor(Math.random() * 30 ) - 4;
	if ((factor == "norm") && (A == 0)) K = Math.floor(Math.random() * 20 ) - 4; 
	if ((factor == "norm") && (A != 0)) K = 0 
	if (factor == "moei") K = Math.floor(Math.random() * 10 ) - 4; 
	if (K > 5) K = 0
	L = 0
	M = 0
	while (L == 0) L = Math.floor(Math.random() * 10 ) - 4;
	while (M == 0) M = Math.floor(Math.random() * 10 ) - 4;
	}

if (typeoefening == 3)
	{
	P = 0
	Q = 0
	R = 0
	while (Q == 0) Q = Math.floor(Math.random() * 10 ) - 4;
	while (R == 0) R = Math.floor(Math.random() * 10 ) - 4;
	if ((factor == "moei") && (A == 0)) J = Math.floor(Math.random() * 10 ) - 4; 
	if ((factor == "moei") && (A != 0)) J = 0 
	if (factor != "moei") J = 0
	K = 0
	L = 0
	M = 0
	while (K == 0) K = Math.floor(Math.random() * 10 ) - 4;
	while (L == 0) L = Math.floor(Math.random() * 10 ) - 4;
	while (M == 0) M = Math.floor(Math.random() * 10 ) - 4;
	}

if (typeoefening == 4)
	{
	P = 0
	Q = 0
	R = 0
	while (P == 0) P = Math.floor(Math.random() * 10 ) - 4;
	while (Q == 0) Q = Math.floor(Math.random() * 10 ) - 4;
	while (R == 0) R = Math.floor(Math.random() * 10 ) - 4;
	J = 0
	K = 0
	L = 0
	M = 0
	while (J == 0) J = Math.floor(Math.random() * 10 ) - 4;
	while (K == 0) K = Math.floor(Math.random() * 10 ) - 4;
	while (L == 0) L = Math.floor(Math.random() * 10 ) - 4;
	while (M == 0) M = Math.floor(Math.random() * 10 ) - 4;
	}

coX6 = A*J
coX5 = B*J + A*K
coX4 = C*J + B*K + A*L
coX3 = D*J + C*K + B*L + A*M
coX2 = D*K + C*L + B*M + P
coX1 = D*L + C*M + Q
coX0 = D*M + R
}

function kiesoef()
{
	if (factor == "makk") typeoefening = Math.floor(Math.random() * 2) + 1	
	if (factor == "norm") typeoefening = Math.floor(Math.random() * 3) + 1	
	if (factor == "moei") typeoefening = Math.floor(Math.random() * 4) + 1	
}

function nieuwoef()
{
factor = document.ed.kiesoef.options[document.ed.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	algemaakt = 0
	kiesoef()
	kiesgetallen()
	schrijfveeltermen()
	toonoef()
	document.ed.opl.src = "../images/vraagteken.gif"
	}
}

function toonopl()
{
parent.oefening.document.euclid.txtQ.value = quotient
parent.oefening.document.euclid.txtR.value = rest
algemaakt = 1
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze opgave al eens juist had, kies nu een nieuwe oefening.')
else
{

parent.oefening.document.euclid.txtQ.value=replace(parent.oefening.document.euclid.txtQ.value,' ','')
parent.oefening.document.euclid.txtQ.value=replace(parent.oefening.document.euclid.txtQ.value,'^3','³')
parent.oefening.document.euclid.txtQ.value=replace(parent.oefening.document.euclid.txtQ.value,'^2','²')

parent.oefening.document.euclid.txtR.value=replace(parent.oefening.document.euclid.txtR.value,' ','')
parent.oefening.document.euclid.txtR.value=replace(parent.oefening.document.euclid.txtR.value,'^3','³')
parent.oefening.document.euclid.txtR.value=replace(parent.oefening.document.euclid.txtR.value,'^2','²')

antw_Q = parent.oefening.document.euclid.txtQ.value
antw_R = parent.oefening.document.euclid.txtR.value

if ((antw_Q == "") || (antw_R == "")) alert('Geef a.u.b. het quotient en de rest in. Als het een opgaande deling is geef je als rest 0 in.')
else 
	{
	pogingenteller++;

	if ((antw_Q == quotient) && (antw_R == rest)) 
		{
		algemaakt = 1
		document.ed.opl.src = "../images/goed.gif"
		oplossingenteller++;
		}
	else 
		{
		document.ed.opl.src = "../images/fout.gif"	
		if (antw_Q == quotient) alert('Het quotiënt is juist, maar de rest niet.')
		if (antw_R == rest) alert('De rest is juist, maar het quotiënt niet.')
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.ed.aantaljuist.value = oplossingenteller
	document.ed.aantalpogingen.value = pogingenteller
	document.ed.percentage.value = procent		

	}
}
}

function replace(string,text,by) 
{
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
}

