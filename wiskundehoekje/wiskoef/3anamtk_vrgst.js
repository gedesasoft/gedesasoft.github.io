var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var X1 = 0
var X2 = 0
var X3 = 0
var Y1 = 0
var Y2 = 0
var Y3 = 0
var M = 0
var Q = 0

function wisantwoord()
{
document.anamtk.antwoord.value = ""
}

function kiesgetallen()
{
X2 = 0
X3 = 0

if ((typeoefening == 1) || (typeoefening == 2))  
	{
	M = Math.floor(Math.random() * 16) + 20;
	Q = Math.floor(Math.random() * 200) + 3500;
	X1 = Math.floor(Math.random() * 150) + 50;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 150) + 50;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 150) + 50;
	}
if ((typeoefening == 3) || (typeoefening == 4))  
	{
	M = Math.floor(Math.random() * 11) + 10;
	Q = Math.floor(Math.random() * 20) + 35;
	X1 = Math.round(Math.floor(Math.random() * 40) + 1 ) / 4;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.round(Math.floor(Math.random() * 40) + 1) / 4;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.round(Math.floor(Math.random() * 40) + 1) / 4;
	}
if ((typeoefening == 5) || (typeoefening == 6))  
	{
	M = 1.8;
	Q = 32;
	X1 = Math.floor(Math.random() * 40) - 10;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 40) - 10;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 40) - 10;
	}
if ((typeoefening == 7) || (typeoefening == 8))  
	{
	M = Math.floor(Math.random() * 16) + 20;
	Q = Math.floor(Math.random() * 16) + 30;
	X1 = Math.floor(Math.random() * 20) + 1;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 20) + 1;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 20) + 1;
	}
if ((typeoefening == 9) || (typeoefening == 10))  
	{
	M = Math.round(Math.floor(Math.random() * 10) + 1) / 4;
	Q = Math.floor(Math.random() * 26) + 30;
	X1 = Math.floor(Math.random() * 30) + 1;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 30) + 1;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 30) + 1;
	}
if ((typeoefening == 11) || (typeoefening == 12))  
	{
	M = Math.round(Math.floor(Math.random() * 15) + 12) / 2;
	Q = Math.floor(Math.random() * 30) + 30;
	X1 = Math.floor(Math.random() * 30) + 1;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 30) + 1;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 30) + 1;
	}
if ((typeoefening == 13) || (typeoefening == 14))  
	{
	M = Math.round(Math.floor(Math.random() * 7) + 1) / 8;
	Q = Math.floor(Math.random() * 200) + 800;
	X1 = 4 * (Math.floor(Math.random() * 75) + 1);
	while ((X2 == 0) || (X2 == X1)) X2 = 4 * (Math.floor(Math.random() * 75) + 1);
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = 4 * (Math.floor(Math.random() * 75) + 1);
	}
if ((typeoefening == 15) || (typeoefening == 16))  
	{
	M = Math.round(Math.floor(Math.random() * 16) + 12) / 4;
	Q = Math.floor(Math.random() * 6) + 7;
	X1 = Math.floor(Math.random() * 15) + 1;
	while ((X2 == 0) || (X2 == X1)) X2 = Math.floor(Math.random() * 15) + 1;
	while ((X3 == 0) || (X3 == X1) || (X3 == X2)) X3 = Math.floor(Math.random() * 15) + 1;
	}

Y1 = M * X1 + Q
Y2 = M * X2 + Q
Y3 = M * X3 + Q
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 16) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.anamtk.opgave.value = "Een vrachtwagen geladen met " + X1 + " kisten fruit heeft een massa van " + Y1 + " kg. Als de vrachtwagen " + X2 + " kisten vervoert is de massa " + Y2 + " kg. Bereken met deze gegevens hoeveel de massa is als er " + X3 + " kisten geladen worden."	
	document.anamtk.antwoordzindeel1.value = "Dan zal de massa"	
	document.anamtk.antwoordzindeel2.value = "kg zijn."	
	}
if (typeoefening == 2)
	{
	document.anamtk.opgave.value = "Een vrachtwagen geladen met " + X1 + " kisten fruit heeft een massa van " + Y1 + " kg. Als de vrachtwagen " + X2 + " kisten vervoert is de massa " + Y2 + " kg. Bereken hoeveel kisten er geladen werden als de massa " + Y3 + " kg bedraagt."	
	document.anamtk.antwoordzindeel1.value = "Dan zijn er"	
	document.anamtk.antwoordzindeel2.value = "kisten geladen."	
	}
