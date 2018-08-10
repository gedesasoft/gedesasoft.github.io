var factor = 0
var typevariatie = 0
var typevgl_1 = 0
var typevgl_2 = 0
var tekenopg_1 = 0
var tekenopg_2 = 0
var tekenopl_1 = 0
var tekenopl_2 = 0
var tekenV = 0
var keuzelidvgl_1 = 0
var keuzelidvgl_2 = 0
var LLvgl_1 = ''
var RLvgl_1 = ''
var LLvgl_2 = ''
var RLvgl_2 = ''
var txtvgl_1 = ''
var txtvgl_2 = ''
var txtvglopl_1 = ''
var txtvglopl_2 = ''
var opg_1_teken = ''
var opg_2_teken = ''
var opl_1_teken = ''
var opl_2_teken = ''

var txtvglboven = ''
var txtvglonder = ''
var txtvgloplboven = ''
var txtvgloplonder = ''
var tabelvoorX = ''
var tabeltussenXenY = ''
var tabelnaY = ''
var tussenV1enV2 = ''
var tussenV2enV = ''
var naV = ''

var txtV1 = ''
var txtV2 = ''
var txtV = ''
var txttekening = ''
var txtopl =''

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0

var P = 0
var Q = 0
var R = 0
var S = 0
var T = 0
var U = 0

var X = 0
var Y = 0

