var factor = ''
var veelterm = ''
var typeoefening = 0
var typevariatie = 0
var plusofmin = 0
var mp = ''
var deel1 = ''
var deel2 = ''
var veelterm = ''
var getal = 0
var extray = 0
var extra = ""
var extrakw = ""

var oefteller = new Array(15)
oefteller[0] = "nee"
oefteller[1] = "nee"
oefteller[2] = "nee"
oefteller[3] = "nee"
oefteller[4] = "nee"
oefteller[5] = "nee"
oefteller[6] = "nee"
oefteller[7] = "nee"
oefteller[8] = "nee"
oefteller[9] = "nee"
oefteller[10] = "nee"
oefteller[11] = "nee"
oefteller[12] = "nee"
oefteller[13] = "nee"
oefteller[14] = "nee"


var A = 0
var B = 0
var C = 0
var D = 0
var E = 0

var K = 0
var L = 0
var M = 0
var P = 0
var Q = 0
var R = 0
var S = 0
var T = 0
var U = 0

var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><br><table><tr><td valign="top"><b>'

var naoplossing = '</b></td></tr></table></b></TD></TR></TABLE></b></body></html>';


function kiesgetallen()
{
A = 0
B = 0
C = 0
D = 0
E = 0

while (A == 0) A = Math.floor(Math.random() * 19) - 8
while (B == 0) B = Math.floor(Math.random() * 19) - 8
while (C == 0) C = Math.floor(Math.random() * 19) - 8
while (D == 0) D = Math.floor(Math.random() * 19) - 8
while (E == 0) E = Math.floor(Math.random() * 19) - 8

K = Math.floor(Math.random() * 8)
L = Math.floor(Math.random() * 5)
M = Math.floor(Math.random() * 3)
P = Math.floor(Math.random() * 6)
Q = Math.floor(Math.random() * 3)
R = Math.floor(Math.random() * 5)
S = Math.floor(Math.random() * 8)
T = Math.floor(Math.random() * 5)
U = Math.floor(Math.random() * 3)
}

