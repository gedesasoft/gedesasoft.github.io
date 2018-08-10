var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var graad = ""
var factor = 0;
var rest = 0;
var staaf1 = 0;
var staaf2 = 0;
var staaf3 = 0;
var staaf4 = 0;
var staaf5 = 0;
var staaf6 = 0;
var staaf7 = 0;
var strook1 = 0;
var strook2 = 0;
var strook3 = 0;
var strook4 = 0;
var strook5 = 0;
var strook6 = 0;
var strook7 = 0;
var schijf1 = 0;
var schijf2 = 0;
var schijf3 = 0;
var schijf4 = 0;
var schijf5 = 0;
var schijf6 = 0;
var schijf7 = 360;
var totaalstaaf = 0;
var somstaaf = 0
var somstrook = 0
var somschijf = 0

var staaf = "";
var strook = "";
var schijf = "";


function wistabel()
{
document.tabel.txtstaaf1.value = "";
document.tabel.txtstaaf2.value = "";
document.tabel.txtstaaf3.value = "";
document.tabel.txtstaaf4.value = "";
document.tabel.txtstaaf5.value = "";
document.tabel.txtstaaf6.value = "";
document.tabel.txtstaaf7.value = "";
document.tabel.txtstrook1.value = "";
document.tabel.txtstrook2.value = "";
document.tabel.txtstrook3.value = "";
document.tabel.txtstrook4.value = "";
document.tabel.txtstrook5.value = "";
document.tabel.txtstrook6.value = "";
document.tabel.txtstrook7.value = "";
document.tabel.txtschijf1.value = "";
document.tabel.txtschijf2.value = "";
document.tabel.txtschijf3.value = "";
document.tabel.txtschijf4.value = "";
document.tabel.txtschijf5.value = "";
document.tabel.txtschijf6.value = "";
document.tabel.txtschijf7.value = "";
}

