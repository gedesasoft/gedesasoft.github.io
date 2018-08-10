var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var opl_exp_a = 0
var opl_exp_b = 0
var antw_exp_a = 0
var antw_exp_b = 0

var F = 0
var G = 0
var H = 0
var I = 0
var J = 0
var K = 0
var L = 0
var M = 0
var N = 0

var teller = "teller"
var noemer = "noemer"

var tekstvak_expb = '<input type="text" name="exp_b" size="2" maxlength="3">'
var tekstexp_b = '<b>b</b>'
 
var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><form name="exp"><table><tr><td><img src="images/leeg.gif" border=0 width=1 height=50><b>';
var tussenopgave1 = '</b></td><td></td><td rowspan="2" valign="top"><br><br><input type="text" name="exp_a" size="2" maxlength="3"></td><td></td><td rowspan="2" valign="top"><br><br>'

var tussenopgave2 = '</td></tr><tr><td><hr></td><td><b>= a</b></td><td>'

var tussenopgave3 = '</td></tr><tr><td align="center"><b>'
var naopgave = '</b></td><td></td><td></td><td></td><td></td></tr></table></form></TD></TR></TABLE></b></body></html>';

 

function schrijfoefeningzonderb()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + teller + tussenopgave1 + tussenopgave2 + tussenopgave3 + noemer + naopgave)
}

function schrijfoefeningmetb()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + teller + tussenopgave1 + tekstvak_expb + tussenopgave2 + tekstexp_b + tussenopgave3 + noemer + naopgave)
}

