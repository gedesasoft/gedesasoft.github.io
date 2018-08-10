var algemaakt = 0;
var typeoefening = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var graad = ""
var klassenbreedte = 0;
var variatie = 0;
var modus = 0;
var rest = 0;
var klasseX1 = "";
var klasseX2 = "";
var klasseX3 = "";
var klasseX4 = "";
var klasseX5 = "";
var klasseX6 = "";
var klasseX7 = "";
var klasseX8 = "";
var X1 = 0;
var X2 = 0;
var X3 = 0;
var X4 = 0;
var X5 = 0;
var X6 = 0;
var X7 = 0;
var X8 = 0;
var N1 = 0;
var N2 = 0;
var N3 = 0;
var N4 = 0;
var N5 = 0;
var N6 = 0;
var N7 = 0;
var N8 = 0;


function kiesvariatie()
{
variatie = Math.floor(Math.random() * 2);
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1;
}

function kieswaarnemingsgetallen()
{
if (variatie == 0)
	{
	X1 = Math.floor(Math.random() * 100) + 1;
	X2 = Math.floor(Math.random() * 20) + 1 + X1;
	X3 = Math.floor(Math.random() * 20) + 1 + X2;
	X4 = Math.floor(Math.random() * 20) + 1 + X3;
	X5 = Math.floor(Math.random() * 20) + 1 + X4;
	X6 = Math.floor(Math.random() * 20) + 1 + X5;
	X7 = Math.floor(Math.random() * 20) + 1 + X6;
	X8 = Math.floor(Math.random() * 20) + 1 + X7;
	}
if (variatie == 1)
	{
	klassenbreedte = (Math.floor(Math.random() * 10) + 1) * 2;
	X1 = Math.floor(Math.random() * 100) + 1 + klassenbreedte;
	X2 = X1 + klassenbreedte
	X3 = X2 + klassenbreedte
	X4 = X3 + klassenbreedte
	X5 = X4 + klassenbreedte
	X6 = X5 + klassenbreedte
	X7 = X6 + klassenbreedte
	X8 = X7 + klassenbreedte
	klasseX1 = "[" + (X1 - (klassenbreedte / 2)) + ","  + (X1 + (klassenbreedte / 2)) + "["
	klasseX2 = "[" + (X2 - (klassenbreedte / 2)) + ","  + (X2 + (klassenbreedte / 2)) + "["
	klasseX3 = "[" + (X3 - (klassenbreedte / 2)) + ","  + (X3 + (klassenbreedte / 2)) + "["
	klasseX4 = "[" + (X4 - (klassenbreedte / 2)) + ","  + (X4 + (klassenbreedte / 2)) + "["
	klasseX5 = "[" + (X5 - (klassenbreedte / 2)) + ","  + (X5 + (klassenbreedte / 2)) + "["
	klasseX6 = "[" + (X6 - (klassenbreedte / 2)) + ","  + (X6 + (klassenbreedte / 2)) + "["
	klasseX7 = "[" + (X7 - (klassenbreedte / 2)) + ","  + (X7 + (klassenbreedte / 2)) + "["
	klasseX8 = "[" + (X8 - (klassenbreedte / 2)) + ","  + (X8 + (klassenbreedte / 2)) + "["
	}
}


function kiesabsolutefrequenties()
{
N1 = Math.floor(Math.random() * 20) + 1;
N2 = N1 + Math.floor(Math.random() * 10)
N3 = N2 + Math.floor(Math.random() * 10)
N4 = N3 + Math.floor(Math.random() * 10)
N5 = N4 + Math.floor(Math.random() * 10)
N6 = N5 + Math.floor(Math.random() * 10)
N7 = N6 + Math.floor(Math.random() * 10)
N8 = N7 + Math.floor(Math.random() * 10) + 1
}


