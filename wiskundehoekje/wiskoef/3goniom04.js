var antwoordjuist = 0
var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0

var AB = 0
var AC = 0
var BC = 0
var hoekB = 0
var B = 0
var Bgr = 0
var Bmin = 0
var Bsec = 0
var hoekC = 0
var C = 0
var Cgr = 0
var Cmin = 0
var Csec = 0
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
	AB = Math.round(Math.random() * 400000) / 10000;
	BC = Math.round((AB + Math.random() * 40) * 10000) / 10000;
	AC = Math.round(Math.sqrt(BC * BC - AB * AB) * 10000) / 10000
	B = Math.acos(AB / BC)
	}
if (typeoefening == "2")
	{
	AB = Math.round(Math.random() * 400000) / 10000;
	AC = Math.round(Math.random() * 400000) / 10000;
	BC = Math.round(Math.sqrt(AC * AC + AB * AB) * 10000) / 10000
	B = Math.atan(AC / AB)
	}
if (typeoefening == "3")
	{
	AC = Math.round(Math.random() * 400000) / 10000;
	BC = Math.round((AC + Math.random() * 40) * 10000) / 10000;
	AB = Math.round(Math.sqrt(BC * BC - AC * AC) * 10000) / 10000
	B = Math.asin(AC / BC)
	}
