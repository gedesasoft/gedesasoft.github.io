var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var oplossing = ""

var getalwaardeP = 0
var getalwaardeQ = 0
var getalwaardeR = 0

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0

var K = 0
var L = 0
var M = 0
var N = 0

var P = 0
var Q = 0
var R = 0

var antw1 = ''
var antw2 = ''

var opgave = ''
var veelterm = ''

var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=8 CELLSPACING=4><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><form name="euclid">'

var naopgave = '</form></b></TD></TR></TABLE></body></html>';


function schrijfopgave()
{
opgave = ''
veelterm = ''
getalwaardeP = ''
getalwaardeQ = ''

A = Math.floor(Math.random() * 13 ) - 5;
B = Math.floor(Math.random() * 13 ) - 5;
C = 0
while (C == 0) C = Math.floor(Math.random() * 13 ) - 5;
D = Math.floor(Math.random() * 13 ) - 5;
E = Math.floor(Math.random() * 13 ) - 5;

P = 0
Q = 0
while (P == 0) P = Math.floor(Math.random() * 10 ) - 4;
while ((Q == 0) || (P == Q)) Q = Math.floor(Math.random() * 10 ) - 4;

if ((typeoefening > 4) && (typeoefening < 9))
	{
	K = Math.floor(Math.random() * 9 ) - 3;
	L = Math.floor(Math.random() * 9 ) - 3;
	M = P * L
	while ((M - P*L) == 0) M = Math.floor(Math.random() * 9 ) - 3;
	N = Math.floor(Math.random() * 9 ) - 3;
	
	A = K
	B = L - P*K
	C = M - P*L
	D = N - P*M
	E = 0 - P*N
	}

if ((typeoefening > 14) && (typeoefening < 21))
	{
	L = Math.floor(Math.random() * 9 ) - 3;
	M = Math.floor(Math.random() * 9 ) - 3;
	N = P*M+Q*M-P*Q*L
	while ((N - P*M - Q*M + P*Q*L) == 0) N = Math.floor(Math.random() * 9 ) - 3;
	
	A = L
	B = M - P*L - Q*L
	C = N - P*M - Q*M + P*Q*L
	D = P*Q*M - N*P - N*Q
	E = P*Q*N
	}

if ((typeoefening > 20) && (typeoefening < 24))
	{
	A = 0
	B = 0
	C = 0
	D = Math.floor(Math.random() * 9 ) - 3;
	E = Math.floor(Math.random() * 9 ) - 3;

	P = 0
	Q = 0
	while (P == 0) P = Math.floor(Math.random() * 10 ) - 4;
	while ((Q == 0) || (P == Q)) Q = Math.floor(Math.random() * 10 ) - 4;
	}

if (typeoefening == 24)
	{
	A = 0
	B = 0
	C = Math.floor(Math.random() * 9 ) - 3;
	D = Math.floor(Math.random() * 9 ) - 3;
	E = Math.floor(Math.random() * 9 ) - 3;

	P = 0
	Q = 0
	R = 0
	while (P == 0) P = Math.floor(Math.random() * 10 ) - 4;
	while ((Q == 0) || (P == Q)) Q = Math.floor(Math.random() * 10 ) - 4;
	while ((R == 0) || (P == R) || (Q == R)) R = Math.floor(Math.random() * 10 ) - 4;
	}

getalwaardeP = A * Math.pow(P,4) + B * Math.pow(P,3) + C * Math.pow(P,2) + D * P + E 
getalwaardeQ = A * Math.pow(Q,4) + B * Math.pow(Q,3) + C * Math.pow(Q,2) + D * Q + E 
getalwaardeR = A * Math.pow(R,4) + B * Math.pow(R,3) + C * Math.pow(R,2) + D * R + E 

// opgaven met p

if (typeoefening < 9)
	{

	if (A == 1) veelterm += 'x<sup>4</sup>'
	if (A == -1) veelterm += '-x<sup>4</sup>'
	if (A > 1) veelterm += Math.abs(A) + 'x<sup>4</sup>'
	if (A < -1) veelterm += '-' + Math.abs(A) + 'x<sup>4</sup>'
	
	if (typeoefening%4 == 1)
		{
		oplossing = B
		
		if (veelterm != "")
			{	
			veelterm += '+<font color="#ff0000"><i>p</i></font>x<sup>3</sup>'
			}
		else
			{
			veelterm += '<font color="#ff0000"><i>p</i></font>x<sup>3</sup>'
			}
		}
	else
		{
		if (veelterm != "")
			{	
			if (B == 1) veelterm += '+x<sup>3</sup>'
			if (B == -1) veelterm += '-x<sup>3</sup>'
			if (B > 1) veelterm += '+' + Math.abs(B) + 'x<sup>3</sup>'
			if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
			}
		else
			{	
			if (B == 1) veelterm += 'x<sup>3</sup>'
			if (B == -1) veelterm += '-x<sup>3</sup>'
			if (B > 1) veelterm += Math.abs(B) + 'x<sup>3</sup>'
			if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
			}
		}
		
	if (typeoefening%4 == 2)
		{
		oplossing = C

		if (veelterm != "")
			{	
			veelterm += '+<font color="#ff0000"><i>p</i></font>x<sup>2</sup>'
			}
		else
			{
			veelterm += '<font color="#ff0000"><i>p</i></font>x<sup>2</sup>'
			}
		}
	else
		{
		if (veelterm != "")
			{	
			if (C == 1) veelterm += '+x<sup>2</sup>'
			if (C == -1) veelterm += '-x<sup>2</sup>'
			if (C > 1) veelterm += '+' + Math.abs(C) + 'x<sup>2</sup>'
			if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
			}
		else
			{	
			if (C == 1) veelterm += 'x<sup>2</sup>'
			if (C == -1) veelterm += '-x<sup>2</sup>'
			if (C > 1) veelterm += Math.abs(C) + 'x<sup>2</sup>'
			if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
			}
		}

	if (typeoefening%4 == 3)
		{
		oplossing = D
		veelterm += '+<font color="#ff0000"><i>p</i></font>x'
		}
	else
		{
		if (D == 1) veelterm += '+x'
		if (D == -1) veelterm += '-x'
		if (D > 1) veelterm += '+' + Math.abs(D) + 'x'
		if (D < -1) veelterm += '-' + Math.abs(D) + 'x'
		}

	if (typeoefening%4 == 0)
		{
		oplossing = E
		veelterm += '+<font color="#ff0000"><i>p</i></font>'
		}
	else
		{
		if (E > 0) veelterm += '+' + Math.abs(E)
		if (E < 0) veelterm += '-' + Math.abs(E)
		}
	
	if (typeoefening < 5)
		{
		opgave += 'Bepaal <font color="#ff0000"><i>p</i></font> zo dat de deling van A(x) door (x'
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ') als rest ' + getalwaardeP + ' heeft.<p>A(x) = ' + veelterm + '<p>Antwoord: <font color="#ff0000"><i>p</i></font> = <input type="text" name="txtantw1" size=4 maxlength=6>'
		} 

	if ((typeoefening > 4) && (typeoefening < 9))
		{
		opgave += 'Bepaal <font color="#ff0000"><i>p</i></font> zo dat (x'
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ') een deler is van A(x).<p>A(x) = ' + veelterm + '<p>Antwoord: <font color="#ff0000"><i>p</i></font> = <input type="text" name="txtantw1" size=4 maxlength=6>'
		} 
	}

// opgaven met p en q

if ((typeoefening > 8) && (typeoefening < 21)) 
	{

	if (A == 1) veelterm += 'x<sup>4</sup>'
	if (A == -1) veelterm += '-x<sup>4</sup>'
	if (A > 1) veelterm += Math.abs(A) + 'x<sup>4</sup>'
	if (A < -1) veelterm += '-' + Math.abs(A) + 'x<sup>4</sup>'
	
	if ((typeoefening%6 == 3) || (typeoefening%6 == 4) || (typeoefening%6 == 5))
		{
		oplossing1 = B
		
		if (veelterm != "")
			{	
			veelterm += '+<font color="#ff0000"><i>p</i></font>x<sup>3</sup>'
			}
		else
			{
			veelterm += '<font color="#ff0000"><i>p</i></font>x<sup>3</sup>'
			}
		}
	else
		{
		if (veelterm != "")
			{	
			if (B == 1) veelterm += '+x<sup>3</sup>'
			if (B == -1) veelterm += '-x<sup>3</sup>'
			if (B > 1) veelterm += '+' + Math.abs(B) + 'x<sup>3</sup>'
			if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
			}
		else
			{	
			if (B == 1) veelterm += 'x<sup>3</sup>'
			if (B == -1) veelterm += '-x<sup>3</sup>'
			if (B > 1) veelterm += Math.abs(B) + 'x<sup>3</sup>'
			if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
			}
		}
		
	if ((typeoefening%6 == 0) || (typeoefening%6 == 1)) 
		{
		oplossing1 = C

		if (veelterm != "")
			{	
			veelterm += '+<font color="#ff0000"><i>p</i></font>x<sup>2</sup>'
			}
		else
			{
			veelterm += '<font color="#ff0000"><i>p</i></font>x<sup>2</sup>'
			}
		}
	else
	{
	if (typeoefening%6 == 3)
		{
		oplossing2 = C

		if (veelterm != "")
			{	
			veelterm += '+<font color="#ff0000"><i>q</i></font>x<sup>2</sup>'
			}
		else
			{
			veelterm += '<font color="#ff0000"><i>q</i></font>x<sup>2</sup>'
			}
		}
	else
		{
		if (veelterm != "")
			{	
			if (C == 1) veelterm += '+x<sup>2</sup>'
			if (C == -1) veelterm += '-x<sup>2</sup>'
			if (C > 1) veelterm += '+' + Math.abs(C) + 'x<sup>2</sup>'
			if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
			}
		else
			{	
			if (C == 1) veelterm += 'x<sup>2</sup>'
			if (C == -1) veelterm += '-x<sup>2</sup>'
			if (C > 1) veelterm += Math.abs(C) + 'x<sup>2</sup>'
			if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
			}
		}
	}
	
	if (typeoefening%6 == 2)
		{
		oplossing1 = D
		veelterm += '+<font color="#ff0000"><i>p</i></font>x'
		}
	else
	{	
	if ((typeoefening%6 == 4) || (typeoefening%6 == 0))
		{
		oplossing2 = D
		veelterm += '+<font color="#ff0000"><i>q</i></font>x'
		}
	else
		{
		if (D == 1) veelterm += '+x'
		if (D == -1) veelterm += '-x'
		if (D > 1) veelterm += '+' + Math.abs(D) + 'x'
		if (D < -1) veelterm += '-' + Math.abs(D) + 'x'
		}
	}
	
	if ((typeoefening%6 == 5) || (typeoefening%6 == 1) || (typeoefening%6 == 2)) 
		{
		oplossing2 = E
		veelterm += '+<font color="#ff0000"><i>q</i></font>'
		}
	else
		{
		if (E > 0) veelterm += '+' + Math.abs(E)
		if (E < 0) veelterm += '-' + Math.abs(E)
		}
	
	if ((typeoefening > 8) && (typeoefening < 15))
		{
		opgave += 'Bepaal <font color="#ff0000"><i>p</i></font> en <font color="#ff0000"><i>q</i></font> zo dat de deling van A(x) door (x'
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ') als rest ' + getalwaardeP + ' heeft en je bij deling door (x' 
		if (Q < 0) opgave += '+' + Math.abs(Q)
		if (Q > 0) opgave += '-' + Math.abs(Q)
		opgave += ') als rest ' + getalwaardeQ + ' krijgt.<p>A(x) = ' + veelterm + '<p>Antwoord: <font color="#ff0000"><i>p</i></font> = <input type="text" name="txtantw1" size=4 maxlength=6> en <font color="#ff0000"><i>q</i></font> = <input type="text" name="txtantw2" size=4 maxlength=6>'
		} 

	if ((typeoefening > 14) && (typeoefening < 21))
		{
		var typevariatie = Math.floor(Math.random() * 2 ) + 1;
		if (typevariatie == 1) 
			{
			opgave += 'Bepaal <font color="#ff0000"><i>p</i></font> en <font color="#ff0000"><i>q</i></font> zo dat (x'
			if (P < 0) opgave += '+' + Math.abs(P)
			if (P > 0) opgave += '-' + Math.abs(P)
			opgave += ') en (x'
			if (Q < 0) opgave += '+' + Math.abs(Q)
			if (Q > 0) opgave += '-' + Math.abs(Q)
			opgave+= ') beide delers zijn van A(x).<p>A(x) = ' + veelterm + '<p>Antwoord: <font color="#ff0000"><i>p</i></font> = <input type="text" name="txtantw1" size=4 maxlength=6> en <font color="#ff0000"><i>q</i></font> = <input type="text" name="txtantw2" size=4 maxlength=6>'
			}
		if (typevariatie == 2) 
			{
			opgave += 'Bepaal <font color="#ff0000"><i>p</i></font> en <font color="#ff0000"><i>q</i></font> zo dat D(x) = (x'
			if (P < 0) opgave += '+' + Math.abs(P)
			if (P > 0) opgave += '-' + Math.abs(P)
			opgave += ')(x'
			if (Q < 0) opgave += '+' + Math.abs(Q)
			if (Q > 0) opgave += '-' + Math.abs(Q)
			opgave+= ') de veelterm A(x) deelt.<p>A(x) = ' + veelterm + '<p>Antwoord: <font color="#ff0000"><i>p</i></font> = <input type="text" name="txtantw1" size=4 maxlength=6> en <font color="#ff0000"><i>q</i></font> = <input type="text" name="txtantw2" size=4 maxlength=6>'
			}
		} 

	}


// opgaven om rest te bepalen

if ((typeoefening > 20) && (typeoefening < 24)) 
	{
		opgave += 'Als je A(x) deelt door (x'
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ') is de rest ' + getalwaardeP + ' en als je A(x) deelt door (x' 
		if (Q < 0) opgave += '+' + Math.abs(Q)
		if (Q > 0) opgave += '-' + Math.abs(Q)
		opgave += ') krijg je ' + getalwaardeQ + ' als rest.<p>Wat is de rest als je deelt door (x' 
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ')(x'
		if (Q < 0) opgave += '+' + Math.abs(Q)
		if (Q > 0) opgave += '-' + Math.abs(Q)
		opgave += ')? <p>Antwoord: R(x) = <input type="text" name="txtantw1" size=12 maxlength=20>'

		oplossing1 = ''
		if (D != 0) oplossing1 += D + 'x'
		if (oplossing1 != '')
			{
			if (E > 0) oplossing1 += '+' + Math.abs(E)
			if (E < 0) oplossing1 += '-' + Math.abs(E)
			}
		if (oplossing1 == '')
			{
			if (E > 0) oplossing1 += Math.abs(E)
			if (E < 0) oplossing1 += '-' + Math.abs(E)
			if (E == 0) oplossing1 += '0'
			}
	}

if (typeoefening == 24) 
	{
		opgave += 'De resten van de delingen van veelterm A(x) door (x'
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += '), (x' 
		if (Q < 0) opgave += '+' + Math.abs(Q)
		if (Q > 0) opgave += '-' + Math.abs(Q)
		opgave += ') en (x' 
		if (R < 0) opgave += '+' + Math.abs(R)
		if (R > 0) opgave += '-' + Math.abs(R)
		opgave += ') zijn respectievelijk ' + getalwaardeP + ', ' + getalwaardeQ + ' en ' + getalwaardeR +  '.<p>Wat is de rest als je deelt door (x' 
		if (P < 0) opgave += '+' + Math.abs(P)
		if (P > 0) opgave += '-' + Math.abs(P)
		opgave += ')(x'
		if (Q < 0) opgave += '+' + Math.abs(Q)
		if (Q > 0) opgave += '-' + Math.abs(Q)
		opgave += ')(x'
		if (R < 0) opgave += '+' + Math.abs(R)
		if (R > 0) opgave += '-' + Math.abs(R)
		opgave += ')? <p>Antwoord: R(x) = <input type="text" name="txtantw1" size=12 maxlength=20>'

		oplossing1 = ''
		if (C == 1) oplossing1 += 'x²'
		if (C == -1) oplossing1 += '-x²'
		if (C > 1) oplossing1 += C + 'x²'
		if (C < -1) oplossing1 += C + 'x²'
	
		if (oplossing1 != '')
			{
			if (D == 1) oplossing1 += '+x'
			if (D == -1) oplossing1 += '-x'
			if (D < -1) oplossing1 += '-' + Math.abs(D) + 'x'
			if (D > 1) oplossing1 += '+' + Math.abs(D) + 'x'
			}
		if (oplossing1 == '')
			{
			if (D == 1) oplossing1 += 'x'
			if (D == -1) oplossing1 += '-x'
			if (D < -1) oplossing1 += '-' + Math.abs(D) + 'x'
			if (D > 1) oplossing1 += Math.abs(D) + 'x'
			}
	
		if (oplossing1 != '')
			{
			if (E > 0) oplossing1 += '+' + Math.abs(E)
			if (E < 0) oplossing1 += '-' + Math.abs(E)
			}
		if (oplossing1 == '')
			{
			if (E > 0) oplossing1 += Math.abs(E)
			if (E < 0) oplossing1 += '-' + Math.abs(E)
			if (E == 0) oplossing1 += '0'
			}
	}
	
if (typeoefening > 24) 
	{
	veelterm = ''
	
	if (A == 1) veelterm += 'x<sup>4</sup>'
	if (A == -1) veelterm += '-x<sup>4</sup>'
	if (A > 1) veelterm += Math.abs(A) + 'x<sup>4</sup>'
	if (A < -1) veelterm += '-' + Math.abs(A) + 'x<sup>4</sup>'
	
	if (veelterm != "")
		{	
		if (B == 1) veelterm += '+x<sup>3</sup>'
		if (B == -1) veelterm += '-x<sup>3</sup>'
		if (B > 1) veelterm += '+' + Math.abs(B) + 'x<sup>3</sup>'
		if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
		}
	else
		{	
		if (B == 1) veelterm += 'x<sup>3</sup>'
		if (B == -1) veelterm += '-x<sup>3</sup>'
		if (B > 1) veelterm += Math.abs(B) + 'x<sup>3</sup>'
		if (B < -1) veelterm += '-' + Math.abs(B) + 'x<sup>3</sup>'
		}

	if (veelterm != "")
		{	
		if (C == 1) veelterm += '+x<sup>2</sup>'
		if (C == -1) veelterm += '-x<sup>2</sup>'
		if (C > 1) veelterm += '+' + Math.abs(C) + 'x<sup>2</sup>'
		if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
		}
	else
		{	
		if (C == 1) veelterm += 'x<sup>2</sup>'
		if (C == -1) veelterm += '-x<sup>2</sup>'
		if (C > 1) veelterm += Math.abs(C) + 'x<sup>2</sup>'
		if (C < -1) veelterm += '-' + Math.abs(C) + 'x<sup>2</sup>'
		}

	if (D == 1) veelterm += '+x'
	if (D == -1) veelterm += '-x'
	if (D > 1) veelterm += '+' + Math.abs(D) + 'x'
	if (D < -1) veelterm += '-' + Math.abs(D) + 'x'

	if (E > 0) veelterm += '+' + Math.abs(E)
	if (E < 0) veelterm += '-' + Math.abs(E)
	
	opgave += 'Welke rest krijg je als je A(x) = ' + veelterm + ' deelt door (x'
	if (P < 0) opgave += '+' + Math.abs(P)
	if (P > 0) opgave += '-' + Math.abs(P)
	opgave += ')? <p>Antwoord: R(x) = <input type="text" name="txtantw1" size=4 maxlength=6>' 

	oplossing1 = getalwaardeP
	}

}

