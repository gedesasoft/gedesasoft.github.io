var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0

var getal = 0
var vgl = ''
var let1 = 0
var let2 = 0
var teken = ''
var tegteken = ''
var keuzeteken = 0
var tekenopl = ''
var tegtekenopl = ''
var tekenopl2 = ''
var tegtekenopl2 = ''
var oplverz = ''


var A = 0
var B = 0
var C = 0
var D = 0
var P = 0
var Q = 0
var R = 0
var S = 0

var X = 0
var Y = 0

letter1 = new Array(4)
letter1[0] = "a"
letter1[1] = "c"
letter1[2] = "p"
letter1[3] = "m"

letter2 = new Array(3)
letter2[0] = "b"
letter2[1] = "d"
letter2[2] = "q"

var txtSV = ''
var txtopl1 = ''
var txtopl2 = ''
var txtopl3 = ''
var vglSV = ''
var vglSVrechts = ''

var vooroplossing = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><font size=+1>'


var naoplossing = '</font></TD></TR></TABLE></b></body></html>';

 

function schrijfopl()
{
txtSV = ''
txtopl1 = ''
txtopl2 = ''
txtopl3 = ''

if (typeoefening == 1)
	{
	if (typevariatie > 1) 
		{
		txtSV += 'Ongelijkheid herleiden tot: (' 
		if (A*Q == -1) txtSV += '-'  
		if ((A*Q != 1) && (A*Q != -1)) txtSV += (A*Q)
		txtSV += letter1[let1]	
		if (A*P > 0) txtSV += ' - ' + Math.abs(A*P)		
		if (A*P < 0) txtSV += ' + ' + Math.abs(A*P)
		txtSV += ')x ' + teken + ' 0 <P>'		
		}
		
	if (A*Q > 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	if (A*Q < 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}


	txtopl1 += '1) Als ' + letter1[let1] + tekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + teken + ' 0} <p>'
 
	txtopl2 += '2) Als ' + letter1[let1] + tegtekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + tegteken + ' 0} <p>'

	if (keuzeteken > 1)
		{
		oplverz = '<img src="images/getallenR.gif" border=0 width=17 height=14 alt="verzameling R">'
		}
	else
		{
		oplverz = '{}'
		}

	txtopl3 += '3) Als ' + letter1[let1] + ' = ' + opl1 + ' , dan is V = ' + oplverz
		
	}

if (typeoefening == 2)
	{
	if (typevariatie > 1) 
		{
		txtSV += 'Ongelijkheid herleiden tot: (' + vglSV + ')x' + teken + D +  '<P>'		
		}
		
	if (A*Q > 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	if (A*Q < 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}


	txtopl1 += '<table><tr valign="middle"><td> <font size=+1>1) Als ' + letter1[let1] + tekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + teken + '</font></td><td align="center"><font size=-1>' + D + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
 
	txtopl2 += '<table><tr valign="middle"><td> <font size=+1>2) Als ' + letter1[let1] + tegtekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + tegteken + '</font></td><td align="center"><font size=-1>' + D + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
 
	if (((D < 0) && (keuzeteken%2 == 0)) || ((D > 0) && (keuzeteken%2 == 1)))
		{
		oplverz = '<img src="images/getallenR.gif" border=0 width=17 height=14 alt="verzameling R">'
		}
	else
		{
		oplverz = '{}'
		}

	txtopl3 += '3) Als ' + letter1[let1] + ' = ' + opl1 + ' , dan is V = ' + oplverz
	
	}

if (typeoefening == 3)
	{
	if (typevariatie > 1) 
		{
		txtSV += 'Ongelijkheid herleiden tot: (' + vglSV + ')x' + teken + vglSVrechts +  '<P>'		
		}
		
	if (A*Q > 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	if (A*Q < 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}


	txtopl1 += '<table><tr valign="middle"><td> <font size=+1>1) Als ' + letter1[let1] + tekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + teken + '</font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
 
	txtopl2 += '<table><tr valign="middle"><td> <font size=+1>2) Als ' + letter1[let1] + tegtekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + tegteken + '</font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
 
 
	if (keuzeteken == 0)
	{
		if (B*S > 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
		}
		if (B*S < 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
		}
	}
	
	if (keuzeteken == 1)
	{
		if (B*S > 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
		}
		if (B*S < 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
		}
	}
 	
	if (keuzeteken == 2)
	{
		if (B*S > 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}
		if (B*S < 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	}
 	
	if (keuzeteken == 3)
	{
		if (B*S > 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
		if (B*S < 0) 
		{
		tekenopl2 = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
		tegtekenopl2 = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}
	}

	txtopl3 += '3) Als ' + letter1[let1] + ' = ' + opl1 + ' , dan krijgen we 0x' + teken + vglSVrechts + '<p> <img src="images/leeg.gif" border=0 width=25 height=5> a) Als ' + letter2[let2] + tekenopl2 + opl2 + ' dan is V = <img src="images/getallenR.gif" border=0 width=17 height=14 alt="verzameling R"> <p> <img src="images/leeg.gif" border=0 width=25 height=5> b) Als ' + letter2[let2] + tegtekenopl2 + opl2 + ' dan is V = {}'  
	
	}

if (typeoefening == 4)
	{
	txtSV += 'Ongelijkheid herleiden tot: (' + vglSV + ')x' + teken + vglSVrechts +  '<P>'		

	if (A*Q > 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	if (A*Q < 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}


	txtopl1 += '<table><tr valign="middle"><td> <font size=+1>1) Als ' + letter1[let1] + tekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + teken + '</font></font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
	
	txtopl2 += '<table><tr valign="middle"><td> <font size=+1>2) Als ' + letter1[let1] + tegtekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + tegteken + '</font></font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'

	
	if (keuzeteken > 1)
		{
		oplverz = '<img src="images/getallenR.gif" border=0 width=17 height=14 alt="verzameling R">'
		}
	else
		{
		oplverz = '{}'
		}

	txtopl3 += '3) Als ' + letter1[let1] + ' = ' + opl1 + ' , dan krijgen we 0x ' + teken + ' 0 en dus is V = ' + oplverz
	}

if (typeoefening == 5)
	{
	txtSV += 'Ongelijkheid herleiden tot: (' + vglSV + ')x' + teken + vglSVrechts +  '<P>'		

	if (A*Q > 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		}
	if (A*Q < 0) 
		{
		tekenopl = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
		tegtekenopl = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
		}


	txtopl1 += '<table><tr valign="middle"><td> <font size=+1>1) Als ' + letter1[let1] + tekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + teken + '</font></font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'
	
	txtopl2 += '<table><tr valign="middle"><td> <font size=+1>2) Als ' + letter1[let1] + tegtekenopl + opl1 + ' , dan is V = {x <img src="images/element.gif" border=0 width=19 height=18 alt="element van"> <img src="images/getallenR.gif" border=0 width=17 height=14> | x ' + tegteken + '</font></font></td><td align="center"><font size=-1>' + vglSVrechts + '<hr>' + vglSV + '</font></td><td><font size=+1>}</font></td></tr></table> <p>'

	if (((D < 0) && (keuzeteken%2 == 0)) || ((D > 0) && (keuzeteken%2 == 1)))
		{
		oplverz = '<img src="images/getallenR.gif" border=0 width=17 height=14 alt="verzameling R">'
		}
	else
		{
		oplverz = '{}'
		}

	txtopl3 += '3) Als ' + letter1[let1] + ' = ' + opl1 + ' , dan krijgen we 0x ' + teken + ' ' + D + ' en dus is V = ' + oplverz
	
	}

}

function toonopl()
{
parent.oefening.document.open()
parent.oefening.document.write(vooroplossing + vgl + txtSV + '<hr>' + txtopl1 + txtopl2 + txtopl3 + naoplossing)
}

function kiesgetallen()
{
A = 0
while (A == 0) A = Math.floor(Math.random() * 8) - 3;

B = 0
while (B == 0) B = Math.floor(Math.random() * 8) - 3;

	getal = Math.floor(Math.random() * 8) + 1
	if (getal == 1) P = 2
	if (getal == 2) P = 4
	if (getal == 3) P = 7
	if (getal == 4) P = 8
	if (getal == 5) P = -2
	if (getal == 6) P = -4
	if (getal == 7) P = -7
	if (getal == 8) P = -8

	getal = Math.floor(Math.random() * 7) + 1
	if (getal > 2) Q = 1
	if (getal == 2) Q = 3
	if (getal == 1) Q = 5

	if (typeoefening > 3) Q = 1
	
	if (Q == 1) opl1 = P
	else opl1 = P + "/" + Q

	getal = Math.floor(Math.random() * 8) + 1
	if (getal == 1) R = 2
	if (getal == 2) R = 4
	if (getal == 3) R = 7
	if (getal == 4) R = 8
	if (getal == 5) R = -2
	if (getal == 6) R = -4
	if (getal == 7) R = -7
	if (getal == 8) R = -8

	getal = Math.floor(Math.random() * 7) + 1
	if (getal > 2) S = 1
	if (getal == 2) S = 3
	if (getal == 1) S = 5

	if (S == 1) opl2 = R
	else opl2 = R + "/" + S

C = 0
while ((C == 0) || (C== -1)) C = Math.floor(Math.random() * 13) - 5;

D = 0
while (D == 0) D = Math.floor(Math.random() * 13) - 5;

keuzeteken = Math.floor(Math.random() * 4);

if (keuzeteken == 0)
	{
	teken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
	tegteken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
	}
if (keuzeteken == 1)
	{
	teken = ' <img src="images/3ongl_bespr_2.gif" border=0 width=17 height=15 alt="kleiner dan"> '
	tegteken = ' <img src="images/3ongl_bespr_1.gif" border=0 width=17 height=15 alt="groter dan"> '
	}
if (keuzeteken == 2)
	{
	teken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
	tegteken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
	}
if (keuzeteken == 3)
	{
	teken = ' <img src="images/3ongl_bespr_4.gif" border=0 width=17 height=15 alt="kleiner dan of gelijk aan"> '
	tegteken = ' <img src="images/3ongl_bespr_3.gif" border=0 width=17 height=15 alt="groter dan of gelijk aan"> '
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 5) + 1	
typevariatie = Math.floor(Math.random() * 4) + 1
if (typeoefening == 6) typeoefening = 3
if (typeoefening != 3) let1 = Math.floor(Math.random() * 4)
else let1 = Math.floor(Math.random() * 3)
let2 = let1
}

function nieuwoef()
{
kiesoef()
kiesgetallen()
toonoef()
schrijfopl()
}

function toonoef()
{
vgl = ''

if (typeoefening == 1)
	{
	if (typevariatie == 1)
		{
		vgl += '('
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1]	
		if (A*P > 0) vgl += ' - ' + Math.abs(A*P)		
		if (A*P < 0) vgl += ' + ' + Math.abs(A*P)
		vgl += ')x' + teken + '0'		
		}
	if (typevariatie == 2)
		{
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1] + 'x' + teken + (A*P) + 'x'
		}
	if (typevariatie == 3)
		{
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		if (A != 1) vgl += '('
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (A != 1) vgl += ')'
		vgl += teken
		if (A*P == -1) vgl += '-'
		if ((A*P != 1) && (A*P != -1)) vgl += A*P
		vgl += 'x '
		if (A*B > 0) vgl += ' + ' + Math.abs(A*B)		
		if (A*B < 0) vgl += ' - ' + Math.abs(A*B)
		}
	if (typevariatie == 4)
		{
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		if (Q != 1) vgl += '('
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (Q != 1) vgl += ')'
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += 'x' + teken
		if ((A*P+B) == -1) vgl += '-'
		if (((A*P+B) != 1) && ((A*P+B) != -1)) vgl += (A*P+B)
		vgl += 'x '
		if (Q*B > 0) vgl += ' + ' + Math.abs(Q*B)		
		if (Q*B < 0) vgl += ' - ' + Math.abs(Q*B)
		}
	}
		
if (typeoefening == 2)
	{
	vglSV = '' 
	if (A*Q == -1) vglSV += '-'
	if ((A*Q != 1) && (A*Q != -1)) vglSV += (A*Q)
	vglSV += letter1[let1]	
	if (A*P > 0) vglSV += ' - ' + Math.abs(A*P)		
	if (A*P < 0) vglSV += ' + ' + Math.abs(A*P)

	if (typevariatie == 1)
		{
		vgl = '(' + vglSV + ')x' + teken + D		
		}
	if (typevariatie == 2)
		{
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1] + 'x' + teken + (A*P) + 'x'
		if (D > 0) vgl += ' + ' + Math.abs(D)		
		if (D < 0) vgl += ' - ' + Math.abs(D)
		}
	if (typevariatie == 3)
		{
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		if (A != 1) vgl += '('
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (A != 1) vgl += ')'
		vgl += teken
		if (A*P == -1) vgl += '-'
		if ((A*P != 1) && (A*P != -1)) vgl += A*P
		vgl += 'x '
		if ((A*B+D) > 0) vgl += ' + ' + Math.abs(A*B+D)		
		if ((A*B+D) < 0) vgl += ' - ' + Math.abs(A*B+D)
		}
	if (typevariatie == 4)
		{
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		if (Q != 1) vgl += '('
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (Q != 1) vgl += ')'
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += 'x' + teken
		if ((A*P+B) == -1) vgl += '-'
		if (((A*P+B) != 1) && ((A*P+B) != -1)) vgl += (A*P+B)
		vgl += 'x '
		if ((Q*B+D) > 0) vgl += ' + ' + Math.abs(Q*B+D)		
		if ((Q*B+D) < 0) vgl += ' - ' + Math.abs(Q*B+D)
		}

	} 
	
if (typeoefening == 3)
	{
	vglSV = '' 
	if (A*Q == -1) vglSV += '-'
	if ((A*Q != 1) && (A*Q != -1)) vglSV += (A*Q)
	vglSV += letter1[let1]	
	if (A*P > 0) vglSV += ' - ' + Math.abs(A*P)		
	if (A*P < 0) vglSV += ' + ' + Math.abs(A*P)

	vglSVrechts = ''
	if (B*S == -1) vglSVrechts += '-'
	if ((B*S != 1) && (B*S != -1)) vglSVrechts += (B*S)
	vglSVrechts += letter2[let2]
	if (B*R > 0) vglSVrechts += ' - ' + Math.abs(B*R)		
	if (B*R < 0) vglSVrechts += ' + ' + Math.abs(B*R)
		
	if (typevariatie == 1)
		{
		vgl = '(' + vglSV + ')x' + teken + vglSVrechts		
		}
	if (typevariatie == 2)
		{
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1] + 'x'
		if (B*R > 0) vgl += ' + ' + Math.abs(B*R) + teken + (A*P) + 'x'		
		if (B*R < 0) vgl += ' - ' + Math.abs(B*R) + teken + (A*P) + 'x'
		if (B*S > 0) vgl += ' + ' + Math.abs(B*S) + letter2[let2]		
		if (B*S < 0) vgl += ' - ' + Math.abs(B*S) + letter2[let2]
		}
	if (typevariatie == 3)
		{
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		if (A != 1) vgl += '('
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (A != 1) vgl += ')'
		if (B*S > 0) vgl += ' - ' + Math.abs(B*S) + letter2[let2]		
		if (B*S < 0) vgl += ' + ' + Math.abs(B*S) + letter2[let2]
		vgl += teken
		if (A*P == -1) vgl += '-'
		if ((A*P != 1) && (A*P != -1)) vgl += A*P
		vgl += 'x '
		if ((A*B-B*R) > 0) vgl += ' + ' + Math.abs(A*B-B*R)		
		if ((A*B-B*R) < 0) vgl += ' - ' + Math.abs(A*B-B*R)
		}
if (typevariatie == 4)
		{
		if (A*Q == -1) vgl += '-' + letter1[let1] + 'x'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q) + letter1[let1] + 'x'
		if (B == -1) vgl += ' + '
		if (B == 1) vgl += ' - '
		if (B > 1) vgl += ' - ' + Math.abs(B)
		if (B < -1) vgl += ' + ' + Math.abs(B)
		vgl += '('
		if (S == -1) vgl += '-'
		if ((S > 1) || (S < -1)) vgl += S
		vgl += letter2[let2]
		if (D == -1) vgl += ' - '
		if (D == 1) vgl += ' + '
		if (D > 1) vgl += ' + ' + Math.abs(D)
		if (D < -1) vgl += ' - ' + Math.abs(D)
		vgl += 'x'
		if ((C+1) > 0) vgl += ' + ' + Math.abs(C+1)
		if ((C+1) < 0) vgl += ' - ' + Math.abs(C+1)
		vgl += ')'
		if (B*R > 0) vgl += ' + ' + Math.abs(B*R)		
		if (B*R < 0) vgl += ' - ' + Math.abs(B*R)
		if (D == -1) vgl += ' - '
		if (D == 1) vgl += ' + '
		if (D > 1) vgl += ' + ' + Math.abs(D)
		if (D < -1) vgl += ' - ' + Math.abs(D)
		vgl += letter2[let2]
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += teken
		if (A*P == -1) vgl += '-'
		if ((A*P > 1) || (A*P < -1)) vgl += A*P
		vgl += 'x'
		if (D == -1) vgl += ' - '
		if (D == 1) vgl += ' + '
		if (D > 1) vgl += ' + ' + Math.abs(D)
		if (D < -1) vgl += ' - ' + Math.abs(D)
		vgl += '(' + letter2[let2]
		if (B == -1) vgl += ' + '
		if (B == 1) vgl += ' - '
		if (B > 1) vgl += ' - ' + Math.abs(B)
		if (B < -1) vgl += ' + ' + Math.abs(B)
		vgl += 'x)'
		if (B*C > 0) vgl += ' - ' + Math.abs(B*C)		
		if (B*C < 0) vgl += ' + ' + Math.abs(B*C)
		}
	}
		
if (typeoefening == 4)
	{
	vglSV = ''

	if (A*Q == -1) vglSV += '-'
	if ((A*Q != 1) && (A*Q != -1)) vglSV += (A*Q)
	vglSV += letter1[let1]	
	if (A*P > 0) vglSV += ' - ' + Math.abs(A*P)		
	if (A*P < 0) vglSV += ' + ' + Math.abs(A*P)

	vglSVrechts = P + ' - ' + letter1[let1]

	if (typevariatie == 1)
		{
		vgl += '('
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1]	
		if (A*P > 0) vgl += ' - ' + Math.abs(A*P)		
		if (A*P < 0) vgl += ' + ' + Math.abs(A*P)
		vgl += ')x + ' + letter1[let1] + teken + P		
		}
	if (typevariatie == 2)
		{
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1] + 'x + ' + letter1[let1] + teken + (A*P) + 'x'
		if (P > 0) vgl += ' + ' + Math.abs(P)
		if (P < 0) vgl += ' - ' + Math.abs(P)
		}
	if (typevariatie == 3)
		{
		vgl += letter1[let1]
		if (A == -1) vgl += ' - ('
		if (A == 1) vgl += ' + ('
		if (A > 1) vgl += ' + ' + Math.abs(A) + '(' 
		if (A < -1) vgl += ' - ' + Math.abs(A) + '(' 
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += ')' + teken + P 
		if (A*P == -1) vgl += ' - '
		if (A*P == 1) vgl += ' + '
		if (A*P > 1) vgl += ' + ' + Math.abs(A*P)
		if (A*P < -1) vgl += ' - ' + Math.abs(A*P)
		vgl += 'x '
		if (A*B > 0) vgl += ' + ' + Math.abs(A*B)		
		if (A*B < 0) vgl += ' - ' + Math.abs(A*B)
		}
	if (typevariatie == 4)
		{
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		if (Q != 1) vgl += '('
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (Q != 1) vgl += ')'
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += 'x + ' + letter1[let1] + teken
		if ((A*P+B) == -1) vgl += '-'
		if (((A*P+B) != 1) && ((A*P+B) != -1)) vgl += (A*P+B)
		vgl += 'x '
		if ((Q*B+P) > 0) vgl += ' + ' + Math.abs(Q*B+P)		
		if ((Q*B+P) < 0) vgl += ' - ' + Math.abs(Q*B+P)
		
		}
	}