var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><font size=+1><table><tr><td rowspan=2><font size=+4>{</font></td><td>'

var tussenopgave = '</td></tr><tr><td>'

var naopgave = '</td></tr></table>'

var vooroplstelsel = '<table><tr><td rowspan=2><font size=+3><b><=></b></font><font size=+4> {</font></td><td>'
 
var tussenoplstelsel = '</td></tr><tr><td>'

var naoplstelsel = '</td></tr></table>'

var naoplossing = '</font></TD></TR></TABLE></b></body></html>';

 

function schrijfopl()
{
txtopl1 = ''
txtopl2 = ''
txtopl3 = ''


}

function kiesgetallen()
{
if (factor == "makk") 
{
typevgl_1 = Math.floor(Math.random() * 3 ) + 1
typevgl_2 = Math.floor(Math.random() * 4 ) + 1
}

if (factor == "norm")
{
typevgl_1 = Math.floor(Math.random() * 4 ) + 4
typevgl_2 = Math.floor(Math.random() * 4 ) + 4
}

if (factor == "moei")
{
typevgl_1 = Math.floor(Math.random() * 3 ) + 8
typevgl_2 = Math.floor(Math.random() * 6 ) + 5
}

X = (Math.floor(Math.random() * 20 ) - 9);
Y = X + (Math.floor(Math.random() * 10 ) + 1);

tekenopg_1 = Math.floor(Math.random() * 4) + 1
tekenopg_2 = Math.floor(Math.random() * 4) + 1

A = 0
B = 0
C = 0
D = 0
E = 0
F = 0
while (A == 0) A = (Math.floor(Math.random() * 20 ) - 9);
while ((B == 0) || (B == A)) B = (Math.floor(Math.random() * 20 ) - 9);
while ((C == 0) || (C == A) || (C == -A) || (C == B) || (A + B == C)) C = (Math.floor(Math.random() * 20 ) - 9);
while (D == 0) D = (Math.floor(Math.random() * 20 ) - 9);
while (E == 0) E = (Math.floor(Math.random() * 20 ) - 9);
while (F == 0) F = (Math.floor(Math.random() * 20 ) - 9);

if ((typevgl_1 > 1) && (typevgl_1 < 5))
	{
	if (A < 0) tekenopl_1 = 5 - tekenopg_1
	else tekenopl_1 = tekenopg_1
	}    
if ((typevgl_1 > 4) && (typevgl_1 < 7))
	{
	if ((A - C) < 0) tekenopl_1 = 5 - tekenopg_1
	else tekenopl_1 = tekenopg_1
	}    
if (typevgl_1 == 7)
	{
	if ((A + C) < 0) tekenopl_1 = 5 - tekenopg_1
	else tekenopl_1 = tekenopg_1
	}    
if (typevgl_1 > 7)
	{
	if (((A + B) - C) < 0) tekenopl_1 = 5 - tekenopg_1
	else tekenopl_1 = tekenopg_1
	}    

if (typevgl_1 < 2)
	{
	tekenopl_1 = tekenopg_1
	}    

if (keuzelidvgl_1 == 2) tekenopl_1 = 5 - tekenopl_1

P = 0
Q = 0
R = 0
S = 0
T = 0
U = 0
while (P == 0) P = (Math.floor(Math.random() * 20 ) - 9);
while ((Q == 0) || (Q == P)) Q = (Math.floor(Math.random() * 20 ) - 9);
while ((R == 0) || (R == P) || (R == -P) || (R == Q) || (P + Q == R)) R = (Math.floor(Math.random() * 20 ) - 9);
while (S == 0) S = (Math.floor(Math.random() * 20 ) - 9);
while (T == 0) T = (Math.floor(Math.random() * 20 ) - 9);
while (U == 0) U = (Math.floor(Math.random() * 20 ) - 9);

if ((typevgl_2 > 1) && (typevgl_2 < 5))
	{
	if (P < 0) tekenopl_2 = 5 - tekenopg_2
	else tekenopl_2 = tekenopg_2
	}    
if ((typevgl_2 > 4) && (typevgl_2 < 7))
	{
	if ((P - R) < 0) tekenopl_2 = 5 - tekenopg_2
	else tekenopl_2 = tekenopg_2
	}    
if (typevgl_2 == 7)
	{
	if ((P + R) < 0) tekenopl_2 = 5 - tekenopg_2
	else tekenopl_2 = tekenopg_2
	}    
if (typevgl_2 > 7)
	{
	if (((P + Q) - R) < 0) tekenopl_2 = 5 - tekenopg_2
	else tekenopl_2 = tekenopg_2
	}    

if (typevgl_2 < 2)
	{
	tekenopl_2 = tekenopg_2
	}    

if (keuzelidvgl_2 == 2) tekenopl_2 = 5 - tekenopl_2

tekenV = 4 * (tekenopl_1 - 1) + tekenopl_2 

}

function kiesoef()
{
typevgl_1 = Math.floor(Math.random() * 4) + 1
typevgl_2 = Math.floor(Math.random() * 4) + 1
keuzelidvgl_1 = Math.floor(Math.random() * 2) + 1
keuzelidvgl_2 = Math.floor(Math.random() * 2) + 1
typevariatie = Math.floor(Math.random() * 2) + 1

}

function nieuwoef()
{
typevgl_1 = 0
typevgl_2 = 0
tekenopg_1 = 0
tekenopg_2 = 0
tekenopl_1 = 0
tekenopl_2 = 0
keuzelidvgl_1 = 0
keuzelidvgl_2 = 0
LLvgl_1 = ''
RLvgl_1 = ''
LLvgl_2 = ''
RLvgl_2 = ''

factor = document.vgl.kiesoef.options[document.vgl.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	kiesoef()
	kiesgetallen()
	bepaalvgl_1()
	bepaalvgl_2()
	toonoef()
	}
}

function bepaalvgl_1()
{
if (typevgl_1 == "1")
	{
	LLvgl_1 = LLvgl_1 + 'x'
	if (A > 0) LLvgl_1 = LLvgl_1 + '+' + A
	if (A < 0) LLvgl_1 = LLvgl_1 + A

	RLvgl_1 = RLvgl_1 + (X + A)
	}

if (typevgl_1 == "2")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A;
	LLvgl_1 = LLvgl_1 + 'x'

	RLvgl_1 = RLvgl_1 + (A * X)
	}

if (typevgl_1 == "3")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A;
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 0) LLvgl_1 = LLvgl_1 + '+' + B
	if (B < 0) LLvgl_1 = LLvgl_1 + B

	RLvgl_1 = RLvgl_1 + (A*X + B)
	}

