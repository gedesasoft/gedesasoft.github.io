var typeoefening = 0
var A = 0
var B = 0
var C = 0
var D = 0
var X1 = 0
var X2 = 0
var	Xtopteller = 0
var	Xtopnoemer = 0
var	Ytopteller = 0
var	Ytopnoemer = 0
var Xtop = ""
var Ytop = ""
var Xtopfloat = 0
var Ytopfloat = 0

function kiesgetallen()
{
if (typeoefening == 2)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = (Math.floor(Math.random() * 15 ) - 6);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (typeoefening == 1)
	{
	A = (Math.floor(Math.random() * 10 ) - 6);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 15 ) - 6);
	X2 = X1;
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (typeoefening == 0)
	{
 	A = (Math.floor(Math.random() * 5 ) + 1);
	if (A == 0) A = 1
	B = (Math.floor(Math.random() * 15 ) - 6);
	C = Math.floor(B * B / (4 * A)) + 2
	}
D = B * B - 4 * A * C
if (A < 0)
	{
	Xtopteller = B
	Xtopnoemer = -2 * A
	Ytopteller = D
	Ytopnoemer = -4 * A
	}
if (A > 0)
	{
	Xtopteller = -B
	Xtopnoemer = 2 * A
	Ytopteller = -D
	Ytopnoemer = 4 * A
	}

var Xng1 = Math.abs(Xtopteller);
var Xng2 = Math.abs(Xtopnoemer);
var XngA = Xng1
var XngB = Xng2
var Xrest = 1
	
while (Xrest != 0)
	{
	Xrest = Xng1 % Xng2;
	Xng1 = Xng2;
	Xng2 = Xrest;
	}

Xtopteller = Xtopteller / Xng1
Xtopnoemer = Xtopnoemer / Xng1

var Yng1 = Math.abs(Ytopteller);
var Yng2 = Math.abs(Ytopnoemer);
var YngA = Yng1
var YngB = Yng2
var Yrest = 1
	
while (Yrest != 0)
	{
	Yrest = Yng1 % Yng2;
	Yng1 = Yng2;
	Yng2 = Yrest;
	}

Ytopteller = Ytopteller / Yng1
Ytopnoemer = Ytopnoemer / Yng1

if (Xtopnoemer ==1) Xtop = Xtopteller + ""
else
Xtop = Xtopteller + "/" + Xtopnoemer

if (Ytopnoemer ==1) Ytop = Ytopteller + ""
else
Ytop = Ytopteller + "/" + Ytopnoemer
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3)
}

function toonoef()
{
document.fv.txtA.value = A;
document.fv.txtB.value = B;
document.fv.txtC.value = C;

tekst = 'id=a type=numeric value=' + "	' " + A + " ' decimals='0' incr='1' region=external visible=no"
appverloop.replaceControl("3",tekst)
tekst = 'id=b type=numeric value=' + "	' " + B + " ' decimals='0' incr='1' region=external visible=no"
appverloop.replaceControl("4",tekst)
tekst = 'id=c type=numeric value=' + "	' " + C + " ' decimals='0' incr='1' region=external visible=no"
appverloop.replaceControl("5",tekst)

document.all.txtapplet.style.display= "none";
document.all.commentaarapplet.style.display= "none";
}

function toonapplet()
{
document.all.txtapplet.style.display= "";
document.all.commentaarapplet.style.display= "";
}

function afbwissen()
{
document.bld1.src= 'images/4verloop_bld_1_0.gif';
document.bld2.src= 'images/4verloop_bld_2_0.gif';
document.linkstop.src= 'images/4verloop_leeg.gif';
document.rechtstop.src= 'images/4verloop_leeg.gif';
document.all.Dnul.style.display= "none";
document.all.Dpos.style.display= "none";
document.all.Dnegtabel.style.display= "none";
document.all.Dnultabel.style.display= "none";
document.all.Dpostabel.style.display= "none";
document.all.txtapplet.style.display= "none";
document.all.commentaarapplet.style.display= "none";
}

function nieuwoef()
{
afbwissen()
kiesoef()
kiesgetallen()
toonoef()
}

