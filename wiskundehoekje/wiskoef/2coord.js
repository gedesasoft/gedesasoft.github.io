function controle()
{
if (co.co01.value == "(2,3)")  co.opl01.src = "../images/goed.gif"
else co.opl01.src = "../images/fout.gif"
if (co.co02.value == "(-4,6)")  co.opl02.src = "../images/goed.gif"
else co.opl02.src = "../images/fout.gif"
if (co.co03.value == "(-7,-2)")  co.opl03.src = "../images/goed.gif"
else co.opl03.src = "../images/fout.gif"
if (co.co04.value == "(5,0)")  co.opl04.src = "../images/goed.gif"
else co.opl04.src = "../images/fout.gif"
if (co.co05.value == "(1,-1)")  co.opl05.src = "../images/goed.gif"
else co.opl05.src = "../images/fout.gif"
if (co.co06.value == "(0,-5)")  co.opl06.src = "../images/goed.gif"
else co.opl06.src = "../images/fout.gif"
if (co.co07.value == "(-8,5)")  co.opl07.src = "../images/goed.gif"
else co.opl07.src = "../images/fout.gif"
if (co.co08.value == "(6,8)")  co.opl08.src = "../images/goed.gif"
else co.opl08.src = "../images/fout.gif"
if (co.co09.value == "(9,-4)")  co.opl09.src = "../images/goed.gif"
else co.opl09.src = "../images/fout.gif"
if (co.co10.value == "(-4,0)")  co.opl10.src = "../images/goed.gif"
else co.opl10.src = "../images/fout.gif"
if (co.co11.value == "(-1,-7)")  co.opl11.src = "../images/goed.gif"
else co.opl11.src = "../images/fout.gif"
}

function controleA()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "A") document.puntA.src ="images/2coord6_3.gif";
}

function controleB()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "B") document.puntB.src ="images/2coord2_1.gif";
}

function controleC()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "C") document.puntC.src ="images/2coord6_5.gif";
}

function controleD()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "D") document.puntD.src ="images/2coord3_2.gif";
}

function controleE()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "E") document.puntE.src ="images/2coord1_4.gif";
}

function controleF()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "F") document.puntF.src ="images/2coord4_2.gif";
}

function controleG()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "G") document.puntG.src ="images/2coord2_5.gif";
}

function controleH()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "H") document.puntH.src ="images/2coord7_6.gif";
}

function controleI()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "I") document.puntI.src ="images/2coord4_6.gif";
}

function controleJ()
{
var oef = document.kiesoef.selecteer.options[document.kiesoef.selecteer.selectedIndex].value;
if (oef == "J") document.puntJ.src ="images/2coord5_1.gif";
}

function wissen()
{
document.puntA.src ="images/2coord6_3leeg.gif";
document.puntB.src ="images/2coord2_1leeg.gif";
document.puntC.src ="images/2coord6_5leeg.gif";
document.puntD.src ="images/2coord3_2leeg.gif";
document.puntE.src ="images/2coord1_4leeg.gif";
document.puntF.src ="images/2coord4_2leeg.gif";
document.puntG.src ="images/2coord2_5leeg.gif";
document.puntH.src ="images/2coord7_6leeg.gif";
document.puntI.src ="images/2coord4_6leeg.gif";
document.puntJ.src ="images/2coord5_1leeg.gif";
}
