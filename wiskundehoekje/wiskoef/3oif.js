var factor = ''
var veelterm = ''
var typeoefening = 0
var typevariatie = 0
var plusofmin = 0
var ontbinding = ''
var veelterm = ''
var getal = 0

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
A = Math.floor(Math.random() * 5) + 1
getal = Math.floor(Math.random() * 6) + 1
if (getal == 1) B = 2
if (getal == 2) B = 4 
if (getal == 3) B = 7 
if (getal == 4) B = 8
if (getal == 5) B = 11
if (getal == 6) B = 1
getal = Math.floor(Math.random() * 4) + 1
if (getal == 1) C = 1
if (getal == 2) C = 3 
if (getal == 3) C = 5 
if (getal == 4) C = 9
getal = Math.floor(Math.random() * 12) + 1
if (getal == 1) D = 2
if (getal == 2) D = 4 
if (getal == 3) D = 7 
if (getal == 4) D = 8
if (getal == 5) D = 11
if (getal == 6) D = -2
if (getal == 7) D = -4 
if (getal == 8) D = -7 
if (getal == 9) D = -8
if (getal == 10) D = -11
if (getal == 11) D = 1
if (getal == 12) D = -1
E = 0
while (E == 0) E = Math.floor(Math.random() * 24) - 11
K = Math.floor(Math.random() * 6)
L = Math.floor(Math.random() * 6)
M = Math.floor(Math.random() * 6)
while ((A == 1) && (K == 0) && (L == 0) && (M == 0)) M = Math.floor(Math.random() * 6)
P = 0
while ((P%2) == 0) P = Math.floor(Math.random() * 8)
Q = Math.floor(Math.random() * 6)
R = Math.floor(Math.random() * 6)
S = Math.floor(Math.random() * 6)
T = Math.floor(Math.random() * 6)
if (Q > 0) U = 0
else U = Math.floor(Math.random() * 6)
}

function schrijfveelterm()
{
if (typeoefening == 1) 
	{
	veelterm = ""
	if ((A*C) != 1)	veelterm += (A*C)
	if ((K+P) == 1) veelterm += "x"
	if ((K+P) > 1) veelterm += "x<sup>" + (K+P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+Q) == 1) veelterm += "z"
	if ((M+Q) > 1) veelterm += "z<sup>" + (M+Q) + "</sup>"
	if ((A*D) > 1) veelterm += "+" + (A*D)	
	if ((A*D) == 1) veelterm += "+"	
	if ((A*D) == -1) veelterm += "-"	
	if ((A*D) < -1) veelterm += A*D	
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+R) == 1) veelterm += "y"
	if ((L+R) > 1) veelterm += "y<sup>" + (L+R) + "</sup>"
	if ((M+U) == 1) veelterm += "z"
	if ((M+U) > 1) veelterm += "z<sup>" + (M+U) + "</sup>"
	}

if (typeoefening == 2) 
	{
	veelterm = ""
	if ((A*C) != 1)	veelterm += (A*C)
	if ((K+P) == 1) veelterm += "x"
	if ((K+P) > 1) veelterm += "x<sup>" + (K+P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+Q) == 1) veelterm += "z"
	if ((M+Q) > 1) veelterm += "z<sup>" + (M+Q) + "</sup>"
	if ((A*D) > 1) veelterm += "+" + (A*D)	
	if ((A*D) == 1) veelterm += "+"	
	if ((A*D) == -1) veelterm += "-"	
	if ((A*D) < -1) veelterm += A*D	
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+R) == 1) veelterm += "y"
	if ((L+R) > 1) veelterm += "y<sup>" + (L+R) + "</sup>"
	if ((M+S) == 1) veelterm += "z"
	if ((M+S) > 1) veelterm += "z<sup>" + (M+S) + "</sup>"
	if ((A*E) > 1) veelterm += "+" + (A*E)	
	if ((A*E) == 1) veelterm += "+"	
	if ((A*E) == -1) veelterm += "-"	
	if ((A*E) < -1) veelterm += A*E	
	if ((K+T) == 1) veelterm += "x"
	if ((K+T) > 1) veelterm += "x<sup>" + (K+T) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+U) == 1) veelterm += "z"
	if ((M+U) > 1) veelterm += "z<sup>" + (M+U) + "</sup>"
	}

