var typeoefening = 0
var pogingenteller = 0
var oplossingenteller = 0
var oplossing = ""
var verbetering = ""
var afbeelding = ""
var uitspraak = ""
var gekozen = 0
var vorige = 0

function kiesuitspraak()
{
if (typeoefening == 1)
	{
	uitspraak = "Als een vierhoek 1 paar gelijke en 1 paar evenwijdige zijden heeft is het een parallellogram."
	verbetering = "Een gelijkbenig trapezium heeft ook 1 paar evenwijdige en 1 paar gelijke zijden."
	afbeelding = "gelijkb_trap"
	oplossing = "nee"
	}

if (typeoefening == 2)
	{
	uitspraak = "Als in een vierhoek de diagonalen loodrecht op elkaar staan is het een ruit."
	verbetering = "In een vlieger (zie figuur) staan de diagonalen ook loodrecht op elkaar."
	afbeelding = "vlieger"
	oplossing = "nee"
	}

if (typeoefening == 3)
	{
	uitspraak = "Als in een vierhoek de diagonalen even lang (gelijk) zijn is het een rechthoek."
	verbetering = "In een gelijkbenig trapezium zijn de diagonalen ook even lang."
	afbeelding = "gelijkb_trap"
	oplossing = "nee"
	}

if (typeoefening == 4)
	{
	uitspraak = "Als in een parallellogram de diagonalen loodrecht op elkaar staan is het een ruit."
	verbetering = "Als de diagonalen in een parallellogram een rechte hoek vormen kan je aantonen (met congruente driehoeken) dat de vier zijden even lang zijn en dus dat je een ruit krijgt."
	afbeelding = "ruit"
	oplossing = "ja"
	}

if (typeoefening == 5)
	{
	uitspraak = "Als in een parallellogram de diagonalen even lang (gelijk) zijn is het een rechthoek."
	verbetering = "Als een parallellogram gelijke diagonalen heeft kan je aantonen (met congruente driehoeken) dat de vier hoeken even groot zijn en dus dat je een rechthoek krijgt."
	afbeelding = "rechthoek"
	oplossing = "ja"
	}

if (typeoefening == 6)
	{
	uitspraak = "Een trapezium met juist één rechte hoek bestaat niet."
	verbetering = "Als een trapezium één rechte hoek heeft zal er nog een tweede zijn want de opeenvolgende hoeken tussen de twee evenwijdigen zijn samen 180°."
	afbeelding = "rechth_trap"
	oplossing = "ja"
	}

if (typeoefening == 7)
	{
	uitspraak = "Opeenvolgende hoeken in een trapezium zijn supplementair."
	verbetering = "De basishoeken Ê en Û zijn opeenvolgende hoeken, maar niet supplementair. Ze kunnen wel gelijk zijn (in een gelijkbenig trapezium)."
	afbeelding = "gelijkb_trap"
	oplossing = "nee"
	}

if (typeoefening == 8)
	{
	uitspraak = "Opeenvolgende hoeken in een gelijkbenig trapezium zijn gelijk of supplementair."
	verbetering = "Ê = Û , Â = Ô , Ê + Â = 180° , Ô + Û = 180°"
	afbeelding = "gelijkb_trap"
	oplossing = "ja"
	}

if (typeoefening == 9)
	{
	uitspraak = "Een vierhoek met drie rechte hoeken is een rechthoek."
	verbetering = "Aangezien de som van de hoeken in een vierhoek 360° is, zal ook de vierde hoek een rechte hoek zijn."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 10)
	{
	uitspraak = "Een vierhoek met drie gelijke zijden is een ruit."
	verbetering = "Je kan ook vierhoeken tekenen met 3 gelijke zijden en een vierde zijde met een andere lengte. Kijk maar eens naar de figuur: |AE| = |AO| = |OU|."
	afbeelding = "vierh_3gelijke_zijden"
	oplossing = "nee"
	}

if (typeoefening == 11)
	{
	uitspraak = "Een parallellogram met een rechte hoek is een rechthoek."
	verbetering = "Aangezien in een parallellogram de overstaande hoeken gelijk en de opeenvolgende hoeken supplementair zijn zullen alle hoeken 90° groot zijn."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 12)
	{
	uitspraak = "Een parallellogram met 2 gelijke opeenvolgende zijden is een ruit."
	verbetering = "Aangezien in een parallellogram de overstaande zijden gelijk zijn zullen alle zijden dan even lang zijn en dus heb je een ruit."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 13)
	{
	uitspraak = "Een parallellogram met gelijke diagonalen is een ruit."
	verbetering = "Als in een parallellogram de diagonalen even lang zijn, dan is het een rechthoek."
	afbeelding = "rechthoek"
	oplossing = "nee"
	}

if (typeoefening == 14)
	{
	uitspraak = "Een parallellogram met loodrechte diagonalen is een vierkant."
	verbetering = "Als in een parallellogram de diagonalen loodrecht zijn, dan is het wel een ruit maar niet automatisch een vierkant."
	afbeelding = "ruit"
	oplossing = "nee"
	}

if (typeoefening == 15)
	{
	uitspraak = "Als in een vierhoek de diagonalen even lang zijn en loodrecht op elkaar staan is het een vierkant."
	verbetering = "In het gelijkbenig trapezium dat je hier ziet staan de diagonalen ook loodrecht op elkaar en ze zijn even lang."
	afbeelding = "gelijkb_trap"
	oplossing = "nee"
	}

if (typeoefening == 16)
	{
	uitspraak = "Een vierhoek met twee paar evenwijdige zijden is een parallellogram."
	verbetering = "Dit is de definitie van een parallellogram!"
	afbeelding = "parallellogram"
	oplossing = "ja"
	}

if (typeoefening == 17)
	{
	uitspraak = "Als een vierhoek minstens twee symmetrieassen heeft, dan is het een ruit."
	verbetering = "Ook een rechthoek heeft twee symmetrieassen, namelijk door de middens van de overstaande zijden (zie figuur)."
	afbeelding = "rechth_symm"
	oplossing = "nee"
	}

if (typeoefening == 18)
	{
	uitspraak = "Een vierhoek heeft altijd een even aantal symmetrieassen."
	verbetering = "Ruit en rechthoek hebben elk 2 symmetrieassen, een vierkant zelfs 4 maar een gelijkbenig trapezium heeft er slechts één (en dat is oneven)."
	afbeelding = "gelijkb_trap_symm"
	oplossing = "nee"
	}

if (typeoefening == 19)
	{
	uitspraak = "Elke rechthoek heeft juist 2 symmetrieassen."
	verbetering = "Een vierkant is ook een soort rechthoek en heeft vier symmetrieassen."
	afbeelding = "vierk_symm"
	oplossing = "nee"
	}

if (typeoefening == 20)
	{
	uitspraak = "Als in een vierhoek de overstaande zijden even lang en evenwijdig zijn, dan is het een parallellogram."
	verbetering = "Je kan dit aantonen met congruente driehoeken."
	afbeelding = "parallellogram"
	oplossing = "ja"
	}

if (typeoefening == 21)
	{
	uitspraak = "In een ruit delen de diagonalen elkaar middendoor."
	verbetering = "Een ruit is een speciaal parallellogram en dus delen de diagonalen elkaar middendoor (zoals in elk parallellogram)"
	afbeelding = "ruit"
	oplossing = "ja"
	}

if (typeoefening == 22)
	{
	uitspraak = "In een rechthoek delen de diagonalen elkaar middendoor."
	verbetering = "Een rechthoek is een speciaal parallellogram en dus delen de diagonalen elkaar middendoor (zoals in elk parallellogram)"
	afbeelding = "rechthoek"
	oplossing = "ja"
	}

if (typeoefening == 23)
	{
	uitspraak = "In een ruit zijn de overstaande hoeken even groot."
	verbetering = "Een ruit is een speciaal parallellogram en dus zijn de overstaande hoeken even groot (zoals in elk parallellogram)"
	afbeelding = "ruit"
	oplossing = "ja"
	}

if (typeoefening == 24)
	{
	uitspraak = "Als in een vierhoek de overstaande zijden even lang zijn en de diagonalen ook, dan is het een rechthoek."
	verbetering = "Een vierhoek met gelijke overstaande zijden is een parallellogram. Als de diagonalen van een parallellogram gelijk zijn, dan is het een rechthoek."
	afbeelding = "rechthoek"
	oplossing = "ja"
	}

if (typeoefening == 25)
	{
	uitspraak = "Een vierhoek met loodrechte diagonalen en gelijke overstaande hoeken is een ruit."
	verbetering = "Een vierhoek met gelijke overstaande hoeken is een parallellogram. Als de diagonalen van een parallellogram loodrecht staan, dan is het een ruit."
	afbeelding = "ruit"
	oplossing = "ja"
	}

if (typeoefening == 26)
	{
	uitspraak = "Als twee zijden van een rechthoek gelijk zijn, dan is het een vierkant."
	verbetering = "In een rechthoek zijn altijd twee paar zijden gelijk aan elkaar, namelijk de overstaande zijden, maar dat betekent niet dat ze alle vier gelijk moeten zijn."
	afbeelding = "rechthoek"
	oplossing = "nee"
	}

if (typeoefening == 27)
	{
	uitspraak = "Alle vierhoeken met diagonalen die elkaar middendoor delen zijn parallellogrammen."
	verbetering = "Als de diagonalen van een vierhoek elkaar middendoor delen, dan kan je aantonen (met congruente driehoeken) dat het om een parallellogram gaat."
	afbeelding = "parallellogram"
	oplossing = "ja"
	}

if (typeoefening == 28)
	{
	uitspraak = "Er bestaat een ruit met even lange diagonalen."
	verbetering = "Een ruit met gelijke diagonalen bestaat: het is een vierkant."
	afbeelding = "vierkant"
	oplossing = "ja"
	}

if (typeoefening == 29)
	{
	uitspraak = "Iedere vierhoek met twee paar evenwijdige zijden heeft diagonalen die elkaar middendoor delen."
	verbetering = "Een vierhoek met twee paar evenwijdige zijden is immers een parallellogram en de diagonalen van een parallellogram delen elkaar altijd middendoor."
	afbeelding = "parallellogram"
	oplossing = "ja"
	}

if (typeoefening == 30)
	{
	uitspraak = "In een ruit zijn opeenvolgende hoeken elkaars supplement."
	verbetering = "In een parallellogram zijn opeenvolgende hoeken elkaars supplement en dus ook in een ruit."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 31)
	{
	uitspraak = "Als in een vierhoek twee paar opeenvolgende zijden gelijk zijn, dan staan de diagonalen loodrecht op elkaar."
	verbetering = "Als |AO| = |OU|, dan ligt O op de middelloodlijn van [AU]. Als |AE| = |EU| dan ligt ook E op de middelloodlijn van [AU]. Dus zal OE de middelloodlijn zijn van [AU] en bijgevolg staan de diagonalen loodrecht op elkaar."
	afbeelding = "vlieger"
	oplossing = "ja"
	}

if (typeoefening == 32)
	{
	uitspraak = "Een rechthoek heeft 1 symmetrieas meer dan een trapezium."
	verbetering = "Niet alle trapezia hebben een symmetrieas, een rechthoek heeft er 2. Het zou wel juist zijn als er stond: een rechthoek heeft 1 symmetrieas meer dan een gelijkbenig trapezium."
	afbeelding = "leeg"
	oplossing = "nee"
	}

if (typeoefening == 33)
	{
	uitspraak = "Als een vierhoek 2 paar gelijke zijden heeft, dan heeft die vierhoek ook 2 paar gelijke hoeken."
	verbetering = "Bij een vlieger (zie figuur) heb je 2 paar gelijke zijden (|AO| = |OU| en |AE| = |EU|), maar slechts één paar gelijke hoeken (Â = Û)."
	afbeelding = "vlieger"
	oplossing = "nee"
	}

if (typeoefening == 34)
	{
	uitspraak = "Als een vierhoek 2 paar gelijke hoeken heeft, dan heeft die vierhoek ook 2 paar gelijke zijden."
	verbetering = "Bij een gelijkbenig trapezium heb je 2 paar gelijke hoeken (aan elke basis), maar slechts één paar gelijke zijden."
	afbeelding = "gelijkb_trap"
	oplossing = "nee"
	}

if (typeoefening == 35)
	{
	uitspraak = "Een rechthoek waarvan de diagonalen loodrecht op elkaar staan is een vierkant."
	verbetering = "Een rechthoek is een speciaal parallellogram. Als hierin de diagonalen loodrecht staan is het ook een ruit. Een vierhoek die terzelfdertijd rechthoek en ruit is is een vierkant."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 36)
	{
	uitspraak = "Een rechthoek waarvan de diagonalen even lang zijn is een vierkant."
	verbetering = "De diagonalen van een rechthoek zijn altijd even lang, ook als de rechthoek geen vierkant is."
	afbeelding = "rechthoek"
	oplossing = "nee"
	}

if (typeoefening == 37)
	{
	uitspraak = "Een ruit waarvan de diagonalen loodrecht op elkaar staan is een vierkant."
	verbetering = "De diagonalen van een ruit staan altijd loodrecht op elkaar, ook als de ruit geen vierkant is."
	afbeelding = "ruit"
	oplossing = "nee"
	}

if (typeoefening == 38)
	{
	uitspraak = "Een ruit waarvan de diagonalen even lang zijn is een vierkant."
	verbetering = "Een ruit is een speciaal parallellogram. Als hierin de diagonalen even lang zijn is het ook een rechthoek. Een vierhoek die terzelfdertijd rechthoek en ruit is is een vierkant."
	afbeelding = "leeg"
	oplossing = "ja"
	}

if (typeoefening == 39)
	{
	uitspraak = "Als een vierhoek slechts één symmetrieas heeft, dan is het een gelijkbenig trapezium."
	verbetering = "Ook bij een vlieger (zie figuur) heb je juist één symmetrieas."
	afbeelding = "vlieger_symm"
	oplossing = "nee"
	}

if (typeoefening == 40)
	{
	uitspraak = "Als een vierhoek gelijke overstaande hoeken en gelijke overstaande zijden heeft, dan is het een ruit."
	verbetering = "Ook een parallellogram heeft gelijke overstaande hoeken en zijden."
	afbeelding = "parallellogram"
	oplossing = "nee"
	}

if (typeoefening == 41)
	{
	uitspraak = "Een vierhoek met 3 gelijke hoeken is een rechthoek."
	verbetering = "Je kan ook een vierhoek maken met drie hoeken van 100° en één van 60°."
	afbeelding = "leeg"
	oplossing = "nee"
	}

if (typeoefening == 42)
	{
	uitspraak = "Als een vierhoek minstens twee symmetrieassen heeft, dan is het een rechthoek."
	verbetering = "Ook een ruit heeft twee symmetrieassen, namelijk de diagonalen."
	afbeelding = "ruit"
	oplossing = "nee"
	}

}


