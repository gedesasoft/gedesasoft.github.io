var antwoordjuist = 0
var typeoefening = 0
var M = 0
var Q = 0
var bericht = ""
var lengtebericht = 0
var codebericht = ""
var tellerbericht = 0
var tellerarray = 0
var codeletter = 0
var X1 = 0
var X2 = 0
var codeX1 = 0
var codeX2 = 0
var bespreking = ""

zin = new Array(11)
zin[0] = "DAT HEB JE KNAP GEDAAN"
zin[1] = "SCHITTEREND OPGELOST"
zin[2] = "FIJN DENKWERK"
zin[3] = "WAT BEN JIJ SLIM"
zin[4] = "PRACHTIG GEREDENEERD"
zin[5] = "GOED BEREKEND"
zin[6] = "KNAP SPEURWERK"
zin[7] = "DAT LEEK EENVOUDIG"
zin[8] = "ONGELOOFLIJK GOED WERK"
zin[9] = "ZO KLAAR ALS EEN KLONTJE"
zin[10] = "JIJ LIJKT WEL EEN PROFESSIONAL"

letter = new Array(27)
letter[0] = " "
letter[1] = "A"
letter[2] = "B"
letter[3] = "C"
letter[4] = "D"
letter[5] = "E"
letter[6] = "F"
letter[7] = "G"
letter[8] = "H"
letter[9] = "I"
letter[10] = "J"
letter[11] = "K"
letter[12] = "L"
letter[13] = "M"
letter[14] = "N"
letter[15] = "O"
letter[16] = "P"
letter[17] = "Q"
letter[18] = "R"
letter[19] = "S"
letter[20] = "T"
letter[21] = "U"
letter[22] = "V"
letter[23] = "W"
letter[24] = "X"
letter[25] = "Y"
letter[26] = "Z"

function wisantwoord()
{
document.anamtk.antwoord.value = ""
}

function kiesgetallen()
{
M = 0
Q = 0

while (M == 0) M = Math.floor(Math.random() * 25) - 10;
while (Q == 0) Q = Math.floor(Math.random() * 25) - 10;

bericht = zin[typeoefening]
lengtebericht = bericht.length
codebericht = ";"
tellerbericht = 0
tellerarray = 0

while (tellerbericht <= lengtebericht)
	{
	while (tellerarray < 27)
		{
		if (bericht.charAt(tellerbericht) == " ") 
			{
			codebericht = codebericht + "   ;"
			tellerarray = 27
			}
		else
			{
			if (bericht.charAt(tellerbericht) == letter[tellerarray]) 
				{
				codeletter = M * tellerarray + Q
				codebericht = codebericht + " " + codeletter + " ;"
				} 
			tellerarray++
			}
		}
	tellerbericht++
	tellerarray = 0
	}

X1 = 0
X2 = 0
while ((X1 == 0) || (bericht.indexOf(letter[X1]) != -1)) X1 = Math.floor(Math.random() * 26) + 1;
while ((X2 == 0) || (X2 == X1) || (bericht.indexOf(letter[X2]) != -1)) X2 = Math.floor(Math.random() * 26) + 1;
codeX1 = M * X1 + Q
codeX2 = M * X2 + Q
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 11)
}

function toonoef()
{
document.anamtk.opgave.value = codebericht	
document.anamtk.letter1.value = letter[X1]	
document.anamtk.letter2.value = letter[X2]
document.anamtk.code1.value = codeX1	
document.anamtk.code2.value = codeX2	
}

function nieuwoef()
{
document.anamtk.antwoord.value = "??"
kiesoef()
kiesgetallen()
toonoef()
}

function toonopl()
{
bespreking = ""
bespreking += "Vervang de gegeven letters door hun plaats in het alfabet: " + letter[X1] + " wordt " + X1 +  " en " + letter[X2] + " wordt " + X2 + ".\nNu heb je twee koppels: (" + X1 + "," + codeX1 + ") en (" + X2 + "," + codeX2 + ").\n\nStel de vergelijking op van de rechte door deze twee punten.\nJe vindt als voorschrift: y = " + M + "x"
if (Q > 0) bespreking += " + " + Math.abs(Q)
if (Q < 0) bespreking += " - " + Math.abs(Q)
bespreking += "\n\nMet dit voorschrift kan je de plaats van de letters in het alfabet terugvinden: vervang telkens y door het getal in het gecodeerde bericht en berekende de bijhorende x-waarde.\n\nAls je zo alle getallen omgezet hebt, moet je enkel nog de nieuwe reeks getallen vervangen door de letters met die plaats in het alfabet.\n\nJe krijgt dan de volgende boodschap: " + bericht + " !"

alert(bespreking)
}

function controle()
{
var oplossing = document.anamtk.antwoord.value
if ((oplossing == "??") || (oplossing == "")) alert('Je moet je antwoord nog ingeven!')
else
	{
	if (oplossing.toUpperCase() == bericht) anamtk.opl.src = "../images/goed.gif";
	else anamtk.opl.src = "../images/fout.gif";
	}
}

