var algemaakt = 0;
var pogingenteller = 0;
var oplossingenteller = 0;
var aantalklassen = 0;
var aantalgetallen = 0;
var klassenbreedte = 0
var rest = 0;
var klasseX1 = "";
var klasseX2 = "";
var klasseX3 = "";
var klasseX4 = "";
var klasseX5 = "";
var klasseX6 = "";
var klasseX7 = "";
X = new Array(50)
var N1 = 0;
var N2 = 0;
var N3 = 0;
var N4 = 0;
var N5 = 0;
var N6 = 0;
var N7 = 0;
var F1 = 0;
var F2 = 0;
var F3 = 0;
var F4 = 0;
var F5 = 0;
var F6 = 0;
var F7 = 0;
var CN1 = 0;
var CN2 = 0;
var CN3 = 0;
var CN4 = 0;
var CN5 = 0;
var CN6 = 0;
var CN7 = 0;
var CF1 = 0;
var CF2 = 0;
var CF3 = 0;
var CF4 = 0;
var CF5 = 0;
var CF6 = 0;
var CF7 = 0;
var N = "";
var F = "";
var CN = "";
var CF = "";

function bepaalklassen()
{
aantalklassen = Math.floor(Math.random() * 4) + 4;
klassenbreedte = Math.floor(Math.random() * 25) + 15;
X[1] = Math.floor(Math.random() * 50) + 10
X[0] = + X[1] + klassenbreedte * aantalklassen - 1
aantalgetallen = Math.pow(aantalklassen,2) + Math.floor(Math.random() * 3) - 1;
}

function kieswaarnemingsgetallen()
{
for (var teller = 2; teller <= CN1; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte);
	}
for (var teller = (CN1 + 1); teller <= CN2; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + klassenbreedte;
	}
for (var teller = (CN2 + 1); teller <= CN3; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + 2 * klassenbreedte;
	}
for (var teller = (CN3 + 1); teller <= CN4; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + 3 * klassenbreedte;
	}
if (aantalklassen >= 5)
{
for (var teller = (CN4 + 1); teller <= CN5; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + 4 * klassenbreedte;
	}
}
if (aantalklassen >= 6)
{
for (var teller = (CN5 + 1); teller <= CN6; teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + 5 * klassenbreedte;
	}
}
if (aantalklassen >= 7)
{
for (var teller = (CN6 + 1); teller <= (CN7 - 1); teller++)
	{
	X[teller] = X[1] + Math.floor(Math.random() * klassenbreedte) + 6 * klassenbreedte;
	}
}

klasseX1 = "[" + X[1] + "," + (X[1] + klassenbreedte) + "[";
klasseX2 = "[" + (X[1] + klassenbreedte) + "," + (X[1] + 2 * klassenbreedte) + "[";
klasseX3 = "[" + (X[1] + 2 * klassenbreedte) + "," + (X[1] + 3 * klassenbreedte) + "[";
klasseX4 = "[" + (X[1] + 3 * klassenbreedte) + "," + (X[1] + 4 * klassenbreedte) + "[";
if (aantalklassen >= 5)
	{
	klasseX5 = "[" + (X[1] + 4 * klassenbreedte) + "," + (X[1] + 5 * klassenbreedte) + "[";
	}
else
	{
	klasseX5 = "----------------"
	}
if (aantalklassen >= 6)
	{
	klasseX6 = "[" + (X[1] + 5 * klassenbreedte) + "," + (X[1] + 6 * klassenbreedte) + "[";
	}
else
	{
	klasseX6 = "----------------"
	}
if (aantalklassen >= 7)
	{
	klasseX7 = "[" + (X[1] + 6 * klassenbreedte) + "," + (X[1] + 7 * klassenbreedte) + "[";
	}
else
	{
	klasseX7 = "----------------"
	}

}


