var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typerij = ""
var answer = 0

var V = 0
var Q = 0
var txtQ = ""

var U0 = 0
var U1 = 0
var U2 = 0
var U3  = 0

var UN = 0
var SN = 0
var N = 0

var S3 = 0
var P3 = 0

function wisantwoord()
{
document.rij.antwoord.value = ""
document.rij.antwoord1.value = ""
document.rij.antwoord2.value = ""
document.rij.antwoord3.value = ""
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 21)
if (typeoefening < 10) typerij = "rekenkundige rij"
if (typeoefening > 9) typerij = "meetkundige rij"
}

function kiesgetallen()
{

V = 0
Q = 0

while (V == 0) V = Math.floor(Math.random() * 31) - 10;
while ((Q == 0) || (Q == 1) || (Q == -1)) Q = Math.floor(Math.random() * 10) - 4;


U1 = 0
while (U1 == 0) U1 = Math.floor(Math.random() * 31) - 10;

if (typerij == "rekenkundige rij") 
	{
	N = Math.floor(Math.random() * 20) + 5;
	U2 = U1 + V
	U3 = U2 + V
	UN = U1 + (N - 1)*V 
	SN = N * (U1 + UN) / 2
	}


if (typerij == "meetkundige rij") 
	{
	N = Math.floor(Math.random() * 8) + 4;
	U2 = U1 * Q
	U3 = U2 * Q 
	UN = U1 * Math.pow(Q,(N - 1))
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

S3 = U1 + U2 + U3
P3 = U1 * U2 * U3

if ((typeoefening == 2) || (typeoefening == 3))
	{
	N = 2 * Math.floor(Math.random() * 3) + 4;
	V = 2 * Math.floor(Math.random() * 10) + 2;
	if (N == 8) V = 2 * Math.floor(Math.random() * 7) + 2;
	U1 = (N - 2) * 180 / N - (N/2 - 0.5) * V
	UN = U1 + (N - 1)*V
	}

if ((typeoefening == 0) || (typeoefening == 4) || (typeoefening == 5))
	{
	V = Math.floor(Math.random() * 15) + 1;
	N = Math.floor(Math.random() * 10) + 5;
	U1 = Math.floor(Math.random() * 30) + 1;
	U2 = U1 + V
	U3 = U2 + V
	UN = U1 + (N - 1)*V 
	SN = N * (U1 + UN) / 2
	}

if (typeoefening == 6)
	{
	V = Math.floor(Math.random() * 15) + 10;
	N = Math.floor(Math.random() * 15) + 10;
	U1 = Math.floor(Math.random() * 30) + 20;
	U2 = U1 + V
	U3 = U2 + V
	UN = U1 + (N - 1)*V 
	SN = N * (U1 + UN) / 2
	}

if (typeoefening == 11)
	{
	Q = (Math.floor(Math.random() * 4) + 103) / 100;
	N = Math.floor(Math.random() * 15) + 5;
	U1 = Math.floor(Math.random() * 101) + 200;
	U2 = U1 * Q
	U3 = U2 * Q
	UN = U1 * Math.pow(Q,(N - 1))
	UN = Math.round(UN * 100) / 100
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

if ((typeoefening == 12) || (typeoefening == 13))
	{
	Q = Math.floor(Math.random() * 3) + 2;
	N = Math.floor(Math.random() * 4) + 5;
	U1 = Math.floor(Math.random() * 51) + 50;
	U2 = U1 * Q
	U3 = U2 * Q
	UN = U1 * Math.pow(Q,(N - 1))
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

if ((typeoefening == 14) || (typeoefening == 15) || (typeoefening == 16))
	{
	Q = Math.floor(Math.random() * 4) + 2;
	if (Q == 2) txtQ = 'verdubbelt' 
	if (Q == 3) txtQ = 'verdrievoudigt' 
	if (Q == 4) txtQ = 'verviervoudigt' 
	if (Q == 5) txtQ = 'vervijfvoudigt' 
	N = Math.floor(Math.random() * 4) + 5;
	U1 = Math.floor(Math.random() * 6) + 5;
	U2 = U1 * Q
	U3 = U2 * Q
	UN = U1 * Math.pow(Q,(N - 1))
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

if ((typeoefening == 19) || (typeoefening == 20))
	{
	Q = Math.floor(Math.random() * 4) + 2;
	if (Q == 2) txtQ = 'verdubbelt' 
	if (Q == 3) txtQ = 'verdrievoudigt' 
	if (Q == 4) txtQ = 'verviervoudigt' 
	if (Q == 5) txtQ = 'vervijfvoudigt' 
	N = Math.floor(Math.random() * 4) + 5;
	U1 = Math.floor(Math.random() * 6) + 5;
	U2 = U1 * Q
	U3 = U2 * Q
	UN = U1 * Math.pow(Q,(N - 1))
	SN = U1 * (1 - Math.pow(Q,N)) / (1 - Q)
	}

}

function toonoef()
{
if ((typeoefening == 1) || (typeoefening == 10))
	{
	document.all.eenopl.style.display= "none";
	document.all.drieopl.style.display= "";
	}
else
	{
	document.all.eenopl.style.display= "";
	document.all.drieopl.style.display= "none";
	}

if (typeoefening == 0)
	{
	document.rij.opgave.value = "Wouter plant een snelgroeiend kruid om zijn grachtkanten te bedekken. Na 1 week is er " + U1 + " dm² van de grond bedekt. In de week die daarop volgt komt er " + U2 + " dm² kruid bij. En in de derde week groeit dat nog eens aan met " + U3 + " dm². Hoeveel dm² van dat kruid staat er na " + N + " weken?" 	
	document.rij.antwoordzindeel1.value = "Na " + N + " weken heeft Wouter"	
	document.rij.antwoordzindeel2.value = "dm² kruid."	
	answer = SN
	}

if (typeoefening == 1)
	{
	document.rij.opgave.value = "Bepaal drie getallen die een rekenkundige rij vormen als hun som s = " + S3 + " en hun product p = " + P3 + ". Schik deze getallen zoals in de rij."	
	document.rij.antwoordzindeel3.value = "De drie getallen zijn"	
	}

if (typeoefening == 2)
	{
	document.rij.opgave.value = "De hoeken van een willekeurige " + N + "-hoek vormen een rekenkundige rij waarvan het verschil " + V + "° is. Bereken de grootste hoek van deze figuur." 	
	document.rij.antwoordzindeel1.value = "De grootste hoek van deze veelhoek is"	
	document.rij.antwoordzindeel2.value = "°."	
	answer = UN
	}

if (typeoefening == 3)
	{
	document.rij.opgave.value = "De hoeken van een willekeurige " + N + "-hoek vormen een rekenkundige rij. De kleinste hoek is " + U1 + "°. Bereken het verschil van deze rij." 	
	document.rij.antwoordzindeel1.value = "Het verschil bedraagt"	
	document.rij.antwoordzindeel2.value = "°."	
	answer = V
	}

if (typeoefening == 4)
	{
	document.rij.opgave.value = "In de maand januari spaar je " + U1 + " euro. In februari spaar je " + U2 + " euro, in maart dan weer " + U3 + " euro en in april " + (U1 + 3*V) + " euro. Als je zo verder spaart, na hoeveel maanden heb je een totaal van " + SN + " euro bij elkaar gespaard?" 	
	document.rij.antwoordzindeel1.value = "Dat duurt"	
	document.rij.antwoordzindeel2.value = "maanden."	
	answer = N
	}

if (typeoefening == 5)
	{
	document.rij.opgave.value = "Een schans wordt gestut door een reeks palen. De eerste paal is " + U1 + " dm hoog. De laatste paal is " + UN + " dm hoog. Als je weet dat elke paal " + V + " dm hoger is dan de vorige, hoeveel palen staan er dan onder die schans?" 	
	document.rij.antwoordzindeel1.value = "De schans wordt gesteund door"	
	document.rij.antwoordzindeel2.value = "palen."	
	answer = N
	}

if (typeoefening == 6)
	{
	document.rij.opgave.value = "Pieter besluit wat aan zijn conditie te doen: de eerste dag begint hij met " + U1 + " sit-ups. Elke dag doet hij " + V + " sit-ups meer dan de voorgaande dag. Op de laatste dag van zijn training doet hij maar liefst " + UN + " sit-ups. Hoeveel heeft hij er in totaal (over de hele periode) gedaan?" 	
	document.rij.antwoordzindeel1.value = "Pieter deed in totaal"	
	document.rij.antwoordzindeel2.value = "sit-ups."	
	answer = SN
	}

if (typeoefening == 7)
	{
	document.rij.opgave.value = "In een klas wordt aan een leerling gevraagd aan een getal te denken. Hij zegt dit door aan een tweede leerling die er een tweede getal bijtelt. Een derde leerling vermeerdert dit resultaat opnieuw met het tweede getal en zo verder. Als je weet dat het eerste getal " + U1 + " was en het tweede getal " + V + " en je weet ook dat het resultaat van de laatste optelsom gelijk is aan " + UN + ", hoeveel leerlingen zitten er dan in die klas?" 	
	document.rij.antwoordzindeel1.value = "In die klas zitten"	
	document.rij.antwoordzindeel2.value = "leerlingen."	
	answer = N
	}

if (typeoefening == 8)
	{
	document.rij.opgave.value = "In een klas wordt aan Piet gevraagd aan een getal te denken. Hij zegt dit door aan Wim die er een tweede getal bijtelt. Ellen vermeerdert dit resultaat opnieuw met het tweede getal en zo verder tot de laatste leerling, Ine. Elke leerling onthoudt het resultaat van zijn bewerking en de leerkracht telt al deze getallen op. Als je weet dat Piet begon met " + U1 + ", Ine eindigde met " + UN + " en de leerkracht als som " + SN + " krijgt, hoeveel leerlingen zitten er dan in die klas?" 	
	document.rij.antwoordzindeel1.value = "In die klas zitten"	
	document.rij.antwoordzindeel2.value = "leerlingen."	
	answer = N
	}

if (typeoefening == 9)
	{
	document.rij.opgave.value = "In een klas wordt aan Piet gevraagd aan een getal te denken. Hij zegt dit door aan Wim die er een tweede getal bijtelt. Ellen vermeerdert dit resultaat opnieuw met het tweede getal en zo verder tot de laatste leerling, Ine. Elke leerling onthoudt het resultaat van zijn bewerking en de leerkracht telt al deze getallen op. Piet begon met " + U1 + ", Ine eindigde met " + UN + " en de leerkracht kreeg als som " + SN + ". Bereken het getal dat elke leerling telde bij het resultaat van de voorgaande leerling." 	
	document.rij.antwoordzindeel1.value = "Het getal dat er telkens bijkomt is"	
	document.rij.antwoordzindeel2.value = "."	
	answer = V
	}

if (typeoefening == 10)
	{
	document.rij.opgave.value = "Bepaal drie getallen die een meetkundige rij vormen als hun som s = " + S3 + " en hun product p = " + P3 + ". Schik deze getallen zoals in de rij."	
	document.rij.antwoordzindeel3.value = "De drie getallen zijn"	
	}

if (typeoefening == 11)
	{
	document.rij.opgave.value = "Johan plaatst een bedrag van " + U1 + " euro op een bankrekening. De bank geeft " + (Q * 100 - 100) + " % (samengestelde) intrest (per jaar). Hoeveel staat er op zijn rekening na " + (N-1) + " jaar?"  	
	document.rij.antwoordzindeel1.value = "Op de rekening staat dan"	
	document.rij.antwoordzindeel2.value = "euro."	
	answer = UN
	}

if (typeoefening == 12)
	{
	document.rij.opgave.value = "In een visvijver wordt vis uitgezet. Na 1 jaar zitten er " + U1 + " vissen in de vijver. Na 2 jaar zijn er dat " + U2 + " en nog een jaar later " + U3 + ". Als het aantal vissen zo blijft aangroeien, hoeveel vissen zijn er dan in de vijver na " + N + " jaar?"  	
	document.rij.antwoordzindeel1.value = "Na " + N + " jaar zijn er"  	
	document.rij.antwoordzindeel2.value = "vissen."	
	answer = UN
	}

if (typeoefening == 13)
	{
	document.rij.opgave.value = "In een visvijver wordt vis uitgezet. Na 1 jaar zitten er " + U1 + " vissen in de vijver. Na 2 jaar zijn er dat " + U2 + " en nog een jaar later " + U3 + ". Als het aantal vissen zo blijft aangroeien, na hoeveel jaar zitten er dan " + UN + " vissen in de vijver?"  	
	document.rij.antwoordzindeel1.value = "Er zijn " + UN + " vissen in de vijver na"  	
	document.rij.antwoordzindeel2.value = "jaar."	
	answer = N
	}

if (typeoefening == 14)
	{
	document.rij.opgave.value = "Op een computer wordt een virus actief. Na 1 dag zijn er " + U1 + " bestanden besmet met het virus. Daarna " + txtQ + " het aantal besmette bestanden elke dag. Hoeveel bestanden zijn er besmet na " + N + " dagen?"  	
	document.rij.antwoordzindeel1.value = "Na " + N + " dagen zijn er"  	
	document.rij.antwoordzindeel2.value = "bestanden besmet."	
	answer = UN
	}

if (typeoefening == 15)
	{
	document.rij.opgave.value = "Jan kreeg een (computer)virus toegestuurd. 1 dag later zijn er al " + U1 + " bestanden geïnfecteerd. En het aantal aangetaste bestanden " + txtQ + " elke dag. Na hoeveel dagen zijn al " + UN + " bestanden aangetast?"  	
	document.rij.antwoordzindeel1.value = UN + " bestanden zijn geïnfecteerd na"  	
	document.rij.antwoordzindeel2.value = "dagen."	
	answer = N
	}

if (typeoefening == 16)
	{
	document.rij.opgave.value = "Ik vermoedde dat mijn computer last had van een virus en inderdaad: bij een controle bleken al " + U1 + " bestanden aangetast. Morgen zullen daar nog eens " + U2 + " bestanden bijkomen en de dag daarna zullen er nog eens " + U3 + " bestanden meer besmet zijn. Hoeveel bestanden zullen er besmet zijn over " + (N-1) + " dagen?"  	
	document.rij.antwoordzindeel1.value = "Over " + (N-1) + " dagen zit het virus al in"   	
	document.rij.antwoordzindeel2.value = "bestanden."	
	answer = SN
	}

if (typeoefening == 17)
	{
	document.rij.opgave.value = "In een klas wordt aan een leerling gevraagd aan een getal te denken. Hij zegt dit door aan een tweede leerling die het vermenigvuldigt met een getal op een kaartje. Een derde leerling vermenigvuldigt dit resultaat opnieuw met het getal op het kaartje en zo verder. Als je weet dat het eerste getal " + U1 + " was en het getal op het kaartje " + Q + " en je weet ook dat het resultaat van de laatste vermenigvuldiging gelijk is aan " + UN + ", hoeveel leerlingen zitten er dan in die klas?" 	
	document.rij.antwoordzindeel1.value = "In die klas zitten"	
	document.rij.antwoordzindeel2.value = "leerlingen."	
	answer = N
	}

if (typeoefening == 18)
	{
	document.rij.opgave.value = "In een klas noteert de leerkracht " + Q + " op bord. Dan wordt aan Jolien gevraagd aan een getal te denken en dit te vermenigvuldigen met het getal op bord. Zij geeft dit resultaat door aan Tom die opnieuw vermenigvuldigt met " + Q + ". Zo gaat men verder tot de laatste leerling, Anne. Elke leerling onthoudt het resultaat van zijn bewerking en de leerkracht telt al deze getallen op. Jolien begon met " + U1 + " en Anne eindigde met " + UN + ". Bereken het getal dat de leerkracht bekwam." 	
	document.rij.antwoordzindeel1.value = "De leerkracht vond als totaal"	
	document.rij.antwoordzindeel2.value = "."	
	answer = SN
	}

if (typeoefening == 19)
	{
	document.rij.opgave.value = "Een snelgroeiende plant wordt gebruikt als bodembedekker. Na 2 weken is er " + U1 + " dm² bedekt. Daarna " + txtQ + " de ingenomen oppervlakte om de twee weken. Hoeveel dm² wordt door deze planten bedekt na " + (2*N) + " weken?"  	
	document.rij.antwoordzindeel1.value = "Na " + (2*N) + " weken bedekken deze planten"  	
	document.rij.antwoordzindeel2.value = "dm²."	
	answer = UN
	}

if (typeoefening == 20)
	{
	document.rij.opgave.value = "Het aantal bacteriën in een experiment " + txtQ + " elke dag. Na 1 dag " + U1 + " werden bacteriën gevonden. Na hoeveel dagen vindt men al " + UN + " bacteriën?"  	
	document.rij.antwoordzindeel1.value = UN + " bacteriën vind je terug na"  	
	document.rij.antwoordzindeel2.value = "dagen."	
	answer = N
	}



}


function nieuwoef()
{
wisantwoord()
antwoordjuist = 0
document.rij.opl.src = "../images/vraagteken.gif";
document.all.drieopl.style.display= "none";
document.all.eenopl.style.display= "none";
kiesoef()
kiesgetallen()
toonoef()
}

function toonopl()
{
antwoordjuist = 1 

if (typeoefening == 0) alert('Geg.: U1 = ' + U1 + ' ; v = ' + V + ' ; n = ' + N + '\n\nGevr.: Sn\n\nOpl.:\nUn = U1 + (n - 1).v\n<=>Un = ' + U1 + ' + (' + N + '-1).' + V + '\n<=>Un = ' + UN + '\n\nSn = n.(U1 + Un)/2\n<=>Sn = ' + N + '.(' + U1 + ' + ' + UN +')/2\n<=>Sn = ' + SN + '\n\nAntwoord: na ' + N + ' weken staat er ' + SN + ' dm² kruid.')

if (typeoefening == 1) 
	{
	if (U2 < 0) alert('Getallen: a - v ; a ; a + v\n\nSom:\n(a - v) + a + (a + v) = ' + S3 + '\n<=>a = ' + U2 + '\n\nProduct:\n(' + U2 + ' - v) . (' + U2 + ') . (' + U2 + ' + v) = ' + P3 + '\n<=>v = ' + V + ' of v = ' + (0 - V) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	if (U2 > 0) alert('Getallen: a - v ; a ; a + v\n\nSom:\n(a - v) + a + (a + v) = ' + S3 + '\n<=>a = ' + U2 + '\n\nProduct:\n(' + U2 + ' - v) . ' + U2 + ' . (' + U2 + ' + v) = ' + P3 + '\n<=>v = ' + V + ' of v = ' + (0 - V) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	}
	
if (typeoefening == 2) 
	{
	if (N == 4) alert('Kleinste hoek = â\n\nâ + (â + ' + V + ') + (â + ' + 2*V + ') + (â + ' + 3*V + ') = 360°\n<=>â = ' + U1 + '\n\nGrootste hoek = ' + U1 + ' + 3 . ' + V + ' = ' + UN)
	if (N == 6) alert('Kleinste hoek = â\n\nâ + (â + ' + V + ') + (â + ' + 2*V + ') + (â + ' + 3*V + ') + (â + ' + 4*V + ') + (â + ' + 5*V + ') = 720°\n<=>â = ' + U1 + '\n\nGrootste hoek = ' + U1 + ' + 5 . ' + V + ' = ' + UN)
	if (N == 8) alert('Kleinste hoek = â\n\nâ + (â + ' + V + ') + (â + ' + 2*V + ') + (â + ' + 3*V + ') + (â + ' + 4*V + ') + (â + ' + 5*V + ') + (â + ' + 6*V + ') + (â + ' + 7*V + ') = 1080°\n<=>â = ' + U1 + '\n\nGrootste hoek = ' + U1 + ' + 7 . ' + V + ' = ' + UN)
	}

if (typeoefening == 3) 
	{
	if (N == 4) alert('Verschil = v\n\n' + U1 + ' + (' + U1 + ' + v) + (' + U1 + ' + 2v) + (' + U1 + ' + 3v) = 360°\n<=>v = ' + V + '\n\nHet verschil is ' + V + '.')
	if (N == 6) alert('Verschil = v\n\n' + U1 + ' + (' + U1 + ' + v) + (' + U1 + ' + 2v) + (' + U1 + ' + 3v) + (' + U1 + ' + 4v) + (' + U1 + ' + 5v) = 720°\n<=>v = ' + V + '\n\nHet verschil is ' + V + '.')
	if (N == 8) alert('Verschil = v\n\n' + U1 + ' + (' + U1 + ' + v) + (' + U1 + ' + 2v) + (' + U1 + ' + 3v) + (' + U1 + ' + 4v) + (' + U1 + ' + 5v) + (' + U1 + ' + 6v) + (' + U1 + ' + 7v) = 1080°\n<=>v = ' + V + '\n\nHet verschil is ' + V + '.')
	}

if (typeoefening == 4) alert('Geg.: Sn = ' + SN + ' ; U1 = ' + U1 + ' ; v = ' + V + '\n\nGevr.: n\n\nOpl.: uit Sn = n.(U1 + Un)/2 en Un = U1 + (n - 1).v leiden we af:\nSn = n.[U1 + U1 + (n-1).v]/2\n<=>' + SN + ' = n.[' + U1 + ' + ' + U1 + ' + (n-1).' + V + ']/2\n<=>n = ' + N + '\n\nAntwoord: na ' + N + ' maanden.')

if (typeoefening == 5) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; v = ' + V + '\n\nGevr.: n\n\nOpl.:\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (n-1).' + V + '\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' palen.')

if (typeoefening == 6) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; v = ' + V + '\n\nGevr.: Sn\n\nOpl.:\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (n-1).' + V + '\n<=>n = ' + N + '\n\nSn = n.(U1 + Un)/2\n<=>Sn = ' + N + '.(' + U1 + ' + ' + UN +')/2\n<=>Sn = ' + SN + '\n\nAntwoord: hij deed ' + SN + ' sit-ups.')
	
if (typeoefening == 7) 
	{
	if (V > 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; v = ' + V + '\n\nGevr.: n\n\nOpl.:\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (n-1).' + V + '\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	if (V < 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; v = ' + V + '\n\nGevr.: n\n\nOpl.:\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (n-1).(' + V + ')\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	}

if (typeoefening == 8) 
	{
	if (UN > 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; Sn = ' + SN + '\n\nGevr.: n\n\nOpl.:\nSn = n.(U1 + Un)/2\n<=>' + SN + ' = n.(' + U1 + ' + ' + UN +')/2\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	if (UN < 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; Sn = ' + SN + '\n\nGevr.: n\n\nOpl.:\nSn = n.(U1 + Un)/2\n<=>' + SN + ' = n.[' + U1 + ' + (' + UN +')]/2\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	}
	
if (typeoefening == 9)
	{
	if (UN > 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; Sn = ' + SN + '\n\nGevr.: v\n\nOpl.:\nSn = n.(U1 + Un)/2\n<=>' + SN + ' = n.(' + U1 + ' + ' + UN +')/2\n<=>n = ' + N + '\n\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (' + N + ' - 1).v\n<=>v = ' + V + '\n\nAntwoord: het verschil is ' + V + '.')
	if (UN < 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; Sn = ' + SN + '\n\nGevr.: v\n\nOpl.:\nSn = n.(U1 + Un)/2\n<=>' + SN + ' = n.[' + U1 + ' + (' + UN +')]/2\n<=>n = ' + N + '\n\nUn = U1 + (n - 1).v\n<=>' + UN + ' = ' + U1 + ' + (' + N + ' - 1).v\n<=>v = ' + V + '\n\nAntwoord: het verschil is ' + V + '.')
	}
if (typeoefening == 10) 
	{
	if ((U2 < 0) && (Q < -1)) alert('Getallen: a/q ; a ; a.q\n\nProduct:\n(a/q) . a . (a.q) = ' + P3 + '\n<=>a = ' + U2 + '\n\nSom:\n(' + U2 + '/q) + (' + U2 + ') + (' + U2 + '.q) = ' + S3 + '\n<=>q = ' + Q + ' of q = -1/' + Math.abs(Q) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	if ((U2 < 0) && (Q > 1)) alert('Getallen: a/q ; a ; a.q\n\nProduct:\n(a/q) . a . (a.q) = ' + P3 + '\n<=>a = ' + U2 + '\n\nSom:\n(' + U2 + '/q) + (' + U2 + ') + (' + U2 + '.q) = ' + S3 + '\n<=>q = ' + Q + ' of q = 1/' + Math.abs(Q) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	if ((U2 > 0) && (Q < -1)) alert('Getallen: a/q ; a ; a.q\n\nProduct:\n(a/q) . a . (a.q) = ' + P3 + '\n<=>a = ' + U2 + '\n\nSom:\n(' + U2 + '/q) + ' + U2 + ' + (' + U2 + '.q) = ' + S3 + '\n<=>q = ' + Q + ' of q = -1/' + Math.abs(Q) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	if ((U2 > 0) && (Q > 1)) alert('Getallen: a/q ; a ; a.q\n\nProduct:\n(a/q) . a . (a.q) = ' + P3 + '\n<=>a = ' + U2 + '\n\nSom:\n(' + U2 + '/q) + ' + U2 + ' + (' + U2 + '.q) = ' + S3 + '\n<=>q = ' + Q + ' of q = 1/' + Math.abs(Q) + '\n\nDe getallen zijn ' + U1 + ' , ' + U2 + ' en ' + U3 + ' (of omgekeerd).')
	}

if (typeoefening == 11) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; n = ' + N + '\n\nGevr.: Un\n\nOpl.:\nUn = U1.q^(n-1)\n<=>Un = ' + U1 + ' . ' + Q + '^' + (N-1) + '\n<=>Un = ' + UN +'\n\nAntwoord: er staat dan ' + UN + ' euro op de rekening.')

if (typeoefening == 12) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; n = ' + N + '\n\nGevr.: Un\n\nOpl.:\nUn = U1.q^(n-1)\n<=>Un = ' + U1 + ' . ' + Q + '^' + (N-1) + '\n<=>Un = ' + UN +'\n\nAntwoord: er zijn dan ' + UN + ' vissen in de vijver.')

if (typeoefening == 13) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; Un = ' + UN + '\n\nGevr.: n\n\nOpl.:\nUn = U1.q^(n-1)\n<=>' + UN + ' = ' + U1 + ' . ' + Q + '^(n-1)\n<=>n = ' + N +'\n\nAntwoord: na ' + N + ' jaar zijn er ' + UN + ' vissen in de vijver.')

if (typeoefening == 14) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; n = ' + N + '\n\nGevr.: Un\n\nOpl.:\nUn = U1.q^(n-1)\n<=>Un = ' + U1 + ' . ' + Q + '^' + (N-1) + '\n<=>Un = ' + UN +'\n\nAntwoord: na ' + N + ' dagen zijn er ' + UN + ' bestanden besmet.')

if (typeoefening == 15) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; Un = ' + UN + '\n\nGevr.: n\n\nOpl.:\nUn = U1.q^(n-1)\n<=>' + UN + ' = ' + U1 + ' . ' + Q + '^(n-1)\n<=>n = ' + N +'\n\nAntwoord: na ' + N + ' dagen zijn er ' + UN + ' bestanden besmet.')

if (typeoefening == 16) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; n = ' + N + '\nVandaag = dag 1 -> over ' + (N-1) + ' dagen = ' + N + 'de dag\n\nGevr.: Sn\n\nOpl.:\nSn = U1 . (1 - q^n)/(1 - q)\n<=>Sn = ' + U1 + ' . (1 - ' + Q + '^' + N + ') / (1 - ' + Q + ') \n<=>Sn = ' + SN + '\n\nAntwoord: na ' + N + ' dagen zijn er ' + SN + ' bestanden besmet.')

if (typeoefening == 17) 
	{
	if (Q > 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; q = ' + Q + '\n\nGevr.: n\n\nOpl.:\nUn = U1 . q^(n - 1)\n<=>' + UN + ' = ' + U1 + ' . ' + Q + '^(n-1)\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	if (Q < 0) alert('Geg.: Un = ' + UN + ' ; U1 = ' + U1 + ' ; q = ' + Q + '\n\nGevr.: n\n\nOpl.:\nUn = U1 . q^(n - 1)\n<=>' + UN + ' = ' + U1 + ' . (' + Q + ')^(n-1)\n<=>n = ' + N + '\n\nAntwoord: er zijn ' + N + ' leerlingen.')
	}
if (typeoefening == 18)
	{
	if (Q > 0) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; Un = ' + UN + '\n\nGevr.: Sn\n\nOpl.:\nUn = U1 . q^(n-1)\n<=>' + UN + ' = ' + U1 + ' . ' + Q + '^(n-1)\n<=>n = ' + N + '\n\nSn = U1 . (1 - q^n)/(1 - q)\n<=>Sn = ' + U1 + ' . (1 - ' + Q + '^' + N + ') / (1 - ' + Q + ') \n<=>Sn = ' + SN + '\n\nAntwoord: de leerkracht kreeg als som ' + SN + '.')
	if (Q < 0) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; Un = ' + UN + '\n\nGevr.: Sn\n\nOpl.:\nUn = U1 . q^(n-1)\n<=>' + UN + ' = ' + U1 + ' . (' + Q + ')^(n-1)\n<=>n = ' + N + '\n\nSn = U1 . (1 - q^n)/(1 - q)\n<=>Sn = ' + U1 + ' . [1 - (' + Q + ')^' + N + '] / [1 - (' + Q + ')] \n<=>Sn = ' + SN + '\n\nAntwoord: de leerkracht kreeg als som ' + SN + '.')
	}
if (typeoefening == 19) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; n = ' + N + '\n\nGevr.: Un\n\nOpl.:\nUn = U1.q^(n-1)\n<=>Un = ' + U1 + ' . ' + Q + '^' + (N-1) + '\n<=>Un = ' + UN +'\n\nAntwoord: na ' + N + ' dagen is er ' + UN + ' dm² bedekt.')

if (typeoefening == 20) alert('Geg.: U1 = ' + U1 + ' ; Q = ' + Q + ' ; Un = ' + UN + '\n\nGevr.: n\n\nOpl.:\nUn = U1.q^(n-1)\n<=>' + UN + ' = ' + U1 + ' . ' + Q + '^(n-1)\n<=>n = ' + N +'\n\nAntwoord: na ' + N + ' dagen zijn er ' + UN + ' bacteriën.')


}

function controle()
{
var oplossing = document.rij.antwoord.value
var oplossing1 = document.rij.antwoord1.value
var oplossing2 = document.rij.antwoord2.value
var oplossing3 = document.rij.antwoord3.value

if (((typeoefening != 1) && (typeoefening != 10) && (oplossing == "")) || (((typeoefening == 1) || (typeoefening == 10)) && ((oplossing1 == "") || (oplossing2 == "") || (oplossing3 == "")))) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if ((typeoefening == 1) || (typeoefening == 10)) 
		{
		if (((oplossing1 == U1) && (oplossing2 == U2) && (oplossing3 == U3)) || ((oplossing1 == U3) && (oplossing2 == U2) && (oplossing3 == U1))) 
			{
			rij.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			rij.opl.src = "../images/fout.gif"
			}
		}
	else
		{
		if (oplossing == answer)
			{
			rij.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			rij.opl.src = "../images/fout.gif"
			}
		}	

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.rij.aantaljuist.value = oplossingenteller
	document.rij.aantalpogingen.value = pogingenteller
	document.rij.percentage.value = procent		
	}  
}
}

