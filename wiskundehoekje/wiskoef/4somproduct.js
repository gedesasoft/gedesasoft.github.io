var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var algemaakt = 0
var A = 0
var B = 0
var C = 0
var X1 = 0
var X2 = 0

function kiesgetallen()
{
if (typeoefening == 1)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = (Math.floor(Math.random() * 20 ) - 9);
	if (X1 == X2) X2 = X1 + 1
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}
if (typeoefening == 0)
	{
	A = (Math.floor(Math.random() * 10 ) - 4);
	if (A == 0) A = 1
	X1 = (Math.floor(Math.random() * 20 ) - 9);
	X2 = X1;
	B = -A * (X1 + X2)
	C = A * X1 * X2
	}

}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 2)
}

function toonoef()
{
document.fv.txtA.value = A;
document.fv.txtB.value = B;
document.fv.txtC.value = C;
}


function nieuwoef()
{
algemaakt = 0
fv.opl.src = "../images/vraagteken.gif"
document.fv.oplx1.value = "";
document.fv.oplx2.value = "";
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
if (algemaakt == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening')
else
{
	if ((fv.oplx1.value == "") || (fv.oplx2.value == "")) alert('Geef beide wortels in, als er slechts één wortel is, geef die dan 2 keer in.')
	else
	{
	pogingenteller++
	if (((fv.oplx1.value == X1) && (fv.oplx2.value == X2)) || ((fv.oplx1.value == X2) && (fv.oplx2.value == X1))) 
		{
		oplossingenteller++
		fv.opl.src = "../images/goed.gif"
		algemaakt = 1
		} 
	else fv.opl.src = "../images/fout.gif"
	}
	}
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.fv.aantaljuist.value = oplossingenteller
	document.fv.aantalpogingen.value = pogingenteller
	document.fv.percentage.value = procent		


}
