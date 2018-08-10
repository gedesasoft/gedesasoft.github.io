var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var normA = 0
var normB = 0
var hoekrad = 0
var hoekdeg = 0
var gr = 0
var min = 0
var sec = 0
var sp = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
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

function kiesgetallen()
{
 
if (typeoefening == 1)
	{
	normA = Math.floor(Math.random() * 20 ) + 1
	normB = Math.floor(Math.random() * 20 ) + 1
	hoekrad = Math.random() * Math.PI
	hoekdeg = hoekrad * 180 / Math.PI
	omzetten(hoekdeg)
	gr = hoekgrad
	min = hoekmin
	sec = hoeksec	
	sp = Math.round(normA * normB * Math.cos(hoekrad) * 100) / 100
	}
	
if (typeoefening == 2)
	{
	sp = 0
	while (sp == 0)	sp = Math.floor(Math.random() * 100 )  - 50
	normB = Math.floor(Math.random() * 20 ) + 1
	if (sp > 0) hoekrad = Math.random() * Math.PI / 2
	if (sp < 0) hoekrad = Math.random() * Math.PI / 2 + (Math.PI / 2)
	hoekdeg = hoekrad * 180 / Math.PI
	omzetten(hoekdeg)
	gr = hoekgrad
	min = hoekmin
	sec = hoeksec	
	normA = Math.round(sp / (normB * Math.cos(hoekrad)) * 100) / 100
	}

if (typeoefening == 3)
	{
	sp = 0
	while (sp == 0)	sp = Math.floor(Math.random() * 100 )  - 50
	normA = Math.floor(Math.random() * 20 ) + 1
	if (sp > 0) hoekrad = Math.random() * Math.PI / 2
	if (sp < 0) hoekrad = Math.random() * Math.PI / 2 + (Math.PI / 2)
	hoekdeg = hoekrad * 180 / Math.PI
	omzetten(hoekdeg)
	gr = hoekgrad
	min = hoekmin
	sec = hoeksec	
	normB = Math.round(sp / (normA * Math.cos(hoekrad)) * 100) / 100
	}

if (typeoefening == 4)
	{
	sp = 0
	while (sp == 0)	sp = Math.floor(Math.random() * 100 )  - 50
	normA = Math.floor(Math.random() * 20 ) + 1
	normB = Math.floor(Math.random() * 20 ) + 1
	hoekrad = Math.acos(sp / (normA * normB))
	hoekdeg = hoekrad * 180 / Math.PI
	omzetten(hoekdeg)
	gr = hoekgrad
	min = hoekmin
	sec = hoeksec	
	}

if (typeoefening == 5)
	{
	X1 = Math.floor(Math.random() * 20 ) - 9
	Y1 = Math.floor(Math.random() * 20 ) - 9
	X2 = Math.floor(Math.random() * 20 ) - 9
	Y2 = Math.floor(Math.random() * 20 ) - 9
	normA = Math.sqrt(X1 * X1 + Y1 * Y1)
	normB = Math.sqrt(X2 * X2 + Y2 * Y2)
	sp = X1 * X2 + Y1 * Y2
	hoekrad = Math.acos(sp / (normA * normB))
	hoekdeg = hoekrad * 180 / Math.PI
	omzetten(hoekdeg)
	gr = hoekgrad
	min = hoekmin
	sec = hoeksec	
	}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 5) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.all.oef1.style.display = ""
	coeff.txt1normA.value = normA
	coeff.txt1normB.value = normB
	coeff.txt1gr.value = gr
	coeff.txt1min.value = min
	coeff.txt1sec.value = sec
	}

if (typeoefening == 2)
	{
	document.all.oef2.style.display = ""
	coeff.txt2normB.value = normB
	coeff.txt2gr.value = gr
	coeff.txt2min.value = min
	coeff.txt2sec.value = sec
	coeff.txt2sp.value = sp
	}

