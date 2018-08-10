var algemaakt = 0
var typeoefening = 0
var typevariatie = 0
var pogingenteller = 0
var oplossingenteller = 0
var opgave = "";
var oplossing = "";
var A = 0;
var B = 0;
var C = 0;
var variatie = 0;

evenwijdig = new Array(51)
evenwijdig[0] = ""
evenwijdig[1] = "AE en DN"
evenwijdig[2] = "KN en FG"
evenwijdig[3] = "BE en GN"
evenwijdig[4] = "DB en LN"
evenwijdig[5] = "DF en HL"
evenwijdig[6] = "BM en AN"
evenwijdig[7] = "HG en LK"
evenwijdig[8] = "BF en EK"
evenwijdig[9] = "EF en CD"
evenwijdig[10] = "CG en GM"
evenwijdig[11] = "EL en DG"
evenwijdig[12] = "BC en EH"
evenwijdig[13] = "BF en GM"
evenwijdig[14] = "BE en KF"
evenwijdig[15] = "BK en CN"
evenwijdig[16] = "EG en KM"
evenwijdig[17] = "AL en MD"
evenwijdig[18] = "CD en KL"
evenwijdig[19] = "LG en ED"
evenwijdig[20] = "AE en AK"
evenwijdig[21] = "KL en AB"
evenwijdig[22] = "AB en MN"
evenwijdig[23] = "FG en AD"
evenwijdig[24] = "AE en vl(GFM)"
evenwijdig[25] = "BF en vl(CDH)"
evenwijdig[26] = "LM en vl(GFK)"
evenwijdig[27] = "HD en vl(ACG)"
evenwijdig[28] = "GM en vl(BDH)"
evenwijdig[29] = "MN en vl(AEL)"
evenwijdig[30] = "GH en vl(DKL)"
evenwijdig[31] = "BE en vl(FGN)"
evenwijdig[32] = "HK en vl(CDF)"
evenwijdig[33] = "LN en vl(DFH)"
evenwijdig[34] = "FK en vl(CHM)"
evenwijdig[35] = "AF en vl(EHL)"
evenwijdig[36] = "EF en vl(ABH)"
evenwijdig[37] = "EF en vl(GKL)"
evenwijdig[38] = "CM en vl(AHK)"
evenwijdig[39] = "CM en vl(BFG)"
evenwijdig[40] = "BC en vl(ADL)"
evenwijdig[41] = "vl(ABE) en vl(GHM)"
evenwijdig[42] = "vl(ACD) en vl(EFG)"
evenwijdig[43] = "vl(CDF) en vl(KLG)"
evenwijdig[44] = "vl(BGL) en vl(DEK)"
evenwijdig[45] = "vl(ADG) en vl(ELM)"
evenwijdig[46] = "AN en vl(CFM)"
evenwijdig[47] = "CL en vl(AEN)"
evenwijdig[48] = "vl(ABH) en vl(EFM)"
evenwijdig[49] = "vl(AFK) en vl(CDM)"
evenwijdig[50] = "vl(BCF) en vl(DKN)"

snijdend = new Array(51)
snijdend[0] = ""
snijdend[1] = "AE en KL"
snijdend[2] = "BE en KL"
snijdend[3] = "AL en EF"
snijdend[4] = "CL en BG"
snijdend[5] = "BH en CE"
snijdend[6] = "GD en CN"
snijdend[7] = "NG en CD"
snijdend[8] = "AN en HK"
snijdend[9] = "DE en KN"
snijdend[10] = "EL en AB"
snijdend[11] = "BN en DH"
snijdend[12] = "DL en BN"
snijdend[13] = "MN en DG"
snijdend[14] = "CL en FB"
snijdend[15] = "GK en CM"
snijdend[16] = "AG en KM"
snijdend[17] = "FN en GK"
snijdend[18] = "FN en HL"
snijdend[19] = "AE en FK"
snijdend[20] = "CF en LM"
snijdend[21] = "AD en EN"
snijdend[22] = "EF en AK"
snijdend[23] = "NG en CM"
snijdend[24] = "BE en vl(KLM)"
snijdend[25] = "EL en vl(ABD)"
snijdend[26] = "BH en vl(AKL)"
snijdend[27] = "EM en vl(ACD)"
snijdend[28] = "AB en vl(EHM)"
snijdend[29] = "CH en vl(ADM)"
snijdend[30] = "FL en vl(CEH)"
snijdend[31] = "CF en vl(HLM)"
snijdend[32] = "AH en vl(FGN)"
snijdend[33] = "DL en vl(ABE)"
snijdend[34] = "EG en vl(BDN)"
snijdend[35] = "EG en vl(HLM)"
snijdend[36] = "BE en vl(GHK)"
snijdend[37] = "DG en vl(ABN)"
snijdend[38] = "CG en vl(BKN)"
snijdend[39] = "EL en vl(BMN)"
snijdend[40] = "EH en vl(AFK)"
snijdend[41] = "vl(ABE) en vl(GHK)"
snijdend[42] = "vl(ACD) en vl(EFN)"
snijdend[43] = "vl(AMN) en vl(CDF)"
snijdend[44] = "vl(ADF) en vl(KLM)"
snijdend[45] = "vl(CDH) en vl(AKM)"
snijdend[46] = "vl(BCE) en vl(DMN)"
snijdend[47] = "vl(GKL) en vl(ABH)"
snijdend[48] = "vl(ABE) en vl(DFG)"
snijdend[49] = "vl(CHM) en vl(BEH)"
snijdend[50] = "vl(AFG) en vl(DLM)"

