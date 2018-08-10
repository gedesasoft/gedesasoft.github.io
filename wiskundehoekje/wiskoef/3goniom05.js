var antwoordjuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var ARHZ = 0
var ORHZ = 0
var SZ = 0
var hoekA = 0
var A = 0
var Agr = 0
var Amin = 0
var Asec = 0
var hoekgrad = 0
var hoekmin = 0
var hoeksec = 0

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

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 9) + 1
}

function kiesgetallen()
{
if (typeoefening == "1")
	{
	ARHZ = Math.round(Math.random() * 400000) / 10000;
	SZ = Math.round((ARHZ + Math.random() * 40) * 10000) / 10000;
	A = Math.acos(ARHZ / SZ)
	}
if (typeoefening == "2")
	{
	ARHZ = Math.round(Math.random() * 400000) / 10000;
	ORHZ = Math.round(Math.random() * 400000) / 10000;
	A = Math.atan(ORHZ / ARHZ)
	}
if (typeoefening == "3")
	{
	ORHZ = Math.round(Math.random() * 400000) / 10000;
	SZ = Math.round((ORHZ + Math.random() * 40) * 10000) / 10000;
	A = Math.asin(ORHZ / SZ)
	}
if ((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3"))
	{
	hoekA = A * 180 / Math.PI
	omzetten(hoekA)
	Agr = hoekgrad
	Amin = hoekmin
	Asec = hoeksec
	}
if ((typeoefening == "4") || (typeoefening == "7")) 
	{
	ARHZ = Math.round(Math.random() * 400000) / 10000;
	Agr = (Math.floor(Math.random() * 80 ) + 2)
	Amin = (Math.floor(Math.random() * 59 ) + 1)
	Asec = (Math.floor(Math.random() * 59 ) + 1)
	hoekA = Agr + Amin / 60 + Asec / 3600	
	A = hoekA / 180 * Math.PI
	SZ = Math.abs(Math.round(ARHZ / Math.cos(A) * 10000) / 10000)
	ORHZ = Math.abs(Math.round(ARHZ * Math.tan(A) * 10000) / 10000)
	}
if ((typeoefening == "6") || (typeoefening == "9"))
	{
	SZ = Math.round(Math.random() * 400000) / 10000;
	Agr = (Math.floor(Math.random() * 80 ) + 2)
	Amin = (Math.floor(Math.random() * 59 ) + 1)
	Asec = (Math.floor(Math.random() * 59 ) + 1)
	hoekA = Agr + Amin / 60 + Asec / 3600	
	A = hoekA / 180 * Math.PI
	ORHZ = Math.abs(Math.round(SZ * Math.sin(A) * 10000) / 10000)
	ARHZ = Math.abs(Math.round(SZ * Math.cos(A) * 10000) / 10000)
	}
if ((typeoefening == "5") || (typeoefening == "8"))
	{
	ORHZ = Math.round(Math.random() * 400000) / 10000;
	Agr = (Math.floor(Math.random() * 80 ) + 2)
	Amin = (Math.floor(Math.random() * 59 ) + 1)
	Asec = (Math.floor(Math.random() * 59 ) + 1)
	hoekA = Agr + Amin / 60 + Asec / 3600	
	A = hoekA / 180 * Math.PI
	SZ = Math.abs(Math.round(ORHZ / Math.sin(A) * 10000) / 10000)
	ARHZ = Math.abs(Math.round(ORHZ / Math.tan(A) * 10000) / 10000)
	}
}

function toonoef()
{
if ((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3"))
	{
document.all.zijde1geg.style.display = ""
document.all.zijde2geg.style.display = ""
document.all.hoekgevr.style.display = ""
	}
if ((typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6") || (typeoefening == "7") || (typeoefening == "8") || (typeoefening == "9"))
	{
document.all.zijde1geg.style.display = ""
document.all.hoekgeg.style.display = ""
document.all.zijdegevr.style.display = ""
	}

document.trig.gegzijde1.value = "";
document.trig.gegzijde2.value = "";
document.trig.gevrzijde.value = "";
document.trig.lengtezijde1.value = "";
document.trig.lengtezijde2.value = "";
document.trig.gr_geg.value = "";
document.trig.min_geg.value = "";
document.trig.sec_geg.value = "";
document.trig.lengtezijde.value = "";
document.trig.gr_gevr.value = "";
document.trig.min_gevr.value = "";
document.trig.sec_gevr.value = "";

if (typeoefening == "1")
	{
document.trig.gegzijde1.value = "|AC|";
document.trig.gegzijde2.value = "|AB|";
document.trig.lengtezijde1.value = ARHZ;
document.trig.lengtezijde2.value = SZ;
	}
if (typeoefening == "2")
	{
document.trig.gegzijde1.value = "|AC|";
document.trig.gegzijde2.value = "|BC|";
document.trig.lengtezijde1.value = ARHZ;
document.trig.lengtezijde2.value = ORHZ;
	}
if (typeoefening == "3")
	{
document.trig.gegzijde1.value = "|BC|";
document.trig.gegzijde2.value = "|AB|";
document.trig.lengtezijde1.value = ORHZ;
document.trig.lengtezijde2.value = SZ;
	}
if ((typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6") || (typeoefening == "7") || (typeoefening == "8") || (typeoefening == "9"))
	{
document.trig.gr_geg.value = Agr;
document.trig.min_geg.value = Amin;
document.trig.sec_geg.value = Asec;
	}

if ((typeoefening == "4") || (typeoefening == "7"))
	{
	document.trig.gegzijde1.value = "|AC|";
	document.trig.lengtezijde1.value = ARHZ;
	}

if ((typeoefening == "5") || (typeoefening == "8"))
	{
	document.trig.gegzijde1.value = "|BC|";
	document.trig.lengtezijde1.value = ORHZ;
	}
if ((typeoefening == "6") || (typeoefening == "9"))
	{
	document.trig.gegzijde1.value = "|AB|";
	document.trig.lengtezijde1.value = SZ;
	}
if ((typeoefening == "4") || (typeoefening == "5"))
	{
	document.trig.gevrzijde.value = "|AB|";
	}
if ((typeoefening == "6") || (typeoefening == "7"))
	{
	document.trig.gevrzijde.value = "|BC|";
	}
if ((typeoefening == "8") || (typeoefening == "9"))
	{
	document.trig.gevrzijde.value = "|AC|";
	}
}

function nieuwoef()
{
document.all.zijde1geg.style.display = "none"
document.all.zijde2geg.style.display = "none"
document.all.hoekgeg.style.display = "none"
document.all.zijdegevr.style.display = "none"
document.all.hoekgevr.style.display = "none"
antwoordjuist = 0
kiesoef()
kiesgetallen()
toonoef()
document.trig.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
if (((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3")) && ((document.trig.gr_gevr.value == "") || (document.trig.min_gevr.value == "") || (document.trig.sec_gevr.value == ""))) alert ('Je hebt je antwoord nog niet volledig ingevuld!')
else
{
if (((typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6") || (typeoefening == "7") || (typeoefening == "8") || (typeoefening == "9")) && (document.trig.lengtezijde.value == "")) alert ('Je hebt je antwoord nog niet ingevuld!') 
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
{
var oplzijde = document.trig.lengtezijde.value
var oplgr = document.trig.gr_gevr.value
var oplmin = document.trig.min_gevr.value
var oplsec = document.trig.sec_gevr.value

pogingenteller++;

if ((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3"))
	{
	if ((Agr == oplgr) && (Amin == oplmin) && (Asec == oplsec)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}
 
if ((typeoefening == "4") || (typeoefening == "5"))
	{
	if (SZ == oplzijde) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}

if ((typeoefening == "6") || (typeoefening == "7"))
	{
	if (ORHZ == oplzijde) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}
	
if ((typeoefening == "8") || (typeoefening == "9"))
	{
	if (ARHZ == oplzijde) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.trig.aantaljuist.value = oplossingenteller
	document.trig.aantalpogingen.value = pogingenteller
	document.trig.percentage.value = procent		
}
}
}
}
