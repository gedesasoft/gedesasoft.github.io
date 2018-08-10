var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var factor = ""
var verschil = ""
var oplverschil = ""
var verbetering = ""

var X = 0
var Y = 0
var A = 0
var B = 0
var C = 0
var D = 0

var E = 0
var T = 0
var H = 0

var P = 0
var Q = 0

var tekstA = ""

function wisantwoord()
{
document.vrgst.antwoord.value = ""
}


function kiesoef()
{
if (factor == "makk") typeoefening = Math.floor(Math.random() * 10) + 1;
if (factor == "norm") typeoefening = Math.floor(Math.random() * 8) + 11;
if (factor == "moei") typeoefening = Math.floor(Math.random() * 9) + 19;
}

function toonopl()
{
alert(verbetering)
antwoordjuist = 1
document.vrgst.antwoord.value = X
}

function toonoef()
{
if (typeoefening == 1)
	{
	X = Math.floor(Math.random() * 100 ) - 39;
	A = Math.floor(Math.random() * 4 ) + 2;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
	if (A == 5) tekstA = 'vijfvoud'
	C = Math.floor(Math.random() * 100 ) + 1;
  	
	document.vrgst.opgave.value = "Het " + tekstA + " van een getal verminderd met " + C + " is " + (A * X - C) + " . Welk is dat getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal is"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Getal = x\n\nVgl: " + A + "x - " + C + " = " + (A * X - C) + "\n<=> x = " + X + "\n\nHet getal is " + X
	}

if (typeoefening == 2)
	{
	X = Math.floor(Math.random() * 100 ) - 39;
	A = Math.floor(Math.random() * 4 ) + 2;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
	if (A == 5) tekstA = 'vijfvoud'
	C = Math.floor(Math.random() * 50) + 1;
  	
	document.vrgst.opgave.value = "Het " + tekstA + " van een getal vermeerderd met " + C + " is " + (A * X + C) + " . Welk is dat getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal is"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Getal = x\n\nVgl: " + A + "x + " + C + " = " + (A * X + C) + "\n<=> x = " + X + "\n\nHet getal is " + X
	}

if (typeoefening == 3)
	{
	X = Math.floor(Math.random() * 100 ) - 39;
	A = Math.floor(Math.random() * 4 ) + 2;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
	if (A == 5) tekstA = 'vijfvoud'
	C = A * X + Math.floor(Math.random() * 150 ) - 50;
  	
	document.vrgst.opgave.value = "Als ik het " + tekstA + " van een getal aftrek van " + C + " krijg ik " + (C - A * X) + " . Welk is dat getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal is"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Getal = x\n\nVgl: " + C + " - " + A + "x = " + (C - A * X) + "\n<=> x = " + X + "\n\nHet getal is " + X 
	}

if (typeoefening == 4)
	{
	C = Math.floor(Math.random() * 100 ) - 39;
	A = Math.floor(Math.random() * 4 ) + 2;
	if (A == 2) tekstA = 'de helft'
	if (A == 3) tekstA = 'één derde'
	if (A == 4) tekstA = 'één vierde'
	if (A == 5) tekstA = 'één vijfde'
	B = Math.floor(Math.random() * 30 ) + 1;
	X = A * C
  	
	document.vrgst.opgave.value = "Als ik " + tekstA + " van een getal vermeerder met " + B + " krijg ik " + (C + B) + " . Welk is dat getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal is"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Getal = x\n\nVgl: x/" + A + " + " + B + " = " + (C + B) + "\n<=> x = " + X + "\n\nHet getal is " + X 
	}

if (typeoefening == 5)
	{
	X = Math.floor(Math.random() * 30 ) + 1;
	A = Math.floor(Math.random() * 3 ) + 2;
	C = Math.floor(Math.random() * 15 ) + 1;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
  	
	document.vrgst.opgave.value = "De lengte van een rechthoek is " + C + " cm meer dan het " + tekstA + " van de breedte. De omtrek is " + (2*X + 2*A*X + 2*C) + " cm. Bereken de breedte van deze rechthoek."			
	document.vrgst.antwoordzindeel1.value = "De rechthoek is "	
	document.vrgst.antwoordzindeel2.value = "cm breed."	

	verbetering = "Breedte = x\nLengte = " + A + "x + " + C + "\n\nVgl: 2x + 2(" + A + "x + " + C + ") = " + (2*X + 2*A*X + 2*C) + "\n<=> x = " + X + "\n\nDe rechthoek is " + X + " cm breed." 
	}

if (typeoefening == 6)
	{
	X = Math.floor(Math.random() * 100 ) - 39;
	A = Math.floor(Math.random() * 5 ) + 2;
	C = Math.floor(Math.random() * 15 ) + 1;
  	
	document.vrgst.opgave.value = "Als ik een getal vermeerder met " + C + " en dan deze som vermenigvuldig met " + A + " bekom ik " + A * (X + C) + ". Bereken dat getal."			
	document.vrgst.antwoordzindeel1.value = "Het getal is "	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Getal = x\n\nVgl: " + A + "(x + " + C + ") = " + A * (X + C) + "\n<=> x = " + X + "\n\nHet getal is " + X 
	}

if (typeoefening == 7)
	{
	X = Math.floor(Math.random() * 50 ) + 70;
	A = Math.floor(Math.random() * 3 ) + 2;
	C = Math.floor(Math.random() * 45 ) + 1;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
  	
	document.vrgst.opgave.value = "Een taxichauffeur legt 's namiddags " + C + " km meer af dan het " + tekstA + " van het aantal km dat hij in de voormiddag reed. In totaal reed hij (die dag) " + (X + A*X + C) + " km. Hoeveel km legde hij af in de voormiddag?"			
	document.vrgst.antwoordzindeel1.value = "In de voormiddag reed hij"	
	document.vrgst.antwoordzindeel2.value = "km."	

	verbetering = "Aantal km voormiddag = x\nAantal km namiddag = " + A + "x + " + C + "\n\nVgl: x + (" + A + "x + " + C + ") = " + (X + A*X + C) + "\n<=> x = " + X + "\n\nIn de voormiddag reed hij " + X + " km." 
	}

if (typeoefening == 8)
	{
	A = Math.floor(Math.random() * 50 ) + 15;
	B = Math.floor(Math.random() * 3 ) + 2;
	C = Math.floor(Math.random() * 45 ) + 1;
  	X = A * B
	
	document.vrgst.opgave.value = "Men telde het aantal auto's op één uur langs drie wegen. Op weg A passeerden " + B + " keer zoveel auto's als op weg B. Op weg C zijn het nog eens " + C + " auto's meer dan op weg A. In totaal werden er " + (A + X + X + C) + " auto's geteld. Hoeveel auto's passeerden er op weg A?"			
	document.vrgst.antwoordzindeel1.value = "Op weg A passeerden er"	
	document.vrgst.antwoordzindeel2.value = "auto's."	

	verbetering = "Aantal auto's op weg A = " + B + "x\nAantal auto's op weg B = x\nAantal auto's op weg C = " + B +"x + " + C + "\n\nVgl: x + " + B + "x + " + B + "x + " + C + " = " + (A + X + X + C) + "\n<=> x = " + A + "\n\nOp weg A passeerden " + X + " auto's." 
	}

if (typeoefening == 9)
	{
	A = Math.floor(Math.random() * 2 ) + 2;
	B = Math.floor(Math.random() * 4 ) + 2;
	C = Math.floor(Math.random() * 8 ) + 1;
	X = Math.floor(Math.random() * 8 ) + 14;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	
	document.vrgst.opgave.value = "De oppervlakte van onze living is net het " + tekstA + " van de oppervlakte van onze keuken. De " + B + " slaapkamers zijn elk " + C + " m² minder dan de keuken. De totale oppervlakte van al deze ruimtes is " + (X + A*X + B*(X - C)) + " m². Wat is de oppervlakte van de keuken?"			
	document.vrgst.antwoordzindeel1.value = "De keuken heeft een oppervlakte van"	
	document.vrgst.antwoordzindeel2.value = "m²."	

	verbetering = "Oppervlakte keuken = x\nOppervlakte living = " + A + "x\nOppervlakte 1 slaapkamer =  x - " + C + "\n\nVgl: x + " + A + "x + " + B + "(x - " + C + ") = " + (X + A*X + B*(X - C)) + "\n<=> x = " + X + "\n\nDe keuken heeft een oppervlakte van " + X + " m²." 
	}

if (typeoefening == 10)
	{
	X = Math.floor(Math.random() * 25 ) + 20;
	if (X < 30)	A = Math.floor(Math.random() * 3 ) + 2;
	else A = Math.floor(Math.random() * 2 ) + 2;
	B = X + Math.floor(Math.random() * 18 ) + 1;
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drievoud'
	if (A == 4) tekstA = 'viervoud'
	
	document.vrgst.opgave.value = "Van twee flatgebouwen is het hoogste " + (A*X - B) + " m minder hoog dan het " + tekstA + " van het laagste flatgebouw. De gezamenlijke hoogte van de twee gebouwen is " + (B + X) + ". Bereken de hoogte van het laagste gebouw."			
	document.vrgst.antwoordzindeel1.value = "Het laagste flatgebouw heeft een hoogte van"	
	document.vrgst.antwoordzindeel2.value = "m."	

	verbetering = "Hoogte van het laagste flatgebouw = x\nHoogte van het hoogste flatgebouw = " + A + "x - " + (A*X - B) + "\n\nVgl: x + (" + A + "x - " + (A*X - B) + ") = " + (B + X) + "\n<=> x = " + X + "\n\nHet laagste flatgebouw is " + X + " m hoog." 
	}

if (typeoefening == 11)
	{
	X = Math.floor(Math.random() * 60 ) + 40;
	A = 2;
	B = 4;
	Y = Math.floor(Math.random() * 60 ) + 40;
  	
	document.vrgst.opgave.value = "Een boer heeft kippen en koeien. In totaal telt hij " + (X + Y) + " dieren. Als hij het aantal poten telt vindt hij " + (A*X + B*Y) + ". Hoeveel kippen heeft hij?"			
	document.vrgst.antwoordzindeel1.value = "Hij heeft"	
	document.vrgst.antwoordzindeel2.value = "kippen"	

	verbetering = "Aantal kippen = x\nAantal koeien = " + (X + Y) + " - x\n\nVgl: " + A +"x + " + B + "(" + ( X+ Y) + " - x) = " + (A*X + B*Y) + "\n<=> x = " + X + "\n\nHij heeft " + X + " kippen." 
	}

if (typeoefening == 12)
	{
	X = Math.floor(Math.random() * 120 ) + 80;
	A = 8;
	B = 6;
	Y = Math.floor(Math.random() * 100 ) + 50;
  	
	document.vrgst.opgave.value = "Professor M. Uggensteek verzamelt spinnen- en bijensoorten. In totaal telt zijn collectie maar liefst " + (X + Y) + " insecten. Als je weet dat een bij 6 pootjes en een spin 8 pootjes heeft en zijn insecten allemaal samen " + (A*X + B*Y) + " pootjes hebben, hoeveel spinnen heeft hij dan?"			
	document.vrgst.antwoordzindeel1.value = "Hij heeft"	
	document.vrgst.antwoordzindeel2.value = "spinnen"	


	verbetering = "Aantal spinnen = x\nAantal bijen = " + (X + Y) + " - x\n\nVgl: " + A +"x + " + B + "(" + ( X+ Y) + " - x) = " + (A*X + B*Y) + "\n<=> x = " + X + "\n\nHij heeft " + X + " spinnen." 
	}

if (typeoefening == 13)
	{
	X = Math.floor(Math.random() * 120 ) + 80;
	A = 3.5;
	B = 6;
	Y = Math.floor(Math.random() * 100 ) + 50;
  	
	document.vrgst.opgave.value = "Voor een filmvoorstelling betalen volwassenen 6 € en kinderen betalen slechts 3,5 €. Er zitten " + (X + Y) + " mensen in de zaal. In de kassa zit " + (A*X + B*Y) + " € aan inkomsten. Hoeveel kinderen zitten er in de zaal?"			
	document.vrgst.antwoordzindeel1.value = "In de zaal zitten"	
	document.vrgst.antwoordzindeel2.value = "kinderen."	

	verbetering = "Aantal kinderen = x\nAantal volwassenen = " + (X + Y) + " - x\n\nVgl: " + A +"x + " + B + "(" + ( X+ Y) + " - x) = " + (A*X + B*Y) + "\n<=> x = " + X + "\n\nEr zijn " + X + " kinderen in de zaal." 
	}

if (typeoefening == 14)
	{
	X = Math.floor(Math.random() * 120 ) + 80;
	A = 48;
	B = 55;
	Y = Math.floor(Math.random() * 100 ) + 50;
  	
	document.vrgst.opgave.value = "De cursus wiskunde bestaat uit 48 pagina's in het eerste jaar en uit 55 pagina's in het tweede jaar. In totaal zitten er " + (X + Y) + " kinderen in de eerste graad (1ste en 2de jaar samen) en werden er voor de cursussen wiskunde " + (A*X + B*Y) + " kopies gemaakt. Hoeveel kinderen zitten er in het eerste jaar?"			
	document.vrgst.antwoordzindeel1.value = "In het eerste jaar"	
	document.vrgst.antwoordzindeel2.value = "kinderen."	

	verbetering = "Aantal kinderen in het eerste jaar = x\nAantal kinderen in het tweede jaar " + (X + Y) + " - x\n\nVgl: " + A +"x + " + B + "(" + ( X+ Y) + " - x) = " + (A*X + B*Y) + "\n<=> x = " + X + "\n\nEr zitten " + X + " kinderen in het eerste jaar." 
	}

if (typeoefening == 15)
	{
	B = 0
	while ((B == 0) || ((X - B) < 20) || ((X - B) > 36))
		{
		B = Math.floor(Math.random() * 8 ) + 1;
		C = Math.floor(Math.random() * 4 ) + 10 - B;
		A = Math.floor(Math.random() * 4 ) + 2;
		X = A*B + A*C - C
		}	
	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drie keer'
	if (A == 4) tekstA = 'vier keer'
	if (A == 5) tekstA = 'vijf keer'
  	
	document.vrgst.opgave.value = "Een moeder is " + (X - B) + " jaar ouder dan haar dochter. Over " + C + " jaar zal ze " + tekstA + " zo oud zijn als haar dochter. Hoe oud is de moeder nu?"			
	document.vrgst.antwoordzindeel1.value = "De moeder is nu"	
	document.vrgst.antwoordzindeel2.value = "jaar."	

	verbetering = "Leeftijd dochter = x\nLeeftijd moeder = x + " + (X - B) + "\n\nVgl: x + " + (X - B + C) + " = " + A + "(x + " + C + ")\n<=> x = " + B + "\n\nDe moeder is " + X + " jaar." 
	}

if (typeoefening == 16)
	{
	C = 0
	while (((A-1) * C < 20) || ((A-1) * C > 42))
		{
		C = Math.floor(Math.random() * 15 ) + 10;
		A = Math.floor(Math.random() * 4 ) + 2;
		}
	X = Math.floor(Math.random() * (C - 1) ) + 1;

	if (A == 2) tekstA = 'dubbel'
	if (A == 3) tekstA = 'drie keer'
	if (A == 4) tekstA = 'vier keer'
	if (A == 5) tekstA = 'vijf keer'
  	
	document.vrgst.opgave.value = "Een vader is nu " + (A*C - X) + " jaar en zijn zoon is nu " + (C - X) + " jaar. Over hoeveel jaar is die vader " + tekstA + " zo oud als zijn zoon?"			
	document.vrgst.antwoordzindeel1.value = "Over"	
	document.vrgst.antwoordzindeel2.value = "jaar."	

	verbetering = "Aantal jaren = x\n\nVgl: " + (A*C - X) + " + x = " + A + "(" + (C - X) + " + x)\n<=> x = " + X + "\n\nOver " + X + " jaar is de vader " + tekstA + " zo oud als de zoon." 
	}

if (typeoefening == 26)
	{
	E = Math.floor(Math.random() * 4) + 1;
	T = 2 * E;
	X = 10 * T + E;
	Y = 10 * E + T;
  	
	document.vrgst.opgave.value = "Van een getal van 2 cijfers is het cijfer van de tientallen het dubbel van het cijfer der eenheden. Draai je de cijfers om dan krijg je een nieuw getal, dat " + (X - Y) + " minder is dan het oorspronkelijk getal. Welk was dat eerste getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal was"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Cijfer van de eenheden = x\nCijfer van de tientallen = 2x\n\nGetal = 10 . 2x + x = 21x\n Nieuw getal = 10 . x + 2x = 12x\n\nVgl: 12x = 21x - " + (X - Y) + "\n<=> x = " + E + "\n\nHet getal was " + X 
	}

if (typeoefening == 27)
	{
	E = T
	while (E == T)
		{
		E = Math.floor(Math.random() * 9) + 1;
		T = Math.floor(Math.random() * 9) + 1;
		}
	X = 10 * T + E;
	Y = 10 * E + T;
	
	if (X > Y) verschil = (X - Y) + " minder"
	if (X < Y) verschil = (Y - X) + " meer"
  	
	if (X > Y) oplverschil = " - " + (X - Y)
	if (X < Y) oplverschil = " + " + (Y - X)
	
	document.vrgst.opgave.value = "Van een getal van 2 cijfers is de som der cijfers " + (E + T) + ". Draai je de cijfers om dan krijg je een nieuw getal, dat " + verschil + " is dan het oorspronkelijk getal. Welk was dat eerste getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal was"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Cijfer van de eenheden = x\nCijfer van de tientallen = " + (E + T) + " - x\n\nGetal = 10 . (" + (E + T) + " - x) + x = " + (10*(E + T)) + " - 9x\nNieuw getal = 10 . x + " + (E + T) + " - x = " + (E + T) + " + 9x\n\nVgl: " + (E + T) + " + 9x = " + (10*(E + T)) + " - 9x" + oplverschil + "\n<=> x = " + E + "\n\nHet getal was " + X + ""
	}

if (typeoefening == 19)
	{
	E = T
	while (E == T)
		{
		E = Math.floor(Math.random() * 7) + 3;
		T = Math.floor(Math.random() * 8) + 1;
		}
	X = 10 * T + E;
	Y = 10 * E + T;
	
	if (X > Y) verschil = (X - Y) + " minder"
	if (X < Y) verschil = (Y - X) + " meer"
  	
	if (X > Y) oplverschil = " - " + (X - Y)
	if (X < Y) oplverschil = " + " + (Y - X)
	
	document.vrgst.opgave.value = "Van een getal van 2 cijfers is het cijfer van de tientallen " + (3*E - T) + " minder dan het drievoud van het cijfer van de eenheden. Draai je de cijfers om dan krijg je een nieuw getal, dat " + verschil + " is dan het oorspronkelijk getal. Welk was dat eerste getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal was"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Cijfer van de eenheden = x\nCijfer van de tientallen = 3x - " + (3*E - T) + "\n\nGetal = 10 . (3x - " + (3*E - T) + ") + x = 31x - " + (30*E - 10*T) + "\nNieuw getal = 10 . x + 3x - " + (3*E - T) + " = 13x - " + (3*E - T) + "\n\nVgl: 13x - " + (3*E - T) + " = 31x - " + (30*E - 10*T) + oplverschil + "\n<=> x = " + E + "\n\nHet getal was " + X + ""
	}

if (typeoefening == 20)
	{
	E = Math.floor(Math.random() * 4) + 1;
	T = 2 * E;
	H = E
	while (H == E) H = Math.floor(Math.random() * 9) + 1;
	X = 100 * H + 10 * T + E;
	Y = 100 * E + 10 * T + H;
	
	if (X > Y) verschil = (X - Y) + " minder"
	if (X < Y) verschil = (Y - X) + " meer"
  	
	if (X > Y) oplverschil = " - " + (X - Y)
	if (X < Y) oplverschil = " + " + (Y - X)
	
	document.vrgst.opgave.value = "Van een getal van 3 cijfers is het cijfer van de tientallen het dubbel van het cijfer der eenheden. De som van de cijfers is " + (H + T + E) + ". Keer je de volgorde van de cijfers om dan krijg je een nieuw getal, dat " + verschil + " is dan het oorspronkelijk getal. Welk was dat eerste getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal was"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Cijfer van de eenheden = x\nCijfer van de tientallen = 2x\nCijfer van de honderdtallen = " + (H + T + E) + " - 2x - x = " + (H + T + E) + " - 3x\n\nGetal = 100 . ("  + (H + T + E) + " - 3x) + 10 . 2x + x = " + (100*(H + T + E)) + " - 279x\nNieuw getal = 100 . x + 10 . 2x + " + (H + T + E) + " - 3x = 117x + " + (H + T + E) + "\n\nVgl: 117x + " + (H + T + E) + " = " + (100*(H + T + E)) + " - 279x" + oplverschil + "\n<=> x = " + E + "\n\nHet getal was " + X
	}

if (typeoefening == 21)
	{
	E = H
	while ((E == H) || ((H + 10*T - 17*E) > 0))
		{
		E = Math.floor(Math.random() * 5) + 1;
		T = 2*(E - Math.floor(Math.random() * E)) - 1;
		H = Math.floor(Math.random() * 9) + 1;
		}
	X = 100 * H + 10 * T + E;
	Y = 100 * E + 10 * T + H;
	
	if (X > Y) verschil = (X - Y) + " minder"
	if (X < Y) verschil = (Y - X) + " meer"
  	
	if (X > Y) oplverschil = " - " + (X - Y)
	if (X < Y) oplverschil = " + " + (Y - X)
	
	document.vrgst.opgave.value = "Van een getal van 3 cijfers is het cijfer van de tientallen " + (2*E - T) + " minder dan het dubbel van het cijfer van de eenheden. De som van de cijfers is " + (H + T + E) + ". Keer je de volgorde van de cijfers om dan krijg je een nieuw getal, dat " + verschil + " is dan het oorspronkelijk getal. Welk was dat eerste getal?"			
	document.vrgst.antwoordzindeel1.value = "Het getal was"	
	document.vrgst.antwoordzindeel2.value = "."	

	verbetering = "Cijfer van de eenheden = x\nCijfer van de tientallen = 2x - " + (2*E - T) + "\nCijfer van de honderdtallen = " + (H + T + E) + " - (2x - " + (2*E - T) + ") - x = " + (H + 3*E) + " - 3x\n\nGetal = 100 . (" + (H + 3*E) + " - 3x) + 10 . (2x - " + (2*E - T) + ") + x = " + (100*H + 280*E + 10*T) + " - 279x\nNieuw getal = 100 . x + 10 . (2x - " + (2*E - T) + ") + " + (H + 3*E) + " - 3x = 117x - " + Math.abs(H + 10*T - 17*E) + "\n\nVgl: 117x - " + Math.abs(H + 10*T - 17*E) + " = " + (100*H + 280*E + 10*T) + " - 279x" + oplverschil + "\n<=> x = " + E + "\n\nHet getal was " + X
	}

if (typeoefening == 22)
	{
	B = A
	while (A == B)
	{
	A = Math.floor(Math.random() * 6) + 8;
	B = Math.floor(Math.random() * 8) + 6;
	}


	C = 1
	while ((C < 2) || (D < 2))
		{
		X = Math.floor(Math.random() * 120) + 150;
		C = X%A
		D = X%B
		}
	
	
	P = Math.floor(X/A)
	Q = Math.floor(X/B)
	
	if (P > Q) verschil = "zijn er " + (P - Q) + " groepen minder"
	if (P < Q) verschil = "zijn er " + (Q - P) + " groepen meer"
	if (P - Q == 1) verschil = "is er " + (P - Q) + " groep minder"
	if (Q - P == 1) verschil = "is er " + (Q - P) + " groep meer"
  	
	if (P > Q) oplverschil = " - " + (P - Q)
	if (P < Q) oplverschil = " + " + (Q - P)

	document.vrgst.opgave.value = "In een school tracht men de leerlingen van de tweede graad te verdelen in groepjes. Verdeelt men ze in groepjes van " + A + " leerlingen, dan blijven er " + C + " leerlingen over. Verdeelt men ze in groepjes van " + B + " leerlingen, dan blijven er " + D + " leerlingen over en " + verschil + ". Hoeveel leerlingen zitten er in die tweede graad?"			
	document.vrgst.antwoordzindeel1.value = "In de tweede graad zitten"	
	document.vrgst.antwoordzindeel2.value = "leerlingen."	

	verbetering = "Aantal groepen van " + A + " = x\nAantal groepen van " + B + " = x" + oplverschil + "\n\nVgl: " + A + "x + " + C + " = " + B + "(x" + oplverschil + ") + " + D + "\n<=> x = " + P + "\n\nEr zijn " + X + " leerlingen in de tweede graad."
	}

if (typeoefening == 23)
	{
	B = A
	while (A == B)
	{
	A = Math.floor(Math.random() * 5) + 3;
	B = Math.floor(Math.random() * 5) + 3;
	}

	C = 1
	while ((C < 2) || (D < 2))
		{
		X = Math.floor(Math.random() * 27) + 25;
		C = X%A
		D = X%B
		}
	
	P = Math.floor(X/A)
	Q = Math.floor(X/B)
	
	if (P > Q) verschil = "zijn er " + (P - Q) + " groepen minder"
	if (P < Q) verschil = "zijn er " + (Q - P) + " groepen meer"
	if (P - Q == 1) verschil = "is er " + (P - Q) + " groep minder"
	if (Q - P == 1) verschil = "is er " + (Q - P) + " groep meer"
  	
	if (P > Q) oplverschil = " - " + (P - Q)
	if (P < Q) oplverschil = " + " + (Q - P)

	document.vrgst.opgave.value = "We verdelen een stapel kaarten in groepjes. Verdeelt men ze in groepjes van " + A + " kaarten, dan blijven er " + C + " kaarten over. Verdeelt men ze in groepjes van " + B + " kaarten, dan blijven er " + D + " kaarten over en " + verschil + ". Hoeveel kaarten zitten er in die stapel?"			
	document.vrgst.antwoordzindeel1.value = "De stapel bestaat uit"	
	document.vrgst.antwoordzindeel2.value = "kaarten."	

	verbetering = "Aantal groepen van " + A + " = x\nAantal groepen van " + B + " = x" + oplverschil + "\n\nVgl: " + A + "x + " + C + " = " + B + "(x" + oplverschil + ") + " + D + "\n<=> x = " + P + "\n\nEr zitten " + X + " kaarten in de stapel."
	}

if (typeoefening == 24)
	{
	B = A
	while (A == B)
	{
	A = Math.floor(Math.random() * 10) + 4;
	B = Math.floor(Math.random() * 10) + 4;
	}

	C = 1
	while ((C < 2) || (D < 2))
		{
		X = Math.floor(Math.random() * 80) + 45;
		C = X%A
		D = X%B
		}
	
	P = Math.floor(X/A)
	Q = Math.floor(X/B)
	
	if (P > Q) verschil = "zijn er " + (P - Q) + " groepen minder"
	if (P < Q) verschil = "zijn er " + (Q - P) + " groepen meer"
	if (P - Q == 1) verschil = "is er " + (P - Q) + " groep minder"
	if (Q - P == 1) verschil = "is er " + (Q - P) + " groep meer"
  	
	if (P > Q) oplverschil = " - " + (P - Q)
	if (P < Q) oplverschil = " + " + (Q - P)

	document.vrgst.opgave.value = "Andreas verdeelt zijn collectie (speelgoed)auto's in groepjes. Verdeelt hij ze in groepjes van " + A + " auto's, dan blijven er " + C + " auto's over. Verdeelt hij ze in groepjes van " + B + " auto's, dan blijven er " + D + " auto's over en " + verschil + ". Hoeveel auto's heeft Andreas?"			
	document.vrgst.antwoordzindeel1.value = "Andreas heeft"	
	document.vrgst.antwoordzindeel2.value = "auto's."	

	verbetering = "Aantal groepen van " + A + " = x\nAantal groepen van " + B + " = x" + oplverschil + "\n\nVgl: " + A + "x + " + C + " = " + B + "(x" + oplverschil + ") + " + D + "\n<=> x = " + P + "\n\nAndreas heeft " + X + " auto's."
	}

if (typeoefening == 25)
	{
	B = A
	while (A == B)
	{
	A = Math.floor(Math.random() * 10) + 4;
	B = Math.floor(Math.random() * 10) + 4;
	}

	C = 1
	while ((C < 2) || (D < 2))
		{
		X = Math.floor(Math.random() * 80) + 45;
		C = X%A
		D = X%B
		}
	
	P = Math.floor(X/A)
	Q = Math.floor(X/B)
	
	if (P > Q) verschil = "zijn er " + (P - Q) + " ploegen minder"
	if (P < Q) verschil = "zijn er " + (Q - P) + " ploegen meer"
	if (P - Q == 1) verschil = "is er " + (P - Q) + " ploeg minder"
	if (Q - P == 1) verschil = "is er " + (Q - P) + " ploeg meer"
  	
	if (P > Q) oplverschil = " - " + (P - Q)
	if (P < Q) oplverschil = " + " + (Q - P)

	document.vrgst.opgave.value = "Voor een activiteit verdeelt een jeugdvereniging zijn leden in ploegen. Verdeelt men de leden in ploegen van " + A + " personen, dan blijven er " + C + " personen over. Verdeelt men ze in ploegen van " + B + " leden, dan blijven er " + D + " leden over en " + verschil + ". Hoeveel leden telt deze jeugdvereinging?"			
	document.vrgst.antwoordzindeel1.value = "Deze vereniging heeft"	
	document.vrgst.antwoordzindeel2.value = "leden."	

	verbetering = "Aantal ploegen van " + A + " = x\nAantal ploegen van " + B + " = x" + oplverschil + "\n\nVgl: " + A + "x + " + C + " = " + B + "(x" + oplverschil + ") + " + D + "\n<=> x = " + P + "\n\nDe jeugdvereniging heeft " + X + " leden."
	}

if (typeoefening == 17)
	{
	A = Math.floor(Math.random() * 8) + 6;
	B = 5 * A
	C = A
	D = Math.floor(Math.random() * (C - 1) ) + 1;
	X = B + D

	document.vrgst.opgave.value = "Piet was " + D + " jaar geleden vijf keer zo oud als Jan en over " + (C - D) + " jaar zal hij drie keer zo oud zijn als Jan. Hoe oud is Piet??"			
	document.vrgst.antwoordzindeel1.value = "Piet is nu"	
	document.vrgst.antwoordzindeel2.value = "jaar."	

	verbetering = "Leeftijd Jan " + D + " jaar geleden = x -> Leeftijd Jan nu = x + " + D + "\nLeeftijd Piet " + D + " jaar geleden = 5x  -> Leeftijd Piet nu = 5x + " + D + "\nLeeftijd Jan over " + (C - D) + " jaar = x + " + C + "\nLeeftijd Piet over " + (C - D) + " jaar = 5x + " + C + " \n\nVgl: 5x + " + C + " = 3.(x + " + C + ")\n<=> x = " + A + "\n\nPiet is nu " + X + " jaar." 
	}

if (typeoefening == 18)
	{
	A = Math.floor(Math.random() * 6) + 4;
	B = 5 * A
	C = 3 * A
	D = Math.floor(Math.random() * (C - 1) ) + 1;
	X = B + D

	document.vrgst.opgave.value = "Jasmine was " + D + " jaar geleden vijf keer zo oud als Deborah en over " + (C - D) + " jaar zal hij twee keer zo oud zijn als Deborah. Hoe oud is Jasmine??"			
	document.vrgst.antwoordzindeel1.value = "Jasmine is nu"	
	document.vrgst.antwoordzindeel2.value = "jaar."	

	verbetering = "Leeftijd Deborah " + D + " jaar geleden = x -> Leeftijd Deborah nu = x + " + D + "\nLeeftijd Jasmine " + D + " jaar geleden = 5x  -> Leeftijd Jasmine nu = 5x + " + D + "\nLeeftijd Deborah over " + (C - D) + " jaar = x + " + C + "\nLeeftijd Jasmine over " + (C - D) + " jaar = 5x + " + C + " \n\nVgl: 5x + " + C + " = 2.(x + " + C + ")\n<=> x = " + A + "\n\nJasmine is nu " + X + " jaar." 
	}


}


function nieuwoef()
{
antwoordjuist = 0
document.vrgst.antwoord.value = "??"
document.vrgst.opl.src = "../images/vraagteken.gif";
factor = document.vrgst.kiesoef.options[document.vrgst.kiesoef.selectedIndex].value;
if (factor == "niet") alert('Kies eerst een moeilijkheidsgraad!')
else 
	{
	kiesoef()
	toonoef()
	}
}

function controle()
{
var oplossing = document.vrgst.antwoord.value
if ((oplossing == "??") || (oplossing == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Kies a.u.b. eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if (oplossing == X) 
			{
			vrgst.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
	else vrgst.opl.src = "../images/fout.gif";
	

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.vrgst.aantaljuist.value = oplossingenteller
	document.vrgst.aantalpogingen.value = pogingenteller
	document.vrgst.percentage.value = procent		
	}  
}
}

