var antwoordjuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var verbetering = ""

var i = 0
var opgave = 0
var opl = ""

var A = 0
var B = 0
var exp = 0

function kiesgetallen()
{
typeoefening = Math.floor(Math.random() * 4) + 1;

exp = Math.floor(Math.random() * 3) + 1;
A = Math.pow(10,exp) * (Math.floor(Math.random() * 10) + 1);
B = Math.floor(Math.random() * 7) + 1;

if (typeoefening == 1)
	{
	opl = A*A - B*B
	opgave = (A - B) + " . " + (A + B)
	verbetering = "  " + opgave
	verbetering += "\n= (" + A + " - " + B + ") . (" + A + " + " + B + ")"
	verbetering += "\n= " + A + "² - " + B + "²"
	verbetering += "\n= " + A*A + " - " + B*B
	verbetering += "\n= " + opl
	} 

if (typeoefening == 2)
	{
	opl = A*A - B*B
	opgave = (A + B) + " . " + (A - B)
	verbetering = "  " + opgave
	verbetering += "\n= (" + A + " + " + B + ") . (" + A + " - " + B + ")"
	verbetering += "\n= " + A + "² - " + B + "²"
	verbetering += "\n= " + A*A + " - " + B*B
	verbetering += "\n= " + opl
	} 

if (typeoefening == 3)
	{
	opl = A*A + 2*A*B + B*B
	opgave = (A + B) + "²"
	verbetering = "  " + opgave
	verbetering += "\n= (" + A + " + " + B + ")²"
	verbetering += "\n= " + A + "² + 2 . " + A + " . " + B + " + " + B + "²"
	verbetering += "\n= " + A*A + " + " + 2*A*B + " + " + B*B
	verbetering += "\n= " + opl
	} 

if (typeoefening == 4)
	{
	opl = A*A - 2*A*B + B*B
	opgave = (A - B) + "²"
	verbetering = "  " + opgave
	verbetering += "\n= (" + A + " - " + B + ")²"
	verbetering += "\n= " + A + "² - 2 . " + A + " . " + B + " + " + B + "²"
	verbetering += "\n= " + A*A + " - " + 2*A*B + " + " + B*B
	verbetering += "\n= " + opl
	} 
}
	
function toonoef()
{
mp.txtantw.value = "";
mp.txtgetal.value = opgave
mp.txtantw.focus()
}

function toonopl()
{
antwoordjuist = 1
document.all.oplossing.style.display = ""
mp.txtopl.value = verbetering
}

function nieuwoef()
{
antwoordjuist = 0
kiesgetallen()
toonoef()
document.mp.opl.src = "../images/vraagteken.gif"
document.all.oplossing.style.display = "none"
document.all.knopoplossing.style.display = "none"
}

function controleer()
{
mp.txtantw.value = replace(mp.txtantw.value," ","")

var antw = mp.txtantw.value; 

if (antw == "") 
alert ('Je hebt je antwoord nog niet volledig ingevuld!')
else
{
if (antwoordjuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
{
pogingenteller++;
if (antw == opl) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.mp.opl.src = "../images/goed.gif";
		}
	else 
		{
		document.mp.opl.src = "../images/fout.gif"
		document.all.knopoplossing.style.display = ""
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.mp.aantaljuist.value = oplossingenteller
	document.mp.aantalpogingen.value = pogingenteller
	document.mp.percentage.value = procent		
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