function wistabel()
{
document.freq_tabel.txtklasseX1.value = "";
document.freq_tabel.txtklasseX2.value = "";
document.freq_tabel.txtklasseX3.value = "";
document.freq_tabel.txtklasseX4.value = "";
document.freq_tabel.txtklasseX5.value = "";
document.freq_tabel.txtklasseX6.value = "";
document.freq_tabel.txtklasseX7.value = "";
document.freq_tabel.txtN1.value = "";
document.freq_tabel.txtN2.value = "";
document.freq_tabel.txtN3.value = "";
document.freq_tabel.txtN4.value = "";
document.freq_tabel.txtN5.value = "";
document.freq_tabel.txtN6.value = "";
document.freq_tabel.txtN7.value = "";
document.freq_tabel.txtF1.value = "";
document.freq_tabel.txtF2.value = "";
document.freq_tabel.txtF3.value = "";
document.freq_tabel.txtF4.value = "";
document.freq_tabel.txtF5.value = "";
document.freq_tabel.txtF6.value = "";
document.freq_tabel.txtF7.value = "";
document.freq_tabel.txtCN1.value = "";
document.freq_tabel.txtCN2.value = "";
document.freq_tabel.txtCN3.value = "";
document.freq_tabel.txtCN4.value = "";
document.freq_tabel.txtCN5.value = "";
document.freq_tabel.txtCN6.value = "";
document.freq_tabel.txtCN7.value = "";
document.freq_tabel.txtCF1.value = "";
document.freq_tabel.txtCF2.value = "";
document.freq_tabel.txtCF3.value = "";
document.freq_tabel.txtCF4.value = "";
document.freq_tabel.txtCF5.value = "";
document.freq_tabel.txtCF6.value = "";
document.freq_tabel.txtCF7.value = "";
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
document.freq_tabel.txtX13.value = "";
document.freq_tabel.txtX14.value = "";
document.freq_tabel.txtX15.value = "";
document.freq_tabel.txtX16.value = "";
document.freq_tabel.txtX17.value = "";
document.freq_tabel.txtX18.value = "";
document.freq_tabel.txtX19.value = "";
document.freq_tabel.txtX20.value = "";
document.freq_tabel.txtX21.value = "";
document.freq_tabel.txtX22.value = "";
document.freq_tabel.txtX23.value = "";
document.freq_tabel.txtX24.value = "";
document.freq_tabel.txtX25.value = "";
document.freq_tabel.txtX26.value = "";
document.freq_tabel.txtX27.value = "";
document.freq_tabel.txtX28.value = "";
document.freq_tabel.txtX29.value = "";
document.freq_tabel.txtX30.value = "";
document.freq_tabel.txtX31.value = "";
document.freq_tabel.txtX32.value = "";
document.freq_tabel.txtX33.value = "";
document.freq_tabel.txtX34.value = "";
document.freq_tabel.txtX35.value = "";
document.freq_tabel.txtX36.value = "";
document.freq_tabel.txtX37.value = "";
document.freq_tabel.txtX38.value = "";
document.freq_tabel.txtX39.value = "";
document.freq_tabel.txtX40.value = "";
document.freq_tabel.txtX41.value = "";
document.freq_tabel.txtX42.value = "";
document.freq_tabel.txtX43.value = "";
document.freq_tabel.txtX44.value = "";
document.freq_tabel.txtX45.value = "";
document.freq_tabel.txtX46.value = "";
document.freq_tabel.txtX47.value = "";
document.freq_tabel.txtX48.value = "";
document.freq_tabel.txtX49.value = "";
document.freq_tabel.txtX50.value = "";
}

function kiesabsolutefrequenties()
{
N1 = Math.floor(Math.random() * aantalgetallen / 2) + 2;
rest = aantalgetallen - N1
N2 = Math.floor(Math.random() * rest / 2);
rest = rest - N2
N3 = Math.floor(Math.random() * rest / 2);
rest = rest - N3

if (aantalklassen >= 5)
	{ 
	N4 = Math.floor(Math.random() * rest / 2);
	rest = rest - N4
	}
else
	{
	N4 = rest
	}
if (aantalklassen >= 6)
	{ 
	N5 = Math.floor(Math.random() * rest / 2);
	rest = rest - N5
	}
else
	{
	N5 = rest
	}
if (aantalklassen >= 7)
	{ 
	N6 = Math.floor(Math.random() * rest / 2);
	rest = rest - N6
	N7 = rest
	}
else
	{
	N6 = rest
	}
}

function berekenanderefrequenties()
{
F1 = Math.round((N1 / aantalgetallen) * 1000) / 1000;
F2 = Math.round((N2 / aantalgetallen) * 1000) / 1000;
F3 = Math.round((N3 / aantalgetallen) * 1000) / 1000;
F4 = Math.round((N4 / aantalgetallen) * 1000) / 1000;
F5 = Math.round((N5 / aantalgetallen) * 1000) / 1000;
F6 = Math.round((N6 / aantalgetallen) * 1000) / 1000;
F7 = Math.round((N7 / aantalgetallen) * 1000) / 1000;

CN1 = N1;
CN2 = CN1 + N2;
CN3 = CN2 + N3;
CN4 = CN3 + N4;
CN5 = CN4 + N5;
CN6 = CN5 + N6;
CN7 = CN6 + N7;

CF1 = Math.round((CN1 / aantalgetallen) * 1000) / 1000;
CF2 = Math.round((CN2 / aantalgetallen) * 1000) / 1000;
CF3 = Math.round((CN3 / aantalgetallen) * 1000) / 1000;
CF4 = Math.round((CN4 / aantalgetallen) * 1000) / 1000;
CF5 = Math.round((CN5 / aantalgetallen) * 1000) / 1000;
CF6 = Math.round((CN6 / aantalgetallen) * 1000) / 1000;
CF7 = Math.round((CN7 / aantalgetallen) * 1000) / 1000;

if (aantalklassen < 5)
	{
	N5 = "";
	F5 = "";
	CN5 = "";
	CF5 = "";
	}
if (aantalklassen < 6)
	{
	N6 = "";
	F6 = "";
	CN6 = "";
	CF6 = "";
	}
if (aantalklassen < 7)
	{
	N7 = "";
	F7 = "";
	CN7 = "";
	CF7 = "";
	}
}

