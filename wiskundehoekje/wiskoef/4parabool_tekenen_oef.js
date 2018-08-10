var a = 0
var alfa = 0
var beta = 0
var opgave = ""
var tekst = ""

function kiesgetallen()
{
a = 0
while (a == 0) a = Math.floor(Math.random() * 7 ) - 3

alfa = Math.floor(Math.random() * 9 ) - 4
beta = Math.floor(Math.random() * 9 ) - 4

	vgl = "f(x) = "
	if (a == 1) vgl += ""
	if (a == -1) vgl += "-"
	if (Math.abs(a) != 1) vgl += "" + a

	if (alfa != 0) vgl += "("
	vgl += "x"
	if (alfa > 0) vgl += " - " + alfa
	if (alfa < 0) vgl += " + " + Math.abs(alfa)
	if (alfa != 0) vgl += ")"

	vgl += "<sup>2</sup>"

	if (beta > 0) vgl += " + " + beta
	if (beta < 0) vgl += " - " + Math.abs(beta)

opgave = '<font size="+1" font color="#ff0000">' + vgl + '</font>'
}


function nieuwoef()
{
kiesgetallen()
document.all.txtopgave.innerHTML = opgave
tekst = "id=t type=numeric value='0' decimals='0' incr='1' inf='0' sup='1' name=Toon parabool region=north"
apprechte.replaceControl("7",tekst)
tekst = "id=opl_a expresion='" + a + "' constant=yes evaluate=only-once"
apprechte.replaceAux("0",tekst)
tekst = "id=opl_alfa expresion='" + alfa + "' constant=yes evaluate=only-once"
apprechte.replaceAux("1",tekst)
tekst = "id=opl_beta expresion='" + beta + "' constant=yes evaluate=only-once"
apprechte.replaceAux("2",tekst)
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