var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var geprobeerd = 0
var factor = ""
var superscript = 0
var bijgeschreven = 0
var resultaat = ""
var oplossing1 = ""
var oplossing2 = ""
var opgave = ""
var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b>';
var naresultaat = '</TD></TR></TABLE></b></body></html>';

var A = 0
var B = 0
var K = 0
var L = 0
var M = 0
var N = 0
var Akw = 0
var Bkw = 0
var tweeK = 0
var tweeL = 0
var tweeM = 0
var tweeN = 0
var tweeAB = 0
var KplusM = 0

var nrteken = 0
var teken = ""
var tegenteken = ""
 
function voegtoe(waarde)
{
resultaat = resultaat + waarde
bijgeschreven = 1
schrijfoefening()
}

function alleswissen()
{
resultaat = ''
document.supaanofuit.src = "images/sup_uit.gif"
bijgeschreven = 0
superscript = 0
schrijfoefening()
}

function schrijfoefening()
{
parent.oefening.document.open()
parent.oefening.document.write(vooropgave + opgave + resultaat + naresultaat)
}

function wisselsuperscript()
{
if (superscript == 0) 
	{
	superscript = 1
	document.supaanofuit.src = "images/sup_aan.gif"
	if (bijgeschreven == 1)
		{
		resultaat = resultaat + '<sup>'
		bijgeschreven = 0
		}
	}
else 
	{
	superscript = 0
	document.supaanofuit.src = "images/sup_uit.gif"
	if (bijgeschreven == 1)
		{
		resultaat = resultaat + '</sup>'
		bijgeschreven = 0
		}
	}
}

function resetvariabelen()
{
nrteken = 0
teken = ''
tegenteken = ''
A = 0
B = 0
K = 0
L = 0
M = 0
Akw = 0
Bkw = 0
tweeK = 0
tweeL = 0
tweeM = 0
tweeAB = 0
KplusM = 0
superscript = 0
bijgeschreven = 0
resultaat = ""
oplossing1 = ""
oplossing2 = ""
opgave = ""
}

function kiesteken()
{
nrteken = Math.floor(Math.random() * 2) + 1;
if (nrteken == 1) 
	{
	teken = '-'
	tegenteken = '+'
	}
if (nrteken == 2)
	{
	teken = '+'
	tegenteken = '-'
	}
}

function kiesgetallen()
{
A = Math.floor(Math.random() * 9) + 1;
B = Math.floor(Math.random() * 9) + 2;

K = Math.floor(Math.random() * 4) + 2;
L = Math.floor(Math.random() * 4) + 2;
M = Math.floor(Math.random() * 4) + 2;

if ((typeoefening == 5) || (typeoefening == 9)) K = 2 + Math.floor(Math.random() * 4) + 3;
if ((typeoefening == 12) || (typeoefening == 14)) K = 2 * M + Math.floor(Math.random() * 4) + 1;
if ((typeoefening == 13) && ((K + M)%2 == 0)) K = K + 1

Akw = A*A
Bkw = B*B
tweeK = 2*K 
tweeL = 2*L 
tweeM = 2*M 
tweeAB = 2*A*B
KplusM = K + M

}