function toonoef()
{
document.freq_tabel.opl.src = "../images/vraagteken.gif"
wistabel()

if (aantalklassen == 4) 
	{
	document.all.getal21_30.style.display = "none"
	document.all.getal31_40.style.display = "none"
	document.all.getal41_50.style.display = "none"
	}	
if (aantalklassen == 5) 
	{
	document.all.getal21_30.style.display = ""
	document.all.getal31_40.style.display = "none"
	document.all.getal41_50.style.display = "none"
	}	
if (aantalklassen == 6) 
	{
	document.all.getal21_30.style.display = ""
	document.all.getal31_40.style.display = ""
	document.all.getal41_50.style.display = "none"
	}	
if (aantalklassen == 7) 
	{
	document.all.getal21_30.style.display = ""
	document.all.getal31_40.style.display = ""
	document.all.getal41_50.style.display = ""
	}	
	
if (aantalklassen == 4)
	{
	document.freq_tabel.txtklasseX5.value = klasseX5;
	document.freq_tabel.txtklasseX6.value = klasseX6;
	document.freq_tabel.txtklasseX7.value = klasseX7;
	document.freq_tabel.txtX1.value = X[10];
	document.freq_tabel.txtX2.value = X[12];
	document.freq_tabel.txtX3.value = X[9];
	document.freq_tabel.txtX4.value = X[4];
	document.freq_tabel.txtX5.value = X[7];
	document.freq_tabel.txtX6.value = X[14];
	document.freq_tabel.txtX7.value = X[5];
	document.freq_tabel.txtX8.value = X[8];
	document.freq_tabel.txtX9.value = X[3];
	document.freq_tabel.txtX10.value = X[0];
	document.freq_tabel.txtX11.value = X[11];
	document.freq_tabel.txtX12.value = X[2];
	document.freq_tabel.txtX13.value = X[13];
	document.freq_tabel.txtX14.value = X[1];
	document.freq_tabel.txtX15.value = X[6];
	if (aantalgetallen == 16)
		{
		document.freq_tabel.txtX16.value = X[15];
		}	
	if (aantalgetallen == 17)
		{
		document.freq_tabel.txtX16.value = X[15];
		document.freq_tabel.txtX17.value = X[16];
		}	
	}

if (aantalklassen == 5)
	{
	document.freq_tabel.txtklasseX6.value = klasseX6;
	document.freq_tabel.txtklasseX7.value = klasseX7;
	document.freq_tabel.txtX1.value = X[22];
	document.freq_tabel.txtX2.value = X[2];
	document.freq_tabel.txtX3.value = X[9];
	document.freq_tabel.txtX4.value = X[4];
	document.freq_tabel.txtX5.value = X[17];
	document.freq_tabel.txtX6.value = X[6];
	document.freq_tabel.txtX7.value = X[15];
	document.freq_tabel.txtX8.value = X[8];
	document.freq_tabel.txtX9.value = X[3];
	document.freq_tabel.txtX10.value = X[11];
	document.freq_tabel.txtX11.value = X[10];
	document.freq_tabel.txtX12.value = X[23];
	document.freq_tabel.txtX13.value = X[5];
	document.freq_tabel.txtX14.value = X[19];
	document.freq_tabel.txtX15.value = X[21];
	document.freq_tabel.txtX16.value = X[13];
	document.freq_tabel.txtX17.value = X[0];
	document.freq_tabel.txtX18.value = X[7];
	document.freq_tabel.txtX19.value = X[12];
	document.freq_tabel.txtX20.value = X[1];
	document.freq_tabel.txtX21.value = X[16];
	document.freq_tabel.txtX22.value = X[20];
	document.freq_tabel.txtX23.value = X[14];
	document.freq_tabel.txtX24.value = X[18];
	if (aantalgetallen == 25)
		{
		document.freq_tabel.txtX25.value = X[24];
		}	
	if (aantalgetallen == 26)
		{
		document.freq_tabel.txtX25.value = X[24];
		document.freq_tabel.txtX26.value = X[25];
		}	
	}

if (aantalklassen == 6)
	{
	document.freq_tabel.txtklasseX7.value = klasseX7;
	document.freq_tabel.txtX1.value = X[22];
	document.freq_tabel.txtX2.value = X[2];
	document.freq_tabel.txtX3.value = X[9];
	document.freq_tabel.txtX4.value = X[24];
	document.freq_tabel.txtX5.value = X[17];
	document.freq_tabel.txtX6.value = X[6];
	document.freq_tabel.txtX7.value = X[15];
	document.freq_tabel.txtX8.value = X[8];
	document.freq_tabel.txtX9.value = X[3];
	document.freq_tabel.txtX10.value = X[31];
	document.freq_tabel.txtX11.value = X[10];
	document.freq_tabel.txtX12.value = X[23];
	document.freq_tabel.txtX13.value = X[5];
	document.freq_tabel.txtX14.value = X[29];
	document.freq_tabel.txtX15.value = X[21];
	document.freq_tabel.txtX16.value = X[33];
	document.freq_tabel.txtX17.value = X[0];
	document.freq_tabel.txtX18.value = X[7];
	document.freq_tabel.txtX19.value = X[12];
	document.freq_tabel.txtX20.value = X[28];
	document.freq_tabel.txtX21.value = X[26];
	document.freq_tabel.txtX22.value = X[20];
	document.freq_tabel.txtX23.value = X[14];
	document.freq_tabel.txtX24.value = X[18];
	document.freq_tabel.txtX25.value = X[4];
	document.freq_tabel.txtX26.value = X[25];
	document.freq_tabel.txtX27.value = X[16];
	document.freq_tabel.txtX28.value = X[27];
	document.freq_tabel.txtX29.value = X[1];
	document.freq_tabel.txtX30.value = X[19];
	document.freq_tabel.txtX31.value = X[30];
	document.freq_tabel.txtX32.value = X[11];
	document.freq_tabel.txtX33.value = X[32];
	document.freq_tabel.txtX34.value = X[13];
	document.freq_tabel.txtX35.value = X[34];
	if (aantalgetallen == 36)
		{
		document.freq_tabel.txtX36.value = X[35];
		}	
	if (aantalgetallen == 37)
		{
		document.freq_tabel.txtX36.value = X[35];
		document.freq_tabel.txtX37.value = X[36];
		}	
	}

if (aantalklassen == 7)
	{
	document.freq_tabel.txtX1.value = X[22];
	document.freq_tabel.txtX2.value = X[2];
	document.freq_tabel.txtX3.value = X[9];
	document.freq_tabel.txtX4.value = X[24];
	document.freq_tabel.txtX5.value = X[47];
	document.freq_tabel.txtX6.value = X[6];
	document.freq_tabel.txtX7.value = X[15];
	document.freq_tabel.txtX8.value = X[38];
	document.freq_tabel.txtX9.value = X[3];
	document.freq_tabel.txtX10.value = X[31];
	document.freq_tabel.txtX11.value = X[10];
	document.freq_tabel.txtX12.value = X[43];
	document.freq_tabel.txtX13.value = X[45];
	document.freq_tabel.txtX14.value = X[29];
	document.freq_tabel.txtX15.value = X[21];
	document.freq_tabel.txtX16.value = X[33];
	document.freq_tabel.txtX17.value = X[20];
	document.freq_tabel.txtX18.value = X[37];
	document.freq_tabel.txtX19.value = X[12];
	document.freq_tabel.txtX20.value = X[28];
	document.freq_tabel.txtX21.value = X[26];
	document.freq_tabel.txtX22.value = X[0];
	document.freq_tabel.txtX23.value = X[14];
	document.freq_tabel.txtX24.value = X[18];
	document.freq_tabel.txtX25.value = X[4];
	document.freq_tabel.txtX26.value = X[25];
	document.freq_tabel.txtX27.value = X[16];
	document.freq_tabel.txtX28.value = X[27];
	document.freq_tabel.txtX29.value = X[41];
	document.freq_tabel.txtX30.value = X[19];
	document.freq_tabel.txtX31.value = X[30];
	document.freq_tabel.txtX32.value = X[11];
	document.freq_tabel.txtX33.value = X[32];
	document.freq_tabel.txtX34.value = X[13];
	document.freq_tabel.txtX35.value = X[34];
	document.freq_tabel.txtX36.value = X[35];
	document.freq_tabel.txtX37.value = X[36];
	document.freq_tabel.txtX38.value = X[7];
	document.freq_tabel.txtX39.value = X[8];
	document.freq_tabel.txtX40.value = X[39];
	document.freq_tabel.txtX41.value = X[40];
	document.freq_tabel.txtX42.value = X[1];
	document.freq_tabel.txtX43.value = X[42];
	document.freq_tabel.txtX44.value = X[23];
	document.freq_tabel.txtX45.value = X[44];
	document.freq_tabel.txtX46.value = X[5];
	document.freq_tabel.txtX47.value = X[46];
	document.freq_tabel.txtX48.value = X[17];
	if (aantalgetallen == 49)
		{
		document.freq_tabel.txtX49.value = X[48];
		}	
	if (aantalgetallen == 50)
		{
		document.freq_tabel.txtX49.value = X[48];
		document.freq_tabel.txtX50.value = X[49];
		}	
	}

}



