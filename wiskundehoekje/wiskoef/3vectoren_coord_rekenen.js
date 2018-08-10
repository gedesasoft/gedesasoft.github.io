var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var antwX = 0
var antwY = 0

var vect1 = 0
var vect2 = 0
var vect3 = 0
var vect4 = 0

var Xvect = new Array(4)
Xvect[0] = 0
Xvect[1] = 0
Xvect[2] = 0
Xvect[3] = 0

var Yvect = new Array(4)
Yvect[0] = 0
Yvect[1] = 0
Yvect[2] = 0
Yvect[3] = 0

var xOpl = 0
var yOpl = 0

var D = 0
var E = 0
var F = 0
var G = 0
var H = 0

var txtD = ""
var txtE = ""
var txtF = ""
var txtG = ""
var txtH = ""

var imgvect1 = ""
var imgvect2 = ""
var imgvect3 = ""
var imgvect4 = ""

 
var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b><FORM NAME="vect"><table><tr><td><b>Geg.:</b></td><td><b><img src="images/3vector_A.gif" border=0 width=13 height=17>(<input type="text" name="txt_xA" size=3 maxlength=5 onFocus="blur()">,<input type="text" name="txt_yA" size=3 maxlength=5 onFocus="blur()">) ; <img src="images/3vector_B.gif" border=0 width=13 height=17>(<input type="text" name="txt_xB" size=3 maxlength=5 onFocus="blur()">,<input type="text" name="txt_yB" size=3 maxlength=5 onFocus="blur()">) ; <img src="images/3vector_C.gif" border=0 width=13 height=17>(<input type="text" name="txt_xC" size=3 maxlength=5 onFocus="blur()">,<input type="text" name="txt_yC" size=3 maxlength=5 onFocus="blur()">)</b></td></tr><tr height="15"><td></td><td></td></tr><tr><td><b>Gevr.:</b></td><td><b>co';

var naopgave = ' = (<input type="text" name="txt_xOpl" size=3 maxlength=5>,<input type="text" name="txt_yOpl" size=3 maxlength=5>)</b></td></tr></table></FORM></b></TD></TR></TABLE></body></html>';

 

function schrijfoefening()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + opgave + naopgave)
}

function kiesgetallen()
{
Xvect[1] = Math.floor(Math.random() * 20 ) - 9;
Xvect[2] = Math.floor(Math.random() * 20 ) - 9;
Xvect[3] = Math.floor(Math.random() * 20 ) - 9;
Yvect[1] = Math.floor(Math.random() * 20 ) - 9;
Yvect[2] = Math.floor(Math.random() * 20 ) - 9;
Yvect[3] = Math.floor(Math.random() * 20 ) - 9;

vect1 = Math.floor(Math.random() * 3 ) + 1;
vect2 = vect1
while (vect2 == vect1) vect2 = Math.floor(Math.random() * 3 ) + 1;
vect3 = vect2
while ((vect3 == vect2) || (vect3 == vect1)) vect3 = Math.floor(Math.random() * 3 ) + 1;
vect4 = Math.floor(Math.random() * 3 ) + 1;
D = 0
E = 0
F = 0
G = 0
H = 0
while (D == 0) D = (Math.floor(Math.random() * 15 ) - 7);
while (E == 0) E = (Math.floor(Math.random() * 15 ) - 7);
while (F == 0) F = (Math.floor(Math.random() * 15 ) - 7);
while (G == 0) G = (Math.floor(Math.random() * 15 ) - 7);
while (H == 0) H = (Math.floor(Math.random() * 15 ) - 7);
}

