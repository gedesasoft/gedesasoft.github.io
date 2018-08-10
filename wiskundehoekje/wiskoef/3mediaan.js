var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var graad = ""
var klassenbreedte = 0;
var variatie = 0;
var mediaan = 0;
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
var CN8 = 0;
var nrmed1 = 0;
var nrmed2 = 0;
var med1 = 0;
var med2 = 0;


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

if ((CN8 % 2) == 0) 
	{
	nrmed1 = CN8 / 2
	nrmed2 = nrmed1 + 1
	}

if ((CN8 % 2) == 1) 
	{
	nrmed1 = (CN8 + 1) / 2
	nrmed2 = nrmed1
	}
 
if (nrmed1 <= N1) med1 = X1
if ((nrmed1 > N1) && (nrmed1 <= (N1 + N2))) med1 = X2
if ((nrmed1 > (N1 + N2)) && (nrmed1 <= (N1 + N2 + N3))) med1 = X3
if ((nrmed1 > (N1 + N2 + N3)) && (nrmed1 <= (N1 + N2 + N3 + N4))) med1 = X4
if ((nrmed1 > (N1 + N2 + N3 + N4)) && (nrmed1 <= (N1 + N2 + N3 + N4 + N5))) med1 = X5
if ((nrmed1 > (N1 + N2 + N3 + N4 + N5)) && (nrmed1 <= (N1 + N2 + N3 + N4 + N5 + N6))) med1 = X6
if ((nrmed1 > (N1 + N2 + N3 + N4 + N5 + N6)) && (nrmed1 <= (N1 + N2 + N3 + N4 + N5 + N6 + N7))) med1 = X7
if ((nrmed1 > (N1 + N2 + N3 + N4 + N5 + N6 + N7)) && (nrmed1 <= (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8))) med1 = X8

if (nrmed2 <= N1) med2 = X1
if ((nrmed2 > N1) && (nrmed2 <= (N1 + N2))) med2 = X2
if ((nrmed2 > (N1 + N2)) && (nrmed2 <= (N1 + N2 + N3))) med2 = X3
if ((nrmed2 > (N1 + N2 + N3)) && (nrmed2 <= (N1 + N2 + N3 + N4))) med2 = X4
if ((nrmed2 > (N1 + N2 + N3 + N4)) && (nrmed2 <= (N1 + N2 + N3 + N4 + N5))) med2 = X5
if ((nrmed2 > (N1 + N2 + N3 + N4 + N5)) && (nrmed2 <= (N1 + N2 + N3 + N4 + N5 + N6))) med2 = X6
if ((nrmed2 > (N1 + N2 + N3 + N4 + N5 + N6)) && (nrmed2 <= (N1 + N2 + N3 + N4 + N5 + N6 + N7))) med2 = X7
if ((nrmed2 > (N1 + N2 + N3 + N4 + N5 + N6 + N7)) && (nrmed2 <= (N1 + N2 + N3 + N4 + N5 + N6 + N7 + N8))) med2 = X8

mediaan = (med1 + med2) / 2  
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
	document.freq_tabel.txtN1.value = N1;
	document.freq_tabel.txtN2.value = N2;
	document.freq_tabel.txtN3.value = N3;
	document.freq_tabel.txtN4.value = N4;
	document.freq_tabel.txtN5.value = N5;
	document.freq_tabel.txtN6.value = N6;
	document.freq_tabel.txtN7.value = N7;
	document.freq_tabel.txtN8.value = N8;

}


function nieuwoef()
{
	document.freq_tabel.txtgemiddelde.value = ""
	freq_tabel.opl.src = "../images/vraagteken.gif"
	algemaakt = 0;
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
	if (document.freq_tabel.txtgemiddelde.value == mediaan)
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
