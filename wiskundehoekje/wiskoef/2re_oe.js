var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var typeaankopen = 0
var A = 0
var B = 0
var C = 0
var D = 0
var M = 0
var DminB = 0
var CminA = 0

aankopen = new Array(8)
aankopen[0] = "speelgoedauto's"
aankopen[1] = "potloden"
aankopen[2] = "tijdschriften"
aankopen[3] = "cd-roms"
aankopen[4] = "flesjes frisdrank"
aankopen[5] = "pakjes kaas"
aankopen[6] = "kg fruit"
aankopen[7] = "g vlees"

function wisantwoord()
{
document.evenr.antwoord.value = ""
}

function kiesgetal(onder, boven)
{
return (Math.floor(Math.random() * (boven - onder)) + onder)
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 26) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	typeaankopen = Math.floor(Math.random() * 8)
	if (typeaankopen == 0) M = kiesgetal(10, 45)
	if (typeaankopen == 1) M = kiesgetal(2, 7)
	if (typeaankopen == 2) M = kiesgetal(10, 55)
	if (typeaankopen == 3) M = kiesgetal(70, 550)
	if (typeaankopen == 4) M = kiesgetal(3, 15)
	if (typeaankopen == 5) M = kiesgetal(10, 60)
	if (typeaankopen == 6) M = kiesgetal(8, 35)
	if (typeaankopen == 7) M = kiesgetal(800, 6000)
	
	A = kiesgetal(2, 9)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(2, 9)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Als " + A + " " + aankopen[typeaankopen] + " " + B + " euro kosten, hoeveel kosten " + C + " " + aankopen[typeaankopen] + " dan?"	
	document.evenr.antwoordzindeel1.value = "De prijs van " + C + " " + aankopen[typeaankopen] + " is" 	
	document.evenr.antwoordzindeel2.value = "euro."	
	}

if (typeoefening == 2)
	{
	typeaankopen = Math.floor(Math.random() * 8)
	if (typeaankopen == 0) M = kiesgetal(10, 45)
	if (typeaankopen == 1) M = kiesgetal(2, 7)
	if (typeaankopen == 2) M = kiesgetal(10, 55)
	if (typeaankopen == 3) M = kiesgetal(70, 550)
	if (typeaankopen == 4) M = kiesgetal(3, 15)
	if (typeaankopen == 5) M = kiesgetal(10, 60)
	if (typeaankopen == 6) M = kiesgetal(8, 35)
	if (typeaankopen == 7) M = kiesgetal(800, 6000)
	
	A = kiesgetal(2, 9)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(2, 9)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Als " + A + " " + aankopen[typeaankopen] + " " + B + " euro kosten, hoeveel " + aankopen[typeaankopen] + " kan je dan kopen voor " + D + " euro?"	
	document.evenr.antwoordzindeel1.value = "Voor " + D + " euro kan je " 	
	document.evenr.antwoordzindeel2.value = aankopen[typeaankopen] + " kopen."	
	}

if (typeoefening == 3)
	{
	M = kiesgetal(25, 55)
	A = kiesgetal(2, 9)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(2, 9)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Een wandelaar legt " + B + " km af in " + A + " uur. Hoeveel km wandelt hij dan in " + C + " uur?"	
	document.evenr.antwoordzindeel1.value = "De wandelaar legt in " + C + " uur" 	
	document.evenr.antwoordzindeel2.value = "km af."	
	}

if (typeoefening == 4)
	{
	M = kiesgetal(25, 55)
	A = kiesgetal(2, 9)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(2, 9)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Een wandelaar legt " + B + " km af in " + A + " uur. Hoeveel uur doet hij over " + D + " km?"	
	document.evenr.antwoordzindeel1.value = "De wandelaar legt " + D + " km af in" 	
	document.evenr.antwoordzindeel2.value = "uur."	
	}

if (typeoefening == 5)
	{
	M = kiesgetal(600, 1100)
	A = kiesgetal(4, 15)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(4, 15)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Een auto rijdt " + B + " km op " + A + " uur. Hoeveel km legt deze auto af op " + C + " uur (als hij met dezelfde snelheid rijdt)?"	
	document.evenr.antwoordzindeel1.value = "De auto legt op " + C + " uur" 	
	document.evenr.antwoordzindeel2.value = "km af."	
	}

