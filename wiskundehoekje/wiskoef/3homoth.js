var antwoordjuist = 0
var pogingenteller = 0
var oplossingenteller = 0
var typeoefening = 0
var lengtevoor = 0
var hoogtevoor = 0
var hoogtena = 0
var lengtena = 0
var oppvoor = 0
var oppna = 0
var factor = 0

function wisantwoord()
{
document.hom.antwoord.value = ""
}

function kiesgetallen()
{
factor = Math.round((Math.floor(Math.random() * 30 ) + 1) * 25) / 100;
if (factor == 1) factor = 3
lengtevoor = Math.floor(Math.random() * 30 ) + 2;
hoogtevoor = 2 * Math.floor(Math.random() * 15 ) + 2;
oppvoor = Math.floor(Math.random() * 40 ) + 2;
lengtena = lengtevoor * factor;
hoogtena = hoogtevoor * factor;
oppna = oppvoor * factor * factor;
}

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 15) + 1
}

function toonoef()
{
if (typeoefening == 1)
	{
	document.hom.opgave.value = "Een homothetie met factor " + factor + " beeldt een driehoek ABC met omtrek " + lengtevoor + " cm af op een driehoek A'B'C'. Wat is de omtrek van de beelddriehoek?"	
	document.hom.antwoordzindeel1.value = "De omtrek van de driehoek A'B'C' is"	
	document.hom.antwoordzindeel2.value = "cm."	
	}
if (typeoefening == 2)
	{
	document.hom.opgave.value = "Een homothetie h(O," + factor + ") beeldt een parallellogram met hoogte " + lengtevoor + " dm af op een parallellogram. Wat is de hoogte van deze parallellogram (het beeld)?"	
	document.hom.antwoordzindeel1.value = "De hoogte van het beeld is"	
	document.hom.antwoordzindeel2.value = "dm."	
	}
if (typeoefening == 3)
	{
	document.hom.opgave.value = "Een homothetie h(O," + factor + ") beeldt [AB] af op [PQ]. |PQ| = " + lengtena + ". Bereken |AB|."	
	document.hom.antwoordzindeel1.value = "|AB| ="	
	document.hom.antwoordzindeel2.value = "."	
	}
if (typeoefening == 4)
	{
	document.hom.opgave.value = "Een driehoek PQR met een hoogte van " + hoogtevoor + " cm wordt door een homothetie h(O," + factor + ") afgebeeld op een driehoek DEF met oppervlakte " + (lengtena * hoogtena / 2) + "cm². Bereken de basis van driehoek PQR."	
	document.hom.antwoordzindeel1.value = "De basis van driehoek PQR is"	
	document.hom.antwoordzindeel2.value = "cm."	
	}
if (typeoefening == 5)
	{
	document.hom.opgave.value = "Een driehoek met een hoogte van " + hoogtevoor + " mm wordt door een homothetie afgebeeld op een driehoek met hoogte " +  hoogtena + " mm. Bereken de factor van deze homothetie."	
	document.hom.antwoordzindeel1.value = "De factor is"	
	document.hom.antwoordzindeel2.value = "."	
	}
if (typeoefening == 6)
	{
	document.hom.opgave.value = "Een veelhoek met een oppervlakte van " + oppvoor + " cm² wordt door een homothetie afgebeeld op een gelijkvormige veelhoek met oppervlakte " +  oppna + " cm². Bereken de factor van deze homothetie."	
	document.hom.antwoordzindeel1.value = "De factor is"	
	document.hom.antwoordzindeel2.value = "."	
	}
if (typeoefening == 7)
	{
	document.hom.opgave.value = "Een parallellogram met een basis van " + lengtevoor + " cm en een hoogte van " + hoogtevoor + " cm wordt door h(O," + factor + ") afgebeeld op een ander parallellogram. Wat is hiervan de oppervlakte?"	
	document.hom.antwoordzindeel1.value = "De oppervlakte van het beeld is"	
	document.hom.antwoordzindeel2.value = "cm²."	
	}
if (typeoefening == 8)
	{
	document.hom.opgave.value = "De oppervlakte van een trapezium is " + oppvoor + " cm². Als men deze figuur vergroot (verkleint) door een homothetie met factor " + factor + ", wat wordt dan de oppervlakte van het beeld?"	
	document.hom.antwoordzindeel1.value = "De oppervlakte van het beeld is"	
	document.hom.antwoordzindeel2.value = "cm²."	
	}
if (typeoefening == 9)
	{
	document.hom.opgave.value = "Een ruit met oppervlakte " + (lengtevoor * hoogtevoor / 2) + " mm², wordt door h(O," + factor + ") afgebeeld op een ruit waarvan één diagonaal " + hoogtena + " mm meet. Wat is de lengte van de andere diagonaal?"	
	document.hom.antwoordzindeel1.value = "De andere diagonaal is"	
	document.hom.antwoordzindeel2.value = "mm lang."	
	}
if (typeoefening == 10)
	{
	document.hom.opgave.value = "Een vijfhoek wordt door een homothetie met factor " + factor + " afgebeeld op een vijfhoek met een oppervlakte van " + oppna + " dm². Wat is oppervlakte van de eerste vijfhoek?"	
	document.hom.antwoordzindeel1.value = "De oppervlakte van de eerste vijfhoek is"	
	document.hom.antwoordzindeel2.value = "dm²."	
	}
if (typeoefening == 11)
	{
	document.hom.opgave.value = "Driehoek ABC wordt door een homothetie met factor " + factor + " afgebeeld op driehoek A'B'C'. Â = " + lengtevoor + "°. Bereken Â'."	
	document.hom.antwoordzindeel1.value = "Â' = "	
	document.hom.antwoordzindeel2.value = "°."	
	}
if (typeoefening == 12)
	{
	document.hom.opgave.value = "Een homothetie beeldt een lijnstuk met lengte " + lengtevoor + " dm af op een lijnstuk met lengte " + lengtena + " dm. Terzelfdertijd wordt ook het beeld bepaald van een veelhoek met oppervlakte " + oppvoor + " cm². Bereken de oppervlakte van het beeld van deze veelhoek."	
	document.hom.antwoordzindeel1.value = "De oppervlakte van het beeld is"	
	document.hom.antwoordzindeel2.value = "cm²."	
	}
if (typeoefening == 13)
	{
	document.hom.opgave.value = "Een homothetie beeldt [PQ] af op [XY]. |PQ| = " + lengtevoor + " , |XY| = " + lengtena + " . Het beeld van vierhoek ABCD heeft als oppervlakte " + oppna + " dm². Wat is de oppervlakte van vierhoek ABCD?"	
	document.hom.antwoordzindeel1.value = "De oppervlakte van vierhoek ABCD is"	
	document.hom.antwoordzindeel2.value = "dm²."	
	}
if (typeoefening == 14)
	{
	document.hom.opgave.value = "De oppervlakte van vijfhoek ABCDE = " + oppvoor + " mm² en de oppervlakte van zijn beeld A'B'C'D'E' = " + oppna + " mm². Als je weet dat |AB| = " + lengtevoor + " mm, bereken dan |A'B'|."	
	document.hom.antwoordzindeel1.value = "|A'B'| = "	
	document.hom.antwoordzindeel2.value = "mm."	
	}
if (typeoefening == 15)
	{
	document.hom.opgave.value = "De oppervlakte van zeshoek ABCDEF = " + oppvoor + " cm² en de oppervlakte van zijn beeld A'B'C'D'E'F' = " + oppna + " cm². Als je weet dat |D'E'| = " + lengtena + " cm, bereken dan |DE|."	
	document.hom.antwoordzindeel1.value = "|DE| = "	
	document.hom.antwoordzindeel2.value = "cm."	
	}

}