function toonoef()
{
eig.txteig.value = uitspraak
}

function nieuwoef()
{
gekozen = 0
while (typeoefening == vorige) typeoefening = Math.floor(Math.random() * 42) + 1
vorige = typeoefening
kiesuitspraak()
toonoef()
document.eig.opl.src = "../images/vraagteken.gif"
document.eig.figuur.src = "images/leeg.gif"
}

function controleja()
{
if (gekozen == 1) alert('Kies eerst een nieuwe uitspraak.')
else
{
gekozen = 1
pogingenteller++;
if (oplossing == "ja")
	{
	document.eig.opl.src = "../images/goed.gif"
	oplossingenteller++;
	}
else 
	{
	document.eig.opl.src = "../images/fout.gif"
	document.eig.figuur.src = "images/" + afbeelding + ".gif"
	alert(verbetering)
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.eig.aantaljuist.value = oplossingenteller
	document.eig.aantalpogingen.value = pogingenteller
	document.eig.percentage.value = procent		
}
}

function controlenee()
{
if (gekozen == 1) alert('Kies eerst een nieuwe uitspraak.')
else
{
gekozen = 1
pogingenteller++;
if (oplossing == "nee")
	{
	document.eig.opl.src = "../images/goed.gif"
	oplossingenteller++;
	}
else 
	{
	document.eig.opl.src = "../images/fout.gif"
	document.eig.figuur.src = "images/" + afbeelding + ".gif"
	alert(verbetering)
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.eig.aantaljuist.value = oplossingenteller
	document.eig.aantalpogingen.value = pogingenteller
	document.eig.percentage.value = procent		
}
}