function bepaalbouwstenen()
{
if (vect1 == "1") imgvect1 = '<img src="images/3vector_A.gif" border=0 width=13 height=17>' 
if (vect1 == "2") imgvect1 = '<img src="images/3vector_B.gif" border=0 width=13 height=17>' 
if (vect1 == "3") imgvect1 = '<img src="images/3vector_C.gif" border=0 width=13 height=17>' 
if (vect2 == "1") imgvect2 = '<img src="images/3vector_A.gif" border=0 width=13 height=17>' 
if (vect2 == "2") imgvect2 = '<img src="images/3vector_B.gif" border=0 width=13 height=17>' 
if (vect2 == "3") imgvect2 = '<img src="images/3vector_C.gif" border=0 width=13 height=17>' 
if (vect3 == "1") imgvect3 = '<img src="images/3vector_A.gif" border=0 width=13 height=17>' 
if (vect3 == "2") imgvect3 = '<img src="images/3vector_B.gif" border=0 width=13 height=17>' 
if (vect3 == "3") imgvect3 = '<img src="images/3vector_C.gif" border=0 width=13 height=17>' 
if (vect4 == "1") imgvect4 = '<img src="images/3vector_A.gif" border=0 width=13 height=17>' 
if (vect4 == "2") imgvect4 = '<img src="images/3vector_B.gif" border=0 width=13 height=17>' 
if (vect4 == "3") imgvect4 = '<img src="images/3vector_C.gif" border=0 width=13 height=17>' 

if (D == -1) txtD = "-"
if (D == 1) txtD = ""
if (D < -1) txtD = "" + D
if (D > 1) txtD = "" + D

if (E == -1) txtE = "-"
if (E == 1) txtE = "+"
if (E < -1) txtE = "" + E
if (E > 1) txtE = "+" + E

if (F == -1) txtF = "-"
if (F == 1) txtF = "+"
if (F < -1) txtF = "" + F
if (F > 1) txtF = "+" + F

if (G == -1) txtG = "-"
if (G == 1) txtG = "+"
if (G < -1) txtG = "" + G
if (G > 1) txtG = "+" + G

if (H == -1) txtH = "-"
if (H == 1) txtH = ""
if (H < -1) txtH = "" + H
if (H > 1) txtH = "" + H
}

