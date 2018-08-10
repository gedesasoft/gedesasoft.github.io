var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
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
var C = 0
var D = 0
var E = 0
var AtotE = 0
var BmaalE = 0
var CmaalE = 0
var DmaalE = 0
 
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
A = 0
B = 0
C = 0
D = 0
E = 0
superscript = 0
bijgeschreven = 0
resultaat = ""
oplossing1 = ""
oplossing2 = ""
opgave = ""
}

function kiesgetallen()
{
while (A == 0)
	{
	A = Math.floor(Math.random() * 9 ) - 4;
	}

B = Math.floor(Math.random() * 12) + 1;
C = Math.floor(Math.random() * 12) + 1;
D = Math.floor(Math.random() * 12) + 1;
if (Math.abs(A) < 3) E = Math.floor(Math.random() * 9);
else E = Math.floor(Math.random() * 5);
 
AtotE = Math.pow(A,E)
BmaalE = B * E
CmaalE = C * E
DmaalE = D * E

}


function toonoef()
{
if (typeoefening == "1")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'x'
	if (B > 1) opgave = opgave + '<sup>' + B  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'x'
		if (BmaalE > 1) oplossing1 = oplossing1 + '<sup>' + BmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}

if (typeoefening == "2")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'y'
	if (C > 1) opgave = opgave + '<sup>' + C  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'y'
		if (CmaalE > 1) oplossing1 = oplossing1 + '<sup>' + CmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}

if (typeoefening == "3")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'z'
	if (D > 1) opgave = opgave + '<sup>' + D  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'z'
		if (DmaalE > 1) oplossing1 = oplossing1 + '<sup>' + DmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}
	
if (typeoefening == "4")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'x'
	if (B > 1) opgave = opgave + '<sup>' + B  + '</sup>' 
	opgave = opgave + 'z'
	if (D > 1) opgave = opgave + '<sup>' + D  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'x'
		if (BmaalE > 1) oplossing1 = oplossing1 + '<sup>' + BmaalE + '</sup>'
		oplossing1 = oplossing1 + 'z'
		if (DmaalE > 1) oplossing1 = oplossing1 + '<sup>' + DmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}

if (typeoefening == "5")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'x'
	if (B > 1) opgave = opgave + '<sup>' + B  + '</sup>' 
	opgave = opgave + 'y'
	if (C > 1) opgave = opgave + '<sup>' + C  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'x'
		if (BmaalE > 1) oplossing1 = oplossing1 + '<sup>' + BmaalE + '</sup>'
		oplossing1 = oplossing1 + 'y'
		if (CmaalE > 1) oplossing1 = oplossing1 + '<sup>' + CmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}

if (typeoefening == "6")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'y'
	if (C > 1) opgave = opgave + '<sup>' + C  + '</sup>' 
	opgave = opgave + 'z'
	if (D > 1) opgave = opgave + '<sup>' + D  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'y'
		if (CmaalE > 1) oplossing1 = oplossing1 + '<sup>' + CmaalE + '</sup>'
		oplossing1 = oplossing1 + 'z'
		if (DmaalE > 1) oplossing1 = oplossing1 + '<sup>' + DmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}

if (typeoefening == "7")
	{
	opgave = opgave + '('
	if (A == -1) opgave = opgave + '-'
	if ((A < -1) || (A > 1)) opgave = opgave + A 
	opgave = opgave + 'x'
	if (B > 1) opgave = opgave + '<sup>' + B  + '</sup>' 
	opgave = opgave + 'y'
	if (C > 1) opgave = opgave + '<sup>' + C  + '</sup>' 
	opgave = opgave + 'z'
	if (D > 1) opgave = opgave + '<sup>' + D  + '</sup>' 
	opgave = opgave + ')<sup>' + E + '</sup> ='

	if (E == 0) 
		{
		oplossing1 = '1'
		}
	else
		{
		if (AtotE == -1) oplossing1 = oplossing1 + '-'
		if ((AtotE < -1) || (AtotE > 1)) oplossing1 = oplossing1 + AtotE
		oplossing1 = oplossing1 + 'x'
		if (BmaalE > 1) oplossing1 = oplossing1 + '<sup>' + BmaalE + '</sup>'
		oplossing1 = oplossing1 + 'y'
		if (CmaalE > 1) oplossing1 = oplossing1 + '<sup>' + CmaalE + '</sup>'
		oplossing1 = oplossing1 + 'z'
		if (DmaalE > 1) oplossing1 = oplossing1 + '<sup>' + DmaalE
		oplossing2 = oplossing1 + '</sup>'
		}
	schrijfoefening()
	}


}

function nieuwoef()
{
aljuist = 0
typeoefening = Math.floor(Math.random() * 7) + 1
document.supaanofuit.src = "images/sup_uit.gif"
resetvariabelen()
kiesgetallen()
toonoef()
document.er.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
pogingenteller++;
if (oplossing1 != "")
{
if ((resultaat == oplossing1) || (resultaat == oplossing2))  
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