if (typevgl_1 == "4")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A + '(';
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 0) LLvgl_1 = LLvgl_1 + '+' + B
	if (B < 0) LLvgl_1 = LLvgl_1 + B
	if (A != 1)	LLvgl_1 = LLvgl_1 + ')';
	if (C > 0) LLvgl_1 = LLvgl_1 + '+' + C
	if (C < 0) LLvgl_1 = LLvgl_1 + C

	RLvgl_1 = RLvgl_1 + (A*(X + B) + C)
	}

if (typevgl_1 == "5")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A;
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 0) LLvgl_1 = LLvgl_1 + '+' + B
	if (B < 0) LLvgl_1 = LLvgl_1 + B

	if (C != 1)	RLvgl_1 = RLvgl_1 + C;
	RLvgl_1 = RLvgl_1 + 'x'
	if ((A*X - C*X + B) > 0) RLvgl_1 = RLvgl_1 + '+' + (A*X - C*X + B)
	if ((A*X - C*X + B) < 0) RLvgl_1 = RLvgl_1 + (A*X - C*X + B)
	}

if (typevgl_1 == "6")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A + '(';
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 0) LLvgl_1 = LLvgl_1 + '+' + B
	if (B < 0) LLvgl_1 = LLvgl_1 + B
	if (A != 1)	LLvgl_1 = LLvgl_1 + ')';
	if (D > 0) LLvgl_1 = LLvgl_1 + '+' + D
	if (D < 0) LLvgl_1 = LLvgl_1 + D

	if (C != 1)	RLvgl_1 = RLvgl_1 + C;
	RLvgl_1 = RLvgl_1 + 'x'
	if ((A*X + A*B + D - C*X) > 0) RLvgl_1 = RLvgl_1 + '+' + (A*X + A*B + D - C*X)
	if ((A*X + A*B + D - C*X) < 0) RLvgl_1 = RLvgl_1 + (A*X + A*B + D - C*X)
	}

if (typevgl_1 == "7")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A + '(';
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 0) LLvgl_1 = LLvgl_1 + '+' + B
	if (B < 0) LLvgl_1 = LLvgl_1 + B
	if (A != 1)	LLvgl_1 = LLvgl_1 + ')';
	if (C > 0) LLvgl_1 = LLvgl_1 + '+' + C
	if (C < 0) LLvgl_1 = LLvgl_1 + C
	LLvgl_1 = LLvgl_1 + 'x'

	RLvgl_1 = RLvgl_1 + (A*X + A*B + C*X)
	}

if (typevgl_1 == "8")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A;
	LLvgl_1 = LLvgl_1 + 'x'
	if (B > 1) LLvgl_1 = LLvgl_1 + '+' + B + '('
	if (B == 1) LLvgl_1 = LLvgl_1 + '+'
	if (B < 0) LLvgl_1 = LLvgl_1 + B + '('
	LLvgl_1 = LLvgl_1 + 'x'
	if (D > 0) LLvgl_1 = LLvgl_1 + '+' + D
	if (D < 0) LLvgl_1 = LLvgl_1 + D
	if (B > 1) LLvgl_1 = LLvgl_1 + ')'
	if (B < 0) LLvgl_1 = LLvgl_1 + ')'

	if (C != 1)	RLvgl_1 = RLvgl_1 + C + '(';
	RLvgl_1 = RLvgl_1 + 'x'
	if (E > 0) RLvgl_1 = RLvgl_1 + '+' + E
	if (E < 0) RLvgl_1 = RLvgl_1 + E
	if (C != 1)	RLvgl_1 = RLvgl_1 + ')'
	if ((A*X + B*X + B*D - C*X - C*E) > 0) RLvgl_1 = RLvgl_1 + '+' + (A*X + B*X + B*D - C*X - C*E)
	if ((A*X + B*X + B*D - C*X - C*E) < 0) RLvgl_1 = RLvgl_1 + (A*X + B*X + B*D - C*X - C*E)
	}