function toonoef()
{
opgave = '';

if (typeoefening == 1)
	{
	opgave = imgvect1 + '+' + imgvect2
	xOpl = Xvect[vect1] + Xvect[vect2] 
	yOpl = Yvect[vect1] + Yvect[vect2] 
	}

if (typeoefening == 2)
	{
	opgave = imgvect1 + '-' + imgvect2
	xOpl = Xvect[vect1] - Xvect[vect2] 
	yOpl = Yvect[vect1] - Yvect[vect2] 
	}

if (typeoefening == 3)
	{
	opgave = txtD + imgvect1 + txtE + imgvect2
	xOpl = D * Xvect[vect1] + E * Xvect[vect2] 
	yOpl = D * Yvect[vect1] + E * Yvect[vect2] 
	}

if (typeoefening == 4)
	{
	opgave = txtD + imgvect1 + txtE + imgvect2 + txtF + imgvect3
	xOpl = D * Xvect[vect1] + E * Xvect[vect2] + F * Xvect[vect3] 
	yOpl = D * Yvect[vect1] + E * Yvect[vect2] + F * Yvect[vect3] 
	}

if (typeoefening == 5)
	{
	opgave = txtD + "(" + txtH + imgvect1 + txtE + imgvect2 + ")" + txtF + imgvect3
	xOpl = D * H * Xvect[vect1] + D * E * Xvect[vect2] + F * Xvect[vect3] 
	yOpl = D * H * Yvect[vect1] + D * E * Yvect[vect2] + F * Yvect[vect3] 
	}

if (typeoefening == 6)
	{
	opgave = txtD + imgvect1 + txtE + imgvect2 + txtF + imgvect3 + txtG + imgvect4
	xOpl = D * Xvect[vect1] + E * Xvect[vect2] + F * Xvect[vect3] + G * Xvect[vect4] 
	yOpl = D * Yvect[vect1] + E * Yvect[vect2] + F * Yvect[vect3] + G * Yvect[vect4]
	}

if (typeoefening == 7)
	{
	opgave = txtD + "(" + imgvect1 + txtE + imgvect2 + ")" + txtF + "(" + txtH + imgvect3 + txtG + imgvect4 +")"
	xOpl = D * Xvect[vect1] + D * E * Xvect[vect2] + F * H * Xvect[vect3] + F * G * Xvect[vect4] 
	yOpl = D * Yvect[vect1] + D * E * Yvect[vect2] + F * H * Yvect[vect3] + F * G * Yvect[vect4] 
	}

if (typeoefening == 8)
	{
	opgave = txtD + "(" + txtH + imgvect1 + txtE + imgvect2 + "+" + imgvect3 + ")" + txtF + "(" + txtD + imgvect3 + txtG + imgvect4 +")"
	xOpl = D * H * Xvect[vect1] + D * E * Xvect[vect2] + D * Xvect[vect3] + F * D * Xvect[vect3] + F * G * Xvect[vect4]
	yOpl = D * H * Yvect[vect1] + D * E * Yvect[vect2] + D * Yvect[vect3] + F * D * Yvect[vect3] + F * G * Yvect[vect4]
	}

if (typeoefening == 9)
	{
	opgave = imgvect1 + '+' + imgvect2 + '+' + imgvect3
	xOpl = Xvect[vect1] + Xvect[vect2] + Xvect[vect3] 
	yOpl = Yvect[vect1] + Yvect[vect2] + Yvect[vect3]  
	}

if (typeoefening == 10)
	{
	opgave = imgvect1 + '+' + imgvect2 + '-' + imgvect3
	xOpl = Xvect[vect1] + Xvect[vect2] - Xvect[vect3] 
	yOpl = Yvect[vect1] + Yvect[vect2] - Yvect[vect3]  
	}

if (typeoefening == 11)
	{
	opgave = imgvect1 + '-' + imgvect2 + '+' + imgvect3
	xOpl = Xvect[vect1] - Xvect[vect2] + Xvect[vect3] 
	yOpl = Yvect[vect1] - Yvect[vect2] + Yvect[vect3]  
	}
	
if (opgave.indexOf('(') == -1) opgave = "(" + opgave + ")"
else opgave = "[" + opgave + "]"
opgave = replace(opgave,"+"," <font size=+1>+</font> ")
opgave = replace(opgave,"-"," <font size=+2>-</font> ")
schrijfoefening()
	
parent.oefening.document.vect.txt_xA.value = Xvect[1]
parent.oefening.document.vect.txt_yA.value = Yvect[1]
parent.oefening.document.vect.txt_xB.value = Xvect[2]
parent.oefening.document.vect.txt_yB.value = Yvect[2]
parent.oefening.document.vect.txt_xC.value = Xvect[3]
parent.oefening.document.vect.txt_yC.value = Yvect[3]

// parent.oefening.document.vect.txt_xOpl.value = xOpl
// parent.oefening.document.vect.txt_yOpl.value = yOpl

}

function nieuwoef()
{
	aljuist = 0
	typeoefening = Math.floor(Math.random() * 11) + 1	
	kiesgetallen()
	bepaalbouwstenen()
	toonoef()
	document.er.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
antwX = parent.oefening.document.vect.txt_xOpl.value
antwY = parent.oefening.document.vect.txt_yOpl.value

	if ((antwX != "") && (antwY != ""))
		{
		pogingenteller++;
		if ((antwX == xOpl) && (antwY == yOpl))
			{
			document.er.opl.src = "../images/goed.gif"
			oplossingenteller++;
			aljuist = 1
			}
		else 
			{
			if ((antwX == xOpl) && (antwY != yOpl)) alert('De x-coördinaat is juist, maar de y-coördinaat niet.')
			if ((antwY == yOpl) && (antwX != xOpl)) alert('De y-coördinaat is juist, maar de x-coördinaat niet.')
			if ((antwX != xOpl) && (antwY != yOpl)) alert('Beide coördinaten zijn fout.')

			document.er.opl.src = "../images/fout.gif"	
			}
		} 
	else alert('Vul beide coördinaten in voor je op "Controle" drukt!')
	
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