if (typeoefening == 3)
	{
	document.all.oef3.style.display = ""
	coeff.txt3normA.value = normA
	coeff.txt3gr.value = gr
	coeff.txt3min.value = min
	coeff.txt3sec.value = sec
	coeff.txt3sp.value = sp
	}

if (typeoefening == 4)
	{
	document.all.oef4.style.display = ""
	coeff.txt4normA.value = normA
	coeff.txt4normB.value = normB
	coeff.txt4sp.value = sp
	}

if (typeoefening == 5)
	{
	document.all.oef5.style.display = ""
	coeff.txt5X1.value = X1
	coeff.txt5Y1.value = Y1
	coeff.txt5X2.value = X2
	coeff.txt5Y2.value = Y2
	}
}


function nieuwoef()
{
algemaakt = 0
coeff.opl.src = "../images/vraagteken.gif"
document.all.oef1.style.display = "none"
document.all.oef2.style.display = "none"
document.all.oef3.style.display = "none"
document.all.oef4.style.display = "none"
document.all.oef5.style.display = "none"
document.coeff.txt1normA.value = ""
document.coeff.txt1normB.value = ""
document.coeff.txt1gr.value = ""
document.coeff.txt1min.value = ""
document.coeff.txt1sec.value = ""
document.coeff.txt1sp.value = ""
document.coeff.txt2normA.value = ""
document.coeff.txt2normB.value = ""
document.coeff.txt2gr.value = ""
document.coeff.txt2min.value = ""
document.coeff.txt2sec.value = ""
document.coeff.txt2sp.value = ""
document.coeff.txt3normA.value = ""
document.coeff.txt3normB.value = ""
document.coeff.txt3gr.value = ""
document.coeff.txt3min.value = ""
document.coeff.txt3sec.value = ""
document.coeff.txt3sp.value = ""
document.coeff.txt4normA.value = ""
document.coeff.txt4normB.value = ""
document.coeff.txt4gr.value = ""
document.coeff.txt4min.value = ""
document.coeff.txt4sec.value = ""
document.coeff.txt4sp.value = ""
document.coeff.txt5gr.value = ""
document.coeff.txt5min.value = ""
document.coeff.txt5sec.value = ""
document.coeff.txt5X1.value = ""
document.coeff.txt5Y1.value = ""
document.coeff.txt5X2.value = ""
document.coeff.txt5Y2.value = ""
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening')
else
	{
	if (typeoefening == 1)
		{
		if (coeff.txt1sp.value == "") alert('Geef a.u.b. het scalair product van de vectoren in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt1sp.value) == sp)
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 2)
		{
		if (coeff.txt2normA.value == "") alert('Geef a.u.b. de norm van vector A in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt2normA.value) == normA)
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 3)
		{
		if (coeff.txt3normB.value == "") alert('Geef a.u.b. de norm van vector B in.') 
		else
			{
			pogingenteller++
			if (eval(coeff.txt3normB.value) == normB)
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 4)
		{
		if ((coeff.txt4gr.value == "") || (coeff.txt4min.value == "") || (coeff.txt4sec.value == "")) alert('Geef a.u.b. de hoek in graden, minuten en seconden in\n(typ eventueel een nul in één van de vakjes).') 
		else
			{
			pogingenteller++
			if ((eval(coeff.txt4gr.value) == gr) && (eval(coeff.txt4min.value) == min) && (eval(coeff.txt4sec.value) == sec))
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	if (typeoefening == 5)
		{
		if ((coeff.txt5gr.value == "") || (coeff.txt5min.value == "") || (coeff.txt5sec.value == "")) alert('Geef a.u.b. de hoek in graden, minuten en seconden in\n(typ eventueel een nul in één van de vakjes).') 
		else
			{
			pogingenteller++
			if ((eval(coeff.txt5gr.value) == gr) && (eval(coeff.txt5min.value) == min) && (eval(coeff.txt5sec.value) == sec))
				{
				oplossingenteller++
				coeff.opl.src = "../images/goed.gif"
				algemaakt = 1
				} 	
			else coeff.opl.src = "../images/fout.gif"
			}
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}

}