if (typevgl_1 == "9")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A + '(';
	LLvgl_1 = LLvgl_1 + 'x'
	if (D > 0) LLvgl_1 = LLvgl_1 + '+' + D
	if (D < 0) LLvgl_1 = LLvgl_1 + D
	if (A != 1)	LLvgl_1 = LLvgl_1 + ')';
	if (B > 1) LLvgl_1 = LLvgl_1 + '+' + B 
	if (B == 1) LLvgl_1 = LLvgl_1 + '+'
	if (B < 0) LLvgl_1 = LLvgl_1 + B 
	LLvgl_1 = LLvgl_1 + 'x'

	if (C != 1)	RLvgl_1 = RLvgl_1 + C
	RLvgl_1 = RLvgl_1 + 'x'
	if ((A*X + A*D + B*X - C*X) > 0) RLvgl_1 = RLvgl_1 + '+' + (A*X + A*D + B*X - C*X)
	if ((A*X + A*D + B*X - C*X) < 0) RLvgl_1 = RLvgl_1 + (A*X + A*D + B*X - C*X)
	}

if (typevgl_1 == "10")
	{
	if (A != 1)	LLvgl_1 = LLvgl_1 + A + '(';
	LLvgl_1 = LLvgl_1 + 'x'
	if (D > 0) LLvgl_1 = LLvgl_1 + '+' + D
	if (D < 0) LLvgl_1 = LLvgl_1 + D
	if (A != 1)	LLvgl_1 = LLvgl_1 + ')';
	if (B > 1) LLvgl_1 = LLvgl_1 + '+' + B + '(' 
	if (B == 1) LLvgl_1 = LLvgl_1 + '+'
	if (B < 0) LLvgl_1 = LLvgl_1 + B + '('
	LLvgl_1 = LLvgl_1 + 'x'
	if (E > 0) LLvgl_1 = LLvgl_1 + '+' + E
	if (E < 0) LLvgl_1 = LLvgl_1 + E
	if (B > 1) LLvgl_1 = LLvgl_1 + ')'
	if (B < 0) LLvgl_1 = LLvgl_1 + ')'

	if (C != 1)	RLvgl_1 = RLvgl_1 + C + '('
	RLvgl_1 = RLvgl_1 + 'x'
	if (F > 0) RLvgl_1 = RLvgl_1 + '+' + F
	if (F < 0) RLvgl_1 = RLvgl_1 + F
	if (C != 1)	RLvgl_1 = RLvgl_1 + ')'
	if ((A*X + A*D + B*X + B*E - C*X - C*F) > 0) RLvgl_1 = RLvgl_1 + '+' + (A*X + A*D + B*X + B*E - C*X - C*F)
	if ((A*X + A*D + B*X + B*E - C*X - C*F) < 0) RLvgl_1 = RLvgl_1 + (A*X + A*D + B*X + B*E - C*X - C*F)
	}
}

function bepaalvgl_2()
{
if (typevgl_2 == "1")
	{
	LLvgl_2 = LLvgl_2 + 'x'
	if (P > 0) LLvgl_2 = LLvgl_2 + '+' + P
	if (P < 0) LLvgl_2 = LLvgl_2 + P

	RLvgl_2 = RLvgl_2 + (Y + P)
	}

if (typevgl_2 == "2")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P;
	LLvgl_2 = LLvgl_2 + 'x'

	RLvgl_2 = RLvgl_2 + (P * Y)
	}

if (typevgl_2 == "3")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P;
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 0) LLvgl_2 = LLvgl_2 + '+' + Q
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q

	RLvgl_2 = RLvgl_2 + (P*Y + Q)
	}

if (typevgl_2 == "4")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P + '(';
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 0) LLvgl_2 = LLvgl_2 + '+' + Q
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q
	if (P != 1)	LLvgl_2 = LLvgl_2 + ')';
	if (R > 0) LLvgl_2 = LLvgl_2 + '+' + R
	if (R < 0) LLvgl_2 = LLvgl_2 + R

	RLvgl_2 = RLvgl_2 + (P*(Y + Q) + R)
	}