if (typeoefening == 3)  
	{
	veelterm = ""
	if ((A*B*B) != 1)	veelterm += (A*B*B)
	if ((K+2*P) == 1) veelterm += "x"
	if ((K+2*P) > 1) veelterm += "x<sup>" + (K+2*P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+2*Q) == 1) veelterm += "z"
	if ((M+2*Q) > 1) veelterm += "z<sup>" + (M+2*Q) + "</sup>"
	veelterm += " - "
	if (((A*C*C) != 1) || ((K == 0) && ((L+2*R) == 0) && ((M+2*U) == 0))) veelterm += (A*C*C)
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+2*R) == 1) veelterm += "y"
	if ((L+2*R) > 1) veelterm += "y<sup>" + (L+2*R) + "</sup>"
	if ((M+2*U) == 1) veelterm += "z"
	if ((M+2*U) > 1) veelterm += "z<sup>" + (M+2*U) + "</sup>"
	}

if (typeoefening == 4)  
	{
	veelterm = ""
	if (B != 1) veelterm += (B*B)
	if ((2*P) == 1) veelterm += "x"
	if ((2*P) > 1) veelterm += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) veelterm += "z"
	if ((2*Q) > 1) veelterm += "z<sup>" + (2*Q) + "</sup>"
	veelterm += " - "
	if ((C != 1) || ((R == 0) && (U == 0))) veelterm += (C*C)	
	if ((2*R) == 1) veelterm += "y"
	if ((2*R) > 1) veelterm += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) veelterm += "z"
	if ((2*U) > 1) veelterm += "z<sup>" + (2*U) + "</sup>"
	}

if (typeoefening == 5)  
	{
	veelterm = "-"
	if ((C != 1) || ((R == 0) && (U == 0))) veelterm += (C*C)	
	if ((2*R) == 1) veelterm += "y"
	if ((2*R) > 1) veelterm += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) veelterm += "z"
	if ((2*U) > 1) veelterm += "z<sup>" + (2*U) + "</sup>"
	veelterm += " + "
	if (B != 1) veelterm += "" + (B*B)
	if ((2*P) == 1) veelterm += "x"
	if ((2*P) > 1) veelterm += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) veelterm += "z"
	if ((2*Q) > 1) veelterm += "z<sup>" + (2*Q) + "</sup>"
	}
	
if (typeoefening == 6)  
	{
	veelterm = ""
	if ((A*B*B*B*B) != 1)	veelterm += (A*B*B*B*B)
	if ((K+4*P) == 1) veelterm += "x"
	if ((K+4*P) > 1) veelterm += "x<sup>" + (K+4*P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+4*Q) == 1) veelterm += "z"
	if ((M+4*Q) > 1) veelterm += "z<sup>" + (M+4*Q) + "</sup>"
	veelterm += " - "
	if (((A*C*C*C*C) != 1) || ((K == 0) && ((L+4*R) == 0) && ((M+4*U) == 0)))  veelterm += (A*C*C*C*C)
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+4*R) == 1) veelterm += "y"
	if ((L+4*R) > 1) veelterm += "y<sup>" + (L+4*R) + "</sup>"
	if ((M+4*U) == 1) veelterm += "z"
	if ((M+4*U) > 1) veelterm += "z<sup>" + (M+4*U) + "</sup>"
	}

if (typeoefening == 7)  
	{
	veelterm = ""
	if ((A*B*B) != 1)	veelterm += (A*B*B)
	if ((K+2*P) == 1) veelterm += "x"
	if ((K+2*P) > 1) veelterm += "x<sup>" + (K+2*P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+2*Q) == 1) veelterm += "z"
	if ((M+2*Q) > 1) veelterm += "z<sup>" + (M+2*Q) + "</sup>"
	if (plusofmin == 1) veelterm += " + "
	if (plusofmin == 2) veelterm += " - "
	veelterm += (2*A*B*C)
	if ((K+P) == 1) veelterm += "x"
	if ((K+P) > 1) veelterm += "x<sup>" + (K+P) + "</sup>"
	if ((R+L) == 1) veelterm += "y"
	if ((R+L) > 1) veelterm += "y<sup>" + (R+L) + "</sup>"
	if ((M+Q+U) == 1) veelterm += "z"
	if ((M+Q+U) > 1) veelterm += "z<sup>" + (M+Q+U) + "</sup>"
	veelterm += " + "
	if (((A*C*C) != 1) || ((K == 0) && ((L+2*R) == 0) && ((M+2*U) == 0)))  veelterm += (A*C*C)
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+2*R) == 1) veelterm += "y"
	if ((L+2*R) > 1) veelterm += "y<sup>" + (L+2*R) + "</sup>"
	if ((M+2*U) == 1) veelterm += "z"
	if ((M+2*U) > 1) veelterm += "z<sup>" + (M+2*U) + "</sup>"
	}