function schrijfmp()
{
if (typeoefening == 7)  
	{
	deel1 = "(" + A
	if (K == 1) deel1 += "x"
	if (K > 1) deel1 += "x<sup>" + K + "</sup>"
	if (L == 1) deel1 += "y"
	if (L > 1) deel1 += "y<sup>" + L + "</sup>"
	if (B > 0) deel1 += "+" + B
	if (B < 0) deel1 += B
	if (P == 1) deel1 += "x"
	if (P > 1) deel1 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel1 += "y"
	if (Q > 1) deel1 += "y<sup>" + Q + "</sup>"
	deel1 += ")"
	deel2 = "(" + A
	if (K == 1) deel2 += "x"
	if (K > 1) deel2 += "x<sup>" + K + "</sup>"
	if (L == 1) deel2 += "y"
	if (L > 1) deel2 += "y<sup>" + L + "</sup>"
	if (B > 0) deel2 += "-" + B
	if (B < 0) deel2 += "+" + Math.abs(B)
	if (P == 1) deel2 += "x"
	if (P > 1) deel2 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel2 += "y"
	if (Q > 1) deel2 += "y<sup>" + Q + "</sup>"
	deel2 += ")"
	deel3 = "(" + A*A
	if (K > 0) deel3 += "x<sup>" + 2*K + "</sup>"
	if (L > 0) deel3 += "y<sup>" + 2*L + "</sup>"
	deel3 += "+" + B*B
	if (P > 0) deel3 += "x<sup>" + 2*P + "</sup>"
	if (Q > 0) deel3 += "y<sup>" + 2*Q + "</sup>"
	deel3 += ")"

	if (plusofmin == 1) mp = deel3 + deel1 + deel2
	else mp = deel2 + deel3 + deel1
	}

if (typeoefening == 1)  
	{
	deel1 = "(" + A
	if (K == 1) deel1 += "x"
	if (K > 1) deel1 += "x<sup>" + K + "</sup>"
	if (L == 1) deel1 += "y"
	if (L > 1) deel1 += "y<sup>" + L + "</sup>"
	if (M == 1) deel1 += "z"
	if (M > 1) deel1 += "z<sup>" + M + "</sup>"
	if (B > 0) deel1 += "+" + B
	if (B < 0) deel1 += B
	if (P == 1) deel1 += "x"
	if (P > 1) deel1 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel1 += "y"
	if (Q > 1) deel1 += "y<sup>" + Q + "</sup>"
	if (R == 1) deel1 += "z"
	if (R > 1) deel1 += "z<sup>" + R + "</sup>"
	deel1 += ")"
	deel2 = "(" + A
	if (K == 1) deel2 += "x"
	if (K > 1) deel2 += "x<sup>" + K + "</sup>"
	if (L == 1) deel2 += "y"
	if (L > 1) deel2 += "y<sup>" + L + "</sup>"
	if (M == 1) deel2 += "z"
	if (M > 1) deel2 += "z<sup>" + M + "</sup>"
	if (B > 0) deel2 += "-" + B
	if (B < 0) deel2 += "+" + Math.abs(B)
	if (P == 1) deel2 += "x"
	if (P > 1) deel2 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel2 += "y"
	if (Q > 1) deel2 += "y<sup>" + Q + "</sup>"
	if (R == 1) deel2 += "z"
	if (R > 1) deel2 += "z<sup>" + R + "</sup>"
	deel2 += ")"

	if (plusofmin == 1) mp = deel1 + deel2
	else mp = deel2 + deel1
	}

if (typeoefening == 2)  
	{
	deel1 = "(" + B
	if (P == 1) deel1 += "x"
	if (P > 1) deel1 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel1 += "y"
	if (Q > 1) deel1 += "y<sup>" + Q + "</sup>"
	if (R == 1) deel1 += "z"
	if (R > 1) deel1 += "z<sup>" + R + "</sup>"
	if (A > 0) deel1 += "+" + A
	if (A < 0) deel1 += A
	if (K == 1) deel1 += "x"
	if (K > 1) deel1 += "x<sup>" + K + "</sup>"
	if (L == 1) deel1 += "y"
	if (L > 1) deel1 += "y<sup>" + L + "</sup>"
	if (M == 1) deel1 += "z"
	if (M > 1) deel1 += "z<sup>" + M + "</sup>"
	deel1 += ")"
	deel2 = "("
	if (B > 0) deel2 += "-" + B
	if (B < 0) deel2 += Math.abs(B)
	if (P == 1) deel2 += "x"
	if (P > 1) deel2 += "x<sup>" + P + "</sup>"
	if (Q == 1) deel2 += "y"
	if (Q > 1) deel2 += "y<sup>" + Q + "</sup>"
	if (R == 1) deel2 += "z"
	if (R > 1) deel2 += "z<sup>" + R + "</sup>"
	if (A > 0) deel2 += "+" + A
	if (A < 0) deel2 += A
	if (K == 1) deel2 += "x"
	if (K > 1) deel2 += "x<sup>" + K + "</sup>"
	if (L == 1) deel2 += "y"
	if (L > 1) deel2 += "y<sup>" + L + "</sup>"
	if (M == 1) deel2 += "z"
	if (M > 1) deel2 += "z<sup>" + M + "</sup>"
	deel2 += ")"

	if (plusofmin == 1) mp = deel1 + deel2
	else mp = deel2 + deel1
	}

if ((typeoefening == 3) || (typeoefening == 4))  
	{
	mp = "(" + A
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (L == 1) mp += "y"
	if (L > 1) mp += "y<sup>" + L + "</sup>"
	if (M == 1) mp += "z"
	if (M > 1) mp += "z<sup>" + M + "</sup>"
	if (B > 0) mp += "+" + B
	if (B < 0) mp += B
	if (P == 1) mp += "x"
	if (P > 1) mp += "x<sup>" + P + "</sup>"
	if (Q == 1) mp += "y"
	if (Q > 1) mp += "y<sup>" + Q + "</sup>"
	if (R == 1) mp += "z"
	if (R > 1) mp += "z<sup>" + R + "</sup>"
	mp += ")<sup>2</sup>"
	}

if ((typeoefening == 5) || (typeoefening == 6))  
	{
	mp = "(" + A
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (L == 1) mp += "y"
	if (L > 1) mp += "y<sup>" + L + "</sup>"
	if (M == 1) mp += "z"
	if (M > 1) mp += "z<sup>" + M + "</sup>"
	if (B > 0) mp += "+" + B
	if (B < 0) mp += B
	if (P == 1) mp += "x"
	if (P > 1) mp += "x<sup>" + P + "</sup>"
	if (Q == 1) mp += "y"
	if (Q > 1) mp += "y<sup>" + Q + "</sup>"
	if (R == 1) mp += "z"
	if (R > 1) mp += "z<sup>" + R + "</sup>"
	mp += ")<sup>3</sup>"
	}

if (typeoefening == 8)  
	{
	if (K == 0) K = 1

	mp = "(" + A
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (B > 0) mp += "+" + B + extra
	if (B < 0) mp += B + extra
	mp += ")<sup>2</sup>"
	if (plusofmin == 1) mp += " + " 
	else mp += " - "
	mp += "(" + D
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (E > 0) mp += "+" + E + extra
	if (E < 0) mp += E + extra
	mp += ")(" + D
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (E > 0) mp += "-" + E + extra
	if (E < 0) mp += "+" + Math.abs(E) + extra
	mp += ")"
	}

if (typeoefening == 9)  
	{
	if (K == 0) K = 1

	mp = "(" + D
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (E > 0) mp += "+" + E + extra
	if (E < 0) mp += E + extra
	mp += ")(" + D
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (E > 0) mp += "-" + E + extra
	if (E < 0) mp += "+" + Math.abs(E) + extra
	mp += ")"
	if (plusofmin == 1) mp += " + " 
	else mp += " - "
	mp += "(" + A
	if (K == 1) mp += "x"
	if (K > 1) mp += "x<sup>" + K + "</sup>"
	if (B > 0) mp += "+" + B + extra
	if (B < 0) mp += B + extra
	mp += ")<sup>2</sup>"
	}

	mp = replace(mp,'+1x','+x')
	mp = replace(mp,'-1x','-x')
	mp = replace(mp,' 1x',' x')
	mp = replace(mp,'(1x','(x')
	mp = replace(mp,'+1y','+y')
	mp = replace(mp,'-1y','-y')
	mp = replace(mp,' 1y',' y')
	mp = replace(mp,'(1y','(y')
	mp = replace(mp,'+1z','+z')
	mp = replace(mp,'-1z','-z')
	mp = replace(mp,' 1z',' z')
	mp = replace(mp,'(1z','(z')

if (typevariatie == 2) 
	{
	mp = replace(mp,'x','a')
	mp = replace(mp,'y','b')
	mp = replace(mp,'z','c')
	}
mp = "<font size=+1>" + mp + "</font>"
}

