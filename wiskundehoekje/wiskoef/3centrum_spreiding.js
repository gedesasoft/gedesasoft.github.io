function controle()
{
if (gem != "")
	{
	document.stat.txtgem.value = replace(document.stat.txtgem.value,',','.')
	if (eval(document.stat.txtgem.value) == eval(gem))
		{
		stat.oplgem.src = "../images/goed.gif"
		}
	else stat.oplgem.src = "../images/fout.gif"
	}

if (mo != "")
	{
	document.stat.txtmo.value = replace(document.stat.txtmo.value,',','.')
	if (eval(document.stat.txtmo.value) == eval(mo))
		{
		stat.oplmo.src = "../images/goed.gif"
		}
	else stat.oplmo.src = "../images/fout.gif"
}

if (me != "")
	{
	document.stat.txtme.value = replace(document.stat.txtme.value,',','.')
	if (eval(document.stat.txtme.value) == eval(me))
		{
		stat.oplme.src = "../images/goed.gif"
		}
	else stat.oplme.src = "../images/fout.gif"
	}

if (Q1 != "")
	{
	document.stat.txtQ1.value = replace(document.stat.txtQ1.value,',','.')
	if (eval(document.stat.txtQ1.value) == eval(Q1))
		{
		stat.oplQ1.src = "../images/goed.gif"
		}
	else stat.oplQ1.src = "../images/fout.gif"
	}

if (Q3 != "")
	{
	document.stat.txtQ3.value = replace(document.stat.txtQ3.value,',','.')
	if (eval(document.stat.txtQ3.value) == eval(Q3))
		{
		stat.oplQ3.src = "../images/goed.gif"
		}
	else stat.oplQ3.src = "../images/fout.gif"
	}

if (vb != "")
	{
	document.stat.txtvb.value = replace(document.stat.txtvb.value,',','.')
	if (eval(document.stat.txtvb.value) == eval(vb))
		{
		stat.oplvb.src = "../images/goed.gif"
		}
	else stat.oplvb.src = "../images/fout.gif"
	}

if (ika != "")
	{
	document.stat.txtika.value = replace(document.stat.txtika.value,',','.')
	if (eval(document.stat.txtika.value) == eval(ika))
		{
		stat.oplika.src = "../images/goed.gif"
		}
	else stat.oplika.src = "../images/fout.gif"
	}

if (sa != "")
	{
	document.stat.txtsa.value = replace(document.stat.txtsa.value,',','.')
	if (eval(document.stat.txtsa.value) == eval(sa))
		{
		stat.oplsa.src = "../images/goed.gif"
		}
	else stat.oplsa.src = "../images/fout.gif"
	}

document.all.boxplot.style.display=''
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
