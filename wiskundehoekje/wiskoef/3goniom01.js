var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var gradvoor = 0
var minvoor = 0
var secvoor = 0
var hoekvoor = 0
var hoekvoor_rad = 0
var gradna = 0
var minna = 0
var secna = 0
var hoekna = 0
var hoekna_rad = 0
var waardevoor = 0
var waardena = 0

function omzetten(hoek)
{
hoekgrad = Math.floor(hoek);
hoekmin = Math.floor((hoek - hoekgrad) * 60);
hoeksec = Math.round((hoek - hoekgrad - hoekmin / 60) * 3600);
		if (hoeksec == 60)
		{
		hoeksec = 0
		hoekmin = hoekmin + 1
		}
		if (hoekmin == 60)
		{
		hoekmin = 0
		hoekgrad = hoekgrad + 1
		}
}

function kiesgetallen()
{
if ((typeoefening == 1) || (typeoefening == 2) || (typeoefening == 3))
	{
	gradvoor = (Math.floor(Math.random() * 80 ) + 2)
	minvoor = Math.floor(Math.random() * 60 )
	secvoor = Math.floor(Math.random() * 60 )
	hoekvoor = gradvoor + minvoor / 60 + secvoor / 3600
	hoekvoor_rad = hoekvoor / 180 * Math.PI
	}
if (typeoefening == 1)
	{
	waardena = Math.round(Math.sin(hoekvoor_rad) * 100000) / 100000
	}
if (typeoefening == 2)
	{
	waardena = Math.round(Math.cos(hoekvoor_rad) * 100000) / 100000
	}
if (typeoefening == 3)
	{
	waardena = Math.round(Math.tan(hoekvoor_rad) * 100000) / 100000
	}

if ((typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6))
	{
	waardevoor = Math.round(Math.random() * 100000 ) / 100000
	}
if (typeoefening == 4)
	{
	hoekna_rad = Math.asin(waardevoor)
	}
if (typeoefening == 5)
	{
	hoekna_rad = Math.acos(waardevoor)
	}
if (typeoefening == 6)
	{
	hoekna_rad = Math.atan(waardevoor)
	}
	
if ((typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6))
	{
	hoekna = hoekna_rad * 180 / Math.PI
	omzetten(hoekna)
	gradna = hoekgrad
	minna = hoekmin
	secna = hoeksec
	}
	
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 6) + 1
}

function toonoef()
{
if ((typeoefening == 1) || (typeoefening == 4))
	{
	document.goniomoef.gw.value = "Sin"	
	}
if ((typeoefening == 2) || (typeoefening == 5))
	{
	document.goniomoef.gw.value = "Cos"	
	}
if ((typeoefening == 3) || (typeoefening == 6))
	{
	document.goniomoef.gw.value = "Tan"	
	}
if ((typeoefening == 1) || (typeoefening == 2) || (typeoefening == 3))
	{
	document.goniomoef.hoekgr.value = gradvoor	
	document.goniomoef.hoekmin.value = minvoor
	document.goniomoef.hoeksec.value = secvoor
	}
if ((typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6))
	{
	document.goniomoef.resultgw.value = waardevoor
	}


}


function nieuwoef()
{
document.goniomoef.hoekgr.value = "";
document.goniomoef.hoekmin.value = "";
document.goniomoef.hoeksec.value = "";
document.goniomoef.resultgw.value = "";
document.goniomoef.opl.src = "../images/vraagteken.gif"
antwoordjuist = 0
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
var antwgrad = document.goniomoef.hoekgr.value;
var antwmin = document.goniomoef.hoekmin.value;
var antwsec = document.goniomoef.hoeksec.value;
var antwgw = document.goniomoef.resultgw.value;
if ((antwgrad == "") || (antwmin == "") || (antwsec == "") || (antwgw == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if ((typeoefening == 4) || (typeoefening == 5) || (typeoefening == 6)) 
		{
		if ((antwgrad == gradna) && (antwmin == minna) && (antwsec == secna)) 
			{
			goniomoef.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else goniomoef.opl.src = "../images/fout.gif"
		}

	if ((typeoefening == 1) || (typeoefening == 2) || (typeoefening == 3)) 
		{
		if (antwgw == waardena) 
			{
			goniomoef.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else goniomoef.opl.src = "../images/fout.gif"
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.goniomoef.aantaljuist.value = oplossingenteller
	document.goniomoef.aantalpogingen.value = pogingenteller
	document.goniomoef.percentage.value = procent		
	}  
}
}