function kiesgetallen()
{
somschijf = 1

while ((somstaaf != staaf7) || (somstrook != strook7) || (somschijf != schijf7))
{ 
if (typeoefening == 1)
	{
	staaf1 = Math.floor(Math.random() * 15) + 1;
	staaf2 = Math.floor(Math.random() * 15) + 1;
	staaf3 = Math.floor(Math.random() * 15) + 1;
	staaf4 = Math.floor(Math.random() * 15) + 1;
	staaf5 = Math.floor(Math.random() * 15) + 1;
	staaf6 = Math.floor(Math.random() * 15) + 1;

	somstaaf = staaf1 + staaf2 + staaf3 + staaf4 + staaf5 + staaf6
  	staaf7 = somstaaf
	
	strook7 = (Math.floor(Math.random() * 25) + 1) * 10;

	strook1 = Math.round(staaf1 * strook7 / staaf7)
	strook2 = Math.round(staaf2 * strook7 / staaf7)
	strook3 = Math.round(staaf3 * strook7 / staaf7)
	strook4 = Math.round(staaf4 * strook7 / staaf7)
	strook5 = Math.round(staaf5 * strook7 / staaf7)
	strook6 = Math.round(staaf6 * strook7 / staaf7)
	somstrook = strook1 + strook2 + strook3 + strook4 + strook5 + strook6
	
	schijf1 = Math.round(staaf1 * schijf7 / staaf7)
	schijf2 = Math.round(staaf2 * schijf7 / staaf7)
	schijf3 = Math.round(staaf3 * schijf7 / staaf7)
	schijf4 = Math.round(staaf4 * schijf7 / staaf7)
	schijf5 = Math.round(staaf5 * schijf7 / staaf7)
	schijf6 = Math.round(staaf6 * schijf7 / staaf7)
	somschijf = schijf1 + schijf2 + schijf3 + schijf4 + schijf5 + schijf6
	}

if (typeoefening == 2)
	{
	strook1 = Math.floor(Math.random() * 15) + 1;
	strook2 = Math.floor(Math.random() * 15) + 1;
	strook3 = Math.floor(Math.random() * 15) + 1;
	strook4 = Math.floor(Math.random() * 15) + 1;
	strook5 = Math.floor(Math.random() * 15) + 1;
	strook6 = Math.floor(Math.random() * 15) + 1;

	somstrook = strook1 + strook2 + strook3 + strook4 + strook5 + strook6
	strook7 = somstrook
 
	staaf7 = (Math.floor(Math.random() * 25) + 1) * 10;

	staaf1 = Math.round(strook1 * staaf7 / strook7)
	staaf2 = Math.round(strook2 * staaf7 / strook7)
	staaf3 = Math.round(strook3 * staaf7 / strook7)
	staaf4 = Math.round(strook4 * staaf7 / strook7)
	staaf5 = Math.round(strook5 * staaf7 / strook7)
	staaf6 = Math.round(strook6 * staaf7 / strook7)
	somstaaf = staaf1 + staaf2 + staaf3 + staaf4 + staaf5 + staaf6

	schijf1 = Math.round(strook1 * schijf7 / strook7)
	schijf2 = Math.round(strook2 * schijf7 / strook7)
	schijf3 = Math.round(strook3 * schijf7 / strook7)
	schijf4 = Math.round(strook4 * schijf7 / strook7)
	schijf5 = Math.round(strook5 * schijf7 / strook7)
	schijf6 = Math.round(strook6 * schijf7 / strook7)
	somschijf = schijf1 + schijf2 + schijf3 + schijf4 + schijf5 + schijf6
	}

if (typeoefening == 3)
	{
	schijf1 = Math.floor(Math.random() * 60) + 1;
	schijf2 = Math.floor(Math.random() * 60) + 1;
	schijf3 = Math.floor(Math.random() * 60) + 1;
	schijf4 = Math.floor(Math.random() * 60) + 1;
	schijf5 = Math.floor(Math.random() * 60) + 1;
	schijf6 = schijf7 - (schijf1 + schijf2 + schijf3 + schijf4 + schijf5)
	somschijf = schijf1 + schijf2 + schijf3 + schijf4 + schijf5 + schijf6
 
	strook7 = (Math.floor(Math.random() * 25) + 1) * 10;
	staaf7 = (Math.floor(Math.random() * 25) + 1) * 10;

	strook1 = Math.round(schijf1 * strook7 / schijf7)
	strook2 = Math.round(schijf2 * strook7 / schijf7)
	strook3 = Math.round(schijf3 * strook7 / schijf7)
	strook4 = Math.round(schijf4 * strook7 / schijf7)
	strook5 = Math.round(schijf5 * strook7 / schijf7)
	strook6 = Math.round(schijf6 * strook7 / schijf7)
	somstrook = strook1 + strook2 + strook3 + strook4 + strook5 + strook6

	staaf1 = Math.round(schijf1 * staaf7 / schijf7)
	staaf2 = Math.round(schijf2 * staaf7 / schijf7)
	staaf3 = Math.round(schijf3 * staaf7 / schijf7)
	staaf4 = Math.round(schijf4 * staaf7 / schijf7)
	staaf5 = Math.round(schijf5 * staaf7 / schijf7)
	staaf6 = Math.round(schijf6 * staaf7 / schijf7)
	somstaaf = staaf1 + staaf2 + staaf3 + staaf4 + staaf5 + staaf6
	}
}
}

function toonoef()
{
document.tabel.opl.src = "../images/vraagteken.gif"
document.tabel.opl1.src = "../images/vraagteken.gif"
document.tabel.opl2.src = "../images/vraagteken.gif"
document.tabel.opl3.src = "../images/vraagteken.gif"
wistabel()

if (typeoefening == 1)
	{
	document.tabel.txtstaaf1.value = staaf1;
	document.tabel.txtstaaf2.value = staaf2;
	document.tabel.txtstaaf3.value = staaf3;
	document.tabel.txtstaaf4.value = staaf4;
	document.tabel.txtstaaf5.value = staaf5;
	document.tabel.txtstaaf6.value = staaf6;
	document.tabel.txtstrook7.value = strook7;
	}

if (typeoefening == 2)
	{
	document.tabel.txtstrook1.value = strook1;
	document.tabel.txtstrook2.value = strook2;
	document.tabel.txtstrook3.value = strook3;
	document.tabel.txtstrook4.value = strook4;
	document.tabel.txtstrook5.value = strook5;
	document.tabel.txtstrook6.value = strook6;
	document.tabel.txtstaaf7.value = staaf7;
	}
	
if (typeoefening == 3)
	{
	document.tabel.txtschijf1.value = schijf1;
	document.tabel.txtschijf2.value = schijf2;
	document.tabel.txtschijf3.value = schijf3;
	document.tabel.txtschijf4.value = schijf4;
	document.tabel.txtschijf5.value = schijf5;
	document.tabel.txtschijf6.value = schijf6;
	document.tabel.txtstrook7.value = strook7;
	document.tabel.txtstaaf7.value = staaf7;
	}


}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1;
}