function toonoef()
{
if (variatie == 0)
	{
	document.all.xi.style.display = ""
	document.all.klasse.style.display = "none"
	document.freq_tabel.txtX1.value = X1;
	document.freq_tabel.txtX2.value = X2;
	document.freq_tabel.txtX3.value = X3;
	document.freq_tabel.txtX4.value = X4;
	document.freq_tabel.txtX5.value = X5;
	document.freq_tabel.txtX6.value = X6;
	document.freq_tabel.txtX7.value = X7;
	document.freq_tabel.txtX8.value = X8;
	}
	
if (variatie == 1)
	{
	document.all.xi.style.display = "none"
	document.all.klasse.style.display = ""
	document.freq_tabel.txtX1.value = klasseX1;
	document.freq_tabel.txtX2.value = klasseX2;
	document.freq_tabel.txtX3.value = klasseX3;
	document.freq_tabel.txtX4.value = klasseX4;
	document.freq_tabel.txtX5.value = klasseX5;
	document.freq_tabel.txtX6.value = klasseX6;
	document.freq_tabel.txtX7.value = klasseX7;
	document.freq_tabel.txtX8.value = klasseX8;
	}
	
	document.freq_tabel.opl.src = "../images/vraagteken.gif"

if (typeoefening == 1)
	{
	document.freq_tabel.txtN1.value = N8;
	document.freq_tabel.txtN2.value = N3;
	document.freq_tabel.txtN3.value = N2;
	document.freq_tabel.txtN4.value = N5;
	document.freq_tabel.txtN5.value = N4;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N1;
	modus = X1
	}

if (typeoefening == 2)
	{
	document.freq_tabel.txtN1.value = N3;
	document.freq_tabel.txtN2.value = N8;
	document.freq_tabel.txtN3.value = N2;
	document.freq_tabel.txtN4.value = N5;
	document.freq_tabel.txtN5.value = N1;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N4;
	modus = X2
	}

if (typeoefening == 3)
	{
	document.freq_tabel.txtN1.value = N5;
	document.freq_tabel.txtN2.value = N7;
	document.freq_tabel.txtN3.value = N8;
	document.freq_tabel.txtN4.value = N3;
	document.freq_tabel.txtN5.value = N1;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N2;
	document.freq_tabel.txtN8.value = N4;
	modus = X3
	}

if (typeoefening == 4)
	{
	document.freq_tabel.txtN1.value = N3;
	document.freq_tabel.txtN2.value = N7;
	document.freq_tabel.txtN3.value = N1;
	document.freq_tabel.txtN4.value = N8;
	document.freq_tabel.txtN5.value = N5;
	document.freq_tabel.txtN6.value = N2;
	document.freq_tabel.txtN7.value = N6;
	document.freq_tabel.txtN8.value = N4;
	modus = X4
	}

if (typeoefening == 5)
	{
	document.freq_tabel.txtN1.value = N5;
	document.freq_tabel.txtN2.value = N4;
	document.freq_tabel.txtN3.value = N3;
	document.freq_tabel.txtN4.value = N1;
	document.freq_tabel.txtN5.value = N8;
	document.freq_tabel.txtN6.value = N2;
	document.freq_tabel.txtN7.value = N6;
	document.freq_tabel.txtN8.value = N7;
	modus = X5
	}

if (typeoefening == 6)
	{
	document.freq_tabel.txtN1.value = N7;
	document.freq_tabel.txtN2.value = N4;
	document.freq_tabel.txtN3.value = N6;
	document.freq_tabel.txtN4.value = N3;
	document.freq_tabel.txtN5.value = N2;
	document.freq_tabel.txtN6.value = N8;
	document.freq_tabel.txtN7.value = N1;
	document.freq_tabel.txtN8.value = N5;
	modus = X6
	}

if (typeoefening == 7)
	{
	document.freq_tabel.txtN1.value = N4;
	document.freq_tabel.txtN2.value = N7;
	document.freq_tabel.txtN3.value = N1;
	document.freq_tabel.txtN4.value = N3;
	document.freq_tabel.txtN5.value = N2;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N8;
	document.freq_tabel.txtN8.value = N5;
	modus = X7
	}

if (typeoefening == 8)
	{
	document.freq_tabel.txtN1.value = N4;
	document.freq_tabel.txtN2.value = N7;
	document.freq_tabel.txtN3.value = N5;
	document.freq_tabel.txtN4.value = N6;
	document.freq_tabel.txtN5.value = N2;
	document.freq_tabel.txtN6.value = N3;
	document.freq_tabel.txtN7.value = N1;
	document.freq_tabel.txtN8.value = N8;
	modus = X8
	}
}


function nieuwoef()
{
	document.freq_tabel.txtgemiddelde.value = ""
	freq_tabel.opl.src = "../images/vraagteken.gif"
	algemaakt = 0;
	kiesoef()
	kiesvariatie()
	kieswaarnemingsgetallen()
	kiesabsolutefrequenties()
	toonoef()
}


function controle() 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (document.freq_tabel.txtgemiddelde.value == modus)
		{
		algemaakt = 1
		freq_tabel.opl.src = "../images/goed.gif"		
		oplossingenteller++;
		}
	else 
		{
		freq_tabel.opl.src = "../images/fout.gif"
		}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.freq_tabel.aantaljuist.value = oplossingenteller
	document.freq_tabel.aantalpogingen.value = pogingenteller
	document.freq_tabel.percentage.value = procent		
	}
}