if (typevgl_2 == "5")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P;
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 0) LLvgl_2 = LLvgl_2 + '+' + Q
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q

	if (R != 1)	RLvgl_2 = RLvgl_2 + R;
	RLvgl_2 = RLvgl_2 + 'x'
	if ((P*Y - R*Y + Q) > 0) RLvgl_2 = RLvgl_2 + '+' + (P*Y - R*Y + Q)
	if ((P*Y - R*Y + Q) < 0) RLvgl_2 = RLvgl_2 + (P*Y - R*Y + Q)
	}

if (typevgl_2 == "6")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P + '(';
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 0) LLvgl_2 = LLvgl_2 + '+' + Q
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q
	if (P != 1)	LLvgl_2 = LLvgl_2 + ')';
	if (S > 0) LLvgl_2 = LLvgl_2 + '+' + S
	if (S < 0) LLvgl_2 = LLvgl_2 + S

	if (R != 1)	RLvgl_2 = RLvgl_2 + R;
	RLvgl_2 = RLvgl_2 + 'x'
	if ((P*Y + P*Q + S - R*Y) > 0) RLvgl_2 = RLvgl_2 + '+' + (P*Y + P*Q + S - R*Y)
	if ((P*Y + P*Q + S - R*Y) < 0) RLvgl_2 = RLvgl_2 + (P*Y + P*Q + S - R*Y)
	}

if (typevgl_2 == "7")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P + '(';
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 0) LLvgl_2 = LLvgl_2 + '+' + Q
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q
	if (P != 1)	LLvgl_2 = LLvgl_2 + ')';
	if (R > 0) LLvgl_2 = LLvgl_2 + '+' + R
	if (R < 0) LLvgl_2 = LLvgl_2 + R
	LLvgl_2 = LLvgl_2 + 'x'

	RLvgl_2 = RLvgl_2 + (P*Y + P*Q + R*Y)
	}

if (typevgl_2 == "8")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P;
	LLvgl_2 = LLvgl_2 + 'x'
	if (Q > 1) LLvgl_2 = LLvgl_2 + '+' + Q + '('
	if (Q == 1) LLvgl_2 = LLvgl_2 + '+'
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q + '('
	LLvgl_2 = LLvgl_2 + 'x'
	if (S > 0) LLvgl_2 = LLvgl_2 + '+' + S
	if (S < 0) LLvgl_2 = LLvgl_2 + S
	if (Q > 1) LLvgl_2 = LLvgl_2 + ')'
	if (Q < 0) LLvgl_2 = LLvgl_2 + ')'

	if (R != 1)	RLvgl_2 = RLvgl_2 + R + '(';
	RLvgl_2 = RLvgl_2 + 'x'
	if (T > 0) RLvgl_2 = RLvgl_2 + '+' + T
	if (T < 0) RLvgl_2 = RLvgl_2 + T
	if (R != 1)	RLvgl_2 = RLvgl_2 + ')'
	if ((P*Y + Q*Y + Q*S - R*Y - R*T) > 0) RLvgl_2 = RLvgl_2 + '+' + (P*Y + Q*Y + Q*S - R*Y - R*T)
	if ((P*Y + Q*Y + Q*S - R*Y - R*T) < 0) RLvgl_2 = RLvgl_2 + (P*Y + Q*Y + Q*S - R*Y - R*T)
	}

if (typevgl_2 == "9")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P + '(';
	LLvgl_2 = LLvgl_2 + 'x'
	if (S > 0) LLvgl_2 = LLvgl_2 + '+' + S
	if (S < 0) LLvgl_2 = LLvgl_2 + S
	if (P != 1)	LLvgl_2 = LLvgl_2 + ')';
	if (Q > 1) LLvgl_2 = LLvgl_2 + '+' + Q 
	if (Q == 1) LLvgl_2 = LLvgl_2 + '+'
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q 
	LLvgl_2 = LLvgl_2 + 'x'

	if (R != 1)	RLvgl_2 = RLvgl_2 + R
	RLvgl_2 = RLvgl_2 + 'x'
	if ((P*Y + P*S + Q*Y - R*Y) > 0) RLvgl_2 = RLvgl_2 + '+' + (P*Y + P*S + Q*Y - R*Y)
	if ((P*Y + P*S + Q*Y - R*Y) < 0) RLvgl_2 = RLvgl_2 + (P*Y + P*S + Q*Y - R*Y)
	}

