var X = 0
var Y = 0
var Xa = 0
var Ya = 0
var Xb = 0
var Yb = 0
var Xd1 = 0
var Yd1 = 0
var Xd2 = 0
var Yd2 = 0
var Ca = 0
var Cb = 0
var Cd1 = 0
var Cd2 = 0
var A = 0
var B = 0
var M = 0
var N = 0
var E = 0
var F = 0
var ggd = ""
var vgl_a = ""
var vgl_b = ""
var vgl_d1 = ""
var vgl_d2 = ""

function bepaalggd(getal1,getal2)
{
if (getal2 < 0) 
{
getal2 = 0 - getal2
getal1 = 0 - getal1
}
var ng1 = Math.abs(getal1);
var ng2 = Math.abs(getal2);
var rest = 1
	
while (rest != 0)
	{
	rest = ng1 % ng2;
	ng1 = ng2;
	ng2 = rest;
	}

ggd = ng1
}

function kiesgetallen()
{
X = Math.floor(Math.random() * 25) - 10;
Y = Math.floor(Math.random() * 25) - 10;
M = Math.floor(Math.random() * 15) + 1;
N = Math.floor(Math.random() * 8) + 1;
A = 0
B = 0
while ((A == 0) && (B == 0))
	{ 
	A = Math.floor(Math.random() * 25) - 10;
	B = Math.floor(Math.random() * 6) + 1;
	}

Xd1 = M * A
Yd1 = M * B
Cd1 = 0 - M * A * X - M * B * Y
Xd2 = 0 - M * B
Yd2 = M * A
Cd2 = M * B * X - M * A * Y

bepaalggd(Xd1,Yd1)
 
Xd1 = Xd1 / ggd
Yd1 = Yd1 / ggd
Cd1 = Cd1 / ggd

Xd2 = Xd2 / ggd
Yd2 = Yd2 / ggd
Cd2 = Cd2 / ggd

if (Xd1 < 0)
	{
	Xd1 = 0 - Xd1
	Yd1 = 0 - Yd1
	Cd1 = 0 - Cd1
	}

if (Xd2 < 0)
	{
	Xd2 = 0 - Xd2
	Yd2 = 0 - Yd2
	Cd2 = 0 - Cd2
	}

Xa = N * B + M * A
Ya = M * B - N * A
Ca = N * A * Y - N * B * X - B * M * Y - A * M * X 
 
bepaalggd(Xa,Ya)
 
Xa = Xa / ggd
Ya = Ya / ggd
Ca = Ca / ggd

if (Xa < 0)
	{
	Xa = 0 - Xa
	Ya = 0 - Ya
	Ca = 0 - Ca
	}

Xb = M * A - N * B
Yb = M * B + N * A
Cb = B * N * X - M * A * X - M * B * Y - N * A * Y  

bepaalggd(Xb,Yb)
 
Xb = Xb / ggd
Yb = Yb / ggd
Cb = Cb / ggd

if (Xb < 0)
	{
	Xb = 0 - Xb
	Yb = 0 - Yb
	Cb = 0 - Cb
	}
}


function toonoef()
{
vgl_a = ""

vgl_a += Xa + "x"
if (Ya > 0) vgl_a += " + " + Math.abs(Ya) + "y"
if (Ya < 0) vgl_a += " - " + Math.abs(Ya) + "y"
if (Ca > 0) vgl_a += " + " + Math.abs(Ca)
if (Ca < 0) vgl_a += " - " + Math.abs(Ca)
vgl_a += " = 0"

vgl_b = ""

vgl_b += Xb + "x"
if (Yb > 0) vgl_b += " + " + Math.abs(Yb) + "y"
if (Yb < 0) vgl_b += " - " + Math.abs(Yb) + "y"
if (Cb > 0) vgl_b += " + " + Math.abs(Cb)
if (Cb < 0) vgl_b += " - " + Math.abs(Cb)
vgl_b += " = 0"

vgl_d1 = ""

vgl_d1 += Xd1 + "x"
if (Yd1 > 0) vgl_d1 += " + " + Math.abs(Yd1) + "y"
if (Yd1 < 0) vgl_d1 += " - " + Math.abs(Yd1) + "y"
if (Cd1 > 0) vgl_d1 += " + " + Math.abs(Cd1)
if (Cd1 < 0) vgl_d1 += " - " + Math.abs(Cd2)
vgl_d1 += " = 0"

vgl_d2 = ""

vgl_d2 += Xd2 + "x"
if (Yd2 > 0) vgl_d2 += " + " + Math.abs(Yd2) + "y"
if (Yd2 < 0) vgl_d2 += " - " + Math.abs(Yd2) + "y"
if (Cd2 > 0) vgl_d2 += " + " + Math.abs(Cd2)
if (Cd2 < 0) vgl_d2 += " - " + Math.abs(Cd2)
vgl_d2 += " = 0"

coeff.vgla.value = vgl_a
coeff.vglb.value = vgl_b
coeff.vgld1.value = ""
coeff.vgld2.value = ""
}

function toonopl()
{
coeff.vgld1.value = vgl_d1
coeff.vgld2.value = vgl_d2
}

function nieuwoef()
{
kiesgetallen()
toonoef()
}

