var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var opgave = ""
var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b>';
var naopgave = '</TD></TR></TABLE></b></body></html>';

var A = 0
var B = 0
var C = 0
var D = 0
var E = 0
var F = 0
var G = 0
var H = 0
var I = 0
var J = 0
var Etekst = 0
var Ftekst = 0
var Gtekst = 0
var Htekst = 0
var Itekst = 0
var Jtekst = 0
var X = 0
var Y = 0
var Z = 0
var GW = 0 

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function schrijfoefening()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + opgave + naopgave)
}


function kiesgetallen()
{
while (A == 0)
	{
	A = (Math.floor(Math.random() * 9 ) - 4);
	}
while (B == 0)
	{
	B = (Math.floor(Math.random() * 9 ) - 4);
	}
while (C == 0)
	{
	C = (Math.floor(Math.random() * 9 ) - 4);
	}
while (D == 0)
	{
	D = (Math.floor(Math.random() * 9 ) - 4);
	}
E = (Math.floor(Math.random() * 4 ) + 1);
F = (Math.floor(Math.random() * 4 ) + 1);
G = (Math.floor(Math.random() * 3 ) + 1);
H = (Math.floor(Math.random() * 3 ) + 1);
I = (Math.floor(Math.random() * 3 ) + 1);
J = (Math.floor(Math.random() * 4 ) + 1);
X = (Math.floor(Math.random() * 11 ) - 5);
Y = (Math.floor(Math.random() * 11 ) - 5);
Z = (Math.floor(Math.random() * 11 ) - 5);
Etekst = E
Ftekst = F
Gtekst = G
Htekst = H
Itekst = I
Jtekst = J
if (Etekst == 1) Etekst = ""
if (Ftekst == 1) Ftekst = ""
if (Gtekst == 1) Gtekst = ""
if (Htekst == 1) Htekst = ""
if (Itekst == 1) Itekst = ""
if (Jtekst == 1) Jtekst = ""

}

function toonoef()
{
document.er.txtX.value=X
document.er.txtY.value=Y
document.er.txtZ.value=Z

if (typeoefening == "1")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>y<sup>' + Ftekst + '</sup>'
	GW = A * Math.pow(X,E) * Math.pow(Y,F) 	
	document.er.txtZ.value=""
	}
if (typeoefening == "2")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>y<sup>' + Ftekst + '</sup>z<sup>' + Gtekst + '</sup>'
	GW = A * Math.pow(X,E) * Math.pow(Y,F) * Math.pow(Z,G) 
	}
if (typeoefening == "3")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'x<sup>' + Ftekst + '</sup>y<sup>' + Gtekst + '</sup>'
	GW = A * Math.pow(X,E) + B * Math.pow(X,F) * Math.pow(Y,G) 
	document.er.txtZ.value=""
	}
if (typeoefening == "4")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>y<sup>' + Ftekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'y<sup>' + Gtekst + '</sup>'
	GW = A * Math.pow(X,E) * Math.pow(Y,F) + B * Math.pow(Y,G) 
	document.er.txtZ.value=""
	}
if (typeoefening == "5")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'x<sup>' + Ftekst + '</sup>y<sup>' + Gtekst + '</sup>'
	if (C == -1) opgave = opgave + ' - '
	if (C == 1) opgave = opgave + ' + '
	if (C < -1) opgave = opgave + ' - ' + Math.abs(C)
	if (C > 1) opgave = opgave + ' + ' + Math.abs(C)
	opgave = opgave + 'y<sup>' + Htekst + '</sup>'
	GW = A * Math.pow(X,E) + B * Math.pow(X,F) * Math.pow(Y,G) + C * Math.pow(Y,H) 
	document.er.txtZ.value=""
	}
if (typeoefening == "6")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'x<sup>' + Ftekst + '</sup>y<sup>' + Gtekst + '</sup>'
	if (C == -1) opgave = opgave + ' - '
	if (C == 1) opgave = opgave + ' + '
	if (C < -1) opgave = opgave + ' - ' + Math.abs(C)
	if (C > 1) opgave = opgave + ' + ' + Math.abs(C)
	opgave = opgave + 'x<sup>' + Htekst + '</sup>z<sup>' + Itekst + '</sup>'
	if (D == -1) opgave = opgave + ' - '
	if (D == 1) opgave = opgave + ' + '
	if (D < -1) opgave = opgave + ' - ' + Math.abs(D)
	if (D > 1) opgave = opgave + ' + ' + Math.abs(D)
	opgave = opgave + 'z<sup>' + Jtekst + '</sup>'
	GW = A * Math.pow(X,E) + B * Math.pow(X,F) * Math.pow(Y,G) + C * Math.pow(X,H) * Math.pow(Z,I) + D * Math.pow(Z,J)  
	}
if (typeoefening == "7")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>y<sup>' + Ftekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'y<sup>' + Gtekst + '</sup>z<sup>' + Htekst + '</sup>'
	if (C == -1) opgave = opgave + ' - '
	if (C == 1) opgave = opgave + ' + '
	if (C < -1) opgave = opgave + ' - ' + Math.abs(C)
	if (C > 1) opgave = opgave + ' + ' + Math.abs(C)
	opgave = opgave + 'x<sup>' + Itekst + '</sup>z<sup>' + Jtekst + '</sup>'
	GW = A * Math.pow(X,E) * Math.pow(Y,F) + B * Math.pow(Y,G) * Math.pow(Z,H) + C * Math.pow(X,I) * Math.pow(Z,J)  
	}
if (typeoefening == "8")
	{
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A
	opgave = opgave + 'x<sup>' + Etekst + '</sup>y<sup>' + Ftekst + '</sup>z<sup>' + Gtekst + '</sup>'
	if (B == -1) opgave = opgave + ' - '
	if (B == 1) opgave = opgave + ' + '
	if (B < -1) opgave = opgave + ' - ' + Math.abs(B)
	if (B > 1) opgave = opgave + ' + ' + Math.abs(B)
	opgave = opgave + 'x<sup>' + Htekst + '</sup>y<sup>' + Itekst + '</sup>'
	if (C == -1) opgave = opgave + ' - '
	if (C == 1) opgave = opgave + ' + '
	if (C < -1) opgave = opgave + ' - ' + Math.abs(C)
	if (C > 1) opgave = opgave + ' + ' + Math.abs(C)
	opgave = opgave + 'z<sup>' + Jtekst + '</sup>'
	GW = A * Math.pow(X,E) * Math.pow(Y,F) * Math.pow(Z,G) + B * Math.pow(X,H) * Math.pow(Y,I) + C * Math.pow(Z,J)  
	}

schrijfoefening()
}

function nieuwoef()
{
aljuist = 0
document.er.txtX.value=""
document.er.txtY.value=""
document.er.txtZ.value=""
document.er.txtGW.value=""
A = 0
B = 0
C = 0
D = 0
opgave=""
kiesoef()
kiesgetallen()
toonoef()
document.er.opl.src = "../images/vraagteken.gif"
}


function controleer()
{
pogingenteller++;
var antwGW = document.er.txtGW.value

if (antwGW == "") alert('Geef eerst je oplossing in.')
else
{
if (antwGW == GW)  
	{
	document.er.opl.src = "../images/goed.gif"
	oplossingenteller++;
	aljuist = 1
	}
else document.er.opl.src = "../images/fout.gif"

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.er.aantaljuist.value = oplossingenteller
	document.er.aantalpogingen.value = pogingenteller
	document.er.percentage.value = procent		
}
}

function controle()
{
if (aljuist == 1) alert('Kies eerst een nieuwe oefening a.u.b.')
else controleer()
}
