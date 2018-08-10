function controle()
{
if (projoef.oef01.value == "F")  projoef.opl01.src = "../images/goed.gif"
else projoef.opl01.src = "../images/fout.gif"
if (projoef.oef02.value == "B")  projoef.opl02.src = "../images/goed.gif"
else projoef.opl02.src = "../images/fout.gif"
if (projoef.oef03.value == "E")  projoef.opl03.src = "../images/goed.gif"
else projoef.opl03.src = "../images/fout.gif"
if (projoef.oef04.value == "B") projoef.opl04.src = "../images/goed.gif"
else projoef.opl04.src = "../images/fout.gif"
if ((projoef.oef05.value == "[EF]") || (projoef.oef05.value == "[FE]"))  projoef.opl05.src = "../images/goed.gif"
else projoef.opl05.src = "../images/fout.gif"
if ((projoef.oef06.value == "[AC]") || (projoef.oef06.value == "[CA]"))  projoef.opl06.src = "../images/goed.gif"
else projoef.opl06.src = "../images/fout.gif"
if (projoef.oef07.value == "{D}")  projoef.opl07.src = "../images/goed.gif"
else projoef.opl07.src = "../images/fout.gif"
if (projoef.oef08.value == "{C}")  projoef.opl08.src = "../images/goed.gif"
else projoef.opl08.src = "../images/fout.gif"
if ((projoef.oef09.value == "[BC]") || (projoef.oef09.value == "[CB]"))  projoef.opl09.src = "../images/goed.gif"
else projoef.opl09.src = "../images/fout.gif"
if (projoef.oef10.value == "{F}") projoef.opl10.src = "../images/goed.gif"
else projoef.opl10.src = "../images/fout.gif"
if ((projoef.oef07.value == "D") || (projoef.oef08.value == "C") || (projoef.oef10.value == "F")) alert('Het beeld van een lijnstuk kan geen punt zijn, wel een singleton. Je bent wellicht accolades vergeten!')
}