if (typeoefening == 8)  
	{
	veelterm = ""
	if ((B*B) != 1)	veelterm += (B*B)
	if ((2*P) == 1) veelterm += "x"
	if ((2*P) > 1) veelterm += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) veelterm += "z"
	if ((2*Q) > 1) veelterm += "z<sup>" + (2*Q) + "</sup>"
	if (plusofmin == 1) veelterm += " + "
	if (plusofmin == 2) veelterm += " - "
	veelterm += (2*B*C)
	if (P == 1) veelterm += "x"
	if (P > 1) veelterm += "x<sup>" + P + "</sup>"
	if (R == 1) veelterm += "y"
	if (R > 1) veelterm += "y<sup>" + R + "</sup>"
	if ((Q+U) == 1) veelterm += "z"
	if ((Q+U) > 1) veelterm += "z<sup>" + (Q+U) + "</sup>"
	veelterm += " + "
	if (((C*C) != 1) || (((2*R) == 0) && ((2*U) == 0))) veelterm += (C*C)
	if ((2*R) == 1) veelterm += "y"
	if ((2*R) > 1) veelterm += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) veelterm += "z"
	if ((2*U) > 1) veelterm += "z<sup>" + (2*U) + "</sup>"
	}

if (typeoefening == 9)  
	{
	veelterm = "-"
	if ((A*B*B) != 1)	veelterm += (A*B*B)
	if ((K+2*P) == 1) veelterm += "x"
	if ((K+2*P) > 1) veelterm += "x<sup>" + (K+2*P) + "</sup>"
	if (L == 1) veelterm += "y"
	if (L > 1) veelterm += "y<sup>" + L + "</sup>"
	if ((M+2*Q) == 1) veelterm += "z"
	if ((M+2*Q) > 1) veelterm += "z<sup>" + (M+2*Q) + "</sup>"
	if (plusofmin == 1) veelterm += " - "
	if (plusofmin == 2) veelterm += " + "
	veelterm += (2*A*B*C)
	if ((K+P) == 1) veelterm += "x"
	if ((K+P) > 1) veelterm += "x<sup>" + (K+P) + "</sup>"
	if ((R+L) == 1) veelterm += "y"
	if ((R+L) > 1) veelterm += "y<sup>" + (R+L) + "</sup>"
	if ((M+Q+U) == 1) veelterm += "z"
	if ((M+Q+U) > 1) veelterm += "z<sup>" + (M+Q+U) + "</sup>"
	veelterm += " - "
	if (((A*C*C) != 1) || ((K == 0) && ((L+2*R) == 0) && ((M+2*U) == 0))) veelterm += (A*C*C)
	if (K == 1) veelterm += "x"
	if (K > 1) veelterm += "x<sup>" + K + "</sup>"
	if ((L+2*R) == 1) veelterm += "y"
	if ((L+2*R) > 1) veelterm += "y<sup>" + (L+2*R) + "</sup>"
	if ((M+2*U) == 1) veelterm += "z"
	if ((M+2*U) > 1) veelterm += "z<sup>" + (M+2*U) + "</sup>"
	}

if (typeoefening == 10)  
	{
	veelterm = "-"
	if ((B*B) != 1)	veelterm += (B*B)
	if ((2*P) == 1) veelterm += "x"
	if ((2*P) > 1) veelterm += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) veelterm += "z"
	if ((2*Q) > 1) veelterm += "z<sup>" + (2*Q) + "</sup>"
	if (plusofmin == 1) veelterm += " - "
	if (plusofmin == 2) veelterm += " + "
	veelterm += (2*B*C)
	if (P == 1) veelterm += "x"
	if (P > 1) veelterm += "x<sup>" + P + "</sup>"
	if (R == 1) veelterm += "y"
	if (R > 1) veelterm += "y<sup>" + R + "</sup>"
	if ((Q+U) == 1) veelterm += "z"
	if ((Q+U) > 1) veelterm += "z<sup>" + (Q+U) + "</sup>"
	veelterm += " - "
	if (((C*C) != 1) || (((2*R) == 0) && ((2*U) == 0))) veelterm += (C*C)
	if ((2*R) == 1) veelterm += "y"
	if ((2*R) > 1) veelterm += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) veelterm += "z"
	if ((2*U) > 1) veelterm += "z<sup>" + (2*U) + "</sup>"
	}

	

