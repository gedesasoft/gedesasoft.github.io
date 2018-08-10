function controle()
{
oplossingenteller = 0
pogingenteller = 0

if (aantalopgaven >= 1)
{
	pogingenteller++
	if (telpr.vr01.value == antw01)
		{
		telpr.opl01.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl01.src = "../images/fout.gif"
}

if (aantalopgaven >= 2)
{
	pogingenteller++
	if (telpr.vr02.value == antw02)
		{
		telpr.opl02.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl02.src = "../images/fout.gif"
}

if (aantalopgaven >= 3)
{
	pogingenteller++
	if (telpr.vr03.value == antw03)
		{
		telpr.opl03.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl03.src = "../images/fout.gif"
}

if (aantalopgaven >= 4)
{
	pogingenteller++
	if (telpr.vr04.value == antw04)
		{
		telpr.opl04.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl04.src = "../images/fout.gif"
}

if (aantalopgaven >= 5)
{
	pogingenteller++
	if (telpr.vr05.value == antw05)
		{
		telpr.opl05.src = "../images/goed.gif"
		oplossingenteller++
		}
	else telpr.opl05.src = "../images/fout.gif"
}


}