if (typeoefening == 5)
	{
	vglSV = '' 
	if (A*Q == -1) vglSV += '-'
	if ((A*Q != 1) && (A*Q != -1)) vglSV += (A*Q)
	vglSV += letter1[let1]	
	if (A*P > 0) vglSV += ' - ' + Math.abs(A*P)		
	if (A*P < 0) vglSV += ' + ' + Math.abs(A*P)

	vglSVrechts = ''
	if ((P+D) == 0) vglSVrechts += '- ' + letter1[let1]
	if ((P+D) != 0) vglSVrechts += (P+D) + ' - ' + letter1[let1]
		
	if (typevariatie == 1)
		{
		vgl = '(' + vglSV + ')x + ' + letter1[let1] + teken + (P+D)		
		}
	if (typevariatie == 2)
		{
		if (A*Q == -1) vgl += '-'
		if ((A*Q != 1) && (A*Q != -1)) vgl += (A*Q)
		vgl += letter1[let1] + 'x + ' + letter1[let1] + teken + (A*P) + 'x'
		if ((P+D) > 0) vgl += ' + ' + Math.abs(P+D)		
		if ((P+D) < 0) vgl += ' - ' + Math.abs(P+D)
		}
	if (typevariatie == 3)
		{
		vgl += letter1[let1]
		if (A == -1) vgl += ' - ('
		if (A == 1) vgl += ' + ('
		if (A > 1) vgl += ' + ' + Math.abs(A) + '(' 
		if (A < -1) vgl += ' - ' + Math.abs(A) + '(' 
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += ')' + teken
		if (A*P == -1) vgl += '-'
		if ((A*P != 1) && (A*P != -1)) vgl += A*P
		vgl += 'x '
		if ((A*B+P+D) > 0) vgl += ' + ' + Math.abs(A*B+P+D)		
		if ((A*B+P+D) < 0) vgl += ' - ' + Math.abs(A*B+P+D)
		}
	if (typevariatie == 4)
		{
		if (Q == -1) vgl += '-'
		if ((Q != 1) && (Q != -1)) vgl += Q
		if (Q != 1) vgl += '('
		if (A == -1) vgl += '-'
		if ((A != 1) && (A != -1)) vgl += A
		vgl += letter1[let1] + 'x'	
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		if (Q != 1) vgl += ')'
		if (B > 0) vgl += ' + ' + Math.abs(B)		
		if (B < 0) vgl += ' - ' + Math.abs(B)
		vgl += 'x + ' + letter1[let1] + teken
		if ((A*P+B) == -1) vgl += '-'
		if (((A*P+B) != 1) && ((A*P+B) != -1)) vgl += (A*P+B)
		vgl += 'x '
		if ((Q*B+D+P) > 0) vgl += ' + ' + Math.abs(Q*B+D+P)		
		if ((Q*B+D+P) < 0) vgl += ' - ' + Math.abs(Q*B+D+P)
		}

	} 

vgl = '<br><p>' + vgl + '<p>'

parent.oefening.document.open()
parent.oefening.document.write(vooroplossing + vgl + naoplossing)
}