if (typeoefening == 6)
	{
	M = kiesgetal(600, 1100)
	A = kiesgetal(4, 15)
	B = Math.floor(M * A * 100) / 1000
	C = A
	while (C == A) C = kiesgetal(4, 15)
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Een wagen rijdt " + B + " km op " + A + " uur. Hoeveel uur rijdt deze wagen om een afstand van " + D + " km af te leggen (als hij met dezelfde snelheid rijdt)?"	
	document.evenr.antwoordzindeel1.value = "Over een afstand van " + D + " km rijdt de wagen" 	
	document.evenr.antwoordzindeel2.value = "uur."	
	}

if (typeoefening == 7)
	{
	M = kiesgetal(300, 470)
	A = kiesgetal(9, 18)
	B = M * A
	C = A + kiesgetal(1, 5)
	D = M * C	

	document.evenr.opgave.value = "Voor een dak van " + A + " m breed heeft men " + B + " dakpannen nodig. Hoeveel dakpannen heeft men nodig als men het dak " + (C - A) + " m breder zou maken? (de hoogte wijzigt niet)"	
	document.evenr.antwoordzindeel1.value = "Dan heeft men" 	
	document.evenr.antwoordzindeel2.value = "dakpannen nodig."	
	}

if (typeoefening == 8)
	{
	M = kiesgetal(300, 470)
	A = kiesgetal(9, 18)
	B = M * A
	C = A
	while (C == A) C = kiesgetal(9, 18)
	D = M * C	

	document.evenr.opgave.value = "Voor een dak van " + A + " m breed heeft men " + B + " dakpannen nodig. Hoe breed is het dak waarvoor (met dezelfde hoogte) " + D + " dakpannen nodig zijn?"	
	document.evenr.antwoordzindeel1.value = "Dat dak is dan" 	
	document.evenr.antwoordzindeel2.value = "m breed."	
	}

if (typeoefening == 9)
	{
	typeaankopen = Math.floor(Math.random() * 8)
	if (typeaankopen == 0) M = kiesgetal(10, 45)
	if (typeaankopen == 1) M = kiesgetal(2, 7)
	if (typeaankopen == 2) M = kiesgetal(10, 55)
	if (typeaankopen == 3) M = kiesgetal(70, 550)
	if (typeaankopen == 4) M = kiesgetal(3, 15)
	if (typeaankopen == 5) M = kiesgetal(10, 60)
	if (typeaankopen == 6) M = kiesgetal(8, 35)
	if (typeaankopen == 7) M = kiesgetal(3, 10) / 100
	
	A = kiesgetal(2, 9)
	if (typeaankopen == 7) A = A * 1000
	B = Math.floor(M * A * 100) / 1000
	if (typeaankopen != 7) C = A + kiesgetal(2, 9)
	if (typeaankopen == 7) C = A + kiesgetal(2, 9) * 1000
	CminA = C - A
	D = Math.floor(M * C * 100) / 1000	

	document.evenr.opgave.value = "Jan kocht " + A + " " + aankopen[typeaankopen] + " en betaalde hiervoor " + B + " euro. Hoeveel euro betaalde Piet als je weet dat hij " + CminA + " " + aankopen[typeaankopen] + " meer kocht dan Jan?"	
	document.evenr.antwoordzindeel1.value = "Piet betaalde" 	
	document.evenr.antwoordzindeel2.value = "euro."	
	}

if (typeoefening == 10)
	{
	typeaankopen = Math.floor(Math.random() * 8)
	if (typeaankopen == 0) M = kiesgetal(10, 45)
	if (typeaankopen == 1) M = kiesgetal(2, 7)
	if (typeaankopen == 2) M = kiesgetal(10, 55)
	if (typeaankopen == 3) M = kiesgetal(70, 550)
	if (typeaankopen == 4) M = kiesgetal(3, 15)
	if (typeaankopen == 5) M = kiesgetal(10, 60)
	if (typeaankopen == 6) M = kiesgetal(8, 35)
	if (typeaankopen == 7) M = kiesgetal(3, 10) / 100
	
	A = kiesgetal(2, 9)
	if (typeaankopen == 7) A = A * 1000
	B = Math.floor(M * A * 100) / 1000
	if (typeaankopen != 7) C = A + kiesgetal(2, 9)
	if (typeaankopen == 7) C = A + kiesgetal(2, 9) * 1000
	D = Math.floor(M * C * 100) / 1000	
	DminB = Math.floor(M * (C-A) * 100) / 1000
	
	document.evenr.opgave.value = "Jan kocht " + A + " " + aankopen[typeaankopen] + " en betaalde hiervoor " + B + " euro. Hoeveel " + aankopen[typeaankopen] + " kocht Piet als je weet dat hij " + DminB + " euro meer betaalde dan Jan?"	
	document.evenr.antwoordzindeel1.value = "Piet kocht" 	
	document.evenr.antwoordzindeel2.value = aankopen[typeaankopen] + "."	
	}