function toonoef()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + opgave + naopgave)
}

function kiesoef()
{
	if (factor == "makk") typeoefening = Math.floor(Math.random() * 8) + 1	
	if (factor == "norm") typeoefening = Math.floor(Math.random() * 12) + 9	
	if (factor == "moei") typeoefening = Math.floor(Math.random() * 9) + 21	
}

function nieuwoef()
{
factor = document.ed.kiesoef.options[document.ed.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een soort oefening!')
else 
	{
	algemaakt = 0
	kiesoef()
	schrijfopgave()
	toonoef()
	document.ed.opl.src = "../images/vraagteken.gif"
	}
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze opgave al eens juist had, kies nu een nieuwe oefening.')
else
{

if (typeoefening < 9) 
	{
	antw1 = parent.oefening.document.euclid.txtantw1.value
	if (antw1 == "") alert('Geef a.u.b. de waarde van p in.')	
	else
		{
		pogingenteller++;
		if (antw1 == oplossing) 
			{
			algemaakt = 1
			document.ed.opl.src = "../images/goed.gif"
			oplossingenteller++;
			}
		else 
			{
			document.ed.opl.src = "../images/fout.gif"	
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.ed.aantaljuist.value = oplossingenteller
		document.ed.aantalpogingen.value = pogingenteller
		document.ed.percentage.value = procent		
		}
	}

if ((typeoefening > 9) && (typeoefening < 21)) 
	{
	antw1 = parent.oefening.document.euclid.txtantw1.value
	antw2 = parent.oefening.document.euclid.txtantw2.value
	if ((antw1 == "") || (antw2 == "")) alert('Geef a.u.b. de waarde van p en van q in.')	
	else
		{
		pogingenteller++;
		if ((antw1 == oplossing1) && (antw2 == oplossing2)) 
			{
			algemaakt = 1
			document.ed.opl.src = "../images/goed.gif"
			oplossingenteller++;
			}
		else 
			{
			document.ed.opl.src = "../images/fout.gif"	
			if (antw1 == oplossing1) alert('Je waarde voor p is juist, maar die voor q niet.')
			if (antw2 == oplossing2) alert('Je waarde voor q is juist, maar die voor p niet.')
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.ed.aantaljuist.value = oplossingenteller
		document.ed.aantalpogingen.value = pogingenteller
		document.ed.percentage.value = procent		
		}
	}

if (typeoefening > 20) 
	{
	parent.oefening.document.euclid.txtantw1.value=replace(parent.oefening.document.euclid.txtantw1.value,' ','')
	parent.oefening.document.euclid.txtantw1.value=replace(parent.oefening.document.euclid.txtantw1.value,'^2','²')

	antw1 = parent.oefening.document.euclid.txtantw1.value
	if (antw1 == "") alert('Geef a.u.b. de rest in.')	
	else
		{
		pogingenteller++;
		if (antw1 == oplossing1) 
			{
			algemaakt = 1
			document.ed.opl.src = "../images/goed.gif"
			oplossingenteller++;
			}
		else 
			{
			algemaakt = 1
			document.ed.opl.src = "../images/fout.gif"	
			alert('Antwoord: R(x) = ' + oplossing1)		
			}

		gemiddelde = oplossingenteller / pogingenteller * 100
		procent = Math.round(gemiddelde)
		document.ed.aantaljuist.value = oplossingenteller
		document.ed.aantalpogingen.value = pogingenteller
		document.ed.percentage.value = procent		
		}
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