function nieuwoef()
{
	algemaakt = 0;
	N = "";
	F = "";
	CN = "";
	CF = "";
	document.all.tabel.style.display = "none"
	document.freq_tabel.txtaantalklassen.value = ""	
	document.freq_tabel.txtklassenbreedte.value = ""	
	document.freq_tabel.oplklassenbreedte.src = "../images/vraagteken.gif"
	document.freq_tabel.oplklasse.src = "../images/vraagteken.gif"
	document.freq_tabel.opl1.src = "../images/vraagteken.gif"
	document.freq_tabel.opl2.src = "../images/vraagteken.gif"
	document.freq_tabel.opl3.src = "../images/vraagteken.gif"
	document.freq_tabel.opl4.src = "../images/vraagteken.gif"
	document.freq_tabel.opl.src = "../images/vraagteken.gif"
	bepaalklassen()
	kiesabsolutefrequenties()
	berekenanderefrequenties()
	kieswaarnemingsgetallen()
	toonoef()
}

function controleklassenbreedte()
{
if ((document.freq_tabel.txtaantalklassen.value == aantalklassen) && (document.freq_tabel.txtklassenbreedte.value == klassenbreedte))
	{
	document.freq_tabel.oplklassenbreedte.src = "../images/goed.gif"
	document.all.tabel.style.display = ""
	} 
else 
	{
	document.freq_tabel.oplklassenbreedte.src = "../images/fout.gif"
	}
}

