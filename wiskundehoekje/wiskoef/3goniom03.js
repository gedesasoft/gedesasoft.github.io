function controle()
{
if ((goniomoef.Agr.value == "93") && (goniomoef.Amin.value == "10") && ((goniomoef.Asec.value == "47") || (goniomoef.Asec.value == "48"))) goniomoef.oplA.src = "../images/goed.gif"
else goniomoef.oplA.src = "../images/fout.gif"
if ((goniomoef.Bgr.value == "127") && (goniomoef.Bmin.value == "11") && ((goniomoef.Bsec.value == "5") || (goniomoef.Bsec.value == "05"))) goniomoef.oplB.src = "../images/goed.gif"
else goniomoef.oplB.src = "../images/fout.gif"
if ((goniomoef.Cgr.value == "79") && (goniomoef.Cmin.value == "22") && (goniomoef.Csec.value == "49")) goniomoef.oplC.src = "../images/goed.gif"
else goniomoef.oplC.src = "../images/fout.gif"
if ((goniomoef.Dgr.value == "98") && ((goniomoef.Dmin.value == "7") || (goniomoef.Dmin.value == "07")) && (goniomoef.Dsec.value == "48")) goniomoef.oplD.src = "../images/goed.gif"
else goniomoef.oplD.src = "../images/fout.gif"
if ((goniomoef.Egr.value == "142") && ((goniomoef.Emin.value == "7") || (goniomoef.Emin.value == "07")) && (goniomoef.Esec.value == "30")) goniomoef.oplE.src = "../images/goed.gif"
else goniomoef.oplE.src = "../images/fout.gif"

}