function kiesgetallen()
{
F = 0
G = 0
H = 0
I = 0
J = 0
K = 0
L = 0
M = 0
N = 0

while ((F == 0) || (F == 1)) 
	{
	F = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((G == 0) || (G == 1))
	{
	G = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((H == 0) || (H == 1))
	{
	H = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((I == 0) || (I == 1))
	{
	I = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((J == 0) || (J == 1))
	{
	J = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((K == 0) || (K == 1))
	{
	K = (Math.floor(Math.random() * 20 ) - 9);
	}
while ((L == 0) || (L == 1))
	{
	L = (Math.floor(Math.random() * 11 ) - 4);
	}
while ((M == 0) || (M == 1))
	{
	M = (Math.floor(Math.random() * 11 ) - 4);
	}
while ((N == 0) || (N == 1))
	{
	N = (Math.floor(Math.random() * 11 ) - 4);
	}
}


function toonoef()
{
teller = ''
noemer = ''

if (typeoefening == "1")
	{
	teller = 'a<sup>' + F + '</sup> . a<sup>' + G + '</sup>'
	noemer = 'a<sup>' + H + '</sup>' 
	
	opl_exp_a = F + G - H
	
	schrijfoefeningzonderb()
	}
	
if (typeoefening == "2")
	{
	teller = 'a<sup>' + F + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup>' 
	
	opl_exp_a = F + G * M - H
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "3")
	{
	teller = '(a<sup>' + F + '</sup> . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup>' 
	
	opl_exp_a = (F + G) * M - H
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "4")
	{
	teller = 'a<sup>' + F + '</sup> . a<sup>' + G + '</sup>'
	noemer = '(a<sup>' + H + '</sup>)<sup>' + M + '</sup>' 
	
	opl_exp_a = F + G - H * M
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "5")
	{
	teller = 'a<sup>' + F + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = F + G * M - H * N
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "6")
	{
	teller = 'a<sup>' + F + '</sup> . a . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . a<sup>' + I + '</sup>' 
	
	opl_exp_a = F + 1 + G * M - H - I
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "7")
	{
	teller = 'a<sup>' + F + '</sup> . a . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup>)<sup>' + N + '</sup> . a<sup>' + I + '</sup>' 
	
	opl_exp_a = F + 1 + G * M - H * N - I
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "8")
	{
	teller = 'a<sup>' + F + '</sup> . (a . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup>)<sup>' + N + '</sup> . a<sup>' + I + '</sup>' 
	
	opl_exp_a = F + M + G * M - H * N - I
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "9")
	{
	teller = 'a<sup>' + F + '</sup> . (a<sup>' + J + '</sup> . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup>)<sup>' + N + '</sup> . a<sup>' + I + '</sup>' 
	
	opl_exp_a = F + J * M + G * M - H * N - I
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "10")
	{
	teller = 'a<sup>' + F + '</sup> . <font size=+1>[</font>a<sup>' + J + '</sup> . (a<sup>' + G + '</sup>)<sup>' + N + '</sup><font size=+1>]</font><sup>' + M + '</sup>'
	noemer = '<font size=+1>[</font>(a<sup>' + H + '</sup>)<sup>' + N + '</sup> . a<sup>' + I + '</sup><font size=+1>]</font><sup>' + L + '</sup>' 
	
	opl_exp_a = F + J * M + G * N * M - H * N * L - I * L
	
	schrijfoefeningzonderb()
	}

if (typeoefening == "11")
	{
	teller = 'a<sup>' + F + '</sup> . b<sup>' + I + '</sup> . a<sup>' + G + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . b<sup>' + J + '</sup>' 
	
	opl_exp_a = F + G - H
	opl_exp_b = I - J
	
	schrijfoefeningmetb()
	}
	
if (typeoefening == "12")
	{
	teller = 'a<sup>' + F + '</sup> . b<sup>' + I + '</sup> . a<sup>' + G + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . b<sup>' + J + '</sup> . b<sup>' + K + '</sup>' 
	
	opl_exp_a = F + G - H
	opl_exp_b = I - J - K
	
	schrijfoefeningmetb()
	}

if (typeoefening == "13")
	{
	teller = 'a<sup>' + F + '</sup> . b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = F + G * M - H
	opl_exp_b = I - J * N
	
	schrijfoefeningmetb()
	}

if (typeoefening == "14")
	{
	teller = 'a<sup>' + F + '</sup> . (b<sup>' + I + '</sup> . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = F + G * M - H
	opl_exp_b = I * M - J * N
	
	schrijfoefeningmetb()
	}

if (typeoefening == "15")
	{
	teller = '(a<sup>' + F + '</sup> . b<sup>' + I + '</sup> . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = (F + G) * M - H
	opl_exp_b = I * M - J * N
	
	schrijfoefeningmetb()
	}

if (typeoefening == "16")
	{
	teller = 'a<sup>' + F + '</sup> . b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup> . b<sup>' + J + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = F + G * M - H * N
	opl_exp_b = I - J * N
	
	schrijfoefeningmetb()
	}

if (typeoefening == "17")
	{
	teller = 'a<sup>' + F + '</sup> . (b<sup>' + I + '</sup> . a<sup>' + G + '</sup>)<sup>' + M + '</sup>'
	noemer = '(a<sup>' + H + '</sup> . b<sup>' + J + '</sup>)<sup>' + N + '</sup>' 
	
	opl_exp_a = F + G * M - H * N
	opl_exp_b = I * M - J * N
	
	schrijfoefeningmetb()
	}

if (typeoefening == "18")
	{
	teller = '<font size=+1>[</font>a<sup>' + F + '</sup> . (b<sup>' + I + '</sup>)<sup>' + L + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup><font size=+1>]</font><sup>' + N + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + M + '</sup>' 
	
	opl_exp_a = F * N + G * M * N - H
	opl_exp_b = I * L * N - J * M
	
	schrijfoefeningmetb()
	}

if (typeoefening == "19")
	{
	teller = 'a<sup>' + F + '</sup> . <font size=+1>[</font>b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup><font size=+1>]</font><sup>' + N + '</sup>'
	noemer = 'a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + M + '</sup>' 
	
	opl_exp_a = F + G * M * N - H
	opl_exp_b = I * N - J * M
	
	schrijfoefeningmetb()
	}

if (typeoefening == "20")
	{
	teller = 'a<sup>' + F + '</sup> . <font size=+1>[</font>b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup><font size=+1>]</font><sup>' + N + '</sup>'
	noemer = '(a<sup>' + H + '</sup> . b<sup>' + J + '</sup>)<sup>' + L + '</sup>' 
	
	opl_exp_a = F + G * M * N - H * L
	opl_exp_b = I * N - J * L
	
	schrijfoefeningmetb()
	}

if (typeoefening == "21")
	{
	teller = 'a<sup>' + F + '</sup> . <font size=+1>[</font>b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup><font size=+1>]</font><sup>' + N + '</sup>'
	noemer = '(a<sup>' + H + '</sup> . b<sup>' + J + '</sup>)<sup>' + L + '</sup> . b<sup>' + K + '</sup>' 
	
	opl_exp_a = F + G * M * N - H * L
	opl_exp_b = I * N - J * L - K
	
	schrijfoefeningmetb()
	}

if (typeoefening == "22")
	{
	teller = 'a<sup>' + F + '</sup> . <font size=+1>[</font>b<sup>' + I + '</sup> . (a<sup>' + G + '</sup>)<sup>' + M + '</sup><font size=+1>]</font><sup>' + N + '</sup>'
	noemer = '<font size=+1>[</font>a<sup>' + H + '</sup> . (b<sup>' + J + '</sup>)<sup>' + L + '</sup> . b<font size=+1>]</font><sup>' + M + '</sup>' 
	
	opl_exp_a = F + G * M * N - H * M
	opl_exp_b = I * N - J * L * M - M
	
	schrijfoefeningmetb()
	}

}

function nieuwoef()
{
	aljuist = 0
	typeoefening = Math.floor(Math.random() * 22) + 1	
	kiesgetallen()
	toonoef()
	document.er.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
pogingenteller++;

antw_exp_a = parent.oefening.document.exp.exp_a.value

if (typeoefening < 11)
	{
	if (antw_exp_a != "")
		{
		if (antw_exp_a == opl_exp_a)
			{
			document.er.opl.src = "../images/goed.gif"
			oplossingenteller++;
			aljuist = 1
			}
		else document.er.opl.src = "../images/fout.gif"	
		}
	else alert('Vul de exponent van a in (zelfs al is die 1 of 0).')
	}

if (typeoefening > 10)
	{
	antw_exp_b = parent.oefening.document.exp.exp_b.value
	if ((antw_exp_a != "") && (antw_exp_b != ""))
		{
		if ((antw_exp_a == opl_exp_a) && (antw_exp_b == opl_exp_b))
			{
			document.er.opl.src = "../images/goed.gif"
			oplossingenteller++;
			aljuist = 1
			}
		else 
			{
			if ((antw_exp_a == opl_exp_a) && (antw_exp_b != opl_exp_b)) alert('De exponent van a is juist, maar die van b niet.')
			if ((antw_exp_a != opl_exp_a) && (antw_exp_b == opl_exp_b)) alert('De exponent van b is juist, maar die van a niet.')
			if ((antw_exp_a != opl_exp_a) && (antw_exp_b != opl_exp_b)) alert('Beide exponenten zijn fout.')

			document.er.opl.src = "../images/fout.gif"	
			}
		} 
	else alert('Vul beide exponenten in (zelfs al is één van de exponenten 1 of 0).')
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.er.aantaljuist.value = oplossingenteller
	document.er.aantalpogingen.value = pogingenteller
	document.er.percentage.value = procent		
}

function controle()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else controleer()
}

