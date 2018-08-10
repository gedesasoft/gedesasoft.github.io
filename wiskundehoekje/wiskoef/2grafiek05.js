var pogingenteller = 0
var oplossingenteller = 0

function controleer()
{
controle1()
controle2()
controle3()
controle4()
controle5()

gemiddelde = oplossingenteller / pogingenteller * 100
procent = Math.round(gemiddelde)
document.vragen.aantaljuist.value = oplossingenteller
document.vragen.aantalpogingen.value = pogingenteller
document.vragen.percentage.value = procent		
}

function controle1()
{
var antw1 = document.vragen.vr1.value
if (antw1 != "")
	{
	antw1 = replace(antw1,',','.')
	pogingenteller++
	if (eval(antw1) == 45) 
		{
		document.vragen.opl1.src = "../images/goed.gif"
		oplossingenteller++
		}
	else document.vragen.opl1.src = "../images/fout.gif"
	}
}

function controle2()
{
var antw2 = document.vragen.vr2.value
if (antw2 != "")
	{
	pogingenteller++
	antw2 = replace(antw2,',','.')
	if (eval(antw2) == 30) 
		{
		document.vragen.opl2.src = "../images/goed.gif"
		oplossingenteller++
		}
	else document.vragen.opl2.src = "../images/fout.gif"
	}
}

function controle3()
{
var antw3 = document.vragen.vr3.value
if (antw3 != "")
	{
	pogingenteller++
	antw3 = replace(antw3,',','.')
	if (eval(antw3) == 40) 
		{
		document.vragen.opl3.src = "../images/goed.gif"
		oplossingenteller++
		}
	else document.vragen.opl3.src = "../images/fout.gif"
	}
}

function controle4()
{
var antw4 = document.vragen.vr4.options[document.vragen.vr4.selectedIndex].value
if (antw4 != "0")
	{
	pogingenteller++
	if (antw4 == "d") 
		{
		document.vragen.opl4.src = "../images/goed.gif"
		oplossingenteller++
		}
	else document.vragen.opl4.src = "../images/fout.gif"
	}
}

function controle5()
{
var antw5 = document.vragen.vr5.options[document.vragen.vr5.selectedIndex].value
if (antw5 != "0")
	{
	pogingenteller++
	if (antw5 == "a") 
		{
		document.vragen.opl5.src = "../images/goed.gif"
		oplossingenteller++
		}
	else document.vragen.opl5.src = "../images/fout.gif"
	}
}

function replace(string,text,by) 
{
    var strLength = string.length, txtLength = text.length;
    if ((strLength == 0) || (txtLength == 0)) return string;
    var i = string.indexOf(text);
    if ((!i) && (text != string.substring(0,txtLength))) return string;
    if (i == -1) return string;
    var newstr = string.substring(0,i) + by;
    if (i+txtLength < strLength)
    newstr += replace(string.substring(i+txtLength,strLength),text,by);
    return newstr;
}

