var totaalworpen = 0
var reedsgeworpen = 0
var dobbelsteen1 = 0
var dobbelsteen2 = 0
var som = 0
var dobbel2 = 0
var dobbel3 = 0
var dobbel4 = 0
var dobbel5 = 0
var dobbel6 = 0
var dobbel7 = 0
var dobbel8 = 0
var dobbel9 = 0
var dobbel10 = 0
var dobbel11 = 0
var dobbel12 = 0
var perc2 = 0
var perc3 = 0
var perc4 = 0
var perc5 = 0
var perc6 = 0
var perc7 = 0
var perc8 = 0
var perc9 = 0
var perc10 = 0
var perc11 = 0
var perc12 = 0
var max = 0

function resetvariabelen()
{
wishistogram()
totaalworpen = 0
reedsgeworpen = 0
dobbelsteen1 = 0
dobbelsteen2 = 0
som = 0
dobbel2 = 0
dobbel3 = 0
dobbel4 = 0
dobbel5 = 0
dobbel6 = 0
dobbel7 = 0
dobbel8 = 0
dobbel9 = 0
dobbel10 = 0
dobbel11 = 0
dobbel12 = 0
perc2 = 0
perc3 = 0
perc4 = 0
perc5 = 0
perc6 = 0
perc7 = 0
perc8 = 0
perc9 = 0
perc10 = 0
perc11 = 0
perc12 = 0
}

function toonwaardes()
{
document.exp.aantal2.value = dobbel2
document.exp.aantal3.value = dobbel3
document.exp.aantal4.value = dobbel4
document.exp.aantal5.value = dobbel5
document.exp.aantal6.value = dobbel6
document.exp.aantal7.value = dobbel7
document.exp.aantal8.value = dobbel8
document.exp.aantal9.value = dobbel9
document.exp.aantal10.value = dobbel10
document.exp.aantal11.value = dobbel11
document.exp.aantal12.value = dobbel12
document.exp.percent2.value = perc2
document.exp.percent3.value = perc3
document.exp.percent4.value = perc4
document.exp.percent5.value = perc5
document.exp.percent6.value = perc6
document.exp.percent7.value = perc7
document.exp.percent8.value = perc8
document.exp.percent9.value = perc9
document.exp.percent10.value = perc10
document.exp.percent11.value = perc11
document.exp.percent12.value = perc12
}

function gooien()
{
totaalworpen = document.exp.txtaantal.value
if (totaalworpen == "") alert('Geef eerst in hoe vaak je met de dobbelstenen wenst te gooien')
else
{
while (reedsgeworpen < totaalworpen)
	{
	reedsgeworpen++
	dobbelsteen1 = Math.floor(Math.random() * 6) + 1
	dobbelsteen2 = Math.floor(Math.random() * 6) + 1
	som = dobbelsteen1 + dobbelsteen2
	if (som == 2) dobbel2++
	if (som == 3) dobbel3++
	if (som == 4) dobbel4++
	if (som == 5) dobbel5++
	if (som == 6) dobbel6++
	if (som == 7) dobbel7++
	if (som == 8) dobbel8++
	if (som == 9) dobbel9++
	if (som == 10) dobbel10++
	if (som == 11) dobbel11++
	if (som == 12) dobbel12++
	}
perc2 = dobbel2 * 100 / totaalworpen
perc3 = dobbel3 * 100 / totaalworpen
perc4 = dobbel4 * 100 / totaalworpen
perc5 = dobbel5 * 100 / totaalworpen
perc6 = dobbel6 * 100 / totaalworpen
perc7 = dobbel7 * 100 / totaalworpen
perc8 = dobbel8 * 100 / totaalworpen
perc9 = dobbel9 * 100 / totaalworpen
perc10 = dobbel10 * 100 / totaalworpen
perc11 = dobbel11 * 100 / totaalworpen
perc12 = dobbel12 * 100 / totaalworpen
}
}

function histogram()
{
max = Math.max(dobbel2,dobbel3)
max = Math.max(max,dobbel4)
max = Math.max(max,dobbel5)
max = Math.max(max,dobbel6)
max = Math.max(max,dobbel7)
max = Math.max(max,dobbel8)
max = Math.max(max,dobbel9)
max = Math.max(max,dobbel10)
max = Math.max(max,dobbel11)
max = Math.max(max,dobbel12)

var lengte2 = dobbel2 / max * 300
var lengte3 = dobbel3 / max * 300
var lengte4 = dobbel4 / max * 300
var lengte5 = dobbel5 / max * 300
var lengte6 = dobbel6 / max * 300
var lengte7 = dobbel7 / max * 300
var lengte8 = dobbel8 / max * 300
var lengte9 = dobbel9 / max * 300
var lengte10 = dobbel10 / max * 300
var lengte11 = dobbel11 / max * 300
var lengte12 = dobbel12 / max * 300

document.hist2.width = lengte2
document.hist3.width = lengte3
document.hist4.width = lengte4
document.hist5.width = lengte5
document.hist6.width = lengte6
document.hist7.width = lengte7
document.hist8.width = lengte8
document.hist9.width = lengte9
document.hist10.width = lengte10
document.hist11.width = lengte11
document.hist12.width = lengte12
}

function wishistogram()
{
document.hist2.width = "0"
document.hist3.width = "0"
document.hist4.width = "0"
document.hist5.width = "0"
document.hist6.width = "0"
document.hist7.width = "0"
document.hist8.width = "0"
document.hist9.width = "0"
document.hist10.width = "0"
document.hist11.width = "0"
document.hist12.width = "0"
}

function nieuwoef()
{
resetvariabelen()
gooien()
toonwaardes()
histogram()
}