if (typeoefening == 3)
	{
	document.anamtk.opgave.value = "Als men aan een veer een massa van " + X1 + " kg hangt krijgt de veer een lengte van " + Y1 + " cm. Als men er " + X2 + " kg aan hangt rekt ze uit tot " + Y2 + " cm. Hoe lang zal de veer worden als men er " + X3 + " kg aan bevestigt?"	
	document.anamtk.antwoordzindeel1.value = "Dan zal de veer"	
	document.anamtk.antwoordzindeel2.value = "cm lang zijn."	
	}
if (typeoefening == 4)
	{
	document.anamtk.opgave.value = "Als men aan een veer een massa van " + X1 + " kg hangt krijgt de veer een lengte van " + Y1 + " cm. Als men er " + X2 + " kg aan hangt rekt ze uit tot " + Y2 + " cm. Als de veer nu een lengte van " + Y3 + " cm heeft, hoeveel kg werd er dan aan bevestigd?"	
	document.anamtk.antwoordzindeel1.value = "Dan hangt er aan de veer een massa van "	
	document.anamtk.antwoordzindeel2.value = "kg."	
	}
if (typeoefening == 5)
	{
	document.anamtk.opgave.value = "Een temperatuur van " + X1 + " °C (Celsius) komt overeen met " + Y1 + " °F (Fahrenheit). Als het " + Y2 + " °F is, dan is het " + X2 + " °C. Hoeveel °F is het als de thermometer " + X3 + " °C aanwijst?"	
	document.anamtk.antwoordzindeel1.value = "Dan is het "	
	document.anamtk.antwoordzindeel2.value = "°F."	
	}
if (typeoefening == 6)
	{
	document.anamtk.opgave.value = "Een temperatuur van " + X1 + " °C (Celsius) komt overeen met " + Y1 + " °F (Fahrenheit). Als het " + X2 + " °C is, dan is het " + Y2 + " °F. Hoeveel °C is het als de thermometer " + Y3 + " °F aanwijst?"	
	document.anamtk.antwoordzindeel1.value = "Dan is het "	
	document.anamtk.antwoordzindeel2.value = "°C."	
	}
if (typeoefening == 7)
	{
	document.anamtk.opgave.value = "Als we achter de locomotief van een (speelgoed)trein " + X1 + " wagons koppelen krijgt de trein een totale lengte van " + Y1 + " cm. Als er " + X2 + " wagons aanhangen is de lengte " + Y2 + " cm. Hoe lang wordt de trein als we " + X3 + " wagons aan de locomotief bevestigen? (een wagon en een locomotief hebben niet noodzakelijk dezelfde lengte)"	
	document.anamtk.antwoordzindeel1.value = "Dan is de trein"	
	document.anamtk.antwoordzindeel2.value = "cm lang."	
	}
if (typeoefening == 8)
	{
	document.anamtk.opgave.value = "Als we achter de locomotief van een (speelgoed)trein " + X1 + " wagons koppelen krijgt de trein een totale lengte van " + Y1 + " cm. Als er " + X2 + " wagons aanhangen is de lengte " + Y2 + " cm. Als de trein " + Y3 + " cm lang is, hoeveel wagons hangen er dan achter de locomotief? (een wagon en een locomotief hebben niet noodzakelijk dezelfde lengte)"	
	document.anamtk.antwoordzindeel1.value = "Dan hangen er "	
	document.anamtk.antwoordzindeel2.value = "wagons aan."	
	}
if (typeoefening == 9)
	{
	document.anamtk.opgave.value = "Een kabel wordt strak gespannen tussen twee gebouwen. " + X1 + " m rechts van het eerste gebouw bevindt de kabel zich op een hoogte van " + Y1 + " m. " + X2 + " m rechts van het eerste gebouw bevindt de kabel zich op " + Y2 + " m hoogte. Welke hoogte bereikt de kabel " + X3 + " m rechts van dat eerste gebouw?"	
	document.anamtk.antwoordzindeel1.value = "Dan bevindt de kabel zich op"	
	document.anamtk.antwoordzindeel2.value = "m hoogte."	
	}
if (typeoefening == 10)
	{
	document.anamtk.opgave.value = "Een kabel wordt strak gespannen tussen twee gebouwen. " + X1 + " m rechts van het eerste gebouw bevindt de kabel zich op een hoogte van  " + Y1 + " m. " + X2 + " m rechts van het eerste gebouw bevindt de kabel zich op " + Y2 + " m hoogte. Op een bepaalde plaats bereikt de kabel een hoogte van " + Y3 + " m. Welke afstand is er dan horizontaal tussen deze plaats en het eerste gebouw?"	
	document.anamtk.antwoordzindeel1.value = "Deze afstand (rechts van het eerste gebouw) is dan"	
	document.anamtk.antwoordzindeel2.value = "m."	
	}
