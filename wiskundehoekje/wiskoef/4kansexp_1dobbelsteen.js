var totaalworpen = 0
var reedsgeworpen = 0
var dobbel = 0
var dobbel1 = 0
var dobbel2 = 0
var dobbel3 = 0
var dobbel4 = 0
var dobbel5 = 0
var dobbel6 = 0
var perc1 = 0
var perc2 = 0
var perc3 = 0
var perc4 = 0
var perc5 = 0
var perc6 = 0
var max = 0

function resetvariabelen()
{
wishistogram()
totaalworpen = 0
reedsgeworpen = 0
dobbel = 0
dobbel1 = 0
dobbel2 = 0
dobbel3 = 0
dobbel4 = 0
dobbel5 = 0
dobbel6 = 0
perc1 = 0
perc2 = 0
perc3 = 0
perc4 = 0
perc5 = 0
perc6 = 0
}

function toonwaardes()
{
document.exp.aantal1.value = dobbel1
document.exp.aantal2.value = dobbel2
document.exp.aantal3.value = dobbel3
document.exp.aantal4.value = dobbel4
document.exp.aantal5.value = dobbel5
document.exp.aantal6.value = dobbel6
document.exp.percent1.value = perc1
document.exp.percent2.value = perc2
document.exp.percent3.value = perc3
document.exp.percent4.value = perc4
document.exp.percent5.value = perc5
document.exp.percent6.value = perc6
}

function gooien()
{
totaalworpen = document.exp.txtaantal.value
if (totaalworpen == "") alert('Geef eerst in hoe vaak je met de dobbelsteen wenst te gooien')
else
{
while (reedsgeworpen < totaalworpen)
	{
	reedsgeworpen++
	dobbel = Math.floor(Math.random() * 6) + 1
	if (dobbel == 1) dobbel1++
	if (dobbel == 2) dobbel2++
	if (dobbel == 3) dobbel3++
	if (dobbel == 4) dobbel4++
	if (dobbel == 5) dobbel5++
	if (dobbel == 6) dobbel6++
	}
perc1 = dobbel1 * 100 / totaalworpen
perc2 = dobbel2 * 100 / totaalworpen
perc3 = dobbel3 * 100 / totaalworpen
perc4 = dobbel4 * 100 / totaalworpen
perc5 = dobbel5 * 100 / totaalworpen
perc6 = dobbel6 * 100 / totaalworpen
}
}

function histogram()
{
max = Math.max(dobbel1,dobbel2)
max = Math.max(max,dobbel3)
max = Math.max(max,dobbel4)
max = Math.max(max,dobbel5)
max = Math.max(max,dobbel6)

var lengte1 = dobbel1 / max * 300
var lengte2 = dobbel2 / max * 300
var lengte3 = dobbel3 / max * 300
var lengte4 = dobbel4 / max * 300
var lengte5 = dobbel5 / max * 300
var lengte6 = dobbel6 / max * 300

document.hist1.width = lengte1
document.hist2.width = lengte2
document.hist3.width = lengte3
document.hist4.width = lengte4
document.hist5.width = lengte5
document.hist6.width = lengte6
}

function wishistogram()
{
document.hist1.width = "0"
document.hist2.width = "0"
document.hist3.width = "0"
document.hist4.width = "0"
document.hist5.width = "0"
document.hist6.width = "0"
}

function nieuwoef()
{
resetvariabelen()
gooien()
toonwaardes()
histogram()
}

