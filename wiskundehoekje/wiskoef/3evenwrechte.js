var oplossingenteller = 0
var pogingenteller = 0

function controle()
{
oplossingenteller = 0
pogingenteller = 0

if (rechten.vr01.value == "n") rechten.opl01.value = ""
else
	{
	pogingenteller++
	if (rechten.vr01.value == "g") 
		{
		rechten.opl01.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl01.src = "../images/fout.gif"
	}
	
if (rechten.vr02.value == "n") rechten.opl02.value = ""
else
	{
	pogingenteller++
	if (rechten.vr02.value == "g") 
		{
		rechten.opl02.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl02.src = "../images/fout.gif"
	}

if (rechten.vr03.value == "n") rechten.opl03.value = ""
else
	{
	pogingenteller++
	if (rechten.vr03.value == "g") 
		{
		rechten.opl03.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl03.src = "../images/fout.gif"
	}

if (rechten.vr04.value == "n") rechten.opl04.value = ""
else
	{
	pogingenteller++
	if (rechten.vr04.value == "g") 
		{
		rechten.opl04.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl04.src = "../images/fout.gif"
	}
	
if (rechten.vr05.value == "n") rechten.opl05.value = ""
else
	{
	pogingenteller++
	if (rechten.vr05.value == "g") 
		{
		rechten.opl05.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl05.src = "../images/fout.gif"
	}

if (rechten.vr06.value == "n") rechten.opl06.value = ""
else
	{
	pogingenteller++
	if (rechten.vr06.value == "g") 
		{
		rechten.opl06.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl06.src = "../images/fout.gif"
	}

if (rechten.vr07.value == "n") rechten.opl07.value = ""
else
	{
	pogingenteller++
	if (rechten.vr07.value == "g") 
		{
		rechten.opl07.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl07.src = "../images/fout.gif"
	}

if (rechten.vr08.value == "n") rechten.opl08.value = ""
else
	{
	pogingenteller++
	if (rechten.vr08.value == "g") 
		{
		rechten.opl08.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl08.src = "../images/fout.gif"
	}

if (rechten.vr09.value == "n") rechten.opl09.value = ""
else
	{
	pogingenteller++
	if (rechten.vr09.value == "g") 
		{
		rechten.opl09.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl09.src = "../images/fout.gif"
	}

if (rechten.vr10.value == "n") rechten.opl10.value = ""
else
	{
	pogingenteller++
	if (rechten.vr10.value == "g") 
		{
		rechten.opl10.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl10.src = "../images/fout.gif"
	}

if (rechten.vr11.value == "n") rechten.opl11.value = ""
else
	{
	pogingenteller++
	if (rechten.vr11.value == "g") 
		{
		rechten.opl11.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl11.src = "../images/fout.gif"
	}

if (rechten.vr12.value == "n") rechten.opl12.value = ""
else
	{
	pogingenteller++
	if (rechten.vr12.value == "g") 
		{
		rechten.opl12.src = "../images/goed.gif"
		oplossingenteller++
		}
	else rechten.opl12.src = "../images/fout.gif"
	}

	
	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.rechten.aantaljuist.value = oplossingenteller
	document.rechten.aantalpogingen.value = pogingenteller
	document.rechten.percentage.value = procent		

}

