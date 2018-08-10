var nummer = 0
var dom = ""
var bld = ""
var pogingenteller = 0
var oplossingenteller = 0
var dom_goed = 0
var bld_goed = 0

function veranderafbeelding()
{
grafiek.domf.options.value = "opnieuw";
grafiek.bldf.options.value = "opnieuw";
dom_goed = 0;
bld_goed = 0;
grafiek.opldom.src = "../images/vraagteken.gif"
grafiek.oplbld.src = "../images/vraagteken.gif"
nummer = Math.floor(Math.random() * 100) + 1;
var nieuwefunctie = 'images/3dombld' + nummer + '.png';
document.functie.src= nieuwefunctie;
domein_beeld()
}

function domein_beeld()
{
	if (nummer == 1) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,-2["
	}
	if (nummer == 2) 
	{
	dom = "[-2,+oo["
	bld = "]-oo,-2]"
	}
	if (nummer == 3) 
	{
	dom = "]-4,+oo["
	bld = "]-oo,-1["
	}
	if (nummer == 4) 
	{
	dom = "[-4,+oo["
	bld = "]-oo,-1]"
	}
	if (nummer == 5) 
	{
	dom = "]2,+oo["
	bld = "]-oo,-4["
	}
	if (nummer == 6) 
	{
	dom = "[2,+oo["
	bld = "]-oo,-4]"
	}
	if (nummer == 7) 
	{
	dom = "]-oo,2["
	bld = "]-4,+oo["
	}
	if (nummer == 8) 
	{
	dom = "]-oo,2]"
	bld = "[-4,+oo["
	}
	if (nummer == 9) 
	{
	dom = "]-oo,-2["
	bld = "]-2,+oo["
	}
	if (nummer == 10) 
	{
	dom = "]-oo,-2]"
	bld = "[-2,+oo["
	}
	if (nummer == 11) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,0["
	}
	if (nummer == 12) 
	{
	dom = "[-2,+oo["
	bld = "]-oo,0]"
	}
	if (nummer == 13) 
	{
	dom = "]-oo,-2["
	bld = "]0,+oo["
	}
	if (nummer == 14) 
	{
	dom = "]-oo,-2]"
	bld = "[0,+oo["
	}
	if (nummer == 15) 
	{
	dom = "]0,+oo["
	bld = "]-oo,-1["
	}
	if (nummer == 16) 
	{
	dom = "[0,+oo["
	bld = "]-oo,-1]"
	}
	if (nummer == 17) 
	{
	dom = "]-oo,0["
	bld = "]-1,+oo["
	}
	if (nummer == 18) 
	{
	dom = "]-oo,0]"
	bld = "[-1,+oo["
	}
	if (nummer == 19) 
	{
	dom = "]2,+oo["
	bld = "]-oo,-2["
	}
	if (nummer == 20) 
	{
	dom = "[2,+oo["
	bld = "]-oo,-2]"
	}
	if (nummer == 21) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,2["
	}
	if (nummer == 22) 
	{
	dom = "[-2,+oo["
	bld = "]-oo,2]"
	}
	if (nummer == 23) 
	{
	dom = "]0,+oo["
	bld = "]-oo,1["
	}
	if (nummer == 24) 
	{
	dom = "[0,+oo["
	bld = "]-oo,1]"
	}
	if (nummer == 25) 
	{
	dom = "]-oo,2["
	bld = "]0,+oo["
	}
	if (nummer == 26) 
	{
	dom = "]-oo,2]"
	bld = "[0,+oo["
	}
	if (nummer == 27) 
	{
	dom = "]-oo,2["
	bld = "]2,+oo["
	}
	if (nummer == 28) 
	{
	dom = "]-oo,2]"
	bld = "[2,+oo["
	}
	if (nummer == 29) 
	{
	dom = "]-oo,4["
	bld = "]1,+oo["
	}
	if (nummer == 30) 
	{
	dom = "]-oo,4]"
	bld = "[1,+oo["
	}
	if (nummer == 31) 
	{
	dom = "]-4,+oo["
	bld = "]1,+oo["
	}
	if (nummer == 32) 
	{
	dom = "[-4,+oo["
	bld = "[1,+oo["
	}
	if (nummer == 33) 
	{
	dom = "]-2,+oo["
	bld = "]2,+oo["
	}
	if (nummer == 34) 
	{
	dom = "[-2,+oo["
	bld = "[2,+oo["
	}
	if (nummer == 35) 
	{
	dom = "]0,+oo["
	bld = "]1,+oo["
	}
	if (nummer == 36) 
	{
	dom = "[0,+oo["
	bld = "[1,+oo["
	}
	if (nummer == 37) 
	{
	dom = "]-oo,0["
	bld = "]-oo,1["
	}
	if (nummer == 38) 
	{
	dom = "]-oo,0]"
	bld = "]-oo,1]"
	}
	if (nummer == 39) 
	{
	dom = "]-oo,2["
	bld = "]-oo,2["
	}
	if (nummer == 40) 
	{
	dom = "]-oo,2]"
	bld = "]-oo,2]"
	}
	if (nummer == 41) 
	{
	dom = "]-oo,2["
	bld = "]-oo,0["
	}
	if (nummer == 42) 
	{
	dom = "]-oo,2]"
	bld = "]-oo,0]"
	}
	if (nummer == 43) 
	{
	dom = "]-oo,0["
	bld = "]-oo,-1["
	}
	if (nummer == 44) 
	{
	dom = "]-oo,0]"
	bld = "]-oo,-1]"
	}
	if (nummer == 45) 
	{
	dom = "]-oo,4["
	bld = "]-oo,1["
	}
	if (nummer == 46) 
	{
	dom = "]-oo,4]"
	bld = "]-oo,1]"
	}
	if (nummer == 47) 
	{
	dom = "]-oo,4["
	bld = "]-oo,-1["
	}
	if (nummer == 48) 
	{
	dom = "]-oo,4]"
	bld = "]-oo,-1]"
	}
	if (nummer == 49) 
	{
	dom = "]-2,+oo["
	bld = "]-4,+oo["
	}
	if (nummer == 50) 
	{
	dom = "[-2,+oo["
	bld = "[-4,+oo["
	}
	if ((nummer > 50) && (nummer < 68)) 
	{
	dom = "R"
	}
	if ((nummer == 51) || (nummer == 65)) 
	{
	bld = "[0,+oo["
	}
	if (nummer == 60) 
	{
	bld = "[2,+oo["
	}
	if (nummer == 61) 
	{
	bld = "[-1,+oo["
	}
	if ((nummer == 62) || (nummer == 63)) 
	{
	bld = "[-4,+oo["
	}
	if (nummer == 64) 
	{
	bld = "[1,+oo["
	}
	if ((nummer == 66) || (nummer == 67)) 
	{
	bld = "R"
	}
	if ((nummer == 52) || (nummer == 59)) 
	{
	bld = "]-oo,4]"
	}
	if ((nummer == 54) || (nummer == 56)) 
	{
	bld = "]-oo,-1]"
	}
	if (nummer == 53) 
	{
	bld = "]-oo,1]"
	}
	if (nummer == 55) 
	{
	bld = "]-oo,-2]"
	}
	if (nummer == 57) 
	{
	bld = "]-oo,0]"
	}
	if (nummer == 58) 
	{
	bld = "]-oo,2]"
	}
	if (nummer == 68) 
	{
	dom = "]-oo,0["
	bld = "]-oo,0["
	}
	if (nummer == 69) 
	{
	dom = "]-oo,2["
	bld = "]-oo,0["
	}
	if (nummer == 70) 
	{
	dom = "]-oo,2["
	bld = "]1,+oo["
	}
	if (nummer == 71) 
	{
	dom = "]-1,+oo["
	bld = "]-oo,4["
	}
	if (nummer == 72) 
	{
	dom = "]-2,+oo["
	bld = "]-1,+oo["
	}
	if (nummer == 73) 
	{
	dom = "]-oo,0["
	bld = "]-oo,-1["
	}
	if (nummer == 74) 
	{
	dom = "]-oo,1["
	bld = "]-oo,-2["
	}
	if (nummer == 75) 
	{
	dom = "]0,+oo["
	bld = "]-2,+oo["
	}
	if (nummer == 76) 
	{
	dom = "]-1,+oo["
	bld = "]-2,+oo["
	}
	if (nummer == 77) 
	{
	dom = "]0,+oo["
	bld = "]-oo,0["
	}
	if (nummer == 78) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,0["
	}
	if (nummer == 79) 
	{
	dom = "]-4,+oo["
	bld = "]-oo,0["
	}
	if (nummer == 80) 
	{
	dom = "]1,+oo["
	bld = "]-oo,1["
	}
	if (nummer == 81) 
	{
	dom = "]-oo,1["
	bld = "]1,+oo["
	}
	if (nummer == 82) 
	{
	dom = "]-1,+oo["
	bld = "]-oo,1["
	}
	if (nummer == 83) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,1["
	}
	if (nummer == 84) 
	{
	dom = "]-2,+oo["
	bld = "]-oo,-1["
	}
	if (nummer == 85) 
	{
	dom = "]0,+oo["
	bld = "[-2,+oo["
	}
	if (nummer == 86) 
	{
	dom = "[0,+oo["
	bld = "[-2,+oo["
	}
	if (nummer == 87) 
	{
	dom = "]0,+oo["
	bld = "]-oo,4]"
	}
	if (nummer == 88) 
	{
	dom = "]0,+oo["
	bld = "]-oo,2]"
	}
	if (nummer == 89) 
	{
	dom = "]0,+oo["
	bld = "[0,+oo["
	}
	if (nummer == 90) 
	{
	dom = "]-oo,0["
	bld = "[-2,+oo["
	}
	if (nummer == 91) 
	{
	dom = "]-oo,-1["
	bld = "]-oo,0]"
	}
	if (nummer == 92) 
	{
	dom = "]-oo,-1]"
	bld = "]-oo,0]"
	}
	if (nummer == 93) 
	{
	dom = "]-4,+oo["
	bld = "]-oo,0]"
	}
	if (nummer == 94) 
	{
	dom = "]-oo,-1["
	bld = "]-oo,2]"
	}
	if (nummer == 95) 
	{
	dom = "]-4,+oo["
	bld = "]-oo,2]"
	}
	if (nummer == 96) 
	{
	dom = "]-4,+oo["
	bld = "]-oo,4]"
	}
	if (nummer == 97) 
	{
	dom = "[-4,+oo["
	bld = "]-oo,4]"
	}
	if ((nummer == 98) || (nummer == 99) || (nummer == 100)) 
	{
	dom = "R"
	bld = "R"
	}
 

}

