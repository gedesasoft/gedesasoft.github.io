var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typevariatie = 0
var aljuist = 0
var X1 = 0
var Y1 = 0
var X2 = 0
var Y2 = 0
var X3 = 0
var Y3 = 0
var Y3vals = 0
var A = 0
var B = 0
var C = 0
var D = 0
var P = 0
var Q = 0
var R = 0
var breuk = ""
var ingevuld = ""
var Yteller = 0
var Ynoemer = 0
var oplossing = ""
var antw = ""
var oplP = 0
var oplQ = 0
var oplR = 0

function vereenvoudigbreuk(teller,noemer)
{
if (noemer < 0) 
{
noemer = 0 - noemer
teller = 0 - teller
}
var ng1 = Math.abs(teller);
var ng2 = Math.abs(noemer);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

teller = teller / ng1
noemer = noemer / ng1

if (noemer == 1) breuk = teller
if (noemer != 1) breuk = teller + "/" + noemer
}

function kiesgetallen()
{
	P = 0
	while (P == 0)	P = Math.floor(Math.random() * 20) - 10;
	Q = Math.floor(Math.random() * 10) + 1;
	R = Math.floor(Math.random() * 20) - 10;
	if (typevariatie < 4) R = Q * Math.floor(Math.random() * 20) - 10;
	K = Math.floor(Math.random() * 20) - 10;
	L = Math.floor(Math.random() * 10) + 1;
	M = K
	N = L
	while ((K/L) == (M/N)) 
	M = Math.floor(Math.random() * 20) - 10;
	N = Math.floor(Math.random() * 10) + 1;

	if (typevariatie < 5) 
		{
		X1 = Q * Math.floor(Math.random() * 10) - 4;
		X2 = X1
		while (X2 == X1) X2 = Q * Math.floor(Math.random() * 10) - 4;
		Yteller = X1 * (0 - P) - R
		Ynoemer = Q
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y1 = breuk 
		Yteller = X2 * (0 - P) - R
		Ynoemer = Q
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y2 = breuk 
		}

	else
		{
		vereenvoudigbreuk(K,L)
		X1 = breuk
		vereenvoudigbreuk(M,N)
		X2 = breuk
		
		Yteller = 0 - P * K - R * L
		Ynoemer = Q * L
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y1 = breuk 

		Yteller = 0 - P * M - R * N
		Ynoemer = Q * N
		vereenvoudigbreuk(Yteller,Ynoemer)
		Y2 = breuk 
		}

	if (typeoefening == 7)
		{
		if (typevariatie < 5) 
			{
			X1 = Math.floor(Math.random() * 50) - 20;
			X2 = X1
			Y1 = Math.floor(Math.random() * 50) - 20;
			Y2 = Y1
			while (Y2 == Y1) Y2 = Math.floor(Math.random() * 50) - 20;
			}			
		else
			{
			vereenvoudigbreuk(K,L)
			X1 = breuk
			X2 = X1
			Yteller = Math.floor(Math.random() * 20) - 10;
			Ynoemer = Math.floor(Math.random() * 10) + 1;
			vereenvoudigbreuk(Yteller,Ynoemer)
			Y1 = breuk 
			Y2 = Y1
			while (Y2 == Y1)
				{
				Yteller = Math.floor(Math.random() * 20) - 10;
				Ynoemer = Math.floor(Math.random() * 10) + 1;
				vereenvoudigbreuk(Yteller,Ynoemer)
				Y2 = breuk 
				}
			}
		}
			
	if (typeoefening == 8)
		{
		if (typevariatie < 5) 
			{
			Y1 = Math.floor(Math.random() * 50) - 20;
			Y2 = Y1
			X1 = Math.floor(Math.random() * 50) - 20;
			X2 = X1
			while (X2 == X1) X2 = Math.floor(Math.random() * 50) - 20;
			}			
		else
			{
			vereenvoudigbreuk(K,L)
			Y1 = breuk
			Y2 = Y1	
			Yteller = Math.floor(Math.random() * 20) - 10;
			Ynoemer = Math.floor(Math.random() * 10) + 1;
			vereenvoudigbreuk(Yteller,Ynoemer)
			X1 = breuk 
			X2 = X1
			while (X2 == X1)
				{
				Yteller = Math.floor(Math.random() * 20) - 10;
				Ynoemer = Math.floor(Math.random() * 10) + 1;
				vereenvoudigbreuk(Yteller,Ynoemer)
				X2 = breuk 
				}
			}
		}
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 8) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 5) + 1
}

function toonoef()
{
	document.coeff.txtP.value = ""
	document.coeff.txtQ.value = ""
	document.coeff.txtR.value = ""
	if (typeoefening < 7)
		{
		document.coeff.txtA.value = X1
		document.coeff.txtB.value = Q
		document.coeff.txtC.value = Y1
		document.coeff.txtD.value = 0 - P
		}
	if (typeoefening == 7)
		{
		document.coeff.txtA.value = X1
		document.coeff.txtB.value = 0
		document.coeff.txtC.value = Q
		document.coeff.txtD.value = Math.floor(Math.random() * 25) + 1
		}
	if (typeoefening == 8)
		{
		document.coeff.txtA.value = R
		document.coeff.txtB.value = Math.floor(Math.random() * 25) + 1
		document.coeff.txtC.value = Y1
		document.coeff.txtD.value = 0
		}

}


function nieuwoef()
{
document.coeff.opl.src = "../images/vraagteken.gif";
aljuist = 0
kiesoef()
kiesvariatie()
kiesgetallen()
toonoef()
}

function schrijfmooi()
{
ingevuld = replace(document.coeff.txtQ.value,' ','')
ingevuld = "" + ingevuld
if (ingevuld.substring(0,1) == "-") ingevuld = "(" + ingevuld + ")" 
document.coeff.txtQ.value = ingevuld

ingevuld = replace(document.coeff.txtR.value,' ','')
ingevuld = "" + ingevuld
if (ingevuld.substring(0,1) == "-") ingevuld = "(" + ingevuld + ")" 
document.coeff.txtR.value = ingevuld
}

function controle() 
{
schrijfmooi()
if (aljuist == 1) 
	{
	alert('Fijn dat je deze opgave al eens juist had, probeer nu een nieuwe oefening.')
	}
else
{
oplP = coeff.txtP.value
oplQ = coeff.txtQ.value
oplR = coeff.txtR.value

if ((oplP == "") || (oplQ == "") || (oplR == "")) alert('Gelieve alle coëfficiënten in te geven.') 
else
	{
	pogingenteller++
	if (typeoefening < 7)
		{
		if ((eval(eval(oplP)/eval(P)) == eval(eval(oplQ)/eval(Q))) && (eval(eval(oplQ)/eval(Q)) == eval(eval(oplR)/eval(R)))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}

	if (typeoefening == 7)
		{
		if ((eval(oplQ) == 0) && (eval(oplR) / eval(oplP) == eval(0 - X1))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}
		
	if (typeoefening == 8)
		{
		if ((eval(oplP) == 0) && (eval(oplR) / eval(oplQ) == eval(0 - Y1))) 		
			{
			oplossingenteller++
			document.opl.src = "../images/goed.gif"		
			aljuist = 1	
			}
		else
			{
			document.opl.src = "../images/fout.gif"
			}		
		}
		
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.coeff.aantaljuist.value = oplossingenteller
	document.coeff.aantalpogingen.value = pogingenteller
	document.coeff.percentage.value = procent		
	}  
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