function schrijfveelterm()
{
if (typeoefening == 7)  
	{
	veelterm = " = (" + A*A
	if (K > 0) veelterm += "x<sup>" + (2*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (2*L) + "</sup>"
	veelterm += "+" + B*B
	if (P > 0) veelterm += "x<sup>" + (2*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (2*Q) + "</sup>"
	veelterm += ")(" + A*A
	if (K > 0) veelterm += "x<sup>" + (2*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (2*L) + "</sup>"
	veelterm += "-" + B*B
	if (P > 0) veelterm += "x<sup>" + (2*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (2*Q) + "</sup>"
	veelterm += ")<br>"
	veelterm += " = " + A*A*A*A
	if (K > 0) veelterm += "x<sup>" + (4*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (4*L) + "</sup>"
	veelterm += "-" + B*B*B*B
	if (P > 0) veelterm += "x<sup>" + (4*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (4*Q) + "</sup>"
	}

if ((typeoefening == 1) || (typeoefening == 2))  
	{
	veelterm = " = " + A*A
	if (K > 0) veelterm += "x<sup>" + (2*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (2*L) + "</sup>"
	if (M > 0) veelterm += "z<sup>" + (2*M) + "</sup>"
	veelterm += "-" + B*B
	if (P > 0) veelterm += "x<sup>" + (2*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (2*Q) + "</sup>"
	if (R > 0) veelterm += "z<sup>" + (2*R) + "</sup>"
	}

if ((typeoefening == 3) || (typeoefening == 4))  
	{
	veelterm = " = " + A*A
	if (K > 0) veelterm += "x<sup>" + (2*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (2*L) + "</sup>"
	if (M > 0) veelterm += "z<sup>" + (2*M) + "</sup>"
	if ((2*A*B) > 0) veelterm += "+" + (2*A*B)
	if ((2*A*B) < 0) veelterm += (2*A*B)
	if ((K+P) == 1) veelterm += "x"
	if ((K+P) > 1) veelterm += "x<sup>" + (K+P) + "</sup>"
	if ((L+Q) == 1) veelterm += "y"
	if ((L+Q) > 1) veelterm += "y<sup>" + (L+Q) + "</sup>"
	if ((M+R) == 1) veelterm += "z"
	if ((M+R) > 1) veelterm += "z<sup>" + (M+R) + "</sup>"
	veelterm += "+" + B*B
	if (P > 0) veelterm += "x<sup>" + (2*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (2*Q) + "</sup>"
	if (R > 0) veelterm += "z<sup>" + (2*R) + "</sup>"
	}

if ((typeoefening == 5) || (typeoefening == 6))  
	{
	veelterm = " = " + A*A*A
	if (K > 0) veelterm += "x<sup>" + (3*K) + "</sup>"
	if (L > 0) veelterm += "y<sup>" + (3*L) + "</sup>"
	if (M > 0) veelterm += "z<sup>" + (3*M) + "</sup>"
	if ((3*A*A*B) > 0) veelterm += "+" + (3*A*A*B)
	if ((3*A*A*B) < 0) veelterm += (3*A*A*B)
	if ((2*K+P) == 1) veelterm += "x"
	if ((2*K+P) > 1) veelterm += "x<sup>" + (2*K+P) + "</sup>"
	if ((2*L+Q) == 1) veelterm += "y"
	if ((2*L+Q) > 1) veelterm += "y<sup>" + (2*L+Q) + "</sup>"
	if ((2*M+R) == 1) veelterm += "z"
	if ((2*M+R) > 1) veelterm += "z<sup>" + (2*M+R) + "</sup>"
	if ((3*A*B*B) > 0) veelterm += "+" + (3*A*B*B)
	if ((3*A*B*B) < 0) veelterm += (3*A*B*B)
	if ((K+P*2) == 1) veelterm += "x"
	if ((K+P*2) > 1) veelterm += "x<sup>" + (K+2*P) + "</sup>"
	if ((L+Q*2) == 1) veelterm += "y"
	if ((L+Q*2) > 1) veelterm += "y<sup>" + (L+2*Q) + "</sup>"
	if ((M+R*2) == 1) veelterm += "z"
	if ((M+R*2) > 1) veelterm += "z<sup>" + (M+2*R) + "</sup>"
	if ((B*B*B) > 0) veelterm += "+" + (B*B*B)
	if ((B*B*B) < 0) veelterm += (B*B*B)
	if (P > 0) veelterm += "x<sup>" + (3*P) + "</sup>"
	if (Q > 0) veelterm += "y<sup>" + (3*Q) + "</sup>"
	if (R > 0) veelterm += "z<sup>" + (3*R) + "</sup>"
	}

if (typeoefening == 8)  
	{
	veelterm = " = (" + A*A
	veelterm += "x<sup>" + (2*K) + "</sup>"
	if ((2*A*B) > 0) veelterm += "+" + (2*A*B)
	if ((2*A*B) < 0) veelterm += (2*A*B)
	if (K == 1) veelterm += "x" + extra
	if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
	veelterm += "+" + B*B  + extrakw + ")"
	if (plusofmin == 1) veelterm += " + " 
	else veelterm += " - "
	veelterm += "(" + D*D
	veelterm += "x<sup>" + (2*K) + "</sup>"
	veelterm += "-" + E*E  + extrakw + ")<br>"
	if (plusofmin == 1)
		{
		veelterm += " = " + (A*A + D*D)
		veelterm += "x<sup>" + (2*K) + "</sup>"
		if ((2*A*B) > 0) veelterm += "+" + (2*A*B)
		if ((2*A*B) < 0) veelterm += (2*A*B)
		if (K == 1) veelterm += "x"	+ extra
		if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
		if ((B*B-E*E) > 0) veelterm += "+" + (B*B-E*E) + extrakw	
		if ((B*B-E*E) < 0) veelterm += (B*B-E*E) + extrakw
		}
	else
		{
		veelterm += " = "
		if ((A*A-D*D) != 0) veelterm += (A*A-D*D) + "x<sup>" + (2*K) + "</sup>"
		if (((2*A*B) > 0) && ((A*A-D*D) != 0)) veelterm += "+" + (2*A*B)
		if (((2*A*B) > 0) && ((A*A-D*D) == 0)) veelterm += (2*A*B)
		if ((2*A*B) < 0) veelterm += (2*A*B)
		if (K == 1) veelterm += "x"	 + extra
		if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
		veelterm += "+" + (B*B+E*E)	 + extrakw
		}
	}

if (typeoefening == 9)  
	{
	veelterm = " = (" + D*D
	veelterm += "x<sup>" + (2*K) + "</sup>"
	veelterm += "-" + E*E  + extrakw + ")"
	if (plusofmin == 1) veelterm += " + " 
	else veelterm += " - "
	veelterm += "(" + A*A
	veelterm += "x<sup>" + (2*K) + "</sup>"
	if ((2*A*B) > 0) veelterm += "+" + (2*A*B)
	if ((2*A*B) < 0) veelterm += (2*A*B)
	if (K == 1) veelterm += "x" + extra
	if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
	veelterm += "+" + B*B  + extrakw + ")<br>"
	if (plusofmin == 1)
		{
		veelterm += " = " + (A*A + D*D)
		veelterm += "x<sup>" + (2*K) + "</sup>"
		if ((2*A*B) > 0) veelterm += "+" + (2*A*B)
		if ((2*A*B) < 0) veelterm += (2*A*B)
		if (K == 1) veelterm += "x"	 + extra
		if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
		if ((B*B-E*E) > 0) veelterm += "+" + (B*B-E*E) + extrakw
		if ((B*B-E*E) < 0) veelterm += (B*B-E*E) + extrakw
		}
	else
		{
		veelterm += " = "
		if ((D*D-A*A) != 0) veelterm += (D*D-A*A) + "x<sup>" + (2*K) + "</sup>"
		if (((-2*A*B) > 0) && ((D*D-A*A) != 0)) veelterm += "+" + (-2*A*B)
		if (((-2*A*B) > 0) && ((D*D-A*A) == 0)) veelterm += (-2*A*B)
		if ((-2*A*B) < 0) veelterm += (-2*A*B)
		if (K == 1) veelterm += "x" + extra	
		if (K > 1) veelterm += "x<sup>" + K + "</sup>" + extra
		veelterm += "-" + (B*B+E*E) + extrakw	
		}
	}

	veelterm = replace(veelterm,'+1x','+x')
	veelterm = replace(veelterm,'-1x','-x')
	veelterm = replace(veelterm,' 1x',' x')
	veelterm = replace(veelterm,'(1x','(x')
	veelterm = replace(veelterm,'+1y','+y')
	veelterm = replace(veelterm,'-1y','-y')
	veelterm = replace(veelterm,' 1y',' y')
	veelterm = replace(veelterm,'(1y','(y')
	veelterm = replace(veelterm,'+1z','+z')
	veelterm = replace(veelterm,'-1z','-z')
	veelterm = replace(veelterm,' 1z',' z')
	veelterm = replace(veelterm,'(1z','(z')

if (typevariatie == 2) 
	{
	veelterm = replace(veelterm,'x','a')
	veelterm = replace(veelterm,'y','b')
	veelterm = replace(veelterm,'z','c')
	}
veelterm = '<font color="#0000ff" size="+1">' + veelterm + '</font>'
}


function kiesoef()
{
if (document.mp.toeg.checked == true) 
	{
	oefteller[7] = "ja"
	oefteller[1] = "ja"
	oefteller[2] = "ja"
	}
else 	
	{
	oefteller[7] = "nee"
	oefteller[1] = "nee"
	oefteller[2] = "nee"
	}
if (document.mp.kw.checked == true) 
	{
	oefteller[3] = "ja"
	oefteller[4] = "ja"
	}
else 	
	{
	oefteller[3] = "nee"
	oefteller[4] = "nee"
	}
if (document.mp.derde.checked == true) 
	{
	oefteller[5] = "ja"
	oefteller[6] = "ja"
	}
else 	
	{
	oefteller[5] = "nee"
	oefteller[6] = "nee"
	}
if ((document.mp.kw.checked == true) && (document.mp.toeg.checked == true)) 
	{
	oefteller[8] = "ja"
	oefteller[9] = "ja"
	}
else 	
	{
	oefteller[8] = "nee"
	oefteller[9] = "nee"
	}

if ((document.mp.toeg.checked == false) && (document.mp.kw.checked == false) && (document.mp.derde.checked == false)) alert('Je moet wel op zijn minst één onderdeel selecteren om een oefening te kunnen maken.') 
else
	{
	while (oefteller[typeoefening] == "nee") typeoefening = Math.floor(Math.random() * 10)
	}
typevariatie = Math.floor(Math.random() * 2) + 1
extray = Math.floor(Math.random() * 2) + 1
if (extray == 1)
	{
	extra = ""
	extrakw = ""
	}
else 
	{
	extra = "y"
	extrakw = "y<sup>2</sup>"
	}

plusofmin = Math.floor(Math.random() * 2) + 1
}

function nieuwoef()
{
typeoefening = 0
kiesoef()
if (typeoefening != 0)
	{
	kiesgetallen()
	schrijfmp()
	schrijfveelterm()
	toonoef()
	}
}

function toonoef()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + mp + naoplossing)
}

function toonopl()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + mp + '</b></td><td><b>' + veelterm + naoplossing)
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