if ((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3"))
	{
	hoekB = B * 180 / Math.PI
	omzetten(hoekB)
	Bgr = hoekgrad
	Bmin = hoekmin
	Bsec = hoeksec
	C = Math.PI / 2 - B
	hoekC = C * 180 / Math.PI
	omzetten(hoekC)
	Cgr = hoekgrad
	Cmin = hoekmin
	Csec = hoeksec
	}
if (typeoefening == "4")
	{
	AB = Math.round(Math.random() * 400000) / 10000;
	Bgr = (Math.floor(Math.random() * 80 ) + 2)
	Bmin = (Math.floor(Math.random() * 59 ) + 1)
	Bsec = (Math.floor(Math.random() * 59 ) + 1)
	hoekB = Bgr + Bmin / 60 + Bsec / 3600	
	B = hoekB / 180 * Math.PI
	BC = Math.abs(Math.round(AB / Math.cos(B) * 10000) / 10000)
	AC = Math.abs(Math.round(AB * Math.tan(B) * 10000) / 10000)
	}
if (typeoefening == "6")
	{
	BC = Math.round(Math.random() * 400000) / 10000;
	Bgr = (Math.floor(Math.random() * 80 ) + 2)
	Bmin = (Math.floor(Math.random() * 59 ) + 1)
	Bsec = (Math.floor(Math.random() * 59 ) + 1)
	hoekB = Bgr + Bmin / 60 + Bsec / 3600	
	B = hoekB / 180 * Math.PI
	AC = Math.abs(Math.round(BC * Math.sin(B) * 10000) / 10000)
	AB = Math.abs(Math.round(BC * Math.cos(B) * 10000) / 10000)
	}
if (typeoefening == "8")
	{
	AC = Math.round(Math.random() * 400000) / 10000;
	Bgr = (Math.floor(Math.random() * 80 ) + 2)
	Bmin = (Math.floor(Math.random() * 59 ) + 1)
	Bsec = (Math.floor(Math.random() * 59 ) + 1)
	hoekB = Bgr + Bmin / 60 + Bsec / 3600	
	B = hoekB / 180 * Math.PI
	BC = Math.abs(Math.round(AC / Math.sin(B) * 10000) / 10000)
	AB = Math.abs(Math.round(AC / Math.tan(B) * 10000) / 10000)
	}
if ((typeoefening == "4") || (typeoefening == "6") || (typeoefening == "8"))
	{
	C = Math.PI / 2 - B
	hoekC = C * 180 / Math.PI
	omzetten(hoekC)
	Cgr = hoekgrad
	Cmin = hoekmin
	Csec = hoeksec
	}
if (typeoefening == "5")
	{
	AB = Math.round(Math.random() * 400000) / 10000;
	Cgr = (Math.floor(Math.random() * 80 ) + 2)
	Cmin = (Math.floor(Math.random() * 59 ) + 1)
	Csec = (Math.floor(Math.random() * 59 ) + 1)
	hoekC = Cgr + Cmin / 60 + Csec / 3600	
	C = hoekC / 180 * Math.PI
	BC = Math.abs(Math.round(AB / Math.sin(C) * 10000) / 10000)
	AC = Math.abs(Math.round(AB / Math.tan(C) * 10000) / 10000)
	}
if (typeoefening == "7")
	{
	BC = Math.round(Math.random() * 400000) / 10000;
	Cgr = (Math.floor(Math.random() * 80 ) + 2)
	Cmin = (Math.floor(Math.random() * 59 ) + 1)
	Csec = (Math.floor(Math.random() * 59 ) + 1)
	hoekC = Cgr + Cmin / 60 + Csec / 3600	
	C = hoekC / 180 * Math.PI
	AB = Math.abs(Math.round(BC * Math.sin(C) * 10000) / 10000)
	AC = Math.abs(Math.round(BC * Math.cos(C) * 10000) / 10000)
	}
if (typeoefening == "9")
	{
	AC = Math.round(Math.random() * 400000) / 10000;
	Cgr = (Math.floor(Math.random() * 80 ) + 2)
	Cmin = (Math.floor(Math.random() * 59 ) + 1)
	Csec = (Math.floor(Math.random() * 59 ) + 1)
	hoekC = Cgr + Cmin / 60 + Csec / 3600	
	C = hoekC / 180 * Math.PI
	BC = Math.abs(Math.round(AC / Math.cos(C) * 10000) / 10000)
	AB = Math.abs(Math.round(AC * Math.tan(C) * 10000) / 10000)
	}
if ((typeoefening == "5") || (typeoefening == "7") || (typeoefening == "9"))
	{
	B = Math.PI / 2 - C
	hoekB = B * 180 / Math.PI
	omzetten(hoekB)
	Bgr = hoekgrad
	Bmin = hoekmin
	Bsec = hoeksec
	}
}

function toonoef()
{
document.trig.txtAB.value = "";
document.trig.txtAC.value = "";
document.trig.txtBC.value = "";
document.trig.txtBgr.value = "";
document.trig.txtBmin.value = "";
document.trig.txtBsec.value = "";
document.trig.txtCgr.value = "";
document.trig.txtCmin.value = "";
document.trig.txtCsec.value = "";

if (typeoefening == "1")
	{
	document.trig.txtAB.value = AB
	document.trig.txtBC.value = BC
	}
if (typeoefening == "2")
	{
	document.trig.txtAB.value = AB
	document.trig.txtAC.value = AC
	}
if (typeoefening == "3")
	{
	document.trig.txtAC.value = AC
	document.trig.txtBC.value = BC
	}
if (typeoefening == "4")
	{
	document.trig.txtAB.value = AB
	document.trig.txtBgr.value = Bgr
	document.trig.txtBmin.value = Bmin
	document.trig.txtBsec.value = Bsec
	}
if (typeoefening == "5")
	{
	document.trig.txtAB.value = AB
	document.trig.txtCgr.value = Cgr
	document.trig.txtCmin.value = Cmin
	document.trig.txtCsec.value = Csec
	}
if (typeoefening == "6")
	{
	document.trig.txtBC.value = BC
	document.trig.txtBgr.value = Bgr
	document.trig.txtBmin.value = Bmin
	document.trig.txtBsec.value = Bsec
	}
if (typeoefening == "7")
	{
	document.trig.txtBC.value = BC
	document.trig.txtCgr.value = Cgr
	document.trig.txtCmin.value = Cmin
	document.trig.txtCsec.value = Csec
	}
if (typeoefening == "8")
	{
	document.trig.txtAC.value = AC
	document.trig.txtBgr.value = Bgr
	document.trig.txtBmin.value = Bmin
	document.trig.txtBsec.value = Bsec
	}
if (typeoefening == "9")
	{
	document.trig.txtAC.value = AC
	document.trig.txtCgr.value = Cgr
	document.trig.txtCmin.value = Cmin
	document.trig.txtCsec.value = Csec
	}
}

function nieuwoef()
{
antwoordjuist = 0
kiesoef()
kiesgetallen()
toonoef()
document.trig.ABopl.src = "../images/vraagteken.gif"
document.trig.BCopl.src = "../images/vraagteken.gif"
document.trig.ACopl.src = "../images/vraagteken.gif"
document.trig.Bopl.src = "../images/vraagteken.gif"
document.trig.Copl.src = "../images/vraagteken.gif"
}

function controleer()
{
if ((document.trig.txtAB.value == "") || (document.trig.txtBC.value == "") || (document.trig.txtAC.value == "") || (document.trig.txtBgr.value == "") || (document.trig.txtBmin.value == "") || (document.trig.txtBsec.value == "") || (document.trig.txtCgr.value == "") || (document.trig.txtCmin.value == "") || (document.trig.txtCsec.value == "")) alert ('Je hebt je antwoord nog niet ingevuld!') 
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
{
var oplAB = document.trig.txtAB.value
var oplBC = document.trig.txtBC.value
var oplAC = document.trig.txtAC.value
var oplBgr = document.trig.txtBgr.value
var oplBmin = document.trig.txtBmin.value
var oplBsec = document.trig.txtBsec.value
var oplCgr = document.trig.txtCgr.value
var oplCmin = document.trig.txtCmin.value
var oplCsec = document.trig.txtCsec.value

pogingenteller++;

if (oplAB == AB) document.trig.ABopl.src = "../images/goed.gif"
else document.trig.ABopl.src = "../images/fout.gif"; 
if (oplBC == BC) document.trig.BCopl.src = "../images/goed.gif"
else document.trig.BCopl.src = "../images/fout.gif";
if (oplAC == AC) document.trig.ACopl.src = "../images/goed.gif"
else document.trig.ACopl.src = "../images/fout.gif";
if ((oplBgr == Bgr) && (oplBmin == Bmin) && (oplBsec == Bsec)) document.trig.Bopl.src = "../images/goed.gif"
else document.trig.Bopl.src = "../images/fout.gif";
if ((oplCgr == Cgr) && (oplCmin == Cmin) && (oplCsec == Csec)) document.trig.Copl.src = "../images/goed.gif"
else document.trig.Copl.src = "../images/fout.gif";

if ((oplAB == AB) && (oplBC == BC) && (oplAC == AC) && (oplBgr == Bgr) && (oplBmin == Bmin) && (oplBsec == Bsec) && (oplCgr == Cgr) && (oplCmin == Cmin) && (oplCsec == Csec)) 
	{
	oplossingenteller++;
	antwoordjuist = 1
	}

if (typeoefening == "1")
	{
	document.trig.ABopl.value = "geg"
	document.trig.BCopl.value = "geg"
	}
if (typeoefening == "2")
	{
	document.trig.ABopl.value = "geg"
	document.trig.ACopl.value = "geg"
	}
if (typeoefening == "3")
	{
	document.trig.ACopl.value = "geg"
	document.trig.BCopl.value = "geg"
	}
if (typeoefening == "4")
	{
	document.trig.ABopl.value = "geg"
	document.trig.Bopl.value = "geg"
	}
if (typeoefening == "5")
	{
	document.trig.ABopl.value = "geg"
	document.trig.Copl.value = "geg"
	}
if (typeoefening == "6")
	{
	document.trig.BCopl.value = "geg"
	document.trig.Bopl.value = "geg"
	}
if (typeoefening == "7")
	{
	document.trig.BCopl.value = "geg"
	document.trig.Copl.value = "geg"
	}
if (typeoefening == "8")
	{
	document.trig.ACopl.value = "geg"
	document.trig.Bopl.value = "geg"
	}
if (typeoefening == "9")
	{
	document.trig.ACopl.value = "geg"
	document.trig.Copl.value = "geg"
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.trig.aantaljuist.value = oplossingenteller
	document.trig.aantalpogingen.value = pogingenteller
	document.trig.percentage.value = procent		
}
}
}