kruisend = new Array(26)
kruisend[0] = ""
kruisend[1] = "BE en MN"
kruisend[2] = "BE en HD"
kruisend[3] = "KL en CG"
kruisend[4] = "AL en CN"
kruisend[5] = "FH en AK"
kruisend[6] = "LH en BE"
kruisend[7] = "AG en FK"
kruisend[8] = "BD en KN"
kruisend[9] = "AC en KN"
kruisend[10] = "EF en CM"
kruisend[11] = "EF en DM"
kruisend[12] = "HK en BM"
kruisend[13] = "GM en AD"
kruisend[14] = "CL en EN"
kruisend[15] = "DK en BG"
kruisend[16] = "BE en DM"
kruisend[17] = "FK en HM"
kruisend[18] = "CG en BK"
kruisend[19] = "CK en HN"
kruisend[20] = "AG en KH"
kruisend[21] = "EL en CH"
kruisend[22] = "DE en KL"
kruisend[23] = "BG en MN"
kruisend[24] = "LN en CG"
kruisend[25] = "BD en CL"


function kiesoef()
{
typeoefening = Math.floor(Math.random() * 3) + 1;
if (typeoefening == 1)
	{
	oplossing = "ev"
	typevariatie = Math.floor(Math.random() * 50) + 1;
	}
if (typeoefening == 2)
	{
	oplossing = "sn"
	typevariatie = Math.floor(Math.random() * 50) + 1;
	}
if (typeoefening == 3)
	{
	oplossing = "kr"
	typevariatie = Math.floor(Math.random() * 25) + 1;
	}
}

function toonoef()
{
if (oplossing == "ev") opgave = evenwijdig[typevariatie]
if (oplossing == "sn") opgave = snijdend[typevariatie]
if (oplossing == "kr") opgave = kruisend[typevariatie]
document.eigbew.txtopgave.value = opgave;
}

function nieuwoef()
{
algemaakt = 0
oplossing = "";
typeoefening = 0;
kiesoef()
toonoef()
document.eigbew.type.options.value ="opnieuw"
document.eigbew.opl.src = "../images/vraagteken.gif"
}


function controleer() 
{
var antwoord = document.eigbew.type.options[document.eigbew.type.selectedIndex].value;

if (antwoord == "opnieuw") eigbew.opl.src = "../images/vraagteken.gif"
else
{
if (algemaakt == 1) alert('Sorry, maar je antwoord wijzigen mag niet meer.')
else
	{
	pogingenteller++;
	algemaakt = 1
	if (oplossing == antwoord) 
		{
		eigbew.opl.src = "../images/goed.gif"		
		oplossingenteller++;
		}
	else 
		{
		eigbew.opl.src = "../images/fout.gif"
		if (typeoefening == "1") alert ('' + opgave + ' zijn evenwijdig!')
		if (typeoefening == "2") alert ('' + opgave + ' snijden elkaar!')
		if (typeoefening == "3") alert ('' + opgave + ' kruisen elkaar!')
		}
	
	}

	gemiddelde = oplossingenteller / pogingenteller * 100
	procent = Math.round(gemiddelde)
	document.eigbew.aantaljuist.value = oplossingenteller
	document.eigbew.aantalpogingen.value = pogingenteller
	document.eigbew.percentage.value = procent		
}
}
