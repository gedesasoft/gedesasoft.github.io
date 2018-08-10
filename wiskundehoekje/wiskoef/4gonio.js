var antwoordjuist = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0

var txtzijde1 = ""
var txtzijde2 = ""
var txtzijde3 = ""
var txthoek1 = ""
var txthoek2 = ""
var txthoek3 = ""

var z1 = 0
var z2 = 0
var z3 = 0
var hoek1deg = 0
var hoek1rad= 0
var hoek1gr = 0
var hoek1min = 0
var hoek1sec = 0
var hoek2deg = 0
var hoek2rad= 0
var hoek2gr = 0
var hoek2min = 0
var hoek2sec = 0
var hoek3deg = 0
var hoek3rad= 0
var hoek3gr = 0
var hoek3min = 0
var hoek3sec = 0

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
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesgetallen()
{
	z1 = Math.round(Math.random() * 400000) / 10000;
	z2 = Math.round(Math.random() * 400000) / 10000;
	while ((z1 > z2 + z3) || (z2 > z1 + z3)|| (z3 > z1 + z2))
	{
	z3 = Math.round(Math.random() * 400000) / 10000;
	}
	
	hoek1rad= Math.acos((z1 * z1 - z2 * z2 - z3 * z3) / (-2 * z2 * z3))
	hoek2rad= Math.acos((z2 * z2 - z1 * z1 - z3 * z3) / (-2 * z1 * z3))
	hoek3rad= Math.acos((z3 * z3 - z2 * z2 - z1 * z1) / (-2 * z2 * z1))

if ((typeoefening == "2") || (typeoefening == "3"))
	{
	hoek3deg = hoek3rad * 180 / Math.PI
	omzetten(hoek3deg)
	hoek3gr = hoekgrad
	hoek3min = hoekmin
	hoek3sec = hoeksec
	hoek3deg = hoek3gr + hoek3min / 60 + hoek3sec / 3600	
	hoek3rad= hoek3deg / 180 * Math.PI

	z3 = Math.sqrt(z1 * z1 + z2 * z2 - 2 * z1 * z2 * Math.cos(hoek3rad))
	afgerondz3 = Math.round(z3 * 10000) / 10000;
	}

if (typeoefening == "3")
	{
	hoek1rad = Math.asin(z1 * Math.sin(hoek3rad) / z3)
	}

if ((typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6")) 
	{
	hoek2deg = hoek2rad * 180 / Math.PI
	omzetten(hoek2deg)
	hoek2gr = hoekgrad
	hoek2min = hoekmin
	hoek2sec = hoeksec
	hoek2deg = hoek2gr + hoek2min / 60 + hoek2sec / 3600	
	hoek2rad= hoek2deg / 180 * Math.PI

	hoek1rad = Math.asin(z1 * Math.sin(hoek2rad) / z2)
	}

if ((typeoefening == "6") || (typeoefening == "4"))
	{
	hoek3rad = Math.PI - hoek2rad - hoek1rad 
	}

if (typeoefening == "4")
	{
	z3 = z1 * Math.sin(hoek3rad) / Math.sin(hoek1rad)
	afgerondz3 = Math.round(z3 * 10000) / 10000;
	}
	
if ((typeoefening == "7") || (typeoefening == "8"))
	{
	hoek1deg = hoek1rad * 180 / Math.PI
	omzetten(hoek1deg)
	hoek1gr = hoekgrad
	hoek1min = hoekmin
	hoek1sec = hoeksec
	hoek1deg = hoek1gr + hoek1min / 60 + hoek1sec / 3600	
	hoek1rad= hoek1deg / 180 * Math.PI

	hoek2deg = hoek2rad * 180 / Math.PI
	omzetten(hoek2deg)
	hoek2gr = hoekgrad
	hoek2min = hoekmin
	hoek2sec = hoeksec
	hoek2deg = hoek2gr + hoek2min / 60 + hoek2sec / 3600	
	hoek2rad= hoek2deg / 180 * Math.PI
	}

if (typeoefening == "7")
	{
	z2 = z1 * Math.sin(hoek2rad) / Math.sin(hoek1rad)
	afgerondz2 = Math.round(z2 * 10000) / 10000;
	}

if (typeoefening == "8")
	{
	hoek3rad = Math.PI - hoek2rad - hoek1rad 
	z3 = z1 * Math.sin(hoek3rad) / Math.sin(hoek1rad)
	afgerondz3 = Math.round(z3 * 10000) / 10000;
	}

if ((typeoefening == "1") || (typeoefening == "3") || (typeoefening == "5"))
	{
	hoek1deg = hoek1rad * 180 / Math.PI
	omzetten(hoek1deg)
	hoek1gr = hoekgrad
	hoek1min = hoekmin
	hoek1sec = hoeksec
	}

if (typeoefening == "6")
	{
	hoek3deg = hoek3rad * 180 / Math.PI
	omzetten(hoek3deg)
	hoek3gr = hoekgrad
	hoek3min = hoekmin
	hoek3sec = hoeksec
	}

}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 3) + 1

if (typevariatie == "1")
	{
	txthoek1 = "Â"
	txthoek2 = "Ô"
	txthoek3 = "Ê"
	txtzijde1 = "|OE|"
	txtzijde2 = "|AE|"
	txtzijde3 = "|AO|"
	}

if (typevariatie == "2")
	{
	txthoek1 = "Ô"
	txthoek2 = "Ê"
	txthoek3 = "Â"
	txtzijde1 = "|AE|"
	txtzijde2 = "|AO|"
	txtzijde3 = "|OE|"
	}

if (typevariatie == "3")
	{
	txthoek1 = "Ê"
	txthoek2 = "Â"
	txthoek3 = "Ô"
	txtzijde1 = "|AO|"
	txtzijde2 = "|OE|"
	txtzijde3 = "|AE|"
	}

}

