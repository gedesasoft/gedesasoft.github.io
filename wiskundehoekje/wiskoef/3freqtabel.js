var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var graad = ""
var factor = 0;
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
var F1 = 0;
var F2 = 0;
var F3 = 0;
var F4 = 0;
var F5 = 0;
var F6 = 0;
var F7 = 0;
var F8 = 0;
var CN1 = 0;
var CN2 = 0;
var CN3 = 0;
var CN4 = 0;
var CN5 = 0;
var CN6 = 0;
var CN7 = 0;
var CN8 = 0;
var CF1 = 0;
var CF2 = 0;
var CF3 = 0;
var CF4 = 0;
var CF5 = 0;
var CF6 = 0;
var CF7 = 0;
var CF8 = 0;
var N = "";
var F = "";
var CN = "";
var CF = "";

function kiesvariatie()
{
variatie = Math.floor(Math.random() * 2);
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

function wistabel()
{
document.freq_tabel.txtN1.value = "";
document.freq_tabel.txtN2.value = "";
document.freq_tabel.txtN3.value = "";
document.freq_tabel.txtN4.value = "";
document.freq_tabel.txtN5.value = "";
document.freq_tabel.txtN6.value = "";
document.freq_tabel.txtN7.value = "";
document.freq_tabel.txtN8.value = "";
document.freq_tabel.txtF1.value = "";
document.freq_tabel.txtF2.value = "";
document.freq_tabel.txtF3.value = "";
document.freq_tabel.txtF4.value = "";
document.freq_tabel.txtF5.value = "";
document.freq_tabel.txtF6.value = "";
document.freq_tabel.txtF7.value = "";
document.freq_tabel.txtF8.value = "";
document.freq_tabel.txtCN1.value = "";
document.freq_tabel.txtCN2.value = "";
document.freq_tabel.txtCN3.value = "";
document.freq_tabel.txtCN4.value = "";
document.freq_tabel.txtCN5.value = "";
document.freq_tabel.txtCN6.value = "";
document.freq_tabel.txtCN7.value = "";
document.freq_tabel.txtCN8.value = "";
document.freq_tabel.txtCF1.value = "";
document.freq_tabel.txtCF2.value = "";
document.freq_tabel.txtCF3.value = "";
document.freq_tabel.txtCF4.value = "";
document.freq_tabel.txtCF5.value = "";
document.freq_tabel.txtCF6.value = "";
document.freq_tabel.txtCF7.value = "";
document.freq_tabel.txtCF8.value = "";
}

function kiesabsolutefrequenties()
{
factor = Math.floor(Math.random() * 8);
if (factor == 0) CN8 = 25;
if (factor == 1) CN8 = 40;
if (factor == 2) CN8 = 50;
if (factor == 3) CN8 = 100;
if (factor == 4) CN8 = 125;
if (factor == 5) CN8 = 200;
if (factor == 6) CN8 = 500;
if (factor == 7) CN8 = 1000;

N1 = Math.floor(Math.random() * CN8 / 2);
rest = CN8 - N1
N2 = Math.floor(Math.random() * rest / 2);
rest = rest - N2
N3 = Math.floor(Math.random() * rest / 2);
rest = rest - N3
N4 = Math.floor(Math.random() * rest / 2);
rest = rest - N4
N5 = Math.floor(Math.random() * rest / 2);
rest = rest - N5
N6 = Math.floor(Math.random() * rest / 2);
rest = rest - N6
N7 = Math.floor(Math.random() * rest / 2);
N8 = rest - N7
}

function berekenanderefrequenties()
{
F1 = N1 / CN8;
F2 = N2 / CN8;
F3 = N3 / CN8;
F4 = N4 / CN8;
F5 = N5 / CN8;
F6 = N6 / CN8;
F7 = N7 / CN8;
F8 = N8 / CN8;

CN1 = N1;
CN2 = CN1 + N2;
CN3 = CN2 + N3;
CN4 = CN3 + N4;
CN5 = CN4 + N5;
CN6 = CN5 + N6;
CN7 = CN6 + N7;
CN8 = CN7 + N8;

CF1 = Math.round((F1) * 1000) / 1000;
CF2 = Math.round((CF1 + F2) * 1000) / 1000;
CF3 = Math.round((CF2 + F3) * 1000) / 1000;
CF4 = Math.round((CF3 + F4) * 1000) / 1000;
CF5 = Math.round((CF4 + F5) * 1000) / 1000;
CF6 = Math.round((CF5 + F6) * 1000) / 1000;
CF7 = Math.round((CF6 + F7) * 1000) / 1000;
CF8 = Math.round((CF7 + F8) * 1000) / 1000;
}

function toonoef()
{
document.freq_tabel.opl.src = "../images/vraagteken.gif"
document.freq_tabel.opl1.src = "../images/vraagteken.gif"
document.freq_tabel.opl2.src = "../images/vraagteken.gif"
document.freq_tabel.opl3.src = "../images/vraagteken.gif"
document.freq_tabel.opl4.src = "../images/vraagteken.gif"
wistabel()

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

if (typeoefening == 1)
	{
	document.freq_tabel.txtN1.value = N1;
	document.freq_tabel.txtN2.value = N2;
	document.freq_tabel.txtN3.value = N3;
	document.freq_tabel.txtN4.value = N4;
	document.freq_tabel.txtN5.value = N5;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;
	}
	
if (typeoefening == 2)
	{
	document.freq_tabel.txtF1.value = F1;
	document.freq_tabel.txtF2.value = F2;
	document.freq_tabel.txtF3.value = F3;
	document.freq_tabel.txtF4.value = F4;
	document.freq_tabel.txtF5.value = F5;
	document.freq_tabel.txtF6.value = F6;
	document.freq_tabel.txtF7.value = F7;
	document.freq_tabel.txtF8.value = F8;
	document.freq_tabel.txtCN8.value = CN8;
	}

if (typeoefening == 3)
	{
	document.freq_tabel.txtCN1.value = CN1;
	document.freq_tabel.txtCN2.value = CN2;
	document.freq_tabel.txtCN3.value = CN3;
	document.freq_tabel.txtCN4.value = CN4;
	document.freq_tabel.txtCN5.value = CN5;	
	document.freq_tabel.txtCN6.value = CN6;
	document.freq_tabel.txtCN7.value = CN7;
	document.freq_tabel.txtCN8.value = CN8;
	}

if (typeoefening == 4)
	{
	document.freq_tabel.txtCF1.value = CF1;
	document.freq_tabel.txtCF2.value = CF2;
	document.freq_tabel.txtCF3.value = CF3;
	document.freq_tabel.txtCF4.value = CF4;
	document.freq_tabel.txtCF5.value = CF5;
	document.freq_tabel.txtCF6.value = CF6;
	document.freq_tabel.txtCF7.value = CF7;
	document.freq_tabel.txtCF8.value = CF8;
	document.freq_tabel.txtCN8.value = CN8;
	}

if (typeoefening == 5)
	{
	document.freq_tabel.txtN1.value = N1;
	document.freq_tabel.txtN2.value = N2;
	document.freq_tabel.txtN3.value = N3;
	document.freq_tabel.txtN4.value = N4;
	document.freq_tabel.txtCN5.value = CN5;	
	document.freq_tabel.txtCN6.value = CN6;
	document.freq_tabel.txtCN7.value = CN7;
	document.freq_tabel.txtCN8.value = CN8;
	}

if (typeoefening == 6)
	{
	document.freq_tabel.txtCN1.value = CN1;
	document.freq_tabel.txtCN2.value = CN2;
	document.freq_tabel.txtCN3.value = CN3;
	document.freq_tabel.txtCN4.value = CN4;
	document.freq_tabel.txtN5.value = N5;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;
	}

if (typeoefening == 7)
	{
	document.freq_tabel.txtF1.value = F1;
	document.freq_tabel.txtF2.value = F2;
	document.freq_tabel.txtF3.value = F3;
	document.freq_tabel.txtCF4.value = CF4;
	document.freq_tabel.txtCF5.value = CF5;
	document.freq_tabel.txtCN6.value = CN6;
	document.freq_tabel.txtCN7.value = CN7;
	document.freq_tabel.txtCN8.value = CN8;
	}

if (typeoefening == 8)
	{
	document.freq_tabel.txtN1.value = N1;
	document.freq_tabel.txtN2.value = N2;
	if (N3 != 0) document.freq_tabel.txtN3.value = N3;
	else document.freq_tabel.txtCN8.value = CN8;
	document.freq_tabel.txtF3.value = F3;
	document.freq_tabel.txtF4.value = F4;
	document.freq_tabel.txtF5.value = F5;
	document.freq_tabel.txtCF6.value = CF6;
	document.freq_tabel.txtCF7.value = CF7;
	document.freq_tabel.txtCF8.value = CF8;
	}

if (typeoefening == 9)
	{
	document.freq_tabel.txtN1.value = N1;
	document.freq_tabel.txtN2.value = N2;
	if (N3 != 0) document.freq_tabel.txtN3.value = N3;
	else document.freq_tabel.txtCN8.value = CN8;
	document.freq_tabel.txtCF3.value = CF3;
	document.freq_tabel.txtCF4.value = CF4;
	document.freq_tabel.txtCF5.value = CF5;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;
	}

if (typeoefening == 10)
	{
	document.freq_tabel.txtF1.value = F1;
	document.freq_tabel.txtF2.value = F2;
	document.freq_tabel.txtCN3.value = CN3;
	document.freq_tabel.txtCN4.value = CN4;
	if (N5 != 0) document.freq_tabel.txtCN5.value = CN5;
	else document.freq_tabel.txtCN8.value = CN8;
	document.freq_tabel.txtCF5.value = CF5;
	document.freq_tabel.txtCF6.value = CF6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;
	}

if (typeoefening == 11)
	{
	document.freq_tabel.txtCF1.value = CF1;
	document.freq_tabel.txtCF2.value = CF2;
	document.freq_tabel.txtCN3.value = CN3;
	if (N4 != 0) document.freq_tabel.txtCN4.value = CN4;
	else document.freq_tabel.txtCN8.value = CN8;
	document.freq_tabel.txtF4.value = F4;
	document.freq_tabel.txtF5.value = F5;
	document.freq_tabel.txtF6.value = F6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;
	}

if (typeoefening == 12)
	{
	document.freq_tabel.txtCN1.value = CN1;
	document.freq_tabel.txtCN2.value = CN2;
	document.freq_tabel.txtCN3.value = CN3;
	document.freq_tabel.txtCF4.value = CF4;
	document.freq_tabel.txtCF5.value = CF5;
	document.freq_tabel.txtCF6.value = CF6;
	if (N5 != 0) document.freq_tabel.txtN5.value = N5;
	else document.freq_tabel.txtCN8.value = CN8;
	document.freq_tabel.txtF7.value = F7;
	document.freq_tabel.txtF8.value = F8;
	}
}

function kiesoef()
{
if (graad == "makk") typeoefening = Math.floor(Math.random() * 6) + 1;
if (graad == "moei") typeoefening = Math.floor(Math.random() * 6) + 7;
}

function nieuwoef()
{
graad = document.freq_tabel.kiesoef.options[document.freq_tabel.kiesoef.selectedIndex].value;
if (graad == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	algemaakt = 0;
	N = "";
	F = "";
	CN = "";
	CF = "";
	kiesvariatie()
	kiesoef()
	kieswaarnemingsgetallen()
	kiesabsolutefrequenties()
	berekenanderefrequenties()
	toonoef()
	}
}

function controle1()
{
var antwN1 = document.freq_tabel.txtN1.value
var antwN2 = document.freq_tabel.txtN2.value
var antwN3 = document.freq_tabel.txtN3.value
var antwN4 = document.freq_tabel.txtN4.value
var antwN5 = document.freq_tabel.txtN5.value
var antwN6 = document.freq_tabel.txtN6.value
var antwN7 = document.freq_tabel.txtN7.value
var antwN8 = document.freq_tabel.txtN8.value

if ((antwN1 == N1) && (antwN2 == N2) && (antwN3 == N3) && (antwN4 == N4) && (antwN5 == N5) && (antwN6 == N6) && (antwN7 == N7) && (antwN8 == N8)) 
	{
	N = "ok"
	document.freq_tabel.opl1.src = "../images/goed.gif"
	}   
else document.freq_tabel.opl1.src = "../images/fout.gif"
}

function controle2()
{
var antwF1 = document.freq_tabel.txtF1.value
var antwF2 = document.freq_tabel.txtF2.value
var antwF3 = document.freq_tabel.txtF3.value
var antwF4 = document.freq_tabel.txtF4.value
var antwF5 = document.freq_tabel.txtF5.value
var antwF6 = document.freq_tabel.txtF6.value
var antwF7 = document.freq_tabel.txtF7.value
var antwF8 = document.freq_tabel.txtF8.value

if ((antwF1 == F1) && (antwF2 == F2) && (antwF3 == F3) && (antwF4 == F4) && (antwF5 == F5) && (antwF6 == F6) && (antwF7 == F7) && (antwF8 == F8)) 
	{
	F = "ok"
	document.freq_tabel.opl2.src = "../images/goed.gif"
	}   
else document.freq_tabel.opl2.src = "../images/fout.gif"
}

function controle3()
{
var antwCN1 = document.freq_tabel.txtCN1.value
var antwCN2 = document.freq_tabel.txtCN2.value
var antwCN3 = document.freq_tabel.txtCN3.value
var antwCN4 = document.freq_tabel.txtCN4.value
var antwCN5 = document.freq_tabel.txtCN5.value
var antwCN6 = document.freq_tabel.txtCN6.value
var antwCN7 = document.freq_tabel.txtCN7.value
var antwCN8 = document.freq_tabel.txtCN8.value

if ((antwCN1 == CN1) && (antwCN2 == CN2) && (antwCN3 == CN3) && (antwCN4 == CN4) && (antwCN5 == CN5) && (antwCN6 == CN6) && (antwCN7 == CN7) && (antwCN8 == CN8)) 
	{
	CN = "ok"
	document.freq_tabel.opl3.src = "../images/goed.gif"
	}   
else document.freq_tabel.opl3.src = "../images/fout.gif"
}

function controle4()
{
var antwCF1 = document.freq_tabel.txtCF1.value
var antwCF2 = document.freq_tabel.txtCF2.value
var antwCF3 = document.freq_tabel.txtCF3.value
var antwCF4 = document.freq_tabel.txtCF4.value
var antwCF5 = document.freq_tabel.txtCF5.value
var antwCF6 = document.freq_tabel.txtCF6.value
var antwCF7 = document.freq_tabel.txtCF7.value
var antwCF8 = document.freq_tabel.txtCF8.value

if ((antwCF1 == CF1) && (antwCF2 == CF2) && (antwCF3 == CF3) && (antwCF4 == CF4) && (antwCF5 == CF5) && (antwCF6 == CF6) && (antwCF7 == CF7) && (antwCF8 == CF8)) 
	{
	CF = "ok"
	document.freq_tabel.opl4.src = "../images/goed.gif"
	}   
else document.freq_tabel.opl4.src = "../images/fout.gif"
}

function controle() 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	N = "";
	F = "";
	CN = "";
	CF = "";
	controle1()
	controle2()
	controle3()
	controle4()
	if ((N == "ok") && (F == "ok") && (CN == "ok") && (CF == "ok")) 
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