function toonoef()
{
opgave = ''
oplossing1 = ''
oplossing3 = ''
verbetering = ''

if (typeoefening == "1")
	{
	if (A == 1) opgave += 'x<sup>2</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>2</sup>' + teken
	opgave += 2*A*B + 'x'
		 
	oplossing1 += '+' + Bkw
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x' + teken + B + ')<sup>2</sup>'
	if (A != 1) verbetering += A + 'x' + teken + B + ')<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "2")
	{
	if (A == 1) opgave += 'x<sup>2</sup>+' + Bkw
	if (A != 1) opgave += Akw + 'x<sup>2</sup>+' + Bkw
	
	oplossing1 += teken + tweeAB +'x'
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 += tegenteken + tweeAB +'x'
	oplossing4 = oplossing3 + '<sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x' + teken + B + ')<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (x' + tegenteken + B + ')<sup>2</sup>'
	if (A != 1) verbetering += A + 'x' + teken + B + ')<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (' + A + 'x' + tegenteken + B + ')<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "3")
	{
	if (A == 1) opgave += 'x<sup>2</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>2</sup>' + teken
	opgave += 2*A*B + 'xy'
		 
	oplossing1 += '+' + Bkw + 'y<sup>2'
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x' + teken + B + 'y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x' + teken + B + 'y)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "4")
	{
	if (A == 1) opgave += 'x<sup>2</sup>+' + Bkw + 'y<sup>2</sup>'
	if (A != 1) opgave += Akw + 'x<sup>2</sup>+' + Bkw + 'y<sup>2</sup>'
	
	oplossing1 += teken + tweeAB +'xy'
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 += tegenteken + tweeAB +'xy'
	oplossing4 = oplossing3 + '<sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x' + teken + B + 'y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (x' + tegenteken + B + 'y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x' + teken + B + 'y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (' + A + 'x' + tegenteken + B + 'y)<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "5")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + K + '</sup>'
		 
	oplossing1 += '+' + Bkw
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "6")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>+' + Bkw
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>+' + Bkw
	
	oplossing1 += teken + tweeAB +'x<sup>' + K
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 += tegenteken + tweeAB +'x<sup>' + K
	oplossing4 = oplossing3 + '</sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (x<sup>' + K + '</sup>' + tegenteken + B + ')<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (' + A + 'x<sup>' + K + '</sup>' + tegenteken + B + ')<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "7")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + K + '</sup>y'
		 
	oplossing1 += '+' + Bkw + 'y<sup>2'
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'y)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "8")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>+' + Bkw + 'y<sup>2</sup>'
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>+' + Bkw + 'y<sup>2</sup>'
	
	oplossing1 += teken + tweeAB +'x<sup>' + K + '</sup>y'
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 += tegenteken + tweeAB +'x<sup>' + K + '</sup>y'
	oplossing4 = oplossing3 + '<sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (x<sup>' + K + '</sup>' + tegenteken + B + 'y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (' + A + 'x<sup>' + K + '</sup>' + tegenteken + B + 'y)<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "9")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + K + '</sup>y<sup>' + L + '</sup>'
		 
	oplossing1 += '+' + Bkw + 'y<sup>' + tweeL
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "10")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>+' + Bkw + 'y<sup>' + tweeL + '</sup>'
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>+' + Bkw + 'y<sup>' + tweeL + '</sup>'
	
	oplossing1 += teken + tweeAB +'x<sup>' + K + '</sup>y<sup>' + L
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 += tegenteken + tweeAB +'x<sup>' + K + '</sup>y<sup>' + L
	oplossing4 = oplossing3 + '</sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (x<sup>' + K + '</sup>' + tegenteken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (' + A + 'x<sup>' + K + '</sup>' + tegenteken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "11")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + KplusM + '</sup>y'
		 
	oplossing1 += '+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>2'
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "12")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>2</sup>'
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>2</sup>'
	
	oplossing1 += teken + tweeAB +'x<sup>' + KplusM + '</sup>y'
	oplossing2 = oplossing1 + '<sup>'
	oplossing3 += tegenteken + tweeAB +'x<sup>' + KplusM + '</sup>y'
	oplossing4 = oplossing3 + '<sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing1 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (x<sup>' + K + '</sup>' + tegenteken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing3 + '</font>' + ' = (' + A + 'x<sup>' + K + '</sup>' + tegenteken + B + 'x<sup>' + M + '</sup>y)<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "13")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + KplusM + '</sup>y<sup>' + L + '</sup>'
		 
	oplossing1 += '+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>' + tweeL
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "14")
	{
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>' + tweeL + '</sup>'
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>' + tweeL + '</sup>'
	
	oplossing1 += teken + tweeAB +'x<sup>' + KplusM + '</sup>y<sup>' + L
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 += tegenteken + tweeAB +'x<sup>' + KplusM + '</sup>y<sup>' + L
	oplossing4 = oplossing3 + '</sup>'
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (x<sup>' + K + '</sup>' + tegenteken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup> of ' + opgave + '<font color="#009900">' + oplossing4 + '</font>' + ' = (' + A + 'x<sup>' + K + '</sup>' + tegenteken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'

	schrijfoefening()
	}

if (typeoefening == "15")
	{
	A = 2
	B = Math.pow((Math.floor(Math.random() * 4) + 2),2);
	Akw = A * A
	Bkw = B * B
	K = 2 * Math.floor(Math.random() * 7) + 2
	tweeK = 2 * K
	teken = '-'	
	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + K + '</sup>'
		 
	oplossing1 += '+' + Bkw
	oplossing2 = oplossing1
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + ')<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "16")
	{
	A = Math.pow((Math.floor(Math.random() * 4) + 2),2);
	B = 8;
	Akw = A * A
	Bkw = B * B
	K = 2 * Math.floor(Math.random() * 7) + 2
	L = 2 * Math.floor(Math.random() * 7) + 2
	tweeK = 2 * K
	tweeL = 2 * L
	teken = '-'	

	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + K + '</sup>y<sup>' + L + '</sup>'
		 
	oplossing1 += '+' + Bkw + 'y<sup>' + tweeL
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'y<sup>' + L + '</sup>)<sup>2</sup>'
		
	schrijfoefening()
	}

if (typeoefening == "17")
	{
	A = Math.pow((Math.floor(Math.random() * 4) + 2),2);
	B = 2 * Math.pow((Math.floor(Math.random() * 3) + 1),2);
	Akw = A * A
	Bkw = B * B
	K = Math.floor(Math.random() * 9) + 2
	L = 2 * Math.floor(Math.random() * 7) + 2
	M = K + 1
	while ((K+M)%2 == 1) M = Math.floor(Math.random() * 9) + 2
	tweeK = 2 * K
	tweeL = 2 * L
	tweeM = 2 * M
	KplusM = K + M
	teken = '-'	

	if (A == 1) opgave += 'x<sup>' + tweeK + '</sup>' + teken
	if (A != 1) opgave += Akw + 'x<sup>' + tweeK + '</sup>' + teken
	opgave += 2*A*B + 'x<sup>' + KplusM + '</sup>y<sup>' + L + '</sup>'
		 
	oplossing1 += '+' + Bkw + 'x<sup>' + tweeM + '</sup>y<sup>' + tweeL
	oplossing2 = oplossing1 + '</sup>'
	oplossing3 = oplossing1
	oplossing4 = oplossing1
	
	verbetering += opgave + '<font color="#009900">' + oplossing2 + '</font>' + ' = ('
	if (A == 1) verbetering += 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'
	if (A != 1) verbetering += A + 'x<sup>' + K + '</sup>' + teken + B + 'x<sup>' + M + '</sup>y<sup>' + L + '</sup>)<sup>2</sup>'
		
	schrijfoefening()
	}


}

function nieuwoef()
{
factor = document.er.kiesoef.options[document.er.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	if (factor == "makk") typeoefening = Math.floor(Math.random() * 8) + 1
	if (factor == "moei") typeoefening = Math.floor(Math.random() * 9) + 9
	document.supaanofuit.src = "images/sup_uit.gif"
	resetvariabelen()
	geprobeerd = 0
	kiesgetallen()
	kiesteken()
	toonoef()
	document.er.opl.src = "../images/vraagteken.gif"
	}
}

function controle()
{
pogingenteller++;
if (resultaat != "")
{
if (geprobeerd == 0)
{
geprobeerd = 1
if ((resultaat == oplossing1) || (resultaat == oplossing2) || (resultaat == oplossing3) || (resultaat == oplossing4))  
	{
	document.er.opl.src = "../images/goed.gif"
	oplossingenteller++;
	resultaat = '<font color="#009900">' + resultaat + '</font>'
	schrijfoefening()
	}
else 
	{
	document.er.opl.src = "../images/fout.gif"
	if (superscript == 0) resultaat = '<font color="#ff0000">' + resultaat + '</font><br>' + verbetering
	if (superscript == 1) resultaat = '<font color="#ff0000">' + resultaat + '</font></sup><br>' + verbetering
	if (typeoefening > 14) alert('Er stond een minteken in de uitdrukking, dus de tweede term was het dubbel product.')
	schrijfoefening()
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.er.aantaljuist.value = oplossingenteller
	document.er.aantalpogingen.value = pogingenteller
	document.er.percentage.value = procent		
}
else alert('Fijn dat je deze oefening al eens probeerde, kies nu een nieuwe oefening.')
}
else alert('Gebruik de knoppen om je antwoord in te geven en klik dan pas op "Controle".')
}