if (typeoefening == 11)
	{
	M = kiesgetal(175, 325)
	A = kiesgetal(9, 35)
	B = Math.floor(M * A * 100) / 100
	C = A
	while (C == A) C = kiesgetal(9, 35)
	D = Math.floor(M * C * 100) / 100	

	document.evenr.opgave.value = "Voor een barbecue met " + A + " genodigden bestelt men " + B + " g vlees. Hoeveel g vlees bestel je voor een barbecue met " + C + " genodigden?"	
	document.evenr.antwoordzindeel1.value = "Voor " + C + " genodigden bestel je" 	
	document.evenr.antwoordzindeel2.value = "g vlees."	
	}

if (typeoefening == 12)
	{
	M = kiesgetal(175, 325)
	A = kiesgetal(9, 35)
	B = Math.floor(M * A * 100) / 100
	C = A
	while (C == A) C = kiesgetal(9, 35)
	D = Math.floor(M * C * 100) / 100	

	document.evenr.opgave.value = "Voor een barbecue met " + A + " genodigden bestelt men " + B + " g vlees. Hoeveel genodigden zijn er op een barbecue waarvoor men " + D + " g vlees besteld heeft?"	
	document.evenr.antwoordzindeel1.value = "Op die barbecue zijn er" 	
	document.evenr.antwoordzindeel2.value = "genodigden."	
	}

if (typeoefening == 13)
	{
	M = kiesgetal(175, 325)
	A = kiesgetal(9, 35)
	B = Math.floor(M * A * 100) / 100
	C = A + kiesgetal(2, 25)
	D = Math.floor(M * C * 100) / 100	

	document.evenr.opgave.value = "Een slager levert Geert " + B + " g vlees voor een barbecue met " + A + " genodigden. Hoeveel g vlees levert hij voor de barbecue van Wim waar er " + (C-A) + " genodigden meer zijn?"	
	document.evenr.antwoordzindeel1.value = "Wim bestelde" 	
	document.evenr.antwoordzindeel2.value = "g vlees."	
	}

if (typeoefening == 14)
	{
	M = kiesgetal(175, 325)
	A = kiesgetal(9, 35)
	B = Math.floor(M * A * 100) / 100
	C = A + kiesgetal(2, 25)
	D = Math.floor(M * C * 100) / 100	
	DminB = Math.floor(M * (C-A) * 100) / 100

	document.evenr.opgave.value = "Een slager levert Andreas " + B + " g vlees voor een barbecue met " + A + " genodigden. Hoeveel genodigden zijn er op de barbecue van Katrijn waar de slager " + DminB + " g meer vlees leverde?"	
	document.evenr.antwoordzindeel1.value = "Op Katrijns barbecue zijn er" 	
	document.evenr.antwoordzindeel2.value = "genodigden."	
	}

if (typeoefening == 15)
	{
	B = kiesgetal(14, 24)
	C = kiesgetal(3, 6)
	A = B
	while (A == B) A = kiesgetal(14, 24)

	document.evenr.opgave.value = "Een auto met een snelheid van " + (B*C) + " km/h legt een bepaalde afstand af in " + A + " minuten. Hoeveel minuten heeft hij nodig om dezelfde afstand te rijden aan een gemiddelde snelheid van " + (A*C) + " km/h?"	
	document.evenr.antwoordzindeel1.value = "Dan legt hij de afstand af in" 	
	document.evenr.antwoordzindeel2.value = "minuten."	
	}

if (typeoefening == 16)
	{
	B = kiesgetal(14, 24)
	C = kiesgetal(3, 6)
	A = B
	while (A == B) A = kiesgetal(14, 24)

	document.evenr.opgave.value = "Een auto met een snelheid van " + (B*C) + " km/h legt een bepaalde afstand af in " + A + " minuten. Wat is zijn gemiddelde snelheid als hij deze afstand aflegt in " + B + " minuten?"	
	document.evenr.antwoordzindeel1.value = "Dan is zijn gemiddelde snelheid" 	
	document.evenr.antwoordzindeel2.value = "km/h."	
	}

