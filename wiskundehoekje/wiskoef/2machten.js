var aljuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var superscript = 0
var bijgeschreven = 0
var resultaat = ""
var oplossing1 = ""
var oplossing2 = ""
var oplossing3 = ""
var oplossing4 = ""
var oplossing5 = ""
var oplossing6 = ""
var oplossing7 = ""
var oplossing8 = ""
var opgave = ""
var vooropgave = '<HTML><BODY TOPMARGIN=0 LEFTMARGIN=0 TEXT="000000" BACKGROUND="../bck.gif"><TABLE BORDER=0 CELLPADDING=0 CELLSPACING=0><TR><TD WIDTH="28" VALIGN="top"></TD><TD VALIGN="top"><b>';
var naresultaat = '</TD></TR></TABLE></b></body></html>';

var A = 0
var B = 0
 
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
superscript = 0
bijgeschreven = 0

resultaat = ""
oplossing1 = ""
oplossing2 = ""
oplossing3 = ""
oplossing4 = ""
oplossing5 = ""
oplossing6 = ""
oplossing7 = ""
oplossing8 = ""
opgave = ""
}

function kiesgetallen()
{
while ((A == 0) || (A == 1))
	{
	A = (Math.floor(Math.random() * 30 ) - 15);
	}
while ((B == 0) || (B == 1))
	{
	B = (Math.floor(Math.random() * 30 ) - 15);
	}
}


function toonoef()
{
if (typeoefening == "1")
	{
	opgave = opgave + 'x<sup>' + A + '</sup> . x<sup>' + B + '</sup> = '
	if ((A + B) == 0) 
		{
		oplossing1 = '1'
		oplossing2 = 'x<sup>0</sup>'
		oplossing3 = 'x<sup>0'
		}
	else
	{
	if ((A + B) == 1) 
		{
		oplossing1 = 'x'
		oplossing2 = 'x<sup>1</sup>'
		oplossing3 = 'x<sup>1'
		}
	else
	{
	if ((A + B) == -1) 
		{
		oplossing1 = 'x<sup>-1</sup>' 
		oplossing2 = 'x<sup>-1' 
		oplossing3 = '1/x' 
		}
	else
		{
		oplossing1 = 'x<sup>' + (A + B) + '</sup>'	  
		oplossing2 = 'x<sup>' + (A + B)
		if((A + B) < 0) oplossing3 = '1/x<sup>' + (0 - A - B) + '</sup>'
		if((A + B) < 0) oplossing4 = '1/x<sup>' + (0 - A - B)
		}	  
	}
	}
	schrijfoefening()
	}
	
if (typeoefening == "2")
	{
	opgave = opgave + 'x<sup>' + A + '</sup> / x<sup>' + B + '</sup> = '
	if ((A - B) == 0) 
		{
		oplossing1 = '1'
		oplossing2 = 'x<sup>0</sup>'
		oplossing3 = 'x<sup>0'
		}
	else
	{
	if ((A - B) == 1) 
		{
		oplossing1 = 'x'
		oplossing2 = 'x<sup>1</sup>'
		oplossing3 = 'x<sup>1'
		}
	else
	{
	if ((A - B) == -1) 
		{
		oplossing1 = 'x<sup>-1</sup>' 
		oplossing2 = 'x<sup>-1' 
		oplossing3 = '1/x' 
		}
	else
		{
		oplossing1 = 'x<sup>' + (A - B) + '</sup>'	  
		oplossing2 = 'x<sup>' + (A - B)
		if((A - B) < 0) oplossing3 = '1/x<sup>' + (B - A) + '</sup>'
		if((A - B) < 0) oplossing4 = '1/x<sup>' + (B - A)
		}	  
	}
	}
	schrijfoefening()
	}
if (typeoefening == "3")
	{
	opgave = opgave + '(x<sup>' + A + '</sup>)<sup>' + B + '</sup> = '
	oplossing1 = 'x<sup>' + (A * B) + '</sup>'	  
	oplossing2 = 'x<sup>' + (A * B)	  
	if((A * B) < 0) oplossing3 = '1/x<sup>' + (0 - (A * B)) + '</sup>'
	if((A * B) < 0) oplossing4 = '1/x<sup>' + (0 - (A * B))
	schrijfoefening()
	}

if (typeoefening == "4")
	{
	opgave = opgave + '(xy)<sup>' + A + '</sup> = '
	oplossing1 = 'x<sup>' + A + '</sup>y<sup>' + A + '</sup>'	  
	oplossing2 = 'x<sup>' + A + '</sup>y<sup>' + A	  
	oplossing3 = 'y<sup>' + A + '</sup>x<sup>' + A + '</sup>'	  
	oplossing4 = 'y<sup>' + A + '</sup>x<sup>' + A	  
	if(A < 0) oplossing5 = '1/x<sup>' + (0 - A) + '</sup>y<sup>' + (0 - A) + '</sup>'	 
	if(A < 0) oplossing6 = '1/x<sup>' + (0 - A) + '</sup>y<sup>' + (0 - A)
	if(A < 0) oplossing7 = '1/y<sup>' + (0 - A) + '</sup>x<sup>' + (0 - A) + '</sup>'	 
	if(A < 0) oplossing8 = '1/y<sup>' + (0 - A) + '</sup>x<sup>' + (0 - A)
	schrijfoefening()
	}

if (typeoefening == "5")
	{
	opgave = opgave + '(x/y)<sup>' + A + '</sup> = '
	oplossing1 = 'x<sup>' + A + '</sup>/y<sup>' + A + '</sup>'	  
	oplossing2 = 'x<sup>' + A + '</sup>/y<sup>' + A	  
	if(A < 0) oplossing3 = 'y<sup>' + (0 - A) + '</sup>/x<sup>' + (0 - A) + '</sup>'	 
	if(A < 0) oplossing4 = 'y<sup>' + (0 - A) + '</sup>/x<sup>' + (0 - A)
	schrijfoefening()
	}

}

function nieuwoef()
{
aljuist = 0
soortoef = kiesoef.selecteer.options[kiesoef.selecteer.selectedIndex].value;
if (soortoef == "0") typeoefening = 0
if (soortoef == "pr") typeoefening = 1
if (soortoef == "qu") typeoefening = 2
if (soortoef == "ma") typeoefening = 3
if (soortoef == "mapr") typeoefening = 4
if (soortoef == "maqu") typeoefening = 5

if (soortoef == "gem") typeoefening = Math.floor(Math.random() * 5 ) + 1

if (typeoefening == '0') alert('Kies eerst een soort oefening in het keuzelijstje hierboven')
else
	{
	document.supaanofuit.src = "images/sup_uit.gif"
	resetvariabelen()
	kiesgetallen()
	toonoef()
	document.er.opl.src = "../images/vraagteken.gif"
	}
}

function controleer()
{
pogingenteller++;
if (oplossing1 != "")
{
if ((resultaat == oplossing1) || (resultaat == oplossing2) || (resultaat == oplossing3) || (resultaat == oplossing4) || (resultaat == oplossing5) || (resultaat == oplossing6) || (resultaat == oplossing7) || (resultaat == oplossing8))  
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