function toonoef()
{
if (typeoefening == "1")
	{
document.all.z1geg.style.display = ""
document.all.z2geg.style.display = ""
document.all.z3geg.style.display = ""
	}

if ((typeoefening == "2") || (typeoefening == "3") || (typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6"))
	{
document.all.z1geg.style.display = ""
document.all.z2geg.style.display = ""
document.all.hoek1geg.style.display = ""
	}

if ((typeoefening == "7") || (typeoefening == "8"))
	{
document.all.z1geg.style.display = ""
document.all.hoek1geg.style.display = ""
document.all.hoek2geg.style.display = ""
	}
	
if ((typeoefening == "1") || (typeoefening == "3") || (typeoefening == "5") || (typeoefening == "6"))
	{
document.all.hoekgevr.style.display = ""
	}

if ((typeoefening == "2") || (typeoefening == "4") || (typeoefening == "7") || (typeoefening == "8"))
	{
document.all.zijdegevr.style.display = ""
	}
	
document.trig.gegz1.value = "";
document.trig.gegz2.value = "";
document.trig.gegz3.value = "";
document.trig.gevrzijde.value = "";
document.trig.lengtez1.value = "";
document.trig.lengtez2.value = "";
document.trig.lengtez3.value = "";
document.trig.gr1_geg.value = "";
document.trig.min1_geg.value = "";
document.trig.sec1_geg.value = "";
document.trig.gr2_geg.value = "";
document.trig.min2_geg.value = "";
document.trig.sec2_geg.value = "";
document.trig.lengtezijde.value = "";
document.trig.gr_gevr.value = "";
document.trig.min_gevr.value = "";
document.trig.sec_gevr.value = "";

document.trig.gegz1.value = txtzijde1;
document.trig.lengtez1.value = z1;

if ((typeoefening == "1") || (typeoefening == "2") || (typeoefening == "3") || (typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6"))
	{
	document.trig.gegz2.value = txtzijde2;
	document.trig.lengtez2.value = z2;
	}

if (typeoefening == "1")
	{
	document.trig.gegz3.value = txtzijde3;
	document.trig.lengtez3.value = z3;
	}

if ((typeoefening == "2") || (typeoefening == "3"))
	{
	document.trig.geghoek1.value = txthoek3;
	document.trig.gr1_geg.value = hoek3gr;
	document.trig.min1_geg.value = hoek3min;
	document.trig.sec1_geg.value = hoek3sec;
	}

if ((typeoefening == "4") || (typeoefening == "5") || (typeoefening == "6"))
	{
	document.trig.geghoek1.value = txthoek2;
	document.trig.gr1_geg.value = hoek2gr;
	document.trig.min1_geg.value = hoek2min;
	document.trig.sec1_geg.value = hoek2sec;
	}

if ((typeoefening == "7") || (typeoefening == "8"))
	{
	document.trig.geghoek1.value = txthoek1;
	document.trig.gr1_geg.value = hoek1gr;
	document.trig.min1_geg.value = hoek1min;
	document.trig.sec1_geg.value = hoek1sec;
	document.trig.geghoek2.value = txthoek2;
	document.trig.gr2_geg.value = hoek2gr;
	document.trig.min2_geg.value = hoek2min;
	document.trig.sec2_geg.value = hoek2sec;
	}
	
if ((typeoefening == "1") || (typeoefening == "3") || (typeoefening == "5"))
	{
	document.trig.gevrhoek.value = txthoek1;
	}

if (typeoefening == "6")
	{
	document.trig.gevrhoek.value = txthoek3;
	}

if ((typeoefening == "2") || (typeoefening == "4") || (typeoefening == "8"))
	{
	document.trig.gevrzijde.value = txtzijde3;
	}

if (typeoefening == "7")
	{
	document.trig.gevrzijde.value = txtzijde2;
	}
}

function nieuwoef()
{
document.all.z1geg.style.display = "none"
document.all.z2geg.style.display = "none"
document.all.z3geg.style.display = "none"
document.all.hoek1geg.style.display = "none"
document.all.hoek2geg.style.display = "none"
document.all.zijdegevr.style.display = "none"
document.all.hoekgevr.style.display = "none"
antwoordjuist = 0
kiesvariatie()
kiesoef()
kiesgetallen()
toonoef()
document.trig.opl.src = "../images/vraagteken.gif"
}

function controleer()
{
if (((typeoefening == "1") || (typeoefening == "3") || (typeoefening == "5") || (typeoefening == "6")) && ((document.trig.gr_gevr.value == "") || (document.trig.min_gevr.value == "") || (document.trig.sec_gevr.value == ""))) alert ('Je hebt je antwoord nog niet volledig ingevuld!')
else
{
if (((typeoefening == "2") || (typeoefening == "4") || (typeoefening == "7") || (typeoefening == "8")) && (document.trig.lengtezijde.value == "")) alert ('Je hebt je antwoord nog niet ingevuld!') 
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

if ((typeoefening == "1") || (typeoefening == "3") || (typeoefening == "5"))
	{
	if ((hoek1gr == oplgr) && (hoek1min == oplmin) && (hoek1sec == oplsec)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}
 
if (typeoefening == "6")
	{
	if ((hoek3gr == oplgr) && (hoek3min == oplmin) && (hoek3sec == oplsec)) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}

if ((typeoefening == "2") || (typeoefening == "4") || (typeoefening == "8"))
	{
	if (afgerondz3 == oplzijde) 
		{
		oplossingenteller++;
		antwoordjuist = 1
		document.trig.opl.src = "../images/goed.gif"
		}
	else document.trig.opl.src = "../images/fout.gif";
	}

if (typeoefening == "7")
	{
	if (afgerondz2 == oplzijde) 
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
