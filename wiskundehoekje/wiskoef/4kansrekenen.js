function controle()
{
oplossingenteller = 0
pogingenteller = 0

if (aantalopgaven >= 1)
{
	document.telpr.vr01.value = replace(document.telpr.vr01.value,',','.')
	pogingenteller++
	if (eval(telpr.vr01.value) == eval(antw01))
		{
		telpr.opl01.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl01.src = "../images/fout.gif"
}

if (aantalopgaven >= 2)
{
	document.telpr.vr02.value = replace(document.telpr.vr02.value,',','.')
	pogingenteller++
	if (eval(telpr.vr02.value) == eval(antw02))
		{
		telpr.opl02.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl02.src = "../images/fout.gif"
}

if (aantalopgaven >= 3)
{
	document.telpr.vr03.value = replace(document.telpr.vr03.value,',','.')
	pogingenteller++
	if (eval(telpr.vr03.value) == eval(antw03))
		{
		telpr.opl03.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl03.src = "../images/fout.gif"
}

if (aantalopgaven >= 4)
{
	document.telpr.vr04.value = replace(document.telpr.vr04.value,',','.')
	pogingenteller++
	if (eval(telpr.vr04.value) == eval(antw04))
		{
		telpr.opl04.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl04.src = "../images/fout.gif"
}

if (aantalopgaven >= 5)
{
	document.telpr.vr05.value = replace(document.telpr.vr05.value,',','.')
	pogingenteller++
	if (eval(telpr.vr05.value) == eval(antw05))
		{
		telpr.opl05.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl05.src = "../images/fout.gif"
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