function controle01()
{
if (fv.vorm.value == "????") fv.opl01.src = "../images/vraagteken.gif"
else
if (((fv.vorm.value == "dal") && (A > 0)) || ((fv.vorm.value == "berg") && (A < 0))) fv.opl01.src = "../images/goed.gif"
else fv.opl01.src = "../images/fout.gif"
}

function controle02()
{
if ((fv.txtXtop.value == "") || (fv.txtYtop.value == "")) alert('Je moet beide coördinaten ingeven.')
else
if ((fv.txtXtop.value == Xtop) && (fv.txtYtop.value == Ytop))  fv.opl02.src = "../images/goed.gif"
else fv.opl02.src = "../images/fout.gif"
}

function controle03()
{
if (fv.txtSymm.value == "") alert('Geef de vergelijking van de symmetrie-as in.')
else
if (fv.txtSymm.value == Xtop) fv.opl03.src = "../images/goed.gif"
else fv.opl03.src = "../images/fout.gif"
}

function wijzigbld()
{
var nummer = document.fv.keuzebld.options[document.fv.keuzebld.selectedIndex].value;
var bldvoor = 'images/4verloop_bld_1_' + nummer + '.gif';
var bldachter = 'images/4verloop_bld_2_' + nummer + '.gif';
document.bld1.src= bldvoor;
document.bld2.src= bldachter;
}

function controle04()
{
if (fv.txtBld.value == "") alert('Geef het minimum of maximum in.')
else
if ((((fv.keuzebld.value == "1") && (A > 0)) || ((fv.keuzebld.value == "2") && (A < 0))) && (fv.txtBld.value == Ytop)) fv.opl04.src = "../images/goed.gif"
else fv.opl04.src = "../images/fout.gif"
}

function wijzignp()
{
var aantalnp = document.fv.keuzenp.options[document.fv.keuzenp.selectedIndex].value;

if (aantalnp == "x") 
	{
	fv.opl05.src = "../images/vraagteken.gif"
	document.all.Dnul.style.display= "none";
	document.all.Dpos.style.display= "none";
	document.all.Dnegtabel.style.display= "none";
	document.all.Dnultabel.style.display= "none";
	document.all.Dpostabel.style.display= "none";
	}
if (aantalnp == "0") 
	{
	if (aantalnp == typeoefening)
		{
		fv.opl05.src = "../images/goed.gif"
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "none";
		document.all.Dnegtabel.style.display= "";
		document.all.Dnultabel.style.display= "none";
		document.all.Dpostabel.style.display= "none";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "1") 
	{
	if (aantalnp == typeoefening)
		{
		fv.opl05.value = ""
		document.all.Dnul.style.display= "";
		document.all.Dpos.style.display= "none";
		document.all.Dnegtabel.style.display= "none";
		document.all.Dnultabel.style.display= "";
		document.all.Dpostabel.style.display= "none";
		}
	else fv.opl05.src = "../images/fout.gif"
	}

if (aantalnp == "2") 
	{
	if (aantalnp == typeoefening)
		{
		fv.opl05.value = ""
		document.all.Dnul.style.display= "none";
		document.all.Dpos.style.display= "";
		document.all.Dnegtabel.style.display= "none";
		document.all.Dnultabel.style.display= "none";
		document.all.Dpostabel.style.display= "";
		}
	else fv.opl05.src = "../images/fout.gif"
	}
}

function controle05()
{
if (typeoefening == 1)
	{
	if (fv.enigeopl.value == "") alert('Geef het nulpunt in.')
	else
	if (fv.enigeopl.value == X1) fv.opl05.src = "../images/goed.gif"
	else fv.opl05.src = "../images/fout.gif"
	}
if (typeoefening == 2)
	{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "")) alert('Geef beide nulpunten in.')
	else
	if (((fv.oplx1.value == X1) && (fv.oplx2.value == X2)) || ((fv.oplx1.value == X2) && (fv.oplx2.value == X1))) fv.opl05.src = "../images/goed.gif"
	else fv.opl05.src = "../images/fout.gif"
	}
	
}