if (typevariatie == 2) 
	{
	veelterm = replace(veelterm,'x','a')
	veelterm = replace(veelterm,'y','b')
	veelterm = replace(veelterm,'z','c')
	}
veelterm = "<font size=+1>" + veelterm + "</font>"
}

function schrijfontbinding()
{
if (typeoefening == 1) 
	{
	ontbinding = " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (C != 1) ontbinding += C
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (D > 1) ontbinding += "+" + D	
	if (D == 1) ontbinding += "+"	
	if (D == -1) ontbinding += "-"	
	if (D < -1) ontbinding += D	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 2) 
	{
	ontbinding = " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (C != 1) ontbinding += C
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (D > 1) ontbinding += "+" + D	
	if (D == 1) ontbinding += "+"	
	if (D == -1) ontbinding += "-"	
	if (D < -1) ontbinding += D	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (S == 1) ontbinding += "z"
	if (S > 1) ontbinding += "z<sup>" + S + "</sup>"
	if (E > 1) ontbinding += "+" + E	
	if (E == 1) ontbinding += "+"	
	if (E == -1) ontbinding += "-"	
	if (E < -1) ontbinding += E	
	if (T == 1) ontbinding += "x"
	if (T > 1) ontbinding += "x<sup>" + T + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 3)  
	{
	ontbinding = " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += (B*B)
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C)	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")<br>"

	ontbinding += " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 4)  
	{
	ontbinding = " = ("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 5)  
	{
	ontbinding = " = "
	if (B != 1) ontbinding += (B*B)
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C)	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += "<br>"
	ontbinding += " = ("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 6)  
	{
	ontbinding = " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += (B*B*B*B)
	if ((4*P) == 1) ontbinding += "x"
	if ((4*P) > 1) ontbinding += "x<sup>" + (4*P) + "</sup>"
	if ((4*Q) == 1) ontbinding += "z"
	if ((4*Q) > 1) ontbinding += "z<sup>" + (4*Q) + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C*C*C)	
	if ((4*R) == 1) ontbinding += "y"
	if ((4*R) > 1) ontbinding += "y<sup>" + (4*R) + "</sup>"
	if ((4*U) == 1) ontbinding += "z"
	if ((4*U) > 1) ontbinding += "z<sup>" + (4*U) + "</sup>"
	ontbinding += ")<br>"
	ontbinding += " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += B*B
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C*C	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B*B
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C*C	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")<br>"
	ontbinding += " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += B*B
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C*C	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")"
	}

if (typeoefening == 7)  
	{
	ontbinding = " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += (B*B)
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	ontbinding += (2*B*C)
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if ((Q+U) == 1) ontbinding += "z"
	if ((Q+U) > 1) ontbinding += "z<sup>" + (Q+U) + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C)	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")<br>"

	ontbinding += " = "
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")<sup>2</sup>"
	}

if (typeoefening == 8)  
	{
	ontbinding = " = ("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")<sup>2</sup>"
	}

if (typeoefening == 9)  
	{
	ontbinding = " = -"
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += (B*B)
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	ontbinding += (2*B*C)
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if ((Q+U) == 1) ontbinding += "z"
	if ((Q+U) > 1) ontbinding += "z<sup>" + (Q+U) + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C)	
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")<br>"

	ontbinding += " = -"
	if (A > 1) ontbinding += A
	if (K == 1) ontbinding += "x"
	if (K > 1) ontbinding += "x<sup>" + K + "</sup>"
	if (L == 1) ontbinding += "y"
	if (L > 1) ontbinding += "y<sup>" + L + "</sup>"
	if (M == 1) ontbinding += "z"
	if (M > 1) ontbinding += "z<sup>" + M + "</sup>"
	ontbinding += "("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")<sup>2</sup>"
	}

