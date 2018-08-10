var totaalworpen = 0
var reedsgeworpen = 0
var munt = 0
var munt1 = 0
var munt2 = 0
var perc1 = 0
var perc2 = 0
var max = 0

function resetvariabelen()
{
wishistogram()
totaalworpen = 0
reedsgeworpen = 0
munt = 0
munt1 = 0
munt2 = 0
perc1 = 0
perc2 = 0
}

function toonwaardes()
{
document.exp.aantal1.value = munt1
document.exp.aantal2.value = munt2
document.exp.percent1.value = perc1
document.exp.percent2.value = perc2
}

function gooien()
{
totaalworpen = document.exp.txtaantal.value
if (totaalworpen == "") alert('Geef eerst in hoe vaak je met het muntstuk wenst te gooien')
else
{
while (reedsgeworpen < totaalworpen)
	{
	reedsgeworpen++
	munt = Math.floor(Math.random() * 2) + 1
	if (munt == 1) munt1++
	if (munt == 2) munt2++
	}
perc1 = munt1 * 100 / totaalworpen
perc2 = munt2 * 100 / totaalworpen
}
}

function histogram()
{
max = Math.max(munt1,munt2)

var lengte1 = munt1 / max * 300
var lengte2 = munt2 / max * 300

document.hist1.width = lengte1
document.hist2.width = lengte2
}

function wishistogram()
{
document.hist1.width = "0"
document.hist2.width = "0"
}

function nieuwoef()
{
resetvariabelen()
gooien()
toonwaardes()
histogram()
}