function controle() 
{
var antw_dom = document.grafiek.domf.options[document.grafiek.domf.selectedIndex].value;

var antw_bld = document.grafiek.bldf.options[document.grafiek.bldf.selectedIndex].value;

if ((antw_dom == "opnieuw") || (antw_bld == "opnieuw")) 
{
grafiek.opldom.src = "../images/vraagteken.gif"
grafiek.oplbld.src = "../images/vraagteken.gif"
}
else
{
if ((dom_goed == 1) && (bld_goed == 1)) alert('Fijn dat je deze oefening al eens volledig goed had, kies nu eerst een nieuwe oefening.')
else
	{
	if (dom_goed == 0)
		{
		pogingenteller++;
		if (antw_dom == dom) 
			{
			grafiek.opldom.src = "../images/goed.gif"
			oplossingenteller++;
			dom_goed = 1
			}
		else 
			{
			grafiek.opldom.src = "../images/fout.gif"
			}
		}
	if (bld_goed == 0)
		{
		pogingenteller++;
		if (antw_bld == bld) 
			{
			grafiek.oplbld.src = "../images/goed.gif"
			oplossingenteller++;
			bld_goed = 1
			}
		else 
			{
			grafiek.oplbld.src = "../images/fout.gif"
			}
		}
	}
	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.grafiek.aantaljuist.value = oplossingenteller
	document.grafiek.aantalpogingen.value = pogingenteller
	document.grafiek.percentage.value = procent		
	}
}