function nieuwoef()
{
	algemaakt = 0;
	staaf = "";
	strook = "";
	schijf = "";
	kiesoef()
	kiesgetallen()
	toonoef()
}

function controle1()
{
var antwstaaf1 = document.tabel.txtstaaf1.value
var antwstaaf2 = document.tabel.txtstaaf2.value
var antwstaaf3 = document.tabel.txtstaaf3.value
var antwstaaf4 = document.tabel.txtstaaf4.value
var antwstaaf5 = document.tabel.txtstaaf5.value
var antwstaaf6 = document.tabel.txtstaaf6.value
var antwstaaf7 = document.tabel.txtstaaf7.value

if ((antwstaaf1 == staaf1) && (antwstaaf2 == staaf2) && (antwstaaf3 == staaf3) && (antwstaaf4 == staaf4) && (antwstaaf5 == staaf5) && (antwstaaf6 == staaf6) && (antwstaaf7 == staaf7)) 
	{
	staaf = "ok"
	document.tabel.opl1.src = "../images/goed.gif"
	}   
else document.tabel.opl1.src = "../images/fout.gif"
}


function controle2()
{
var antwstrook1 = document.tabel.txtstrook1.value
var antwstrook2 = document.tabel.txtstrook2.value
var antwstrook3 = document.tabel.txtstrook3.value
var antwstrook4 = document.tabel.txtstrook4.value
var antwstrook5 = document.tabel.txtstrook5.value
var antwstrook6 = document.tabel.txtstrook6.value
var antwstrook7 = document.tabel.txtstrook7.value

if ((antwstrook1 == strook1) && (antwstrook2 == strook2) && (antwstrook3 == strook3) && (antwstrook4 == strook4) && (antwstrook5 == strook5) && (antwstrook6 == strook6) && (antwstrook7 == strook7)) 
	{
	strook = "ok"
	document.tabel.opl2.src = "../images/goed.gif"
	}   
else document.tabel.opl2.src = "../images/fout.gif"
}

function controle3()
{
var antwschijf1 = document.tabel.txtschijf1.value
var antwschijf2 = document.tabel.txtschijf2.value
var antwschijf3 = document.tabel.txtschijf3.value
var antwschijf4 = document.tabel.txtschijf4.value
var antwschijf5 = document.tabel.txtschijf5.value
var antwschijf6 = document.tabel.txtschijf6.value
var antwschijf7 = document.tabel.txtschijf7.value

if ((antwschijf1 == schijf1) && (antwschijf2 == schijf2) && (antwschijf3 == schijf3) && (antwschijf4 == schijf4) && (antwschijf5 == schijf5) && (antwschijf6 == schijf6) && (antwschijf7 == schijf7)) 
	{
	schijf = "ok"
	document.tabel.opl3.src = "../images/goed.gif"
	}   
else document.tabel.opl3.src = "../images/fout.gif"
}


function controle() 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	staaf = "";
	strook = "";
	schijf = "";
	controle1()
	controle2()
	controle3()
	if ((strook == "ok") && (schijf == "ok") && (staaf == "ok")) 
		{
		algemaakt = 1
		tabel.opl.src = "../images/goed.gif"		
		oplossingenteller++;
		}
	else 
		{
		tabel.opl.src = "../images/fout.gif"
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.tabel.aantaljuist.value = oplossingenteller
	document.tabel.aantalpogingen.value = pogingenteller
	document.tabel.percentage.value = procent		
	}
}