if (typevgl_2 == "10")
	{
	if (P != 1)	LLvgl_2 = LLvgl_2 + P + '(';
	LLvgl_2 = LLvgl_2 + 'x'
	if (S > 0) LLvgl_2 = LLvgl_2 + '+' + S
	if (S < 0) LLvgl_2 = LLvgl_2 + S
	if (P != 1)	LLvgl_2 = LLvgl_2 + ')';
	if (Q > 1) LLvgl_2 = LLvgl_2 + '+' + Q + '(' 
	if (Q == 1) LLvgl_2 = LLvgl_2 + '+'
	if (Q < 0) LLvgl_2 = LLvgl_2 + Q + '('
	LLvgl_2 = LLvgl_2 + 'x'
	if (T > 0) LLvgl_2 = LLvgl_2 + '+' + T
	if (T < 0) LLvgl_2 = LLvgl_2 + T
	if (Q > 1) LLvgl_2 = LLvgl_2 + ')'
	if (Q < 0) LLvgl_2 = LLvgl_2 + ')'

	if (R != 1)	RLvgl_2 = RLvgl_2 + R + '('
	RLvgl_2 = RLvgl_2 + 'x'
	if (U > 0) RLvgl_2 = RLvgl_2 + '+' + U
	if (U < 0) RLvgl_2 = RLvgl_2 + U
	if (R != 1)	RLvgl_2 = RLvgl_2 + ')'
	if ((P*Y + P*S + Q*Y + Q*T - R*Y - R*U) > 0) RLvgl_2 = RLvgl_2 + '+' + (P*Y + P*S + Q*Y + Q*T - R*Y - R*U)
	if ((P*Y + P*S + Q*Y + Q*T - R*Y - R*U) < 0) RLvgl_2 = RLvgl_2 + (P*Y + P*S + Q*Y + Q*T - R*Y - R*U)
	}
}


function toonoef()
{
if (tekenopg_1 == "1")
	{
	opg_1_teken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> ' 
	}
if (tekenopg_1 == "2")
	{
	opg_1_teken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> ' 
	}
if (tekenopg_1 == "3")
	{
	opg_1_teken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> ' 
	}
if (tekenopg_1 == "4")
	{
	opg_1_teken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> ' 
	}

if (tekenopg_2 == "1")
	{
	opg_2_teken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> ' 
	}
if (tekenopg_2 == "2")
	{
	opg_2_teken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> ' 
	}
if (tekenopg_2 == "3")
	{
	opg_2_teken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> ' 
	}
if (tekenopg_2 == "4")
	{
	opg_2_teken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> ' 
	}

if (tekenopl_1 == "1")
	{
	opl_1_teken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> ' 
	}
if (tekenopl_1 == "2")
	{
	opl_1_teken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> ' 
	}
if (tekenopl_1 == "3")
	{
	opl_1_teken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> ' 
	}
if (tekenopl_1 == "4")
	{
	opl_1_teken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> ' 
	}

if (tekenopl_2 == "1")
	{
	opl_2_teken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> ' 
	}
if (tekenopl_2 == "2")
	{
	opl_2_teken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> ' 
	}
if (tekenopl_2 == "3")
	{
	opl_2_teken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> ' 
	}
if (tekenopl_2 == "4")
	{
	opl_2_teken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> ' 
	}

if (keuzelidvgl_1 == 1)
	{
	txtvgl_1 = '<b>' + LLvgl_1 + opg_1_teken + RLvgl_1 + '</b>'
	}
if (keuzelidvgl_1 == 2)
	{
	txtvgl_1 = '<b>' + RLvgl_1 + opg_1_teken + LLvgl_1 + '</b>'
	}

if (keuzelidvgl_2 == 1)
	{
	txtvgl_2 = '<b>' + LLvgl_2 + opg_2_teken + RLvgl_2 + '</b>'
	}
if (keuzelidvgl_2 == 2)
	{
	txtvgl_2 = '<b>' + RLvgl_2 + opg_2_teken + LLvgl_2 + '</b>'
	}

if (typevariatie == 1)
	{
	txtvgl_boven = txtvgl_1
	txtvgl_onder = txtvgl_2
	}
if (typevariatie == 2)
	{
	txtvgl_boven = txtvgl_2
	txtvgl_onder = txtvgl_1
	}

parent.oefening.document.open()
parent.oefening.document.write(vooropgave + txtvgl_boven + tussenopgave + txtvgl_onder + naopgave + naoplossing)
}