if (typeoefening == 17)
	{
	B = kiesgetal(4, 24)
	C = kiesgetal(2, 8)
	A = B
	while (A == B) A = kiesgetal(4, 24)

	document.evenr.opgave.value = "Ik heb voldoende veevoeder om " + (B*C) + " koeien gedurende " + A + " dagen te voeren. Hoeveel dagen kom ik toe met dezelfde hoeveelheid veevoeder voor " + (A*C) + " koeien?"	
	document.evenr.antwoordzindeel1.value = "Dan heb ik voldoende voer voor " 	
	document.evenr.antwoordzindeel2.value = "dagen."	
	}

if (typeoefening == 18)
	{
	B = kiesgetal(4, 24)
	C = kiesgetal(2, 8)
	A = B
	while (A == B) A = kiesgetal(4, 24)

	document.evenr.opgave.value = "Ik heb voldoende veevoeder om " + (B*C) + " paarden gedurende " + A + " dagen te voeren. Hoeveel paarden kan ik met dezelfde hoeveelheid veevoeder voeren gedurende " + B + " dagen?"	
	document.evenr.antwoordzindeel1.value = "Dan heb ik voldoende voer voor " 	
	document.evenr.antwoordzindeel2.value = "paarden."	
	}

if (typeoefening == 19)
	{
	B = kiesgetal(4, 14)
	C = kiesgetal(2, 8)
	A = B
	while (A == B) A = kiesgetal(14, 24)

	document.evenr.opgave.value = "Ik heb voldoende veevoeder om " + (B*C) + " varkens gedurende " + A + " dagen te voeren. Hoeveel dagen kom ik toe met dezelfde hoeveelheid veevoeder als ik " + (A-B)*C + " varkens meer heb?"	
	document.evenr.antwoordzindeel1.value = "Dan heb ik voldoende voer voor " 	
	document.evenr.antwoordzindeel2.value = "dagen."	
	}

if (typeoefening == 20)
	{
	B = kiesgetal(4, 14)
	C = kiesgetal(2, 8)
	A = B
	while (A == B)	A = kiesgetal(14, 24)

	document.evenr.opgave.value = "Ik heb voldoende veevoeder om " + (B*C) + " schapen gedurende " + A + " dagen te voeren. Mijn buur komt " + (A-B) + " dagen minder toe met dezelfde hoeveelheid voer. Hoeveel schapen heeft mijn buur?"	
	document.evenr.antwoordzindeel1.value = "Mijn buur heeft " 	
	document.evenr.antwoordzindeel2.value = "schapen."	
	}

if (typeoefening == 21)
	{
	B = kiesgetal(6, 24)
	C = kiesgetal(1, 8)
	A = B
	while (A == B)	A = kiesgetal(6, 24)

	document.evenr.opgave.value = "Een tandwiel met " + (B*C) + " tanden grijpt in op een tweede tandwiel met " + (A*C) + " tanden. Op een bepaalde tijd maakt het eerste rad " + A + " omwentelingen. Hoeveel omwentelingen maakt het tweede rad op diezelfde tijd?"	
	document.evenr.antwoordzindeel1.value = "Het tweede tandwiel maakt" 	
	document.evenr.antwoordzindeel2.value = "omwentelingen."	
	}

if (typeoefening == 22)
	{
	B = kiesgetal(6, 24)
	C = kiesgetal(1, 8)
	A = B
	while (A == B)	A = kiesgetal(6, 24)

	document.evenr.opgave.value = "Een tandwiel met " + (B*C) + " tanden grijpt in op een tweede tandwiel. Op de tijd dat het eerste rad " + A + " omwentelingen maakt draait het tweede rad " + B + " keer rond. Hoeveel tanden heeft het tweede tandwiel?"	
	document.evenr.antwoordzindeel1.value = "Het tweede tandwiel heeft" 	
	document.evenr.antwoordzindeel2.value = "tanden."	
	}