if (typeoefening == 11)
	{
	document.anamtk.opgave.value = "Een verhuisfirma telt een bepaald bedrag voor het laden en lossen en vraagt daarnaast een kilometervergoeding. Als de lading over " + X1 + " km vervoerd moet worden betaal je " + Y1 + " euro. Als de afstand " + X2 + " km bedraagt loopt de rekening op tot " + Y2 + " euro. Hoeveel moet je betalen voor een transport over " + X3 + " km?"	
	document.anamtk.antwoordzindeel1.value = "Dan moet je "	
	document.anamtk.antwoordzindeel2.value = "euro betalen."	
	}
if (typeoefening == 12)
	{
	document.anamtk.opgave.value = "Een verhuisfirma telt een bepaald bedrag voor het laden en lossen en vraagt daarnaast een kilometervergoeding. Als de lading over " + X1 + " km vervoerd moet worden betaal je " + Y1 + " euro. Als de afstand " + X2 + " km bedraagt loopt de rekening op tot " + Y2 + " euro. Toen ik vorige maand verhuisde kostte me dat " + Y3 + " euro. Hoe km reed de verhuiswagen dan?"	
	document.anamtk.antwoordzindeel1.value = "Dan legde de verhuiswagen "	
	document.anamtk.antwoordzindeel2.value = "km af."	
	}
if (typeoefening == 13)
	{
	document.anamtk.opgave.value = "In de Alpen was er een kabellift gemaakt om twee dorpen te verbinden. Als je (vanuit het dal) " + X1 + " m langs de kabel had afgelegd bereikte je al een hoogte van " + Y1 + " m. Na " + X2 + " m langs de kabel zit je op een hoogte van " + Y2 + " m. Hoe hoog zit je als je al " + X3 + " m langs de kabel gevorderd bent?"	
	document.anamtk.antwoordzindeel1.value = "Dan bevind je je op een hoogte van "	
	document.anamtk.antwoordzindeel2.value = "m."	
	}
if (typeoefening == 14)
	{
	document.anamtk.opgave.value = "In de Alpen was er een kabellift gemaakt om twee dorpen te verbinden. Als je (vanuit het dal) " + X1 + " m langs de kabel had afgelegd bereikte je al een hoogte van " + Y1 + " m. Na " + X2 + " m langs de kabel zit je op een hoogte van " + Y2 + " m. Als je je op een hoogte van  " + Y3 + " m bevindt, hoeveel m heeft de kabellift dan al afgelegd?"	
	document.anamtk.antwoordzindeel1.value = "Dan heeft de kabellift al  "	
	document.anamtk.antwoordzindeel2.value = "m afgelegd."	
	}
if (typeoefening == 15)
	{
	document.anamtk.opgave.value = "Een wandelvereniging ondernam een recordpoging en vertrok voor een zeer lange wandeling. Ze wandelden westwaarts. Toen ze " + X1 + " uur gewandeld hadden bevonden ze zich al " + Y1 + " km ten westen van de hoofdstad. Na " + X2 + " uur wandelen zaten ze op " + Y2 + " km (ten westen) van de hoofdstad. Hoe ver bevonden ze zich van de hoofdstad na " + X3 + " uur wandelen?"	
	document.anamtk.antwoordzindeel1.value = "Na " + X3 + " uur wandelen zaten ze op"	
	document.anamtk.antwoordzindeel2.value = "km van de hoofdstad."	
	}
if (typeoefening == 16)
	{
	document.anamtk.opgave.value = "Een wandelvereniging ondernam een recordpoging en vertrok voor een zeer lange wandeling. Ze wandelden westwaarts. Toen ze " + X1 + " uur gewandeld hadden bevonden ze zich al " + Y1 + " km ten westen van de hoofdstad. Na " + X2 + " uur wandelen zaten ze op " + Y2 + " km (ten westen) van de hoofdstad. Op een bepaald ogenblik zijn ze al " + Y3 + " ten westen van de hoofdstad. Hoe lang zijn ze dan al aan het wandelen?"	
	document.anamtk.antwoordzindeel1.value = "Dan duurt de wandeling al "	
	document.anamtk.antwoordzindeel2.value = "uur."	
	}


}


function nieuwoef()
{
antwoordjuist = 0
document.anamtk.antwoord.value = "??"
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
var oplossing = document.anamtk.antwoord.value
if ((oplossing == "??") || (oplossing == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if ((typeoefening % 2) == 1) 
		{
		if (oplossing == Y3) 
			{
			anamtk.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else anamtk.opl.src = "../images/fout.gif";
		}

	if ((typeoefening % 2) == 0) 
		{
		if (oplossing == X3) 
			{
			anamtk.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else anamtk.opl.src = "../images/fout.gif";
		}


	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.anamtk.aantaljuist.value = oplossingenteller
	document.anamtk.aantalpogingen.value = pogingenteller
	document.anamtk.percentage.value = procent		
	}  
}
}

