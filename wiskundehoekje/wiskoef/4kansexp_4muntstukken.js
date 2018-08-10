var totaalworpen = 0
var reedsgeworpen = 0
var muntworp1 = 0
var muntworp2 = 0
var muntworp3 = 0
var muntworp4 = 0
var munt1 = 0
var munt2 = 0
var munt3 = 0
var munt4 = 0
var munt5 = 0
var perc1 = 0
var perc2 = 0
var perc3 = 0
var perc4 = 0
var perc5 = 0
var max = 0

function resetvariabelen()
{
wishistogram()
totaalworpen = 0
reedsgeworpen = 0
muntworp1 = 0
muntworp2 = 0
muntworp3 = 0
muntworp4 = 0
munt1 = 0
munt2 = 0
munt3 = 0
munt4 = 0
munt5 = 0
perc1 = 0
perc2 = 0
perc3 = 0
perc4 = 0
perc5 = 0
}

function toonwaardes()
{
document.exp.aantal1.value = munt1
document.exp.aantal2.value = munt2
document.exp.aantal3.value = munt3
document.exp.aantal4.value = munt4
document.exp.aantal5.value = munt5
document.exp.percent1.value = perc1
document.exp.percent2.value = perc2
document.exp.percent3.value = perc3
document.exp.percent4.value = perc4
document.exp.percent5.value = perc5
}

function gooien()
{
totaalworpen = document.exp.txtaantal.value
if (totaalworpen == "") alert('Geef eerst in hoe vaak je de muntstukken wenst op te gooien')
else
{
while (reedsgeworpen < totaalworpen)
	{
	reedsgeworpen++
	muntworp1 = Math.floor(Math.random() * 2)
	muntworp2 = Math.floor(Math.random() * 2)
	muntworp3 = Math.floor(Math.random() * 2)
	muntworp4 = Math.floor(Math.random() * 2)
	som = muntworp1 + muntworp2 + muntworp3 + muntworp4 
	if (som == 0) munt1++
	if (som == 1) munt2++
	if (som == 2) munt3++
	if (som == 3) munt4++
	if (som == 4) munt5++
	}
perc1 = munt1 * 100 / totaalworpen
perc2 = munt2 * 100 / totaalworpen
perc3 = munt3 * 100 / totaalworpen
perc4 = munt4 * 100 / totaalworpen
perc5 = munt5 * 100 / totaalworpen
}
}

function histogram()
{
max = Math.max(munt1,munt2)
max = Math.max(max,munt3)
max = Math.max(max,munt4)
max = Math.max(max,munt5)

var lengte1 = munt1 / max * 240
var lengte2 = munt2 / max * 240
var lengte3 = munt3 / max * 240
var lengte4 = munt4 / max * 240
var lengte5 = munt5 / max * 240

document.hist1.width = lengte1
document.hist2.width = lengte2
document.hist3.width = lengte3
document.hist4.width = lengte4
document.hist5.width = lengte5
}

function wishistogram()
{
document.hist1.width = "0"
document.hist2.width = "0"
document.hist3.width = "0"
document.hist4.width = "0"
document.hist5.width = "0"
}

function nieuwoef()
{
resetvariabelen()
gooien()
toonwaardes()
histogram()
}