if (typeoefening == 10)  
	{
	ontbinding = " = -("
	if ((B*B) != 1)	ontbinding += (B*B)
	if ((2*P) == 1) ontbinding += "x"
	if ((2*P) > 1) ontbinding += "x<sup>" + (2*P) + "</sup>"
	if ((2*Q) == 1) ontbinding += "z"
	if ((2*Q) > 1) ontbinding += "z<sup>" + (2*Q) + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	ontbinding += (2*B*C)
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if ((Q+U) == 1) ontbinding += "z"
	if ((Q+U) > 1) ontbinding += "z<sup>" + (Q+U) + "</sup>"
	ontbinding += " + "
	if ((C != 1) || ((R == 0) && (U == 0))) ontbinding += (C*C)
	if ((2*R) == 1) ontbinding += "y"
	if ((2*R) > 1) ontbinding += "y<sup>" + (2*R) + "</sup>"
	if ((2*U) == 1) ontbinding += "z"
	if ((2*U) > 1) ontbinding += "z<sup>" + (2*U) + "</sup>"
	ontbinding += ")<br>"
	ontbinding += " = -("
	if (B != 1) ontbinding += B
	if (P == 1) ontbinding += "x"
	if (P > 1) ontbinding += "x<sup>" + P + "</sup>"
	if (Q == 1) ontbinding += "z"
	if (Q > 1) ontbinding += "z<sup>" + Q + "</sup>"
	if (plusofmin == 1) ontbinding += " + "
	if (plusofmin == 2) ontbinding += " - "
	if ((C != 1) || ((R == 0) && (U == 0)))  ontbinding += C	
	if (R == 1) ontbinding += "y"
	if (R > 1) ontbinding += "y<sup>" + R + "</sup>"
	if (U == 1) ontbinding += "z"
	if (U > 1) ontbinding += "z<sup>" + U + "</sup>"
	ontbinding += ")<sup>2</sup>"
	}



if (typevariatie == 2) 
	{
	ontbinding = replace(ontbinding,'x','a')
	ontbinding = replace(ontbinding,'y','b')
	ontbinding = replace(ontbinding,'z','c')
	}
ontbinding = '<font color="#0000ff" size="+1">' + ontbinding + '</font>'
}

function kiesoef()
{
if (document.oif.afz.checked == true) 
	{
	oefteller[1] = "ja"
	oefteller[2] = "ja"
	}
else 	
	{
	oefteller[1] = "nee"
	oefteller[2] = "nee"
	}
if (document.oif.tweet.checked == true) 
	{
	oefteller[3] = "ja"
	oefteller[4] = "ja"
	oefteller[5] = "ja"
	oefteller[6] = "ja"
	}
else 	
	{
	oefteller[3] = "nee"
	oefteller[4] = "nee"
	oefteller[5] = "nee"
	oefteller[6] = "nee"
	}
if (document.oif.driet.checked == true) 
	{
	oefteller[7] = "ja"
	oefteller[8] = "ja"
	oefteller[9] = "ja"
	oefteller[10] = "ja"
	}
else 	
	{
	oefteller[7] = "nee"
	oefteller[8] = "nee"
	oefteller[9] = "nee"
	oefteller[10] = "nee"
	}
if (document.oif.viert.checked == true) 
	{
	oefteller[11] = "ja"
	oefteller[12] = "ja"
	oefteller[13] = "ja"
	oefteller[14] = "ja"
	}
else 	
	{
	oefteller[11] = "nee"
	oefteller[12] = "nee"
	oefteller[13] = "nee"
	oefteller[14] = "nee"
	}

if ((document.oif.afz.checked == false) && (document.oif.tweet.checked == false) && (document.oif.driet.checked == false) && (document.oif.viert.checked == false)) alert('Je moet wel op zijn minst één onderdeel selecteren om een oefening te kunnen maken.') 
else
	{
	while (oefteller[typeoefening] == "nee") typeoefening = Math.floor(Math.random() * 11) + 1
	}
typevariatie = Math.floor(Math.random() * 2) + 1
plusofmin = Math.floor(Math.random() * 2) + 1
}

function nieuwoef()
{
typeoefening = 0
kiesoef()
if (typeoefening != 0)
	{
	kiesgetallen()
	schrijfveelterm()
	schrijfontbinding()
	toonoef()
	}
}

function toonoef()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + veelterm + naoplossing)
}

function toonopl()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + veelterm + '</b></td><td><b>' + ontbinding + naoplossing)
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

