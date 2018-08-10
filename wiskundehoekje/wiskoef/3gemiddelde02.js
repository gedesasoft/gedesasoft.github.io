var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var typeoefening = 0;
var gemiddelde = 0;
var X1 = 0;
var X2 = 0;
var X3 = 0;
var X4 = 0;
var X5 = 0;
var X6 = 0;
var X7 = 0;
var X8 = 0;
var X9 = 0;
var X10 = 0;
var X = 0

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 4) + 1;
}

function wishokjes()
{
	document.freq_tabel.txtX1.value = "";
	document.freq_tabel.txtX2.value = "";
	document.freq_tabel.txtX3.value = "";
	document.freq_tabel.txtX4.value = "";
	document.freq_tabel.txtX5.value = "";
	document.freq_tabel.txtX6.value = "";
	document.freq_tabel.txtX7.value = "";
	document.freq_tabel.txtX8.value = "";
	document.freq_tabel.txtX9.value = "";
	document.freq_tabel.txtX10.value = "";
	document.freq_tabel.txtX11.value = "";
	document.freq_tabel.txtX12.value = "";
}

function kieswaarnemingsgetallen()
{
X1 = Math.floor(Math.random() * 50) - 10;
X2 = Math.floor(Math.random() * 50) - 10;
X3 = Math.floor(Math.random() * 50) - 10;
X4 = Math.floor(Math.random() * 50) - 10;
X5 = Math.floor(Math.random() * 50) - 10;
X6 = Math.floor(Math.random() * 50) - 10;
X7 = Math.floor(Math.random() * 50) - 10;
X8 = Math.floor(Math.random() * 50) - 10;
X9 = Math.floor(Math.random() * 50) - 10;
X10 = Math.floor(Math.random() * 50) - 10;

if (typeoefening == 1) 
	{
	gemiddelde = (X1 + X2 + X3 + X4) / 4
	X = X3
	}
if (typeoefening == 2) 
	{
	gemiddelde = (X1 + X2 + X3 + X4 + X5) / 5
	X = X2
	}
if (typeoefening == 3) 
	{
	gemiddelde = (X1 + X2 + X3 + X4 + X5 + X6 + X7 + X8) / 8
	X = X6
	}
if (typeoefening == 4) 
	{
	gemiddelde = (X1 + X2 + X3 + X4 + X5 + X6 + X7 + X8 + X9 + X10) / 10
	X = X6
	}

}


function toonoef()
{
wishokjes()
if (typeoefening == 1)
	{
	document.all.getal5_8.style.display = "none"
	document.all.getal9_12.style.display = "none"
	document.freq_tabel.txtX1.value = X1;
	document.freq_tabel.txtX2.value = X2;
	document.freq_tabel.txtX3.value = " x ";
	document.freq_tabel.txtX4.value = X4;
	}
	
if (typeoefening == 2)
	{
	document.all.getal5_8.style.display = ""
	document.all.getal9_12.style.display = "none"
	document.freq_tabel.txtX1.value = X1;
	document.freq_tabel.txtX2.value = " x ";
	document.freq_tabel.txtX3.value = X3;
	document.freq_tabel.txtX4.value = X4;
	document.freq_tabel.txtX5.value = X5;
	}

if (typeoefening == 3)
	{
	document.all.getal5_8.style.display = ""
	document.all.getal9_12.style.display = "none"
	document.freq_tabel.txtX1.value = X1;
	document.freq_tabel.txtX2.value = X2;
	document.freq_tabel.txtX3.value = X3;
	document.freq_tabel.txtX4.value = X4;
	document.freq_tabel.txtX5.value = X5;
	document.freq_tabel.txtX6.value = " x ";
	document.freq_tabel.txtX7.value = X7;
	document.freq_tabel.txtX8.value = X8;
	}

if (typeoefening == 4)
	{
	document.all.getal5_8.style.display = ""
	document.all.getal9_12.style.display = ""
	document.freq_tabel.txtX1.value = X1;
	document.freq_tabel.txtX2.value = X2;
	document.freq_tabel.txtX3.value = X3;
	document.freq_tabel.txtX4.value = X4;
	document.freq_tabel.txtX5.value = X5;
	document.freq_tabel.txtX6.value = " x ";
	document.freq_tabel.txtX7.value = X7;
	document.freq_tabel.txtX8.value = X8;
	document.freq_tabel.txtX9.value = X9;
	document.freq_tabel.txtX10.value = X10;
	}

document.freq_tabel.txtgemiddelde.value = gemiddelde;

}



function nieuwoef()
{
	document.freq_tabel.txtX.value = "";
	freq_tabel.opl.src = "../images/vraagteken.gif"
	algemaakt = 0;
	kiesoef()
	kieswaarnemingsgetallen()
	toonoef()
}


function controle() 
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;
	if (document.freq_tabel.txtX.value == X)
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
