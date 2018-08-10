var oplossing = "";
var typevariatie = 0;
var typeoefening = 0;
var index1 = 0;
var index2 = 0;

function kiesoef()
{
typeoefening = Math.floor(Math.random() * 7) + 1
}

function kiesvariatie()
{
typevariatie = Math.floor(Math.random() * 2) + 1
}

function toonoef()
{
document.hoeken.txthoek1.value = "";
document.hoeken.txthoek2.value = "";
document.hoeken.txthoek1index.value = "";
document.hoeken.txthoek2index.value = "";

if (typeoefening == "1")
	{
	oplossing = "neven"
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Â";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1.value = "Ê";
		document.hoeken.txthoek2.value = "Ê";
		}
	index1 = Math.floor(Math.random() * 4) + 1
	index2 = index1 + 1
	if (index2 == 5) index2 = 1

	document.hoeken.txthoek1index.value = index1;
	document.hoeken.txthoek2index.value = index2;
	}

if (typeoefening == "2")
	{
	oplossing = "overst"
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Â";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1.value = "Ê";
		document.hoeken.txthoek2.value = "Ê";
		}
	index1 = Math.floor(Math.random() * 4) + 1
	index2 = index1 + 2
	if (index2 == 5) index2 = 1
	if (index2 == 6) index2 = 2
	document.hoeken.txthoek1index.value = index1;
	document.hoeken.txthoek2index.value = index2;
	}
	
if (typeoefening == "3")
	{
	oplossing = "verwbinn"
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Ê";
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1index.value = "3";
		document.hoeken.txthoek2index.value = "4";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1index.value = "4";
		document.hoeken.txthoek2index.value = "1";
		}
	}
	
if (typeoefening == "4")
	{
	oplossing = "binnzelf"
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Ê";
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1index.value = "4";
		document.hoeken.txthoek2index.value = "4";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1index.value = "3";
		document.hoeken.txthoek2index.value = "1";
		}
	}

if (typeoefening == "5")
	{
	oplossing = "verwbuit"
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Ê";
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1index.value = "1";
		document.hoeken.txthoek2index.value = "2";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1index.value = "2";
		document.hoeken.txthoek2index.value = "3";
		}
	}

if (typeoefening == "6")
	{
	oplossing = "buitzelf"
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Ê";
	kiesvariatie()
	if (typevariatie == 1)
		{
		document.hoeken.txthoek1index.value = "1";
		document.hoeken.txthoek2index.value = "3";
		} 
	if (typevariatie == 2)
		{
		document.hoeken.txthoek1index.value = "2";
		document.hoeken.txthoek2index.value = "2";
		}
	}

if (typeoefening == "7")
	{
	oplossing = "overeenk"
		document.hoeken.txthoek1.value = "Â";
		document.hoeken.txthoek2.value = "Ê";
	index1 = Math.floor(Math.random() * 4) + 1
	index2 = index1 - 1
	if (index2 == 0) index2 = 4

	document.hoeken.txthoek1index.value = index1;
	document.hoeken.txthoek2index.value = index2;
	}
	
}

function nieuwoef()
{
oplossing = "";
typevariatie = 0;
typeoefening = 0;
index1 = 0;
index2 = 0;
kiesoef()
toonoef()
document.hoeken.type.options.value ="opnieuw"
document.hoeken.opl.src="../images/vraagteken.gif"
}


function controleer() 
{
var antwoord = document.hoeken.type.options[document.hoeken.type.selectedIndex].value;

if (antwoord == "opnieuw") hoeken.opl.src = "../images/vraagteken.gif"
else

if (oplossing == antwoord) hoeken.opl.src = "../images/goed.gif"
else hoeken.opl.src = "../images/fout.gif";
}
