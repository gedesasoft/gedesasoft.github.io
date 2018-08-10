var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var M = 0
var Q = 0
var A = 0
var B = 0
var C = 0
var D = 0
var vgl = ""
var opgave = ""
var tekst = ""
var Ax = ""
var Ay = ""
var Bx = ""
var By = ""

function kiesgetallen()
{
D = 0
while (D == 0) D = Math.floor(Math.random() * 9 ) - 4

typeoefening = Math.floor(Math.random() * 16 ) + 1

if (typeoefening < 7)
	{
	M = 0
	while (M == 0) M = (Math.floor(Math.random() * 17 ) - 8) / 2
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	vgl = "y = "
	if (M == 1) vgl += "x"
	if (M == -1) vgl += "-x"
	if (Math.abs(M) != 1) vgl += "" + M + "x"
	if (Q > 0) vgl += " + " + Q
	if (Q < 0) vgl += " - " + Math.abs(Q)
	}
if (typeoefening == 7)
	{
	M = 0
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	vgl = "y = " + Q
	}

if (typeoefening == 8)
	{
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	vgl = "x = " + Q
	}

if (typeoefening > 10)
	{
	M = 0
	while (M == 0) M = (Math.floor(Math.random() * 17 ) - 8) / 2
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	A = M*D
	B = -D
	C = Q * D
	if (A == 1) vgl = "x"
	if (A == -1) vgl = "-x"
	if (Math.abs(A) != 1) vgl = "" + A + "x"
	if (B == 1) vgl += " + y"
	if (B == -1) vgl += " - y"
	if ((B > 0) && (B != 1)) vgl += " + " + B + "y"
	if ((B < 0) && (B != -1)) vgl += " - " + Math.abs(B) + "y"
	if (C > 0) vgl += " + " + C
	if (C < 0) vgl += " - " + Math.abs(C)
	vgl += " = 0"
	}
if (typeoefening == 10)
	{
	M = 0
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	C = (0 - D) * Q
	B = D 
	if (B == 1) vgl = "y"
	if (B == -1) vgl = "-y"
	if (Math.abs(B) != 1) vgl = "" + B + "y"
	if (C > 0) vgl += " + " + C
	if (C < 0) vgl += " - " + Math.abs(C)
	vgl += " = 0"
	}

if (typeoefening == 9)
	{
	Q = (Math.floor(Math.random() * 17 ) - 8) / 2
	C = (0 - D) * Q
	A = D 
	if (A == 1) vgl = "x"
	if (A == -1) vgl = "-x"
	if (Math.abs(A) != 1) vgl = "" + A + "x"
	if (C > 0) vgl += " + " + C
	if (C < 0) vgl += " - " + Math.abs(C)
	vgl += " = 0"

	}

if (vgl.substring(0,3) == " + ") vgl = vgl.substring(3,100)
if (vgl.substring(0,3) == " - ") vgl = "-" + vgl.substring(3,100)

opgave = '<font size="+1" font color="#ff0000">' + vgl + '</font>'
}


function nieuwoef()
{
kiesgetallen()
document.all.txtopgave.innerHTML = opgave
tekst = "id=t type=numeric value='0' decimals='0' incr='1' inf='0' sup='1' name=Toon rechte region=north"
apprechte.replaceControl("11",tekst)

if ((typeoefening > 7) && (typeoefening < 10))
	{
	tekst = "type=equation expresion='x= " + Q + " ' colour=green width=3 visible=no draw-if='t == 1'"
	apprechte.replaceGraph("2",tekst)
	}
else
	{
	tekst = "type=equation expresion='y= " + M + "*x+" + Q + "' colour=green visible=no width=3 draw-if='t == 1'"
	apprechte.replaceGraph("2",tekst)
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