function controleklassen()
{
var antwklasseX1 = document.freq_tabel.txtklasseX1.value
var antwklasseX2 = document.freq_tabel.txtklasseX2.value
var antwklasseX3 = document.freq_tabel.txtklasseX3.value
var antwklasseX4 = document.freq_tabel.txtklasseX4.value
var antwklasseX5 = document.freq_tabel.txtklasseX5.value
var antwklasseX6 = document.freq_tabel.txtklasseX6.value
var antwklasseX7 = document.freq_tabel.txtklasseX7.value

if ((antwklasseX1 == klasseX1) && (antwklasseX2 == klasseX2) && (antwklasseX3 == klasseX3) && (antwklasseX4 == klasseX4) && (antwklasseX5 == klasseX5) && (antwklasseX6 == klasseX6) && (antwklasseX7 == klasseX7)) 
	{
	klasseX = "ok"
	document.freq_tabel.oplklasse.src = "../images/goed.gif"
	}   
else document.freq_tabel.oplklasse.src = "../images/fout.gif"
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

if ((antwN1 == N1) && (antwN2 == N2) && (antwN3 == N3) && (antwN4 == N4) && (antwN5 == N5) && (antwN6 == N6) && (antwN7 == N7)) 
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

if ((antwF1 == F1) && (antwF2 == F2) && (antwF3 == F3) && (antwF4 == F4) && (antwF5 == F5) && (antwF6 == F6) && (antwF7 == F7)) 
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

if ((antwCN1 == CN1) && (antwCN2 == CN2) && (antwCN3 == CN3) && (antwCN4 == CN4) && (antwCN5 == CN5) && (antwCN6 == CN6) && (antwCN7 == CN7)) 
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

if ((antwCF1 == CF1) && (antwCF2 == CF2) && (antwCF3 == CF3) && (antwCF4 == CF4) && (antwCF5 == CF5) && (antwCF6 == CF6) && (antwCF7 == CF7)) 
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
	klasseX = "";
	controle1()
	controle2()
	controle3()
	controle4()
	controleklassen()
	if ((N == "ok") && (F == "ok") && (CN == "ok") && (CF == "ok") && (klasseX == "ok")) 
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

function replace(string,text,by) 
{
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
}