function controle06()
{
var teken = ""
var minteken = ""
if (A > 0) 
	{
	teken = "p"
	minteken = "m"
	}
if (A < 0)
	{
	teken = "m"
	minteken = "p"
	}
	
var kleinstenulpunt = Math.min(X1,X2)
var grootstestenulpunt = Math.max(X1,X2) 

if (typeoefening == 0)
	{
	if (fv.tek01.value == teken) fv.opl06.src = "../images/goed.gif"
	else fv.opl06.src = "../images/fout.gif"
	}

if (typeoefening == 1)
	{
	if ((fv.np.value == X1) && (fv.tek11.value == teken) && (fv.tek12.value == "n") && (fv.tek13.value == teken)) fv.opl06.src = "../images/goed.gif"
	else fv.opl06.src = "../images/fout.gif"
	}

if (typeoefening == 2)
	{
	if ((fv.np1.value == kleinstenulpunt) && (fv.np2.value == grootstestenulpunt) && (fv.tek21.value == teken) && (fv.tek22.value == "n") && (fv.tek23.value == minteken) && (fv.tek24.value == "n") && (fv.tek25.value == teken)) fv.opl06.src = "../images/goed.gif"
	else fv.opl06.src = "../images/fout.gif"
	}
	
}

function wijzigminmax()
{
if (fv.minmax.value == "???")
	{
	document.linkstop.src = "images/4verloop_leeg.gif"
	document.rechtstop.src = "images/4verloop_leeg.gif"
	} 
if (fv.minmax.value == "min")
	{
	document.linkstop.src = "images/4verloop_dalend.gif"
	document.rechtstop.src = "images/4verloop_stijgend.gif"
	} 
if (fv.minmax.value == "max")
	{
	document.linkstop.src = "images/4verloop_stijgend.gif"
	document.rechtstop.src = "images/4verloop_dalend.gif"
	} 
}

function controle07()
{
if ((fv.topx.value == "") || (fv.topy.value == "") || (fv.minmax.value == "???")) alert('Geef de coördinaten in en kies of een minimum of maximum betreft.')
else
if ((fv.topx.value == Xtop) && (fv.topy.value == Ytop) && (((fv.minmax.value == "min") && (A > 0)) || ((fv.minmax.value == "max") && (A < 0)))) fv.opl07.src = "../images/goed.gif"
else fv.opl07.src = "../images/fout.gif"
}

function toonpunten()
{
Xtopfloat = Xtopteller / Xtopnoemer;
Ytopfloat = Ytopteller / Ytopnoemer;

if (Math.round(Xtopfloat) == Xtopfloat)
	{
	fv.x1.value = Xtopfloat - 3;
	fv.x2.value = Xtopfloat - 2;
	fv.x3.value = Xtopfloat - 1;
	fv.x4.value = Xtop;
	fv.x5.value = Xtopfloat + 1;
	fv.x6.value = Xtopfloat + 2;
	fv.x7.value = Xtopfloat + 3;
	}
else
	{
	fv.x1.value = Xtopfloat - 2.5;
	fv.x2.value = Xtopfloat - 1.5;
	fv.x3.value = Xtopfloat - 0.5;
	fv.x4.value = Xtop;
	fv.x5.value = Xtopfloat + 0.5;
	fv.x6.value = Xtopfloat + 1.5;
	fv.x7.value = Xtopfloat + 2.5;
	}

fv.y1.value = A * fv.x1.value * fv.x1.value + B * fv.x1.value + C;
fv.y2.value = A * fv.x2.value * fv.x2.value + B * fv.x2.value + C;
fv.y3.value = A * fv.x3.value * fv.x3.value + B * fv.x3.value + C;
fv.y4.value = Ytop;
fv.y5.value = A * fv.x5.value * fv.x5.value + B * fv.x5.value + C;
fv.y6.value = A * fv.x6.value * fv.x6.value + B * fv.x6.value + C;
fv.y7.value = A * fv.x7.value * fv.x7.value + B * fv.x7.value + C;
}