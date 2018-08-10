var A11 = 0
var A12 = 0
var A13 = 0
var A14 = 0
var A21 = 0
var A22 = 0
var A23 = 0
var A24 = 0
var A31 = 0
var A32 = 0
var A33 = 0
var A34 = 0
var A41 = 0
var A42 = 0
var A43 = 0
var A44 = 0
var detA = 0

function wijzigformaat()
{
document.all.m2x2.style.display = "none"
document.all.m3x3.style.display = "none"
document.all.m4x4.style.display = "none"
if (document.det.afm.value == "2") document.all.m2x2.style.display = ""
if (document.det.afm.value == "3") document.all.m3x3.style.display = ""
if (document.det.afm.value == "4") document.all.m4x4.style.display = ""
document.det.txtdet.value = ""
}

function determinant()
{
if (document.det.afm.value == "2")
	{
	A11 = parseFloat(eval(document.det.txtC11.value), 10)
	A12 = parseFloat(eval(document.det.txtC12.value), 10)
	A21 = parseFloat(eval(document.det.txtC21.value), 10)
	A22 = parseFloat(eval(document.det.txtC22.value), 10)
	
	detA = A11 * A22 - A12 * A21
	}

if (document.det.afm.value == "3")
	{
	A11 = parseFloat(eval(document.det.txtB11.value), 10)
	A12 = parseFloat(eval(document.det.txtB12.value), 10)
	A13 = parseFloat(eval(document.det.txtB13.value), 10)
	A21 = parseFloat(eval(document.det.txtB21.value), 10)
	A22 = parseFloat(eval(document.det.txtB22.value), 10)
	A23 = parseFloat(eval(document.det.txtB23.value), 10)
	A31 = parseFloat(eval(document.det.txtB31.value), 10)
	A32 = parseFloat(eval(document.det.txtB32.value), 10)
	A33 = parseFloat(eval(document.det.txtB33.value), 10)		

	detA = A11 * A22 * A33 + A12 * A23 * A31 + A13 * A21 * A32 - A13 * A22 * A31 - A12 * A21 * A33 - A11 * A23 * A32
	}	

if (document.det.afm.value == "4")
	{
	A11 = parseFloat(eval(document.det.txtA11.value), 10)
	A12 = parseFloat(eval(document.det.txtA12.value), 10)
	A13 = parseFloat(eval(document.det.txtA13.value), 10)
	A14 = parseFloat(eval(document.det.txtA14.value), 10)
	A21 = parseFloat(eval(document.det.txtA21.value), 10)
	A22 = parseFloat(eval(document.det.txtA22.value), 10)
	A23 = parseFloat(eval(document.det.txtA23.value), 10)
	A24 = parseFloat(eval(document.det.txtA24.value), 10)
	A31 = parseFloat(eval(document.det.txtA31.value), 10)
	A32 = parseFloat(eval(document.det.txtA32.value), 10)
	A33 = parseFloat(eval(document.det.txtA33.value), 10)
	A34 = parseFloat(eval(document.det.txtA34.value), 10)
	A41 = parseFloat(eval(document.det.txtA41.value), 10)
	A42 = parseFloat(eval(document.det.txtA42.value), 10)
	A43 = parseFloat(eval(document.det.txtA43.value), 10)
	A44 = parseFloat(eval(document.det.txtA44.value), 10)

	detA = A14 * A23 * A32 * A41 - A13 * A24 * A32 * A41 - A14 * A22 * A33 * A41 + A12 * A24 * A33 * A41 +  A13 * A22 * A34 * A41 - A12 * A23 * A34 * A41 - A14 * A23 * A31 * A42 + A13 * A24 * A31 * A42 + A14 * A21 * A33 * A42 - A11 * A24 * A33 * A42 - A13 * A21 * A34 * A42 + A11 * A23 * A34 * A42 + A14 * A22 * A31 * A43 - A12 * A24 * A31 * A43 - A14 * A21 * A32 * A43 + A11 * A24 * A32 * A43 + A12 * A21 * A34 * A43 - A11 * A22 * A34 * A43 - A13 * A22 * A31 * A44 + A12 * A23 * A31 * A44 + A13 * A21 * A32 * A44 - A11 * A23 * A32 * A44 - A12 * A21 * A33 * A44 + A11 * A22 * A33 * A44
	}	

document.det.txtdet.value = detA
}