function nieuwoef()
{
antwoordjuist = 0
document.hom.antwoord.value = "??"
document.hom.opl.src = "../images/vraagteken.gif";
kiesoef()
kiesgetallen()
toonoef()
}

function controle()
{
var oplossing = document.hom.antwoord.value
if ((oplossing == "??") || (oplossing == "")) alert('Je moet je antwoord nog ingeven!')
else
{
if (antwoordjuist == 1) alert('Fijn dat je deze oefening al eens juist had, kies nu eerst een nieuwe oefening.')
else
	{
	pogingenteller++;

	if ((typeoefening == 1) || (typeoefening == 2) || (typeoefening == 9) || (typeoefening == 14)) 
		{
		if (oplossing == lengtena) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}

	if ((typeoefening == 3) || (typeoefening == 4) || (typeoefening == 11) || (typeoefening == 15)) 
		{
		if (oplossing == lengtevoor) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}

	if ((typeoefening == 5) || (typeoefening == 6)) 
		{
		if (oplossing == factor) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}

	if (typeoefening == 7) 
		{
		if (oplossing == lengtena * hoogtena) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}

	if ((typeoefening == 8) || (typeoefening == 12))
		{
		if (oplossing == oppna) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}
		
	if ((typeoefening == 10) || (typeoefening == 13))
		{
		if (oplossing == oppvoor) 
			{
			hom.opl.src = "../images/goed.gif";
			oplossingenteller++;
			antwoordjuist = 1
			}
		else hom.opl.src = "../images/fout.gif"
		}
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.hom.aantaljuist.value = oplossingenteller
	document.hom.aantalpogingen.value = pogingenteller
	document.hom.percentage.value = procent		
	}  
}
}