if (typeoefening == 23)
	{
	B = kiesgetal(6, 20)
	C = kiesgetal(3, 6)
	A = B
	while (A == B)	A = kiesgetal(6, 20)

	document.evenr.opgave.value = "Sinterklaas bezoekt een jeugdbeweging en geeft " + (B*C) + " kinderen elk " + A + " snoepjes. Hoeveel snoepjes zou elk kind gekregen hebben als er " + (A*C) + " kinderen zouden zijn?"	
	document.evenr.antwoordzindeel1.value = "Dan kreeg elk kind" 	
	document.evenr.antwoordzindeel2.value = "snoepjes."	
	}

if (typeoefening == 24)
	{
	B = kiesgetal(6, 20)
	C = kiesgetal(3, 6)
	A = B
	while (A == B)	A = kiesgetal(6, 20)

	document.evenr.opgave.value = "Sinterklaas bezoekt de eerste graad van een school en geeft " + (B*C) + " kinderen elk " + A + " snoepjes. Hij heeft evenveel snoepjes voorzien voor de tweede graad, maar daar krijgt ieder kind " + B + " snoepjes. Hoeveel kinderen zijn er in de tweede graad?"	
	document.evenr.antwoordzindeel1.value = "In de tweede graad zijn er" 	
	document.evenr.antwoordzindeel2.value = "kinderen."	
	}

if (typeoefening == 25)
	{
	B = kiesgetal(4, 8)
	C = kiesgetal(2, 5)
	A = B
	while (A == B) A = kiesgetal(8, 15)

	document.evenr.opgave.value = "Een bedrijfsleider besluit een vast bedrag onder zijn " + (B*C) + " werknemers te verdelen: ze krijgen elk " + A + " euro. Hoeveel zou ieder nog krijgen als er " + (A-B)*C + " werknemers meer zouden zijn?"	
	document.evenr.antwoordzindeel1.value = "Dan krijgt elke werknemer " 	
	document.evenr.antwoordzindeel2.value = "euro."	
	}

if (typeoefening == 26)
	{
	B = kiesgetal(4, 8)
	C = kiesgetal(2, 5)
	A = B
	while (A == B) A = kiesgetal(8, 15)

	document.evenr.opgave.value = "Een winkelketen besluit per winkel een vast bedrag (als extra premie) uit te keren aan zijn werknemers. In de winkel in Hasselt zijn er " + (B*C) + " werknemers die elk " + A + " euro krijgen. In de winkel in Diest krijgen de werknemers elk " + (A-B) + " euro minder dan in Hasselt. Hoeveel mensen werken er in de winkel in Diest?"	
	document.evenr.antwoordzindeel1.value = "In de winkel in Diest werken" 	
	document.evenr.antwoordzindeel2.value = "mensen."	
	}


}


function nieuwoef()
{
antwoordjuist = 0
document.evenr.antwoord.value = "??"
evenr.opl.src = "../images/vraagteken.gif"
kiesoef()
toonoef()
}

function controle()
{
var oplossing = document.evenr.antwoord.value
if ((oplossing == "??") || (oplossing == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if ((typeoefening < 15) && (typeoefening%2 == 1))  
		{
		if (oplossing == D) 
			{
			evenr.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			evenr.opl.src = "../images/fout.gif";
			alert('Deze grootheden zijn rechtevenredig. Heb je de juiste evenredigheid gebruikt?')
			}
		}

	if ((typeoefening < 15) && (typeoefening%2 == 0))  
		{
		if (oplossing == C) 
			{
			evenr.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			evenr.opl.src = "../images/fout.gif";
			alert('Deze grootheden zijn rechtevenredig. Heb je de juiste evenredigheid gebruikt?')
			}
		}

	if ((typeoefening > 14) && (typeoefening%2 == 1))  
		{
		if (oplossing == B) 
			{
			evenr.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			evenr.opl.src = "../images/fout.gif";
			alert('Deze grootheden zijn omgekeerd evenredig. Heb je de juiste evenredigheid gebruikt? Vergeet niet de tweede verhouding om te keren.')
			}
		}

	if ((typeoefening > 14) && (typeoefening%2 == 0))  
		{
		if (oplossing == (A*C)) 
			{
			evenr.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else 
			{
			evenr.opl.src = "../images/fout.gif";
			alert('Deze grootheden zijn omgekeerd evenredig. Heb je de juiste evenredigheid gebruikt? Vergeet niet de tweede verhouding om te keren.')
			}
		}


	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.evenr.aantaljuist.value = oplossingenteller
	document.evenr.aantalpogingen.value = pogingenteller
	document.evenr.percentage.value = procent		
	}  
}
}