function toonopl()
{
txtvglopl_1 = '<b>x ' +  opl_1_teken + X + '</b>'
txtvglopl_2 = '<b>x ' +  opl_2_teken + Y + '</b>'

if (typevariatie == 1)
	{
	txtvglopl_boven = txtvglopl_1
	txtvglopl_onder = txtvglopl_2
	}
if (typevariatie == 2)
	{
	txtvglopl_boven = txtvglopl_2
	txtvglopl_onder = txtvglopl_1
	}

tabelvoorX = '<table cellpadding=0 cellspacing=0><tr><td></td><td></td><td align="center"><b>'
tabeltussenXenY = '</b></td><td></td><td align="center"><b>'
tabelnaY = '</b></td><td></td></tr><tr><td></td><td><img src="images/3stels_ongl_lijnlinks.gif" border=0 width=85 height=20></td><td><img src="images/3stels_ongl_kruis.gif" border=0 width=60 height=20></td><td><img src="images/3stels_ongl_lijnlinks.gif" border=0 width=70 height=20></td><td><img src="images/3stels_ongl_kruis.gif" border=0 width=60 height=20></td><td><img src="images/3stels_ongl_lijnrechts.gif" border=0 width=91 height=20></td></tr><tr><td><b>V<sub>1</sub></b></td><td colspan=5>'
	
txtV1 = ''
if (tekenopl_1 < 3) txtV1 += '<img src="images/lijngroen.gif" border=0 width=113 height=4>'
if (tekenopl_1 > 2) txtV1 += '<img src="images/leeg.gif" border=0 width=113 height=4>'
if ((tekenopl_1 == 1) || (tekenopl_1 == 4)) txtV1 += '<img src="images/puntrood.gif" border=0 width=4 height=4>' 
if ((tekenopl_1 == 2) || (tekenopl_1 == 3)) txtV1 += '<img src="images/puntgroen.gif" border=0 width=4 height=4>' 
if (tekenopl_1 > 2) txtV1 += '<img src="images/lijngroen.gif" border=0 width=218 height=4>'

tussenV1enV2 = '</td></tr><tr><td><b>V<sub>2</sub></b></td><td colspan=5>'

txtV2 = ''
if (tekenopl_2 < 3) txtV2 += '<img src="images/lijngroen.gif" border=0 width=243 height=4>'
if (tekenopl_2 > 2) txtV2 += '<img src="images/leeg.gif" border=0 width=243 height=4>'
if ((tekenopl_2 == 1) || (tekenopl_2 == 4)) txtV2 += '<img src="images/puntrood.gif" border=0 width=4 height=4>' 
if ((tekenopl_2 == 2) || (tekenopl_2 == 3)) txtV2 += '<img src="images/puntgroen.gif" border=0 width=4 height=4>' 
if (tekenopl_2 > 2) txtV2 += '<img src="images/lijngroen.gif" border=0 width=88 height=4>'

tussenV2enV = '</td></tr><tr><td><b>V</b></td><td colspan=5>'

if (typevariatie == 1)
	{
	txttekening = txtV1 + tussenV1enV2 + txtV2 + tussenV2enV
	}
if (typevariatie == 2)
	{
	txttekening = txtV2 + tussenV1enV2 + txtV1 + tussenV2enV
	}

txtV = ''

// teken eerste lijn
if ((tekenV == 1) || (tekenV == 2) || (tekenV == 5) || (tekenV == 6)) 
	{
	txtV += '<img src="images/lijngroen.gif" border=0 width=113 height=4>'
	}
else
	{
	txtV += '<img src="images/leeg.gif" border=0 width=113 height=4>'
	}

// teken eerste punt

if ((tekenV == 5) || (tekenV == 6) || (tekenV == 9) || (tekenV == 10)) 
	{
	txtV += '<img src="images/puntgroen.gif" border=0 width=4 height=4>'
	}
else
	{
	if ((tekenV == 1) || (tekenV == 2) || (tekenV == 13) || (tekenV == 14)) 
		{
		txtV += '<img src="images/puntrood.gif" border=0 width=4 height=4>'
		}
	else
		{
		txtV += '<img src="images/leeg.gif" border=0 width=4 height=4>'
		}
	}

// teken tweede lijn

if ((tekenV == 9) || (tekenV == 10) || (tekenV == 13) || (tekenV == 14)) 
	{
	txtV += '<img src="images/lijngroen.gif" border=0 width=126 height=4>'
	}
else
	{
	txtV += '<img src="images/leeg.gif" border=0 width=126 height=4>'
	}

// teken tweede punt

if ((tekenV == 10) || (tekenV == 11) || (tekenV == 14) || (tekenV == 15)) 
	{
	txtV += '<img src="images/puntgroen.gif" border=0 width=4 height=4>'
	}
else
	{
	if ((tekenV == 9) || (tekenV == 12) || (tekenV == 13) || (tekenV == 16)) 
		{
		txtV += '<img src="images/puntrood.gif" border=0 width=4 height=4>'
		}
	else
		{
		txtV += '<img src="images/leeg.gif" border=0 width=4 height=4>'
		}
	}

// teken derde lijn

if ((tekenV == 11) || (tekenV == 12) || (tekenV == 15) || (tekenV == 16)) 
	{
	txtV += '<img src="images/lijngroen.gif" border=0 width=88 height=4>'
	}
else
	{
	txtV += '<img src="images/leeg.gif" border=0 width=88 height=4>'
	}

txtV += '</td></tr></table>'

if ((tekenV == 1) || (tekenV == 2))
	{
	txtopl = '<p> V = ] -<img src="images/oneindig.gif" border=0 width=14 height=10> , ' + X + ' ['
	} 

if ((tekenV == 5) || (tekenV == 6))
	{
	txtopl = '<p> V = ] -<img src="images/oneindig.gif" border=0 width=14 height=10> , ' + X + ' ]'
	} 

if ((tekenV == 11) || (tekenV == 15))
	{
	txtopl = '<p> V = [ ' + Y + ' , +<img src="images/oneindig.gif" border=0 width=14 height=10> ['
	} 

if ((tekenV == 12) || (tekenV == 16))
	{
	txtopl = '<p> V = ] ' + Y + ' , +<img src="images/oneindig.gif" border=0 width=14 height=10> ['
	} 

if (tekenV == 9)
	{
	txtopl = '<p> V = [ ' + X + ' , ' + Y + ' ['
	} 

if (tekenV == 10)
	{
	txtopl = '<p> V = [ ' + X + ' , ' + Y + ' ]'
	} 

if (tekenV == 13)
	{
	txtopl = '<p> V = ] ' + X + ' , ' + Y + ' ['
	} 

if (tekenV == 14)
	{
	txtopl = '<p> V = ] ' + X + ' , ' + Y + ' ]'
	} 

if ((tekenV == 3) || (tekenV == 4) || (tekenV == 7) || (tekenV == 8))
	{
	txtopl = '<p> V = {}'
	} 
	
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + txtvgl_boven + tussenopgave + txtvgl_onder + naopgave + vooroplstelsel + txtvglopl_boven + tussenoplstelsel + txtvglopl_onder + naoplstelsel + tabelvoorX + X + tabeltussenXenY + Y + tabelnaY + txttekening + txtV + txtopl + naoplossing)
}

