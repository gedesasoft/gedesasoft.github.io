//enter the message you wish to be shown, including html tags
var message='<img src="images/leeg.gif" border=0 width=110 height=13><a href="info_pienter.htm" target="doel"><img src="../images/info.gif" border=0 width=13 height=13></a><img src="images/leeg.gif" border=0 width=4 height=13><img onClick="verberg()" src="../images/sluiten.gif" border=0 width=13 height=13 alt="Sluiten"><br><a href="http://www.pienter.be/index.php" target="_blank"><img src="../images/logo-pienter.gif" border=0 width=140 height=57 alt="Pienter"></a><br><img src="images/leeg.gif" border=0 width=140 height=13>'

//enter a color name to be used as the background color of the message
var backgroundcolor="30B0BF"

//enter 0 for always display, 1 for a set period, 2 for random display mode
var displaymode=0

//if displaymode is set to display for a set period, enter the period below (1000=1 sec)
var displayduration=10000

//enter 0 for non-flashing message, 1 for flashing
var flashmode=0
//if above is set to flashing, enter the flash-to color below
var flashtocolor="lightgreen"

// begin code Guy

var bron = document.referrer

bron = replace(bron,'www.lutgardiscollege.be','Y')
if (bron.indexOf('Y') != -1) 
	{
	var pad = location.href
	top.location.replace(pad)
//	alert('Deze pagina is geen onderdeel van de website van het Lutgardiscollege, zoals men door het logo hierboven laat uitschijnen.') 
	}



// einde code Guy




function verberg()
{
topmsg.style.visibility="hidden"
}

///////////////do not edit below this line////////////////////////////////////////


function regenerate(){
window.location.reload()
}

var which=0

function regenerate2(){
if (document.layers)
setTimeout("window.onresize=regenerate",400)
}


function display2(){
if (document.layers){
if (topmsg.visibility=="show")
topmsg.visibility="hide"
else
topmsg.visibility="show"
}
else if (document.all){
if (topmsg.style.visibility=="visible")
topmsg.style.visibility="hidden"
else
topmsg.style.visibility="visible"
setTimeout("display2()",Math.round(Math.random()*10000)+10000)
}
}

function flash(){
if (which==0){
if (document.layers)
topmsg.bgColor=flashtocolor
else
topmsg.style.backgroundColor=flashtocolor
which=1
}
else{
if (document.layers)
topmsg.bgColor=backgroundcolor
else
topmsg.style.backgroundColor=backgroundcolor
which=0
}
}


if (document.all){
document.write('<span id="topmsg" style="position:absolute;visibility:hidden">'+message+'</span>')
}


function logoit(){
document.all.topmsg.style.left=document.body.scrollLeft+document.body.clientWidth-document.all.topmsg.offsetWidth-20
document.all.topmsg.style.top=document.body.scrollTop+document.body.clientHeight-document.all.topmsg.offsetHeight-4
}


function logoit2(){
topmsg.left=pageXOffset+window.innerWidth/2-topmsg.document.width/2
topmsg.top=pageYOffset+window.innerHeight-topmsg.document.height-5
setTimeout("logoit2()",90)
}

function setmessage(){
document.all.topmsg.style.left=document.body.scrollLeft+document.body.clientWidth-document.all.topmsg.offsetWidth-20
document.all.topmsg.style.top=document.body.scrollTop+document.body.clientHeight-document.all.topmsg.offsetHeight-4
document.all.topmsg.style.backgroundColor=backgroundcolor
document.all.topmsg.style.visibility="visible"
if (displaymode==1)
setTimeout("topmsg.style.visibility='hidden'",displayduration)
else if (displaymode==2)
display2()
if (flashmode==1)
setInterval("flash()",1000)
window.onscroll=logoit
window.onresize=new Function("window.location.reload()")
}


function setmessage2(){
topmsg=new Layer(window.innerWidth)
topmsg.bgColor=backgroundcolor
regenerate2()
topmsg.document.write(message)
topmsg.document.close()
logoit2()
topmsg.visibility="show"
if (displaymode==1)
setTimeout("topmsg.visibility='hide'",displayduration)
else if (displaymode==2)
display2()
if (flashmode==1)
setInterval("flash()",1000)
}


if (document.layers)
window.onload=setmessage2
else if (document.all)
window.onload=setmessage


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